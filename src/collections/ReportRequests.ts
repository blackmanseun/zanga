import type { CollectionConfig } from 'payload'
import { submissionAccess } from './submissionFields'

export const ReportRequests: CollectionConfig = {
  slug: 'report-requests',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'report', 'status', 'createdAt'],
    group: 'Submissions',
  },
  access: submissionAccess,
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'report',
      type: 'text',
      required: true,
      defaultValue: 'The Africa Workforce Report',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Not sent yet', value: 'pending' },
        { label: 'Report sent', value: 'sent' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
