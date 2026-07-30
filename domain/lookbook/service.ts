import { LookbookCampaign } from './entity';
import { ILookbookRepository } from './repository';
import { DummyLookbookRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class LookbookService {
  constructor(private readonly repository: ILookbookRepository = new DummyLookbookRepository()) {}

  public async getActiveCampaign(): Promise<Result<LookbookCampaign | null, AppError>> {
    logger.debug('LookbookService: Fetching active lookbook campaign');
    return this.repository.getActiveCampaign();
  }

  public async getCampaignBySlug(slug: string): Promise<Result<LookbookCampaign | null, AppError>> {
    logger.debug(`LookbookService: Fetching campaign slug=${slug}`);
    return this.repository.getBySlug(slug);
  }

  public async getAllCampaigns(): Promise<Result<LookbookCampaign[], AppError>> {
    logger.debug('LookbookService: Fetching all lookbook campaigns');
    return this.repository.getAllCampaigns();
  }
}

export const lookbookService = new LookbookService();
