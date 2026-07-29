import { Collection } from '../entity';
import { ICollectionRepository } from '../repository';
import { DummyCollectionRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetFeaturedCollectionsUseCase {
  constructor(private readonly repository: ICollectionRepository = new DummyCollectionRepository()) {}

  public async execute(limit = 4): Promise<Result<Collection[], AppError>> {
    logger.info(`Executing GetFeaturedCollectionsUseCase limit=${limit}`);
    return this.repository.getFeatured(limit);
  }
}
