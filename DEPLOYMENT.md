# Cloudflare Deployment Guide

## Prerequisites

1. A Cloudflare account
2. Wrangler CLI authenticated: `npx wrangler login`
3. Environment variables configured

## Initial Setup

### 1. Create a Cloudflare Pages Project

First deployment will create the project automatically:
```bash
npm run deploy:test
```

### 2. Configure Environment Variables

In the Cloudflare Dashboard:
1. Go to Workers & Pages > acacia-firenze > Settings > Environment variables
2. Add the following variables for Production:
   - `DATOCMS_API_TOKEN`: Your DatoCMS read-only API token

### 3. Configure Custom Domain (Optional)

In the Cloudflare Dashboard:
1. Go to Workers & Pages > acacia-firenze > Custom domains
2. Add your custom domain

## Deployment Commands

### Test Deployment (Preview)
```bash
npm run deploy:test
```
This creates a preview deployment with a unique URL.

### Production Deployment
```bash
npm run deploy
```
This deploys to the main production branch.

### Local Preview
```bash
npm run build:cloudflare
npm run preview:cloudflare
```
This builds and runs the site locally using Wrangler.

## Build Process

The build process:
1. Runs `astro build` with Cloudflare adapter
2. Generates static pages for districts (prerender = true)
3. Creates server-side functions for dynamic pages
4. Outputs to `dist/` directory
5. Deploys to Cloudflare Pages

## Important Notes

- **Static vs Dynamic**: District pages are static, while accommodations and moods are dynamic
- **Environment Variables**: Must be set in Cloudflare Dashboard, not in wrangler.toml
- **Build Time**: First build may take longer due to icon generation
- **Compatibility**: Uses `nodejs_compat` flag for Node.js compatibility

## Troubleshooting

### Icon Build Errors
If you see "Unable to locate icon" errors:
1. Check icon names match available Iconoir icons
2. Run `npm install` to ensure all dependencies are installed

### Environment Variable Issues
If the site can't connect to DatoCMS:
1. Verify DATOCMS_API_TOKEN is set in Cloudflare Dashboard
2. Check the token has read permissions
3. Ensure the token is for the correct DatoCMS project

### Build Failures
If builds fail:
1. Run `npm run build` locally first to check for errors
2. Check the Cloudflare Pages build logs
3. Ensure all dependencies are in package.json (not devDependencies)

## Monitoring

View your deployments:
- Dashboard: https://dash.cloudflare.com/
- Direct URL: https://acacia-firenze.pages.dev
- Custom domain: (your configured domain)

## Rollback

To rollback to a previous version:
1. Go to Workers & Pages > acacia-firenze > Deployments
2. Find the previous working deployment
3. Click "Rollback to this deployment"