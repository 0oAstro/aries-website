import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: https://ariesiitd.com/sitemap-index.xml
Sitemap: https://ariesiitd.com/sitemap-0.xml

# Block access to certain files and directories
Disallow: /api/
Disallow: /_astro/
Disallow: /admin/
Disallow: *.json$
Disallow: /src/
Disallow: /node_modules/

# Allow search engines to crawl images
Allow: /public/
Allow: /images/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.avif$

# Host directive (helps with canonical URLs)
Host: https://ariesiitd.com
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}; 