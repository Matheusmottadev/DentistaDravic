import {defineField, defineType} from 'sanity'

export const externalImage = defineType({
  name: 'externalImage',
  title: 'Imagem externa',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL da imagem',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
