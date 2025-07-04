import type { IGraphQLConfig } from 'graphql-config'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), '')

const config: IGraphQLConfig = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: `Bearer ${env.DATOCMS_API_TOKEN}`,
        'X-Environment': env.DATOCMS_ENVIRONMENT || 'start',
      },
    },
  },
  documents: ['src/**/*.{graphql,gql}'],
  generates: {
    'src/lib/datocms/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
        namingConvention: {
          enumValues: 'keep',
        },
      },
    },
  },
}

export default config