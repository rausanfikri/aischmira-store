import { z } from "zod";

export const articleSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  date: z.string(),
  category: z.string(),
  image: z.string(),
  excerpt: z.string(),
  content: z.string().optional(),
  author: z.string().default("AISCHMIRA Editorial Board"),
  isFeatured: z.boolean().default(false),
});

export type ArticleInput = z.infer<typeof articleSchema>;
