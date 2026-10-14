import {sanityImageUrl} from './sanity';

const defaultNav = [
  {label: 'Lentes Tradicionais', href: '/paginas/lentes-em-resina.html'},
  {label: 'Lentes Premium', href: '/paginas/lentes-em-porcelana.html'},
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
    taxId: '61.201.382/0001-06',
  },
  social: {
    instagramUrl: 'https://www.instagram.com/dra.vitoriapassosv/',
  },
};

const headerLogoSrc = '/assets/images/pisom-header-logo.svg';
const footerLogoSrc = '/assets/images/pison-odontologia-branco-sem-fundo.svg';

const serviceHeroImages: Record<string, {src: string; alt: string}> = {
  'lentes-em-resina': {
    src: '/assets/images/real/lentes-tradicionais-hero.webp',
    alt: 'Antes e depois de Lentes Tradicionais',
  },
  'lentes-premium': {
    src: '/assets/images/real/lentes-premium-hero.webp',
    alt: 'Antes e depois de Lentes Premium',
  },
  'lentes-em-porcelana': {
    src: '/assets/images/real/lentes-premium-hero.webp',
    alt: 'Antes e depois de Lentes Premium',
  },
  'preenchimento-labial': {
    src: '/assets/images/real/preenchimento-labial-hero.webp',
    alt: 'Antes e depois de preenchimento labial',
  },
  gengivoplastia: {
    src: '/assets/images/real/hero-gengi.webp',
    alt: 'Caso de gengivoplastia com antes e depois',
  },
  'harmonizacao-facial': {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80',
    alt: 'Harmonização Facial',
  },
};

const defaultCases = [
  {
    title: 'Preenchimento Labial',
    caption: 'Antes e depois com contorno, equilíbrio e acabamento natural.',
    targetPage: '/paginas/preenchimento-labial.html',
    image: {fallbackSrc: '/assets/images/real/preenchimento-labial-carrossel.webp', alt: 'Caso de preenchimento labial com antes e depois na mesma imagem'},
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
];

const defaultGalleryCases = Array.from({length: 10}, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    title: `Paciente ${number}`,
    image: {
      fallbackSrc: `/assets/images/real/sticky/paciente-${number}.webp`,
      alt: 'Paciente sorrindo em retrato para a galeria da home',
    },
  };
}).concat({
  title: 'Retrato feminino em destaque',
  image: {
    fallbackSrc: '/assets/images/real/moca_direita_1000x1280.svg',
    alt: 'Retrato feminino em destaque',
  },
});

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
    answer: 'Isso depende do seu objetivo. Lentes em resina costumam fazer mais sentido para transformar forma e estética do sorriso, preenchimento para dar contorno e volume aos lábios, e gengivoplastia para harmonizar o excesso de gengiva. A avaliação é o que define a melhor indicação para o seu caso.',
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

