import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access'

export const NewsletterSubscribers: CollectionConfig = {
  slug: 'newsletter-subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['firstName', 'lastName', 'email', 'createdAt'],
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
      type: 'email',
      required: true,
      unique: true,
    },
  ],
}
