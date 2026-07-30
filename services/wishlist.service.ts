import { ProductService, productService } from './product.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { Product } from '@/domain/product';

export interface WishlistSummary {
  totalItems: number;
  totalEstimatedValue: number;
  categoryCounts: Record<string, number>;
}

export class WishlistService {
  constructor(private readonly productSvc: ProductService = productService) {}

  public async getWishlistProducts(productIdsOrSkus: string[]): Promise<Result<Product[], AppError>> {
    const productsRes = await this.productSvc.getProducts();
    if (!productsRes.isSuccess) return productsRes;

    const allProducts = productsRes.value;
    const wishlisted = allProducts.filter((p) =>
      productIdsOrSkus.includes(p.sku) ||
      productIdsOrSkus.includes((p as unknown as { id?: string }).id || '')
    );

    return success(wishlisted);
  }

  public getWishlistSummary(products: Product[]): WishlistSummary {
    const totalItems = products.length;
    const totalEstimatedValue = products.reduce((acc, p) => acc + (p.price || 0), 0);
    const categoryCounts: Record<string, number> = {};

    products.forEach((p) => {
      const cat = p.categoryId || 'Other';
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    return {
      totalItems,
      totalEstimatedValue,
      categoryCounts,
    };
  }

  public async getWishlistRecommendations(wishlistProducts: Product[], limit = 4): Promise<Result<Product[], AppError>> {
    const productsRes = await this.productSvc.getProducts();
    if (!productsRes.isSuccess) return productsRes;

    const allProducts = productsRes.value;
    const wishlistSkus = new Set(wishlistProducts.map((p) => p.sku));

    // Recommend products not in current wishlist
    const recommendations = allProducts
      .filter((p) => !wishlistSkus.has(p.sku))
      .slice(0, limit);

    return success(recommendations);
  }
}

export const wishlistService = new WishlistService();
