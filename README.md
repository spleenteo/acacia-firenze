# Acacia Firenze

A modern Astro-based website for Acacia Firenze, featuring:
- 🌐 Multi-language support (Italian/English)
- 🎨 Tailwind CSS + DaisyUI for styling
- 📊 DatoCMS integration for content management
- 🔄 SEO-ready with redirect management
- ⚡ Server-side rendering with Vite

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
DATOCMS_API_TOKEN=your_api_token_here
DATOCMS_ENVIRONMENT=main
```

3. Run development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── lib/
│   ├── datocms/   # DatoCMS integration
│   ├── i18n/      # Internationalization
│   └── seo/       # SEO utilities
├── middleware/     # Request middleware
├── pages/         # Route pages
│   ├── it/        # Italian pages
│   └── en/        # English pages
└── styles/        # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run codegen` - Generate TypeScript types from GraphQL
- `npm run codegen:watch` - Watch mode for GraphQL codegen

## DatoCMS Integration

The project uses DatoCMS for content management. GraphQL queries are defined in `src/lib/datocms/queries.graphql`.

To generate TypeScript types from your GraphQL schema:
```bash
npm run codegen
```

## Deployment

For production deployment, you'll need to:
1. Install an Astro adapter (e.g., `@astrojs/vercel`, `@astrojs/netlify`)
2. Configure the adapter in `astro.config.mjs`
3. Build the project with `npm run build`

## Next Steps

1. Set up content models in DatoCMS
2. Create GraphQL queries for your content
3. Build out the remaining pages
4. Configure production deployment