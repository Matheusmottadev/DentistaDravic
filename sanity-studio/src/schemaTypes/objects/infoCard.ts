import {defineField, defineType} from 'sanity'

export const infoCard = defineType({
  name: 'infoCard',
  title: 'Card informativo',
  type: 'object',
  fields: [
    defineField({
      name: 'iconLabel',
      title: 'Rotulo do icone',
      type: 'string',
      description: 'Texto curto usado no selo visual: Tempo, Resultado, Duracao etc.',
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
      subtitle: 'iconLabel',
    },
  },
})
