import { FEATURES } from './features';

export const Config = {
  features: FEATURES,
  brand: {
    name: 'AISCHMIRA',
    tagline: 'Timeless Luxury',
  },
  contact: {
    whatsapp: '6285121344848',
    whatsappMessagePrefix: 'Hello AISCHMIRA Concierge, I would like to order:',
    email: 'concierge@aischmira.store',
  },
  seo: {
    defaultTitle: 'AISCHMIRA - Luxury Fashion',
    defaultDescription: 'Discover the latest editorial collections from AISCHMIRA.',
  },
  social: {
    instagram: 'https://instagram.com/aischmira',
  }
} as const;
