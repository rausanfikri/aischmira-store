import { Product } from '../entity';
import { IProductRepository } from '../repository';
import { DummyProductRepository } from '../dummy.repository';
import { Result, failure } from '@/shared/types/Result';
import { AppError, NotFoundError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetProductBySkuUseCase {
  constructor(private readonly repository: IProductRepository = new DummyProductRepository()) {}

  public async execute(sku: string): Promise<Result<Product | null, AppError>> {
    logger.info(`Executing GetProductBySkuUseCase sku=${sku}`);
    if (!sku) {
      return failure(new NotFoundError('Product SKU must not be empty'));
    }
    return this.repository.getBySku(sku);
  }
}
