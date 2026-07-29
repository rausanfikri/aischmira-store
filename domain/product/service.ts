import { Product } from './entity';
import { IProductRepository } from './repository';
import { DummyProductRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class ProductService {
  constructor(private readonly repository: IProductRepository = new DummyProductRepository()) {}

  public async getProducts(): Promise<Result<Product[], AppError>> {
    logger.debug('ProductService: Fetching all active products');
    return this.repository.getAll();
  }

  public async getFeaturedProducts(limit = 4): Promise<Result<Product[], AppError>> {
    logger.debug(`ProductService: Fetching featured products limit=${limit}`);
    return this.repository.getFeatured(limit);
  }

  public async getProductBySku(sku: string): Promise<Result<Product | null, AppError>> {
    logger.debug(`ProductService: Fetching product by SKU=${sku}`);
    return this.repository.getBySku(sku);
  }

  public async getProductBySlug(slug: string): Promise<Result<Product | null, AppError>> {
    logger.debug(`ProductService: Fetching product by slug=${slug}`);
    return this.repository.getBySlug(slug);
  }

  public async searchProducts(query: string): Promise<Result<Product[], AppError>> {
    logger.debug(`ProductService: Searching products query=${query}`);
    return this.repository.search(query);
  }
}

export const productService = new ProductService();
