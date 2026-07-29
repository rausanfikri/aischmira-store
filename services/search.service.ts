import { ProductService, productService } from './product.service';
import { CollectionService, collectionService } from './collection.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { Product } from '@/domain/product';
import { Collection } from '@/domain/collection';

export interface SearchResults {
  products: Product[];
  collections: Collection[];
}

export class SearchService {
  constructor(
    private readonly productSvc: ProductService = productService,
    private readonly collectionSvc: CollectionService = collectionService
  ) {}

  public async globalSearch(query: string): Promise<Result<SearchResults, AppError>> {
    const productsRes = await this.productSvc.searchProducts(query);
    const collectionsRes = await this.collectionSvc.searchCollections(query);

    return success({
      products: productsRes.isSuccess ? productsRes.value : [],
      collections: collectionsRes.isSuccess ? collectionsRes.value : [],
    });
  }
}

export const searchService = new SearchService();
