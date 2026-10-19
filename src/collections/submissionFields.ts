import type { CollectionConfig, Field } from 'payload'
import { isAdmin } from '../access'

/** Submissions are created by the site's server actions; only admins can see or manage them. */
export const submissionAccess: CollectionConfig['access'] = {
  create: isAdmin,
  read: isAdmin,
  update: isAdmin,
  delete: isAdmin,
}

export const submissionStatus: Field = {
  name: 'status',
  type: 'select',
  required: true,
  defaultValue: 'new',
  options: [
    { label: 'New', value: 'new' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Closed', value: 'closed' },
  ],
  admin: {
    position: 'sidebar',
  },
}
