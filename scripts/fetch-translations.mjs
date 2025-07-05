import 'dotenv/config'
import { GraphQLClient } from 'graphql-request'
import { gql } from 'graphql-request'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const endpoint = 'https://graphql.datocms.com'
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  },
})

const TRANSLATIONS_QUERY = gql`
  query GetAllTranslations {
    allTranslations(first: 500) {
      key
      value
      _allValueLocales {
        locale
        value
      }
    }
  }
`

async function fetchTranslations() {
  const locales = ['it', 'en'] // Your supported locales
  
  try {
    console.log('Fetching all translations...')
    
    const data = await client.request(TRANSLATIONS_QUERY)
    
    // Process translations for each locale
    const translationsByLocale = {}
    
    // Initialize empty objects for each locale
    locales.forEach(locale => {
      translationsByLocale[locale] = {}
    })
    
    // Process each translation record
    data.allTranslations.forEach(t => {
      if (!t.key) return
      
      // Add default value
      if (t.value) {
        // Assuming the default locale is 'en'
        translationsByLocale['en'][t.key] = t.value
      }
      
      // Add localized values
      if (t._allValueLocales) {
        t._allValueLocales.forEach(localeValue => {
          if (localeValue.locale && localeValue.value && translationsByLocale[localeValue.locale]) {
            translationsByLocale[localeValue.locale][t.key] = localeValue.value
          }
        })
      }
    })
    
    // Save translations for each locale
    for (const locale of locales) {
      const translations = translationsByLocale[locale]
      const outputPath = path.join(__dirname, '..', 'src', 'lib', 'i18n', 'translations', `${locale}.json`)
      await fs.mkdir(path.dirname(outputPath), { recursive: true })
      await fs.writeFile(outputPath, JSON.stringify(translations, null, 2))
      
      console.log(`✓ Saved ${Object.keys(translations).length} translations for ${locale}`)
    }
  } catch (error) {
    console.error('Error fetching translations:', error)
  }
}

fetchTranslations()