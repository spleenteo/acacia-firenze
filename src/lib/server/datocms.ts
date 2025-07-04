import { GraphQLClient } from 'graphql-request'
import type { AstroGlobal } from 'astro'

const endpoint = 'https://graphql.datocms.com/'

/**
 * Gets environment variables from the Astro context
 * In Cloudflare Pages, these are available at runtime via different methods
 */
export function getEnvFromAstro(Astro: AstroGlobal): { apiToken?: string; environment?: string } {
  // Method 1: For Cloudflare Pages runtime via locals.runtime.env
  if (Astro.locals?.runtime?.env) {
    console.log('Found env in locals.runtime.env')
    return {
      apiToken: Astro.locals.runtime.env.DATOCMS_API_TOKEN,
      environment: Astro.locals.runtime.env.DATOCMS_ENVIRONMENT || 'start'
    }
  }
  
  // Method 2: Direct from locals.env (some Cloudflare configurations)
  if ((Astro.locals as any)?.env) {
    console.log('Found env in locals.env')
    return {
      apiToken: (Astro.locals as any).env.DATOCMS_API_TOKEN,
      environment: (Astro.locals as any).env.DATOCMS_ENVIRONMENT || 'start'
    }
  }
  
  // Method 3: From process.env (if available)
  if (typeof process !== 'undefined' && process.env) {
    console.log('Found env in process.env')
    return {
      apiToken: process.env.DATOCMS_API_TOKEN,
      environment: process.env.DATOCMS_ENVIRONMENT || 'start'
    }
  }
  
  // Method 4: Fallback to import.meta.env (for local dev and static builds)
  console.log('Using import.meta.env')
  return {
    apiToken: import.meta.env.DATOCMS_API_TOKEN,
    environment: import.meta.env.DATOCMS_ENVIRONMENT || 'start'
  }
}

/**
 * Creates a GraphQL client with proper authentication
 * Must be called from within an Astro component with access to the Astro global
 */
export function createDatoCMSClient(Astro: AstroGlobal) {
  const { apiToken, environment } = getEnvFromAstro(Astro)
  
  if (!apiToken) {
    console.error('DATOCMS_API_TOKEN not found in environment')
    throw new Error('Missing DATOCMS_API_TOKEN')
  }
  
  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': environment!,
    },
  })
}

/**
 * Makes a request to DatoCMS
 * Must be called from within an Astro component
 */
export async function datocmsRequest<T = any>(
  Astro: AstroGlobal,
  query: string,
  variables?: any
): Promise<T> {
  const client = createDatoCMSClient(Astro)
  return client.request(query, variables)
}