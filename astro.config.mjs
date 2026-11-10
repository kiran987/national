import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://naacanada.org',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://naacanada.org/404/' &&
        page !== 'https://naacanada.org/coaches/' &&
        !page.includes('/programs/archive/'),
    }),
  ],
  build: {
    // Inline the (small) stylesheet so it is not a render-blocking request
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
