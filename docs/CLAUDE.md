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
- `/src/lib/i18n/` - Internationalization with Rosetta
- `/src/layouts/` - Page layouts
- `/src/styles/` - Global styles and Tailwind configuration
- `/scripts/` - Build and utility scripts
- `/docs/` - Documentation files

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
- `ApartmentCard.astro` - Apartment card with DaisyUI-inspired styling
- `MoodCard.astro` - Mood display card with overlay text
- `DistrictCard.astro` - District display card
- `CardLabel.astro` - Reusable animated icon label with hover effect
- `Navigation.astro` - Site navigation with language switcher
- `Footer.astro` - Site footer (accepts `hasBottomWidget` prop for conditional padding)
- `BeddyWidget.astro` - Reusable Beddy booking widget component
- `TranslationsProvider.astro` - Loads translations for current locale

## DatoCMS Integration

### GraphQL Queries
Located in `/src/lib/datocms/queries/`:
- `apartments.graphql` - Apartment queries
- `districts.graphql` - District queries
- `moods.graphql` - Mood queries with boxes (apartments/districts)
- `homepage.graphql` - Homepage content
- `translations.graphql` - Translation queries for UI strings

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
- `body-end` slot in Layout component for injecting content at the end of body

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (fetches translations automatically)
npm run dev

# Build for production (fetches translations automatically)
npm run build

# Regenerate types from DatoCMS
npm run codegen

# Fetch translations from DatoCMS
npm run translations:fetch

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

## Third-Party Integrations

### Beddy Booking Widget
The site integrates with Beddy.io for online booking functionality:

- **Component**: `BeddyWidget.astro` - Reusable component that accepts `locale` and `beddyId` props
- **Implementation**: Uses custom `<beddy-bar>` HTML element with `lang` and `widgetcode` attributes
- **Script**: Loads from `https://cdn.beddy.io/bol/prod/beddybar.js?release13052020_v0`
- **CMS Fields**: 
  - Apartments: `beddyId` field
  - Home Page: `beddyId` field
- **Placement**: Renders at the end of the body using the `body-end` slot
- **Footer Adjustment**: Footer component accepts `hasBottomWidget` prop to add extra bottom padding when widget is present

#### Usage Example
```astro
<BeddyWidget locale={locale} beddyId={apartment.beddyId} />
```

## Internationalization (i18n)

### Rosetta Integration
The project uses Rosetta for lightweight internationalization:

- **Translation Management**: Translations are stored in DatoCMS and fetched at build time
- **Auto-fetch**: Translations are automatically fetched before `dev` and `build` commands
- **Storage**: Translations are saved as JSON files in `/src/lib/i18n/translations/`
- **Usage**: Use the `t()` function from `@lib/i18n` to get translations

#### Translation Usage
```astro
import { t } from '@lib/i18n'

// Simple translation
const label = t('apartment', {}, locale)

// Nested translation
const navLabel = t('nav.accommodations', {}, locale)

// Translation with parameters
const message = t('welcome_message', { name: 'John' }, locale)
```

#### DatoCMS Translation Model
Create Translation records in DatoCMS with:
- `key`: The translation key (e.g., 'apartment', 'mood', 'district')
- `value`: The translated text for each locale

### Component Styling

#### Card Components
All card components use a consistent design system:
- White background with rounded corners
- Shadow effect with hover animation
- Category/type badges
- Responsive grid layout

#### CardLabel Component
Reusable animated label for card type indicators:
```astro
<CardLabel 
  icon="iconoir:home-simple" 
  label="Apartment" 
  iconColor="text-acacia-secondary" 
/>
```

Features:
- Circular icon badge that expands on hover
- Smooth slide animation revealing label text
- Customizable icon and color
- Used across all card types for consistency

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