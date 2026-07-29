import { z } from 'zod';
import { Result } from '../types/Result';

export const HomepageBlockSchema = z.object({
  type: z.enum(['HERO', 'FEATURED_COLLECTION', 'EDITORIAL', 'PRODUCT_GRID']),
  content: z.record(z.string(), z.any()),
});

export const HomepageConfigSchema = z.object({
  title: z.string(),
  blocks: z.array(HomepageBlockSchema),
});

export type HomepageConfig = z.infer<typeof HomepageConfigSchema>;

export interface IHomepageRepository {
  getHomepageConfig(): Promise<Result<HomepageConfig>>;
}
