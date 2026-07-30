import { BRAND_CONFIG, COMPANY_CONFIG, BRAND_STORY_CONFIG, BrandStoryConfig } from '@/core/config';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class BrandService {
  public async getBrandInfo(): Promise<Result<typeof BRAND_CONFIG, AppError>> {
    return success(BRAND_CONFIG);
  }

  public async getCompanyInfo(): Promise<Result<typeof COMPANY_CONFIG, AppError>> {
    return success(COMPANY_CONFIG);
  }

  public async getBrandStory(): Promise<Result<BrandStoryConfig, AppError>> {
    return success(BRAND_STORY_CONFIG);
  }
}

export const brandService = new BrandService();
