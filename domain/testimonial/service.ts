import { Testimonial, CommunityStat } from './entity';
import { ITestimonialRepository } from './repository';
import { DummyTestimonialRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class TestimonialService {
  constructor(private readonly repository: ITestimonialRepository = new DummyTestimonialRepository()) {}

  public async getFeaturedTestimonials(): Promise<Result<Testimonial[], AppError>> {
    logger.debug('TestimonialService: Fetching featured testimonials');
    return this.repository.getFeaturedTestimonials();
  }

  public async getCommunityStats(): Promise<Result<CommunityStat[], AppError>> {
    logger.debug('TestimonialService: Fetching community stats');
    return this.repository.getCommunityStats();
  }

  public async getAllTestimonials(): Promise<Result<Testimonial[], AppError>> {
    logger.debug('TestimonialService: Fetching all testimonials');
    return this.repository.getAllTestimonials();
  }
}

export const testimonialService = new TestimonialService();
