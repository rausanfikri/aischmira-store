/**
 * Builds canonical URL given path string
 */
export function buildCanonicalUrl(path = '', baseUrl = 'https://aischmira.store'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Formats meta title according to brand standard
 */
export function buildMetaTitle(title?: string, brand = 'AISCHMIRA'): string {
  if (!title) return `${brand} — Editorial Luxury Fashion`;
  return `${title} | ${brand}`;
}
