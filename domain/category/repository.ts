import { Category } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ICategoryRepository {
  getAll(): Promise<Result<Category[], AppError>>;
  getBySlug(slug: string): Promise<Result<Category | null, AppError>>;
  getFeatured(limit?: number): Promise<Result<Category[], AppError>>;
  search(query: string): Promise<Result<Category[], AppError>>;
}
