import { ProductDTO, VariantDTO } from "../dto";
import { Product, ProductVariant } from "@/domain/product";

export class BigSellerProductMapper {
  public static toDomainVariant(dto: VariantDTO): ProductVariant {
    return {
      id: dto.variantId,
      sku: dto.sku,
      color: dto.color || "Default Color",
      size: dto.size || "Standard",
      price: dto.price,
      stock: dto.stock,
      images: [],
    };
  }

  public static toDomain(dto: ProductDTO): Product {
    const variants = dto.variants.map((v) => this.toDomainVariant(v));
    const totalAvailable = variants.reduce((acc, v) => acc + v.stock, 0);

    return {
      sku: dto.internalSku || dto.spu,
      parentSku: dto.spu,
      slug: dto.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""),
      name: dto.title,
      description: dto.description,
      categoryId: dto.category,
      collectionId: dto.collectionSlug || "editorial",
      variants,
      images: dto.images.length > 0 ? dto.images : [dto.mainImage],
      price: variants[0]?.price || 0,
      currency: "IDR",
      inventory: {
        availableStock: totalAvailable,
        reservedStock: 0,
        inStock: totalAvailable > 0,
      },
      status: "ACTIVE",
      tags: [dto.category],
      isFeatured: false,
      createdAt: dto.createdAt || new Date().toISOString(),
      updatedAt: dto.updatedAt || new Date().toISOString(),
    };
  }
}
