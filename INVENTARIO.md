# Inventario do site DentistaDravic

Inventario gerado antes da migracao para Astro + Sanity CMS.

Estado analisado: workspace local em `/Users/matheus/Downloads/Dentista-Pisom`.

Observacao: este inventario considera o estado atual dos arquivos locais. A pagina `paginas/botox.html` ja esta com a secao "COMO FUNCIONA" removida no workspace, mas essa alteracao ainda aparece como modificacao pendente em relacao ao `origin/main`.

## 1. Estrutura geral do repositorio

```txt
.
├── index.html
├── politica-de-privacidade.html
├── robots.txt
├── paginas/
│   ├── botox.html
│   ├── gengivoplastia.html
│   ├── harmonizacao-facial.html
│   ├── lentes-em-porcelana.html
│   ├── lentes-em-resina.html
│   └── preenchimento-labial.html
└── assets/
    ├── css/
    │   ├── styles.css
    │   └── service-pages.css
    ├── js/
    │   └── main.js
    └── images/
        ├── logos, favicon e imagens institucionais
        └── real/
            └── fotos/casos reais usados nos cards e galerias
```

O site e estatico, com HTML puro, CSS global e um JavaScript global. Todas as paginas carregam `assets/css/styles.css` e `assets/js/main.js`; `styles.css` importa `service-pages.css`.

Nao ha arquivos de build, `package.json`, framework frontend ou configuracao Astro/Next no projeto atual.

## 2. Paginas existentes e blocos de conteudo

### `index.html`

Pagina inicial.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card, theme color e JSON-LD `Dentist`.
- Header fixo: logo Pisom, navegacao principal, botao "Agendar avaliacao" com `data-whatsapp-link`.
- Hero home: headline, texto de apoio, CTA WhatsApp, CTA Instagram, credenciais/diferenciais e imagem `hero-vitoria.jpg`.
- Destaques mobile: cards curtos com diferenciais principais.
- Tratamentos/transformacoes: carrossel horizontal/marquee com cards para preenchimento labial, botox, lentes, lentes premium e gengivoplastia; usa imagens da pasta `assets/images/real/`.
- Sobre a Dra. Vitoria: texto institucional, foto `experiencia-vitoria.jpg`, assinatura `assinatura-vitoria.png`, credenciais e foto responsiva.
- Reviews/depoimentos: area "O Que Nossos Pacientes Dizem", imagem do predio `reviews-building.png`, rotator de depoimentos, estrelas e link para comentarios do Google.
- Jornada/como funciona: bloco "Como funciona sua avaliacao com a Dra. Vitoria", com etapas da avaliacao.
- Galeria sticky: portfolio visual com grid de imagens, texto e CTA "Quero ser a proxima".
- FAQ home: perguntas comuns usando `<details>` e `<summary>`.
- Footer rico: logo branco, links de tratamentos, contato, redes sociais, politica de privacidade e WhatsApp.

Imagens principais:

- `assets/images/pisom-header-logo.svg`
- `assets/images/hero-vitoria.jpg`
- `assets/images/experiencia-vitoria.jpg`
- `assets/images/assinatura-vitoria.png`
- `assets/images/real/reviews-building.png`
- `assets/images/real/preenchimento-labial-caso.jpg`
- `assets/images/real/botox-caso-1.png`
- `assets/images/real/botox-caso-2.png`
- `assets/images/real/lentes-caso-1.jpg`
- `assets/images/real/lentes-caso-2.jpg`
- `assets/images/real/lentes-premium.jpg`
- `assets/images/real/gengivoplastia-caso.jpg`
- `assets/images/real/gengivoplastia-hero-antes-depois.png`
- `assets/images/real/lentes-o-que-muda.png`
- `assets/images/real/lips-smile.jpg`
- `assets/images/real/moca_direita_1000x1280.svg`
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

CTAs e links:

- WhatsApp via `data-whatsapp-link`.
- Instagram: `https://www.instagram.com/dra.vitoriapassosv/`.
- Google reviews: link direto para avaliacoes/comentarios no Google.

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `politica-de-privacidade.html`

