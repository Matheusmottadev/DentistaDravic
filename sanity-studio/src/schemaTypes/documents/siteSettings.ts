import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuracoes do site',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nome da marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerLogo',
      title: 'Logo do header',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Logo do footer',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'navigation',
      title: 'Menu principal',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
    }),
    defineField({
      name: 'contact',
      title: 'Contato',
      type: 'object',
      fields: [
        defineField({name: 'email', title: 'E-mail', type: 'email'}),
        defineField({name: 'whatsappNumber', title: 'Numero do WhatsApp', type: 'string'}),
        defineField({name: 'whatsappMessage', title: 'Mensagem padrao do WhatsApp', type: 'text', rows: 2}),
        defineField({name: 'address', title: 'Endereco', type: 'string'}),
        defineField({name: 'postalCode', title: 'CEP', type: 'string'}),
        defineField({name: 'taxId', title: 'CNPJ', type: 'string'}),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Redes sociais e links externos',
      type: 'object',
      fields: [
        defineField({name: 'instagramUrl', title: 'Instagram', type: 'url'}),
        defineField({name: 'googleReviewsUrl', title: 'Link de avaliacoes Google', type: 'url'}),
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Texto do footer',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cookieBanner',
      title: 'Banner de cookies',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'text', title: 'Texto', type: 'text', rows: 3}),
        defineField({name: 'acceptLabel', title: 'Botao aceitar', type: 'string'}),
        defineField({name: 'rejectLabel', title: 'Botao recusar', type: 'string'}),
      ],
    }),
    defineField({
      name: 'defaultSeo',
      title: 'SEO padrao',
      type: 'seoFields',
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
    },
  },
})
