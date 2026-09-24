# Schemas Sanity do site DentistaDravic

Este documento explica a modelagem criada em `sanity-studio/` com base no `INVENTARIO.md`.

Nenhum conteudo foi migrado ainda. Os schemas apenas definem os campos que serao preenchidos manualmente no Sanity Studio.

## Documentos principais

### `siteSettings` - Configuracoes do site

Representa conteudos globais repetidos em todas as paginas:

- Nome da marca.
- Logo do header.
- Logo do footer.
- Favicon.
- Menu principal.
- E-mail, WhatsApp, mensagem padrao, endereco, CEP e CNPJ.
- Instagram e link de avaliacoes do Google.
- Texto do footer.
- Banner de cookies.
- SEO padrao.

Mapeamento do site atual:

- Header fixo das paginas.
- Footer rico compartilhado.
- Links com `data-whatsapp-link`.
- Banner de cookies criado por `main.js`.
- Metadados padrao usados em OG/Twitter.

### `homePage` - Pagina inicial

Modela os blocos reais de `index.html`:

- SEO da home.
- Hero com titulo, texto, CTAs, imagem e diferenciais.
- Destaques mobile.
- Secao de tratamentos.
- Sobre a Dra. Vitoria.
- Reviews/depoimentos.
- Jornada "Como funciona sua avaliacao".
- Galeria sticky.
- FAQ da home.

Relacionamentos:

- Pode referenciar `testimonial` nos depoimentos destacados.
- Pode referenciar `caseStudy` na galeria sticky.

### `servicePage` - Pagina de servico

Modela cada pagina dentro de `paginas/`:

- Botox.
- Gengivoplastia.
- Harmonizacao facial.
- Lentes Premium.
- Lentes em Resina.
- Preenchimento Labial.

Campos principais:

- `title`, `slug`, `serviceKey`.
- SEO por pagina.
- Hero com rotulo, titulo, descricao, CTA, imagem, tags e selo.
- Carrossel de transformacoes.
- Cards de informacao/beneficios.
- Areas, indicacoes ou opcoes.
- Quiz especifico de Lentes em Resina.
- Mitos e verdades.
- Processo / Como funciona.
- FAQ.
- CTA final.

Mapeamento por pagina:

- `botox.html`: usa hero, carrossel, cards de beneficios, areas, mitos, FAQ e CTA final. A secao processo esta desligada porque foi removida.
- `gengivoplastia.html`: usa hero, carrossel, cards de beneficios, indicacoes, mitos, FAQ e CTA final. A secao processo esta desligada porque foi removida.
- `harmonizacao-facial.html`: usa todos os blocos, incluindo processo/comofunciona com 4 etapas.
- `lentes-em-porcelana.html`: usa hero, carrossel, beneficios, opcoes/areas, mitos, FAQ e CTA final.
- `lentes-em-resina.html`: usa hero, carrossel, beneficios, quiz, areas, mitos, FAQ e CTA final.
- `preenchimento-labial.html`: usa hero de servico, carrossel, beneficios e FAQ/conteudo explicativo. O CTA final pode ficar desligado se a pagina continuar sem essa secao.

### `privacyPolicy` - Politica de privacidade

Modela `politica-de-privacidade.html`.

Campos:

- SEO.
- Titulo.
- Texto de atualizacao.
- Introducao.
- Lista de secoes legais com titulo e corpo em Portable Text.

Mapeamento:

- Cada item numerado da politica atual vira uma `legalSection`.

### `testimonial` - Depoimento

Modela os cards da secao "O Que Nossos Pacientes Dizem".

Campos:

- Nome da paciente.
- Texto do depoimento.
- Origem, como "Avaliacao no Google".
- Estrelas.
- Flag para exibir na home.

Mapeamento:

- Cards rotativos do bloco de reviews da home.

### `caseStudy` - Caso / transformacao

Modela as imagens de antes/depois e apoio visual usadas no carrossel de tratamentos e galeria da home.

Campos:

