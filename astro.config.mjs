// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    }
  }),
  env: {
    schema: {
      DATOCMS_API_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        default: process.env.DATOCMS_API_TOKEN
      }),
      DATOCMS_ENVIRONMENT: envField.string({
        context: 'server',
        access: 'secret',
        default: process.env.DATOCMS_ENVIRONMENT || 'start'
      })
    }
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/image']
    }
  }
});