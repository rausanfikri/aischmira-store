import { LookbookCampaign } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ILookbookRepository {
  getActiveCampaign(): Promise<Result<LookbookCampaign | null, AppError>>;
  getBySlug(slug: string): Promise<Result<LookbookCampaign | null, AppError>>;
  getAllCampaigns(): Promise<Result<LookbookCampaign[], AppError>>;
}
