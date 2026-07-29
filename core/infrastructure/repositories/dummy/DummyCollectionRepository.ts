import { ICollectionRepository, Collection } from '../../../domain/collection';
import { Result, success, failure } from '../../../domain/types/Result';
import { RepositoryError } from '../../../domain/errors';
import { collectionsData } from '../../../../data/collections';

export class DummyCollectionRepository implements ICollectionRepository {
  async findBySlug(slug: string): Promise<Result<Collection | null>> {
    try {
      const col = collectionsData.find(c => c.slug === slug);
      if (!col) return success(null);
      return success(this.mapToDomain(col));
    } catch (error) {
      return failure(new RepositoryError('Failed to find collection by slug', { error }));
    }
  }

  async findAll(): Promise<Result<Collection[]>> {
    try {
      const collections = collectionsData.map(c => this.mapToDomain(c));
      return success(collections);
    } catch (error) {
      return failure(new RepositoryError('Failed to find all collections', { error }));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapToDomain(raw: any): Collection {
    return {
      id: raw.id,
      slug: raw.slug,
      title: raw.name,
      description: raw.description,
      heroImage: raw.coverImage || '',
      isCampaign: raw.isFeatured || false,
      productSkus: [], // Dummy data might not easily have this mapping inverted
    };
  }
}
