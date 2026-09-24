import {defineField, defineType} from 'sanity'

export const navigationItem = defineType({
  name: 'navigationItem',
  title: 'Item de navegacao',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Texto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
})
