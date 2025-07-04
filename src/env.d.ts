/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATOCMS_API_TOKEN: string
  readonly DATOCMS_ENVIRONMENT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface Locals {
    locale: import('./lib/i18n').Locale
  }
}