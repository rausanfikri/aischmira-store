import { LookbookCampaign } from './entity';
import { ILookbookRepository } from './repository';
import { LookbookMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { lookbookData } from '@/data/lookbook';

export class DummyLookbookRepository implements ILookbookRepository {
  public async getActiveCampaign(): Promise<Result<LookbookCampaign | null, AppError>> {
    try {
      const active = lookbookData.find((c) => c.status === 'ACTIVE' && c.isFeatured);
      if (!active) return success(null);
      const entity = LookbookMapper.toEntity(active as unknown as Record<string, unknown>);
      return success(entity);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch active lookbook campaign', { cause: err }));
    }
  }

  public async getBySlug(slug: string): Promise<Result<LookbookCampaign | null, AppError>> {
    try {
      const found = lookbookData.find((c) => c.slug === slug);
      if (!found) return success(null);
      const entity = LookbookMapper.toEntity(found as unknown as Record<string, unknown>);
      return success(entity);
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch lookbook campaign by slug: ${slug}`, { cause: err }));
    }
  }

  public async getAllCampaigns(): Promise<Result<LookbookCampaign[], AppError>> {
    try {
      const entities = lookbookData.map((c) =>
        LookbookMapper.toEntity(c as unknown as Record<string, unknown>)
      );
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch all lookbook campaigns', { cause: err }));
    }
  }
}
