import { z } from 'zod';

export const ProductVariantSchema = z.object({
  id: z.string().min(1),
  sku: z.string().min(1),
  color: z.string().min(1),
  size: z.string().min(1),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  images: z.array(z.string().url()).default([]),
});

export const ProductInventorySchema = z.object({
  availableStock: z.number().int().nonnegative(),
  reservedStock: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

export const ProductSEOSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

export const ProductSchema = z.object({
  sku: z.string().min(1, 'SKU is required'),
  parentSku: z.string().optional(),
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Product name is required'),
  description: z.string(),
  collectionId: z.string().optional(),
  categoryId: z.string().min(1, 'Category ID is required'),
  variants: z.array(ProductVariantSchema).default([]),
  images: z.array(z.string()).default([]),
  price: z.number().nonnegative(),
  compareAtPrice: z.number().nonnegative().optional(),
  currency: z.string().default('IDR'),
  inventory: ProductInventorySchema,
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).default('ACTIVE'),
  tags: z.array(z.string()).default([]),
  seo: ProductSEOSchema.optional(),
  story: z.string().optional(),
  material: z.string().optional(),
  careInstruction: z.string().optional(),
  shippingInfo: z.string().optional(),
  isFeatured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});
