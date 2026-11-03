'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { HONEYPOT_FIELD, toOptionValue } from './options'
import { createOdooLead, type OdooLead } from './odoo'

export type FormResult = { ok: true } | { ok: false; error: string }

const GENERIC_ERROR = 'Something went wrong sending your details. Please try again in a moment.'

const text = (formData: FormData, name: string) => {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

/** Empty strings become undefined so optional fields are left unset rather than failing validation. */
const optional = (value: string) => value || undefined

const option = (formData: FormData, name: string) => optional(toOptionValue(text(formData, name)))

const isBot = (formData: FormData) => text(formData, HONEYPOT_FIELD) !== ''

async function save(
  collection: 'demo-requests' | 'partner-applications' | 'contact-enquiries' | 'report-requests',
  data: Record<string, unknown>,
  lead?: OdooLead,
): Promise<FormResult> {
  try {
    const payload = await getPayload({ config })
    await payload.create({ collection, data: data as never })
  } catch (error) {
    console.error(`Failed to save ${collection} submission`, error)
    return { ok: false, error: GENERIC_ERROR }
  }

  // Additive: push the enquiry into Odoo CRM. Never fails the submission.
  if (lead) await createOdooLead(lead)
  return { ok: true }
}

export async function submitDemoRequest(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  const fullName = text(formData, 'fullName')
  return save(
    'demo-requests',
    {
      fullName,
      email: text(formData, 'email'),
      phone: optional(text(formData, 'phone')),
      jobTitle: text(formData, 'jobTitle'),
      location: text(formData, 'location'),
      explore: option(formData, 'explore'),
      organisationSize: option(formData, 'organisationSize'),
      message: optional(text(formData, 'message')),
    },
    {
      name: `Demo request — ${fullName}`,
      contactName: fullName,
      email: text(formData, 'email'),
      phone: optional(text(formData, 'phone')),
      jobTitle: text(formData, 'jobTitle'),
      details: [
        ['Full name', fullName],
        ['Work email', optional(text(formData, 'email'))],
        ['Phone', optional(text(formData, 'phone'))],
        ['Job title / role', optional(text(formData, 'jobTitle'))],
        ['Country / Location', optional(text(formData, 'location'))],
        ['Looking to explore', optional(text(formData, 'explore'))],
        ['Organisation size', optional(text(formData, 'organisationSize'))],
        ['Message', optional(text(formData, 'message'))],
      ],
    },
  )
}

export async function submitPartnerApplication(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  const fullName = text(formData, 'fullName')
  const partnershipTypes = formData
    .getAll('partnershipTypes')
    .filter((value): value is string => typeof value === 'string')
  return save(
    'partner-applications',
    {
      fullName,
      email: text(formData, 'email'),
      jobTitle: text(formData, 'jobTitle'),
      location: text(formData, 'location'),
      service: option(formData, 'service'),
      partnershipTypes: partnershipTypes.map(toOptionValue),
    },
    {
      name: `Partner application — ${fullName}`,
      contactName: fullName,
      email: text(formData, 'email'),
      jobTitle: text(formData, 'jobTitle'),
      details: [
        ['Full name', fullName],
        ['Work email', optional(text(formData, 'email'))],
        ['Job title / role', optional(text(formData, 'jobTitle'))],
        ['Country / Location', optional(text(formData, 'location'))],
        ['Service of interest', optional(text(formData, 'service'))],
        ['Partnership types', optional(partnershipTypes.join(', '))],
      ],
    },
  )
}

export async function submitReportRequest(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  const email = text(formData, 'email')
  return save(
    'report-requests',
    { email },
    {
      name: `Report request — ${email}`,
      email,
      details: [
        ['Work email', email],
        ['Request', 'Requested the Big Data Report via the website.'],
      ],
    },
  )
}

export async function submitContactEnquiry(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  const firstName = text(formData, 'firstName')
  const lastName = text(formData, 'lastName')
  return save(
    'contact-enquiries',
    {
      firstName,
      lastName: optional(lastName),
      email: text(formData, 'email'),
      organisation: optional(text(formData, 'organisation')),
      reason: option(formData, 'reason'),
      message: text(formData, 'message'),
    },
    {
      name: `Contact enquiry — ${[firstName, lastName].filter(Boolean).join(' ')}`,
      contactName: [firstName, lastName].filter(Boolean).join(' '),
      email: text(formData, 'email'),
      company: optional(text(formData, 'organisation')),
      details: [
        ['First name', firstName],
        ['Last name', optional(lastName)],
        ['Email', optional(text(formData, 'email'))],
        ['Organisation', optional(text(formData, 'organisation'))],
        ['Reason for enquiry', optional(text(formData, 'reason'))],
        ['Message', optional(text(formData, 'message'))],
      ],
    },
  )
}
