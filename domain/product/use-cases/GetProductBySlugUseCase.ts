import { Product } from '../entity';
import { IProductRepository } from '../repository';
import { DummyProductRepository } from '../dummy.repository';
import { Result, failure } from '@/shared/types/Result';
import { AppError, NotFoundError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetProductBySlugUseCase {
  constructor(private readonly repository: IProductRepository = new DummyProductRepository()) {}

  public async execute(slug: string): Promise<Result<Product | null, AppError>> {
    logger.info(`Executing GetProductBySlugUseCase slug=${slug}`);
    if (!slug) {
      return failure(new NotFoundError('Product slug must not be empty'));
    }
    return this.repository.getBySlug(slug);
  }
}
