import {createReadStream} from 'node:fs'
import {resolve} from 'node:path'
import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '5soy3b7c'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Defina SANITY_AUTH_TOKEN com um token de escrita do Sanity antes de rodar o seed.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-09-23',
  useCdn: false,
})

const root = resolve(process.cwd(), '..')
const imageCache = new Map()

function key(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || Math.random().toString(36).slice(2)
}

function block(text) {
  return {
    _type: 'block',
    _key: key(text).slice(0, 12),
    style: 'normal',
    markDefs: [],
    children: [{_type: 'span', _key: `${key(text).slice(0, 8)}-span`, text, marks: []}],
  }
}

function ref(_ref) {
  return {_type: 'reference', _key: key(_ref), _ref}
}

async function image(path, alt, caption) {
  const absolute = resolve(root, path)
  if (!imageCache.has(absolute)) {
    const asset = await client.assets.upload('image', createReadStream(absolute), {
      filename: absolute.split('/').at(-1),
    })
    imageCache.set(absolute, asset._id)
  }

  return {
    _type: 'imageWithAlt',
    asset: {_type: 'reference', _ref: imageCache.get(absolute)},
    alt,
    ...(caption ? {caption} : {}),
  }
}

const whatsappCta = (label = 'Agendar avaliação') => ({
  _type: 'cta',
  label,
  kind: 'whatsapp',
  whatsappMessage: 'Olá, vim do site e gostaria de efetuar um agendamento.',
})

const instagramCta = (label = 'Ver Instagram') => ({
  _type: 'cta',
  label,
  kind: 'instagram',
  href: 'https://www.instagram.com/dra.vitoriapassosv/',
})

const navigation = [
  {label: 'Lentes em Resina', href: '/paginas/lentes-em-resina.html'},
  {label: 'Lentes Premium', href: '/paginas/lentes-em-porcelana.html'},
  {label: 'Botox', href: '/paginas/botox.html'},
  {label: 'Preenchimento Labial', href: '/paginas/preenchimento-labial.html'},
  {label: 'Gengivoplastia', href: '/paginas/gengivoplastia.html'},
].map((item) => ({_type: 'navigationItem', _key: key(item.label), ...item}))

const testimonials = [
  ['testimonial.suelen-rios', 'Suelen Rios', 'Eu tinha um problema muito sério com meu sorriso, afetava muito minha autoestima e por indicação de uma amiga fui conhecer a Dra. Vitória. Saí de lá maravilhada com a experiência, ela arrasou muito no trabalho, estou apaixonada e super indico!! Só vão!'],
  ['testimonial.vitoria-gabriella', 'Vitoria Gabriella', 'Dra Vitória muito bem preparada, sempre cuidadosa e atenciosa! Onde ela vai eu vou, não troco por nada. A melhor que temos, nota 10 desde o atendimento virtual e presencial até o tratamento. Amo essa equipe.'],
  ['testimonial.debora-alves', 'Debora Alves', 'Antes de fazer o procedimento não gostava da estética dos meus dentes, depois que coloquei as lentes tudo mudou. Hoje posso sorrir, a Dra. Vitória foi a responsável por esse novo sorriso. Mãos de fada.'],
  ['testimonial.jennyfer-valerini', 'Jennyfer Valerini', 'Amei as lentes, a Dra realçou 100% da minha autoestima, fiquei muito feliz. O atendimento dela é maravilhoso, super simpática, mão leve e maravilhosa no que faz!'],
  ['testimonial.julia-kamilly', 'Julia Kamilly', 'Fui atendida pela Dra. Vitória e fiquei extremamente satisfeita com o atendimento! Ela foi super atenciosa, explicou tudo com clareza e me passou muita confiança. O resultado do tratamento foi impecável! Recomendo muito!'],
  ['testimonial.ronaldo-baptista', 'Ronaldo Baptista', 'Excelente atendimento, Dra muito simpática e profissional! Recomendo o serviço prestado de olhos fechados!'],
]

