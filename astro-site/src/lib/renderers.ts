import {sanityImageUrl} from './sanity';

const defaultNav = [
  {label: 'Lentes em Resina', href: '/paginas/lentes-em-resina.html'},
  {label: 'Lentes Premium', href: '/paginas/lentes-em-porcelana.html'},
  {label: 'Botox', href: '/paginas/botox.html'},
  {label: 'Preenchimento Labial', href: '/paginas/preenchimento-labial.html'},
  {label: 'Gengivoplastia', href: '/paginas/gengivoplastia.html'},
];

const defaultSettings = {
  brandName: 'Pisom Odontologia',
  footerText: 'Na Pisom Odontologia, cada avaliação é pensada com cuidado, clareza e foco em resultados estéticos naturais.',
  contact: {
    email: 'vitoriavieira_vic@hotmail.com',
    whatsappNumber: '5511915023134',
    whatsappMessage: 'Olá, vim do site e gostaria de efetuar um agendamento.',
    address: 'Rua Alm. Brasil, 685 - Mooca, São Paulo',
    postalCode: 'CEP 03162-010',
  },
  social: {
    instagramUrl: 'https://www.instagram.com/dra.vitoriapassosv/',
  },
};

const defaultCases = [
  {
    title: 'Preenchimento Labial',
    caption: 'Antes e depois com contorno, equilíbrio e acabamento natural.',
    targetPage: '/paginas/preenchimento-labial.html',
    image: {fallbackSrc: '/assets/images/real/preenchimento-labial-caso.jpg', alt: 'Caso de preenchimento labial com antes e depois na mesma imagem'},
  },
  {
    title: 'Botox',
    caption: 'Suavização das linhas com resultado leve e expressão preservada.',
    targetPage: '/paginas/botox.html',
    image: {fallbackSrc: '/assets/images/real/botox-caso-1.png', alt: 'Caso de botox com antes e depois na mesma imagem'},
  },
  {
    title: 'Lentes em Resina',
    caption: 'Transformação do sorriso com brilho, forma e naturalidade.',
    targetPage: '/paginas/lentes-em-resina.html',
    image: {fallbackSrc: '/assets/images/real/lentes-caso-1.jpg', alt: 'Caso de lentes em resina com antes e depois na mesma imagem'},
  },
  {
    title: 'Lentes em Resina + Gengivoplastia',
    caption: 'Lentes em resina e gengivoplastia para mais simetria e um sorriso sofisticado.',
    targetPage: '/paginas/lentes-em-resina.html',
    image: {fallbackSrc: '/assets/images/real/lentes-caso-2.jpg', alt: 'Outro caso de lentes em resina com antes e depois na mesma imagem'},
  },
  {
    title: 'Lentes Premium',
    caption: 'Transformação premium do sorriso com estética clara, brilho e acabamento natural.',
    targetPage: '/paginas/lentes-em-porcelana.html',
    image: {fallbackSrc: '/assets/images/real/lentes-premium.jpg', alt: 'Caso de lentes premium com antes e depois na mesma imagem'},
  },
  {
    title: 'Gengivoplastia',
    caption: 'Contorno gengival mais harmônico para destacar o sorriso.',
    targetPage: '/paginas/gengivoplastia.html',
    image: {fallbackSrc: '/assets/images/real/gengivoplastia-caso.jpg', alt: 'Caso de gengivoplastia com antes, procedimento e resultado'},
  },
  {
    title: 'Botox',
    caption: 'Mais leveza na testa e leitura facial mais descansada.',
    targetPage: '/paginas/botox.html',
    image: {fallbackSrc: '/assets/images/real/botox-caso-2.png', alt: 'Outro caso de botox com antes e depois na mesma imagem'},
  },
];

const defaultTestimonials = [
  {
    patientName: 'Suelen Rios',
    quote: 'Eu tinha um problema muito sério com meu sorriso, afetava muito minha autoestima e por indicação de uma amiga fui conhecer a Dra. Vitória. Saí de lá maravilhada com a experiência, ela arrasou muito no trabalho, estou apaixonada e super indico!! Só vão!',
    source: 'Avaliação no Google',
    stars: 5,
  },
  {
    patientName: 'Vitoria Gabriella',
    quote: 'Dra Vitória muito bem preparada, sempre cuidadosa e atenciosa! Onde ela vai eu vou, não troco por nada. A melhor que temos, nota 10 desde o atendimento virtual e presencial até o tratamento. Amo essa equipe.',
    source: 'Avaliação no Google',
    stars: 5,
  },
  {
    patientName: 'Debora Alves',
    quote: 'Antes de fazer o procedimento não gostava da estética dos meus dentes, depois que coloquei as lentes tudo mudou. Hoje posso sorrir, a Dra. Vitória foi a responsável por esse novo sorriso. Mãos de fada.',
    source: 'Avaliação no Google',
    stars: 5,
  },
  {
    patientName: 'Jennyfer Valerini',
    quote: 'Amei as lentes, a Dra realçou 100% da minha autoestima, fiquei muito feliz. O atendimento dela é maravilhoso, super simpática, mão leve e maravilhosa no que faz!',
    source: 'Avaliação no Google',
    stars: 5,
  },
  {
    patientName: 'Julia Kamilly',
    quote: 'Fui atendida pela Dra. Vitória e fiquei extremamente satisfeito com o atendimento! Ela foi super atenciosa, explicou tudo com clareza e me passou muita confiança. O resultado do tratamento foi impecável! Recomendo muito!',
    source: 'Avaliação no Google',
    stars: 5,
  },
  {
    patientName: 'Ronaldo Baptista',
    quote: 'Excelente atendimento, Dra muito simpática e profissional! Recomendo o serviço prestado de olhos fechados!',
    source: 'Avaliação no Google',
    stars: 5,
  },
];