Pagina legal de politica de privacidade.

Blocos:

- Head/SEO: title, description, canonical, robots e theme color.
- Header fixo compartilhado com navegacao e WhatsApp.
- Hero simples: titulo "Politica de Privacidade", data de atualizacao e texto introdutorio.
- Card legal: secoes numeradas:
  - Quem somos.
  - Dados que podemos tratar.
  - Para que usamos os dados.
  - WhatsApp, e-mail e redes sociais.
  - Cookies, Meta e Google.
  - Compartilhamento.
  - Base legal.
  - Direitos do titular.
  - Seguranca e conservacao.
  - Uso de imagem.
  - Contato sobre privacidade.
- Footer rico compartilhado.

Imagens:

- `assets/images/pisom-header-logo.svg`
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

CTAs e links:

- WhatsApp via `data-whatsapp-link`.
- Links internos para tratamentos e home no footer.

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/botox.html`

Pagina de servico Botox.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero: titulo "Expressao natural. Resultado elegante.", descricao, CTA "Agendar avaliacao" e imagem externa Unsplash.
- Tratamentos/transformacoes: carrossel/marquee compartilhado com os casos reais.
- O que e / beneficios: cards de informacao:
  - 30 minutos.
  - Resultado em 15 dias.
  - Dura de 4 a 6 meses.
  - Procedimento seguro.
- Areas de aplicacao: secao escura com cards e imagens externas para linhas frontais, pes de galinha, glabela, pescoco/mandibula.
- Mitos e verdades: cards com selo "MITO" ou "VERDADE"; em mobile usa carousel/dots.
- FAQ: perguntas sobre dor, resultado, duracao, amamentacao, frequencia e combinacao com outros procedimentos.
- CTA final: chamada para WhatsApp e Instagram.
- Footer rico compartilhado.

Observacao de estado: a secao "PROCESSO / COMO FUNCIONA" foi removida localmente.

Imagens:

- `assets/images/pisom-header-logo.svg`
- Imagem hero externa: `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80`
- Imagens de areas externas via Unsplash.
- Casos reais da pasta `assets/images/real/`.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

CTAs e links:

- "Agendar avaliacao" e "Falar no WhatsApp" via `data-whatsapp-link`.
- "Ver Instagram" esta como `href="#"` nesta pagina.

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/gengivoplastia.html`

Pagina de servico Gengivoplastia.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero: titulo "Sorriso equilibrado. Gengiva perfeita.", descricao, CTA e imagem local `gengivoplastia-hero-antes-depois.png`.
- Tratamentos/transformacoes: carrossel/marquee compartilhado.
- O que e / beneficios: cards:
  - Procedimento em 1 sessao.
  - Resultado definitivo.
  - Tecnologia a laser.
  - Anestesia local.
- Indicacoes/areas: cards para sorriso gengival, dentes curtos, assimetria gengival e preparo para lentes, com imagens externas Unsplash.
- Mitos e verdades: cards com selo mito/verdade; mobile carousel.
- FAQ: perguntas sobre dor, recuperacao, permanencia, lentes na mesma sessao, cicatriz e diferenca entre gengivoplastia/gengivectomia.
- CTA final: chamada para WhatsApp e Instagram.
- Footer rico compartilhado.

Observacao de estado: a secao "PROCESSO / COMO FUNCIONA" tambem ja foi removida anteriormente.

Imagens:

