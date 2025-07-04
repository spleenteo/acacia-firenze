import { config } from 'dotenv';
import { GraphQLClient } from 'graphql-request';

// Load environment variables
config();

const endpoint = 'https://graphql.datocms.com/';

async function testConnection() {
  console.log('Testing DatoCMS connection...');
  console.log('Token:', process.env.DATOCMS_API_TOKEN ? '✓ Set' : '✗ Missing');
  console.log('Environment:', process.env.DATOCMS_ENVIRONMENT || 'start (default)');
  
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
      'X-Environment': process.env.DATOCMS_ENVIRONMENT || 'start',
    },
  });

  try {
    // Test query to check connection
    const query = `
      query TestConnection {
        _site {
          globalSeo {
            siteName
          }
        }
      }
    `;
    
    const data = await client.request(query);
    console.log('✓ Connection successful!');
    console.log('Site name:', data._site.globalSeo?.siteName);
    
    // Test apartment query
    const apartmentQuery = `
      query TestApartments($locale: SiteLocale!) {
        allApartments(locale: $locale, first: 5) {
          id
          name
          published
        }
      }
    `;
    
    const apartmentData = await client.request(apartmentQuery, { locale: 'en' });
    console.log('\nApartments found:', apartmentData.allApartments.length);
    apartmentData.allApartments.forEach(apt => {
      console.log(`- ${apt.name} (Published: ${apt.published})`);
    });
    
  } catch (error) {
    console.error('✗ Connection failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
  }
}

testConnection();