# Acacia Firenze

Luxury apartment rental website for Florence, Italy. Built with Astro, Tailwind CSS, and DatoCMS.

## 🏛️ Overview

Acacia Firenze showcases luxury apartments in the historic center of Florence, providing a seamless booking experience with multi-language support (Italian/English) and dynamic content management.

### Key Features
- 🌐 Multi-language support (IT/EN)
- 🏠 Dynamic apartment listings with advanced filtering
- 🗺️ District-based exploration of Florence
- 🎨 Mood-based thematic collections
- 📱 Fully responsive design
- 🖼️ Optimized responsive images with DatoCMS integration
- ⚡ Server-side rendering with Cloudflare Pages
- 🔍 Fuzzy search functionality
- 🎯 SEO optimized with DatoCMS integration
- 📅 Integrated Beddy.io booking widget

## 🚀 Live Demo

- Preview: https://086ec123.acacia-firenze.pages.dev
- Production: https://acacia-firenze.pages.dev (configure in Cloudflare)
- GitHub: https://github.com/spleenteo/acacia-firenze

## 🛠️ Tech Stack

- **Framework**: Astro 5.0 (SSR mode)
- **Styling**: Tailwind CSS 4.0 + DaisyUI
- **CMS**: DatoCMS (GraphQL API)
- **Images**: @datocms/astro for responsive image optimization
- **Icons**: Iconify (Iconoir set)
- **Deployment**: Cloudflare Pages
- **Type Safety**: TypeScript + GraphQL Code Generator

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/spleenteo/acacia-firenze.git
cd acacia-firenze

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Add your DatoCMS API token to .env
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run codegen` | Generate TypeScript types from GraphQL |
| `npm run codegen:watch` | Watch mode for GraphQL codegen |
| `npm run preview:cloudflare` | Preview with Cloudflare locally |
| `npm run deploy:test` | Deploy to Cloudflare preview |
| `npm run deploy` | Deploy to Cloudflare production |

## 📁 Project Structure

```
.
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── ApartmentCard.astro
│   │   ├── DistrictCard.astro
│   │   ├── MoodCard.astro
│   │   ├── CardLabel.astro
│   │   ├── Gallery.astro
│   │   ├── ImageBlock/
│   │   ├── ImageGalleryBlock/
│   │   ├── ResponsiveImage/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── BeddyWidget.astro
│   │   └── TranslationsProvider.astro
│   ├── layouts/          # Page layouts
│   ├── lib/
│   │   ├── datocms/     # DatoCMS integration & queries
│   │   ├── i18n/        # Internationalization with Rosetta
│   │   └── seo/         # SEO utilities
│   ├── pages/           # Route pages
│   │   └── [locale]/    # Dynamic locale routing
│   │       ├── index.astro
│   │       ├── accommodations/
│   │       ├── districts/
│   │       └── moods/
│   └── styles/          # Global styles
├── scripts/             # Build scripts
│   └── fetch-translations.mjs
└── docs/               # Documentation
    ├── CLAUDE.md       # Detailed project documentation
    └── DEPLOYMENT.md   # Deployment guide
```

## 🌍 Deployment

The site is deployed on Cloudflare Pages with server-side rendering support.

### Quick Deploy
```bash
# Login to Cloudflare
npx wrangler login

# Deploy to preview
npm run deploy:test

# Deploy to production
npm run deploy
```

### Environment Variables in Cloudflare
1. Go to Cloudflare Dashboard > Workers & Pages > acacia-firenze
2. Settings > Environment variables
3. Add `DATOCMS_API_TOKEN` for production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🔧 Environment Variables

Required environment variables:
- `DATOCMS_API_TOKEN` - Read-only API token from DatoCMS
- `DATOCMS_ENVIRONMENT` - DatoCMS environment (default: main)

## 🔌 Third-Party Integrations

### Beddy.io Booking Widget
The site integrates with Beddy.io for real-time booking functionality:
- Displays on apartment detail pages and home page
- Configured via `beddyId` field in DatoCMS
- Automatically loads when `beddyId` is present
- Responsive and mobile-friendly

## 📝 Documentation

- [CLAUDE.md](./CLAUDE.md) - Detailed project documentation for AI assistants
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment guide

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary. All rights reserved.