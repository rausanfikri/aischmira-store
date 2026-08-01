import { Product } from '../product';

export type SupportedOccasion =
  | 'Office'
  | 'Travel'
  | 'Casual'
  | 'Weekend'
  | 'Formal'
  | 'Ramadan'
  | 'Wedding';

export interface SavedLookEntity {
  id: string;
  slug: string;
  name: string;
  season: string;
  occasion: SupportedOccasion;
  coverImage: string;
  colorPalette: string[];
  description: string;
  productSkus: string[];
  itemCount: number;
  totalEstimatedValue: number;
}

export interface SavedLookDetail extends SavedLookEntity {
  products: Product[];
  outfitStory: string;
  stylingNotes: string;
}
