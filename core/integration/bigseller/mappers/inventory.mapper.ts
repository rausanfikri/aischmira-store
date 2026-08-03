import { InventoryDTO, PriceDTO } from "../dto";
import { StockLevel, PriceQuote } from "@/core/integration/contracts/inventory.provider";

export class BigSellerInventoryMapper {
  public static toStockLevel(dto: InventoryDTO): StockLevel {
    return {
      sku: dto.sku,
      variantId: dto.variantSku,
      availableStock: dto.availableStock,
      reservedStock: dto.reservedStock,
      inStock: dto.availableStock > 0,
    };
  }

  public static toPriceQuote(dto: PriceDTO): PriceQuote {
    return {
      sku: dto.sku,
      variantId: dto.variantSku,
      currency: dto.currency || "IDR",
      basePrice: dto.retailPrice,
      salePrice: dto.discountPrice || dto.flashSalePrice,
    };
  }
}
