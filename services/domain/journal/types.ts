export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string;
  author?: string;
  isFeatured?: boolean;
}
