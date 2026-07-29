export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export interface ProductVariant {
  id: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
}

export interface ProductInventory {
  availableStock: number;
  reservedStock: number;
  inStock: boolean;
}

export interface ProductSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Product {
  sku: string;
  parentSku?: string;
  slug: string;
  name: string;
  description: string;
  collectionId?: string;
  categoryId: string;
  variants: ProductVariant[];
  images: string[];
  price: number;
  compareAtPrice?: number;
  currency: string;
  inventory: ProductInventory;
  status: ProductStatus;
  tags: string[];
  seo?: ProductSEO;
  story?: string;
  material?: string;
  careInstruction?: string;
  shippingInfo?: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
