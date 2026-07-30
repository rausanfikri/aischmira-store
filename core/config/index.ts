import { BRAND_CONFIG } from './brand';
import { BRAND_STORY_CONFIG } from './brandStory';
import { CONTACT_CONFIG } from './contact';
import { COMPANY_CONFIG } from './company';
import { NAVIGATION_CONFIG } from './navigation';
import { FOOTER_CONFIG } from './footer';
import { ANNOUNCEMENT_CONFIG } from './announcement';
import { SOCIAL_CONFIG } from './social';
import { SEO_CONFIG } from './seo';
import { ANALYTICS_CONFIG } from './analytics';
import { FEATURES } from './features';
import { IMAGE_CONFIG } from './images';
import { THEME_CONFIG } from './theme';

export const Config = {
  brand: BRAND_CONFIG,
  brandStory: BRAND_STORY_CONFIG,
  contact: CONTACT_CONFIG,
  company: COMPANY_CONFIG,
  navigation: NAVIGATION_CONFIG,
  footer: FOOTER_CONFIG,
  announcement: ANNOUNCEMENT_CONFIG,
  social: SOCIAL_CONFIG,
  seo: SEO_CONFIG,
  analytics: ANALYTICS_CONFIG,
  features: FEATURES,
  images: IMAGE_CONFIG,
  theme: THEME_CONFIG,
} as const;

export * from './schema';
export * from './brand';
export * from './brandStory';
export * from './contact';
export * from './company';
export * from './navigation';
export * from './footer';
export * from './announcement';
export * from './social';
export * from './seo';
export * from './metadata';
export * from './analytics';
export * from './features';
export * from './images';
export * from './theme';
