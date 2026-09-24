import {defineField, defineType} from 'sanity'

export const areaCard = defineType({
  name: 'areaCard',
  title: 'Card de area / indicacao',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta sobre a imagem',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'image',
      title: 'Imagem no Sanity',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'externalImage',
      title: 'Imagem externa atual',
      type: 'externalImage',
      description: 'Use apenas enquanto a imagem ainda nao foi enviada para o Sanity.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
      media: 'image',
    },
  },
})
