import {defineField, defineType} from 'sanity'

export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(180),
    }),
    defineField({
      name: 'canonicalPath',
      title: 'Canonical',
      type: 'string',
      description: 'Exemplo: /paginas/botox.html',
    }),
  ],
})
