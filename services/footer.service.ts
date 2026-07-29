import { FOOTER_CONFIG } from '@/core/config';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class FooterService {
  public async getFooterConfig(): Promise<Result<typeof FOOTER_CONFIG, AppError>> {
    return success(FOOTER_CONFIG);
  }
}

export const footerService = new FooterService();