const defaultServiceFaqs: Record<string, Array<{question: string; answer: string}>> = {
  'lentes-em-resina': [
    {
      question: 'As lentes em resina desgastam muito os dentes?',
      answer: 'Em muitos casos, o desgaste é mínimo ou até dispensável. Isso sempre depende da condição inicial do sorriso e do planejamento estético proposto.',
    },
    {
      question: 'As lentes em resina ficam com aspecto artificial?',
      answer: 'Quando o caso é bem conduzido, a proposta é justamente o contrário: deixar o sorriso mais bonito e mais harmônico sem perder naturalidade.',
    },
    {
      question: 'Quanto tempo dura o procedimento completo?',
      answer: 'Em comparação com outras abordagens, a resina costuma permitir um processo mais ágil. O número de sessões varia conforme a extensão do caso e o refinamento necessário.',
    },
    {
      question: 'É possível corrigir dentes pequenos, manchados ou desalinhados?',
      answer: 'Sim. A resina pode ser indicada para corrigir formato, pequenas assimetrias, manchas e desalinhamentos visuais que incomodam no sorriso.',
    },
    {
      question: 'Preciso de algum cuidado especial com as lentes?',
      answer: 'A higiene continua essencial, e bons hábitos ajudam a preservar brilho e integridade. Revisões periódicas fazem parte da manutenção do resultado.',
    },
    {
      question: 'Lentes em resina podem ser combinadas com outros tratamentos?',
      answer: 'Sim. Dependendo do caso, ajustes gengivais, clareamento de dentes posteriores ou outros procedimentos podem complementar o resultado final.',
    },
    {
      question: 'A cor das lentes em resina pode ser escolhida?',
      answer: 'Sim. A cor é definida no planejamento, considerando seu sorriso, tom de pele, expectativa estética e o quanto o resultado deve parecer natural.',
    },
    {
      question: 'As lentes em resina mancham com o tempo?',
      answer: 'A resina pode sofrer alteração de brilho ou cor com hábitos como café, vinho, cigarro e falta de manutenção. Por isso, cuidados e revisões ajudam a preservar o acabamento.',
    },
  ],
  'lentes-premium': [
    {
      question: 'Qual a diferença entre resina e Lentes Premium?',
      answer: 'A resina é aplicada diretamente no consultório e costuma ter custo menor. As Lentes Premium são planejadas com acabamento mais refinado, maior estabilidade estética e alta durabilidade.',
    },
    {
      question: 'Quanto tempo dura o procedimento completo?',
      answer: 'O tempo varia conforme o caso, mas geralmente envolve uma avaliação, planejamento, preparo quando necessário e a etapa final de instalação ou acabamento.',
    },
    {
      question: 'Preciso de algum cuidado especial com as lentes?',
      answer: 'A higiene é semelhante à dos dentes naturais. Também é importante evitar morder objetos duros com os dentes da frente e manter revisões periódicas.',
    },
    {
      question: 'As lentes machucam ou danificam os dentes?',
      answer: 'Quando bem indicadas e planejadas, as lentes são feitas com cuidado para preservar estrutura dental sempre que possível e entregar um resultado seguro.',
    },
    {
      question: 'Como é feita a simulação do sorriso?',
      answer: 'A simulação considera fotos, proporção facial, linha do sorriso e expectativa da paciente para visualizar melhor a proposta antes da execução.',
    },
    {
      question: 'Posso combinar lentes com outros tratamentos?',
      answer: 'Sim. Clareamento, gengivoplastia ou outros procedimentos podem ser indicados para deixar o resultado mais harmônico e completo.',
    },
    {
      question: 'As Lentes Premium ficam muito brancas?',
      answer: 'Não precisam ficar. A cor é escolhida de acordo com o planejamento, podendo ser mais natural, mais clara ou mais marcante conforme o objetivo e a harmonia do rosto.',
    },
    {
      question: 'Para quem as Lentes Premium são indicadas?',
      answer: 'Elas costumam fazer sentido para quem busca uma mudança mais refinada de cor, forma, proporção e acabamento, com maior previsibilidade estética.',
    },
  ],
  'lentes-em-porcelana': [],
  'preenchimento-labial': [
    {
      question: 'O preenchimento labial sempre aumenta muito os lábios?',
      answer: 'Não. O procedimento pode ser feito de forma sutil, com foco em contorno, hidratação, simetria e proporção.',
    },
    {
      question: 'O resultado do preenchimento labial é imediato?',
      answer: 'O volume já pode ser percebido logo após o procedimento, mas o resultado final fica mais fiel depois do período inicial de adaptação.',
    },
    {
      question: 'Quanto tempo dura o preenchimento labial?',
      answer: 'A duração varia conforme metabolismo, produto e rotina da pessoa, exigindo manutenção periódica em alguns casos.',
    },
    {
      question: 'É possível corrigir assimetria labial com preenchimento?',
      answer: 'Sim. O preenchimento pode ajudar a equilibrar contornos e volumes, sempre respeitando a anatomia natural dos lábios.',
    },
    {
      question: 'Preenchimento labial pode focar mais em contorno do que em volume?',
      answer: 'Sim. Nem todo tratamento busca aumento evidente; muitas vezes o objetivo principal é definir contorno e melhorar a proporção.',
    },
    {
      question: 'Os lábios podem continuar com aparência natural?',
      answer: 'Sim. Quando o planejamento respeita o formato do rosto e a anatomia labial, o resultado tende a ficar delicado e coerente.',
    },
    {
      question: 'Quem tem lábios finos pode buscar um resultado discreto?',
      answer: 'Pode. O procedimento pode ser conduzido com suavidade, valorizando hidratação, desenho e equilíbrio sem exagerar no volume.',
    },
    {
      question: 'Preenchimento labial combina com lentes em resina?',
      answer: 'Sim. Em alguns casos, ele complementa tanto o sorriso quanto a leitura facial, deixando o conjunto mais harmônico.',
    },
  ],
  gengivoplastia: [
    {
      question: 'A gengivoplastia dói?',
      answer: 'O procedimento é feito com anestesia local e foco em conforto. É comum haver sensibilidade leve no período inicial, seguindo as orientações pós-procedimento.',
    },
    {
      question: 'Quando a gengivoplastia é indicada?',
      answer: 'Ela pode ser indicada quando há excesso de gengiva aparente, contorno irregular ou desejo de deixar o sorriso mais proporcional.',
    },
    {
      question: 'O resultado aparece na hora?',
      answer: 'A mudança no contorno já pode ser percebida, mas o aspecto final depende da cicatrização e da acomodação dos tecidos.',
    },
    {
      question: 'Quanto tempo leva para cicatrizar?',
      answer: 'A recuperação varia conforme o caso, mas os primeiros cuidados costumam se concentrar nos dias iniciais. A Dra. Vitória orienta cada etapa.',
    },
    {
      question: 'A gengiva pode voltar ao formato antigo?',
      answer: 'Quando bem indicada e executada, a tendência é o contorno permanecer estável. Cada caso precisa ser avaliado individualmente.',
    },
    {
      question: 'Gengivoplastia combina com lentes?',
      answer: 'Sim. Em muitos casos, o contorno gengival é planejado junto com lentes para melhorar proporção, simetria e harmonia do sorriso.',
    },
    {
      question: 'Preciso me afastar da rotina depois do procedimento?',
      answer: 'Na maioria dos casos, o retorno à rotina é rápido, com alguns cuidados específicos de alimentação, higiene e esforço físico conforme orientação.',
    },
    {
      question: 'A gengivoplastia muda o tamanho dos dentes?',
      answer: 'Ela não muda o dente em si, mas pode revelar melhor a proporção dental ao ajustar o excesso ou irregularidade da gengiva.',
    },
  ],
};

defaultServiceFaqs['lentes-em-porcelana'] = defaultServiceFaqs['lentes-premium'];

