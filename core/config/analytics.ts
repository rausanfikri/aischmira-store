export const ANALYTICS_CONFIG = {
  enabled: process.env.NODE_ENV === 'production',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
} as const;
