import { z } from "zod";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  image: z.string().optional(),
  itemCount: z.number().int().nonnegative().optional(),
});

export type CategoryInput = z.infer<typeof categorySchema>;
