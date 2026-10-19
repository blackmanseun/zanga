import type { CollectionConfig } from 'payload'
import { contactReasons, toSelectOptions } from '../forms/options'
import { submissionAccess, submissionStatus } from './submissionFields'

export const ContactEnquiries: CollectionConfig = {
  slug: 'contact-enquiries',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['firstName', 'lastName', 'email', 'reason', 'status', 'createdAt'],
    group: 'Submissions',
  },
  access: submissionAccess,
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Work Email',
      type: 'email',
      required: true,
    },
    {
      name: 'organisation',
      type: 'text',
    },
    {
      name: 'reason',
      label: 'Reason for Contact',
      type: 'select',
      options: toSelectOptions(contactReasons),
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    submissionStatus,
  ],
  timestamps: true,
}
