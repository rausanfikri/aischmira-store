import { IHomepageRepository, HomepageConfig } from '../../domain/homepage';
import { Result, success } from '../../domain/types/Result';
import { container } from '../../infrastructure/di/container';
import { logger } from '../../infrastructure/logger';

export class GetHomepageUseCase {
  constructor(private homepageRepo: IHomepageRepository = container.homepage) {}

  async execute(): Promise<Result<HomepageConfig>> {
    logger.info(`Executing GetHomepageUseCase`);
    
    const result = await this.homepageRepo.getHomepageConfig();
    
    if (result.isFailure) {
      logger.error('Failed to get homepage config', result.error);
      return result;
    }

    return success(result.value);
  }
}
