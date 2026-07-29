import { Collection } from './entity';
import { ICollectionRepository } from './repository';
import { DummyCollectionRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class CollectionService {
  constructor(private readonly repository: ICollectionRepository = new DummyCollectionRepository()) {}

  public async getCollections(): Promise<Result<Collection[], AppError>> {
    logger.debug('CollectionService: Fetching all collections');
    return this.repository.getAll();
  }

  public async getCollectionBySlug(slug: string): Promise<Result<Collection | null, AppError>> {
    logger.debug(`CollectionService: Fetching collection slug=${slug}`);
    return this.repository.getBySlug(slug);
  }

  public async getFeaturedCollections(limit = 4): Promise<Result<Collection[], AppError>> {
    logger.debug(`CollectionService: Fetching featured collections limit=${limit}`);
    return this.repository.getFeatured(limit);
  }

  public async searchCollections(query: string): Promise<Result<Collection[], AppError>> {
    logger.debug(`CollectionService: Searching collections query=${query}`);
    return this.repository.search(query);
  }
}

export const collectionService = new CollectionService();
