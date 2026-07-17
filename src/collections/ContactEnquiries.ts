import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access'

export const ContactEnquiries: CollectionConfig = {
  slug: 'contact-enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
    group: 'Audience',
  },
  access: {
    create: () => true,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Responded', value: 'responded' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
