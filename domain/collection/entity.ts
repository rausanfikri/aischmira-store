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
  category?: 'all' | 'newest' | 'classic' | 'scarf' | string;
  season?: string;
  campaignId?: string;
  campaignBadge?: string;
  videoUrl?: string;
  cmsId?: string;
  locale?: string;
  productSkuList?: string[];
  categoryMapping?: Record<string, string>;
  bigSellerCollectionId?: string;
  inventoryAggregation?: {
    totalUnits: number;
    inStockCount: number;
  };
  ctaLabel?: string;
  productCount?: number;
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
