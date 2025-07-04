import { datocmsRequest } from './index'
import type { RedirectRule } from '../seo'
import { gql } from 'graphql-request'

const REDIRECTS_QUERY = `
  query GetAllRedirects {
    allRedirects {
      id
      originalUrl
      destinationUrl
      codiceRedirect
    }
  }
`

let cachedRedirects: RedirectRule[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function getRedirects(): Promise<RedirectRule[]> {
  const now = Date.now()
  
  // Return cached redirects if still valid
  if (cachedRedirects && now - cacheTimestamp < CACHE_DURATION) {
    return cachedRedirects
  }
  
  try {
    const data = await datocmsRequest<any>(REDIRECTS_QUERY, {})
    const redirects = (data as any).allRedirects || []
    
    // Map DatoCMS redirects to our RedirectRule format
    cachedRedirects = redirects.map((redirect: any) => ({
      source: redirect.originalUrl,
      destination: redirect.destinationUrl,
      statusCode: parseInt(redirect.codiceRedirect) || 301
    }))
    
    cacheTimestamp = now
    return cachedRedirects
  } catch (error) {
    console.error('Failed to fetch redirects:', error)
    return cachedRedirects || []
  }
}