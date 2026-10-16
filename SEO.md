# SEO local e GEO/AEO — Pisom Odontologia

Domínio canônico: `https://dravitoriapassos.com`.

## Implementação

- Títulos e descrições exclusivos, com contexto da Mooca, São Paulo. As configurações por página do Sanity continuam editáveis; o renderizador acrescenta localização quando ela está ausente.
- URL canônica, Open Graph e Twitter com URLs absolutas.
- Um grafo JSON-LD por página conectando `Dentist`, `Person`, `WebSite` e `WebPage`. Tratamentos acrescentam `Service` e `BreadcrumbList`. Contato e endereço usam as mesmas configurações do rodapé.
- Navegação visível de caminho nas páginas de tratamento e links entre os cinco tratamentos.
- Bloco de atendimento local com respostas diretas sobre endereço, profissional e agendamento, renderizado em HTML no build, inclusive sem JavaScript.
- `robots.txt` permite rastreamento geral e explicita acesso de `OAI-SearchBot` e `PerplexityBot`, voltados à busca. A regra geral anterior permanece; não foi criada uma política nova para robôs de treinamento.
- Sitemap gerado pelas rotas Astro, com exclusão preventiva de páginas de erro 404 e 500. Não publica datas artificiais de atualização.
- Conteúdo das animações fica visível com JavaScript desativado. URLs de assets locais são normalizadas também no conteúdo de reserva.
- Verificação do Search Console por `PUBLIC_GOOGLE_SITE_VERIFICATION` já suportada.
- Railway e Vercel mantêm redirecionamentos de URLs antigas para as páginas `.html`.

## Validar antes de publicar

```sh
npm run build
npm run check:seo
```

A auditoria verifica as sete páginas geradas: título, descrição e H1 únicos por página, canônicos, ausência de bloqueio de indexação e snippets, JSON-LD válido e referências internas resolvidas, tratamento relacionado, links internos, assets locais, sitemap e regras dos robôs de busca. Ela não substitui o teste de resultados avançados do Google nem mede Core Web Vitals.

O conteúdo de reserva pode ser validado com:

```sh
SANITY_PROJECT_ID= SANITY_DATASET= SANITY_API_VERSION= npm run build
npm run check:seo
```

Depois, execute novamente o build normal para publicar o conteúdo do CMS.

## Publicação e indexação — ações externas pendentes

1. Publique as mudanças no fluxo normal de deploy do projeto. Não basta gerar os arquivos localmente.
2. Confira que `/`, páginas de tratamento, `/robots.txt` e `/sitemap.xml` respondem HTTP 200 no domínio público. URLs antigas devem redirecionar; páginas inexistentes devem retornar 404.
3. Verifique a propriedade no [Google Search Console](https://search.google.com/search-console), de preferência pelo DNS. Para uma propriedade com prefixo de URL, pode usar `PUBLIC_GOOGLE_SITE_VERIFICATION` com o valor `content` da tag fornecida pelo Google e refazer o deploy.
4. Envie `https://dravitoriapassos.com/sitemap.xml` e inspecione as seis páginas comerciais. Solicite indexação e acompanhe os relatórios. Confira também a configuração de inclusão nos recursos generativos de busca, quando disponível na propriedade.
5. Verifique o [Perfil da Empresa no Google](https://business.google.com/): nome, endereço, telefone, site e categoria devem refletir os dados reais. Inclua horários apenas depois de confirmados pela clínica; não foram inventados no código.
6. Cadastre/verifique também o domínio no [Bing Webmaster Tools](https://www.bing.com/webmasters/about) e envie o mesmo sitemap.
7. Se Cloudflare ou outro firewall bloquear robôs legítimos, revise os registros e as orientações oficiais de identificação dos robôs. `robots.txt` não desativa um bloqueio no firewall. Nenhuma configuração do Cloudflare foi alterada.
8. Meça consultas locais, páginas indexadas, contatos e referências vindas de buscas e ferramentas de IA. Os IDs de analytics precisam estar configurados para a medição existente funcionar.

## GEO/AEO e limites

GEO e AEO são nomes usados para a otimização da presença em respostas de IA. O trabalho aqui facilita descoberta e interpretação das informações reais da clínica, sem inserir instruções destinadas a manipular assistentes.

Não foi criado `llms.txt`: o Google informa que esse arquivo não é usado pela Busca e não melhora sua visibilidade. Também não foram adicionadas estrelas ou avaliações autoatribuídas em schema, credenciais profissionais não fornecidas, horários não confirmados ou afirmações de revisão clínica.

As informações dos tratamentos e os casos clínicos existentes precisam continuar sendo revisados pela profissional responsável. Para reforçar a identificação profissional, a clínica pode fornecer o CRO e a qualificação que deseja publicar; esses dados não foram presumidos.

Indexação, posição e citações por IA não têm garantia ou prazo fixo. Estas mudanças locais não enviam solicitações ao Search Console, não verificam contas e não publicam automaticamente o site.

## Referências oficiais

- [Fundamentos de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Negócios locais e dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Busca com IA, GEO e AEO no Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Robôs da OpenAI](https://developers.openai.com/api/docs/bots)
- [Robôs do Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
