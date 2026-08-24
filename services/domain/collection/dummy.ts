import { Collection } from "./types";
import { collectionsData as rawCollections } from "@/data/collections";

export const dummyCollections: Collection[] = rawCollections.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  description: c.description,
  coverImage: c.coverImage,
  category: c.category,
  story: c.story,
  isFeatured: c.isFeatured || false,
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-07-28T00:00:00Z",
}));
