import type { CollectionConfig } from 'payload'
import { explorationOptions, organisationSizes, toSelectOptions } from '../forms/options'
import { submissionAccess, submissionStatus } from './submissionFields'

export const DemoRequests: CollectionConfig = {
  slug: 'demo-requests',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'explore', 'organisationSize', 'status', 'createdAt'],
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
      name: 'phone',
      type: 'text',
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
      name: 'explore',
      label: 'What they want to explore',
      type: 'select',
      required: true,
      options: toSelectOptions(explorationOptions),
    },
    {
      name: 'organisationSize',
      type: 'select',
      required: true,
      options: toSelectOptions(organisationSizes),
    },
    {
      name: 'message',
      label: 'What they are looking to solve',
      type: 'textarea',
    },
    submissionStatus,
  ],
  timestamps: true,
}
