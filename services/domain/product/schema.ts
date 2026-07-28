import { z } from "zod";

export const variantSchema = z.object({
  id: z.string(),
  sku: z.string(),
  color: z.string(),
  size: z.string(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  images: z.array(z.string()),
});

export const productSchema = z.object({
  id: z.string(),
  sku: z.string(),
  parentSku: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  categoryId: z.string(),
  collectionId: z.string().optional(),
  basePrice: z.number().nonnegative(),
  compareAtPrice: z.number().nonnegative().optional(),
  currency: z.string().default("IDR"),
  description: z.string(),
  story: z.string().optional(),
  material: z.string().optional(),
  careInstruction: z.string().optional(),
  shippingInfo: z.string().optional(),
  variants: z.array(variantSchema),
  images: z.array(z.string()),
  relatedProductIds: z.array(z.string()).optional(),
  status: z.enum(["active", "draft", "archived"]).default("active"),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type ProductInput = z.infer<typeof productSchema>;
