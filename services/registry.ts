import { ProductService, productService } from './product.service';
import { CollectionService, collectionService } from './collection.service';
import { CategoryService, categoryService } from './category.service';
import { NavigationService, navigationService } from './navigation.service';
import { HomepageService, homepageService } from './homepage.service';
import { ConfigurationService, configurationService } from './configuration.service';
import { BrandService, brandService } from './brand.service';
import { FooterService, footerService } from './footer.service';
import { SearchService, searchService } from './search.service';
import { WishlistService, wishlistService } from './wishlist.service';
import { ShoppingBagService, shoppingBagService } from './shopping-bag.service';
import { LookbookService, lookbookService } from './lookbook.service';
import { TestimonialService, testimonialService } from './testimonial.service';

export interface IServiceRegistry {
  product: ProductService;
  collection: CollectionService;
  category: CategoryService;
  navigation: NavigationService;
  homepage: HomepageService;
  configuration: ConfigurationService;
  brand: BrandService;
  footer: FooterService;
  search: SearchService;
  wishlist: WishlistService;
  shoppingBag: ShoppingBagService;
  lookbook: LookbookService;
  testimonial: TestimonialService;
}

export class ServiceRegistry implements IServiceRegistry {
  public product: ProductService;
  public collection: CollectionService;
  public category: CategoryService;
  public navigation: NavigationService;
  public homepage: HomepageService;
  public configuration: ConfigurationService;
  public brand: BrandService;
  public footer: FooterService;
  public search: SearchService;
  public wishlist: WishlistService;
  public shoppingBag: ShoppingBagService;
  public lookbook: LookbookService;
  public testimonial: TestimonialService;

  constructor(overrides?: Partial<IServiceRegistry>) {
    this.product = overrides?.product ?? productService;
    this.collection = overrides?.collection ?? collectionService;
    this.category = overrides?.category ?? categoryService;
    this.navigation = overrides?.navigation ?? navigationService;
    this.homepage = overrides?.homepage ?? homepageService;
    this.configuration = overrides?.configuration ?? configurationService;
    this.brand = overrides?.brand ?? brandService;
    this.footer = overrides?.footer ?? footerService;
    this.search = overrides?.search ?? searchService;
    this.wishlist = overrides?.wishlist ?? wishlistService;
    this.shoppingBag = overrides?.shoppingBag ?? shoppingBagService;
    this.lookbook = overrides?.lookbook ?? lookbookService;
    this.testimonial = overrides?.testimonial ?? testimonialService;
  }
}

export const services = new ServiceRegistry();
