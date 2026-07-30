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

    const category = rawAny.category ? String(rawAny.category) : undefined;
    const season = rawAny.season ? String(rawAny.season) : undefined;
    const campaignId = rawAny.campaignId ?? rawAny.campaign_id ? String(rawAny.campaignId ?? rawAny.campaign_id) : undefined;
    const campaignBadge = rawAny.campaignBadge ?? rawAny.campaign_badge ? String(rawAny.campaignBadge ?? rawAny.campaign_badge) : undefined;
    const videoUrl = rawAny.videoUrl ?? rawAny.video_url ? String(rawAny.videoUrl ?? rawAny.video_url) : undefined;
    const cmsId = rawAny.cmsId ?? rawAny.cms_id ? String(rawAny.cmsId ?? rawAny.cms_id) : undefined;
    const locale = rawAny.locale ? String(rawAny.locale) : undefined;

    const rawSkus = rawAny.productSkuList ?? rawAny.product_sku_list;
    const productSkuList = Array.isArray(rawSkus) ? (rawSkus as string[]) : undefined;

    const rawCatMap = rawAny.categoryMapping ?? rawAny.category_mapping;
    const categoryMapping =
      rawCatMap && typeof rawCatMap === "object" && !Array.isArray(rawCatMap)
        ? (rawCatMap as Record<string, string>)
        : undefined;
    const bigSellerCollectionId = rawAny.bigSellerCollectionId ?? rawAny.big_seller_collection_id
      ? String(rawAny.bigSellerCollectionId ?? rawAny.big_seller_collection_id)
      : undefined;

    const rawInventory = (rawAny.inventoryAggregation ?? rawAny.inventory_aggregation) as Record<string, unknown> | undefined;
    const inventoryAggregation = rawInventory
      ? {
          totalUnits: Number(rawInventory.totalUnits ?? rawInventory.total_units ?? 0),
          inStockCount: Number(rawInventory.inStockCount ?? rawInventory.in_stock_count ?? 0),
        }
      : undefined;

    const ctaLabel = rawAny.ctaLabel ?? rawAny.cta_label ? String(rawAny.ctaLabel ?? rawAny.cta_label) : undefined;
    const productCount = rawAny.productCount ?? rawAny.product_count !== undefined ? Number(rawAny.productCount ?? rawAny.product_count) : undefined;

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
      category,
      season,
      campaignId,
      campaignBadge,
      videoUrl,
      cmsId,
      locale,
      productSkuList,
      categoryMapping,
      bigSellerCollectionId,
      inventoryAggregation,
      ctaLabel,
      productCount,
      heroImage,
      coverImage,
      thumbnail,
      sortOrder,
      featured,
      status,
      seo: {
        title: rawAny.seoTitle ?? rawAny.seo_title ? String(rawAny.seoTitle ?? rawAny.seo_title) : title,
        description: rawAny.seoDescription ?? rawAny.seo_description ? String(rawAny.seoDescription ?? rawAny.seo_description) : description,
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
      category: entity.category,
      season: entity.season,
      campaign_id: entity.campaignId,
      campaign_badge: entity.campaignBadge,
      video_url: entity.videoUrl,
      cms_id: entity.cmsId,
      locale: entity.locale,
      product_sku_list: entity.productSkuList,
      category_mapping: entity.categoryMapping,
      big_seller_collection_id: entity.bigSellerCollectionId,
      inventory_aggregation: entity.inventoryAggregation
        ? {
            total_units: entity.inventoryAggregation.totalUnits,
            in_stock_count: entity.inventoryAggregation.inStockCount,
          }
        : undefined,
      cta_label: entity.ctaLabel,
      product_count: entity.productCount,
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
