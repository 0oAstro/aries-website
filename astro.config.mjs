// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adorable-aries.vercel.app', // Replace with your actual domain
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://adorable-aries.vercel.app/', // Replace with your actual domain
        'https://adorable-aries.vercel.app/team',
        'https://adorable-aries.vercel.app/events', 
        'https://adorable-aries.vercel.app/projects',
        'https://adorable-aries.vercel.app/gallery',
        'https://adorable-aries.vercel.app/legacy'
      ]
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
