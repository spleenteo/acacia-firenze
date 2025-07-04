import { defineMiddleware } from 'astro:middleware'
import { getPreferredLocale, setLocaleCookie, isValidLocale } from './lib/i18n'
import { getRedirects } from './lib/datocms/redirects'

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  const { cookies, request } = context
  
  // Skip middleware for static assets
  if (pathname.includes('.') || pathname.startsWith('/_')) {
    return next()
  }
  
  // Handle redirects first
  const redirectRules = await getRedirects()
  const redirect = redirectRules.find(rule => rule.source === pathname)
  if (redirect) {
    return context.redirect(redirect.destination, redirect.statusCode)
  }
  
  // Handle root path - redirect to preferred locale
  if (pathname === '/') {
    const preferredLocale = await getPreferredLocale(request, cookies)
    setLocaleCookie(cookies, preferredLocale)
    return context.redirect(`/${preferredLocale}/`, 302)
  }
  
  // Extract locale from URL
  const segments = pathname.split('/').filter(Boolean)
  const urlLocale = segments[0]
  
  // If no valid locale in URL, redirect to preferred locale
  if (!urlLocale || !(await isValidLocale(urlLocale))) {
    const preferredLocale = await getPreferredLocale(request, cookies)
    setLocaleCookie(cookies, preferredLocale)
    const newPath = `/${preferredLocale}${pathname}`
    return context.redirect(newPath, 302)
  }
  
  // Set locale cookie
  setLocaleCookie(cookies, urlLocale)
  
  // Store locale in locals for use in components
  context.locals.locale = urlLocale
  
  return next()
})