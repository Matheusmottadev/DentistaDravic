import {createReadStream, readFileSync} from 'node:fs'
import {basename, resolve} from 'node:path'
import {createClient} from '@sanity/client'

for (const line of readFileSync(new URL('../.env', import.meta.url), 'utf8').split(/\n/)) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) process.env[match[1].trim()] = match[2].trim()
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '5soy3b7c'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Defina SANITY_AUTH_TOKEN com um token de escrita do Sanity.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-09-23',
  useCdn: false,
})

const repoRoot = resolve(new URL('../../', import.meta.url).pathname)
const uploadCache = new Map()

function key(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)
}

async function uploadedImage(filePath, alt) {
  const absolute = filePath.startsWith('/') ? filePath : resolve(repoRoot, filePath)
  if (!uploadCache.has(absolute)) {
    const filename = basename(absolute)
    const existing = await client.fetch(
      '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id',
      {filename},
    )
    if (existing) {
      uploadCache.set(absolute, existing)
    } else {
      const asset = await client.assets.upload('image', createReadStream(absolute), {filename})
      uploadCache.set(absolute, asset._id)
    }
  }

  return {
    _type: 'imageWithAlt',
    asset: {_type: 'reference', _ref: uploadCache.get(absolute)},
    alt,
  }
}

async function item({id, title, caption, path, targetPage}) {
  return {
    _type: 'carouselItem',
    _key: key(id || `${title}-${path}`),
    title,
    caption,
    targetPage,
    hint: 'Clique e saiba mais',
    image: await uploadedImage(path, `${title} - resultado de tratamento`),
  }
}

function range(length, makePath) {
  return Array.from({length}, (_, index) => makePath(String(index + 1).padStart(2, '0'), index))
}

const preenchimentoItems = [
  {
    id: 'labios-finos',
    title: 'Lábios finos',
    caption: 'Preenchimento para dar presença aos lábios com naturalidade.',
    path: '/Users/matheus/Downloads/Picflow Images Oct 12/d4.webp',
  },
  {
    id: 'perda-de-contorno',
    title: 'Perda de contorno',
    caption: 'Definição do desenho labial sem pesar o resultado.',
    path: '/Users/matheus/Downloads/Picflow Images Oct 12/d8.webp',
  },
  {
    id: 'assimetria-labial',
    title: 'Assimetria labial',
    caption: 'Correção visual de pequenas diferenças entre os lados.',
    path: '/Users/matheus/Downloads/Picflow Images Oct 12/d7.webp',
  },
  {
    id: 'ressecamento-e-textura',
    title: 'Ressecamento e textura',
    caption: 'Aspecto mais hidratado, viçoso e com acabamento delicado.',
    path: '/Users/matheus/Downloads/Picflow Images Oct 12/d3.webp',
  },
  {
    id: 'volume-sutil',
    title: 'Volume sutil',
    caption: 'Mais volume com proporção, equilíbrio e naturalidade.',
    path: '/Users/matheus/Downloads/Picflow Images Oct 12/d9.webp',
  },
]

const tradicionaisItems = range(12, (number) => ({
  id: `tradicionais-${number}`,
  title: 'Lentes Tradicionais',
  caption: 'Caso real com foco em forma, cor, proporção e acabamento natural.',
  path: `astro-site/public/assets/images/real/lentes-tradicionais/carrossel/tradicionais-carrossel-${number}.webp`,
  targetPage: '/paginas/lentes-em-resina.html',
}))

tradicionaisItems[8].path =
  'astro-site/public/assets/images/real/lentes-tradicionais/carrossel/tradicionais-carrossel-09-macro.webp'

const premiumItems = range(12, (number) => ({
  id: `premium-${number}`,
  title: 'Lentes Premium',
  caption: 'Caso real com acabamento premium, brilho, proporção e naturalidade.',
  path: `astro-site/public/assets/images/real/lentes-premium/carrossel/premium-carrossel-${number}.webp`,
  targetPage: '/paginas/lentes-em-porcelana.html',
}))

