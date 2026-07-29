export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://aischmira.store',
} as const;
