import { GraphQLClient } from 'graphql-request'
import type { AstroGlobal } from 'astro'

const endpoint = 'https://graphql.datocms.com/'

/**
 * Create a DatoCMS client using Cloudflare context
 * This function tries multiple methods to access environment variables
 */
export function createDatoCMSClientFromContext(Astro: AstroGlobal) {
  let apiToken: string | undefined
  let environment: string | undefined
  
  // Method 1: Check context.env (Cloudflare Workers/Pages)
  const context = (Astro as any).context
  if (context?.env) {
    console.log('Found context.env')
    apiToken = context.env.DATOCMS_API_TOKEN
    environment = context.env.DATOCMS_ENVIRONMENT
  }
  
  // Method 2: Check locals.runtime.env
  if (!apiToken && Astro.locals?.runtime?.env) {
    console.log('Found locals.runtime.env')
    apiToken = Astro.locals.runtime.env.DATOCMS_API_TOKEN
    environment = Astro.locals.runtime.env.DATOCMS_ENVIRONMENT
  }
  
  // Method 3: Check request context (for Cloudflare directory mode)
  const request = (Astro as any).request
  if (!apiToken && request?.cf?.env) {
    console.log('Found request.cf.env')
    apiToken = request.cf.env.DATOCMS_API_TOKEN
    environment = request.cf.env.DATOCMS_ENVIRONMENT
  }
  
  // Method 4: Fallback to import.meta.env
  if (!apiToken) {
    console.log('Falling back to import.meta.env')
    apiToken = import.meta.env.DATOCMS_API_TOKEN
    environment = import.meta.env.DATOCMS_ENVIRONMENT
  }
  
  environment = environment || 'start'
  
  if (!apiToken) {
    throw new Error('DATOCMS_API_TOKEN not found in any context')
  }
  
  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': environment,
    },
  })
}