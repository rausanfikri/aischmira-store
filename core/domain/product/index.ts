import { z } from 'zod';
import { Result } from '../types/Result';

export const ProductSchema = z.object({
  sku: z.string(),
  parentSku: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  currency: z.string().default('IDR'),
  images: z.array(z.string()),
  categoryIds: z.array(z.string()).default([]),
  availableStock: z.number().int().min(0),
  reservedStock: z.number().int().min(0),
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).default('ACTIVE'),
  attributes: z.record(z.string(), z.string()).optional(), // e.g., { color: 'Black', size: 'M' }
});

export type Product = z.infer<typeof ProductSchema>;

export interface IProductRepository {
  findBySlug(slug: string): Promise<Result<Product | null>>;
  findBySku(sku: string): Promise<Result<Product | null>>;
  findAllActive(): Promise<Result<Product[]>>;
  findByCategory(categoryId: string): Promise<Result<Product[]>>;
}
