import { ICollectionRepository, Collection } from '@/domain/collection';
import { Result, success } from '@/shared/types/Result';
import { container } from '../../infrastructure/di/container';
import { logger } from '@/shared/logger';

export class GetCollectionUseCase {
  constructor(private collectionRepo: ICollectionRepository = container.collections) {}

  async execute(slug: string): Promise<Result<Collection | null>> {
    logger.info(`Executing GetCollectionUseCase for slug: ${slug}`);
    
    const result = await this.collectionRepo.getBySlug(slug);
    
    if (result.isFailure) {
      logger.error('Failed to get collection', result.error);
      return result;
    }

    if (!result.value) {
      logger.warn(`Collection not found for slug: ${slug}`);
      return success(null);
    }

    return success(result.value);
  }
}
