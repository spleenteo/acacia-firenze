import rosetta from 'rosetta'
import type { AstroCookies } from 'astro'
import { getAvailableLocales, getDefaultLocale } from '../datocms/locales'

export const LOCALE_COOKIE_NAME = 'acacia_locale'

export type Locale = string

export async function getSupportedLocales(): Promise<string[]> {
  return await getAvailableLocales()
}

export async function isValidLocale(locale: string): Promise<boolean> {
  const locales = await getSupportedLocales()
  return locales.includes(locale)
}

export function getLocaleFromUrl(pathname: string): Locale | null {
  const segments = pathname.split('/')
  const maybeLocale = segments[1]
  return maybeLocale || null
}

export async function getLocaleFromCookie(cookies: AstroCookies): Promise<Locale | null> {
  const locale = cookies.get(LOCALE_COOKIE_NAME)?.value
  if (!locale) return null
  const isValid = await isValidLocale(locale)
  return isValid ? locale : null
}

export function setLocaleCookie(cookies: AstroCookies, locale: Locale) {
  cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    sameSite: 'lax',
  })
}

export async function getPreferredLocale(request: Request, cookies: AstroCookies): Promise<Locale> {
  const supportedLocales = await getSupportedLocales()
  const defaultLocale = getDefaultLocale(supportedLocales)
  
  // 1. Check URL
  const urlLocale = getLocaleFromUrl(new URL(request.url).pathname)
  if (urlLocale && await isValidLocale(urlLocale)) return urlLocale

  // 2. Check cookie
  const cookieLocale = await getLocaleFromCookie(cookies)
  if (cookieLocale) return cookieLocale

  // 3. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2))
    
    for (const lang of languages) {
      if (await isValidLocale(lang)) return lang
    }
  }

  // 4. Default
  return defaultLocale
}

// Translation system
const i18n = rosetta()

// Store for loaded translations
const loadedTranslations: Record<string, boolean> = {}

export function loadTranslations(locale: Locale, translations: Record<string, any>) {
  i18n.set(locale, translations)
  loadedTranslations[locale] = true
}

export function setLocale(locale: Locale) {
  i18n.locale(locale)
}

export function t(key: string, params?: Record<string, any>, locale?: Locale): string {
  if (locale) i18n.locale(locale)
  return i18n.t(key, params) || key // Fallback to key if translation not found
}

// Load translations from JSON files
export async function loadTranslationsFromFile(locale: Locale) {
  if (loadedTranslations[locale]) return
  
  try {
    const translations = await import(`./translations/${locale}.json`)
    loadTranslations(locale, translations.default)
  } catch (error) {
    console.warn(`Failed to load translations for locale ${locale}`)
  }
}

export async function getLocalizedPath(path: string, locale: Locale): Promise<string> {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const segments = cleanPath.split('/').filter(Boolean)
  
  // Remove locale if present (first segment might be a locale)
  if (segments[0] && await isValidLocale(segments[0])) {
    segments.shift()
  }
  
  // Add new locale
  return `/${locale}${segments.length > 0 ? '/' + segments.join('/') : ''}`
}

// Synchronous version for use in components (assumes first segment is locale if 2 chars)
export function getLocalizedPathSync(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const segments = cleanPath.split('/').filter(Boolean)
  
  // Remove locale if present (assumes 2-char segments are locales)
  if (segments[0] && segments[0].length === 2) {
    segments.shift()
  }
  
  // Add new locale
  return `/${locale}${segments.length > 0 ? '/' + segments.join('/') : ''}`
}