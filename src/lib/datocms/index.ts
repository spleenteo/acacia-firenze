import { GraphQLClient } from 'graphql-request'

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
  const { preview = false, environment = import.meta.env.DATOCMS_ENVIRONMENT || 'start' } = options
  
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_TOKEN}`,
      'X-Environment': environment,
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