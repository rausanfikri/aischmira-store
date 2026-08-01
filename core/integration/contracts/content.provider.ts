import { Collection } from "@/domain/collection";
import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface EditorialArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

export interface IContentProvider {
  getEditorialArticles(): Promise<Result<EditorialArticle[], AppError>>;
  getFeaturedCollections(): Promise<Result<Collection[], AppError>>;
}
