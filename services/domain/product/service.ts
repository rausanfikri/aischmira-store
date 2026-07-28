import { Product } from "./types";
import { dummyProducts } from "./dummy";

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    return dummyProducts.filter((p) => p.isActive);
  }

  static async getProductBySlug(slug: string): Promise<Product | null> {
    const product = dummyProducts.find((p) => p.slug === slug);
    return product || null;
  }

  static async getProductById(id: string): Promise<Product | null> {
    const product = dummyProducts.find((p) => p.id === id);
    return product || null;
  }

  static async getFeaturedProducts(limit = 4): Promise<Product[]> {
    return dummyProducts.filter((p) => p.isFeatured && p.isActive).slice(0, limit);
  }

  static async getProductsByCollection(collectionId: string): Promise<Product[]> {
    return dummyProducts.filter((p) => p.collectionId === collectionId && p.isActive);
  }

  static async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return dummyProducts.filter((p) => p.categoryId === categoryId && p.isActive);
  }
}
