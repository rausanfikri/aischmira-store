export type CategoryStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export interface CategorySEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  image?: string;
  sortOrder: number;
  featured: boolean;
  status: CategoryStatus;
  seo?: CategorySEO;
  createdAt: string;
  updatedAt: string;
}
