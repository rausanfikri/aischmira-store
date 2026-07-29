import { Category } from '../entity';
import { ICategoryRepository } from '../repository';
import { DummyCategoryRepository } from '../dummy.repository';
import { Result, failure } from '@/shared/types/Result';
import { AppError, NotFoundError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetCategoryBySlugUseCase {
  constructor(private readonly repository: ICategoryRepository = new DummyCategoryRepository()) {}

  public async execute(slug: string): Promise<Result<Category | null, AppError>> {
    logger.info(`Executing GetCategoryBySlugUseCase slug=${slug}`);
    if (!slug) {
      return failure(new NotFoundError('Category slug must not be empty'));
    }
    return this.repository.getBySlug(slug);
  }
}
