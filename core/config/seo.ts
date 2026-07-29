import { SEOConfig, SEOConfigSchema } from './schema';

const seoConfigData: SEOConfig = {
  defaultTitle: 'AISCHMIRA — Editorial Luxury Fashion Flagship',
  titleTemplate: '%s | AISCHMIRA',
  defaultDescription: 'Discover timeless luxury and editorial fashion collections from AISCHMIRA.',
  siteUrl: 'https://aischmira.store',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AISCHMIRA',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aischmira',
  },
};

export const SEO_CONFIG: SEOConfig = SEOConfigSchema.parse(seoConfigData);
