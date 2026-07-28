import { Category } from "./types";
import { dummyCategories } from "./dummy";

export class CategoryService {
  static async getAllCategories(): Promise<Category[]> {
    return dummyCategories;
  }

  static async getCategoryBySlug(slug: string): Promise<Category | null> {
    const cat = dummyCategories.find((c) => c.slug === slug);
    return cat || null;
  }

  static async getCategoryById(id: string): Promise<Category | null> {
    const cat = dummyCategories.find((c) => c.id === id);
    return cat || null;
  }
}
