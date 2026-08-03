import { IProductSynchronizationProvider } from "../contracts";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class ProductSynchronizationService implements IProductSynchronizationProvider {
  public async syncCatalog(): Promise<Result<{ syncedCount: number; timestamp: string }, AppError>> {
    return success({
      syncedCount: 24,
      timestamp: new Date().toISOString(),
    });
  }
}

export const productSynchronizationService = new ProductSynchronizationService();
