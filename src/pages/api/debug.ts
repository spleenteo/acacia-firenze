import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const { locals } = context;
  const runtime = (locals as any).runtime;
  
  const debugInfo = {
    timestamp: new Date().toISOString(),
    environment: {
      // Check different ways environment variables might be available
      importMetaEnv: {
        DATOCMS_API_TOKEN: !!import.meta.env.DATOCMS_API_TOKEN,
        DATOCMS_ENVIRONMENT: import.meta.env.DATOCMS_ENVIRONMENT || 'not set',
        MODE: import.meta.env.MODE,
        PROD: import.meta.env.PROD,
        DEV: import.meta.env.DEV,
      },
      contextEnv: {
        hasEnv: !!(context as any).env,
        envKeys: (context as any).env ? Object.keys((context as any).env).filter(k => k.startsWith('DATO')) : [],
        DATOCMS_API_TOKEN: (context as any).env?.DATOCMS_API_TOKEN ? 'set' : 'not set',
        DATOCMS_ENVIRONMENT: (context as any).env?.DATOCMS_ENVIRONMENT || 'not set',
      },
      localsEnv: {
        hasEnv: !!locals?.env,
        envKeys: locals?.env ? Object.keys(locals.env).filter(k => k.startsWith('DATO')) : [],
        DATOCMS_API_TOKEN: locals?.env?.DATOCMS_API_TOKEN ? 'set' : 'not set',
        DATOCMS_ENVIRONMENT: locals?.env?.DATOCMS_ENVIRONMENT || 'not set',
      },
      runtime: {
        hasRuntime: !!runtime,
        hasEnv: !!runtime?.env,
        envKeys: runtime?.env ? Object.keys(runtime.env).filter(k => k.startsWith('DATO')) : [],
        DATOCMS_API_TOKEN: runtime?.env?.DATOCMS_API_TOKEN ? 'set' : 'not set',
        DATOCMS_ENVIRONMENT: runtime?.env?.DATOCMS_ENVIRONMENT || 'not set',
      },
      process: {
        hasProcess: typeof process !== 'undefined',
        hasEnv: typeof process !== 'undefined' && !!process.env,
        DATOCMS_API_TOKEN: typeof process !== 'undefined' && process.env?.DATOCMS_API_TOKEN ? 'set' : 'not set',
        DATOCMS_ENVIRONMENT: typeof process !== 'undefined' && process.env?.DATOCMS_ENVIRONMENT || 'not set',
      }
    },
    astroInfo: {
      url: context.url.toString(),
      site: context.site?.toString(),
    }
  };

  return new Response(JSON.stringify(debugInfo, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};