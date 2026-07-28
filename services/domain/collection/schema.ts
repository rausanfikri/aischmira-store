import { z } from "zod";

export const collectionSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  coverImage: z.string(),
  category: z.string().optional(),
  story: z.string().optional(),
  designerNotes: z.string().optional(),
  materials: z.array(z.string()).optional(),
  isFeatured: z.boolean().default(false),
  publishedAt: z.string().optional(),
  createdAt: z.string().default("2026-01-01T00:00:00Z"),
  updatedAt: z.string().default("2026-07-28T00:00:00Z"),
});

export type CollectionInput = z.infer<typeof collectionSchema>;
