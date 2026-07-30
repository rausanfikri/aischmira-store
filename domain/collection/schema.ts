import { z } from 'zod';

export const CollectionSEOSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

export const CollectionSchema = z.object({
  id: z.string().min(1, 'Collection ID is required'),
  slug: z.string().min(1, 'Collection slug is required'),
  name: z.string().min(1, 'Collection name is required'),
  title: z.string().min(1, 'Collection title is required'),
  subtitle: z.string().optional(),
  description: z.string(),
  category: z.string().optional(),
  season: z.string().optional(),
  campaignId: z.string().optional(),
  campaignBadge: z.string().optional(),
  videoUrl: z.string().optional(),
  cmsId: z.string().optional(),
  locale: z.string().optional(),
  productSkuList: z.array(z.string()).optional(),
  categoryMapping: z.record(z.string(), z.string()).optional(),
  bigSellerCollectionId: z.string().optional(),
  inventoryAggregation: z
    .object({
      totalUnits: z.number(),
      inStockCount: z.number(),
    })
    .optional(),
  ctaLabel: z.string().optional(),
  productCount: z.number().optional(),
  heroImage: z.string().optional(),
  coverImage: z.string(),
  thumbnail: z.string().optional(),
  sortOrder: z.number().int().default(0),
  featured: z.boolean().default(false),
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).default('ACTIVE'),
  seo: CollectionSEOSchema.optional(),
  story: z.string().optional(),
  designerNotes: z.string().optional(),
  materials: z.array(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
