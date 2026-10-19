/** Choices shared by the site forms and the CMS collections that store their submissions. */

export const explorationOptions = [
  'Hire Better People',
  'Develop Stronger Leaders',
  'Build High-Performing Teams',
  'Improve Engagement & Retention',
  'Strengthen Succession Planning',
  'Listen to Stakeholders',
  'Make Better Investment & Lending Decisions',
  "I'm not sure yet",
]

export const organisationSizes = [
  '1–49 employees',
  '50–199 employees',
  '200–499 employees',
  '500–999 employees',
  '1,000+ employees',
]

export const partnerServices = [
  'Leadership Assessments',
  'Psychometric Assessments',
  'Workforce Analytics',
  'Employee Engagement Surveys',
  'Leadership Development, Training & Coaching',
  'Other / Not sure',
]

export const partnershipTypes = [
  'Coach / Practitioner',
  'Referral Partner',
  'Reseller / Franchise',
  'White Label',
  'Technology Partner',
  'Research Partner',
  'Not sure yet',
]

export const contactReasons = [
  'I want to explore coaching solutions for my organisation',
  "I'm interested in joining the Zanga coach network",
  "I'd like to request the Big Data Report briefing",
  'I want to explore a partnership opportunity',
  'I have a general enquiry',
]

/** Name of the hidden field real visitors never fill in; bots that do are quietly ignored. */
export const HONEYPOT_FIELD = 'website'

/** Turns a form label into the value stored in the CMS, e.g. 'Improve Engagement & Retention' → 'improve-engagement-and-retention'. */
export const toOptionValue = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const toSelectOptions = (labels: string[]) =>
  labels.map((label) => ({ label, value: toOptionValue(label) }))