const defaultServiceMyths: Record<string, Array<{kind: string; title: string; text: string}>> = {
  'preenchimento-labial': [
    {
      kind: 'mito',
      title: '"Preenchimento sempre fica exagerado"',
      text: 'O resultado pode ser discreto e elegante quando o plano respeita anatomia, proporção e objetivo da paciente.',
    },
    {
      kind: 'verdade',
      title: '"Dá para priorizar contorno"',
      text: 'Nem todo caso precisa de muito volume. Muitas vezes o foco é desenho, definição e acabamento.',
    },
    {
      kind: 'mito',
      title: '"Todo mundo deve usar a mesma quantidade"',
      text: 'A quantidade varia conforme anatomia, expectativa, proporção facial e resposta individual do tecido.',
    },
    {
      kind: 'verdade',
      title: '"A acomodação muda o resultado inicial"',
      text: 'Nos primeiros dias pode haver inchaço. O acabamento fica mais fiel depois da fase inicial de adaptação.',
    },
    {
      kind: 'mito',
      title: '"Depois que faz, precisa manter para sempre"',
      text: 'Não existe obrigação de manutenção contínua. A decisão de retocar depende do desejo da paciente, da duração do resultado e da avaliação profissional.',
    },
    {
      kind: 'verdade',
      title: '"A quantidade ideal varia em cada rosto"',
      text: 'O volume e a técnica são definidos de forma individual, considerando anatomia, contorno, simetria e o efeito natural desejado.',
    },
  ],
  'lentes-em-resina': [
    {kind: 'mito', title: '"Lentes em resina sempre ficam artificiais"', text: 'Quando o planejamento respeita proporção, cor e expressão facial, a resina pode entregar um resultado leve e coerente.'},
    {kind: 'verdade', title: '"A naturalidade depende do planejamento"', text: 'O que deixa o sorriso bonito é acertar forma, bordas, volume e leitura estética do conjunto.'},
    {kind: 'mito', title: '"A resina serve só para clarear"', text: 'Ela também pode reorganizar formato, corrigir pequenas assimetrias e melhorar a proporção aparente do sorriso.'},
    {kind: 'verdade', title: '"Cada caso pede um limite diferente"', text: 'Nem todo sorriso combina com o mesmo volume, cor ou desenho. A individualização é parte central do resultado.'},
    {kind: 'mito', title: '"Resultado delicado não combina com resina"', text: 'Em muitos casos, ela é escolhida justamente por permitir refinamento elegante e leitura mais leve.'},
    {kind: 'verdade', title: '"A avaliação define se faz sentido"', text: 'Mais importante do que gostar do procedimento é entender se ele é o melhor caminho para sua estrutura dental.'},
  ],
  'lentes-premium': [
    {kind: 'mito', title: '"Lentes Premium sempre ficam marcadas"', text: 'Com planejamento de cor, textura e formato, o resultado pode ficar sofisticado sem perder naturalidade.'},
    {kind: 'verdade', title: '"O planejamento aumenta a previsibilidade"', text: 'A análise do sorriso antes da execução ajuda a alinhar expectativa, proporção e acabamento.'},
    {kind: 'mito', title: '"Todo mundo deve escolher o branco máximo"', text: 'A cor ideal depende do rosto, da pele, dos dentes vizinhos e do objetivo estético.'},
    {kind: 'verdade', title: '"Acabamento muda a leitura do sorriso"', text: 'Brilho, forma, bordas e textura influenciam diretamente se o resultado parece natural e elegante.'},
    {kind: 'mito', title: '"Lentes resolvem qualquer caso sozinhas"', text: 'Alguns sorrisos pedem planejamento combinado com gengiva, clareamento ou outros ajustes.'},
    {kind: 'verdade', title: '"Durabilidade depende de cuidado"', text: 'Bons hábitos, higiene e revisões ajudam a preservar o resultado por mais tempo.'},
  ],
  gengivoplastia: [
    {kind: 'mito', title: '"Gengivoplastia é só estética"', text: 'Além da estética, o contorno pode ajudar na harmonia e na leitura proporcional dos dentes.'},
    {kind: 'verdade', title: '"O desenho muda o sorriso"', text: 'Pequenos ajustes no contorno gengival podem deixar os dentes mais aparentes e equilibrados.'},
    {kind: 'mito', title: '"Todo sorriso gengival precisa operar"', text: 'A indicação depende da causa do excesso gengival e da avaliação individual.'},
    {kind: 'verdade', title: '"Pode combinar com lentes"', text: 'Em alguns casos, ajustar gengiva e dentes juntos entrega um resultado mais harmônico.'},
    {kind: 'mito', title: '"O resultado aparece igual no primeiro dia"', text: 'O contorno já muda, mas o resultado final depende da cicatrização e acomodação do tecido.'},
    {kind: 'verdade', title: '"Planejamento evita exageros"', text: 'A análise de proporção ajuda a definir quanto remover e como preservar naturalidade.'},
  ],
};

defaultServiceMyths['lentes-em-porcelana'] = defaultServiceMyths['lentes-premium'];

