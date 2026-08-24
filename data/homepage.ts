import { Homepage } from "@/types";

export const homepageData: Homepage = {
  heroBanner: {
    id: "hero_1",
    title: "NEW COLLECTION",
    subtitle: "FEMME • HER • SHE — Flagship 2026",
    imageUrl: "/images/hero/hero-bg.png",
    ctaText: "SHOP NOW",
    ctaLink: "/products",
    position: "hero",
  },
  featuredCollections: ["col_she", "col_femme", "col_her"],
  newArrivals: ["prod_28", "prod_22", "prod_25", "prod_1"],
  promotionalBanners: [],
  testimonials: [],
};

export const lookbookImages = [
  {
    id: "look_1",
    imageUrl: "/images/products/she-dress/she-dress-hero-white-01.jpg",
    alt: "AISCHMIRA SHE Basque Waist Silk Dress",
  },
  {
    id: "look_2",
    imageUrl: "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
    alt: "AISCHMIRA Lifestyle Blush Pink Silk",
  },
  {
    id: "look_3",
    imageUrl: "/images/products/she-dress/she-dress-front-black-01.jpg",
    alt: "AISCHMIRA Classic Noir Silk Silhouette",
  },
  {
    id: "look_4",
    imageUrl: "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
    alt: "AISCHMIRA Editorial Crimson Silk Silhouette",
  },
];

export const instagramImages = [
  { id: "ig_1", imageUrl: "/images/products/she-dress/she-dress-hero-white-01.jpg", alt: "AISCHMIRA on Instagram @aischmira" },
  { id: "ig_2", imageUrl: "/images/products/she-dress/she-dress-front-black-01.jpg", alt: "AISCHMIRA on Instagram @aischmira" },
  { id: "ig_3", imageUrl: "/images/products/she-dress/she-dress-editorial-crimson-01.jpg", alt: "AISCHMIRA on Instagram @aischmira" },
  { id: "ig_4", imageUrl: "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg", alt: "AISCHMIRA on Instagram @aischmira" },
];
