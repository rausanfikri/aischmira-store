import { IProductRepository, Product } from '../../../domain/product';
import { Result, success, failure } from '../../../domain/types/Result';
import { RepositoryError } from '../../../domain/errors';
import { productsData } from '../../../../data/products';

export class DummyProductRepository implements IProductRepository {
  async findBySlug(slug: string): Promise<Result<Product | null>> {
    try {
      const product = productsData.find(p => p.slug === slug);
      if (!product) return success(null);
      return success(this.mapToDomain(product));
    } catch (error) {
      return failure(new RepositoryError('Failed to find product by slug', { error }));
    }
  }

  async findBySku(sku: string): Promise<Result<Product | null>> {
    try {
      const product = productsData.find(p => p.sku === sku);
      if (!product) return success(null);
      return success(this.mapToDomain(product));
    } catch (error) {
      return failure(new RepositoryError('Failed to find product by sku', { error }));
    }
  }

  async findAllActive(): Promise<Result<Product[]>> {
    try {
      const products = productsData.map(p => this.mapToDomain(p));
      return success(products);
    } catch (error) {
      return failure(new RepositoryError('Failed to find active products', { error }));
    }
  }

  async findByCategory(categoryId: string): Promise<Result<Product[]>> {
    try {
      const products = productsData.filter(p => p.categoryId === categoryId).map(p => this.mapToDomain(p));
      return success(products);
    } catch (error) {
      return failure(new RepositoryError('Failed to find products by category', { error }));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapToDomain(raw: any): Product {
    // Map existing dummy data to the new Domain Product schema
    return {
      sku: raw.sku,
      name: raw.name,
      slug: raw.slug,
      description: raw.description,
      price: raw.basePrice,
      currency: 'IDR',
      images: raw.images || [],
      categoryIds: [raw.categoryId],
      availableStock: raw.variants?.[0]?.stock || 10,
      reservedStock: 0,
      status: 'ACTIVE',
    };
  }
}
