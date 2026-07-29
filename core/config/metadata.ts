import { SEO_CONFIG } from './seo';

export function createMetadata(title?: string, description?: string, path = '') {
  const fullTitle = title ? SEO_CONFIG.titleTemplate.replace('%s', title) : SEO_CONFIG.defaultTitle;
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.openGraph.siteName,
      locale: SEO_CONFIG.openGraph.locale,
      type: SEO_CONFIG.openGraph.type,
    },
    twitter: {
      card: SEO_CONFIG.twitter.card,
      title: fullTitle,
      description: fullDescription,
    },
  };
}
