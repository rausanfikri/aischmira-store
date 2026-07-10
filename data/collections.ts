import { Collection } from "@/types";

// Data mock up ini dirancang semirip mungkin dengan payload WooCommerce REST API
// agar perpindahan ke database/API yang sesungguhnya minim gesekan.
// Placeholder images menggunakan picsum.photos — ganti dengan foto asli saat production.
export const collectionsData: Collection[] = [
  {
    id: "col_1",
    name: "FEMME",
    slug: "femme",
    description: "For the woman who moves through life with effortless grace.",
    coverImage: "https://picsum.photos/seed/aischmira-col-femme/900/1200",
    isFeatured: true,
    publishedAt: "2026-06-01T00:00:00Z",
  },
  {
    id: "col_2",
    name: "HER",
    slug: "her",
    description: "Pieces that celebrate the multifaceted strength of womanhood.",
    coverImage: "https://picsum.photos/seed/aischmira-col-her/900/1200",
    isFeatured: true,
    publishedAt: "2026-06-15T00:00:00Z",
  },
  {
    id: "col_3",
    name: "SHE",
    slug: "she",
    description: "A bold yet refined collection for the modern visionary.",
    coverImage: "https://picsum.photos/seed/aischmira-col-she/900/1200",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
  },
];
