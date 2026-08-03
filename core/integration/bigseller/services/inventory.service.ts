import { InventoryDTO } from "../dto";
import { BigSellerInventoryMapper } from "../mappers/inventory.mapper";
import { StockLevel } from "@/core/integration/contracts/inventory.provider";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class BigSellerInventoryService {
  private readonly mockStock: InventoryDTO[] = [
    {
      sku: "BIANCA-SILK-DRESS",
      variantSku: "BIANCA-SILK-DRESS-M",
      warehouseId: "wh_jk_01",
      availableStock: 12,
      reservedStock: 2,
      incomingStock: 25,
      safetyStock: 3,
      updatedAt: new Date().toISOString(),
    },
    {
      sku: "PRISCILA-BLAZER",
      variantSku: "PRISCILA-BLAZER-M",
      warehouseId: "wh_jk_01",
      availableStock: 8,
      reservedStock: 1,
      incomingStock: 15,
      safetyStock: 2,
      updatedAt: new Date().toISOString(),
    },
  ];

  public async getStockLevel(sku: string): Promise<Result<StockLevel, AppError>> {
    const item = this.mockStock.find((s) => s.sku === sku);
    if (!item) {
      return success({
        sku,
        variantId: sku,
        availableStock: 10,
        reservedStock: 0,
        inStock: true,
      });
    }
    return success(BigSellerInventoryMapper.toStockLevel(item));
  }
}

export const bigSellerInventoryService = new BigSellerInventoryService();
