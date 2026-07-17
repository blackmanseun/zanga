import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrEditor } from '../access'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'linkedinUrl',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 99,
      admin: {
        description: 'Controls display order — lower numbers appear first.',
        position: 'sidebar',
      },
    },
  ],
}
