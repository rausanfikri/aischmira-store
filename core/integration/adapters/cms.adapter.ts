import { IContentProvider, EditorialArticle } from "../contracts/content.provider";
import { Collection } from "@/domain/collection";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class CMSAdapter implements IContentProvider {
  public async getEditorialArticles(): Promise<Result<EditorialArticle[], AppError>> {
    return success([
      {
        id: "art_1",
        slug: "silk-drape-craftsmanship",
        title: "The Architecture of Mulberry Silk Drape",
        category: "Atelier Craftsmanship",
        excerpt: "Exploring the master tailoring behind AISCHMIRA silk collections.",
        coverImage: "/images/products/bianca-dress.jpg",
        publishedAt: "July 2026",
      },
    ]);
  }

  public async getFeaturedCollections(): Promise<Result<Collection[], AppError>> {
    return success([]);
  }
}

export const cmsAdapter = new CMSAdapter();
