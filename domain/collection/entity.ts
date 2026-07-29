export type CollectionStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export interface CollectionSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string;
  coverImage: string;
  thumbnail?: string;
  sortOrder: number;
  featured: boolean;
  status: CollectionStatus;
  seo?: CollectionSEO;
  story?: string;
  designerNotes?: string;
  materials?: string[];
  createdAt: string;
  updatedAt: string;
}
