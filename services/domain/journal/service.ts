import { JournalArticle } from "./types";
import { dummyArticles } from "./dummy";

export class JournalService {
  static async getAllArticles(): Promise<JournalArticle[]> {
    return dummyArticles;
  }

  static async getArticleBySlug(slug: string): Promise<JournalArticle | null> {
    const art = dummyArticles.find((a) => a.slug === slug || a.id === slug);
    return art || null;
  }

  static async getFeaturedArticles(limit = 3): Promise<JournalArticle[]> {
    return dummyArticles.slice(0, limit);
  }
}
