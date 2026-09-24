import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '5soy3b7c'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Defina SANITY_AUTH_TOKEN com um token de escrita do Sanity antes de rodar a limpeza.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-09-23',
  useCdn: false,
})

const docs = await client.fetch(`*[
  _type in ["siteSettings", "homePage", "privacyPolicy", "servicePage"] &&
  (defined(seo.ogImage) || defined(defaultSeo.ogImage))
]._id`)

for (const id of docs) {
  await client
    .patch(id)
    .unset(['seo.ogImage', 'defaultSeo.ogImage'])
    .commit()

  console.log(`ok ${id}`)
}

console.log(`Limpeza concluida: ${docs.length} documentos atualizados.`)
