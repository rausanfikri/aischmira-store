import { Product } from "@/types";

// Disusun dengan arsitektur Parent-Child untuk Variants layaknya struktur WooCommerce.
export const productsData: Product[] = [
  {
    id: "prod_1",
    name: "Aura Silk Dress",
    slug: "aura-silk-dress",
    categoryId: "cat_dresses",
    collectionId: "col_1",
    description: "A premium silk dress designed for a flawless elegant look.",
    basePrice: 1500000,
    images: ["/products/aura-dress-1.jpg"],
    isFeatured: true,
    createdAt: "2026-07-01T00:00:00Z",
    updatedAt: "2026-07-01T00:00:00Z",
    variants: [
      {
        id: "var_1",
        sku: "AURA-SLK-GLD-S",
        color: "Gold",
        size: "S",
        price: 1500000,
        stock: 10,
        images: ["/products/aura-dress-gold.jpg"],
      },
    ],
  },
];
