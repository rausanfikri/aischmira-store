import { Testimonial, CommunityStat } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ITestimonialRepository {
  getFeaturedTestimonials(): Promise<Result<Testimonial[], AppError>>;
  getCommunityStats(): Promise<Result<CommunityStat[], AppError>>;
  getAllTestimonials(): Promise<Result<Testimonial[], AppError>>;
}
