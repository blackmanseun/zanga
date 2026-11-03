import Odoo from 'odoo-await'

/**
 * Sends form submissions into Odoo CRM as leads, in addition to saving them in
 * the Payload CMS collection, and emails a notification to the commercial inbox
 * through Odoo's own mailer. This is purely additive: any failure here is logged
 * and swallowed so it never breaks the visitor's submission.
 *
 * Configure via environment variables:
 *   ODOO_URL           e.g. https://zanga-african-metrics.odoo.com
 *   ODOO_DB            the Odoo database name
 *   ODOO_USERNAME      the login/email of the integration user
 *   ODOO_API_KEY       an API key (Odoo → Preferences → Account Security → API Keys)
 *   ODOO_PORT          optional; defaults to 443 for https URLs, 8069 otherwise
 *   ODOO_NOTIFY_EMAIL  optional; who gets the new-lead email (default commercial@zangametrics.com)
 *
 * When the core vars are not set (e.g. local development), everything is skipped.
 */

const DEFAULT_NOTIFY_EMAIL = 'commercial@zangametrics.com'

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

/** Drop undefined/empty values so Odoo keeps its own defaults for unset fields. */
const clean = (data: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined && value !== ''))

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
    .map(([label, value]) => `<tr>
        <td style="padding:6px 16px 6px 0;vertical-align:top;color:#6b7280;font-weight:600;white-space:nowrap">${escapeHtml(label)}</td>
        <td style="padding:6px 0;vertical-align:top;color:#111827">${escapeMultiline(value)}</td>
      </tr>`)
    .join('')
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">
      <p>A new enquiry was submitted on the website.</p>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`
}

/**
 * Emails the commercial inbox about a new lead, using Odoo's outgoing mail server.
 * The record is created in Odoo's mail queue; we also try to send it immediately.
 * Odoo's XML-RPC serialiser throws on the (None) return of send(), but the email
 * has already gone out by then, so that specific error is ignored. Anything the
 * queue cron doesn't send immediately is delivered within ~1 minute regardless.
 */
async function sendLeadNotification(odoo: Odoo, lead: OdooLead): Promise<void> {
  const to = process.env.ODOO_NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL
  const id = (await odoo.create('mail.mail', {
    subject: `New website lead: ${lead.name}`,
    body_html: notificationBody(lead),
    email_to: to,
    auto_delete: true,
  })) as number
  try {
    await odoo.execute_kw('mail.mail', 'send', [[id]])
  } catch {
    // send() returns None, which Odoo's XML-RPC layer cannot marshal; the mail
    // is sent before that error, and the queue cron covers anything left over.
  }
}

export async function createOdooLead(lead: OdooLead): Promise<void> {
  const baseUrl = process.env.ODOO_URL
  const db = process.env.ODOO_DB
  const username = process.env.ODOO_USERNAME
  const apiKey = process.env.ODOO_API_KEY

  if (!baseUrl || !db || !username || !apiKey) {
    console.warn('Odoo not configured; skipping CRM lead creation.')
    return
  }

  try {
    const defaultPort = baseUrl.startsWith('https') ? 443 : 8069
    const odoo = new Odoo({
      baseUrl,
      port: process.env.ODOO_PORT ? Number(process.env.ODOO_PORT) : defaultPort,
      db,
      username,
      password: apiKey,
    })

    await odoo.connect()
    await odoo.create(
      'crm.lead',
      clean({
        name: lead.name,
        contact_name: lead.contactName,
        email_from: lead.email,
        phone: lead.phone,
        function: lead.jobTitle,
        partner_name: lead.company,
        description: descriptionText(lead),
      }),
    )

    // Notify the commercial inbox. Isolated so a mail failure never undoes the
    // lead that was just created.
    try {
      await sendLeadNotification(odoo, lead)
    } catch (error) {
      console.error('Odoo lead created, but notification email failed', error)
    }
  } catch (error) {
    console.error('Failed to create Odoo CRM lead', error)
  }
}