const gengivoplastiaItems = [
  {
    id: 'gengivoplastia-01',
    title: 'Gengivoplastia',
    caption: 'Antes e depois com contorno gengival mais equilibrado e sorriso em evidência.',
    path: 'astro-site/public/assets/images/real/gengivoplastia/carrossel/gengivoplastia-carrossel-01.webp',
    targetPage: '/paginas/gengivoplastia.html',
  },
  {
    id: 'gengivoplastia-02',
    title: 'Gengivoplastia',
    caption: 'Resultado em detalhe lateral com proporção gengival mais harmônica.',
    path: 'astro-site/public/assets/images/real/gengivoplastia/carrossel/gengivoplastia-carrossel-02.webp',
    targetPage: '/paginas/gengivoplastia.html',
  },
  {
    id: 'gengivoplastia-03',
    title: 'Gengivoplastia',
    caption: 'Limpeza e gengivoplastia com resultado imediato.',
    path: 'astro-site/public/assets/images/real/gengivoplastia/carrossel/gengivoplastia-carrossel-03.webp',
    targetPage: '/paginas/gengivoplastia.html',
  },
  {
    id: 'gengivoplastia-04',
    title: 'Gengivoplastia',
    caption: 'Evolução antes, durante e depois do contorno gengival.',
    path: 'astro-site/public/assets/images/real/gengivoplastia/carrossel/gengivoplastia-carrossel-04.webp',
    targetPage: '/paginas/gengivoplastia.html',
  },
  {
    id: 'gengivoplastia-05',
    title: 'Gengivoplastia',
    caption: 'Resultado após 15 dias de gengivoplastia com sorriso mais proporcional.',
    path: 'astro-site/public/assets/images/real/gengivoplastia/carrossel/gengivoplastia-carrossel-05.webp',
    targetPage: '/paginas/gengivoplastia.html',
  },
]

const harmonizacaoItems = [
  {
    id: 'harmonizacao-01',
    title: 'Harmonização Facial',
    caption: 'Planejamento facial com foco em equilíbrio e naturalidade.',
    path: 'astro-site/public/assets/images/real/botox-caso-1.png',
    targetPage: '/paginas/harmonizacao-facial.html',
  },
  {
    id: 'harmonizacao-02',
    title: 'Harmonização Facial',
    caption: 'Resultado pensado para valorizar os traços sem exageros.',
    path: 'astro-site/public/assets/images/real/botox-caso-2.png',
    targetPage: '/paginas/harmonizacao-facial.html',
  },
]

const serviceConfigs = {
  'service.preenchimento-labial': {
    eyebrow: 'Preenchimento Labial',
    title: 'Casos reais de preenchimento labial com naturalidade.',
    text: 'Veja possibilidades de contorno, hidratação, simetria e volume sutil.',
    items: preenchimentoItems,
  },
  'service.lentes-em-resina': {
    eyebrow: 'Lentes Tradicionais',
    title: 'Casos reais de Lentes Tradicionais com resultado leve, claro e natural.',
    text: 'Veja transformações em resina com foco em proporção, cor, acabamento delicado e harmonia do sorriso.',
    items: tradicionaisItems,
  },
  'service.lentes-premium': {
    eyebrow: 'Lentes Premium',
    title: 'Transformações reais com acabamento premium, brilho e naturalidade.',
    text: 'Veja diferentes casos de lentes premium em closes e antes e depois, com foco em proporção, cor e harmonia do sorriso.',
    items: premiumItems,
  },
  'service.gengivoplastia': {
    eyebrow: 'Gengivoplastia',
    title: 'Casos reais de gengivoplastia com contorno mais harmônico.',
    text: 'Veja resultados com proporção gengival mais equilibrada e sorriso em destaque.',
    items: gengivoplastiaItems,
  },
  'service.harmonizacao-facial': {
    eyebrow: 'Harmonização Facial',
    title: 'Resultados com equilíbrio facial e naturalidade.',
    text: 'Veja possibilidades de planejamento facial com foco em proporção, leveza e expressão natural.',
    items: harmonizacaoItems,
  },
}

const homeItems = [
  tradicionaisItems[0],
  premiumItems[0],
  preenchimentoItems[0],
  gengivoplastiaItems[0],
]

async function patchDocument(documentId, section) {
  const documentIds = await client.fetch(
    '*[_id in [$published, $draft]]._id',
    {published: documentId, draft: `drafts.${documentId}`},
  )

  for (const id of documentIds.length ? documentIds : [documentId]) {
    await client
      .patch(id)
      .set({
        'transformationsSection.enabled': true,
        'transformationsSection.eyebrow': section.eyebrow,
        'transformationsSection.title': section.title,
        'transformationsSection.text': section.text,
        'transformationsSection.items': await Promise.all(
          section.items.map((entry) => item({...entry, targetPage: entry.targetPage || '/paginas/preenchimento-labial.html'})),
        ),
        'transformationsSection.cases': [],
      })
      .commit()
    console.log(`ok ${id}`)
  }
}

for (const [documentId, section] of Object.entries(serviceConfigs)) {
  await patchDocument(documentId, section)
}

const homeIds = await client.fetch('*[_id in ["homePage.main", "drafts.homePage.main"]]._id')
for (const id of homeIds.length ? homeIds : ['homePage.main']) {
  await client
    .patch(id)
    .set({
      'treatmentsSection.items': await Promise.all(homeItems.map((entry) => item(entry))),
    })
    .commit()
  console.log(`ok ${id}`)
}

console.log('Carrosséis atualizados com as mídias corretas.')
