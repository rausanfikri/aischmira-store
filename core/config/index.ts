import { BRAND_CONFIG } from './brand';
import { CONTACT_CONFIG } from './contact';
import { NAVIGATION_CONFIG } from './navigation';
import { SOCIAL_CONFIG } from './social';
import { SEO_CONFIG } from './seo';
import { ANALYTICS_CONFIG } from './analytics';
import { FEATURES } from './features';

export const Config = {
  brand: BRAND_CONFIG,
  contact: CONTACT_CONFIG,
  navigation: NAVIGATION_CONFIG,
  social: SOCIAL_CONFIG,
  seo: SEO_CONFIG,
  analytics: ANALYTICS_CONFIG,
  features: FEATURES,
} as const;

export * from './brand';
export * from './contact';
export * from './navigation';
export * from './social';
export * from './seo';
export * from './analytics';
export * from './features';
