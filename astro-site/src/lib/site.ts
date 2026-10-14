export const SITE_URL = 'https://dravitoriapassos.com';

export function canonicalUrl(path: string) {
  const url = new URL(path, SITE_URL);
  // Keep canonical URLs on the production domain, without tracking parameters.
  const pathname = url.pathname === '/index.html' ? '/' : url.pathname;
  return new URL(pathname, SITE_URL).href;
}
