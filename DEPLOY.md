# Deploy do Astro na Vercel

Este projeto usa a pasta `astro-site/` como novo site Astro conectado ao Sanity. O site HTML antigo continua preservado na raiz do repositorio.

## Preview temporario atual

URL gerada para revisao:

```text
https://temporary-sonic-citrine-pncjfkw.vercel.app
```

Observacao: este preview anonimo da Vercel expira em aproximadamente 60 minutos a partir da criacao. Ele nao altera DNS e nao troca o dominio atual.

Rotas validadas com status `200`:

- `/`
- `/index.html`
- `/paginas/botox.html`
- `/paginas/gengivoplastia.html`
- `/politica-de-privacidade.html`
- `/robots.txt`

## Como gerar outro preview temporario

O preview deve ser feito na Vercel, sem alterar DNS do dominio atual.

Comandos usados:

```bash
cd /Users/matheus/Downloads/Dentista-Pisom/astro-site
npm run build
mkdir -p /tmp/vercel-temp-config
npx vercel deploy --yes \
  --temporary \
  --global-config /tmp/vercel-temp-config \
  --build-env SANITY_PROJECT_ID=5soy3b7c \
  --build-env SANITY_DATASET=production \
  --build-env SANITY_API_VERSION=2026-09-23 \
  --build-env SANITY_USE_CDN=true \
  --env SANITY_PROJECT_ID=5soy3b7c \
  --env SANITY_DATASET=production \
  --env SANITY_API_VERSION=2026-09-23 \
  --env SANITY_USE_CDN=true
```

O dataset do Sanity exige token para leitura no build. Configure tambem `SANITY_API_TOKEN` no ambiente da Vercel antes do build. Preferencialmente use um token somente de leitura para deploy.

## Variaveis de ambiente

Configure estas variaveis na Vercel em `Project Settings > Environment Variables` para `Production`, `Preview` e `Development`:

| Variavel | Valor |
| --- | --- |
| `SANITY_PROJECT_ID` | `5soy3b7c` |
| `SANITY_DATASET` | `production` |
| `SANITY_API_VERSION` | `2026-09-23` |
| `SANITY_USE_CDN` | `true` |
| `SANITY_API_TOKEN` | token de leitura do Sanity para o Astro buscar conteudo no build |

## Troca de DNS quando o preview for aprovado

1. Confirme que a URL temporaria da Vercel esta aprovada em desktop e mobile.
2. Na Vercel, abra o projeto do Astro e va em `Settings > Domains`.
3. Adicione `dravitoriapassos.com`.
4. Adicione tambem `www.dravitoriapassos.com`.
5. Na Cloudflare, abra `dravitoriapassos.com > DNS > Records`.
6. Antes de mudar qualquer coisa, anote ou tire print dos registros atuais que apontam para o Railway.
7. Para o dominio raiz `dravitoriapassos.com`, siga exatamente o valor indicado pela Vercel. Normalmente sera um registro `A` para `76.76.21.21`, mas confira no painel da Vercel antes de salvar.
8. Para `www`, siga exatamente o valor indicado pela Vercel. Normalmente sera um `CNAME` apontando para `cname.vercel-dns.com`, mas confira no painel.
9. Na Cloudflare, deixe os registros como `DNS only` durante a validacao inicial se a Vercel indicar problema com proxy.
10. Aguarde a Vercel mostrar o dominio como valido e teste:
    - `https://dravitoriapassos.com`
    - `https://www.dravitoriapassos.com`
    - `https://dravitoriapassos.com/paginas/botox.html`
    - `https://dravitoriapassos.com/politica-de-privacidade.html`

## Reversao rapida para o site antigo

Se algo der errado apos trocar o DNS:

1. Volte na Cloudflare em `DNS > Records`.
2. Remova ou edite os registros que apontam para a Vercel.
3. Recoloque os registros antigos do Railway que foram anotados antes da troca.
4. Salve com TTL `Auto`.
5. Teste o dominio em janela anonima.
6. Se a Cloudflare estiver com proxy ligado e o site ainda mostrar cache antigo, va em `Caching > Configuration > Purge Everything`.

Enquanto o DNS nao for alterado, o site antigo continua respondendo normalmente.
