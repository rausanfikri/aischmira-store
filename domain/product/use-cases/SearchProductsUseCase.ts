import { Product } from '../entity';
import { IProductRepository } from '../repository';
import { DummyProductRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class SearchProductsUseCase {
  constructor(private readonly repository: IProductRepository = new DummyProductRepository()) {}

  public async execute(query: string): Promise<Result<Product[], AppError>> {
    logger.info(`Executing SearchProductsUseCase query=${query}`);
    return this.repository.search(query);
  }
}
