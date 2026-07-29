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
