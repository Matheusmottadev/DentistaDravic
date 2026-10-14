import type {StructureResolver} from 'sanity/structure'

const singleton = (
  S: Parameters<StructureResolver>[0],
  title: string,
  schemaType: string,
  documentId: string,
  itemId = documentId,
) =>
  S.listItem()
    .id(itemId)
    .title(title)
    .schemaType(schemaType)
    .child(S.document().id(itemId).title(title).schemaType(schemaType).documentId(documentId))

const servicePage = (
  S: Parameters<StructureResolver>[0],
  title: string,
  documentId: string,
  itemId: string,
) =>
  S.listItem()
    .id(itemId)
    .title(title)
    .schemaType('servicePage')
    .child(S.document().id(itemId).title(title).schemaType('servicePage').documentId(documentId))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Conteúdo')
    .items([
      singleton(S, 'Homepage', 'homePage', 'homePage.main', 'homepage'),
      servicePage(S, 'Lentes Tradicionais', 'service.lentes-em-resina', 'lentes-tradicionais'),
      servicePage(S, 'Lentes Premium', 'service.lentes-premium', 'lentes-premium'),
      servicePage(S, 'Preenchimento Labial', 'service.preenchimento-labial', 'preenchimento-labial'),
      servicePage(S, 'Gengivoplastia', 'service.gengivoplastia', 'gengivoplastia'),
      singleton(S, 'Política de Privacidade', 'privacyPolicy', 'privacyPolicy.main', 'politica-de-privacidade'),
      singleton(S, 'Footer', 'footerSettings', 'footerSettings.main', 'footer'),
      singleton(S, 'Configurações do site', 'siteSettings', 'siteSettings.main', 'siteSettings'),
    ])
