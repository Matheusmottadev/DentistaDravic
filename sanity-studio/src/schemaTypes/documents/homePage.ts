import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'HomePage',
  type: 'document',
  fields: [
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
          title: 'Diferenciais',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (Rule) => Rule.max(5).error('Use no máximo 5 diferenciais para manter o hero equilibrado no desktop e no mobile.'),
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
          validation: (Rule) => Rule.max(12).error('Use no máximo 12 itens para o carrossel manter boa performance.'),
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
        defineField({
          name: 'paragraphs',
          title: 'Textos',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 3})],
          validation: (Rule) => Rule.max(4).error('Use no máximo 4 blocos de texto nesta seção.'),
        }),
        defineField({name: 'portrait', title: 'Foto', type: 'imageWithAlt'}),
        defineField({name: 'signature', title: 'Assinatura', type: 'imageWithAlt'}),
        defineField({
          name: 'credentials',
          title: 'Credenciais',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (Rule) => Rule.max(4).error('Use no máximo 4 credenciais para não apertar a composição.'),
        }),
      ],
    }),
    defineField({
      name: 'consultorio',
      title: 'Consultorio',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Rotulo', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({
          name: 'text',
          title: 'Texto',
          type: 'text',
          rows: 8,
          description: 'Para criar mais de um paragrafo, pule uma linha dentro deste campo.',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Vídeo',
          type: 'string',
          description: 'Escolha um vídeo disponível na pasta assets/videos do site.',
          options: {
            list: [
              {title: 'Consultório', value: '/assets/videos/consultorio.mp4'},
            ],
            layout: 'dropdown',
          },
        }),
        defineField({name: 'image', title: 'Poster / imagem fallback', type: 'imageWithAlt'}),
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
          validation: (Rule) => Rule.max(8).error('Use no máximo 8 depoimentos destacados para o carrossel ficar leve.'),
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
        defineField({
          name: 'steps',
          title: 'Etapas',
          type: 'array',
          description: 'Esta seção foi desenhada para exatamente 3 etapas. Mais itens mudam a composição no desktop.',
          of: [defineArrayMember({type: 'processStep'})],
          validation: (Rule) => Rule.min(3).max(3).error('Use exatamente 3 etapas para preservar o layout da seção.'),
        }),
        defineField({name: 'closingText', title: 'Texto final', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'stickyGallery',
      title: 'Galeria sticky',
      type: 'object',
      fields: [
        defineField({
          name: 'cases',
          title: 'Casos/imagens',
          type: 'array',
          description: 'A galeria sticky usa exatamente 11 posições visuais.',
          of: [defineArrayMember({type: 'reference', to: [{type: 'caseStudy'}]})],
          validation: (Rule) => Rule.min(11).max(11).error('Use exatamente 11 casos/imagens para preencher a galeria sem sobras.'),
        }),
        defineField({
          name: 'ctaBlock',
          title: 'Bloco CTA da galeria',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Titulo', type: 'text', rows: 3}),
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
      validation: (Rule) => Rule.max(8).error('Use no máximo 8 perguntas para manter a seção fácil de navegar.'),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'HomePage'}
    },
  },
})
