import { Collection } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ICollectionRepository {
  getAll(): Promise<Result<Collection[], AppError>>;
  getBySlug(slug: string): Promise<Result<Collection | null, AppError>>;
  getFeatured(limit?: number): Promise<Result<Collection[], AppError>>;
  search(query: string): Promise<Result<Collection[], AppError>>;
}
