import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

export interface DatoCMSRequestOptions {
  preview?: boolean
  environment?: string
  context?: any // Astro context with locals
}

// Helper to get environment variables in Cloudflare
function getEnvVar(name: string, context?: any): string | undefined {
  // Try different ways to access env vars
  
  // 1. From Astro context (Cloudflare runtime)
  if (context?.locals?.runtime?.env?.[name]) {
    return context.locals.runtime.env[name]
  }
  
  // 2. From import.meta.env (build time)
  if (import.meta.env[name]) {
    return import.meta.env[name]
  }
  
  // 3. From process.env (Node.js compatibility)
  if (typeof process !== 'undefined' && process.env?.[name]) {
    return process.env[name]
  }
  
  return undefined
}

export async function datocmsRequestCloudflare<TResult, TVariables = any>(
  document: string,
  variables?: TVariables,
  options: DatoCMSRequestOptions = {}
): Promise<TResult> {
  const { preview = false, environment, context } = options
  
  const apiToken = getEnvVar('DATOCMS_API_TOKEN', context)
  const defaultEnv = getEnvVar('DATOCMS_ENVIRONMENT', context) || 'start'
  const finalEnvironment = environment || defaultEnv
  
  if (!apiToken) {
    console.error('DATOCMS_API_TOKEN not found in environment')
    throw new Error('Missing DATOCMS_API_TOKEN')
  }
  
  console.log('DatoCMS Request:', {
    hasToken: !!apiToken,
    tokenLength: apiToken?.length,
    environment: finalEnvironment,
    endpoint
  })
  
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': finalEnvironment,
      ...(preview && { 'X-Include-Drafts': 'true' }),
    },
  })

  try {
    return await client.request(document, variables)
  } catch (error) {
    console.error('DatoCMS request failed:', error)
    throw error
  }
}