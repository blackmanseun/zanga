/**
 * Odoo CRM integration for website form submissions.
 *
 * Each submission is mirrored into Odoo as a crm.lead (assigned to the
 * ODOO_NOTIFY_EMAIL salesperson) and a notification email is sent to the
 * commercial inbox through Odoo's own mailer. This is purely additive: any
 * failure here is logged and swallowed so it never breaks the visitor's
 * submission.
 *
 * Uses the Odoo External API over JSON-RPC with plain fetch — no dependency.
 *
 * Configure via environment variables:
 *   ODOO_URL           e.g. https://zanga-african-metrics.odoo.com
 *   ODOO_DB            the Odoo database name
 *   ODOO_USERNAME      the login/email of the integration user
 *   ODOO_API_KEY       an API key (Odoo → Preferences → Account Security → API Keys)
 *   ODOO_NOTIFY_EMAIL  optional; the salesperson leads are assigned to and who
 *                      gets the new-lead email (default commercial@zangametrics.com)
 *
 * When the core vars are not set (e.g. local development), everything is skipped.
 */

const ODOO_URL = process.env.ODOO_URL
const ODOO_DB = process.env.ODOO_DB
const ODOO_USERNAME = process.env.ODOO_USERNAME
const ODOO_API_KEY = process.env.ODOO_API_KEY

const DEFAULT_NOTIFY_EMAIL = 'commercial@zangametrics.com'
const notifyEmail = () => process.env.ODOO_NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL

/**
 * Website leads are created as opportunities so they always appear in the CRM
 * pipeline. Switch to 'lead' only if the "Leads" stage is enabled in Odoo CRM.
 */
const LEAD_TYPE = 'opportunity'

/** One submitted field: its label and value (value may be blank/undefined). */
export type LeadField = [label: string, value: string | undefined]

export type OdooLead = {
  /** The opportunity/lead title shown in the CRM pipeline. */
  name: string
  contactName?: string
  email?: string
  phone?: string
  jobTitle?: string
  company?: string
  /** Every submitted field, in display order — drives both the CRM description and the email. */
  details?: LeadField[]
}

const isConfigured = () => Boolean(ODOO_URL && ODOO_DB && ODOO_USERNAME && ODOO_API_KEY)

/* ------------------------------------------------------------------ *
 * JSON-RPC plumbing
 * ------------------------------------------------------------------ */

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

function executeKw<T>(
  uid: number,
  model: string,
  method: string,
  args: unknown[],
  kwargs: Record<string, unknown> = {},
): Promise<T> {
  return jsonRpc<T>({
    service: 'object',
    method: 'execute_kw',
    args: [ODOO_DB, uid, ODOO_API_KEY, model, method, args, kwargs],
  })
}

/* ------------------------------------------------------------------ *
 * Field / description / email helpers
 * ------------------------------------------------------------------ */

/** The submitted fields that actually have a value, in order. */
const filledFields = (lead: OdooLead): Array<[string, string]> =>
  (lead.details ?? []).filter((row): row is [string, string] => Boolean(row[1] && row[1].trim() !== ''))

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Escapes a value and keeps its line breaks when rendered as HTML. */
const escapeMultiline = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br>')

/** Plain-text version of the full submission, stored on the CRM lead's description. */
const descriptionText = (lead: OdooLead): string | undefined =>
  filledFields(lead)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n') || undefined

/** The notification email body: every submitted field as its own labelled row. */
const notificationBody = (lead: OdooLead): string => {
  const rows = filledFields(lead)
    .map(
      ([label, value]) => `<tr>
        <td style="padding:6px 16px 6px 0;vertical-align:top;color:#6b7280;font-weight:600;white-space:nowrap">${escapeHtml(label)}</td>
        <td style="padding:6px 0;vertical-align:top;color:#111827">${escapeMultiline(value)}</td>
      </tr>`,
    )
    .join('')
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">
      <p>A new enquiry was submitted on the website.</p>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`
}

/** Resolve the notify email to an Odoo user id so leads get assigned. */
async function findSalespersonId(uid: number): Promise<number | undefined> {
  try {
    const ids = await executeKw<number[]>(
      uid,
      'res.users',
      'search',
      [[['login', '=', notifyEmail()]]],
      { limit: 1 },
    )
    return ids[0]
  } catch {
    return undefined
  }
}

/**
 * Emails the commercial inbox about a new lead, using Odoo's outgoing mail
 * server. The record is created in Odoo's mail queue and sent immediately;
 * anything the queue cron doesn't send at once is delivered within ~1 minute.
 */
async function sendLeadNotification(uid: number, lead: OdooLead): Promise<void> {
  const id = await executeKw<number>(uid, 'mail.mail', 'create', [
    {
      subject: `New website lead: ${lead.name}`,
      body_html: notificationBody(lead),
      email_to: notifyEmail(),
      auto_delete: true,
    },
  ])
  // Over JSON-RPC, send() returns null cleanly (no XML-RPC marshalling issue).
  await executeKw(uid, 'mail.mail', 'send', [[id]])
}

/* ------------------------------------------------------------------ *
 * Public entry point
 * ------------------------------------------------------------------ */

/**
 * Create a crm.lead in Odoo and notify the commercial inbox. Never throws: on
 * any failure it logs and returns so a CRM outage can never break a visitor's
 * form submission (the submission is already stored in Payload before this runs).
 */
export async function createOdooLead(lead: OdooLead): Promise<void> {
  if (!isConfigured()) {
    console.warn('Odoo not configured; skipping CRM lead creation.')
    return
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
      partner_name: lead.company,
      description: descriptionText(lead),
    }
    if (userId) values.user_id = userId

    // Drop undefined so Odoo keeps its own defaults for unset fields.
    for (const key of Object.keys(values)) {
      if (values[key] === undefined) delete values[key]
    }

    await executeKw<number>(uid, 'crm.lead', 'create', [values])

    // Notify the commercial inbox. Isolated so a mail failure never undoes the
    // lead that was just created.
    try {
      await sendLeadNotification(uid, lead)
    } catch (error) {
      console.error('Odoo lead created, but notification email failed', error)
    }
  } catch (error) {
    // Reset the cached uid so a stale/expired session re-authenticates next time.
    cachedUid = null
    console.error('Failed to create Odoo CRM lead', error)
  }
}
