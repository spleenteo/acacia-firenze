# Acacia Firenze - Project Documentation

## Overview
Acacia Firenze is a luxury apartment rental website for Florence, Italy. The project is built with Astro, uses Tailwind CSS for styling, and fetches content from DatoCMS via GraphQL.

## Tech Stack
- **Framework**: Astro 5.0 (Server-side rendering mode)
- **Styling**: Tailwind CSS (via @tailwindcss/vite)
- **CMS**: DatoCMS (Headless CMS with GraphQL API)
- **Images**: @datocms/astro for responsive image optimization
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
- `ApartmentCard.astro` - Apartment card with responsive images
- `MoodCard.astro` - Mood display card with overlay text and responsive images
- `DistrictCard.astro` - District display card with responsive images
- `CardLabel.astro` - Reusable animated icon label with hover effect
- `Gallery.astro` - Reusable gallery component for responsive image grids
- `ImageBlock/` - Component for DatoCMS image blocks
- `ImageGalleryBlock/` - Component for DatoCMS image gallery blocks
- `ResponsiveImage/` - Base responsive image component
- `Navigation.astro` - Site navigation with language switcher
- `Footer.astro` - Site footer (accepts `hasBottomWidget` prop for conditional padding)
- `BeddyWidget.astro` - Reusable Beddy booking widget component
- `TranslationsProvider.astro` - Loads translations for current locale

## DatoCMS Integration

### GraphQL Queries
Located in `/src/lib/datocms/queries/`:
- `apartments.graphql` - Apartment queries with responsive image fragments
- `districts.graphql` - District queries with responsive image fragments
- `moods.graphql` - Mood queries with boxes and responsive images
- `homepage.graphql` - Homepage content with responsive images
- `translations.graphql` - Translation queries for UI strings

### Responsive Image Implementation
All images from DatoCMS use the responsive image feature:
- **Fragment**: `ResponsiveImageFragment` includes all necessary fields
- **Component**: `Image` from `@datocms/astro` renders optimized images
- **Features**: 
  - Automatic srcSet generation for different viewport sizes
  - Lazy loading with base64 placeholders
  - Blurhash support for smooth loading transitions
  - WebP format with fallbacks
  - Proper sizing for hero images (1920px) vs content images (800px)

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

### GraphQL Utilities
The `/src/lib/datocms/graphql.ts` file provides utilities for working with GraphQL fragments:
- `graphql` function for query composition
- `FragmentOf` type helper
- `ResponsiveImageFragmentFragment` type export

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

#### Image Components

##### Gallery Component
Reusable gallery for displaying responsive image grids:
```astro
<Gallery 
  images={galleryImages}
  title="Photo Gallery"
  layout="grid"
  columns={{ default: 1, md: 2, lg: 3 }}
  aspectRatio="aspect-[4/3]"
  showCaptions={true}
/>
```

Features:
- Grid or masonry layout options
- Configurable columns for different breakpoints
- Optional captions
- Hover zoom effect
- Responsive image optimization

##### Responsive Images
All images use the `Image` component from `@datocms/astro`:
```astro
import { Image } from '@datocms/astro'

<Image 
  data={image.responsiveImage}
  pictureClass="w-full h-full"
  imgClass="w-full h-full object-cover"
/>
```

Key props:
- `data`: ResponsiveImage data from DatoCMS
- `pictureClass`: Classes for the `<picture>` element
- `imgClass`: Classes for the `<img>` element

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

## Responsive Images Implementation

### Overview
The project uses DatoCMS's responsive image feature with the `@datocms/astro` package to deliver optimized images across all viewports.

### Key Components

#### 1. Image Component Usage
```astro
import { Image } from '@datocms/astro'

<Image 
  data={image.responsiveImage}
  pictureClass="w-full h-full"
  imgClass="w-full h-full object-cover"
/>
```

#### 2. GraphQL Fragment
All image queries include the ResponsiveImageFragment:
```graphql
fragment ResponsiveImageFragment on ResponsiveImage {
  src
  srcSet
  width
  height
  alt
  title
  base64
  sizes
  blurhash
}
```

#### 3. Image Sizing Strategy
- **Hero Images**: 1920px width with `sizes="100vw"`
- **Card Images**: 400-800px width with responsive sizes
- **Gallery Images**: 800px width with appropriate sizes attribute

### Implementation Details

#### Query Updates
All GraphQL queries have been updated to include:
1. `responsiveImage` field with appropriate imgix parameters
2. `blurhash` field for smooth loading transitions
3. Proper `sizes` attribute for responsive behavior

Example:
```graphql
image {
  url
  alt
  title
  blurhash
  responsiveImage(imgixParams: { w: 1920 }, sizes: "100vw") {
    ...ResponsiveImageFragment
  }
}
```

#### Component Updates
- **ApartmentCard**: Uses responsive images for box and featured images
- **MoodCard**: Displays mood images with responsive optimization
- **DistrictCard**: Shows first gallery image as responsive
- **Gallery**: Reusable component for image grids
- **Hero Sections**: Full-width responsive images in detail pages

### Benefits
1. **Performance**: Automatic WebP conversion and size optimization
2. **Loading**: Base64 placeholders and blurhash for smooth transitions
3. **Responsive**: Proper srcSet for all viewport sizes
4. **SEO**: Maintains alt text and proper image dimensions
5. **DX**: Simple component API with type safety