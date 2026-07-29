import { Category } from './entity';
import { ICategoryRepository } from './repository';
import { CategoryMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';

const DUMMY_CATEGORIES_DATA = [
  { id: 'cat_dress', slug: 'dress', name: 'Dress', description: 'Floor-length gowns and elegant silk dresses.', isFeatured: true, sortOrder: 1 },
  { id: 'cat_outerwear', slug: 'outerwear', name: 'Outerwear', description: 'Tailored blazers and luxury outerwear.', isFeatured: true, sortOrder: 2 },
  { id: 'cat_trousers', slug: 'trousers', name: 'Trousers', description: 'Fluid wide-leg trousers and tailored pants.', isFeatured: true, sortOrder: 3 },
  { id: 'cat_scarf', slug: 'scarf', name: 'Scarf', description: 'Hand-crafted mulberry silk scarves.', isFeatured: false, sortOrder: 4 },
];

export class DummyCategoryRepository implements ICategoryRepository {
  public async getAll(): Promise<Result<Category[], AppError>> {
    try {
      const entities = DUMMY_CATEGORIES_DATA.map(c => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch categories from dummy store', { cause: err }));
    }
  }

  public async getBySlug(slug: string): Promise<Result<Category | null, AppError>> {
    try {
      const found = DUMMY_CATEGORIES_DATA.find(c => c.slug === slug);
      if (!found) return success(null);
      return success(CategoryMapper.toEntity(found as unknown as Record<string, unknown>));
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch category by slug: ${slug}`, { cause: err }));
    }
  }

  public async getFeatured(limit = 4): Promise<Result<Category[], AppError>> {
    try {
      const featured = DUMMY_CATEGORIES_DATA
        .filter(c => c.isFeatured)
        .slice(0, limit)
        .map(c => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(featured);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch featured categories', { cause: err }));
    }
  }

  public async search(query: string): Promise<Result<Category[], AppError>> {
    try {
      const q = query.toLowerCase().trim();
      if (!q) return success([]);
      const results = DUMMY_CATEGORIES_DATA
        .filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
        .map(c => CategoryMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(results);
    } catch (err) {
      return failure(new RepositoryError(`Failed to search categories with query: ${query}`, { cause: err }));
    }
  }
}
