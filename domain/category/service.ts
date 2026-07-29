import { Category } from './entity';
import { ICategoryRepository } from './repository';
import { DummyCategoryRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class CategoryService {
  constructor(private readonly repository: ICategoryRepository = new DummyCategoryRepository()) {}

  public async getCategories(): Promise<Result<Category[], AppError>> {
    logger.debug('CategoryService: Fetching all categories');
    return this.repository.getAll();
  }

  public async getCategoryBySlug(slug: string): Promise<Result<Category | null, AppError>> {
    logger.debug(`CategoryService: Fetching category slug=${slug}`);
    return this.repository.getBySlug(slug);
  }

  public async getFeaturedCategories(limit = 4): Promise<Result<Category[], AppError>> {
    logger.debug(`CategoryService: Fetching featured categories limit=${limit}`);
    return this.repository.getFeatured(limit);
  }

  public async searchCategories(query: string): Promise<Result<Category[], AppError>> {
    logger.debug(`CategoryService: Searching categories query=${query}`);
    return this.repository.search(query);
  }
}

export const categoryService = new CategoryService();
