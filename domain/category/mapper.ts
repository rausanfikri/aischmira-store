import { Category, CategoryStatus } from './entity';
import { CategoryDTO } from './dto';

export class CategoryMapper {
  public static toEntity(raw: Record<string, unknown> | CategoryDTO): Category {
    const rawAny = raw as Record<string, unknown>;

    const id = String(rawAny.id || `cat_${Math.random().toString(36).substring(2, 9)}`);
    const slug = String(rawAny.slug || id);
    const name = String(rawAny.name || 'Untitled Category');
    const description = rawAny.description ? String(rawAny.description) : undefined;
    const icon = rawAny.icon ? String(rawAny.icon) : undefined;
    const image = rawAny.image ? String(rawAny.image) : undefined;

    const sortOrder = Number(rawAny.sortOrder ?? rawAny.sort_order ?? 0);
    const featured = Boolean(rawAny.featured ?? rawAny.is_featured ?? rawAny.isFeatured ?? false);

    const statusRaw = String(rawAny.status || 'ACTIVE').toUpperCase();
    const status: CategoryStatus = statusRaw === 'DRAFT' || statusRaw === 'ARCHIVED' ? statusRaw : 'ACTIVE';

    return {
      id,
      slug,
      name,
      description,
      icon,
      image,
      sortOrder,
      featured,
      status,
      seo: {
        title: rawAny.seoTitle ? String(rawAny.seoTitle) : name,
        description: rawAny.seoDescription ? String(rawAny.seoDescription) : description,
      },
      createdAt: String(rawAny.createdAt ?? rawAny.created_at ?? new Date().toISOString()),
      updatedAt: String(rawAny.updatedAt ?? rawAny.updated_at ?? new Date().toISOString()),
    };
  }

  public static toDTO(entity: Category): CategoryDTO {
    return {
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      description: entity.description,
      icon: entity.icon,
      image: entity.image,
      sort_order: entity.sortOrder,
      is_featured: entity.featured,
      status: entity.status,
      seo_title: entity.seo?.title,
      seo_description: entity.seo?.description,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
    };
  }
}
