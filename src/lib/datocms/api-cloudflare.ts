import { GraphQLClient } from 'graphql-request'
import type { Locale } from '../i18n'
import { gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

// Helper to create GraphQL client with proper auth
function createClient(context?: any) {
  // In Cloudflare Pages, env vars can be in different places
  let apiToken: string | undefined
  let environment: string | undefined
  
  // Try different ways to access env vars
  // 1. Direct from context.env (Cloudflare Pages)
  if (context?.env) {
    apiToken = context.env.DATOCMS_API_TOKEN
    environment = context.env.DATOCMS_ENVIRONMENT
  }
  
  // 2. From locals.env (passed through middleware)
  if (!apiToken && context?.locals?.env) {
    apiToken = context.locals.env.DATOCMS_API_TOKEN
    environment = context.locals.env.DATOCMS_ENVIRONMENT
  }
  
  // 3. From locals.runtime.env
  if (!apiToken && context?.locals?.runtime?.env) {
    apiToken = context.locals.runtime.env.DATOCMS_API_TOKEN
    environment = context.locals.runtime.env.DATOCMS_ENVIRONMENT
  }
  
  // 4. Fall back to import.meta.env (build time)
  if (!apiToken) {
    apiToken = import.meta.env.DATOCMS_API_TOKEN
    environment = import.meta.env.DATOCMS_ENVIRONMENT
  }
  
  // Default environment
  environment = environment || 'start'
  
  console.log('Creating DatoCMS client:', {
    hasApiToken: !!apiToken,
    environment,
    contextType: context?.constructor?.name,
    hasEnv: !!context?.env,
    hasLocalsEnv: !!context?.locals?.env,
    hasRuntimeEnv: !!context?.locals?.runtime?.env
  })
  
  if (!apiToken) {
    throw new Error('DATOCMS_API_TOKEN not found in any location')
  }
  
  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'X-Environment': environment,
    },
  })
}

// Updated API functions that accept Astro context
export async function getAllDistrictsWithContext(locale: Locale, context?: any) {
  const client = createClient(context)
  
  const query = gql`
    query GetAllDistricts($locale: SiteLocale!) {
      allDistricts(locale: $locale, orderBy: position_ASC) {
        id
        name
        slug
        description
        abstract
        gallery {
          id
          image {
            url
            alt
            title
          }
        }
      }
    }
  `
  
  try {
    const data = await client.request<any>(query, { locale })
    return data.allDistricts || []
  } catch (error) {
    console.error('Failed to fetch districts:', error)
    return []
  }
}

export async function getApartmentBySlugWithContext(locale: Locale, slug: string, context?: any) {
  const client = createClient(context)
  
  const query = gql`
    query GetApartmentBySlug($locale: SiteLocale!, $slug: String!) {
      apartment(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug
        description
        claim
        highlight
        price
        bedrooms
        bathrooms
        sleeps
        acaciaReward
        published
        position
        boxImage {
          url
          alt
          title
        }
        featuredImage {
          url
          alt
          title
        }
        category {
          id
          name
          slug
        }
        district {
          id
          name
          slug
        }
        seo {
          title
          description
          image {
            url
          }
        }
        gallery {
          id
          image {
            url
            alt
            title
          }
        }
        cuddles {
          id
          name
          url
          position
        }
        ups {
          id
          name
          url
          position
        }
        homeTruth {
          id
          body
        }
      }
    }
  `
  
  try {
    const data = await client.request<any>(query, { locale, slug })
    return data.apartment
  } catch (error) {
    console.error('Failed to fetch apartment:', error)
    return null
  }
}