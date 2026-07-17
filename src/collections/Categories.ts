import type { CollectionConfig, FieldHook } from 'payload'
import { isAdmin, isAdminOrEditor } from '../access'

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const slugFromName: FieldHook = ({ value, data, operation }) => {
  if (operation === 'create' && data?.name) {
    return toSlug(data.name as string)
  }
  return value
}

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
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
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from name on create.',
      },
      hooks: {
        beforeValidate: [slugFromName],
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
