import { Product } from '../entity';
import { IProductRepository } from '../repository';
import { DummyProductRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetFeaturedProductsUseCase {
  constructor(private readonly repository: IProductRepository = new DummyProductRepository()) {}

  public async execute(limit = 4): Promise<Result<Product[], AppError>> {
    logger.info(`Executing GetFeaturedProductsUseCase limit=${limit}`);
    return this.repository.getFeatured(limit);
  }
}
