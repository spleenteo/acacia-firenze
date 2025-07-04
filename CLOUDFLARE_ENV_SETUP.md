# Cloudflare Pages Environment Variables Setup

## The Issue

The site uses Astro's new `envField` system which requires environment variables to be available at **build time**, not just runtime. This is why:
- The homepage works (it's statically built locally with env vars)
- Dynamic SSR pages fail (they need env vars at runtime on Cloudflare)

## Solution

You need to set environment variables in TWO places in Cloudflare Dashboard:

### 1. Build Configuration (for build-time access)
Go to: Workers & Pages > acacia-firenze > Settings > Environment variables

Add for **Production**:
- Variable name: `DATOCMS_API_TOKEN`
- Value: Your DatoCMS API token
- Type: Secret

- Variable name: `DATOCMS_ENVIRONMENT`
- Value: `start`
- Type: Plain text

### 2. Build Configuration Section
Go to: Workers & Pages > acacia-firenze > Settings > Builds & deployments

Under "Build configurations", add the same environment variables:
- `DATOCMS_API_TOKEN` = your token
- `DATOCMS_ENVIRONMENT` = start

This ensures the variables are available during the build process.

## Alternative Solution

If the above doesn't work, we can switch back to the traditional approach:
1. Remove the `env` field from `astro.config.mjs`
2. Use `import.meta.env` directly
3. Convert all pages to static generation (like the homepage)

## Testing

After adding the build environment variables:
1. Trigger a new deployment
2. Check if districts and accommodations pages load data

## Important Notes

- Cloudflare Pages runs the build in their infrastructure
- Environment variables must be explicitly passed to the build process
- The new Astro env system is stricter about when variables are available