- `assets/images/pisom-header-logo.svg`
- `assets/images/real/gengivoplastia-hero-antes-depois.png`
- Casos reais da pasta `assets/images/real/`.
- Imagens externas via Unsplash para cards de indicacao.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/harmonizacao-facial.html`

Pagina de servico Harmonizacao Facial.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero: titulo "Equilibrio perfeito. Beleza autentica.", descricao, CTA e imagem externa Unsplash.
- Tratamentos/transformacoes: carrossel/marquee compartilhado.
- O que e / beneficios: cards:
  - Resultado imediato.
  - 100% personalizado.
  - Dura de 12 a 18 meses.
  - Seguro e aprovado.
- Areas de harmonizacao: cards para preenchimento labial, mandibula, rinoplastia nao-cirurgica e projecao malar.
- Mitos e verdades: cards com selo mito/verdade; mobile carousel.
- Processo / como funciona: secao com 4 etapas:
  - Avaliacao facial.
  - Mapeamento dos pontos.
  - Aplicacao com precisao.
  - Acompanhamento pos.
- FAQ: perguntas sobre dor, duracao, naturalidade, combinacao de procedimentos, retorno a rotina e reversibilidade.
- CTA final.
- Footer rico compartilhado.

Imagens:

- `assets/images/pisom-header-logo.svg`
- Imagem hero externa: `https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80`
- Imagens externas via Unsplash para cards.
- Casos reais da pasta `assets/images/real/`.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/lentes-em-porcelana.html`

Pagina "Lentes Premium".

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero: titulo "O sorriso que voce sempre desejou.", descricao, CTA e imagem externa Unsplash.
- Tratamentos/transformacoes: carrossel/marquee compartilhado.
- O que e / beneficios: cards:
  - Simulacao digital previa.
  - Resultado em 2 a 3 sessoes.
  - Dura ate 15 anos.
  - Aparencia ultra-natural.
- Areas/opcoes: cards para lentes de resina, Lentes Premium, protocolo de sorriso completo e combinacao com gengivoplastia.
- Mitos e verdades: cards sobre desgaste dental, tom do sorriso, naturalidade, simulacao digital, alimentacao e diferenca entre resina/premium.
- FAQ: perguntas sobre dor, duracao, desgaste, indicacao, manutencao e combinacao com outros tratamentos.
- CTA final.
- Footer rico compartilhado.

Imagens:

- `assets/images/pisom-header-logo.svg`
- Imagem hero externa: `https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80`
- Imagens externas via Unsplash para cards.
- Casos reais da pasta `assets/images/real/`.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/lentes-em-resina.html`

Pagina de servico Lentes em Resina.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero: titulo "Mais leveza no sorriso. Resultado natural.", descricao, CTA e imagem local `lentes-caso-2.jpg`.
- Tratamentos/transformacoes: carrossel/marquee compartilhado.
- O que e / beneficios: cards:
  - Desenho personalizado.
  - Tratamento mais agil.
  - Boa para ajustes estrategicos.
  - Naturalidade como criterio.
- Quiz interativo "A resina combina com voce?": perguntas em etapas, escolhas por botoes, resultado dinamico e CTA WhatsApp.
- Areas/beneficios esteticos: cards com imagens locais para formato, cor, ajustes discretos e naturalidade.
- Mitos e verdades: cards sobre artificialidade, planejamento, clareamento, limites esteticos, delicadeza e avaliacao.
- FAQ: perguntas comuns.
- CTA final.
- Footer rico compartilhado.

Imagens:

- `assets/images/pisom-header-logo.svg`
- `assets/images/real/lentes-caso-2.jpg`
- `assets/images/real/lentes-o-que-muda.png`
- `assets/images/real/lentes-caso-1.jpg`
- `assets/images/real/lips-smile.jpg`
- Casos reais compartilhados do carrossel.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

Comportamentos especificos:

- Quiz usa atributos `data-resina-quiz`, `data-quiz-step`, `data-quiz-choice`, `data-quiz-result`, `data-quiz-prev`, `data-quiz-next` e `data-quiz-finish`.

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

### `paginas/preenchimento-labial.html`

Pagina de servico Preenchimento Labial.

Blocos:

- Head/SEO: title, description, canonical, Open Graph, Twitter Card e JSON-LD.
- Header compartilhado.
- Hero de servico (`service-hero`): titulo "Preenchimento labial com contorno elegante e proporcao natural.", descricao, CTA e imagem local `preenchimento-labial-caso.jpg`.
- Tratamentos/transformacoes: carrossel/marquee compartilhado.
- O que e / beneficios: cards:
  - 30 a 45 minutos.
  - Resultado visivel na hora.
  - Dura em media 8 a 12 meses.
  - Planejamento individual.
- FAQ/conteudo explicativo: duvidas comuns de quem quer preenchimento labial, com detalhes sobre naturalidade, dor, duracao, retorno a rotina e seguranca.
- Footer rico compartilhado.

Imagens:

- `assets/images/pisom-header-logo.svg`
- `assets/images/real/preenchimento-labial-caso.jpg`
- Casos reais compartilhados do carrossel.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`

