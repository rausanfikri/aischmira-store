import { Product } from "@/domain/product";
import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface IProductProvider {
  getProducts(): Promise<Result<Product[], AppError>>;
  getProductBySlug(slug: string): Promise<Result<Product | null, AppError>>;
  getProductsByCategory(categorySlug: string): Promise<Result<Product[], AppError>>;
}
