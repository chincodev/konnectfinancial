export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      disallow: '/privacy-policy',
      disallow: '/terms-conditions/'
    },
    sitemap: `https://www.konnectfinancial.com/sitemap.xml`,
  }
}