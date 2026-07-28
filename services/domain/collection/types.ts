export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  category?: string;
  story?: string;
  designerNotes?: string;
  materials?: string[];
  isFeatured?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
