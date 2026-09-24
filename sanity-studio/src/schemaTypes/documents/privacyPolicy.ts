import {defineArrayMember, defineField, defineType} from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Politica de privacidade',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
    }),
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAtLabel',
      title: 'Texto de atualizacao',
      type: 'string',
      description: 'Exemplo: Atualizada em setembro de 2026.',
    }),
    defineField({
      name: 'intro',
      title: 'Texto introdutorio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sections',
      title: 'Secoes',
      type: 'array',
      of: [defineArrayMember({type: 'legalSection'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Politica de privacidade'}
    },
  },
})
