import { Collection } from '../entity';
import { ICollectionRepository } from '../repository';
import { DummyCollectionRepository } from '../dummy.repository';
import { Result, failure } from '@/shared/types/Result';
import { AppError, NotFoundError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetCollectionBySlugUseCase {
  constructor(private readonly repository: ICollectionRepository = new DummyCollectionRepository()) {}

  public async execute(slug: string): Promise<Result<Collection | null, AppError>> {
    logger.info(`Executing GetCollectionBySlugUseCase slug=${slug}`);
    if (!slug) {
      return failure(new NotFoundError('Collection slug must not be empty'));
    }
    return this.repository.getBySlug(slug);
  }
}
