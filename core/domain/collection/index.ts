import { z } from 'zod';
import { Result } from '../types/Result';

export const CollectionSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  heroImage: z.string(),
  isCampaign: z.boolean().default(false),
  productSkus: z.array(z.string()), // Skus in this collection
});

export type Collection = z.infer<typeof CollectionSchema>;

export interface ICollectionRepository {
  findBySlug(slug: string): Promise<Result<Collection | null>>;
  findAll(): Promise<Result<Collection[]>>;
}
