import type { Locale } from '../i18n'

export interface SeoData {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
  canonicalUrl?: string
}

export interface RedirectRule {
  source: string
  destination: string
  statusCode: 301 | 302 | 307 | 308
}

export function generateMetaTags(seo: SeoData, locale: Locale, url: URL) {
  const defaultTitle = locale === 'it' ? 'Acacia Firenze - Alloggi di Charme' : 'Acacia Firenze - Charming Accommodations'
  const title = seo.title ? `${seo.title} | ${defaultTitle}` : defaultTitle
  
  const tags = [
    { name: 'title', content: title },
    { property: 'og:title', content: title },
    { property: 'og:locale', content: locale === 'it' ? 'it_IT' : 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url.href },
  ]

  if (seo.description) {
    tags.push(
      { name: 'description', content: seo.description },
      { property: 'og:description', content: seo.description }
    )
  }

  if (seo.image) {
    tags.push(
      { property: 'og:image', content: seo.image },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image', content: seo.image }
    )
  }

  if (seo.noindex) {
    tags.push({ name: 'robots', content: 'noindex, nofollow' })
  }

  return tags
}

export function generateAlternateLinks(pathname: string, locales: string[]) {
  return locales.map(locale => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments[0] && locales.includes(segments[0])) {
      segments[0] = locale
    } else {
      segments.unshift(locale)
    }
    return {
      rel: 'alternate',
      hreflang: locale,
      href: `/${segments.join('/')}`,
    }
  })
}

export function generateRobotsTxt(sitemapUrl: string): string {
  return `User-agent: *
Allow: /

# AI/ML Bots
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: CCBot
User-agent: anthropic-ai
User-agent: Claude-Web
Disallow: /

Sitemap: ${sitemapUrl}`
}