import {defineArrayMember, defineField, defineType} from 'sanity'

export const quizSection = defineType({
  name: 'quizSection',
  title: 'Quiz de lentes em resina',
  type: 'object',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Exibir quiz',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'eyebrow',
      title: 'Rotulo',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descricao',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Imagem lateral',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'steps',
      title: 'Etapas de perguntas',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quizStep',
          title: 'Etapa do quiz',
          fields: [
            defineField({
              name: 'questions',
              title: 'Perguntas',
              type: 'array',
              validation: (Rule) => Rule.required().min(1),
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'quizQuestion',
                  title: 'Pergunta',
                  fields: [
                    defineField({
                      name: 'question',
                      title: 'Pergunta',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'group',
                      title: 'Grupo logico',
                      type: 'string',
                      description: 'Exemplo: incomodo, resultado, decisao, prioridade.',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'choices',
                      title: 'Opcoes',
                      type: 'array',
                      validation: (Rule) => Rule.required().min(2),
                      of: [defineArrayMember({type: 'string'})],
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'question',
                      subtitle: 'group',
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              questions: 'questions',
            },
            prepare({questions}) {
              return {
                title: `${questions?.length || 0} pergunta(s)`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'initialResultTitle',
      title: 'Titulo inicial do resultado',
      type: 'string',
    }),
    defineField({
      name: 'initialResultText',
      title: 'Texto inicial do resultado',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'cta',
      title: 'CTA do resultado',
      type: 'cta',
    }),
  ],
})
