export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export type ProductMediaView =
  | 'hero'
  | 'front'
  | 'back'
  | 'left_side'
  | 'right_side'
  | 'angle_45'
  | 'fabric_detail'
  | 'stitching_detail'
  | 'sleeve_detail'
  | 'collar_detail'
  | 'texture_detail'
  | 'label_tag'
  | 'lifestyle'
  | 'editorial'
  | 'flat_lay'
  | 'packaging';

export interface ProductMediaItem {
  id: string;
  url: string;
  altText: string;
  viewType: ProductMediaView;
  width?: number;
  height?: number;
  isPrimary?: boolean;
}

export interface ProductVariant {
  id: string;
  sku: string;
  skuNo?: number;
  skuCode?: string;
  skuName?: string;
  color: string;
  size: string;
  price: number;
  compareAtPrice?: number;
  offlineBazaarPrice?: number;
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
  id?: string;
  sku: string;
  parentSku?: string;
  slug: string;
  name: string;
  description: string;
  collectionId?: string;
  collection?: string;
  categoryId: string;
  category?: string;
  type?: string;
  fabric?: string;
  color?: string;
  variants: ProductVariant[];
  images: string[];
  price: number;
  basePrice?: number;
  compareAtPrice?: number;
  offlineBazaarPrice?: number;
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
  relatedProductIds?: string[];
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}
