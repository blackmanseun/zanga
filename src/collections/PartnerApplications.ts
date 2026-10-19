import type { CollectionConfig } from 'payload'
import { partnerServices, partnershipTypes, toSelectOptions } from '../forms/options'
import { submissionAccess, submissionStatus } from './submissionFields'

export const PartnerApplications: CollectionConfig = {
  slug: 'partner-applications',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'service', 'partnershipTypes', 'status', 'createdAt'],
    group: 'Submissions',
  },
  access: submissionAccess,
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Work Email',
      type: 'email',
      required: true,
    },
    {
      name: 'jobTitle',
      label: 'Job Title / Role',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Country / Location',
      type: 'text',
      required: true,
    },
    {
      name: 'service',
      label: 'Service interested in',
      type: 'select',
      required: true,
      options: toSelectOptions(partnerServices),
    },
    {
      name: 'partnershipTypes',
      type: 'select',
      hasMany: true,
      required: true,
      options: toSelectOptions(partnershipTypes),
    },
    submissionStatus,
  ],
  timestamps: true,
}
