import type { APIRoute } from 'astro';
import { SITE_URL } from '../lib/site';

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: /\n\n# Search discovery in ChatGPT and Perplexity\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  {headers: {'Content-Type': 'text/plain; charset=utf-8'}},
);
