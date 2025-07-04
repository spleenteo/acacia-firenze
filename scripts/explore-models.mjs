import { GraphQLClient, gql } from 'graphql-request'
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    'X-Environment': process.env.DATOCMS_ENVIRONMENT || 'start',
  },
})

// Query to explore HomePage structure
const homePageQuery = gql`
  query ExploreHomePage($locale: SiteLocale!) {
    homePage(locale: $locale) {
      id
      _modelApiKey
      _seoMetaTags {
        attributes
        content
        tag
      }
      _firstPublishedAt
      _publishedAt
      _updatedAt
    }
  }
`

// Query to explore Redirects structure
const redirectsQuery = gql`
  query ExploreRedirects {
    allRedirects(first: 1) {
      id
      _modelApiKey
      _firstPublishedAt
    }
  }
`

// Query to get field information via introspection
const typeQuery = gql`
  query GetTypeFields($typeName: String!) {
    __type(name: $typeName) {
      name
      fields {
        name
        type {
          name
          kind
          ofType {
            name
            kind
          }
        }
      }
    }
  }
`

async function exploreModels() {
  try {
    console.log('=== Exploring HomePage Model ===')
    const homePageData = await client.request(homePageQuery, { locale: 'it' })
    console.log('HomePage sample:', JSON.stringify(homePageData, null, 2))
    
    console.log('\n=== Exploring HomePage Fields ===')
    const homePageType = await client.request(typeQuery, { typeName: 'HomePageRecord' })
    console.log('Available fields:')
    homePageType.__type.fields.forEach(field => {
      if (!field.name.startsWith('_')) {
        console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
      }
    })
    
    console.log('\n=== Exploring Redirect Fields ===')
    const redirectType = await client.request(typeQuery, { typeName: 'RedirectRecord' })
    console.log('Available fields:')
    redirectType.__type.fields.forEach(field => {
      if (!field.name.startsWith('_')) {
        console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
      }
    })
    
    console.log('\n=== Exploring Apartment Fields ===')
    const apartmentType = await client.request(typeQuery, { typeName: 'ApartmentRecord' })
    console.log('Available fields:')
    apartmentType.__type.fields.forEach(field => {
      if (!field.name.startsWith('_')) {
        console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
      }
    })
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

exploreModels()