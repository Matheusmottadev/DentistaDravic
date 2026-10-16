import assert from 'node:assert/strict';
import {readFile, readdir, access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = 'https://dravitoriapassos.com';
const files = (await readdir(dist, {recursive: true})).filter((file) => file.endsWith('.html'));
const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();
const read = (file) => readFile(path.join(dist, file), 'utf8');
const tags = (source, tag) => [...source.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, name, value]) => [name, value])));
for (const file of files) {
  const source = await read(file);
  const markup = source.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  assert.equal((source.match(/<title>/g) || []).length, 1, `${file}: one title`);
  assert.equal((source.match(/<h1\b/g) || []).length, 1, `${file}: one H1`);
  assert.match(source, /<html lang="pt-BR"/);
  const title = source.match(/<title>(.*?)<\/title>/s)?.[1];
  const meta = tags(source, 'meta');
  const descriptionTags = meta.filter((tag) => tag.name === 'description');
  assert.equal(descriptionTags.length, 1, `${file}: one description`);
  const description = descriptionTags[0].content;
  assert(title && !titles.has(title), `${file}: unique title`); titles.add(title);
  assert(description && !descriptions.has(description), `${file}: unique description`); descriptions.add(description);
  const canonicalTags = tags(source, 'link').filter((tag) => tag.rel === 'canonical');
  assert.equal(canonicalTags.length, 1);
  const canonical = canonicalTags[0].href;
  const expected = `${origin}/${file === 'index.html' ? '' : file}`;
  assert.equal(canonical, expected, `${file}: production canonical`); canonicals.add(canonical);
  assert(!meta.some((tag) => /^(robots|googlebot)$/i.test(tag.name || '') && /noindex|nosnippet/i.test(tag.content)), `${file}: indexing/snippets allowed`);
  const ogImage = meta.find((tag) => tag.property === 'og:image')?.content;
  assert(ogImage?.startsWith('https://'), `${file}: absolute image`);
  assert.equal(meta.find((tag) => tag.property === 'og:url')?.content, canonical);
  const scripts = [...source.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  assert.equal(scripts.length, 1, `${file}: one JSON-LD graph`);
  const schema = JSON.parse(scripts[0][1]);
  const graph = schema['@graph'];
  const ids = new Set(graph.map((entity) => entity['@id']));
  const verifyRefs = (value) => {
    if (!value || typeof value !== 'object') return;
    if (Object.keys(value).length === 1 && value['@id']) assert(ids.has(value['@id']), `${file}: resolved ${value['@id']}`);
    Object.values(value).forEach(verifyRefs);
  };
  verifyRefs(graph);
  for (const type of ['Dentist', 'Person', 'WebSite', 'WebPage']) assert(graph.some((entity) => entity['@type'] === type));
  const dentist = graph.find((entity) => entity['@type'] === 'Dentist');
  assert(source.includes(dentist.address.streetAddress.replaceAll('&', '&amp;')), `${file}: visible address matches schema`);
  if (file.startsWith('paginas/')) {
    assert.match(title, /Mooca/);
    assert.match(description, /Mooca/);
    assert.match(source, /aria-label="Caminho de navegação"/);
    assert(graph.some((entity) => entity['@type'] === 'Service'));
  }
  for (const [tagName, attribute] of [['a', 'href'], ['img', 'src'], ['script', 'src'], ['link', 'href'], ['video', 'poster'], ['source', 'src']]) {
    for (const tag of tags(tagName === 'script' ? source : markup, tagName)) {
      const value = tag[attribute]?.replaceAll('&amp;', '&');
      if (!value || /^(#|mailto:|tel:|data:)/.test(value)) continue;
      const url = new URL(value, canonical);
      if (url.origin !== origin) continue;
      const filePath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
      await access(path.join(dist, filePath));
    }
  }
  console.log(`OK ${file}: metadata, graph, links and assets`);
}
const sitemap = await read('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.deepEqual(new Set(sitemapUrls), canonicals, 'sitemap matches canonical pages');
assert.equal(sitemapUrls.length, canonicals.size, 'no sitemap duplicates');
const robots = await read('robots.txt');
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
for (const bot of ['*', 'OAI-SearchBot', 'PerplexityBot']) assert(robots.includes(`User-agent: ${bot}\nAllow: /`));
console.log(`SEO/GEO verified: ${files.length} pages; sitemap and search crawlers OK.`);
