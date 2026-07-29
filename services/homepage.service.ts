import { IHomepageRepository, HomepageConfig } from '@/core/domain/homepage';
import { DummyHomepageRepository } from '@/core/infrastructure/repositories/dummy/DummyHomepageRepository';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class HomepageService {
  constructor(private readonly repository: IHomepageRepository = new DummyHomepageRepository()) {}

  public async getHomepageConfig(): Promise<Result<HomepageConfig, AppError>> {
    logger.debug('HomepageService: Fetching homepage configuration');
    const result = await this.repository.getHomepageConfig();
    if (result.isFailure) {
      return failure(new RepositoryError('Failed to load homepage configuration', { cause: result.error }));
    }
    return success(result.value);
  }
}

export const homepageService = new HomepageService();
