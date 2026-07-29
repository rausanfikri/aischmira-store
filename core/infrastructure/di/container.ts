import { IProductRepository } from '../../domain/product';
import { ICollectionRepository } from '../../domain/collection';
import { ICategoryRepository } from '../../domain/category';
import { IHomepageRepository } from '../../domain/homepage';
import { INavigationRepository } from '../../domain/navigation';
import { DummyProductRepository } from '../repositories/dummy/DummyProductRepository';
import { DummyCollectionRepository } from '../repositories/dummy/DummyCollectionRepository';
import { DummyCategoryRepository } from '../repositories/dummy/DummyCategoryRepository';
import { DummyHomepageRepository } from '../repositories/dummy/DummyHomepageRepository';
import { DummyNavigationRepository } from '../repositories/dummy/DummyNavigationRepository';

// This is a simple manual DI container for the prototype.
// As the app grows, a proper DI library (like awilix or tsyringe) could be introduced, 
// but manual DI is sufficient and lightweight for Next.js App Router RSCs.

export interface IContainer {
  products: IProductRepository;
  collections: ICollectionRepository;
  categories: ICategoryRepository;
  homepage: IHomepageRepository;
  navigation: INavigationRepository;
}

export const container: IContainer = {
  // Currently bound to Dummy repositories.
  // In Phase 3, these will be replaced with e.g. new SupabaseProductRepository()
  products: new DummyProductRepository(),
  collections: new DummyCollectionRepository(),
  categories: new DummyCategoryRepository(),
  homepage: new DummyHomepageRepository(),
  navigation: new DummyNavigationRepository(),
};
