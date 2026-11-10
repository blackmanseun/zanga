/**
 * Minimal Odoo JSON-RPC client used to mirror website form submissions into the
 * Zanga Odoo CRM as crm.lead records. Uses the External API over /jsonrpc so it
 * needs no extra dependency (plain fetch).
 *
 * Credentials come from the environment:
 *   ODOO_URL           e.g. https://zanga-african-metrics.odoo.com
 *   ODOO_DB            database name
 *   ODOO_USERNAME      a user login with CRM access
 *   ODOO_API_KEY       that user's API key (used as the password)
 *   ODOO_NOTIFY_EMAIL  login of the salesperson leads are assigned to (optional)
 */

const ODOO_URL = process.env.ODOO_URL
const ODOO_DB = process.env.ODOO_DB
const ODOO_USERNAME = process.env.ODOO_USERNAME
const ODOO_API_KEY = process.env.ODOO_API_KEY
const ODOO_NOTIFY_EMAIL = process.env.ODOO_NOTIFY_EMAIL

/**
 * Website leads are created as opportunities so they always appear in the CRM
 * pipeline. Switch to 'lead' only if the "Leads" stage is enabled in Odoo CRM.
 */
const LEAD_TYPE = 'opportunity'

export type OdooLead = {
  /** Opportunity / lead title shown in the pipeline. */
  name: string
  contactName?: string
  email?: string
  phone?: string
  /** Job title / role → crm.lead.function */
  jobTitle?: string
  /** Free-text notes shown on the lead. */
  description?: string
}

const isConfigured = () =>
  Boolean(ODOO_URL && ODOO_DB && ODOO_USERNAME && ODOO_API_KEY)

type JsonRpcParams = {
  service: 'common' | 'object'
  method: string
  args: unknown[]
}

async function jsonRpc<T>(params: JsonRpcParams): Promise<T> {
  const response = await fetch(`${ODOO_URL}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', method: 'call', params }),
  })

  if (!response.ok) {
    throw new Error(`Odoo responded with HTTP ${response.status}`)
  }

  const payload = (await response.json()) as {
    result?: T
    error?: { message?: string; data?: { message?: string } }
  }

  if (payload.error) {
    const detail = payload.error.data?.message || payload.error.message || 'Unknown Odoo error'
    throw new Error(`Odoo RPC error: ${detail}`)
  }

  return payload.result as T
}

let cachedUid: number | null = null

async function authenticate(): Promise<number> {
  if (cachedUid) return cachedUid
  const uid = await jsonRpc<number | false>({
    service: 'common',
    method: 'authenticate',
    args: [ODOO_DB, ODOO_USERNAME, ODOO_API_KEY, {}],
  })
  if (!uid) {
    throw new Error('Odoo authentication failed — check ODOO_USERNAME / ODOO_API_KEY')
  }
  cachedUid = uid
  return uid
}

function executeKw<T>(uid: number, model: string, method: string, args: unknown[], kwargs: Record<string, unknown> = {}): Promise<T> {
  return jsonRpc<T>({
    service: 'object',
    method: 'execute_kw',
    args: [ODOO_DB, uid, ODOO_API_KEY, model, method, args, kwargs],
  })
}

/** Resolve the configured notify email to an Odoo user id so leads get assigned. */
async function findSalespersonId(uid: number): Promise<number | undefined> {
  if (!ODOO_NOTIFY_EMAIL) return undefined
  try {
    const ids = await executeKw<number[]>(
      uid,
      'res.users',
      'search',
      [[['login', '=', ODOO_NOTIFY_EMAIL]]],
      { limit: 1 },
    )
    return ids[0]
  } catch {
    return undefined
  }
}

/**
 * Create a crm.lead in Odoo. Never throws: on any failure it logs and returns
 * null so that a CRM outage can never break a visitor's form submission (the
 * submission is already stored in Payload before this runs).
 */
export async function createCrmLead(lead: OdooLead): Promise<number | null> {
  if (!isConfigured()) {
    console.warn('Odoo is not configured; skipping CRM lead creation')
    return null
  }

  try {
    const uid = await authenticate()
    const userId = await findSalespersonId(uid)

    const values: Record<string, unknown> = {
      name: lead.name,
      type: LEAD_TYPE,
      contact_name: lead.contactName,
      email_from: lead.email,
      phone: lead.phone,
      function: lead.jobTitle,
      description: lead.description,
    }
    if (userId) values.user_id = userId

    // Drop undefined so Odoo keeps its own defaults.
    for (const key of Object.keys(values)) {
      if (values[key] === undefined) delete values[key]
    }

    const id = await executeKw<number>(uid, 'crm.lead', 'create', [values])
    return id
  } catch (error) {
    // Reset the cached uid so a stale/expired session re-authenticates next time.
    cachedUid = null
    console.error('Failed to create Odoo CRM lead', error)
    return null
  }
}
