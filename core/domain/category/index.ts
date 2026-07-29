import { z } from 'zod';
import { Result } from '../types/Result';

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string().optional(),
  parentId: z.string().optional(),
});

export type Category = z.infer<typeof CategorySchema>;

export interface ICategoryRepository {
  findAll(): Promise<Result<Category[]>>;
  findBySlug(slug: string): Promise<Result<Category | null>>;
}
