import { ICategoryRepository, Category } from '../../../domain/category';
import { Result, success } from '../../../domain/types/Result';

// Dummy Categories based on the product data we saw
const DUMMY_CATEGORIES: Category[] = [
  { id: 'cat_1', slug: 'dress', name: 'Dress' },
  { id: 'cat_2', slug: 'outerwear', name: 'Outerwear' },
  { id: 'cat_3', slug: 'trousers', name: 'Trousers' },
];

export class DummyCategoryRepository implements ICategoryRepository {
  async findAll(): Promise<Result<Category[]>> {
    return success(DUMMY_CATEGORIES);
  }

  async findBySlug(slug: string): Promise<Result<Category | null>> {
    const cat = DUMMY_CATEGORIES.find(c => c.slug === slug);
    return success(cat || null);
  }
}