const defaultHomeFaq = [
  {
    question: 'Como saber qual tratamento é ideal para mim?',
    answer: 'Isso depende do seu objetivo. Lentes em resina costumam fazer mais sentido para transformar forma e estética do sorriso, botox para suavizar linhas de expressão, preenchimento para dar contorno e volume aos lábios, e gengivoplastia para harmonizar o excesso de gengiva. A avaliação é o que define a melhor indicação para o seu caso.',
  },
  {
    question: 'Os resultados ficam naturais?',
    answer: 'Esse é um dos principais focos da Dra. Vitória. O planejamento considera proporção, expressão facial e harmonia do sorriso para buscar um resultado elegante, leve e coerente com você.',
  },
  {
    question: 'Em quanto tempo consigo começar meu tratamento?',
    answer: 'Isso varia conforme o procedimento indicado e a sua avaliação. Em muitos casos, após esse primeiro atendimento já é possível entender o planejamento e organizar os próximos passos.',
  },
  {
    question: 'Preciso já saber o procedimento antes de agendar?',
    answer: 'Não. Você pode agendar mesmo tendo só o objetivo em mente. A consulta serve justamente para entender o que te incomoda e traduzir isso em uma indicação segura e personalizada.',
  },
  {
    question: 'Como faço para agendar a avaliação?',
    answer: 'É só chamar no WhatsApp pelos botões da página. A partir daí, você recebe as orientações iniciais para marcar sua avaliação.',
  },
  {
    question: 'Posso avaliar mais de um procedimento na mesma consulta?',
    answer: 'Sim. Se você tem dúvidas entre sorriso, gengiva, lábios ou harmonização facial, a avaliação permite comparar possibilidades e entender com mais clareza qual caminho faz mais sentido.',
  },
];

