import { Category } from '../entity';
import { ICategoryRepository } from '../repository';
import { DummyCategoryRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetCategoriesUseCase {
  constructor(private readonly repository: ICategoryRepository = new DummyCategoryRepository()) {}

  public async execute(): Promise<Result<Category[], AppError>> {
    logger.info('Executing GetCategoriesUseCase');
    return this.repository.getAll();
  }
}
