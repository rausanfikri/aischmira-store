import { PriceDTO } from "../dto";
import { BigSellerInventoryMapper } from "../mappers/inventory.mapper";
import { PriceQuote } from "@/core/integration/contracts/inventory.provider";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class BigSellerPricingService {
  private readonly mockPrices: PriceDTO[] = [
    {
      sku: "BIANCA-SILK-DRESS",
      variantSku: "BIANCA-SILK-DRESS-M",
      currency: "IDR",
      retailPrice: 4800000,
      marketplacePrice: 4800000,
      membershipPrice: 4560000,
    },
  ];

  public async getPriceQuote(sku: string): Promise<Result<PriceQuote, AppError>> {
    const item = this.mockPrices.find((p) => p.sku === sku);
    if (!item) {
      return success({
        sku,
        variantId: sku,
        currency: "IDR",
        basePrice: 4800000,
      });
    }
    return success(BigSellerInventoryMapper.toPriceQuote(item));
  }
}

export const bigSellerPricingService = new BigSellerPricingService();
