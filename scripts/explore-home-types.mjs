import { GraphQLClient, gql } from 'graphql-request'
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    'X-Environment': process.env.DATOCMS_ENVIRONMENT || 'start',
  },
})

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

async function exploreTypes() {
  const types = [
    'HomePageOriginalModelCtaLinkField',
    'PromoApartmentRecord',
    'InternalLinkRecord',
    'ExternalLinkRecord'
  ]
  
  for (const typeName of types) {
    console.log(`\n=== ${typeName} ===`)
    try {
      const result = await client.request(typeQuery, { typeName })
      if (result.__type) {
        result.__type.fields
          .filter(field => !field.name.startsWith('_'))
          .forEach(field => {
            console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
          })
      } else {
        console.log('Type not found')
      }
    } catch (error) {
      console.error(`Error for ${typeName}:`, error.message)
    }
  }
}

exploreTypes()