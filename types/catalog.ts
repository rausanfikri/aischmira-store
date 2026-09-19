export interface ProductMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  media?: ProductMedia;
}

export interface SubCollection extends Collection {
  collectionId: string;
}

export type Category = Collection;

export interface ProductVariant {
  /** The original master-data identifier, never generated from a display name. */
  sku: string;
  /** Preserve the master value; "-" means no size was specified. */
  size: string;
  originalPrice: number | null;
  finalPrice: number | null;
}

export interface ProductColor {
  id: string;
  name: string;
  /** Retains the master scarf design without changing its color name. */
  pattern?: string;
  media: ProductMedia[];
  variants: ProductVariant[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  collectionId: string;
  subCollectionId: string;
  categoryId: string;
  description?: string;
  material?: string;
  colors: ProductColor[];
}

export interface CatalogFilters {
  collectionId?: string;
  subCollectionId?: string;
  categoryId?: string;
}

export interface CatalogVariant {
  product: Product;
  color: ProductColor;
  variant: ProductVariant;
}
