import { Product } from "./types";
import { productSchema } from "./schema";

export class ProductMapper {
  static toDomain(rawPayload: unknown): Product {
    const validated = productSchema.parse(rawPayload);
    return validated as Product;
  }

  static toDomainList(rawPayloads: unknown[]): Product[] {
    return rawPayloads.map((item) => this.toDomain(item));
  }

  static toBigSellerDTO(product: Product) {
    return {
      product_id: product.id,
      sku: product.sku,
      parent_sku: product.parentSku,
      title: product.name,
      price: product.basePrice,
      currency: product.currency,
      stock: product.variants.reduce((acc, v) => acc + v.stock, 0),
      is_active: product.isActive,
    };
  }
}
