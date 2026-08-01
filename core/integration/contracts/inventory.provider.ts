import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface StockLevel {
  sku: string;
  variantId: string;
  availableStock: number;
  reservedStock: number;
  inStock: boolean;
}

export interface PriceQuote {
  sku: string;
  variantId: string;
  currency: string;
  basePrice: number;
  salePrice?: number;
}

export interface IInventoryProvider {
  getStockLevel(sku: string, variantId?: string): Promise<Result<StockLevel, AppError>>;
  batchGetStockLevels(skus: string[]): Promise<Result<StockLevel[], AppError>>;
}

export interface IPriceProvider {
  getPriceQuote(sku: string, variantId?: string): Promise<Result<PriceQuote, AppError>>;
}
