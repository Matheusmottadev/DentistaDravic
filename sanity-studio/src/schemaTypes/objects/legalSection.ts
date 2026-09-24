import {defineField, defineType} from 'sanity'

export const legalSection = defineType({
  name: 'legalSection',
  title: 'Secao legal',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
