import {canonicalUrl, SITE_URL} from './site';

// Only business details already present on the site are used here.
export const seoPages: Record<string, {title: string; description: string; label: string}> = {
  '/': {
    title: 'Dentista na Mooca, São Paulo | Dra. Vitória Passos',
    description: 'Odontologia estética na Mooca, São Paulo, com a Dra. Vitória Passos. Conheça lentes em resina, Lentes Premium, gengivoplastia e harmonização facial.',
    label: 'Odontologia estética',
  },
  '/paginas/lentes-em-resina.html': {
    title: 'Lentes em Resina na Mooca | Dra. Vitória Passos',
    description: 'Conheça as lentes em resina na Mooca, São Paulo, com a Dra. Vitória Passos. Veja casos, dúvidas e como agendar uma avaliação na Pisom Odontologia.',
    label: 'Lentes em resina',
  },
  '/paginas/lentes-em-porcelana.html': {
    title: 'Lentes Premium na Mooca, São Paulo | Dra. Vitória Passos',
    description: 'Conheça as Lentes Premium na Mooca, São Paulo, com a Dra. Vitória Passos. Veja o planejamento do sorriso, casos e dúvidas. Agende sua avaliação.',
    label: 'Lentes Premium',
  },
  '/paginas/gengivoplastia.html': {
    title: 'Gengivoplastia na Mooca, São Paulo | Dra. Vitória Passos',
    description: 'Gengivoplastia na Mooca, São Paulo, com a Dra. Vitória Passos. Conheça o tratamento do contorno gengival, veja dúvidas e agende uma avaliação.',
    label: 'Gengivoplastia',
  },
  '/paginas/preenchimento-labial.html': {
    title: 'Preenchimento Labial na Mooca | Dra. Vitória Passos',
    description: 'Preenchimento labial na Mooca, São Paulo, com a Dra. Vitória Passos. Conheça o planejamento de contorno e volume dos lábios e agende sua avaliação.',
    label: 'Preenchimento labial',
  },
  '/paginas/harmonizacao-facial.html': {
    title: 'Harmonização Facial na Mooca | Dra. Vitória Passos',
    description: 'Harmonização facial na Mooca, São Paulo, com a Dra. Vitória Passos. Conheça as possibilidades de tratamento e agende sua avaliação na Pisom Odontologia.',
    label: 'Harmonização facial',
  },
};

const escape = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]!));

export function enrichContent(content: string, pathname: string, settings: any) {
  const path = new URL(canonicalUrl(pathname)).pathname;
  const page = seoPages[path];
  if (!page) return content;
  const services = Object.entries(seoPages).filter(([url]) => url.startsWith('/paginas/'));
  const address = settings.contact?.address;
  const whatsapp = `https://wa.me/${String(settings.contact?.whatsappNumber || '').replace(/\D/g, '')}`;
  const localSection = `<section class="section seo-location" aria-labelledby="local-heading">
    <h2 id="local-heading">${escape(page.label)} na Mooca, São Paulo</h2>
    <p>A Dra. Vitória Passos atende na ${escape(settings.brandName)}, na Mooca, em São Paulo.${address ? ` O consultório fica na ${escape(address)}.` : ''} Agende uma avaliação para conversar sobre seus objetivos e conhecer as possibilidades de tratamento para o seu caso.</p>
    <dl class="seo-facts">
      ${address ? `<dt>Onde fica a clínica?</dt><dd>${escape(address)}${settings.contact?.postalCode ? `, ${escape(settings.contact.postalCode)}` : ''}.</dd>` : ''}
      <dt>Quem realiza o atendimento?</dt><dd>Dra. Vitória Passos, na ${escape(settings.brandName)}.</dd>
      <dt>Como agendar uma avaliação?</dt><dd><a href="${escape(whatsapp)}" data-whatsapp-link>Entre em contato pelo WhatsApp${settings.contact?.whatsappNumber ? `: +${escape(settings.contact.whatsappNumber)}` : ''}</a>.</dd>
    </dl>
    <nav aria-label="Conheça os tratamentos"><ul>${services.filter(([url]) => url !== path).map(([url, service]) => `<li><a href="${url}">${escape(service.label)}</a></li>`).join('')}</ul></nav>
  </section>`;
  let next = content.replace('</main>', `${localSection}</main>`);
  if (path !== '/') {
    const breadcrumb = `<nav class="seo-breadcrumbs" aria-label="Caminho de navegação"><ol><li><a href="/">Início</a></li><li aria-current="page">${escape(page.label)}</li></ol></nav>`;
    next = next.replace(/<main\b[^>]*>/, (tag) => `${tag}${breadcrumb}`);
  }
  return next;
}

export function structuredData(url: string, title: string, description: string, image: string, settings: any) {
  const dentistId = `${SITE_URL}/#dentist`;
  const websiteId = `${SITE_URL}/#website`;
  const personId = `${SITE_URL}/#dra-vitoria-passos`;
  const path = new URL(url).pathname;
  const page = seoPages[path];
  const service = path.startsWith('/paginas/') && page;
  const graph: any[] = [
    {
      '@type': 'Dentist', '@id': dentistId, url: `${SITE_URL}/`,
      name: settings.brandName, image: `${SITE_URL}/assets/images/homepage.webp`,
      logo: `${SITE_URL}/assets/images/pisom-header-logo.svg`,
      email: settings.contact?.email,
      telephone: `+${String(settings.contact?.whatsappNumber || '').replace(/\D/g, '')}`,
      address: {
        '@type': 'PostalAddress', streetAddress: settings.contact?.address,
        addressLocality: 'São Paulo', addressRegion: 'SP',
        postalCode: settings.contact?.postalCode?.replace(/^CEP\s*/i, ''), addressCountry: 'BR',
      },
      sameAs: settings.social?.instagramUrl ? [settings.social.instagramUrl] : undefined,
    },
    {
      '@type': 'Person', '@id': personId, name: 'Dra. Vitória Passos',
      jobTitle: 'Cirurgiã-dentista', worksFor: {'@id': dentistId},
      sameAs: settings.social?.instagramUrl ? [settings.social.instagramUrl] : undefined,
    },
    {
      '@type': 'WebSite', '@id': websiteId, url: `${SITE_URL}/`,
      name: settings.brandName, inLanguage: 'pt-BR', publisher: {'@id': dentistId},
    },
    {
      '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description,
      inLanguage: 'pt-BR', isPartOf: {'@id': websiteId},
      about: {'@id': dentistId}, primaryImageOfPage: {'@type': 'ImageObject', url: image},
      ...(service ? {mainEntity: {'@id': `${url}#service`}} : {}),
      ...(path !== '/' ? {breadcrumb: {'@id': `${url}#breadcrumb`}} : {}),
    },
  ];
  if (service) graph.push({
    '@type': 'Service', '@id': `${url}#service`, name: page.label,
    serviceType: page.label, description, url, provider: {'@id': dentistId},
    areaServed: {'@type': 'City', name: 'São Paulo'},
  });
  if (path !== '/') graph.push({
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/`},
      {'@type': 'ListItem', position: 2, name: page?.label || title.split('|')[0].trim(), item: url},
    ],
  });
  return {'@context': 'https://schema.org', '@graph': graph};
}
