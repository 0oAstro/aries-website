// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ariesiitd.com',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://ariesiitd.com/',
        'https://ariesiitd.com/team',
        'https://ariesiitd.com/events', 
        'https://ariesiitd.com/projects',
        'https://ariesiitd.com/gallery',
        'https://ariesiitd.com/legacy'
      ]
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
