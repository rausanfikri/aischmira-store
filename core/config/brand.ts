import { BrandConfig, BrandConfigSchema } from './schema';

const brandConfigData: BrandConfig = {
  name: 'AISCHMIRA',
  tagline: 'Timeless Luxury Fashion',
  description: 'AISCHMIRA is an editorial luxury fashion flagship digital experience from Indonesia.',
  companyName: 'PT AISCHMIRA FLAGSHIP STORE',
  logo: '/logo/aischmira.svg',
  logoAlt: 'AISCHMIRA Flagship Brand Mark',
  favicon: '/favicon.ico',
  brandColors: {
    primary: '#D9AE20',
    secondary: '#D5A12A',
    background: '#FAF8F3',
    text: '#2B2B2B',
  },
  copyright: '© 2026 AISCHMIRA. All rights reserved.',
  websiteUrl: 'https://aischmira.store',
  defaultLanguage: 'id-ID',
};

export const BRAND_CONFIG: BrandConfig = BrandConfigSchema.parse(brandConfigData);
