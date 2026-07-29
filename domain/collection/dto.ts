export interface CollectionDTO {
  id: string;
  slug: string;
  name: string;
  title?: string;
  subtitle?: string;
  description?: string;
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
