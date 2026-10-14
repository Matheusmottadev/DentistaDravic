import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/lib/site.ts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  build: {
    format: 'file'
  }
});
