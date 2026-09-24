import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Etapa',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Numero',
      type: 'string',
      description: 'Exemplo: 01',
    }),
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'number',
    },
  },
})