const cases = [
  ['case.preenchimento-labial', 'Preenchimento Labial', 'preenchimento-labial', 'assets/images/real/preenchimento-labial-caso.jpg', 'Antes e depois com contorno, equilíbrio e acabamento natural.', '/paginas/preenchimento-labial.html', true],
  ['case.botox-1', 'Botox', 'botox', 'assets/images/real/botox-caso-1.png', 'Suavização das linhas com resultado leve e expressão preservada.', '/paginas/botox.html', true],
  ['case.lentes-resina-1', 'Lentes em Resina', 'lentes-em-resina', 'assets/images/real/lentes-caso-1.jpg', 'Transformação do sorriso com brilho, forma e naturalidade.', '/paginas/lentes-em-resina.html', true],
  ['case.lentes-resina-gengivoplastia', 'Lentes em Resina + Gengivoplastia', 'lentes-em-resina', 'assets/images/real/lentes-caso-2.jpg', 'Lentes em resina e gengivoplastia para mais simetria e um sorriso sofisticado.', '/paginas/lentes-em-resina.html', true],
  ['case.lentes-premium', 'Lentes Premium', 'lentes-premium', 'assets/images/real/lentes-premium.jpg', 'Transformação premium do sorriso com estética clara, brilho e acabamento natural.', '/paginas/lentes-em-porcelana.html', true],
  ['case.gengivoplastia', 'Gengivoplastia', 'gengivoplastia', 'assets/images/real/gengivoplastia-caso.jpg', 'Contorno gengival mais harmônico para destacar o sorriso.', '/paginas/gengivoplastia.html', true],
  ['case.botox-2', 'Botox', 'botox', 'assets/images/real/botox-caso-2.png', 'Mais leveza na testa e leitura facial mais descansada.', '/paginas/botox.html', true],
  ['case.gengivoplastia-hero', 'Antes e depois de gengivoplastia', 'gengivoplastia', 'assets/images/real/gengivoplastia-hero-antes-depois.png', 'Antes e depois de gengivoplastia.', '/paginas/gengivoplastia.html', true],
  ['case.lentes-detalhe', 'Detalhes de lentes dentárias', 'apoio-visual', 'assets/images/real/lentes-o-que-muda.png', 'Detalhes de transformação com lentes dentárias.', '/paginas/lentes-em-resina.html', true],
  ['case.lips-smile', 'Sorriso e lábios harmonizados', 'apoio-visual', 'assets/images/real/lips-smile.jpg', 'Detalhe de sorriso e lábios harmonizados.', '/paginas/preenchimento-labial.html', true],
]

