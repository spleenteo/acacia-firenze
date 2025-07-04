import { GraphQLClient, gql } from 'graphql-request'
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    'X-Environment': process.env.DATOCMS_ENVIRONMENT || 'start',
  },
})

const homePageOriginalQuery = gql`
  query ExploreHomePageOriginal($locale: SiteLocale!) {
    homePageOriginal(locale: $locale) {
      id
      _modelApiKey
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`

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

async function exploreHomePageOriginal() {
  try {
    console.log('=== Exploring HomePageOriginal Model ===')
    const homePageData = await client.request(homePageOriginalQuery, { locale: 'it' })
    console.log('HomePage Original data:', JSON.stringify(homePageData, null, 2))
    
    console.log('\n=== All HomePageOriginalRecord Fields ===')
    const typeData = await client.request(typeQuery, { typeName: 'HomePageOriginalRecord' })
    typeData.__type.fields
      .filter(field => !field.name.startsWith('_'))
      .forEach(field => {
        console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
      })
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

exploreHomePageOriginal()