import {defineField, defineType} from 'sanity'

const destinationOptions = [
  {title: 'Home', value: '/index.html'},
  {title: 'Dúvidas frequentes', value: '/index.html#duvidas'},
  {title: 'Agendar pelo WhatsApp', value: '#whatsapp'},
  {title: 'Sobre a Dra. Vitória', value: '/index.html#sobre'},
  {title: 'Consultório', value: '/index.html#consultorio'},
  {title: 'Avaliações', value: '/index.html#avaliacoes'},
  {title: 'Lentes Tradicionais', value: '/paginas/lentes-em-resina.html'},
  {title: 'Lentes Premium', value: '/paginas/lentes-em-porcelana.html'},
  {title: 'Preenchimento Labial', value: '/paginas/preenchimento-labial.html'},
  {title: 'Gengivoplastia', value: '/paginas/gengivoplastia.html'},
  {title: 'Política de Privacidade', value: '/politica-de-privacidade.html'},
  {title: 'Instagram', value: 'https://www.instagram.com/dra.vitoriapassosv/'},
  {title: 'Link personalizado', value: 'custom'},
]

const destinationLabels = Object.fromEntries(
  destinationOptions.map((option) => [option.value, option.title]),
)

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
      title: 'Destino',
      type: 'string',
      description: 'Escolha para onde esse item deve levar. Use "Link personalizado" somente quando nao existir uma opcao pronta.',
      options: {
        list: destinationOptions,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customHref',
      title: 'Link personalizado',
      type: 'string',
      description: 'Cole aqui o link completo quando o destino escolhido for "Link personalizado".',
      hidden: ({parent}) => parent?.href !== 'custom',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {href?: string} | undefined
          return parent?.href === 'custom' && !value ? 'Informe o link personalizado.' : true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
      customHref: 'customHref',
    },
    prepare({title, subtitle, customHref}) {
      return {
        title,
        subtitle: subtitle === 'custom' ? customHref : destinationLabels[subtitle] || subtitle,
      }
    },
  },
})
