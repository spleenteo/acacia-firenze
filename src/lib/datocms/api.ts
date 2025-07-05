import { datocmsRequest } from './index'
import type { Locale } from '../i18n'
import { gql } from 'graphql-request'

// Query per HomePage Original
const HOME_PAGE_ORIGINAL_QUERY = gql`
  query GetHomePageOriginal($locale: SiteLocale!) {
    homePageOriginal(locale: $locale) {
      id
      title
      claim
      stayText
      doText
      moodsTitle
      beddyId
      promoTitle
      ctaText
      ctaLabel
      ctaImage {
        url
        alt
        title
      }
      moods {
        id
        name
        slug
        claim
        image {
          url
          alt
          title
        }
      }
      promo {
        id
        description
        foto {
          url
          alt
          title
        }
        apartment {
          id
          name
          slug
        }
      }
      seo {
        title
        description
        image {
          url
        }
        twitterCard
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`

// Query per Apartments
const ALL_APARTMENTS_QUERY = gql`
  query GetAllApartments($locale: SiteLocale!, $first: IntType = 100) {
    allApartments(locale: $locale, first: $first, orderBy: position_ASC, filter: { published: { eq: true } }) {
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
    }
  }
`

// Query per single Apartment by slug
const APARTMENT_BY_SLUG_QUERY = gql`
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
      beddyId
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

// Homepage Original
export async function getHomePageOriginal(locale: Locale) {
  const data = await datocmsRequest<any>(
    HOME_PAGE_ORIGINAL_QUERY,
    { locale }
  )
  return data.homePageOriginal
}

// Apartments
export async function getAllApartments(locale: Locale, limit = 100) {
  const data = await datocmsRequest<any>(
    ALL_APARTMENTS_QUERY,
    { locale, first: limit }
  )
  return data.allApartments
}

// Altri metodi esistenti commentati per ora
export async function getHomePage(locale: Locale) {
  // TODO: Implementare
  return null
}

export async function getApartmentBySlug(locale: Locale, slug: string) {
  const data = await datocmsRequest<any>(
    APARTMENT_BY_SLUG_QUERY,
    { locale, slug }
  )
  return data.apartment
}

export async function getAllDistricts(locale: Locale) {
  const data = await datocmsRequest<any>(
    gql`
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
    `,
    { locale }
  )
  return data.allDistricts || []
}

export async function getDistrictBySlug(locale: Locale, slug: string) {
  const data = await datocmsRequest<any>(
    gql`
      query GetDistrictBySlug($locale: SiteLocale!, $slug: String!) {
        districts(locale: $locale, filter: { slug: { eq: $slug } }) {
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
          seo {
            title
            description
            image {
              url
            }
          }
        }
      }
    `,
    { locale, slug }
  )
  return data.districts
}

export async function getAllMoods(locale: Locale) {
  const data = await datocmsRequest<any>(
    gql`
      query GetAllMoods($locale: SiteLocale!) {
        allMoods(locale: $locale, orderBy: position_ASC) {
          id
          name
          slug
          description
          claim
          image {
            url
            alt
            title
          }
        }
      }
    `,
    { locale }
  )
  return data.allMoods || []
}

export async function getMoodBySlug(locale: Locale, slug: string) {
  const data = await datocmsRequest<any>(
    gql`
      query GetMoodBySlug($locale: SiteLocale!, $slug: String!) {
        mood(locale: $locale, filter: { slug: { eq: $slug } }) {
          id
          name
          slug
          description
          claim
          image {
            url
            alt
            title
          }
          seo {
            title
            description
            image {
              url
            }
          }
          boxes {
            ... on ApartmentRecord {
              __typename
              id
              name
              slug
              claim
              highlight
              price
              bedrooms
              bathrooms
              sleeps
              featuredImage {
                url
                alt
              }
              boxImage {
                url
                alt
              }
              district {
                name
                slug
              }
            }
            ... on DistrictsRecord {
              __typename
              id
              name
              slug
              abstract
              gallery {
                image {
                  url
                  alt
                }
              }
            }
          }
        }
      }
    `,
    { locale, slug }
  )
  return data.mood
}

export async function getAllServices(locale: Locale) {
  // TODO: Implementare
  return []
}

export async function getServiceBySlug(locale: Locale, slug: string) {
  // TODO: Implementare
  return null
}

export async function getAllPosts(locale: Locale, limit = 100) {
  // TODO: Implementare
  return []
}

export async function getPostBySlug(locale: Locale, slug: string) {
  // TODO: Implementare
  return null
}

export async function getAllFaqs(locale: Locale) {
  // TODO: Implementare
  return {
    faqs: [],
    page: null
  }
}

export async function getNavigationData(locale: Locale) {
  // TODO: Implementare
  return {}
}

export async function getTranslations(locale: Locale, keys: string[]) {
  const data = await datocmsRequest<any>(
    gql`
      query GetTranslations($locale: SiteLocale!, $keys: [String!]) {
        allTranslations(locale: $locale, filter: { key: { in: $keys } }) {
          key
          value
        }
      }
    `,
    { locale, keys }
  )
  
  // Convert array to key-value object for easier access
  const translations: Record<string, string> = {}
  data.allTranslations?.forEach((t: any) => {
    if (t.key && t.value) {
      translations[t.key] = t.value
    }
  })
  
  return translations
}