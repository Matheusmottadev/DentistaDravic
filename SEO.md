# Indexação do site

O domínio de produção é `https://dravitoriapassos.com`, definido em `astro-site/src/lib/site.ts`.

## Preparação implementada

- URLs canônicas absolutas em todas as páginas, com a página inicial em `/`.
- Títulos e descrições próprios por página, com suporte às configurações do CMS.
- Open Graph e Twitter com imagens absolutas; dados estruturados de clínica, página e navegação.
- Sitemap gerado no build a partir das páginas Astro e `robots.txt` liberando o rastreamento.
- Links da página inicial apontando para `/`.
- Servidor Railway com páginas `.html` acessíveis diretamente e redirecionamentos permanentes dos endereços antigos sem extensão. Configuração equivalente no Vercel.

## Publicação e Google Search Console

1. Publique estas alterações pelo fluxo de deploy do projeto (`npm run build`, seguido de `npm run start` no Railway).
2. Verifique que a página inicial, os tratamentos, `/robots.txt` e `/sitemap.xml` retornam HTTP 200 no domínio público. Uma página inexistente deve retornar 404.
3. Abra https://search.google.com/search-console e adicione/verifique a propriedade `dravitoriapassos.com` usando o registro DNS fornecido pelo Google. Se usar uma propriedade de prefixo de URL com verificação por tag HTML, configure `PUBLIC_GOOGLE_SITE_VERIFICATION` com apenas o valor `content` da tag e refaça o deploy.
4. Em **Sitemaps**, envie `https://dravitoriapassos.com/sitemap.xml`.
5. Em **Inspeção de URL**, teste a página inicial e as páginas de tratamentos publicadas e solicite indexação. Acompanhe o relatório de indexação para conferir eventuais bloqueios.

O sitemap enviado não garante inclusão nem prazo de indexação; a decisão cabe ao buscador. Estas alterações foram verificadas localmente e não enviam solicitações ao Search Console.

Referências: [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
