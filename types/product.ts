export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Variant {
  id: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images: string[]; // Array of image URLs specific to this variant
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  collectionId?: string;
  sku: string;
  description: string;
  story?: string;
  material?: string;
  careInstruction?: string;
  shippingInfo?: string;
  basePrice: number;
  variants: Variant[];
  images: string[]; // General product images
  relatedProductIds?: string[];
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}