- Titulo.
- Tratamento.
- Imagem com alt.
- Texto curto.
- Pagina de destino.
- Flag para carrossel de tratamentos.
- Flag para galeria da home.

Mapeamento:

- `preenchimento-labial-caso.jpg`.
- `botox-caso-1.png`.
- `botox-caso-2.png`.
- `lentes-caso-1.jpg`.
- `lentes-caso-2.jpg`.
- `lentes-premium.jpg`.
- `gengivoplastia-caso.jpg`.
- `gengivoplastia-hero-antes-depois.png`.
- `lentes-o-que-muda.png`.
- `lips-smile.jpg`.
- `moca_direita_1000x1280.svg`.

## Objetos reutilizaveis

### `imageWithAlt`

Tipo Sanity `image` com hotspot e campos:

- `alt`.
- `caption`.

Usado para logos, hero images, cards, casos, galeria e imagens sociais.

### `externalImage`

Guarda temporariamente URLs externas, principalmente imagens Unsplash usadas hoje nos heroes/cards de servico.

Existe para permitir a transicao gradual: primeiro registra a URL atual, depois substitui por `imageWithAlt` no CDN do Sanity.

### `seoFields`

Agrupa campos de SEO:

- Title.
- Description.
- Canonical.
- Imagem social.

Mapeia os metadados do `<head>` das paginas atuais.

### `cta`

Modela botoes reais do site:

- WhatsApp.
- Instagram.
- Link interno.
- Link externo.

Inclui mensagem personalizada de WhatsApp quando necessario.

### `navigationItem`

Item do menu principal ou footer:

- Texto.
- Link.

### `faqItem`

Pergunta e resposta usadas em:

- FAQ da home.
- FAQ das paginas de servico.
- Conteudo de duvidas do preenchimento labial.

### `infoCard`

Cards curtos de beneficios/informacoes, como:

- 30 minutos.
- Resultado em 15 dias.
- Dura de 4 a 6 meses.
- Procedimento seguro.

### `areaCard`

Cards com imagem, etiqueta e texto usados em:

- Areas tratadas do botox.
- Indicacoes da gengivoplastia.
- Areas da harmonizacao facial.
- Opcoes de lentes premium.
- Beneficios visuais de lentes em resina.

### `mythItem`

Itens de "Mitos e verdades":

- Tipo: mito ou verdade.
- Frase.
- Explicacao.

### `processStep`

Etapas de processo/jornada:

- Numero.
- Titulo.
- Texto.

Usado na home e na secao "Processo / Como funciona" das paginas que ainda possuem esse bloco.

### `quizSection`

Modela o quiz especifico da pagina `lentes-em-resina.html`.

Campos:

- Estado ligado/desligado.
- Rotulo, titulo e descricao.
- Imagem lateral.
- Etapas.
- Perguntas.
- Grupos logicos.
- Opcoes.
- Texto inicial do resultado.
- CTA do resultado.

### `legalSection`

Secoes da politica de privacidade.

Campos:

- Titulo.
- Corpo em Portable Text.

## Decisoes de modelagem

- O Studio nao tenta editar layout livre. Ele edita apenas blocos reais que ja existem no site.
- Imagens usam `imageWithAlt` para depois aproveitar o CDN do Sanity.
- Imagens externas foram preservadas por meio de `externalImage` para facilitar transicao das imagens Unsplash.
- `servicePage` concentra as paginas de tratamentos porque elas compartilham quase todos os blocos.
- O quiz ficou opcional e escondido fora de `lentes-em-resina`.
- `siteSettings`, `homePage` e `privacyPolicy` foram pensados como singletons na estrutura do Studio.

## Proximos passos

1. Criar/conectar um projeto Sanity real e preencher `SANITY_STUDIO_PROJECT_ID`.
2. Rodar o Studio.
3. Criar os documentos singletons.
4. Cadastrar manualmente os servicos, depoimentos e casos.
5. Depois conectar o Astro aos dados via GROQ.
