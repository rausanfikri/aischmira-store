import { Testimonial, CommunityStat } from './entity';
import { ITestimonialRepository } from './repository';
import { TestimonialMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { testimonialsData, communityStatsData } from '@/data/testimonials';

export class DummyTestimonialRepository implements ITestimonialRepository {
  public async getFeaturedTestimonials(): Promise<Result<Testimonial[], AppError>> {
    try {
      const featured = testimonialsData
        .filter((t) => t.featured)
        .map((t) => TestimonialMapper.toEntity(t as unknown as Record<string, unknown>));
      return success(featured);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch featured testimonials', { cause: err }));
    }
  }

  public async getCommunityStats(): Promise<Result<CommunityStat[], AppError>> {
    try {
      const stats = communityStatsData.map((s) =>
        TestimonialMapper.toStatEntity(s as unknown as Record<string, unknown>)
      );
      return success(stats);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch community stats', { cause: err }));
    }
  }

  public async getAllTestimonials(): Promise<Result<Testimonial[], AppError>> {
    try {
      const entities = testimonialsData.map((t) =>
        TestimonialMapper.toEntity(t as unknown as Record<string, unknown>)
      );
      return success(entities);
    } catch (err) {
      return failure(new RepositoryError('Failed to fetch all testimonials', { cause: err }));
    }
  }
}