const defaultServiceInfoCards: Record<string, Array<{iconLabel: string; title: string; text: string}>> = {
  'preenchimento-labial': [
    {iconLabel: 'Contorno', title: 'Mais definição', text: 'Realça o desenho dos lábios com sutileza.'},
    {iconLabel: 'Volume', title: 'Resultado equilibrado', text: 'A quantidade é planejada para respeitar sua face.'},
    {iconLabel: 'Hidratação', title: 'Aspecto renovado', text: 'Ajuda a melhorar textura e aparência dos lábios.'},
    {iconLabel: 'Simetria', title: 'Lábios mais harmônicos', text: 'Pequenas assimetrias podem ser suavizadas no planejamento.'},
    {iconLabel: 'Naturalidade', title: 'Sem exageros', text: 'A proposta é valorizar o formato sem perder leveza.'},
    {iconLabel: 'Planejamento', title: 'Indicação individual', text: 'Cada caso considera anatomia, expectativa e proporção facial.'},
  ],
  'lentes-premium': [
    {iconLabel: 'Estética', title: 'Transformação completa', text: 'Indicada para mudanças de cor, formato, tamanho e harmonia do sorriso.'},
    {iconLabel: 'Planejamento', title: 'Digital Smile Design', text: 'O novo sorriso é planejado antes da execução para alinhar expectativa e resultado.'},
    {iconLabel: 'Acabamento', title: 'Natural e premium', text: 'Busca brilho, proporção e acabamento refinado.'},
    {iconLabel: 'Durabilidade', title: 'Mais estabilidade', text: 'Materiais premium ajudam a manter estética e resistência por mais tempo.'},
    {iconLabel: 'Previsibilidade', title: 'Resultado planejado', text: 'Fotos, proporções e simulação orientam cada etapa do tratamento.'},
    {iconLabel: 'Harmonia', title: 'Sorriso sofisticado', text: 'O desenho considera rosto, gengiva e dentes para um conjunto elegante.'},
  ],
  gengivoplastia: [
    {iconLabel: 'Precisão', title: 'Remodelação delicada', text: 'A gengiva é remodelada para valorizar a proporção do sorriso.'},
    {iconLabel: 'Indicação', title: 'Sorriso gengival', text: 'Pode ser indicada quando há excesso ou assimetria no contorno gengival.'},
    {iconLabel: 'Resultado', title: 'Mais simetria', text: 'O resultado revela dentes com proporção mais equilibrada.'},
    {iconLabel: 'Harmonia', title: 'Contorno mais leve', text: 'O desenho gengival ajuda o sorriso a parecer mais proporcional.'},
    {iconLabel: 'Combinação', title: 'Pode complementar lentes', text: 'Em alguns casos, o ajuste gengival melhora o acabamento do sorriso.'},
    {iconLabel: 'Recuperação', title: 'Cuidados orientados', text: 'A paciente recebe instruções para acompanhar a cicatrização com segurança.'},
  ],
  'harmonizacao-facial': [
    {iconLabel: 'Avaliação', title: 'Plano personalizado', text: 'A indicação considera proporção facial, sorriso, pele e objetivos.'},
    {iconLabel: 'Combinação', title: 'Tratamentos integrados', text: 'Pode envolver preenchimento e outros recursos estéticos.'},
    {iconLabel: 'Naturalidade', title: 'Resultado elegante', text: 'O foco é harmonizar sem descaracterizar seu rosto.'},
    {iconLabel: 'Proporção', title: 'Traços equilibrados', text: 'O planejamento busca valorizar o conjunto facial.'},
    {iconLabel: 'Conforto', title: 'Processo orientado', text: 'Cada etapa é explicada para trazer mais segurança à decisão.'},
    {iconLabel: 'Expressão', title: 'Leveza preservada', text: 'A intenção é realçar sem deixar aparência pesada.'},
  ],
};

defaultServiceInfoCards['lentes-em-porcelana'] = defaultServiceInfoCards['lentes-premium'];

