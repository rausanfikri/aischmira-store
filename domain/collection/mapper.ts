import { Collection, CollectionStatus } from './entity';
import { CollectionDTO } from './dto';

export class CollectionMapper {
  public static toEntity(raw: Record<string, unknown> | CollectionDTO): Collection {
    const rawAny = raw as Record<string, unknown>;

    const id = String(rawAny.id || `col_${Math.random().toString(36).substring(2, 9)}`);
    const slug = String(rawAny.slug || id);
    const name = String(rawAny.name || rawAny.title || 'Untitled Collection');
    const title = String(rawAny.title || name);
    const subtitle = rawAny.subtitle ? String(rawAny.subtitle) : undefined;
    const description = String(rawAny.description || '');

    const heroImage = rawAny.heroImage ?? rawAny.hero_image ? String(rawAny.heroImage ?? rawAny.hero_image) : undefined;
    const coverImage = String(rawAny.coverImage ?? rawAny.cover_image ?? '/images/products/placeholder.png');
    const thumbnail = rawAny.thumbnail ? String(rawAny.thumbnail) : undefined;

    const sortOrder = Number(rawAny.sortOrder ?? rawAny.sort_order ?? 0);
    const featured = Boolean(rawAny.featured ?? rawAny.is_featured ?? rawAny.isFeatured ?? false);

    const statusRaw = String(rawAny.status || 'ACTIVE').toUpperCase();
    const status: CollectionStatus = statusRaw === 'DRAFT' || statusRaw === 'ARCHIVED' ? statusRaw : 'ACTIVE';

    const materials = Array.isArray(rawAny.materials) ? (rawAny.materials as string[]) : undefined;

    return {
      id,
      slug,
      name,
      title,
      subtitle,
      description,
      heroImage,
      coverImage,
      thumbnail,
      sortOrder,
      featured,
      status,
      seo: {
        title: rawAny.seoTitle ? String(rawAny.seoTitle) : title,
        description: rawAny.seoDescription ? String(rawAny.seoDescription) : description,
      },
      story: rawAny.story ? String(rawAny.story) : undefined,
      designerNotes: rawAny.designerNotes ?? rawAny.designer_notes ? String(rawAny.designerNotes ?? rawAny.designer_notes) : undefined,
      materials,
      createdAt: String(rawAny.createdAt ?? rawAny.publishedAt ?? rawAny.created_at ?? new Date().toISOString()),
      updatedAt: String(rawAny.updatedAt ?? rawAny.updated_at ?? new Date().toISOString()),
    };
  }

  public static toDTO(entity: Collection): CollectionDTO {
    return {
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      title: entity.title,
      subtitle: entity.subtitle,
      description: entity.description,
      hero_image: entity.heroImage,
      cover_image: entity.coverImage,
      thumbnail: entity.thumbnail,
      sort_order: entity.sortOrder,
      is_featured: entity.featured,
      status: entity.status,
      seo_title: entity.seo?.title,
      seo_description: entity.seo?.description,
      story: entity.story,
      designer_notes: entity.designerNotes,
      materials: entity.materials,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
    };
  }
}
