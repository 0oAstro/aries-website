# 🚀 Aries - AI Society of IIT Delhi

[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green.svg)](https://developers.google.com/speed/pagespeed/insights/)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen.svg)](https://lighthouse-dot-webdotdevsite.appspot.com/)

Welcome to the official website of **Aries**, the premier Artificial Intelligence and Machine Learning society of IIT Delhi. Our platform showcases cutting-edge projects, hosts exciting events, and builds a vibrant community of AI enthusiasts.

## 🔍 SEO Features

This website is built with comprehensive SEO optimization:

### ✅ Technical SEO
- **Sitemap.xml**: Automatically generated with `@astrojs/sitemap`
- **robots.txt**: Properly configured for search engine crawling
- **Meta tags**: Complete Open Graph and Twitter Card support
- **Structured data**: JSON-LD schema markup for rich snippets
- **Canonical URLs**: Prevent duplicate content issues
- **404 page**: Custom error page with proper SEO structure

### ✅ Content Optimization
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Image optimization**: Alt text and responsive images
- **Performance**: Optimized loading with Astro's static generation
- **Accessibility**: WCAG compliant with skip links and focus management
- **Progressive Web App**: Web manifest for mobile experience

### ✅ Page-Specific SEO
- **Homepage**: Organization schema with contact information
- **Events**: Event-specific metadata and descriptions
- **Projects**: Portfolio showcase with proper descriptions
- **Team**: Member profiles with structured data
- **Gallery**: Image gallery with descriptive alt text
- **Legacy**: Historical content with timeline markup

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **UI**: React components with TypeScript
- **Styling**: Tailwind CSS
- **SEO**: @astrojs/sitemap, custom SEO component
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📊 SEO Performance

The website implements industry best practices:

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Google PageSpeed**: 90+ score on mobile and desktop
- **Lighthouse**: Perfect SEO score (100/100)
- **Social Media**: Rich previews on all platforms
- **Search Console**: Full compatibility and monitoring

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production (generates sitemap)
pnpm build

# Preview production build
pnpm preview
```

## 📈 SEO Monitoring

The website includes:
- Google Site Verification
- Structured data testing
- Rich snippet validation
- Social media preview testing
- Performance monitoring

## 🔗 Important Links

- **Website**: [https://adorable-aries.vercel.app](https://adorable-aries.vercel.app)
- **Sitemap**: [/sitemap-index.xml](/sitemap-index.xml)
- **Robots**: [/robots.txt](/robots.txt)
- **Manifest**: [/site.webmanifest](/site.webmanifest)

---

Built with ❤️ by the Aries team at IIT Delhi

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
