export interface CategoryDTO {
  id: string;
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  image?: string;
  sort_order?: number;
  is_featured?: boolean;
  status?: string;
  seo_title?: string;
  seo_description?: string;
  created_at?: string;
  updated_at?: string;
}
