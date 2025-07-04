import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

interface RuntimeEnv {
  DATOCMS_API_TOKEN?: string
  DATOCMS_ENVIRONMENT?: string
}

export function getGraphQLClient(runtime?: { env: RuntimeEnv }) {
  // Try to get environment variables from different sources
  let apiToken: string | undefined
  let environment: string | undefined
  
  // 1. From runtime (Cloudflare Pages)
  if (runtime?.env) {
    apiToken = runtime.env.DATOCMS_API_TOKEN
    environment = runtime.env.DATOCMS_ENVIRONMENT
  }
  
  // 2. From import.meta.env (build time)
  if (!apiToken && import.meta.env.DATOCMS_API_TOKEN) {
    apiToken = import.meta.env.DATOCMS_API_TOKEN
    environment = import.meta.env.DATOCMS_ENVIRONMENT
  }
  
  // Default environment
  environment = environment || 'start'
  
  if (!apiToken) {
    console.error('DATOCMS_API_TOKEN not found in runtime or build environment')
    throw new Error('Missing DATOCMS_API_TOKEN')
  }
  
  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': environment,
    },
  })
}