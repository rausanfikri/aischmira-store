import { z } from 'zod';

export const LookbookImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().optional(),
  aspectRatio: z.enum(['portrait', 'landscape', 'square', 'hero']).optional(),
});

export const LookbookCTASchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const LookbookBlockSchema = z.object({
  id: z.string().min(1),
  type: z.enum([
    'FULL_WIDTH_IMAGE',
    'SPLIT_LAYOUT',
    'IMAGE_GALLERY',
    'QUOTE_BLOCK',
    'EDITORIAL_TEXT',
    'CAMPAIGN_BANNER',
    'IMAGE_PAIR',
  ]),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  headline: z.string().optional(),
  quote: z.string().optional(),
  author: z.string().optional(),
  paragraphs: z.array(z.string()).optional(),
  images: z.array(LookbookImageSchema).optional(),
  cta: LookbookCTASchema.optional(),
  layoutOrder: z.enum(['image-left', 'image-right', 'centered']).optional(),
});

export const LookbookCampaignSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  season: z.string().min(1),
  year: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  coverImage: z.string().min(1),
  isFeatured: z.boolean().default(true),
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).default('ACTIVE'),
  blocks: z.array(LookbookBlockSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type LookbookImageDTO = z.infer<typeof LookbookImageSchema>;
export type LookbookCTADTO = z.infer<typeof LookbookCTASchema>;
export type LookbookBlockDTO = z.infer<typeof LookbookBlockSchema>;
export type LookbookCampaignDTO = z.infer<typeof LookbookCampaignSchema>;
