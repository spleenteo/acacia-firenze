export async function onRequest(context) {
  const { env } = context;
  
  return new Response(JSON.stringify({
    timestamp: new Date().toISOString(),
    environment: {
      DATOCMS_API_TOKEN: env.DATOCMS_API_TOKEN ? 'set' : 'not set',
      DATOCMS_ENVIRONMENT: env.DATOCMS_ENVIRONMENT || 'not set',
      allEnvKeys: Object.keys(env).filter(k => k.startsWith('DATO'))
    }
  }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
}