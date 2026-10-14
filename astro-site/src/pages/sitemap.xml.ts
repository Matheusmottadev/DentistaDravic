import type { APIRoute } from 'astro';
import { canonicalUrl } from '../lib/site';

export const GET: APIRoute = () => {
  const pages = Object.keys(import.meta.glob('./**/*.astro'));
  const urls = pages.map((page) => canonicalUrl(page.slice(1).replace(/\.astro$/, '.html'))).sort();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, {headers: {'Content-Type': 'application/xml; charset=utf-8'}});
};
