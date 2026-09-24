import {defineField, defineType} from 'sanity'

export const mythItem = defineType({
  name: 'mythItem',
  title: 'Mito ou verdade',
  type: 'object',
  fields: [
    defineField({
      name: 'kind',
      title: 'Tipo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          {title: 'Mito', value: 'mito'},
          {title: 'Verdade', value: 'verdade'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Frase',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Explicacao',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'kind',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle === 'verdade' ? 'VERDADE' : 'MITO',
      }
    },
  },
})