function html(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function nl2br(value: unknown) {
  return html(value).replace(/\n/g, '<br>');
}

function paragraphsFromText(value: unknown, fallback: string[]) {
  const text = String(value ?? '').trim();
  if (!text) return fallback;
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

function asArray<T>(value: T[] | undefined | null, fallback: T[] = []) {
  return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function serviceFaqItems(page: any) {
  const fallback = defaultServiceFaqs[page?.serviceKey] || defaultServiceFaqs[page?.slug?.current] || [];
  const items = [...asArray(page?.faq, []), ...fallback];
  const seen = new Set<string>();

  return items.filter((item) => {
    const question = String(item?.question || '').trim();
    const answer = String(item?.answer || '').trim();
    const key = question.toLowerCase();

    if (!question || !answer || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 6);
}

function serviceMythItems(section: any, serviceKey = '') {
  const fallback = defaultServiceMyths[serviceKey] || [];
  const items = [...asArray(section?.items, []), ...fallback];
  const seen = new Set<string>();

  return items.filter((item) => {
    const kind = String(item?.kind || '').trim();
    const title = String(item?.title || '').trim();
    const text = String(item?.text || '').trim();
    const key = `${kind}:${title}`.toLowerCase();

    if (!kind || !title || !text || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 6);
}

function serviceInfoCards(page: any) {
  const serviceKey = page?.serviceKey || page?.slug?.current || '';
  const fallback = defaultServiceInfoCards[serviceKey] || [];
  const items = [...asArray(page?.infoCards, []), ...fallback];
  const seen = new Set<string>();

  return items.filter((item) => {
    const title = String(item?.title || '').trim();
    const text = String(item?.text || '').trim();
    const key = title.toLowerCase();

    if (!title || !text || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 6);
}

function inferServiceKeyFromContent(content: string) {
  if (content.includes('tratamentos-preenchimento-labial') || content.includes('preenchimento-labial-hero')) return 'preenchimento-labial';
  if (content.includes('tratamentos-lentes-premium') || content.includes('lentes-premium-hero')) return 'lentes-premium';
  if (content.includes('tratamentos-lentes-em-resina') || content.includes('lentes-tradicionais-hero')) return 'lentes-em-resina';
  if (content.includes('tratamentos-gengivoplastia') || content.includes('hero-gengi')) return 'gengivoplastia';
  return '';
}

function replaceServiceFaq(content: string, items: any[]) {
  if (items.length < 4) return content;

  return replaceBlock(
    content,
    /<section class="faq section"[\s\S]*?<\/section>|<section class="section">\s*<div class="section-heading">[\s\S]*?<div class="faq-list[\s\S]*?<\/section>/,
    renderServiceFaq(items),
  );
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

function settingsWithFooter(data: any = {}) {
  const settings = settingsWithFallback(data?.settings);
  const footer = data?.footer || {};
  const instagramItem = footer.legalLinks?.find?.((item: any) => /instagram/i.test(item?.label || ''));
  const instagramHref = instagramItem?.href === 'custom' ? instagramItem?.customHref : instagramItem?.href;

  return {
    ...settings,
    footer,
    contact: {...settings.contact, ...(footer.contact || {})},
    social: {
      ...settings.social,
      ...(instagramHref
        ? {instagramUrl: instagramHref}
        : {}),
    },
    footerLogo: footer.footerLogo || settings.footerLogo,
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

function navigationHref(item: any, settings: any) {
  if (item?.href === 'custom') return item?.customHref || '#';
  if (item?.href === '#whatsapp') return ctaHref({kind: 'whatsapp'}, settings);
  return item?.href || '#';
}

function renderSiteConfig(settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const config = {
    contact: mergedSettings.contact,
    social: mergedSettings.social,
    navigation: asArray(mergedSettings.navigation, defaultNav).map((item: any) => ({
      ...item,
      href: navigationHref(item, mergedSettings),
    })),
    cookieBanner: mergedSettings.cookieBanner,
  };

  return `<script>window.PISOM_SITE_CONFIG = ${safeJson(config)};</script>`;
}

function replaceBlock(source: string, pattern: RegExp, replacement: string) {
  return source.replace(pattern, replacement);
}

function replaceExactClassSection(source: string, className: string, replacement: string) {
  return replaceBlock(source, new RegExp(`<section class="${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?<\\/section>`), replacement);
}

function replaceAnySection(source: string, patterns: RegExp[], replacement: string) {
  return patterns.reduce((next, pattern) => replaceBlock(next, pattern, replacement), source);
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

export function renderHead(head: string, seo: any, settings: any, fallbackOgImage?: any) {
  const mergedSettings = settingsWithFallback(settings);
  const pageSeo = {...(mergedSettings.defaultSeo || {}), ...(seo || {})};
  let next = head;
  const title = pageSeo.title || next.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = pageSeo.description || next.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/>/)?.[1];
  const canonicalPath = pageSeo.canonicalPath;
  const ogImage =
    imageSrc(fallbackOgImage, '', 1200) ||
    next.match(/<meta\s+property="og:image"\s+content="([^"]*)"\s*\/>/)?.[1] ||
    '';

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

  const favicon = imageSrc(mergedSettings.favicon, '', 96);
  if (favicon) {
    next = next.replace(/<link rel="icon"[^>]*>/, `<link rel="icon" type="image/svg+xml" href="${html(favicon)}" />`);
  }

  if (next.includes('"@type": "Dentist"')) {
    const dentistJson = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: mergedSettings.brandName || 'Pisom Odontologia',
      image: ogImage || undefined,
      email: mergedSettings.contact?.email ? `mailto:${mergedSettings.contact.email}` : undefined,
      telephone: mergedSettings.contact?.whatsappNumber ? `+${String(mergedSettings.contact.whatsappNumber).replace(/\D/g, '')}` : undefined,
      taxID: mergedSettings.contact?.taxId || undefined,
      address: mergedSettings.contact?.address
        ? {
            '@type': 'PostalAddress',
            streetAddress: mergedSettings.contact.address,
            postalCode: mergedSettings.contact?.postalCode,
            addressCountry: 'BR',
          }
        : undefined,
      sameAs: mergedSettings.social?.instagramUrl ? [mergedSettings.social.instagramUrl] : undefined,
    };
    next = next.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${safeJson(dentistJson)}</script>`,
    );
  }

  return next;
}

export function renderHeader(settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const nav = asArray(mergedSettings.navigation, defaultNav);
  const logoAlt = `Logo ${mergedSettings.brandName}`;

  return `${renderSiteConfig(mergedSettings)}
      <header class="site-header" data-mobile-nav>
        <a class="brand" href="/index.html" aria-label="Ir para a home">
          <img class="brand__logo" src="${html(headerLogoSrc)}" alt="${html(logoAlt)}" width="128" height="96" />
        </a>

        <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="site-header-panel" aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="site-header__panel" id="site-header-panel">
          <nav class="site-nav" aria-label="Navegação principal">
            ${nav.map((item: any) => `<a href="${html(navigationHref(item, mergedSettings))}">${html(item.label)}</a>`).join('\n            ')}
          </nav>

          <a class="button button--ghost site-header__cta" data-whatsapp-link href="${html(ctaHref({kind: 'whatsapp'}, mergedSettings))}">
            Agendar avaliação
          </a>
        </div>
      </header>`;
}

export function renderFooter(settings: any) {
  const mergedSettings = settingsWithFallback(settings);
  const footer = mergedSettings.footer || {};
  const treatmentLinks = asArray(footer.serviceLinks, asArray(mergedSettings.navigation, defaultNav));
  const helpLinks = asArray(footer.helpLinks, [
    {label: 'Home', href: '/index.html'},
    {label: 'Dúvidas', href: '/index.html#duvidas'},
    {label: 'Agendar avaliação', href: '#whatsapp'},
    {label: 'Política de Privacidade', href: '/politica-de-privacidade.html'},
  ]);
  const aboutLinks = asArray(footer.aboutLinks, [
    {label: 'Sobre a Dra. Vitória', href: '/index.html#sobre'},
    {label: 'Consultório', href: '/index.html#consultorio'},
    {label: 'Avaliações', href: '/index.html#avaliacoes'},
  ]);
  const legalLinks = asArray(footer.legalLinks, [
    {label: 'Instagram', href: mergedSettings.social?.instagramUrl || 'https://www.instagram.com/dra.vitoriapassosv/'},
    {label: 'Condições Legais e Privacidade', href: '/politica-de-privacidade.html'},
  ]);
  const footerLogoAlt = `Logo ${mergedSettings.brandName}`;
  const whatsapp = ctaHref({kind: 'whatsapp'}, mergedSettings);
  const instagramUrl = mergedSettings.social?.instagramUrl || 'https://www.instagram.com/dra.vitoriapassosv/';
  const addressParts = [
    mergedSettings.contact?.address,
    mergedSettings.contact?.postalCode,
  ].filter(Boolean);
  const baseAddress = footer.addressLine || addressParts.join(', ');
  const country = footer.country || 'Brasil';

  return `<footer class="site-footer site-footer--rich">
        <div class="site-footer__surface">
          <div class="site-footer__accordions">
            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Ajuda</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__links site-footer__panel">
                ${helpLinks.map((item: any) => `<a href="${html(navigationHref(item, mergedSettings))}"${item.href === '#whatsapp' ? ' data-whatsapp-link' : ''}>${html(item.label)}</a>`).join('\n                ')}
              </div>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Serviços</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__links site-footer__panel">
                ${treatmentLinks.map((item: any) => `<a href="${html(navigationHref(item, mergedSettings))}">${html(item.label)}</a>`).join('\n                ')}
              </div>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Sobre a Clínica</span>
                <span class="site-footer__chevron" aria-hidden="true"></span>
              </button>
              <div class="site-footer__links site-footer__panel">
                ${aboutLinks.map((item: any) => `<a href="${html(navigationHref(item, mergedSettings))}">${html(item.label)}</a>`).join('\n                ')}
              </div>
            </div>

            <div class="site-footer__column site-footer__accordion" data-footer-section>
              <button class="site-footer__toggle" type="button" aria-expanded="false">
                <span>Contato</span>
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

          <div class="site-footer__bottom">
            <nav class="site-footer__legal" aria-label="Links do rodapé">
              ${legalLinks.map((item: any) => {
                const href = navigationHref(item, mergedSettings) || instagramUrl;
                return `<a href="${html(href)}"${/^https?:\/\//.test(href) ? ' target="_blank" rel="noreferrer"' : ''}>${html(item.label)}</a>`;
              }).join('\n              ')}
            </nav>
            ${country ? `<p class="site-footer__country">${html(country)}</p>` : ''}
            ${baseAddress ? `<p class="site-footer__address">${html(baseAddress)}</p>` : ''}
            <img class="site-footer__logo" loading="lazy" decoding="async" src="${html(footerLogoSrc)}" alt="${html(footerLogoAlt)}" width="180" height="120" />
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
    const hint = item.hint || 'Clique e saiba mais';

    return `<a class="transformation-card transformation-card--single" href="${html(href)}"${item.hidden ? ' aria-hidden="true"' : ''}>
                <div class="transformation-card__images transformation-card__images--single">
                  <img loading="lazy" decoding="async" src="${html(src)}" alt="${html(alt)}" />
                </div>
                <div class="transformation-card__caption">
                  <strong${String(item.title || '').length > 24 ? ' class="transformation-card__title--long"' : ''}>${html(item.title)}</strong>
                  <span>${html(item.caption)}</span>
                  <em class="transformation-card__hint">${html(hint)}</em>
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
  const image = imageSrc(hero.image, '/assets/images/homepage.webp', 1200);
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
              <img fetchpriority="high" decoding="async" src="${html(image)}" alt="${html(alt)}" width="1080" height="1364" />
            </div>
          </div>
        </section>`;
}

function renderHomeMobileHighlights(page: any) {
  const items = asArray(page?.hero?.highlights, [
    'Atendimento com foco em resultado elegante e natural',
    'Planejamento personalizado para cada objetivo estético',
    'Procedimentos que valorizam sorriso, lábios e harmonia facial',
    'Avaliação cuidadosa para indicar o tratamento ideal',
    'Mais segurança para escolher o procedimento certo para você',
  ]);

  return `<section class="hero-highlights-mobile" aria-label="Diferenciais principais">
          <ul class="hero__highlights hero__highlights--mobile hero-highlights-mobile__inner">
            ${items.map((item: string) => `<li>${html(item)}</li>`).join('\n            ')}
          </ul>
        </section>`;
}

function renderHomeTreatments(page: any, cases: any[]) {
  const section = page?.treatmentsSection || {};
  const cards = asArray(section.items, cases);

  return `<section class="section">
          <div class="section-heading">
            <p class="eyebrow">${html(section.eyebrow || 'Tratamentos')}</p>
            <h2 class="section-heading__title--wide">${html(section.title || 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.')}</h2>
            <p>${html(section.text || 'Conheça os procedimentos da Dra. Vitória Passos e veja como cada detalhe pode valorizar o seu sorriso com naturalidade.')}</p>
          </div>

          <div class="transformations-marquee" aria-label="Galeria de transformações">
            <div class="transformations-marquee__track">
              ${renderTransformationCards(cards)}
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
                <img loading="lazy" decoding="async" src="${html(portrait)}" alt="${html(portraitAlt)}" width="520" height="640" />
              </div>
              ${paragraphs.slice(1).map((text: string) => `<p>${html(text)}</p>`).join('\n              ')}
              <div class="about-credentials">
                <ul class="credentials">
                  ${credentials.map((item: string) => `<li>${html(item)}</li>`).join('\n                  ')}
                </ul>
                <div class="about-signature" aria-hidden="true">
                  <img loading="lazy" decoding="async" src="${html(signature)}" alt="" width="420" height="140" />
                </div>
              </div>
            </div>

            <div class="about-portrait about-portrait--desktop">
              <img loading="lazy" decoding="async" src="${html(portrait)}" alt="${html(portraitAlt)}" width="520" height="640" />
            </div>
          </div>
        </section>`;
}

function renderOffice(page: any) {
  const office = page?.consultorio || {};
  const video = office.videoUrl || '/assets/videos/consultorio.mp4';
  const poster = imageSrc(office.image, '/assets/images/real/reviews-building.png', 900);
  const paragraphs = paragraphsFromText(office.text, [
    'Nosso consultório foi preparado para que sua experiência comece bem antes do atendimento: cadeira de massagem, snacks na recepção, estacionamento seguro no prédio, ambiente acolhedor, atendimento tranquilo e uma estrutura pensada para você se sentir à vontade enquanto cuida do seu sorriso.',
    'A ideia é que cada visita seja leve, confortável e sem pressa, com pequenos cuidados que ajudam você a relaxar desde a chegada até o fim da consulta. Tudo foi pensado para unir estética, acolhimento e praticidade em um só lugar.',
    'Assim, o momento de cuidar da estética também se torna uma experiência agradável: você chega com facilidade, espera com mais conforto e recebe um atendimento pensado para transmitir confiança em cada etapa.',
  ]);

  return `<section class="section consultorio-section" id="consultorio">
          <p class="eyebrow consultorio-section__eyebrow-mobile">${html(office.eyebrow || 'Consultório')}</p>
          <div class="consultorio-section__media">
            <video autoplay muted loop playsinline preload="metadata" poster="${html(poster)}">
              <source src="${html(video)}" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>

          <div class="consultorio-section__content">
            <p class="eyebrow">${html(office.eyebrow || 'Consultório')}</p>
            <h2>${html(office.title || 'Conforto em cada detalhe.')}</h2>
            ${paragraphs.map((paragraph) => `<p>${html(paragraph)}</p>`).join('\n            ')}
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
              <img loading="lazy" decoding="async" src="${html(image)}" alt="${html(alt)}" width="366" height="526" />
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
                <img loading="lazy" decoding="async" src="${html(image)}" alt="${html(alt)}" width="366" height="526" />
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
  const items = asArray(gallery.cases, asArray(cases, defaultGalleryCases));
  const normalized = [...items];
  while (normalized.length < 11) normalized.push(defaultGalleryCases[normalized.length % defaultGalleryCases.length]);
  const ctaBlock = gallery.ctaBlock || {};
  const cta = ctaBlock.cta || {label: 'Quero ser a próxima', kind: 'whatsapp'};
  const figure = (item: any) => {
    const fallback = item.image?.fallbackSrc || '/assets/images/hero-vitoria.jpg';
    return `<figure><img loading="lazy" decoding="async" src="${html(imageSrc(item.image, fallback, 900))}" alt="${html(imageAlt(item.image, item.title))}" /></figure>`;
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
  const settings = settingsWithFooter(data);
  let content = fallbackContent;

  content = replaceBlock(content, /<header class="site-header" data-mobile-nav>[\s\S]*?<\/header>/, renderHeader(settings));
  content = replaceBlock(content, /<footer class="site-footer site-footer--rich">[\s\S]*?<\/footer>/, renderFooter(settings));
  content = replaceExactClassSection(content, 'hero section home-hero', renderHomeHero(page, settings));
  content = replaceExactClassSection(content, 'hero-highlights-mobile', renderHomeMobileHighlights(page));
  content = replaceBlock(content, /<section class="section">\s*<div class="section-heading">\s*<p class="eyebrow">Tratamentos<\/p>[\s\S]*?<\/section>/, renderHomeTreatments(page, data?.transformationCases));
  content = replaceExactClassSection(content, 'section section--split', renderAbout(page));
  const officeSection = renderOffice(page);
  content = content.includes('consultorio-section')
    ? replaceExactClassSection(content, 'section consultorio-section', officeSection)
    : content.replace(/(<section class="section section--split"[\s\S]*?<\/section>)/, `$1\n\n        ${officeSection}`);
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
  const serviceId = page?.serviceKey || page?.slug?.current || '';
  const fixedHero = serviceHeroImages[serviceId];
  const image = fixedHero?.src || imageSrc(hero.image || hero.externalImage, hero.externalImage?.url || '/assets/images/hero-vitoria.jpg', 900);
  const alt = fixedHero?.alt || imageAlt(hero.image || hero.externalImage, hero.externalImage?.alt || hero.title);
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
        <img fetchpriority="high" decoding="async" src="${html(image)}" alt="${html(alt)}" class="hero__img" />
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
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Benefícios</p>
        <h2 class="section-heading__title--wide">O que esse tratamento pode melhorar na sua rotina.</h2>
      </div>
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
            <img loading="lazy" decoding="async" src="${html(image)}" alt="${html(alt)}" />
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

function renderMyths(section: any, serviceKey = '') {
  const items = serviceMythItems(section, serviceKey);
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

function renderProcess(section: any) {
  const steps = asArray(section?.steps, []);
  if (section?.enabled === false || !steps.length) return '';

  return `<section class="process section section--beige">
    <div class="container">
      <div class="section-label reveal">
        <span class="line"></span>
        <span>${html(section?.eyebrow || 'COMO FUNCIONA')}</span>
      </div>
      <h2 class="section-title text-center reveal">${nl2br(section?.title || 'Do planejamento ao resultado: cada etapa com cuidado.')}</h2>
      <div class="process__steps">
        ${steps.map((step: any, index: number) => `<div class="process-step reveal${index ? ` reveal--delay${Math.min(index, 3)}` : ''}">
          <div class="step-number">${html(step.number || String(index + 1).padStart(2, '0'))}</div>
          <div class="step-body">
            <h3>${html(step.title)}</h3>
            <p>${html(step.text)}</p>
          </div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

function renderQuiz(section: any, settings: any) {
  if (section?.enabled === false || !section?.steps?.length) return '';
  const mergedSettings = settingsWithFallback(settings);
  const cta = section.cta || {label: 'Agendar avaliação', kind: 'whatsapp'};
  let questionNumber = 0;

  return `<section class="section section--spacious-top section--dark-fade section-fade section--resina-quiz-locked">
    <div class="reviews-showcase reviews-showcase--service">
      <div class="reviews-showcase__visual reviews-showcase__visual--cutout">
        <img loading="lazy" decoding="async" class="reviews-showcase__cutout" src="/assets/images/real/lentes-o-que-muda.png" alt="Sorriso com lentes em resina em recorte lateral" width="437" height="570" />
      </div>

      <div class="reviews-showcase__content">
        <div class="section-heading section-heading--reviews">
          <p class="eyebrow">${html(section.eyebrow || 'Mini quiz')}</p>
          <h2>${html(section.title || 'A resina combina com você?')}</h2>
          ${section.description ? `<p>${html(section.description)}</p>` : ''}
        </div>

        <div class="resina-quiz" data-resina-quiz>
          <div class="resina-quiz__questions" data-quiz-questions>
            ${section.steps.map((step: any, stepIndex: number) => `<div class="resina-quiz__step-panel${stepIndex === 0 ? ' is-active' : ''}" data-quiz-step${stepIndex === 0 ? '' : ' hidden'}>
              ${asArray(step.questions, []).map((question: any) => {
                questionNumber += 1;
                return `<div class="resina-quiz__question" data-quiz-question>
                <strong><span class="resina-quiz__step">${html(String(questionNumber).padStart(2, '0'))}.</span> ${html(question.question)}</strong>
                <div class="resina-quiz__choices resina-quiz__choices--stack">
                  ${asArray(question.choices, []).map((choice: string) => `<button class="resina-quiz__choice" type="button" data-quiz-choice data-group="${html(question.group)}">${html(choice)}</button>`).join('\n                  ')}
                </div>
              </div>`;
              }).join('\n\n              ')}
            </div>`).join('\n\n            ')}
          </div>

          <div class="resina-quiz__result" data-quiz-result hidden>
            <strong data-quiz-title>${html(section.initialResultTitle || 'Responda às etapas.')}</strong>
            <p data-quiz-body>${html(section.initialResultText || 'No final, você recebe uma resposta rápida e direta.')}</p>
            <a class="resina-quiz__result-cta" href="${html(ctaHref(cta, mergedSettings))}" data-whatsapp-link>${html(cta.label || 'Agendar avaliação')}</a>
          </div>

          <div class="resina-quiz__actions" data-quiz-actions>
            <button class="resina-quiz__nav resina-quiz__nav--ghost" type="button" data-quiz-prev hidden>Voltar</button>
            <button class="resina-quiz__nav" type="button" data-quiz-next disabled>Continuar</button>
            <button class="resina-quiz__nav" type="button" data-quiz-finish hidden disabled>Concluir</button>
          </div>
        </div>
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

function renderServiceTransformations(page: any, cases: any[]) {
  const section = page?.transformationsSection;
  if (section?.enabled === false) return '';
  const cards = asArray(section?.items, asArray(section?.cases, cases));
  if (!cards?.length) return '';
  const serviceKey = page?.serviceKey || 'service';
  const eyebrow = serviceKey === 'gengivoplastia' ? 'Tratamentos' : (section?.eyebrow || 'Tratamentos');

  return `<section id="tratamentos-${html(serviceKey)}" class="section treatments-showcase treatments-showcase--${html(serviceKey)}" data-treatment-carousel="${html(serviceKey)}">
          <div class="section-heading">
            <p class="eyebrow">${html(eyebrow)}</p>
            <h2 class="section-heading__title--wide">${html(section?.title || 'Tratamentos estéticos pensados para transformar sorrisos e harmonizar resultados.')}</h2>
            ${section?.text ? `<p>${html(section.text)}</p>` : ''}
          </div>

          <div class="transformations-marquee transformations-marquee--${html(serviceKey)}" aria-label="Galeria de transformações">
            <div class="transformations-marquee__track">
              ${renderTransformationCards(cards)}
            </div>
          </div>
        </section>`;
}

export function renderServiceContent(fallbackContent: string, data: any) {
  const page = data?.page;
  const settings = settingsWithFooter(data);
  let content = fallbackContent;

  content = replaceBlock(content, /<header class="site-header" data-mobile-nav>[\s\S]*?<\/header>/, renderHeader(settings));
  content = replaceBlock(content, /<footer class="site-footer site-footer--rich">[\s\S]*?<\/footer>/, renderFooter(settings));

  if (!page) {
    return replaceServiceFaq(content, serviceFaqItems({serviceKey: inferServiceKeyFromContent(content)}));
  }

  if (page.hero) {
    content = replaceExactClassSection(content, 'hero', renderServiceHero(page, settings));
  }

  if (page.transformationsSection || data?.transformationCases?.length) {
    const transformationsMarkup = renderServiceTransformations(page, data?.transformationCases);
    if (transformationsMarkup) {
      content = replaceBlock(content, /<section id="tratamentos-[^"]*" class="section treatments-showcase[\s\S]*?<\/section>/, transformationsMarkup);
    }
  }

  const infoCards = serviceInfoCards(page);
  if (infoCards.length && page.serviceKey !== 'lentes-em-resina') {
    content = replaceBlock(content, /<section class="what-is section[\s\S]*?<\/section>/, renderInfoCards(infoCards));
  }

  if (page.areasSection) {
    const areasMarkup = renderAreas(page.areasSection);
    if (areasMarkup) {
      content = replaceAnySection(
        content,
        [
          /<section class="areas section section--dark"[\s\S]*?<\/section>/,
          /<section class="section service-fit[\s\S]*?<\/section>/,
        ],
        areasMarkup,
      );
    }
  }

  if (page.mythsSection) {
    const serviceKey = page.serviceKey || page.slug?.current || inferServiceKeyFromContent(content);
    const mythsMarkup = renderMyths(page.mythsSection, serviceKey);
    if (mythsMarkup) {
      content = replaceExactClassSection(content, 'myths section', mythsMarkup);
    }
  }

  if (page.processSection) {
    const processMarkup = renderProcess(page.processSection);
    if (processMarkup) {
      content = replaceBlock(content, /<section class="process section[\s\S]*?<\/section>/, processMarkup);
    }
  }

  if (page.quiz) {
    const quizMarkup = renderQuiz(page.quiz, settings);
    if (quizMarkup) {
      content = replaceBlock(content, /<section class="section section--spacious-top section--dark-fade section-fade section--resina-quiz-locked"[\s\S]*?<\/section>/, quizMarkup);
    }
  }

  const faqItems = serviceFaqItems(page);
  content = replaceServiceFaq(content, faqItems);

  if (page.finalCta) {
    const finalCtaMarkup = renderFinalCta(page.finalCta, settings);
    if (finalCtaMarkup) {
      content = replaceExactClassSection(content, 'cta-final section', finalCtaMarkup,);
    }
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
  const settings = settingsWithFooter(data);
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
