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

async function exploreFields() {
  const types = [
    'PostRecord',
    'DistrictsRecord',
    'MoodRecord',
    'ServiceRecord'
  ]
  
  for (const typeName of types) {
    console.log(`\n=== ${typeName} Fields ===`)
    try {
      const result = await client.request(typeQuery, { typeName })
      result.__type.fields
        .filter(field => !field.name.startsWith('_'))
        .forEach(field => {
          console.log(`- ${field.name}: ${field.type.name || field.type.ofType?.name}`)
        })
    } catch (error) {
      console.error(`Error for ${typeName}:`, error.message)
    }
  }
}

exploreFields()