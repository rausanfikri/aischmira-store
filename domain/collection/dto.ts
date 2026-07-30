export interface CollectionDTO {
  id: string;
  slug: string;
  name: string;
  title?: string;
  subtitle?: string;
  description?: string;
  category?: string;
  season?: string;
  campaign_id?: string;
  campaign_badge?: string;
  video_url?: string;
  cms_id?: string;
  locale?: string;
  product_sku_list?: string[];
  category_mapping?: Record<string, string>;
  big_seller_collection_id?: string;
  inventory_aggregation?: {
    total_units: number;
    in_stock_count: number;
  };
  cta_label?: string;
  product_count?: number;
  hero_image?: string;
  cover_image?: string;
  thumbnail?: string;
  sort_order?: number;
  is_featured?: boolean;
  status?: string;
  seo_title?: string;
  seo_description?: string;
  story?: string;
  designer_notes?: string;
  materials?: string[];
  created_at?: string;
  updated_at?: string;
}
