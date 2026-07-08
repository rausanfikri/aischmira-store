import { Collection } from "@/types";

// Data mock up ini dirancang semirip mungkin dengan payload WooCommerce REST API
// agar perpindahan ke database/API yang sesungguhnya minim gesekan.
export const collectionsData: Collection[] = [
  {
    id: "col_1",
    name: "Summer Elegance 2026",
    slug: "summer-elegance-2026",
    description: "Embrace the warmth with our elegant summer collection.",
    coverImage: "/collections/summer-elegance.jpg",
    isFeatured: true,
    publishedAt: "2026-06-01T00:00:00Z",
  },
];
