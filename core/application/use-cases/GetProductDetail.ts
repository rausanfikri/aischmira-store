import { IProductRepository, Product } from '../../domain/product';
import { Result, success } from '../../domain/types/Result';
import { container } from '../../infrastructure/di/container';
import { logger } from '../../infrastructure/logger';

export class GetProductDetailUseCase {
  constructor(private productRepo: IProductRepository = container.products) {}

  async execute(slug: string): Promise<Result<Product | null>> {
    logger.info(`Executing GetProductDetailUseCase for slug: ${slug}`);
    
    const result = await this.productRepo.findBySlug(slug);
    
    if (result.isFailure) {
      logger.error('Failed to get product detail', result.error);
      return result;
    }

    if (!result.value) {
      logger.warn(`Product not found for slug: ${slug}`);
      return success(null);
    }

    // Additional orchestration logic can go here (e.g., track analytics, format prices)
    return success(result.value);
  }
}
