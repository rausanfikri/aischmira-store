import { Product } from './entity';
import { IProductRepository } from './repository';
import { ProductMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { productsData } from '@/data/products';

export class DummyProductRepository implements IProductRepository {
  public async getAll(): Promise<Result<Product[], AppError>> {
    try {
      const entities = productsData.map(p => ProductMapper.toEntity(p as unknown as Record<string, unknown>));
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch all products from dummy store', { cause: err }));
    }
  }

  public async getBySku(sku: string): Promise<Result<Product | null, AppError>> {
    try {
      const found = productsData.find(p => p.sku === sku);
      if (!found) return success(null);
      return success(ProductMapper.toEntity(found as unknown as Record<string, unknown>));
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch product by SKU: ${sku}`, { cause: err }));
    }
  }

  public async getBySlug(slug: string): Promise<Result<Product | null, AppError>> {
    try {
      const found = productsData.find(p => p.slug === slug);
      if (!found) return success(null);
      return success(ProductMapper.toEntity(found as unknown as Record<string, unknown>));
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch product by slug: ${slug}`, { cause: err }));
    }
  }

  public async getFeatured(limit = 4): Promise<Result<Product[], AppError>> {
    try {
      const featured = productsData
        .filter(p => p.isFeatured)
        .slice(0, limit)
        .map(p => ProductMapper.toEntity(p as unknown as Record<string, unknown>));
      return success(featured);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch featured products', { cause: err }));
    }
  }

  public async getByCategory(categoryId: string): Promise<Result<Product[], AppError>> {
    try {
      const filtered = productsData
        .filter(p => p.categoryId === categoryId)
        .map(p => ProductMapper.toEntity(p as unknown as Record<string, unknown>));
      return success(filtered);
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch products by category: ${categoryId}`, { cause: err }));
    }
  }

  public async getByCollection(collectionId: string): Promise<Result<Product[], AppError>> {
    try {
      const filtered = productsData
        .filter(p => p.collectionId === collectionId)
        .map(p => ProductMapper.toEntity(p as unknown as Record<string, unknown>));
      return success(filtered);
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch products by collection: ${collectionId}`, { cause: err }));
    }
  }

  public async search(query: string): Promise<Result<Product[], AppError>> {
    try {
      const q = query.toLowerCase().trim();
      if (!q) return success([]);
      const results = productsData
        .filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.sku || '').toLowerCase().includes(q))
        .map(p => ProductMapper.toEntity(p as unknown as Record<string, unknown>));
      return success(results);
    } catch (err) {
      return failure(new RepositoryError(`Failed to search products with query: ${query}`, { cause: err }));
    }
  }
}
