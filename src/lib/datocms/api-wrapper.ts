import { gql } from 'graphql-request'
import { getGraphQLClient } from './get-client'
import type { Locale } from '../i18n'

// Wrapper for API calls that handles runtime environment
export async function datocmsQuery<T = any>(
  query: string,
  variables?: any,
  runtime?: any
): Promise<T> {
  const client = getGraphQLClient(runtime)
  return client.request(query, variables)
}

// Re-export all queries with runtime support
export async function getAllDistrictsRuntime(locale: Locale, runtime?: any) {
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
            blurhash
            responsiveImage(imgixParams: { w: 800 }, sizes: "(max-width: 768px) 100vw, 800px") {
              src
              srcSet
              width
              height
              alt
              title
              base64
              sizes
            }
          }
        }
      }
    }
  `
  
  const data = await datocmsQuery<any>(query, { locale }, runtime)
  return data.allDistricts || []
}

export async function getApartmentBySlugRuntime(locale: Locale, slug: string, runtime?: any) {
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
          blurhash
          responsiveImage(imgixParams: { w: 400 }, sizes: "400px") {
            src
            srcSet
            width
            height
            alt
            title
            base64
            sizes
          }
        }
        featuredImage {
          url
          alt
          title
          blurhash
          responsiveImage(imgixParams: { w: 800 }, sizes: "(max-width: 768px) 100vw, 800px") {
            src
            srcSet
            width
            height
            alt
            title
            base64
            sizes
          }
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
            blurhash
            responsiveImage(imgixParams: { w: 800 }, sizes: "(max-width: 768px) 100vw, 800px") {
              src
              srcSet
              width
              height
              alt
              title
              base64
              sizes
            }
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
  
  const data = await datocmsQuery<any>(query, { locale, slug }, runtime)
  return data.apartment
}

export async function getHomePageOriginalRuntime(locale: Locale, runtime?: any) {
  const query = gql`
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
            blurhash
            responsiveImage(imgixParams: { w: 800 }, sizes: "(max-width: 768px) 100vw, 800px") {
              src
              srcSet
              width
              height
              alt
              title
              base64
              sizes
            }
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
  
  const data = await datocmsQuery<any>(query, { locale }, runtime)
  return data.homePageOriginal
}