import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Chamada / Botao',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Texto do botao',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kind',
      title: 'Tipo',
      type: 'string',
      initialValue: 'whatsapp',
      options: {
        layout: 'radio',
        list: [
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Link interno', value: 'internal'},
          {title: 'Link externo', value: 'external'},
        ],
      },
    }),
    defineField({
      name: 'href',
      title: 'URL ou caminho',
      type: 'string',
      description: 'Para WhatsApp pode ficar vazio, pois o site usa o numero global.',
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Mensagem personalizada do WhatsApp',
      type: 'text',
      rows: 2,
      hidden: ({parent}) => parent?.kind !== 'whatsapp',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'kind',
    },
  },
})