function html(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(value: unknown) {
  return html(value).replace(/\n/g, '<br>');
}

function asArray<T>(value: T[] | undefined | null, fallback: T[] = []) {
  return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function settingsWithFallback(settings: any = {}) {
  settings = settings || {};

  return {
    ...defaultSettings,
    ...settings,
    contact: {...defaultSettings.contact, ...(settings.contact || {})},
    social: {...defaultSettings.social, ...(settings.social || {})},
  };
}

function imageSrc(image: any, fallbackSrc: string, width = 1200) {
  return sanityImageUrl(image, {width, quality: 86}) || image?.externalImage?.url || image?.url || fallbackSrc;
}

function imageAlt(image: any, fallbackAlt = '') {
  return image?.alt || image?.externalImage?.alt || image?.caption || fallbackAlt;
}

function ctaHref(cta: any, settings: any, fallbackHref = '#') {
  if (cta?.href) return cta.href;
  if (cta?.kind === 'instagram') return settings.social?.instagramUrl || fallbackHref;
  if (cta?.kind === 'whatsapp' || fallbackHref === '#') {
    const number = String(settings.contact?.whatsappNumber || '').replace(/\D/g, '');
    const message = cta?.whatsappMessage || settings.contact?.whatsappMessage || '';
    if (number) return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }
  return fallbackHref;
}

function replaceBlock(source: string, pattern: RegExp, replacement: string) {
  return source.replace(pattern, replacement);
}

function replaceExactClassSection(source: string, className: string, replacement: string) {
  return replaceBlock(source, new RegExp(`<section class="${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?<\\/section>`), replacement);
}

function chunk<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function upsertMeta(head: string, pattern: RegExp, tag: string) {
  return pattern.test(head) ? head.replace(pattern, tag) : head.replace('</title>', `</title>\n    ${tag}`);
}

export function renderHead(head: string, seo: any, settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const pageSeo = seo || mergedSettings.defaultSeo || {};
  let next = head;
  const title = pageSeo.title || next.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = pageSeo.description || next.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/>/)?.[1];
  const canonicalPath = pageSeo.canonicalPath;
  const ogImage =
    sanityImageUrl(pageSeo.ogImage, {width: 1200, quality: 86}) ||
    next.match(/<meta\s+property="og:image"\s+content="([^"]*)"\s*\/>/)?.[1] ||
    '/assets/images/hero-vitoria.jpg';

  if (title) {
    next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${html(title)}</title>`);
    next = upsertMeta(next, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${html(title)}" />`);
    next = upsertMeta(next, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${html(title)}" />`);
  }

  if (description) {
    next = next.replace(/(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${html(description)}$2`);
    next = upsertMeta(next, /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:description" content="${html(description)}" />`);
    next = upsertMeta(next, /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:description" content="${html(description)}" />`);
  }

  if (canonicalPath) {
    next = next.replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${html(canonicalPath)}$2`);
  }

  if (ogImage) {
    next = upsertMeta(next, /<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${html(ogImage)}" />`);
    next = upsertMeta(next, /<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${html(ogImage)}" />`);
    next = upsertMeta(next, /<meta name="twitter:card" content="[^"]*"\s*\/>/, '<meta name="twitter:card" content="summary_large_image" />');
  }

  return next;
}

export function renderHeader(settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const nav = asArray(mergedSettings.navigation, defaultNav);
  const logoSrc = imageSrc(mergedSettings.headerLogo, '/assets/images/pisom-header-logo.svg', 320);
  const logoAlt = imageAlt(mergedSettings.headerLogo, `Logo ${mergedSettings.brandName}`);

  return `<header class="site-header" data-mobile-nav>
        <a class="brand" href="/index.html" aria-label="Ir para a home">
          <img class="brand__logo" src="${html(logoSrc)}" alt="${html(logoAlt)}" width="128" height="96" />
        </a>

        <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="site-header-panel" aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="site-header__panel" id="site-header-panel">
          <nav class="site-nav" aria-label="Navegação principal">
            ${nav.map((item: any) => `<a href="${html(item.href)}">${html(item.label)}</a>`).join('\n            ')}
          </nav>

          <a class="button button--ghost site-header__cta" data-whatsapp-link href="${html(ctaHref({kind: 'whatsapp'}, mergedSettings))}">
            Agendar avaliação
          </a>
        </div>
      </header>`;
}

export function renderFooter(settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const treatmentLinks = asArray(mergedSettings.navigation, defaultNav);
  const footerLogo = imageSrc(mergedSettings.footerLogo, '/assets/images/pison-odontologia-branco-sem-fundo.svg', 360);
  const footerLogoAlt = imageAlt(mergedSettings.footerLogo, `Logo ${mergedSettings.brandName}`);
  const whatsapp = ctaHref({kind: 'whatsapp'}, mergedSettings);

  return `<footer class="site-footer site-footer--rich">
        <div class="site-footer__surface">
          <div class="site-footer__top">
            <div class="site-footer__intro">
              <img class="site-footer__logo" src="${html(footerLogo)}" alt="${html(footerLogoAlt)}" width="180" height="120" />
              <p>${html(mergedSettings.footerText)}</p>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Institucional</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__links site-footer__panel">
                <a href="/index.html">Home</a>
                <a href="/index.html#sobre">Sobre</a>
                <a href="/index.html#duvidas">Dúvidas</a>
                <a href="/politica-de-privacidade.html">Política de Privacidade</a>
              </div>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Tratamentos</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__links site-footer__panel">
                ${treatmentLinks.map((item: any) => `<a href="${html(item.href)}">${html(item.label)}</a>`).join('\n                ')}
              </div>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Informações</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__stack site-footer__panel">
                ${mergedSettings.contact?.email ? `<a href="mailto:${html(mergedSettings.contact.email)}">${html(mergedSettings.contact.email)}</a>` : ''}
                <a href="${html(whatsapp)}" data-whatsapp-link>Fale comigo no WhatsApp</a>
                ${mergedSettings.contact?.address ? `<p>${html(mergedSettings.contact.address)}</p>` : ''}
                ${mergedSettings.contact?.postalCode ? `<p>${html(mergedSettings.contact.postalCode)}</p>` : ''}
              </div>
            </div>
          </div>
        </div>
      </footer>`;
}

function renderTransformationCards(cases: any[]) {
  const cards = asArray(cases, defaultCases);
  const doubled = [...cards, ...cards.map((item) => ({...item, hidden: true}))];

  return doubled.map((item: any) => {
    const fallbackImage = item.image?.fallbackSrc || '/assets/images/hero-vitoria.jpg';
    const src = imageSrc(item.image, fallbackImage, 800);
    const alt = item.hidden ? '' : imageAlt(item.image, item.image?.alt || item.title);
    const href = item.targetPage || '#';

    return `<a class="transformation-card transformation-card--single" href="${html(href)}"${item.hidden ? ' aria-hidden="true"' : ''}>
                <div class="transformation-card__images transformation-card__images--single">
                  <img src="${html(src)}" alt="${html(alt)}" />
                </div>
                <div class="transformation-card__caption">
                  <strong${String(item.title || '').length > 24 ? ' class="transformation-card__title--long"' : ''}>${html(item.title)}</strong>
                  <span>${html(item.caption)}</span>
                  <em class="transformation-card__hint">Clique e saiba mais</em>
                </div>
              </a>`;
  }).join('\n\n              ');
}

function renderHomeHero(page: any, settings: any) {
  const hero = page?.hero || {};
  const mergedSettings = settingsWithFallback(settings);
  const primary = hero.primaryCta || {label: 'Falar no WhatsApp', kind: 'whatsapp'};
  const secondary = hero.secondaryCta || {label: 'Ver Instagram', kind: 'instagram'};
  const highlights = asArray(hero.highlights, [
    'Atendimento com foco em resultado elegante e natural',
    'Planejamento personalizado para cada objetivo estético',
    'Procedimentos que valorizam sorriso, lábios e harmonia facial',
    'Avaliação cuidadosa para indicar o tratamento ideal',
    'Mais segurança para escolher o procedimento certo para você',
  ]);
  const image = imageSrc(hero.image, '/assets/images/hero-vitoria.jpg', 1200);
  const alt = imageAlt(hero.image, 'Dra. Vitória Passos realizando atendimento odontológico');

  return `<section class="hero section home-hero">
          <div class="hero__content">
            <h1>${nl2br(hero.title || 'Encontre a transformação ideal para o seu sorriso e para a sua harmonia facial.')}</h1>
            <p class="hero__lead">${html(hero.lead || 'Conheça os principais tratamentos da Dra. Vitória Passos e descubra qual faz mais sentido para o seu objetivo estético.')}</p>

            <div class="hero__actions">
              <a class="button" data-whatsapp-link href="${html(ctaHref(primary, mergedSettings))}">${html(primary.label || 'Falar no WhatsApp')}</a>
              <a class="button button--secondary" href="${html(ctaHref(secondary, mergedSettings, mergedSettings.social.instagramUrl))}" target="_blank" rel="noreferrer">${html(secondary.label || 'Ver Instagram')}</a>
            </div>

            <ul class="hero__highlights hero__highlights--desktop" aria-label="Diferenciais">
              ${highlights.map((item: string) => `<li>${html(item)}</li>`).join('\n              ')}
            </ul>
          </div>

          <div class="hero__visual">
            <div class="hero-card">
              <img src="${html(image)}" alt="${html(alt)}" width="1080" height="1364" />
            </div>
          </div>
        </section>`;
}

function renderHomeMobileHighlights(page: any) {
  const items = asArray(page?.hero?.mobileHighlights, [
    {title: 'Resultado natural', text: 'Atendimento com foco em elegância e leveza no resultado final.'},
    {title: 'Plano personalizado', text: 'Cada indicação considera seu sorriso, seu rosto e seu objetivo estético.'},
    {title: 'Escolha com segurança', text: 'A avaliação ajuda a entender qual tratamento realmente faz sentido para você.'},
  ]);

  return `<section class="hero-highlights-mobile" aria-label="Diferenciais principais">
          <div class="hero-highlights-mobile__inner">
            ${items.map((item: any) => `<article class="hero-highlight-chip">
              <strong>${html(item.title)}</strong>
              <p>${html(item.text)}</p>
            </article>`).join('\n            ')}
          </div>
        </section>`;
}

function renderHomeTreatments(page: any, cases: any[]) {
  const section = page?.treatmentsSection || {};

  return `<section class="section">
          <div class="section-heading">
            <p class="eyebrow">${html(section.eyebrow || 'Tratamentos')}</p>
            <h2 class="section-heading__title--wide">${html(section.title || 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.')}</h2>
            <p>${html(section.text || 'Conheça os procedimentos da Dra. Vitória Passos e veja como cada detalhe pode valorizar o seu sorriso com naturalidade.')}</p>
          </div>

          <div class="transformations-marquee" aria-label="Galeria de transformações">
            <div class="transformations-marquee__track">
              ${renderTransformationCards(cases)}
            </div>
          </div>
        </section>`;
}

function renderAbout(page: any) {
  const about = page?.about || {};
  const paragraphs = asArray(about.paragraphs, [
    'A Dra. Vitória Passos atua na odontologia há 3 anos, com CRO/SP ativo e uma abordagem que une técnica, sensibilidade estética e planejamento individual.',
    'Formada pelo Unieuro, conduz cada avaliação com olhar atento para sorriso, face e harmonia do resultado, sempre com foco em naturalidade, segurança e responsabilidade clínica.',
  ]);
  const credentials = asArray(about.credentials, [
    '3 anos de atuação na odontologia',
    'Mais de 500 clientes atendidos',
    'Formação em Odontologia pelo Unieuro',
    'Atendimento com foco em estética, leveza e resultado elegante',
  ]);
  const portrait = imageSrc(about.portrait, '/assets/images/experiencia-vitoria.jpg', 900);
  const portraitAlt = imageAlt(about.portrait, 'Dra. Vitória Passos em foto de apresentação pessoal');
  const signature = imageSrc(about.signature, '/assets/images/assinatura-vitoria.png', 500);

  return `<section class="section section--split" id="sobre">
          <div class="section-heading">
            <p class="eyebrow">${html(about.eyebrow || 'Sobre a Dra. Vitória')}</p>
            <h2>${html(about.title || 'Experiência, formação e cuidado para transformar sorrisos com naturalidade.')}</h2>
          </div>

          <div class="about-layout">
            <div class="about-copy">
              <p>${html(paragraphs[0])}</p>
              <div class="about-portrait about-portrait--mobile">
                <img src="${html(portrait)}" alt="${html(portraitAlt)}" width="520" height="640" />
              </div>
              ${paragraphs.slice(1).map((text: string) => `<p>${html(text)}</p>`).join('\n              ')}
              <div class="about-credentials">
                <ul class="credentials">
                  ${credentials.map((item: string) => `<li>${html(item)}</li>`).join('\n                  ')}
                </ul>
                <div class="about-signature" aria-hidden="true">
                  <img src="${html(signature)}" alt="" width="420" height="140" />
                </div>
              </div>
            </div>

            <div class="about-portrait about-portrait--desktop">
              <img src="${html(portrait)}" alt="${html(portraitAlt)}" width="520" height="640" />
            </div>
          </div>
        </section>`;
}

function renderReviews(page: any, testimonials: any[], settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const reviews = page?.reviews || {};
  const items = asArray(reviews.testimonials, asArray(testimonials, defaultTestimonials));
  const groups = chunk(items, 2);
  const image = imageSrc(reviews.buildingImage, '/assets/images/real/reviews-building.png', 700);
  const alt = imageAlt(reviews.buildingImage, 'Fachada do prédio onde fica o consultório');
  const cta = reviews.cta || {label: 'Envie o Seu Depoimento!', kind: 'external', href: mergedSettings.social?.googleReviewsUrl || '#'};

  return `<section class="section">
          <div class="reviews-showcase">
            <div class="reviews-showcase__visual reviews-showcase__visual--desktop">
              <img src="${html(image)}" alt="${html(alt)}" width="366" height="526" />
              <div class="reviews-showcase__badge reviews-showcase__badge--top">
                <p>${html(reviews.badgeText || 'O melhor atendimento com 5 estrelas.')}</p>
                <span aria-hidden="true">★★★★★</span>
              </div>
            </div>

            <div class="reviews-showcase__content">
              <div class="section-heading section-heading--reviews">
                <h2>${html(reviews.title || 'O Que Nossos Pacientes Dizem')}</h2>
                <p>${html(reviews.text || 'Com nota 5,0 no Google e dezenas de avaliações, a melhor forma de conhecer a Dra. Vitória é ouvindo quem já passou por aqui.')}</p>
              </div>

              <div class="reviews-showcase__visual reviews-showcase__visual--mobile">
                <img src="${html(image)}" alt="${html(alt)}" width="366" height="526" />
                <div class="reviews-showcase__badge reviews-showcase__badge--top">
                  <p>${html(reviews.badgeText || 'O melhor atendimento com 5 estrelas.')}</p>
                  <span aria-hidden="true">★★★★★</span>
                </div>
              </div>

              <div class="testimonial-rotator" data-testimonial-rotator>
                <div class="testimonial-rotator__viewport">
                  ${groups.map((group, index) => `<div class="testimonial-grid testimonial-grid--showcase testimonial-grid--slide${index === 0 ? ' is-active' : ''}"${index === 0 ? '' : ' aria-hidden="true"'}>
                    ${group.map((item: any) => `<article class="testimonial-card testimonial-card--showcase">
                      <div class="stars" aria-hidden="true">${'★'.repeat(Number(item.stars || 5))}</div>
                      <p>${html(item.quote)}</p>
                      <strong>${html(item.patientName)}</strong>
                      <span class="testimonial-card__role">${html(item.source || 'Avaliação no Google')}</span>
                    </article>`).join('\n                    ')}
                  </div>`).join('\n\n                  ')}
                </div>
              </div>

              <a class="button reviews-showcase__cta" href="${html(ctaHref(cta, mergedSettings, '#'))}" target="_blank" rel="noreferrer">${html(cta.label || 'Envie o Seu Depoimento!')}</a>
            </div>
          </div>
        </section>`;
}

function renderJourney(page: any) {
  const journey = page?.journey || {};
  const steps = asArray(journey.steps, [
    {title: '1. Você conta seu objetivo', text: 'Você chama no WhatsApp, conta o que incomoda no sorriso ou na harmonia facial e recebe o direcionamento inicial.'},
    {title: '2. A Dra. Vitória avalia seu caso', text: 'A Dra. Vitória analisa sorriso, gengiva, lábios, expressão e o resultado que você busca para entender o que combina com você.'},
    {title: '3. Você recebe a melhor indicação', text: 'Com base no seu caso, você entende quais tratamentos podem ser indicados, o que esperar e qual próximo passo vale mais a pena.'},
  ]);

  return `<section class="section journey-section" data-journey-section>
          <div class="section-heading section-heading--center">
            <p class="eyebrow">${html(journey.eyebrow || 'Como funciona')}</p>
            <h2 class="section-heading__title--wide">${html(journey.title || 'Como funciona sua avaliação com a Dra. Vitória.')}</h2>
            <p class="section-heading__text--relaxed">${html(journey.text || 'Um processo simples para entender o seu objetivo, avaliar o seu caso com cuidado e indicar o tratamento que realmente faz sentido.')}</p>
          </div>

          <div class="journey-grid" aria-label="Etapas da avaliação">
            ${steps.map((item: any) => `<article class="stat-card">
              <strong>${html(item.title)}</strong>
              <p>${html(item.text)}</p>
            </article>`).join('\n            ')}
          </div>

          <p class="section-closing">${html(journey.closingText || 'O objetivo é que você saia da consulta entendendo com clareza o que faz sentido para o seu sorriso, para a sua autoestima e para a imagem que você deseja ver no espelho.')}</p>
        </section>`;
}

function renderStickyGallery(page: any, cases: any[], settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const gallery = page?.stickyGallery || {};
  const items = asArray(gallery.cases, asArray(cases, defaultCases));
  const normalized = [...items];
  while (normalized.length < 8) normalized.push(defaultCases[normalized.length % defaultCases.length]);
  const ctaBlock = gallery.ctaBlock || {};
  const cta = ctaBlock.cta || {label: 'Quero ser a próxima', kind: 'whatsapp'};
  const figure = (item: any) => {
    const fallback = item.image?.fallbackSrc || '/assets/images/hero-vitoria.jpg';
    return `<figure><img src="${html(imageSrc(item.image, fallback, 900))}" alt="${html(imageAlt(item.image, item.title))}" loading="lazy" /></figure>`;
  };

  return `<section class="sticky-gallery" aria-label="Portfólio de transformações">
          <div class="sticky-gallery__grid">
            <div class="sticky-gallery__column">
              ${normalized.slice(0, 4).map(figure).join('\n              ')}
            </div>

            <div class="sticky-gallery__column sticky-gallery__column--pinned">
              ${figure(normalized[4])}
              <div class="sticky-gallery__cta">
                <strong>${nl2br(ctaBlock.title || 'A próxima\ntransformação\npode ser a sua.')}</strong>
                <p>${html(ctaBlock.text || 'Agende sua avaliação e descubra o melhor caminho para valorizar sua autoestima.')}</p>
                <a class="button" data-whatsapp-link href="${html(ctaHref(cta, mergedSettings))}">${html(cta.label || 'Quero ser a próxima')}</a>
              </div>
              ${normalized.slice(5, 7).map(figure).join('\n              ')}
            </div>

            <div class="sticky-gallery__column">
              ${normalized.slice(7, 11).map(figure).join('\n              ')}
            </div>
          </div>
        </section>`;
}

function renderHomeFaq(page: any) {
  const items = asArray(page?.faq, defaultHomeFaq);
  const groups = chunk(items, Math.ceil(items.length / 2));

  return `<section class="section" id="duvidas">
          <div class="section-heading">
            <p class="eyebrow">Dúvidas comuns</p>
            <h2 class="section-heading__title--wide section-heading__title--natural">Perguntas que ajudam a decidir com mais segurança.</h2>
            <p>Respostas rápidas para quem ainda está entendendo qual tratamento faz mais sentido e como funciona o agendamento.</p>
          </div>

          <div class="faq-list faq-list--columns">
            ${groups.map((group) => `<div class="faq-list__column">
              ${group.map((item: any) => `<details>
                <summary>${html(item.question)}</summary>
                <p>${html(item.answer)}</p>
              </details>`).join('\n\n              ')}
            </div>`).join('\n\n            ')}
          </div>
        </section>`;
}

export function renderHomeContent(fallbackContent: string, data: any) {
  const page = data?.page;
  const settings = data?.settings;
  let content = fallbackContent;

  content = replaceBlock(content, /<header class="site-header" data-mobile-nav>[\s\S]*?<\/header>/, renderHeader(settings));
  content = replaceBlock(content, /<footer class="site-footer site-footer--rich">[\s\S]*?<\/footer>/, renderFooter(settings));
  content = replaceExactClassSection(content, 'hero section home-hero', renderHomeHero(page, settings));
  content = replaceExactClassSection(content, 'hero-highlights-mobile', renderHomeMobileHighlights(page));
  content = replaceBlock(content, /<section class="section">\s*<div class="section-heading">\s*<p class="eyebrow">Tratamentos<\/p>[\s\S]*?<\/section>/, renderHomeTreatments(page, data?.transformationCases));
  content = replaceExactClassSection(content, 'section section--split', renderAbout(page));
  content = replaceBlock(content, /<section class="section">\s*<div class="reviews-showcase">[\s\S]*?<\/section>/, renderReviews(page, data?.testimonials, settings));
  content = replaceExactClassSection(content, 'section journey-section', renderJourney(page));
  content = replaceExactClassSection(content, 'sticky-gallery', renderStickyGallery(page, data?.galleryCases, settings));
  content = replaceBlock(content, /<section class="section" id="duvidas">[\s\S]*?<\/section>/, renderHomeFaq(page));

  return content;
}

function renderServiceHero(page: any, settings: any) {
  const hero = page?.hero || {};
  const mergedSettings = settingsWithFallback(settings);
  const cta = hero.cta || {label: 'Agendar avaliação', kind: 'whatsapp'};
  const image = imageSrc(hero.image || hero.externalImage, hero.externalImage?.url || '/assets/images/hero-vitoria.jpg', 900);
  const alt = imageAlt(hero.image || hero.externalImage, hero.externalImage?.alt || hero.title);
  const tags = asArray(hero.tags, []);

  return `<section class="hero">
    <div class="hero__content reveal">
      ${hero.eyebrow ? `<span class="eyebrow">${html(hero.eyebrow)}</span>` : ''}
      <h1 class="hero__title">${nl2br(hero.title || page?.title || '')}${hero.emphasis ? `<br><em>${html(hero.emphasis)}</em>` : ''}</h1>
      ${hero.description ? `<p class="hero__desc">${html(hero.description)}</p>` : ''}
      <div class="hero__actions">
        <a href="${html(ctaHref(cta, mergedSettings))}" class="btn btn--primary" data-whatsapp-link>${html(cta.label || 'Agendar avaliação')}</a>
      </div>
      ${tags.length ? `<div class="hero__tags">${tags.map((tag: string) => `<span class="tag">${html(tag)}</span>`).join('\n        ')}</div>` : ''}
    </div>
    <div class="hero__visual reveal reveal--right">
      <div class="hero__image-wrap">
        <img src="${html(image)}" alt="${html(alt)}" class="hero__img" />
        ${hero.badge?.number || hero.badge?.label ? `<div class="hero__badge">
          <span class="badge__number">${html(hero.badge?.number || '')}</span>
          <span class="badge__label">${html(hero.badge?.label || '')}</span>
        </div>` : ''}
      </div>
    </div>
  </section>`;
}

function renderInfoCards(cards: any[]) {
  if (!cards?.length) return '';

  return `<section class="what-is section what-is--cards-only">
    <div class="container">
      <div class="what-is__grid">
        <div class="what-is__cards reveal reveal--right">
          ${cards.map((card: any) => `<div class="info-card">
            ${card.iconLabel ? `<div class="info-card__icon">${html(card.iconLabel)}</div>` : ''}
            <h3>${html(card.title)}</h3>
            <p>${html(card.text)}</p>
          </div>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>`;
}

function renderAreas(section: any) {
  const cards = asArray(section?.cards, []);
  if (section?.enabled === false || !cards.length) return '';

  return `<section class="areas section section--dark">
    <div class="container">
      <div class="section-label reveal">
        <span class="line"></span>
        <span>${html(section.eyebrow || 'ÁREAS TRATADAS')}</span>
      </div>
      <h2 class="section-title text-center reveal">${nl2br(section.title || '')}</h2>
      <div class="areas__grid">
        ${cards.map((card: any, index: number) => {
          const image = imageSrc(card.image || card.externalImage, card.externalImage?.url || '/assets/images/hero-vitoria.jpg', 700);
          const alt = imageAlt(card.image || card.externalImage, card.externalImage?.alt || card.title);
          return `<div class="area-card reveal${index ? ` reveal--delay${Math.min(index, 3)}` : ''}">
          <div class="area-card__img-wrap">
            <img src="${html(image)}" alt="${html(alt)}" />
            <span class="area-card__label">${html(card.label)}</span>
          </div>
          <div class="area-card__body">
            <h3>${html(card.title)}</h3>
            <p>${html(card.text)}</p>
          </div>
        </div>`;
        }).join('\n        ')}
      </div>
    </div>
  </section>`;
}

function renderMyths(section: any) {
  const items = asArray(section?.items, []);
  if (section?.enabled === false || !items.length) return '';

  return `<section class="myths section">
    <div class="container">
      <div class="section-label reveal">
        <span class="line"></span>
        <span>${html(section.eyebrow || 'MITOS E VERDADES')}</span>
      </div>
      <h2 class="section-title reveal section-title--two-lines">${nl2br(section.title || '')}</h2>
      <div class="before-after__carousel" data-mobile-carousel>
        <div class="myths__grid" data-carousel-track>
          ${items.map((item: any, index: number) => {
            const isTrue = item.kind === 'verdade';
            return `<div class="myth-card myth-card--${isTrue ? 'true' : 'false'} reveal${index ? ` reveal--delay${Math.min(index, 3)}` : ''}">
            <span class="myth-badge myth-badge--${isTrue ? 'true' : 'false'}">${isTrue ? 'VERDADE' : 'MITO'}</span>
            <h3>${html(item.title)}</h3>
            <p>${html(item.text)}</p>
          </div>`;
          }).join('\n          ')}
        </div>
        <div class="before-after__controls" aria-label="Navegação dos mitos e verdades">
          <div class="before-after__dots" data-carousel-dots></div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderServiceFaq(items: any[]) {
  if (!items?.length) return '';

  return `<section class="faq section">
    <div class="container">
      <div class="section-label reveal">
        <span class="line"></span>
        <span>DÚVIDAS COMUNS</span>
      </div>
      <h2 class="section-title reveal">Perguntas que ajudam<br>a decidir com mais segurança.</h2>
      <div class="faq__grid">
        ${items.map((item: any, index: number) => `<div class="faq-item reveal${index % 2 ? ' reveal--delay1' : ''}" data-open="false">
          <button class="faq-question" onclick="toggleFaq(this)">
            <span>${html(item.question)}</span>
            <span class="faq-icon">›</span>
          </button>
          <div class="faq-answer">
            <p>${html(item.answer)}</p>
          </div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

function renderFinalCta(section: any, settings: any) {
  if (section?.enabled === false) return '';
  const mergedSettings = settingsWithFallback(settings);
  const primary = section?.primaryCta || {label: 'Falar no WhatsApp', kind: 'whatsapp'};
  const secondary = section?.secondaryCta || {label: 'Ver Instagram', kind: 'instagram'};

  return `<section class="cta-final section" id="agendar">
    <div class="container">
      <div class="cta-final__inner reveal">
        ${section?.eyebrow ? `<span class="eyebrow">${html(section.eyebrow)}</span>` : ''}
        <h2>${nl2br(section?.title || 'Pronta para uma versão mais natural de você?')}</h2>
        ${section?.text ? `<p>${html(section.text)}</p>` : ''}
        <div class="cta-final__actions">
          <a href="${html(ctaHref(primary, mergedSettings))}" target="_blank" class="btn btn--primary btn--large" data-whatsapp-link>${html(primary.label || 'Falar no WhatsApp')}</a>
          <a href="${html(ctaHref(secondary, mergedSettings, mergedSettings.social.instagramUrl))}" class="btn btn--ghost-dark">${html(secondary.label || 'Ver Instagram')}</a>
        </div>
      </div>
    </div>
  </section>`;
}

function renderServiceTransformations(section: any, cases: any[]) {
  if (section?.enabled === false) return '';
  const cards = asArray(section?.cases, cases);
  if (!cards?.length) return '';

  return `<section id="tratamentos-botox" class="section treatments-showcase treatments-showcase--botox" data-treatment-carousel="botox">
          <div class="section-heading">
            <p class="eyebrow">${html(section?.eyebrow || 'Tratamentos')}</p>
            <h2 class="section-heading__title--wide">${html(section?.title || 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.')}</h2>
            ${section?.text ? `<p>${html(section.text)}</p>` : ''}
          </div>

          <div class="transformations-marquee transformations-marquee--botox" aria-label="Galeria de transformações">
            <div class="transformations-marquee__track">
              ${renderTransformationCards(cards)}
            </div>
          </div>
        </section>`;
}

export function renderServiceContent(fallbackContent: string, data: any) {
  const page = data?.page;
  const settings = data?.settings;
  let content = fallbackContent;

  content = replaceBlock(content, /<header class="site-header" data-mobile-nav>[\s\S]*?<\/header>/, renderHeader(settings));
  content = replaceBlock(content, /<footer class="site-footer site-footer--rich">[\s\S]*?<\/footer>/, renderFooter(settings));

  if (!page) return content;

  if (page.hero) {
    content = replaceExactClassSection(content, 'hero', renderServiceHero(page, settings));
  }

  if (page.transformationsSection || data?.transformationCases?.length) {
    content = replaceBlock(content, /<section id="tratamentos-botox"[\s\S]*?<\/section>/, renderServiceTransformations(page.transformationsSection, data?.transformationCases));
  }

  if (page.infoCards?.length) {
    content = replaceBlock(content, /<section class="what-is section[\s\S]*?<\/section>/, renderInfoCards(page.infoCards));
  }

  if (page.areasSection?.cards?.length) {
    content = replaceExactClassSection(content, 'areas section section--dark', renderAreas(page.areasSection));
  }

  if (page.mythsSection?.items?.length) {
    content = replaceExactClassSection(content, 'myths section', renderMyths(page.mythsSection));
  }

  if (page.faq?.length) {
    content = replaceExactClassSection(content, 'faq section', renderServiceFaq(page.faq));
  }

  if (page.finalCta) {
    content = replaceExactClassSection(content, 'cta-final section', renderFinalCta(page.finalCta, settings));
  }

  return content;
}

function portableTextToHtml(blocks: any[] = []) {
  return blocks.map((block) => {
    if (block?._type !== 'block') return '';
    const text = asArray(block.children, []).map((child: any) => child.text || '').join('');
    return text ? `<p>${html(text)}</p>` : '';
  }).join('\n');
}

export function renderPrivacyContent(fallbackContent: string, data: any) {
  const page = data?.page;
  const settings = data?.settings;
  let content = fallbackContent;

  content = replaceBlock(content, /<header class="site-header" data-mobile-nav>[\s\S]*?<\/header>/, renderHeader(settings));
  content = replaceBlock(content, /<footer class="site-footer site-footer--rich">[\s\S]*?<\/footer>/, renderFooter(settings));

  if (!page?.sections?.length) return content;

  const policyHtml = `<main class="legal-page">
        <section class="section legal-section">
          <div class="container">
            <div class="section-heading">
              <p class="eyebrow">${html(page.updatedAtLabel || 'Política de Privacidade')}</p>
              <h1>${html(page.title || 'Política de Privacidade')}</h1>
              ${page.intro ? `<p>${html(page.intro)}</p>` : ''}
            </div>

            <div class="legal-content">
              ${page.sections.map((section: any) => `<section>
                <h2>${html(section.title)}</h2>
                ${portableTextToHtml(section.body)}
              </section>`).join('\n\n              ')}
            </div>
          </div>
        </section>
      </main>`;

  return replaceBlock(content, /<main[\s\S]*?<\/main>/, policyHtml);
}
