// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://28Emc.github.io',
  base: '/portfolio',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});