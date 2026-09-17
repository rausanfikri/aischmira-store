import type { ProductMedia } from "@/types/catalog";

/**
 * Existing project photographs, associated with master colors by the original
 * media mapping. Butter Yellow deliberately has no image: its former white
 * photograph was an incorrect fallback. Never fall back to another color.
 */
export const productMedia: Record<string, Record<string, ProductMedia[]>> = {
  "she-dress": {
    Black: [
      {
        src: "/images/products/she-dress/she-dress-front-black-01.jpg",
        alt: "She Dress in Black, front view",
        width: 731,
        height: 1024,
      },
    ],
    Maroon: [
      {
        src: "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
        alt: "She Dress in Maroon",
        width: 731,
        height: 1024,
      },
    ],
    "Baby Pink": [
      {
        src: "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
        alt: "She Dress in Baby Pink",
        width: 731,
        height: 1024,
      },
    ],
    "Broken White": [
      {
        src: "/images/products/she-dress/she-dress-hero-white-01.jpg",
        alt: "She Dress in Broken White, front view",
        width: 731,
        height: 1024,
      },
      {
        src: "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg",
        alt: "She Dress in Broken White, outdoor view",
        width: 731,
        height: 1024,
      },
    ],
  },
};
