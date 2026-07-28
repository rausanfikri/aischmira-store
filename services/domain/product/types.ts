export type ProductStatus = "active" | "draft" | "archived";

export interface Variant {
  id: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
}

export interface Product {
  id: string;
  sku?: string;
  parentSku?: string;
  name: string;
  slug: string;
  categoryId: string;
  collectionId?: string;
  basePrice: number;
  compareAtPrice?: number;
  currency?: string;
  description: string;
  story?: string;
  material?: string;
  careInstruction?: string;
  shippingInfo?: string;
  variants: Variant[];
  images: string[];
  relatedProductIds?: string[];
  status?: ProductStatus;
  isActive?: boolean;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