Formularios e mapas:

- Nao ha `<form>`.
- Nao ha `<iframe>` de mapa.

## 3. Scripts de terceiros e comportamentos JavaScript

### Scripts externos realmente carregados

- Google Fonts:
  - Home, politica e preenchimento labial usam `DM Sans` + `Outfit`.
  - Paginas de servico padrao usam `DM Sans` + `Playfair Display`.
- Imagens externas do Unsplash:
  - Usadas como imagens de hero e cards em varias paginas de servico.

Nao foram encontrados scripts reais carregados para:

- Google Analytics / GA4.
- Google Tag Manager.
- Meta Pixel / Facebook Pixel.
- Hotjar, Clarity ou outros trackers.
- Mapas embutidos.

Observacao: a politica de privacidade e o banner de cookies mencionam uso futuro de Google/Meta, mas o codigo atual nao carrega esses scripts.

### Scripts inline

- `window.__chromium_devtools_metrics_reporter`: stub/placeholder incluido no topo da home e das paginas de servico.
- JSON-LD `application/ld+json`: dados estruturados nas paginas principais/servicos.

### `assets/js/main.js`

Arquivo global carregado por todas as paginas.

Funcoes/comportamentos:

- Configuracao global de WhatsApp:
  - Numero: `5511915023134`.
  - Mensagem padrao: "Ola, vim do site e gostaria de efetuar um agendamento."
  - Atualiza todos os links com `data-whatsapp-link` para `https://wa.me/...`.
- Navegacao/header:
  - Define itens de menu em `SITE_NAV_ITEMS`.
  - Marca link ativo de acordo com a URL.
  - Suporta placeholder `[data-site-header]`, embora as paginas atuais ja tenham header renderizado no HTML.
- Consentimento de cookies:
  - Usa `localStorage` com chave `pisomCookieConsent`.
  - Mostra banner quando nao ha escolha salva.
  - Em "Aceitar", define `window.pisomMarketingConsent = true` e dispara evento `pisom:marketing-consent`.
  - Nao injeta GA/Meta hoje.
- Menu mobile:
  - Usa `[data-mobile-nav]`, `.site-header__toggle` e breakpoint `max-width: 900px`.
  - Abre/fecha menu, fecha ao clicar fora, apertar Escape ou clicar em link.
- Marquee/carrossel de transformacoes:
  - Usa `.transformations-marquee`.
  - Pausa quando fora da viewport via `IntersectionObserver`.
  - Pausa em hover/mouse sobre o carrossel.
- Footer mobile:
  - Usa `[data-footer-section]`.
  - Em telas ate 720px, transforma colunas do footer em acordeoes.
- Rotator de depoimentos:
  - Usa `[data-testimonial-rotator]`.
  - Alterna slides `.testimonial-grid--slide` automaticamente quando visivel.
  - Sincroniza altura da area visual no desktop.
- Animacoes de entrada:
  - Adiciona classes `reveal-on-scroll` e observa elementos com `IntersectionObserver`.
  - Tambem observa elementos `.reveal` legados e adiciona `revealed`.
- FAQ:
  - Para `.faq-list details`, cria animacao de abertura/fechamento.
  - Para `.faq__grid`, reorganiza `.faq-item` em duas colunas.
  - Exponibiliza `window.toggleFaq(button)` para os FAQs que usam `onclick`.
- Quiz de lentes em resina:
  - Usa `[data-resina-quiz]`.
  - Controla etapas, escolhas, resultado dinamico e botoes voltar/continuar/concluir.
- Sliders antes/depois:
  - Funcao `initSlider("slider1", "before1", "handle1")` etc.
  - No HTML atual nao foram encontrados IDs `slider1`, `before1`, `handle1`; parece legado ou preparado para uso futuro.
