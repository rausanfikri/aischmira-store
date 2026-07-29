import { z } from 'zod';

export const BrandConfigSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  companyName: z.string().min(1),
  logo: z.string().min(1),
  logoAlt: z.string().min(1),
  favicon: z.string().min(1),
  brandColors: z.object({
    primary: z.string(),
    secondary: z.string(),
    background: z.string(),
    text: z.string(),
  }),
  copyright: z.string().min(1),
  websiteUrl: z.string().url(),
  defaultLanguage: z.string().min(1),
});

export const ContactConfigSchema = z.object({
  whatsapp: z.string().min(1),
  whatsappLink: z.string().url(),
  email: z.string().email(),
  instagram: z.string().url(),
  tiktok: z.string().url(),
  shopee: z.string().url(),
  tokopedia: z.string().url(),
  address: z.string().min(1),
  businessHours: z.string().min(1),
  customerServiceMessage: z.string().min(1),
});

export const CompanyConfigSchema = z.object({
  legalName: z.string().min(1),
  registrationCountry: z.string().min(1),
  taxIdPlaceholder: z.string().min(1),
  aboutSummary: z.string().min(1),
});

export const AnnouncementConfigSchema = z.object({
  enabled: z.boolean(),
  message: z.string().min(1),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }).optional(),
  priority: z.number().int(),
  dismissible: z.boolean(),
});

export const SEOConfigSchema = z.object({
  defaultTitle: z.string().min(1),
  titleTemplate: z.string().min(1),
  defaultDescription: z.string().min(1),
  siteUrl: z.string().url(),
  openGraph: z.object({
    type: z.string(),
    locale: z.string(),
    siteName: z.string(),
  }),
  twitter: z.object({
    card: z.string(),
    site: z.string(),
  }),
});

export type BrandConfig = z.infer<typeof BrandConfigSchema>;
export type ContactConfig = z.infer<typeof ContactConfigSchema>;
export type CompanyConfig = z.infer<typeof CompanyConfigSchema>;
export type AnnouncementConfig = z.infer<typeof AnnouncementConfigSchema>;
export type SEOConfig = z.infer<typeof SEOConfigSchema>;
