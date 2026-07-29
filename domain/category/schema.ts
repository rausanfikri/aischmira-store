import { z } from 'zod';

export const CategorySEOSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

export const CategorySchema = z.object({
  id: z.string().min(1, 'Category ID is required'),
  slug: z.string().min(1, 'Category slug is required'),
  name: z.string().min(1, 'Category name is required'),
  description: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().int().default(0),
  featured: z.boolean().default(false),
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).default('ACTIVE'),
  seo: CategorySEOSchema.optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
