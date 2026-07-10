import { Homepage } from "@/types";

// Homepage menyatukan berbagai ID entitas, sehingga bertindak sebagai "View" layaknya page builder.
// Placeholder images menggunakan picsum.photos — ganti dengan foto asli saat production.
export const homepageData: Homepage = {
  heroBanner: {
    id: "hero_1",
    title: "Timeless Elegance",
    subtitle: "Discover our latest collection — crafted for the modern woman.",
    imageUrl: "https://picsum.photos/seed/aischmira-hero/1920/1080",
    ctaText: "Explore Collection",
    ctaLink: "/collections",
    position: "hero",
  },
  featuredCollections: ["col_1", "col_2", "col_3"],
  newArrivals: ["prod_1", "prod_2", "prod_3", "prod_4"],
  promotionalBanners: [],
  testimonials: [
    {
      id: "test_1",
      author: "Sarah M.",
      role: "Fashion Stylist",
      content: "The quality of the silk is amazing. Truly luxury in every stitch.",
      rating: 5,
    },
    {
      id: "test_2",
      author: "Rina A.",
      role: "Creative Director",
      content: "AISCHMIRA has become my go-to brand for editorial looks. Effortless and refined.",
      rating: 5,
    },
    {
      id: "test_3",
      author: "Devina K.",
      role: "Entrepreneur",
      content: "Finally, a brand that truly understands the modern Indonesian woman.",
      rating: 5,
    },
  ],
};

// Placeholder lookbook images — ganti dengan foto editorial asli saat production.
export const lookbookImages = [
  {
    id: "look_1",
    imageUrl: "https://picsum.photos/seed/aischmira-look-1/800/1000",
    alt: "AISCHMIRA Lookbook — Summer Elegance",
  },
  {
    id: "look_2",
    imageUrl: "https://picsum.photos/seed/aischmira-look-2/600/900",
    alt: "AISCHMIRA Lookbook — Editorial Detail",
  },
  {
    id: "look_3",
    imageUrl: "https://picsum.photos/seed/aischmira-look-3/900/600",
    alt: "AISCHMIRA Lookbook — Street Style",
  },
  {
    id: "look_4",
    imageUrl: "https://picsum.photos/seed/aischmira-look-4/700/900",
    alt: "AISCHMIRA Lookbook — Portrait",
  },
  {
    id: "look_5",
    imageUrl: "https://picsum.photos/seed/aischmira-look-5/800/600",
    alt: "AISCHMIRA Lookbook — Campaign",
  },
];

// Placeholder Instagram preview images — ganti dengan foto Instagram asli saat production.
export const instagramImages = [
  { id: "ig_1", imageUrl: "https://picsum.photos/seed/aischmira-ig-1/600/600", alt: "AISCHMIRA on Instagram" },
  { id: "ig_2", imageUrl: "https://picsum.photos/seed/aischmira-ig-2/600/600", alt: "AISCHMIRA on Instagram" },
  { id: "ig_3", imageUrl: "https://picsum.photos/seed/aischmira-ig-3/600/600", alt: "AISCHMIRA on Instagram" },
  { id: "ig_4", imageUrl: "https://picsum.photos/seed/aischmira-ig-4/600/600", alt: "AISCHMIRA on Instagram" },
  { id: "ig_5", imageUrl: "https://picsum.photos/seed/aischmira-ig-5/600/600", alt: "AISCHMIRA on Instagram" },
  { id: "ig_6", imageUrl: "https://picsum.photos/seed/aischmira-ig-6/600/600", alt: "AISCHMIRA on Instagram" },
];
