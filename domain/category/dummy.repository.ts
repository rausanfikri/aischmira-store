import { Category } from './entity';
import { ICategoryRepository } from './repository';
import { CategoryMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { categoriesData } from '@/data/categories';

export class DummyCategoryRepository implements ICategoryRepository {
  public async getAll(): Promise<Result<Category[], AppError>> {
    try {
      const entities = categoriesData.map((c) => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch categories from store', { cause: err }));
    }
  }

  public async getBySlug(slug: string): Promise<Result<Category | null, AppError>> {
    try {
      const s = slug.toLowerCase().trim();
      const found = categoriesData.find((c) => c.slug.toLowerCase() === s);
      if (!found) return success(null);
      return success(CategoryMapper.toEntity(found as unknown as Record<string, unknown>));
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch category by slug: ${slug}`, { cause: err }));
    }
  }

  public async getFeatured(limit = 6): Promise<Result<Category[], AppError>> {
    try {
      const featured = categoriesData
        .filter((c) => c.isFeatured)
        .slice(0, limit)
        .map((c) => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(featured);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch featured categories', { cause: err }));
    }
  }

  public async search(query: string): Promise<Result<Category[], AppError>> {
    try {
      const q = query.toLowerCase().trim();
      if (!q) return success([]);
      const results = categoriesData
        .filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
        .map((c) => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(results);
    } catch (err) {
      return failure(new RepositoryError(`Failed to search categories with query: ${query}`, { cause: err }));
    }
  }
}
