import { BRAND_CONFIG, COMPANY_CONFIG } from '@/core/config';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class BrandService {
  public async getBrandInfo(): Promise<Result<typeof BRAND_CONFIG, AppError>> {
    return success(BRAND_CONFIG);
  }

  public async getCompanyInfo(): Promise<Result<typeof COMPANY_CONFIG, AppError>> {
    return success(COMPANY_CONFIG);
  }
}

export const brandService = new BrandService();
