export interface ProductVariantDTO {
  id: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images?: string[];
}

export interface ProductDTO {
  sku: string;
  parent_sku?: string;
  slug: string;
  name: string;
  description: string;
  collection_id?: string;
  category_id: string;
  base_price: number;
  compare_at_price?: number;
  currency?: string;
  available_stock: number;
  reserved_stock?: number;
  variants?: ProductVariantDTO[];
  images?: string[];
  status?: string;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  story?: string;
  material?: string;
  care_instruction?: string;
  shipping_info?: string;
  is_featured?: boolean;
  created_at?: string;
  updated_at?: string;
}
