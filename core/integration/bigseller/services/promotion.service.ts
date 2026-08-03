import { PromotionDTO } from "../dto";
import { IPromotionProvider } from "../contracts";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class BigSellerPromotionService implements IPromotionProvider {
  private readonly promotions: PromotionDTO[] = [
    {
      promotionId: "promo_prive_gold",
      code: "PRIVEGOLD10",
      type: "Voucher",
      discountPercentage: 10,
      applicableSkus: ["BIANCA-SILK-DRESS", "PRISCILA-BLAZER"],
      validFrom: "2026-01-01T00:00:00Z",
      validTo: "2026-12-31T23:59:59Z",
    },
  ];

  public async getPromotions(): Promise<Result<PromotionDTO[], AppError>> {
    return success(this.promotions);
  }

  public async applyVoucher(code: string): Promise<Result<PromotionDTO | null, AppError>> {
    const promo = this.promotions.find((p) => p.code === code);
    return success(promo || null);
  }
}

export const bigSellerPromotionService = new BigSellerPromotionService();
