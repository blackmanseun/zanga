'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { HONEYPOT_FIELD, toOptionValue } from './options'
import { createCrmLead } from '@/lib/odoo'

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
): Promise<FormResult> {
  try {
    const payload = await getPayload({ config })
    await payload.create({ collection, data: data as never })
    return { ok: true }
  } catch (error) {
    console.error(`Failed to save ${collection} submission`, error)
    return { ok: false, error: GENERIC_ERROR }
  }
}

export async function submitDemoRequest(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }

  const result = await save('demo-requests', {
    fullName: text(formData, 'fullName'),
    email: text(formData, 'email'),
    phone: optional(text(formData, 'phone')),
    jobTitle: text(formData, 'jobTitle'),
    location: text(formData, 'location'),
    explore: option(formData, 'explore'),
    organisationSize: option(formData, 'organisationSize'),
    message: optional(text(formData, 'message')),
  })

  // Mirror the request into Odoo CRM. createCrmLead never throws, so a CRM
  // outage cannot turn a saved submission into an error for the visitor.
  if (result.ok) {
    const fullName = text(formData, 'fullName')
    const explore = text(formData, 'explore')
    const organisationSize = text(formData, 'organisationSize')
    const location = text(formData, 'location')
    const message = text(formData, 'message')

    const description = [
      'Source: Website — Book a Demo',
      explore && `Wants to explore: ${explore}`,
      organisationSize && `Organisation size: ${organisationSize}`,
      location && `Country / Location: ${location}`,
      message && `\nMessage:\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    await createCrmLead({
      name: `Demo request — ${fullName || text(formData, 'email')}`,
      contactName: fullName,
      email: text(formData, 'email'),
      phone: optional(text(formData, 'phone')),
      jobTitle: text(formData, 'jobTitle'),
      description,
    })
  }

  return result
}

export async function submitPartnerApplication(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  return save('partner-applications', {
    fullName: text(formData, 'fullName'),
    email: text(formData, 'email'),
    jobTitle: text(formData, 'jobTitle'),
    location: text(formData, 'location'),
    service: option(formData, 'service'),
    partnershipTypes: formData
      .getAll('partnershipTypes')
      .filter((value): value is string => typeof value === 'string')
      .map(toOptionValue),
  })
}

export async function submitReportRequest(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  return save('report-requests', {
    email: text(formData, 'email'),
  })
}

export async function submitContactEnquiry(formData: FormData): Promise<FormResult> {
  if (isBot(formData)) return { ok: true }
  return save('contact-enquiries', {
    firstName: text(formData, 'firstName'),
    lastName: optional(text(formData, 'lastName')),
    email: text(formData, 'email'),
    organisation: optional(text(formData, 'organisation')),
    reason: option(formData, 'reason'),
    message: text(formData, 'message'),
  })
}
