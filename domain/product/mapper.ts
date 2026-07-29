import { Product, ProductStatus } from './entity';
import { ProductDTO } from './dto';

export class ProductMapper {
  /**
   * Transforms raw payload or DTO into a canonical Product Entity.
   */
  public static toEntity(raw: Record<string, unknown> | ProductDTO): Product {
    const rawAny = raw as Record<string, unknown>;

    const sku = String(rawAny.sku || rawAny.id || 'SKU-UNKNOWN');
    const slug = String(rawAny.slug || '');
    const name = String(rawAny.name || '');
    const description = String(rawAny.description || '');
    const price = Number(rawAny.price ?? rawAny.base_price ?? rawAny.basePrice ?? 0);
    const compareAtPrice = rawAny.compareAtPrice ?? rawAny.compare_at_price;
    const currency = String(rawAny.currency || 'IDR');

    const images = Array.isArray(rawAny.images) ? (rawAny.images as string[]) : [];
    const categoryId = String(rawAny.categoryId ?? rawAny.category_id ?? '');
    const collectionId = rawAny.collectionId ?? rawAny.collection_id ? String(rawAny.collectionId ?? rawAny.collection_id) : undefined;

    const rawVariants = Array.isArray(rawAny.variants) ? rawAny.variants : [];
    const variants = rawVariants.map((v: Record<string, unknown>, idx: number) => ({
      id: String(v.id || `var_${idx}`),
      sku: String(v.sku || `${sku}-${idx}`),
      color: String(v.color || 'Default'),
      size: String(v.size || 'OS'),
      price: Number(v.price || price),
      stock: Number(v.stock || 0),
      images: Array.isArray(v.images) ? (v.images as string[]) : images,
    }));

    const availableStock = Number(rawAny.availableStock ?? rawAny.available_stock ?? variants[0]?.stock ?? 10);
    const reservedStock = Number(rawAny.reservedStock ?? rawAny.reserved_stock ?? 0);

    const statusRaw = String(rawAny.status || 'ACTIVE').toUpperCase();
    const status: ProductStatus = statusRaw === 'DRAFT' || statusRaw === 'ARCHIVED' ? statusRaw : 'ACTIVE';

    const isFeatured = Boolean(rawAny.isFeatured ?? rawAny.is_featured ?? false);
    const tags = Array.isArray(rawAny.tags) ? (rawAny.tags as string[]) : [];

    return {
      sku,
      parentSku: rawAny.parentSku ?? rawAny.parent_sku ? String(rawAny.parentSku ?? rawAny.parent_sku) : undefined,
      slug,
      name,
      description,
      collectionId,
      categoryId,
      variants,
      images,
      price,
      compareAtPrice: compareAtPrice !== undefined ? Number(compareAtPrice) : undefined,
      currency,
      inventory: {
        availableStock,
        reservedStock,
        inStock: availableStock > 0,
      },
      status,
      tags,
      seo: {
        title: rawAny.seoTitle ? String(rawAny.seoTitle) : name,
        description: rawAny.seoDescription ? String(rawAny.seoDescription) : description,
      },
      story: rawAny.story ? String(rawAny.story) : undefined,
      material: rawAny.material ? String(rawAny.material) : undefined,
      careInstruction: rawAny.careInstruction ? String(rawAny.careInstruction) : undefined,
      shippingInfo: rawAny.shippingInfo ? String(rawAny.shippingInfo) : undefined,
      isFeatured,
      createdAt: String(rawAny.createdAt ?? rawAny.created_at ?? new Date().toISOString()),
      updatedAt: String(rawAny.updatedAt ?? rawAny.updated_at ?? new Date().toISOString()),
    };
  }

  /**
   * Transforms canonical Product Entity into a ProductDTO.
   */
  public static toDTO(entity: Product): ProductDTO {
    return {
      sku: entity.sku,
      parent_sku: entity.parentSku,
      slug: entity.slug,
      name: entity.name,
      description: entity.description,
      collection_id: entity.collectionId,
      category_id: entity.categoryId,
      base_price: entity.price,
      compare_at_price: entity.compareAtPrice,
      currency: entity.currency,
      available_stock: entity.inventory.availableStock,
      reserved_stock: entity.inventory.reservedStock,
      variants: entity.variants.map(v => ({
        id: v.id,
        sku: v.sku,
        color: v.color,
        size: v.size,
        price: v.price,
        stock: v.stock,
        images: v.images,
      })),
      images: entity.images,
      status: entity.status,
      tags: entity.tags,
      seo_title: entity.seo?.title,
      seo_description: entity.seo?.description,
      story: entity.story,
      material: entity.material,
      care_instruction: entity.careInstruction,
      shipping_info: entity.shippingInfo,
      is_featured: entity.isFeatured,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
    };
  }
}
