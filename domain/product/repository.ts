import { Product } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface IProductRepository {
  getAll(): Promise<Result<Product[], AppError>>;
  getBySku(sku: string): Promise<Result<Product | null, AppError>>;
  getBySlug(slug: string): Promise<Result<Product | null, AppError>>;
  getFeatured(limit?: number): Promise<Result<Product[], AppError>>;
  getByCategory(categoryId: string): Promise<Result<Product[], AppError>>;
  getByCollection(collectionId: string): Promise<Result<Product[], AppError>>;
  search(query: string): Promise<Result<Product[], AppError>>;
}
