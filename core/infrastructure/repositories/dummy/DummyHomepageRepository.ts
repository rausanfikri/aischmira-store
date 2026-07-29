import { IHomepageRepository, HomepageConfig } from '../../../domain/homepage';
import { Result, success, failure } from '../../../domain/types/Result';
import { RepositoryError } from '../../../domain/errors';
import { homepageData } from '../../../../data/homepage';

export class DummyHomepageRepository implements IHomepageRepository {
  async getHomepageConfig(): Promise<Result<HomepageConfig>> {
    try {
      const config: HomepageConfig = {
        title: 'AISCHMIRA Homepage',
        blocks: [
          { type: 'HERO', content: homepageData.heroBanner },
          { type: 'FEATURED_COLLECTION', content: { title: 'Featured', items: homepageData.featuredCollections } },
        ],
      };
      return success(config);
    } catch (error) {
      return failure(new RepositoryError('Failed to fetch homepage config', { error }));
    }
  }
}
