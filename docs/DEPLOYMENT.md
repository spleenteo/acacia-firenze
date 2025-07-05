# Deployment Guide

## Current Setup
The project is configured for Cloudflare Pages deployment. However, direct uploads via `wrangler` always create preview deployments.

## Recommended: Connect GitHub to Cloudflare Pages

For automatic production deployments:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to your Pages project: `acacia-firenze`
3. Go to Settings → Build & deployments
4. Click "Connect to Git"
5. Select your GitHub repository: `spleenteo/acacia-firenze`
6. Configure:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables:
     - `DATOCMS_API_TOKEN`: (your token)
     - `DATOCMS_ENVIRONMENT`: `start`

Once connected:
- Pushes to `main` → Production deployment
- Pushes to other branches → Preview deployments
- No manual promotion needed

## Manual Deployment (Current Method)

### Deploy to Preview
```bash
npm run deploy
```

### Promote to Production
1. After running `npm run deploy`, note the preview URL (e.g., `https://929201eb.acacia-firenze.pages.dev`)
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/1ed0bcbfc2f1e696c278f37de34d8ef2/pages/view/acacia-firenze)
3. Find your deployment in the list
4. Click "Promote to Production"

## Environment Variables
Make sure these are set in Cloudflare Pages:
- `DATOCMS_API_TOKEN`
- `DATOCMS_ENVIRONMENT` (optional, defaults to 'start')