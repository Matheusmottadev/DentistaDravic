import {defineField, defineType} from 'sanity'

export const carouselItem = defineType({
  name: 'carouselItem',
  title: 'Item do carrossel',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Texto',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetPage',
      title: 'Link ao clicar',
      type: 'string',
      description: 'Exemplo: /paginas/botox.html. Deixe vazio se o card nao precisar abrir outra pagina.',
    }),
    defineField({
      name: 'hint',
      title: 'Texto do link',
      type: 'string',
      initialValue: 'Clique e saiba mais',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'caption',
      media: 'image',
    },
  },
})
