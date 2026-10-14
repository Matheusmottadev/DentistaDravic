import {defineArrayMember, defineField, defineType} from 'sanity'

const defaultHelpLinks = [
  {_key: 'home', _type: 'navigationItem', label: 'Home', href: '/index.html'},
  {_key: 'duvidas', _type: 'navigationItem', label: 'Dúvidas', href: '/index.html#duvidas'},
  {_key: 'agendar-avaliacao', _type: 'navigationItem', label: 'Agendar avaliação', href: '#whatsapp'},
  {
    _key: 'politica-de-privacidade',
    _type: 'navigationItem',
    label: 'Política de Privacidade',
    href: '/politica-de-privacidade.html',
  },
]

const defaultServiceLinks = [
  {_key: 'lentes-tradicionais', _type: 'navigationItem', label: 'Lentes Tradicionais', href: '/paginas/lentes-em-resina.html'},
  {_key: 'lentes-premium', _type: 'navigationItem', label: 'Lentes Premium', href: '/paginas/lentes-em-porcelana.html'},
  {_key: 'preenchimento-labial', _type: 'navigationItem', label: 'Preenchimento Labial', href: '/paginas/preenchimento-labial.html'},
  {_key: 'gengivoplastia', _type: 'navigationItem', label: 'Gengivoplastia', href: '/paginas/gengivoplastia.html'},
]

const defaultAboutLinks = [
  {_key: 'sobre-a-dra-vitoria', _type: 'navigationItem', label: 'Sobre a Dra. Vitória', href: '/index.html#sobre'},
  {_key: 'consultorio', _type: 'navigationItem', label: 'Consultório', href: '/index.html#consultorio'},
  {_key: 'avaliacoes', _type: 'navigationItem', label: 'Avaliações', href: '/index.html#avaliacoes'},
]

const defaultLegalLinks = [
  {_key: 'instagram', _type: 'navigationItem', label: 'Instagram', href: 'https://www.instagram.com/dra.vitoriapassosv/'},
  {
    _key: 'condicoes-legais-e-privacidade',
    _type: 'navigationItem',
    label: 'Condições Legais e Privacidade',
    href: '/politica-de-privacidade.html',
  },
]

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'helpLinks',
      title: 'Coluna Ajuda',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
      initialValue: defaultHelpLinks,
      validation: (Rule) => Rule.max(5).error('Use no máximo 5 links nesta coluna para o footer continuar compacto.'),
    }),
    defineField({
      name: 'serviceLinks',
      title: 'Coluna Serviços',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
      initialValue: defaultServiceLinks,
      validation: (Rule) => Rule.max(5).error('Use no máximo 5 links nesta coluna para o footer continuar compacto.'),
    }),
    defineField({
      name: 'aboutLinks',
      title: 'Coluna Sobre a Clínica',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
      initialValue: defaultAboutLinks,
      validation: (Rule) => Rule.max(5).error('Use no máximo 5 links nesta coluna para o footer continuar compacto.'),
    }),
    defineField({
      name: 'contact',
      title: 'Coluna Contato',
      type: 'object',
      fields: [
        defineField({name: 'email', title: 'E-mail', type: 'email'}),
        defineField({name: 'whatsappNumber', title: 'Número do WhatsApp', type: 'string'}),
        defineField({name: 'whatsappMessage', title: 'Mensagem padrão do WhatsApp', type: 'text', rows: 2}),
        defineField({name: 'address', title: 'Endereço', type: 'string'}),
        defineField({name: 'postalCode', title: 'CEP', type: 'string'}),
      ],
      initialValue: {
        email: 'vitoriavieira_vic@hotmail.com',
        whatsappNumber: '5511915023134',
        whatsappMessage: 'Olá, vim do site e gostaria de efetuar um agendamento.',
        address: 'Rua Alm. Brasil, 685 - Mooca, São Paulo',
        postalCode: 'CEP 03162-010',
      },
    }),
    defineField({
      name: 'legalLinks',
      title: 'Links da base do footer',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
      initialValue: defaultLegalLinks,
      validation: (Rule) => Rule.max(3).error('Use no máximo 3 links na base do footer.'),
    }),
    defineField({
      name: 'country',
      title: 'País',
      type: 'string',
      initialValue: 'Brasil',
    }),
    defineField({
      name: 'addressLine',
      title: 'Endereço completo da base',
      type: 'string',
      initialValue: 'Rua Alm. Brasil, 685 - Mooca, São Paulo, CEP 03162-010',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
})
