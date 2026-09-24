import {defineField, defineType} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Caso / transformacao',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'treatment',
      title: 'Tratamento',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Preenchimento Labial', value: 'preenchimento-labial'},
          {title: 'Botox', value: 'botox'},
          {title: 'Lentes em Resina', value: 'lentes-em-resina'},
          {title: 'Lentes Premium', value: 'lentes-premium'},
          {title: 'Gengivoplastia', value: 'gengivoplastia'},
          {title: 'Harmonizacao Facial', value: 'harmonizacao-facial'},
          {title: 'Apoio visual', value: 'apoio-visual'},
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Texto curto',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'targetPage',
      title: 'Pagina de destino',
      type: 'string',
      description: 'Exemplo: /paginas/botox.html',
    }),
    defineField({
      name: 'showInTransformations',
      title: 'Exibir no carrossel de tratamentos',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showInHomeGallery',
      title: 'Exibir na galeria da home',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'treatment',
      media: 'image',
    },
  },
})
