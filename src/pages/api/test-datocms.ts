import type { APIRoute } from 'astro';
import { datocmsRequest } from '../../lib/datocms';

export const GET: APIRoute = async () => {
  try {
    // Test basic connection
    const siteQuery = `
      query TestConnection {
        _site {
          globalSeo {
            siteName
          }
        }
      }
    `;
    
    const siteData = await datocmsRequest(siteQuery);
    
    // Test apartments query
    const apartmentQuery = `
      query TestApartments($locale: SiteLocale!) {
        allApartments(locale: $locale, first: 5, filter: { published: { eq: true } }) {
          id
          name
          published
        }
      }
    `;
    
    const apartmentData = await datocmsRequest(apartmentQuery, { locale: 'en' });
    
    return new Response(JSON.stringify({
      success: true,
      environment: {
        hasToken: !!import.meta.env.DATOCMS_API_TOKEN,
        environment: import.meta.env.DATOCMS_ENVIRONMENT || 'default',
        tokenLength: import.meta.env.DATOCMS_API_TOKEN?.length || 0
      },
      site: siteData,
      apartmentCount: apartmentData.allApartments?.length || 0,
      apartments: apartmentData.allApartments || []
    }, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      environment: {
        hasToken: !!import.meta.env.DATOCMS_API_TOKEN,
        environment: import.meta.env.DATOCMS_ENVIRONMENT || 'default',
        tokenLength: import.meta.env.DATOCMS_API_TOKEN?.length || 0
      }
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};