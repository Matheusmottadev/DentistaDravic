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

function block(text) {
  return {
    _type: 'block',
    _key: key(text).slice(0, 12),
    style: 'normal',
    markDefs: [],
    children: [{_type: 'span', _key: `${key(text).slice(0, 8)}-span`, text, marks: []}],
  }
}

function legalSection(title, texts) {
  const paragraphs = Array.isArray(texts) ? texts : [texts]

  return {
    _type: 'legalSection',
    _key: key(title),
    title,
    body: paragraphs.map(block),
  }
}

const sections = [
  legalSection('1. Quem somos', 'A Pisom Odontologia Dra Vitória Passos - Odontologia Estética, inscrita no CNPJ 61.201.382/0001-06, localizada na Rua Alm Brasil 685 Conj 107, Mooca, São Paulo SP, atua como controladora dos dados pessoais tratados para atendimento, relacionamento e agendamento.'),
  legalSection('2. Dados que podemos tratar', [
    'Podemos tratar dados informados voluntariamente pelo titular, como nome, telefone, e-mail, mensagens enviadas, preferências de atendimento, interesse em tratamentos e informações necessárias para agendamento ou continuidade do contato.',
    'Em contexto de atendimento odontológico ou estético, também podem existir dados relacionados à saúde, imagens e histórico de procedimentos. Esses dados recebem cuidado adicional e são usados apenas quando necessários para atendimento, avaliação, execução de serviços, obrigações profissionais ou autorização específica.',
  ]),
  legalSection('3. Para que usamos os dados', 'Os dados podem ser usados para responder contatos, realizar agendamentos, prestar atendimento, enviar orientações relacionadas a procedimentos, cumprir obrigações legais e regulatórias, melhorar a experiência no site e divulgar serviços da clínica.'),
  legalSection('4. WhatsApp, e-mail e redes sociais', 'Ao clicar em botões de WhatsApp, e-mail, Instagram ou outras redes, o visitante passa a interagir também com plataformas de terceiros. Essas plataformas podem tratar dados conforme suas próprias políticas de privacidade.'),
  legalSection('5. Cookies, Meta e Google', [
    'O site pode utilizar cookies e tecnologias semelhantes para funcionamento, medição de acessos, segurança, melhoria de experiência e campanhas de marketing.',
    'Futuramente, poderemos utilizar ferramentas como Google Analytics, Google Ads, Google Tag Manager, Meta Pixel, Facebook Ads e Instagram Ads. Essas tecnologias podem coletar identificadores online, informações do navegador, páginas acessadas, origem da visita, eventos de conversão e interações com botões de contato.',
    'Quando forem utilizados cookies de medição, publicidade ou remarketing, o visitante poderá gerenciar sua preferência pelo aviso de cookies exibido no site.',
  ]),
  legalSection('6. Compartilhamento', 'Dados podem ser compartilhados com fornecedores necessários para operação do site, hospedagem, atendimento, ferramentas de marketing, plataformas de comunicação, sistemas de agenda, contabilidade, assessoria jurídica ou autoridades públicas, quando aplicável.'),
  legalSection('7. Base legal', 'O tratamento pode ocorrer com fundamento em consentimento, execução de contrato ou procedimentos preliminares, cumprimento de obrigação legal ou regulatória, tutela da saúde, legítimo interesse e exercício regular de direitos, conforme a Lei Geral de Proteção de Dados Pessoais.'),
  legalSection('8. Direitos do titular', 'O titular pode solicitar confirmação de tratamento, acesso, correção, eliminação, anonimização, bloqueio, portabilidade, informações sobre compartilhamento, revisão de consentimentos e oposição a tratamentos realizados em desacordo com a LGPD.'),
  legalSection('9. Segurança e conservação', 'Adotamos medidas razoáveis para proteger dados pessoais contra acesso não autorizado, perda, alteração ou uso indevido. Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas, obrigações legais, regulatórias e defesa de direitos.'),
  legalSection('10. Uso de imagem', 'Imagens de pacientes, resultados de tratamentos e conteúdos de antes e depois somente devem ser utilizados mediante autorização adequada, respeitando a privacidade, a imagem e as normas profissionais aplicáveis.'),
  legalSection('11. Contato sobre privacidade', 'Para exercer direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail vitoriavieira_vic@hotmail.com.'),
]

await client
  .patch('privacyPolicy.main')
  .set({
    sections,
    updatedAtLabel: 'Última atualização: 20 de setembro de 2026.',
  })
  .commit()

console.log(`Politica de privacidade atualizada com ${sections.length} secoes.`)
