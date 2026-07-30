import { LookbookCampaign } from './entity';
import { LookbookCampaignSchema } from './schema';

export class LookbookMapper {
  public static toEntity(raw: Record<string, unknown>): LookbookCampaign {
    const validated = LookbookCampaignSchema.parse(raw);
    return {
      id: validated.id,
      slug: validated.slug,
      title: validated.title,
      season: validated.season,
      year: validated.year,
      tagline: validated.tagline,
      description: validated.description,
      coverImage: validated.coverImage,
      isFeatured: validated.isFeatured,
      status: validated.status,
      blocks: validated.blocks.map((b) => ({
        id: b.id,
        type: b.type,
        title: b.title,
        subtitle: b.subtitle,
        headline: b.headline,
        quote: b.quote,
        author: b.author,
        paragraphs: b.paragraphs,
        images: b.images,
        cta: b.cta,
        layoutOrder: b.layoutOrder,
      })),
      createdAt: validated.createdAt,
      updatedAt: validated.updatedAt,
    };
  }
}
