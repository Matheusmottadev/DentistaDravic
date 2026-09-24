import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '5soy3b7c'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Defina SANITY_AUTH_TOKEN com um token de escrita do Sanity antes de rodar a migracao.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-09-23',
  useCdn: false,
})

function key(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || Math.random().toString(36).slice(2)
}

function toCarouselItem(item) {
  return {
    _type: 'carouselItem',
    _key: key(item._id || item.title),
    title: item.title,
    caption: item.caption,
    targetPage: item.targetPage,
    hint: 'Clique e saiba mais',
    image: item.image,
  }
}

const caseFields = `
  _id,
  title,
  caption,
  targetPage,
  image {
    ...,
    asset
  }
`

const data = await client.fetch(`{
  "home": *[_type == "homePage"][0]{_id},
  "homeCases": *[_type == "caseStudy" && showInTransformations == true] | order(_createdAt asc)[0...7] {
    ${caseFields}
  },
  "services": *[_type == "servicePage"] {
    _id,
    title,
    transformationsSection {
      cases[]->{
        ${caseFields}
      }
    }
  }
}`)

if (data.home?._id && data.homeCases?.length) {
  await client
    .patch(data.home._id)
    .set({'treatmentsSection.items': data.homeCases.map(toCarouselItem)})
    .commit()
  console.log(`ok homePage ${data.home._id}`)
}

for (const service of data.services || []) {
  const sourceCases = service.transformationsSection?.cases?.length
    ? service.transformationsSection.cases
    : data.homeCases

  if (!service._id || !sourceCases?.length) continue

  await client
    .patch(service._id)
    .set({'transformationsSection.items': sourceCases.map(toCarouselItem)})
    .commit()
  console.log(`ok servicePage ${service._id} (${service.title})`)
}

console.log('Migracao dos carrosseis concluida.')
