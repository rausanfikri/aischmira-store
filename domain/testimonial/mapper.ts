import { Testimonial, CommunityStat } from './entity';
import { TestimonialSchema, CommunityStatSchema } from './schema';

export class TestimonialMapper {
  public static toEntity(raw: Record<string, unknown>): Testimonial {
    const validated = TestimonialSchema.parse(raw);
    return {
      id: validated.id,
      author: validated.author,
      quote: validated.quote,
      story: validated.story,
      purchasedCollection: validated.purchasedCollection,
      purchasedProduct: validated.purchasedProduct,
      type: validated.type,
      featured: validated.featured,
      rating: validated.rating,
      date: validated.date,
    };
  }

  public static toStatEntity(raw: Record<string, unknown>): CommunityStat {
    const validated = CommunityStatSchema.parse(raw);
    return {
      id: validated.id,
      value: validated.value,
      label: validated.label,
      description: validated.description,
    };
  }
}
