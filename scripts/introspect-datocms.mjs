import { GraphQLClient } from 'graphql-request'
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    'X-Environment': process.env.DATOCMS_ENVIRONMENT || 'start',
  },
})

const introspectionQuery = `
  query IntrospectionQuery {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
            type {
              name
              kind
            }
          }
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
  }
`

const modelsQuery = `
  query GetAllModels {
    _allModelApiKeys {
      apiKey
    }
  }
`

async function introspect() {
  try {
    console.log('Fetching DatoCMS schema...')
    
    // Get all available queries
    const schemaData = await client.request(introspectionQuery)
    const queryFields = schemaData.__schema.queryType.fields
    
    console.log('\n=== Available Queries ===')
    queryFields
      .filter(field => !field.name.startsWith('_'))
      .forEach(field => {
        console.log(`- ${field.name}${field.description ? ` (${field.description})` : ''}`)
      })
    
    console.log('\n=== All Queries (including system) ===')
    queryFields
      .filter(field => field.name.startsWith('all'))
      .forEach(field => {
        console.log(`- ${field.name}`)
      })
    
    console.log('\n=== Singleton Models ===')
    queryFields
      .filter(field => !field.name.startsWith('_') && !field.name.startsWith('all'))
      .forEach(field => {
        console.log(`- ${field.name}`)
      })
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

introspect()