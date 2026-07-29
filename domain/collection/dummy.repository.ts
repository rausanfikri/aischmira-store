import { Collection } from './entity';
import { ICollectionRepository } from './repository';
import { CollectionMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { collectionsData } from '@/data/collections';

export class DummyCollectionRepository implements ICollectionRepository {
  public async getAll(): Promise<Result<Collection[], AppError>> {
    try {
      const entities = collectionsData.map(c => CollectionMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch collections from dummy store', { cause: err }));
    }
  }

  public async getBySlug(slug: string): Promise<Result<Collection | null, AppError>> {
    try {
      const found = collectionsData.find(c => c.slug === slug);
      if (!found) return success(null);
      return success(CollectionMapper.toEntity(found as unknown as Record<string, unknown>));
    } catch (err) {
      return failure(new RepositoryError(`Failed to fetch collection by slug: ${slug}`, { cause: err }));
    }
  }

  public async getFeatured(limit = 4): Promise<Result<Collection[], AppError>> {
    try {
      const featured = collectionsData
        .filter(c => c.isFeatured)
        .slice(0, limit)
        .map(c => CollectionMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(featured);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch featured collections', { cause: err }));
    }
  }

  public async search(query: string): Promise<Result<Collection[], AppError>> {
    try {
      const q = query.toLowerCase().trim();
      if (!q) return success([]);
      const results = collectionsData
        .filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
        .map(c => CollectionMapper.toEntity(c as unknown as Record<string, unknown>));
      return success(results);
    } catch (err) {
      return failure(new RepositoryError(`Failed to search collections with query: ${query}`, { cause: err }));
    }
  }
}
