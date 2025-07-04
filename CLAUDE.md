# Acacia Firenze - Project Documentation

## Overview
Acacia Firenze is a luxury apartment rental website for Florence, Italy. The project is built with Astro, uses Tailwind CSS for styling, and fetches content from DatoCMS via GraphQL.

## Tech Stack
- **Framework**: Astro 5.0 (Server-side rendering mode)
- **Styling**: Tailwind CSS (via @tailwindcss/vite)
- **CMS**: DatoCMS (Headless CMS with GraphQL API)
- **Icons**: Iconify with astro-icon (using Iconoir icon set)
- **Type Generation**: GraphQL Code Generator
- **Language**: TypeScript

## Project Structure

### Key Directories
- `/src/pages/[locale]/` - Localized pages (supports Italian and English)
- `/src/components/` - Reusable Astro components
- `/src/lib/datocms/` - DatoCMS integration (API, queries, types)
- `/src/layouts/` - Page layouts
- `/src/styles/` - Global styles and Tailwind configuration

### Important Files
- `astro.config.mjs` - Astro configuration
- `.graphqlrc.ts` - GraphQL Code Generator configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.env` - Environment variables (DATOCMS_API_TOKEN)

## Key Features

### 1. Multi-language Support
- Supports Italian (it) and English (en)
- Dynamic locale-based routing: `/[locale]/...`
- Content fetched based on locale from DatoCMS

### 2. Content Types
- **Apartments**: Luxury rental properties with details, galleries, amenities
- **Districts**: Florence neighborhoods with descriptions and related apartments
- **Moods**: Thematic collections mixing apartments and districts
- **Home Page**: Dynamic content blocks with featured apartments and moods

### 3. Dynamic Pages
- `/[locale]/accommodations/` - Apartment listing with filters (district, bedrooms, category, search)
- `/[locale]/accommodations/[slug]` - Individual apartment details
- `/[locale]/districts/` - District listing
- `/[locale]/districts/[slug]` - Individual district pages (static)
- `/[locale]/moods/[slug]` - Mood pages with mixed content

### 4. Components
- `ApartmentCard.astro` - Reusable apartment card with category labels
- `MoodCard.astro` - Mood display card
- `DistrictCard.astro` - District display card
- `Navigation.astro` - Site navigation
- `Footer.astro` - Site footer

## DatoCMS Integration

### GraphQL Queries
Located in `/src/lib/datocms/queries/`:
- `apartments.graphql` - Apartment queries
- `districts.graphql` - District queries
- `moods.graphql` - Mood queries with boxes (apartments/districts)
- `homepage.graphql` - Homepage content

### API Functions
In `/src/lib/datocms/api.ts`:
- `getAllApartments()` - Fetch all apartments
- `getApartmentBySlug()` - Fetch single apartment with full details
- `getAllDistricts()` - Fetch all districts
- `getDistrictBySlug()` - Fetch single district
- `getAllMoods()` - Fetch all moods
- `getMoodBySlug()` - Fetch single mood with boxes
- `getHomePageOriginal()` - Fetch homepage content

### Type Generation
Run `npm run codegen` to regenerate TypeScript types from DatoCMS schema.

## Styling System

### Colors (Tailwind Classes)
- `acacia-primary` - Primary brand color
- `acacia-secondary` - Secondary/accent color
- Standard Tailwind gray scale for text/backgrounds

### Typography
- `heading-display` - Large display headings
- `heading-2` - Section headings
- Custom prose styles for content

### Layout
- `container-acacia` - Standard content container
- Responsive grid system using Tailwind classes

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Regenerate types from DatoCMS
npm run codegen

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Important Notes

### Dynamic vs Static Pages
- Accommodation and mood detail pages: Dynamic (`prerender = false`)
- District detail pages: Static (`prerender = true`)
- Index pages: Dynamic to support filtering

### Filtering System
The accommodations page includes client-side filtering:
- District filter
- Bedroom count filter
- Category filter
- Fuzzy search (minimum 3 characters)
- Reset filters button

### Data Relationships
- Apartments belong to Districts and Categories
- Moods contain "boxes" which can be either Apartments or Districts
- Content is position-ordered from DatoCMS

### Icons
Using Iconoir icon set via astro-icon:
- `iconoir:bed-ready` - Bedrooms
- `iconoir:bathroom` - Bathrooms
- `iconoir:group` - Guest capacity
- `iconoir:check-circle` - Amenities
- `iconoir:heart` - Cuddles (things we love)
- `iconoir:info-circle` - Home truths
- And many more...

## Environment Variables
Required in `.env`:
- `DATOCMS_API_TOKEN` - Read-only API token from DatoCMS

## Deployment

The site is deployed on Cloudflare Pages with server-side rendering support.

### Current Status
- Preview URL: https://086ec123.acacia-firenze.pages.dev
- Production URL: https://acacia-firenze.pages.dev
- Cloudflare Project: acacia-firenze

### Deployment Configuration
- **Adapter**: @astrojs/cloudflare (advanced mode)
- **Build Output**: dist/
- **Functions**: _worker.js for SSR
- **Static Assets**: Prerendered district pages

### Important Deployment Notes
1. Environment variables must be set in Cloudflare Dashboard
2. The SESSION KV binding warning can be ignored
3. Uses nodejs_compat for Node.js compatibility
4. District pages are statically generated at build time
5. All other pages use server-side rendering

### Deployment Commands
- `npm run deploy:test` - Deploy to preview branch
- `npm run deploy` - Deploy to production branch
- `npm run preview:cloudflare` - Test locally with wrangler