const serviceSeeds = [
  {
    id: 'service.botox',
    title: 'Botox',
    slug: 'botox',
    serviceKey: 'botox',
    seoTitle: 'Botox | Dra. Vitória Passos',
    seoDescription: 'Botox com Dra. Vitória Passos em São Paulo para suavizar linhas de expressão, preservar a naturalidade do rosto e valorizar a harmonia facial.',
    eyebrow: 'BOTOX FACIAL',
    heroTitle: 'Expressão natural.',
    emphasis: 'Resultado elegante.',
    description: 'Botox aplicado com precisão técnica e sensibilidade estética para suavizar marcas de expressão sem perder a naturalidade do seu rosto.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    tags: ['Sem cirurgia', 'Resultado em até 15 dias', 'Procedimento rápido'],
    badge: {number: '500+', label: 'procedimentos realizados'},
    infoCards: [
      ['Tempo', '30 minutos', 'Duração média do procedimento, sem necessidade de internação ou recuperação longa.'],
      ['Resultado', 'Resultado em 15 dias', 'O efeito completo aparece gradualmente, de forma natural e progressiva.'],
      ['Duração', 'Dura de 4 a 6 meses', 'A manutenção é simples e, com o tempo, os resultados tendem a durar mais.'],
      ['Segurança', 'Procedimento seguro', 'Aprovado pela ANVISA, aplicado por profissional habilitada com CRO ativo.'],
    ],
    areas: {
      eyebrow: 'ÁREAS TRATADAS',
      title: 'Onde o Botox pode\ntransformar seu resultado.',
      cards: [
        ['Testa', 'Linhas frontais', 'Suaviza as rugas horizontais da testa causadas por expressões repetitivas.', 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80'],
        ['Olhos', 'Pés de galinha', 'Trata as linhas ao redor dos olhos que aparecem ao sorrir ou franzir.', 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80'],
        ['Glabela', 'Linhas entre as sobrancelhas', 'Elimina a aparência de carrancudo, trazendo leveza ao olhar.', 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&q=80'],
        ['Pescoço', 'Pescoço e mandíbula', 'Relaxa o músculo masseter e suaviza bandas no pescoço.', 'https://images.unsplash.com/photo-1574480658-ca30f7bded6c?w=500&q=80'],
      ],
    },
    myths: [
      ['mito', 'Botox deixa o rosto parado e sem expressão', 'Quando aplicado corretamente e na dose ideal, o Botox preserva os movimentos naturais do rosto.'],
      ['verdade', 'Botox pode prevenir novas rugas', 'Ao relaxar os músculos que causam as linhas de expressão, o Botox ajuda a prevenir que novas rugas se aprofundem.'],
      ['mito', 'Botox é só para quem já tem muitas rugas', 'O Botox preventivo pode ser indicado antes de rugas profundas, sempre após avaliação individual.'],
      ['verdade', 'O procedimento é rápido e sem internação', 'A aplicação é feita em consultório, dura em média 30 minutos e não exige repouso prolongado.'],
    ],
    faq: [
      ['O Botox dói?', 'O desconforto é mínimo, com agulhas finas e aplicação rápida.'],
      ['Quando verei o resultado?', 'Os primeiros efeitos aparecem entre 3 e 5 dias, com resultado completo em aproximadamente 15 dias.'],
      ['Com que frequência devo repetir?', 'A manutenção costuma ser indicada a cada 4 a 6 meses.'],
    ],
  },
  {
    id: 'service.gengivoplastia',
    title: 'Gengivoplastia',
    slug: 'gengivoplastia',
    serviceKey: 'gengivoplastia',
    seoTitle: 'Gengivoplastia | Dra. Vitória Passos',
    seoDescription: 'Gengivoplastia com Dra. Vitória Passos para harmonizar o contorno gengival e valorizar o sorriso com precisão.',
    eyebrow: 'GENGIVOPLASTIA',
    heroTitle: 'Mais harmonia para o sorriso.',
    emphasis: 'Contorno preciso.',
    description: 'A gengivoplastia remodela o contorno gengival para equilibrar proporções e destacar o sorriso com naturalidade.',
    imagePath: 'assets/images/real/gengivoplastia-hero-antes-depois.png',
    tags: ['Contorno gengival', 'Planejamento estético', 'Recuperação rápida'],
    badge: {number: '2-4', label: 'semanas para resultado final'},
    infoCards: [
      ['Precisão', 'Remodelação delicada', 'A gengiva é remodelada para valorizar a proporção do sorriso.'],
      ['Indicação', 'Sorriso gengival', 'Pode ser indicada quando há excesso ou assimetria no contorno gengival.'],
      ['Resultado', 'Mais simetria', 'O resultado revela dentes com proporção mais equilibrada.'],
    ],
    faq: [
      ['Gengivoplastia dói?', 'O procedimento é feito com anestesia local para mais conforto.'],
      ['A recuperação é demorada?', 'A cicatrização costuma evoluir em poucos dias, com resultado final em algumas semanas.'],
      ['Posso combinar com lentes?', 'Sim. Muitas vezes a gengivoplastia é planejada junto às lentes para melhorar a proporção do sorriso.'],
    ],
  },
  {
    id: 'service.harmonizacao-facial',
    title: 'Harmonização Facial',
    slug: 'harmonizacao-facial',
    serviceKey: 'harmonizacao-facial',
    seoTitle: 'Harmonização Facial | Dra. Vitória Passos',
    seoDescription: 'Harmonização facial com Dra. Vitória Passos para equilibrar traços, suavizar sinais e valorizar a beleza natural.',
    eyebrow: 'HARMONIZAÇÃO FACIAL',
    heroTitle: 'Equilíbrio facial com naturalidade.',
    emphasis: 'Sem exageros.',
    description: 'Procedimentos estéticos planejados para valorizar seus traços e preservar sua expressão natural.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80',
    tags: ['Planejamento facial', 'Resultado natural', 'Procedimentos combinados'],
    infoCards: [
      ['Avaliação', 'Plano personalizado', 'A indicação considera proporção facial, sorriso, pele e objetivos.'],
      ['Combinação', 'Tratamentos integrados', 'Pode envolver botox, preenchimento e outros recursos estéticos.'],
      ['Naturalidade', 'Resultado elegante', 'O foco é harmonizar sem descaracterizar seu rosto.'],
    ],
    processEnabled: true,
    faq: [
      ['O que entra na harmonização facial?', 'Depende da avaliação. Pode envolver botox, preenchimentos e outros procedimentos estéticos.'],
      ['O resultado fica artificial?', 'O planejamento é feito para preservar naturalidade e expressão.'],
      ['Dá para fazer tudo no mesmo dia?', 'Alguns procedimentos podem ser combinados, mas isso depende da avaliação clínica.'],
    ],
  },
  {
    id: 'service.lentes-premium',
    title: 'Lentes Premium',
    slug: 'lentes-em-porcelana',
    serviceKey: 'lentes-premium',
    seoTitle: 'Lentes Premium | Dra. Vitória Passos',
    seoDescription: 'Lentes Premium com Dra. Vitória Passos em São Paulo para transformar o sorriso com planejamento estético, naturalidade e sofisticação.',
    eyebrow: 'LENTES PREMIUM',
    heroTitle: 'Um sorriso mais claro, alinhado e sofisticado.',
    emphasis: 'Planejamento premium.',
    description: 'As Lentes Premium transformam cor, forma e tamanho dos dentes com acabamento sofisticado, alta durabilidade e resultado natural.',
    imagePath: 'assets/images/real/lentes-premium.jpg',
    tags: ['Alta durabilidade', 'Planejamento digital', 'Resultado sofisticado'],
    infoCards: [
      ['Estética', 'Transformação completa', 'Indicada para mudanças de cor, formato, tamanho e harmonia do sorriso.'],
      ['Planejamento', 'Digital Smile Design', 'O novo sorriso é planejado antes da execução para alinhar expectativa e resultado.'],
      ['Acabamento', 'Natural e premium', 'Busca brilho, proporção e acabamento refinado.'],
    ],
    faq: [
      ['Qual a diferença para lentes em resina?', 'As Lentes Premium têm acabamento e durabilidade superiores, com planejamento mais sofisticado.'],
      ['Posso aprovar antes?', 'O planejamento permite visualizar e alinhar o resultado antes da execução.'],
      ['Pode combinar com gengivoplastia?', 'Sim. A combinação pode melhorar ainda mais a proporção do sorriso.'],
    ],
  },
  {
    id: 'service.lentes-em-resina',
    title: 'Lentes em Resina',
    slug: 'lentes-em-resina',
    serviceKey: 'lentes-em-resina',
    seoTitle: 'Lentes em Resina | Dra. Vitória Passos',
    seoDescription: 'Lentes em resina com Dra. Vitória Passos para transformar formato, brilho e harmonia do sorriso com resultado natural.',
    eyebrow: 'LENTES EM RESINA',
    heroTitle: 'Transforme seu sorriso com leveza.',
    emphasis: 'Resultado natural.',
    description: 'As lentes em resina são indicadas para melhorar formato, cor e proporção dos dentes com planejamento personalizado.',
    imagePath: 'assets/images/real/lentes-caso-1.jpg',
    tags: ['Transformação rápida', 'Planejamento personalizado', 'Sorriso natural'],
    infoCards: [
      ['Forma', 'Mais harmonia', 'Ajusta formato, tamanho e proporção dos dentes.'],
      ['Brilho', 'Sorriso renovado', 'Melhora a aparência estética com acabamento natural.'],
      ['Planejamento', 'Indicação individual', 'Cada sorriso é avaliado antes da indicação.'],
    ],
    quiz: true,
    faq: [
      ['Lentes em resina desgastam os dentes?', 'A indicação depende do caso. A avaliação define a abordagem mais conservadora possível.'],
      ['Quanto tempo dura?', 'A durabilidade depende de cuidados, manutenção e hábitos individuais.'],
      ['Fica natural?', 'Sim, quando planejado com proporção, forma e cor adequadas ao rosto.'],
    ],
  },
  {
    id: 'service.preenchimento-labial',
    title: 'Preenchimento Labial',
    slug: 'preenchimento-labial',
    serviceKey: 'preenchimento-labial',
    seoTitle: 'Preenchimento Labial | Dra. Vitória Passos',
    seoDescription: 'Preenchimento labial com Dra. Vitória Passos para contorno, hidratação e volume com resultado natural.',
    eyebrow: 'PREENCHIMENTO LABIAL',
    heroTitle: 'Lábios com contorno e equilíbrio.',
    emphasis: 'Sem exageros.',
    description: 'O preenchimento labial valoriza formato, contorno e volume dos lábios respeitando sua harmonia facial.',
    imagePath: 'assets/images/real/preenchimento-labial-caso.jpg',
    tags: ['Contorno', 'Volume natural', 'Harmonização labial'],
    infoCards: [
      ['Contorno', 'Mais definição', 'Realça o desenho dos lábios com sutileza.'],
      ['Volume', 'Resultado equilibrado', 'A quantidade é planejada para respeitar sua face.'],
      ['Hidratação', 'Aspecto renovado', 'Ajuda a melhorar textura e aparência dos lábios.'],
    ],
    faq: [
      ['O preenchimento fica exagerado?', 'O objetivo é respeitar sua harmonia facial e manter naturalidade.'],
      ['Quanto tempo dura?', 'A duração varia conforme organismo, produto e hábitos.'],
      ['Dá para corrigir assimetrias?', 'Sim, em muitos casos o planejamento ajuda a equilibrar pequenas assimetrias.'],
    ],
  },
]

async function buildDocs() {
  const heroImage = await image('assets/images/hero-vitoria.jpg', 'Dra. Vitória Passos realizando atendimento odontológico')
  const headerLogo = await image('assets/images/logo-pisom-transparent-test.png', 'Logo Pisom Odontologia')
  const footerLogo = await image('assets/images/logo-pisom-transparent-test.png', 'Logo Pisom Odontologia')
  const portrait = await image('assets/images/experiencia-vitoria.jpg', 'Dra. Vitória Passos em foto de apresentação pessoal')
  const signature = await image('assets/images/assinatura-vitoria.png', 'Assinatura da Dra. Vitória Passos')
  const building = await image('assets/images/real/reviews-building.png', 'Fachada do prédio onde fica o consultório')

  const docs = []

  docs.push({
    _id: 'siteSettings.main',
    _type: 'siteSettings',
    brandName: 'Pisom Odontologia',
    headerLogo,
    footerLogo,
    navigation,
    contact: {
      email: 'vitoriavieira_vic@hotmail.com',
      whatsappNumber: '5511915023134',
      whatsappMessage: 'Olá, vim do site e gostaria de efetuar um agendamento.',
      address: 'Rua Alm. Brasil, 685 - Mooca, São Paulo',
      postalCode: 'CEP 03162-010',
      taxId: '61.201.382/0001-06',
    },
    social: {
      instagramUrl: 'https://www.instagram.com/dra.vitoriapassosv/',
      googleReviewsUrl: 'https://www.google.com/search?q=Dra.+Vit%C3%B3ria+Passos+Odontologia+Est%C3%A9tica+Coment%C3%A1rios',
    },
    footerText: 'Na Pisom Odontologia, cada avaliação é pensada com cuidado, clareza e foco em resultados estéticos naturais.',
    cookieBanner: {
      title: 'Privacidade e cookies',
      text: 'Usamos cookies para melhorar sua experiência. Ferramentas como Google e Meta poderão medir acessos e campanhas conforme sua preferência.',
      acceptLabel: 'Aceitar',
      rejectLabel: 'Recusar',
    },
    defaultSeo: {
      _type: 'seoFields',
      title: 'Dra. Vitória Passos | Odontologia Estética e Harmonização',
      description: 'Odontologia estética e harmonização facial com foco em resultado elegante, natural e personalizado.',
      canonicalPath: '/index.html',
      ogImage: heroImage,
    },
  })

  for (const [id, patientName, quote] of testimonials) {
    docs.push({_id: id, _type: 'testimonial', patientName, quote, source: 'Avaliação no Google', stars: 5, featured: true})
  }

  for (const [id, title, treatment, path, caption, targetPage, showInHomeGallery] of cases) {
    docs.push({
      _id: id,
      _type: 'caseStudy',
      title,
      treatment,
      image: await image(path, `${title} - resultado de tratamento`),
      caption,
      targetPage,
      showInTransformations: true,
      showInHomeGallery,
    })
  }

  docs.push({
    _id: 'homePage.main',
    _type: 'homePage',
    seo: {
      _type: 'seoFields',
      title: 'Dra. Vitória Passos | Odontologia Estética e Harmonização',
      description: 'Dra. Vitória Passos em São Paulo: odontologia estética, lentes, botox, harmonização facial e gengivoplastia.',
      canonicalPath: '/index.html',
      ogImage: heroImage,
    },
    hero: {
      title: 'Encontre a transformação ideal para o seu sorriso e para a sua harmonia facial.',
      lead: 'Conheça os principais tratamentos da Dra. Vitória Passos e descubra qual faz mais sentido para o seu objetivo estético.',
      primaryCta: whatsappCta('Falar no WhatsApp'),
      secondaryCta: instagramCta(),
      image: heroImage,
      highlights: [
        'Atendimento com foco em resultado elegante e natural',
        'Planejamento personalizado para cada objetivo estético',
        'Procedimentos que valorizam sorriso, lábios e harmonia facial',
        'Avaliação cuidadosa para indicar o tratamento ideal',
        'Mais segurança para escolher o procedimento certo para você',
      ],
      mobileHighlights: [
        {_key: 'resultado-natural', title: 'Resultado natural', text: 'Atendimento com foco em elegância e leveza no resultado final.'},
        {_key: 'plano-personalizado', title: 'Plano personalizado', text: 'Cada indicação considera seu sorriso, seu rosto e seu objetivo estético.'},
        {_key: 'seguranca', title: 'Escolha com segurança', text: 'A avaliação ajuda a entender qual tratamento realmente faz sentido para você.'},
      ],
    },
    treatmentsSection: {
      eyebrow: 'Tratamentos',
      title: 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.',
      text: 'Conheça os procedimentos da Dra. Vitória Passos e veja como cada detalhe pode valorizar o seu sorriso com naturalidade.',
    },
    about: {
      eyebrow: 'Sobre a Dra. Vitória',
      title: 'Experiência, formação e cuidado para transformar sorrisos com naturalidade.',
      paragraphs: [
        'A Dra. Vitória Passos atua na odontologia há 3 anos, com CRO/SP ativo e uma abordagem que une técnica, sensibilidade estética e planejamento individual.',
        'Formada pelo Unieuro, conduz cada avaliação com olhar atento para sorriso, face e harmonia do resultado, sempre com foco em naturalidade, segurança e responsabilidade clínica.',
      ],
      portrait,
      signature,
      credentials: [
        '3 anos de atuação na odontologia',
        'Mais de 500 clientes atendidos',
        'Formação em Odontologia pelo Unieuro',
        'Atendimento com foco em estética, leveza e resultado elegante',
      ],
    },
    reviews: {
      title: 'O Que Nossos Pacientes Dizem',
      text: 'Com nota 5,0 no Google e dezenas de avaliações, a melhor forma de conhecer a Dra. Vitória é ouvindo quem já passou por aqui.',
      buildingImage: building,
      badgeText: 'O melhor atendimento com 5 estrelas.',
      cta: {_type: 'cta', label: 'Envie o Seu Depoimento!', kind: 'external', href: 'https://www.google.com/search?q=Dra.+Vit%C3%B3ria+Passos+Odontologia+Est%C3%A9tica+Coment%C3%A1rios'},
      testimonials: testimonials.map(([id]) => ref(id)),
    },
    journey: {
      eyebrow: 'Como funciona',
      title: 'Como funciona sua avaliação com a Dra. Vitória.',
      text: 'Um processo simples para entender o seu objetivo, avaliar o seu caso com cuidado e indicar o tratamento que realmente faz sentido.',
      steps: [
        {_key: 'objetivo', _type: 'processStep', title: '1. Você conta seu objetivo', text: 'Você chama no WhatsApp, conta o que incomoda no sorriso ou na harmonia facial e recebe o direcionamento inicial.'},
        {_key: 'avaliacao', _type: 'processStep', title: '2. A Dra. Vitória avalia seu caso', text: 'A Dra. Vitória analisa sorriso, gengiva, lábios, expressão e o resultado que você busca.'},
        {_key: 'indicacao', _type: 'processStep', title: '3. Você recebe a melhor indicação', text: 'Com base no seu caso, você entende quais tratamentos podem ser indicados e qual próximo passo vale mais a pena.'},
      ],
      closingText: 'O objetivo é que você saia da consulta entendendo com clareza o que faz sentido para o seu sorriso, para a sua autoestima e para a imagem que você deseja ver no espelho.',
    },
    stickyGallery: {
      cases: cases.map(([id]) => ref(id)),
      ctaBlock: {
        title: 'A próxima\ntransformação\npode ser a sua.',
        text: 'Agende sua avaliação e descubra o melhor caminho para valorizar sua autoestima.',
        cta: whatsappCta('Quero ser a próxima'),
      },
    },
    faq: [
      ['Como saber qual tratamento é ideal para mim?', 'Isso depende do seu objetivo. A avaliação é o que define a melhor indicação para o seu caso.'],
      ['Os resultados ficam naturais?', 'Esse é um dos principais focos da Dra. Vitória: proporção, expressão facial e harmonia.'],
      ['Em quanto tempo consigo começar meu tratamento?', 'Isso varia conforme o procedimento indicado e a sua avaliação.'],
      ['Preciso já saber o procedimento antes de agendar?', 'Não. Você pode agendar mesmo tendo só o objetivo em mente.'],
      ['Como faço para agendar a avaliação?', 'É só chamar no WhatsApp pelos botões da página.'],
      ['Posso avaliar mais de um procedimento na mesma consulta?', 'Sim. A avaliação permite comparar possibilidades e entender qual caminho faz mais sentido.'],
    ].map(([question, answer]) => ({_type: 'faqItem', _key: key(question), question, answer})),
  })

  docs.push({
    _id: 'privacyPolicy.main',
    _type: 'privacyPolicy',
    seo: {
      _type: 'seoFields',
      title: 'Política de Privacidade | Pisom Odontologia',
      description: 'Política de Privacidade e LGPD da Pisom Odontologia Dra Vitória Passos.',
      canonicalPath: '/politica-de-privacidade.html',
      ogImage: heroImage,
    },
    title: 'Política de Privacidade',
    updatedAtLabel: 'Última atualização: 20 de setembro de 2026.',
    intro: 'Esta política explica como a Pisom Odontologia trata dados pessoais em seus canais digitais e de atendimento.',
    sections: [
      ['Quem somos', 'A Pisom Odontologia Dra Vitória Passos - Odontologia Estética, inscrita no CNPJ 61.201.382/0001-06, atua como controladora dos dados pessoais tratados para atendimento, relacionamento e agendamento.'],
      ['Dados que podemos tratar', 'Podemos tratar dados informados voluntariamente pelo titular, como nome, telefone, e-mail, mensagens enviadas, preferências de atendimento e interesse em tratamentos.'],
      ['Para que usamos os dados', 'Os dados podem ser usados para responder contatos, realizar agendamentos, prestar atendimento, cumprir obrigações legais e melhorar a experiência no site.'],
      ['WhatsApp, e-mail e redes sociais', 'Ao clicar em botões de WhatsApp, e-mail, Instagram ou outras redes, o visitante passa a interagir também com plataformas de terceiros.'],
      ['Cookies, Meta e Google', 'O site pode utilizar cookies e tecnologias semelhantes para funcionamento, medição de acessos, segurança, melhoria de experiência e campanhas de marketing.'],
      ['Direitos do titular', 'O titular pode solicitar confirmação de tratamento, acesso, correção, eliminação, anonimização, bloqueio, portabilidade e revisão de consentimentos.'],
      ['Contato sobre privacidade', 'Para exercer direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail vitoriavieira_vic@hotmail.com.'],
    ].map(([title, text]) => ({_type: 'legalSection', _key: key(title), title, body: [block(text)]})),
  })

  for (const service of serviceSeeds) {
    let heroMedia = {}
    if (service.imagePath) {
      heroMedia.image = await image(service.imagePath, `${service.title} - imagem do tratamento`)
    } else if (service.imageUrl) {
      heroMedia.externalImage = {_type: 'externalImage', url: service.imageUrl, alt: `${service.title} - imagem do tratamento`}
    }

    docs.push({
      _id: service.id,
      _type: 'servicePage',
      title: service.title,
      slug: {_type: 'slug', current: service.slug},
      serviceKey: service.serviceKey,
      seo: {
        _type: 'seoFields',
        title: service.seoTitle,
        description: service.seoDescription,
        canonicalPath: `/paginas/${service.slug}.html`,
        ogImage: heroImage,
      },
      hero: {
        eyebrow: service.eyebrow,
        title: service.heroTitle,
        emphasis: service.emphasis,
        description: service.description,
        cta: whatsappCta(),
        ...heroMedia,
        tags: service.tags,
        ...(service.badge ? {badge: service.badge} : {}),
      },
      transformationsSection: {
        enabled: true,
        eyebrow: 'Tratamentos',
        title: 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.',
        text: 'Conheça os procedimentos da Dra. Vitória Passos e veja como cada detalhe pode valorizar o seu sorriso com naturalidade.',
        cases: cases.slice(0, 7).map(([id]) => ref(id)),
      },
      infoCards: service.infoCards.map(([iconLabel, title, text]) => ({_type: 'infoCard', _key: key(title), iconLabel, title, text})),
      ...(service.areas ? {
        areasSection: {
          enabled: true,
          eyebrow: service.areas.eyebrow,
          title: service.areas.title,
          cards: service.areas.cards.map(([label, title, text, url]) => ({
            _type: 'areaCard',
            _key: key(title),
            label,
            title,
            text,
            externalImage: {_type: 'externalImage', url, alt: title},
          })),
        },
      } : {areasSection: {enabled: false}}),
      ...(service.quiz ? {
        quiz: {
          _type: 'quizSection',
          enabled: true,
          eyebrow: 'Quiz',
          title: 'Descubra se lentes em resina fazem sentido para você.',
          description: 'Responda algumas perguntas simples para entender seu objetivo antes da avaliação.',
          initialResultTitle: 'Seu resultado aparecerá aqui',
          initialResultText: 'Ao responder, você terá uma direção inicial para conversar com a Dra. Vitória.',
          cta: whatsappCta('Quero avaliar meu sorriso'),
        },
      } : {}),
      mythsSection: {
        enabled: Boolean(service.myths?.length),
        eyebrow: 'Mitos e verdades',
        title: 'O que você precisa saber antes de decidir.',
        items: (service.myths || []).map(([kind, title, text]) => ({_type: 'mythItem', _key: key(title), kind, title, text})),
      },
      processSection: {
        enabled: Boolean(service.processEnabled),
        eyebrow: 'Como funciona',
        title: 'Da avaliação ao resultado: um processo planejado.',
        steps: [
          {_key: 'avaliacao', _type: 'processStep', number: '01', title: 'Avaliação', text: 'A Dra. Vitória entende seu objetivo e avalia proporções, queixas e possibilidades.'},
          {_key: 'planejamento', _type: 'processStep', number: '02', title: 'Planejamento', text: 'O plano é definido com foco em segurança, naturalidade e harmonia.'},
          {_key: 'resultado', _type: 'processStep', number: '03', title: 'Resultado', text: 'O acompanhamento orienta cuidados e evolução do tratamento.'},
        ],
      },
      faq: service.faq.map(([question, answer]) => ({_type: 'faqItem', _key: key(question), question, answer})),
      finalCta: {
        enabled: true,
        eyebrow: 'Próximo passo',
        title: 'Pronta para uma versão\nmais natural de você?',
        text: 'Agende sua avaliação com a Dra. Vitória Passos e entenda qual tratamento faz mais sentido para seu objetivo.',
        primaryCta: whatsappCta('Falar no WhatsApp'),
        secondaryCta: instagramCta(),
      },
    })
  }

  return docs
}

const docs = await buildDocs()

for (const doc of docs) {
  await client.createOrReplace(doc)
  console.log(`ok ${doc._type} ${doc._id}`)
}

console.log(`Seed concluido: ${docs.length} documentos criados/atualizados no dataset ${dataset}.`)
