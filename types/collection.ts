export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  isFeatured?: boolean;
  publishedAt?: string;
}
