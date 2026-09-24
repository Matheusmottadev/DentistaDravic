import type {StructureResolver} from 'sanity/structure'

const singletonTypes = new Set(['siteSettings', 'homePage', 'privacyPolicy'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Conteudo')
    .items([
      S.listItem()
        .title('Configuracoes do site')
        .schemaType('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings.main')),
      S.listItem()
        .title('Pagina inicial')
        .schemaType('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage.main')),
      S.listItem()
        .title('Politica de privacidade')
        .schemaType('privacyPolicy')
        .child(S.document().schemaType('privacyPolicy').documentId('privacyPolicy.main')),
      S.divider(),
      S.documentTypeListItem('servicePage').title('Paginas de servico'),
      S.documentTypeListItem('caseStudy').title('Casos / transformacoes'),
      S.documentTypeListItem('testimonial').title('Depoimentos'),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? !singletonTypes.has(id) && !['servicePage', 'caseStudy', 'testimonial'].includes(id) : true
      }),
    ])
