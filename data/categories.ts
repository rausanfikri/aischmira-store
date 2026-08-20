export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  isFeatured: boolean;
  sortOrder: number;
}

/**
 * Authoritative 6 Top-Level Categories for AISCHMIRA.STORE
 */
export const categoriesData: CategoryItem[] = [
  {
    id: "cat_outerwear",
    slug: "outerwear",
    name: "Outerwear",
    description: "Architectural blazers, tailored vests, and editorial outer layers.",
    image: "/images/products/placeholder.png",
    isFeatured: true,
    sortOrder: 1,
  },
  {
    id: "cat_tops",
    slug: "tops",
    name: "Tops",
    description: "Fluid blouses, draped tops, and classic tailored shirts.",
    image: "/images/products/placeholder.png",
    isFeatured: true,
    sortOrder: 2,
  },
  {
    id: "cat_bottoms",
    slug: "bottoms",
    name: "Bottoms",
    description: "High-waist trousers, pleated palazzo pants, and sculptural skirts.",
    image: "/images/products/placeholder.png",
    isFeatured: true,
    sortOrder: 3,
  },
  {
    id: "cat_dress",
    slug: "dress",
    name: "Dress",
    description: "Artisanal cotton gowns, silk midi silhouettes, and evening dresses.",
    image: "/images/products/she-dress/she-dress-hero-white-01.jpg",
    isFeatured: true,
    sortOrder: 4,
  },
  {
    id: "cat_pyjamas",
    slug: "pyjamas",
    name: "Pyjamas",
    description: "Luxury loungewear, silk short sets, and relaxed sleepwear.",
    image: "/images/products/placeholder.png",
    isFeatured: true,
    sortOrder: 5,
  },
  {
    id: "cat_accessories",
    slug: "accessories",
    name: "Accessories",
    description: "Botanical spice silk scarves, monogram squares, and tailored obi belts.",
    image: "/images/products/placeholder.png",
    isFeatured: true,
    sortOrder: 6,
  },
];
