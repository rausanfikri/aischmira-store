export type LookbookBlockType =
  | 'FULL_WIDTH_IMAGE'
  | 'SPLIT_LAYOUT'
  | 'IMAGE_GALLERY'
  | 'QUOTE_BLOCK'
  | 'EDITORIAL_TEXT'
  | 'CAMPAIGN_BANNER'
  | 'IMAGE_PAIR';

export interface LookbookImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'hero';
}

export interface LookbookCTA {
  label: string;
  href: string;
}

export interface LookbookBlock {
  id: string;
  type: LookbookBlockType;
  title?: string;
  subtitle?: string;
  headline?: string;
  quote?: string;
  author?: string;
  paragraphs?: string[];
  images?: LookbookImage[];
  cta?: LookbookCTA;
  layoutOrder?: 'image-left' | 'image-right' | 'centered';
}

export interface LookbookCampaign {
  id: string;
  slug: string;
  title: string;
  season: string;
  year: string;
  tagline: string;
  description: string;
  coverImage: string;
  isFeatured: boolean;
  status: 'DRAFT' | 'ACTIVE' | 'ARCHIVED';
  blocks: LookbookBlock[];
  createdAt: string;
  updatedAt: string;
}