- Carousel mobile para myths/before-after:
  - Usa `[data-mobile-carousel]`, `[data-carousel-track]`, `[data-carousel-dots]`.
  - Auto-avanca em mobile e cria dots.
- Scroll suave para ancoras:
  - Intercepta links com `#` na mesma pagina e compensa altura do header.
- Parallax leve:
  - `.hero-card > img` na home.
  - `.hero__img` nas paginas de servico em desktop.
- Contador animado:
  - Procura `.badge__number` e anima ate `500+` quando entra na viewport.

## 4. Assets e funcoes

### CSS

- `assets/css/styles.css`:
  - CSS global principal.
  - Importa `service-pages.css`.
  - Define variaveis globais, reset, header, footer, hero home, secoes, cards, galeria, reviews, FAQ, banner de cookies, politica de privacidade e responsividade.
  - Inclui estilos de comparacao antes/depois (`.comparison`) que parecem preparados/legados, pois nao ha markup correspondente encontrado nas paginas atuais.
- `assets/css/service-pages.css`:
  - CSS das paginas de servico.
  - Importado por `styles.css`; nao e linkado diretamente no HTML.
  - Define estilos para `body.service-page`, hero de servicos, cards, areas, myths, process, FAQ, CTA final, sliders antes/depois (`.ba-slider`) e responsividade.

### JavaScript

- `assets/js/main.js`:
  - Script global de interacao do site.
  - Detalhado na secao anterior.

### Imagens institucionais e marca

- `assets/images/pisom-header-logo.svg`
  - Logo usado no header das paginas.
- `assets/images/pison-odontologia-branco-sem-fundo.svg`
  - Logo branco usado no footer.
- `assets/images/favicon-pisom.svg`
  - Favicon carregado por todas as paginas.
- `assets/images/logo-pisom.png`
  - Referenciado no fallback/placeholder de header dentro de `main.js`; nao aparece diretamente no HTML atual.
- `assets/images/logo-pisom-transparent-test.png`
  - Sem referencia direta encontrada.
- `assets/images/pison-odontologia-6f1235.svg`
  - Sem referencia direta encontrada.
- `assets/images/assinatura-vitoria.png`
  - Assinatura visual usada na secao sobre da home.
- `assets/images/hero-vitoria.jpg`
  - Hero da home e imagem usada em metatags Open Graph/Twitter das paginas.
- `assets/images/experiencia-vitoria.jpg`
  - Imagem da Dra. Vitoria na secao sobre da home.
- `assets/images/before-after-before.svg`
  - Sem referencia direta encontrada; possivel legado para componente antes/depois.
- `assets/images/before-after-after.svg`
  - Sem referencia direta encontrada; possivel legado para componente antes/depois.

### Imagens de casos reais e apoio visual

- `assets/images/real/preenchimento-labial-caso.jpg`
  - Caso de preenchimento labial; usado no hero da pagina de preenchimento e nos carrosseis/galerias.
- `assets/images/real/botox-caso-1.png`
  - Caso de botox; usado nos carrosseis/galerias.
- `assets/images/real/botox-caso-2.png`
  - Segundo caso de botox; usado nos carrosseis/galerias.
- `assets/images/real/lentes-caso-1.jpg`
  - Caso de lentes em resina; usado nos carrosseis, galerias e cards da pagina de lentes em resina.
- `assets/images/real/lentes-caso-2.jpg`
  - Caso de lentes em resina; usado no hero de lentes em resina, carrosseis e galerias.
- `assets/images/real/lentes-premium.jpg`
  - Caso de lentes premium; usado nos carrosseis/galerias.
- `assets/images/real/gengivoplastia-caso.jpg`
  - Caso de gengivoplastia; usado nos carrosseis/galerias.
- `assets/images/real/gengivoplastia-hero-antes-depois.png`
  - Hero da pagina de gengivoplastia e imagem da galeria sticky da home.
- `assets/images/real/lentes-o-que-muda.png`
  - Apoio visual para lentes; usado na home e na pagina de lentes em resina.
- `assets/images/real/lips-smile.jpg`
  - Apoio visual para sorriso/labios; usado na home e em lentes em resina.
