export interface CollectionFilterOptions {
  category?: 'all' | 'newest' | 'classic' | 'scarf' | string;
  season?: string;
  material?: string;
  campaignId?: string;
  availability?: 'all' | 'in_stock' | 'preorder';
}

export type CollectionSortOption =
  | 'featured'
  | 'newest'
  | 'alphabetical'
  | 'product_count'
  | 'sort_order';

export interface CollectionPaginationOptions {
  page?: number;
  limit?: number;
  cursor?: string;
  mode?: 'infinite' | 'load_more' | 'pages';
}

export interface CollectionQueryParams {
  filter?: CollectionFilterOptions;
  sort?: CollectionSortOption;
  pagination?: CollectionPaginationOptions;
}
