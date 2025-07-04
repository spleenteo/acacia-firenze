import { GraphQLClient } from 'graphql-request'
import { DATOCMS_API_TOKEN, DATOCMS_ENVIRONMENT } from 'astro:env/server'

const endpoint = 'https://graphql.datocms.com/'

export interface DatoCMSRequestOptions {
  preview?: boolean
  environment?: string
}

export async function datocmsRequest<TResult, TVariables = any>(
  document: string,
  variables?: TVariables,
  options: DatoCMSRequestOptions = {}
): Promise<TResult> {
  const { preview = false, environment = DATOCMS_ENVIRONMENT || 'start' } = options
  
  // Get API token from Astro env
  const apiToken = DATOCMS_API_TOKEN
  
  if (!apiToken) {
    console.error('DATOCMS_API_TOKEN is not available')
    throw new Error('Missing DATOCMS_API_TOKEN')
  }
  
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': environment,
      ...(preview && { 'X-Include-Drafts': 'true' }),
    },
  })

  try {
    const result = await client.request<TResult>(document, variables as any)
    return result
  } catch (error) {
    console.error('DatoCMS request failed:', error)
    console.error('Query:', document)
    console.error('Variables:', variables)
    console.error('Environment:', environment)
    throw error
  }
}

export async function datocmsCollection<TResult, TVariables = any>(
  document: string,
  variables: TVariables,
  options: DatoCMSRequestOptions = {}
): Promise<TResult[]> {
  const allItems: TResult[] = []
  let hasNextPage = true
  let endCursor: string | null = null

  while (hasNextPage) {
    const response = await datocmsRequest(document, {
      ...variables,
      after: endCursor,
    }, options)

    const collection = Object.values(response as any)[0]
    if (collection?.edges) {
      allItems.push(...collection.edges.map((edge: any) => edge.node))
      hasNextPage = collection.pageInfo.hasNextPage
      endCursor = collection.pageInfo.endCursor
    } else {
      hasNextPage = false
    }
  }

  return allItems
}