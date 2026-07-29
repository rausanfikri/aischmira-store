import { Config, BRAND_CONFIG, CONTACT_CONFIG, ANNOUNCEMENT_CONFIG, SEO_CONFIG, FEATURES } from '@/core/config';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class ConfigurationService {
  public async getFullConfig(): Promise<Result<typeof Config, AppError>> {
    return success(Config);
  }

  public async getBrandConfig(): Promise<Result<typeof BRAND_CONFIG, AppError>> {
    return success(BRAND_CONFIG);
  }

  public async getContactConfig(): Promise<Result<typeof CONTACT_CONFIG, AppError>> {
    return success(CONTACT_CONFIG);
  }

  public async getAnnouncementConfig(): Promise<Result<typeof ANNOUNCEMENT_CONFIG, AppError>> {
    return success(ANNOUNCEMENT_CONFIG);
  }

  public async getSEOConfig(): Promise<Result<typeof SEO_CONFIG, AppError>> {
    return success(SEO_CONFIG);
  }

  public async getFeatureFlags(): Promise<Result<typeof FEATURES, AppError>> {
    return success(FEATURES);
  }
}

export const configurationService = new ConfigurationService();
