import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Pagina inicial',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Titulo', type: 'text', rows: 2, validation: (Rule) => Rule.required()}),
        defineField({name: 'lead', title: 'Texto de apoio', type: 'text', rows: 3}),
        defineField({name: 'primaryCta', title: 'CTA principal', type: 'cta'}),
        defineField({name: 'secondaryCta', title: 'CTA secundario', type: 'cta'}),
        defineField({name: 'image', title: 'Imagem', type: 'imageWithAlt'}),
        defineField({
          name: 'highlights',
          title: 'Diferenciais desktop',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({
          name: 'mobileHighlights',
          title: 'Destaques mobile',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Titulo', type: 'string'}),
                defineField({name: 'text', title: 'Texto', type: 'text', rows: 2}),
              ],
              preview: {select: {title: 'title', subtitle: 'text'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'treatmentsSection',
      title: 'Secao tratamentos',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Rotulo', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'text', title: 'Texto', type: 'text', rows: 3}),
        defineField({
          name: 'items',
          title: 'Itens do carrossel',
          type: 'array',
          description: 'Lista independente da home. Altere aqui as imagens, textos e links exibidos no carrossel de tratamentos da pagina inicial.',
          of: [defineArrayMember({type: 'carouselItem'})],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Sobre a Dra. Vitoria',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Rotulo', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'paragraphs', title: 'Textos', type: 'array', of: [defineArrayMember({type: 'text', rows: 3})]}),
        defineField({name: 'portrait', title: 'Foto', type: 'imageWithAlt'}),
        defineField({name: 'signature', title: 'Assinatura', type: 'imageWithAlt'}),
        defineField({name: 'credentials', title: 'Credenciais', type: 'array', of: [defineArrayMember({type: 'string'})]}),
      ],
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews/depoimentos',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'text', title: 'Texto', type: 'text', rows: 3}),
        defineField({name: 'buildingImage', title: 'Imagem do predio', type: 'imageWithAlt'}),
        defineField({name: 'badgeText', title: 'Texto do selo', type: 'string'}),
        defineField({name: 'cta', title: 'CTA avaliacoes', type: 'cta'}),
        defineField({
          name: 'testimonials',
          title: 'Depoimentos destacados',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'testimonial'}]})],
        }),
      ],
    }),
    defineField({
      name: 'journey',
      title: 'Como funciona a avaliacao',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Rotulo', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'text', title: 'Texto', type: 'text', rows: 3}),
        defineField({name: 'steps', title: 'Etapas', type: 'array', of: [defineArrayMember({type: 'processStep'})]}),
        defineField({name: 'closingText', title: 'Texto final', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'stickyGallery',
      title: 'Galeria sticky',
      type: 'object',
      fields: [
        defineField({name: 'cases', title: 'Casos/imagens', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'caseStudy'}]})]}),
        defineField({
          name: 'ctaBlock',
          title: 'Bloco CTA da galeria',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Titulo', type: 'string'}),
            defineField({name: 'text', title: 'Texto', type: 'text', rows: 2}),
            defineField({name: 'cta', title: 'Botao', type: 'cta'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [defineArrayMember({type: 'faqItem'})],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Pagina inicial'}
    },
  },
})
