import { Collection } from "./types";
import { dummyCollections } from "./dummy";

export class CollectionService {
  static async getAllCollections(): Promise<Collection[]> {
    return dummyCollections;
  }

  static async getCollectionBySlug(slug: string): Promise<Collection | null> {
    const col = dummyCollections.find((c) => c.slug === slug);
    return col || null;
  }

  static async getCollectionById(id: string): Promise<Collection | null> {
    const col = dummyCollections.find((c) => c.id === id);
    return col || null;
  }

  static async getFeaturedCollections(limit = 3): Promise<Collection[]> {
    return dummyCollections.filter((c) => c.isFeatured).slice(0, limit);
  }
}
