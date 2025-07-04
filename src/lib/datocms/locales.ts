import { datocmsRequest } from './index'
import { gql } from 'graphql-request'

const LOCALES_QUERY = `
  query AllLocales {
    _site {
      locales
    }
  }
`

let cachedLocales: string[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

export async function getAvailableLocales(): Promise<string[]> {
  const now = Date.now()
  
  // Return cached locales if still valid
  if (cachedLocales && now - cacheTimestamp < CACHE_DURATION) {
    return cachedLocales
  }
  
  try {
    const data = await datocmsRequest<any>(LOCALES_QUERY, {})
    cachedLocales = (data as any)._site.locales || ['en']
    cacheTimestamp = now
    return cachedLocales
  } catch (error) {
    console.error('Failed to fetch locales:', error)
    // Fallback to default locales if DatoCMS fails
    return cachedLocales || ['it', 'en']
  }
}

export function getDefaultLocale(locales: string[]): string {
  // Check if 'it' is available, otherwise use the first locale
  return locales.includes('it') ? 'it' : locales[0] || 'en'
}