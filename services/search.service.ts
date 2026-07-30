import { ProductService, productService } from './product.service';
import { CollectionService, collectionService } from './collection.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { Product } from '@/domain/product';
import { Collection } from '@/domain/collection';

export interface SearchFilterOptions {
  category?: string;
  collectionId?: string;
  minPrice?: number;
  maxPrice?: number;
  color?: string;
  size?: string;
  inStockOnly?: boolean;
}

export type SearchSortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'alphabetical';

export interface SearchSuggestion {
  text: string;
  type: 'product' | 'collection' | 'category' | 'trending';
  url?: string;
}

export interface SearchResultsPayload {
  products: Product[];
  collections: Collection[];
  totalProducts: number;
  totalCollections: number;
  query: string;
}

export interface DiscoveryDataPayload {
  trendingSearches: string[];
  featuredCollections: Collection[];
  popularProducts: Product[];
}

export class SearchService {
  constructor(
    private readonly productSvc: ProductService = productService,
    private readonly collectionSvc: CollectionService = collectionService
  ) {}

  public async globalSearch(
    query: string,
    filters?: SearchFilterOptions,
    sort: SearchSortOption = 'featured'
  ): Promise<Result<SearchResultsPayload, AppError>> {
    const productsRes = await this.productSvc.searchProducts(query);
    const collectionsRes = await this.collectionSvc.searchCollections(query);

    let products = productsRes.isSuccess ? productsRes.value : [];
    const collections = collectionsRes.isSuccess ? collectionsRes.value : [];

    // Apply Filters to Products
    if (filters) {
      if (filters.category && filters.category !== 'all') {
        products = products.filter(
          (p) => (p.categoryId || '').toLowerCase() === filters.category!.toLowerCase()
        );
      }
      if (filters.collectionId && filters.collectionId !== 'all') {
        products = products.filter((p) => p.collectionId === filters.collectionId);
      }
      if (filters.minPrice !== undefined) {
        products = products.filter((p) => (p.price || 0) >= filters.minPrice!);
      }
      if (filters.maxPrice !== undefined) {
        products = products.filter((p) => (p.price || 0) <= filters.maxPrice!);
      }
      if (filters.color && filters.color !== 'all') {
        products = products.filter((p) =>
          p.variants.some((v) => v.color.toLowerCase() === filters.color!.toLowerCase())
        );
      }
      if (filters.size && filters.size !== 'all') {
        products = products.filter((p) =>
          p.variants.some((v) => v.size.toLowerCase() === filters.size!.toLowerCase())
        );
      }
      if (filters.inStockOnly) {
        products = products.filter((p) => p.inventory?.inStock);
      }
    }

    // Apply Sorting to Products
    if (sort === 'price-asc') {
      products.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === 'price-desc') {
      products.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sort === 'alphabetical') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    }

    return success({
      products,
      collections,
      totalProducts: products.length,
      totalCollections: collections.length,
      query,
    });
  }

  public async getTrendingSearches(): Promise<Result<string[], AppError>> {
    const trending = [
      'Silk Scarf',
      'Tailored Blazer',
      'Wide Leg Trousers',
      'She Collection',
      'Pure Cashmere',
      'Resort 2026',
    ];
    return success(trending);
  }

  public async getSuggestions(query: string): Promise<Result<SearchSuggestion[], AppError>> {
    const q = query.trim().toLowerCase();
    if (!q) return success([]);

    const productsRes = await this.productSvc.searchProducts(q);
    const collectionsRes = await this.collectionSvc.searchCollections(q);

    const suggestions: SearchSuggestion[] = [];

    if (collectionsRes.isSuccess) {
      collectionsRes.value.forEach((c) => {
        suggestions.push({
          text: `${c.name} Collection`,
          type: 'collection',
          url: `/collections/${c.slug}`,
        });
      });
    }

    if (productsRes.isSuccess) {
      productsRes.value.slice(0, 5).forEach((p) => {
        suggestions.push({
          text: p.name,
          type: 'product',
          url: `/products/${p.slug}`,
        });
      });
    }

    return success(suggestions);
  }

  public async getDiscoveryData(): Promise<Result<DiscoveryDataPayload, AppError>> {
    const featuredColsRes = await this.collectionSvc.getFeaturedCollections(4);
    const popularProdsRes = await this.productSvc.getFeaturedProducts(4);
    const trendingRes = await this.getTrendingSearches();

    return success({
      trendingSearches: trendingRes.isSuccess ? trendingRes.value : [],
      featuredCollections: featuredColsRes.isSuccess ? featuredColsRes.value : [],
      popularProducts: popularProdsRes.isSuccess ? popularProdsRes.value : [],
    });
  }
}

export const searchService = new SearchService();