- `assets/images/real/moca_direita_1000x1280.svg`
  - Retrato feminino usado na galeria sticky da home.
- `assets/images/real/reviews-building.png`
  - Imagem do predio/consultorio usada na secao de reviews da home.

### Arquivos auxiliares

- `robots.txt`
  - Permite crawlers: `User-agent: *` e `Allow: /`.
- `.gitignore`
  - Ignora `.DS_Store` e arquivos do antigo/possivel projeto `studio-pisom`.

## 5. Dependencias externas por tipo

### Fontes

- Google Fonts:
  - `DM Sans`.
  - `Outfit`.
  - `Playfair Display`.

### Imagens externas

Paginas de servico usam URLs do Unsplash para alguns heroes/cards:

- Botox.
- Gengivoplastia.
- Harmonizacao facial.
- Lentes Premium.

Risco para migracao: como essas imagens dependem de URLs externas, vale decidir se elas permanecem externas, se entram no Sanity como assets, ou se serao baixadas/substituidas por imagens proprias.

### WhatsApp

- Links gerados para `https://wa.me/5511915023134`.
- O texto do link pode ser customizado com `data-whatsapp-message`, embora o uso atual majoritario utilize a mensagem padrao do JS.

### Google Reviews

- A home possui link direto para avaliacoes/comentarios da Dra. Vitoria no Google.
- Nao ha widget externo embutido.

### Analytics/Pixel

- Nao ha tag de Google Analytics, GTM ou Meta Pixel carregada.
- Existe estrutura de consentimento pronta para liberar marketing no futuro.

## 6. Componentes/blocos candidatos para CMS Sanity

Campos globais:

- Dados da clinica/marca:
  - Nome.
  - Logo header.
  - Logo footer.
  - WhatsApp.
  - Mensagem padrao do WhatsApp.
  - Instagram.
  - Endereco/contato, se for exposto.
- Navegacao:
  - Lista de tratamentos.
  - Ordem dos links.
- Footer:
  - Links de tratamentos.
  - Contato.
  - Redes sociais.
  - Texto legal.
- SEO padrao:
  - Title.
  - Description.
  - OG image.
  - Canonical.

Home:

- Hero.
- Credenciais/diferenciais.
- Cards de tratamentos/casos.
- Secao sobre.
- Reviews/depoimentos.
- Jornada/etapas da avaliacao.
- Galeria sticky.
- FAQ.

Paginas de servico:

- Hero do tratamento.
- Cards de beneficios.
- Carrossel de transformacoes.
- Areas/indicacoes.
- Mitos e verdades.
- Processo/como funciona, quando existir.
- FAQ.
- CTA final.
- SEO por pagina.

Conteudos compartilhados:

- Galeria de casos reais.
- Lista de tratamentos.
- Depoimentos.
- Perguntas frequentes.
- Imagens de apoio.

## 7. Pontos de atencao para migracao Astro + Sanity

- Preservar URLs atuais:
  - `/index.html`
  - `/politica-de-privacidade.html`
  - `/paginas/botox.html`
  - `/paginas/gengivoplastia.html`
  - `/paginas/harmonizacao-facial.html`
  - `/paginas/lentes-em-porcelana.html`
  - `/paginas/lentes-em-resina.html`
  - `/paginas/preenchimento-labial.html`
- Preservar `<base href="../">` ou substituir por rotas/paths corretos no Astro.
- Transformar header/footer em componentes compartilhados.
- Transformar a grade/carrossel de transformacoes em componente compartilhado.
- Decidir se imagens Unsplash continuam externas ou migram para Sanity/assets locais.
- Revisar assets sem referencia direta antes de remover qualquer coisa:
  - `logo-pisom-transparent-test.png`
  - `pison-odontologia-6f1235.svg`
  - `before-after-before.svg`
  - `before-after-after.svg`
- Manter `main.js` inicialmente ou dividir comportamento por componente no Astro.
- Se Sanity for usado para imagens, mapear alt text como campo obrigatorio.
- Se Analytics/Pixel forem adicionados depois, conectar ao consentimento existente em vez de carregar direto.
