import { Homepage } from "@/types";

// Homepage menyatukan berbagai ID entitas, sehingga bertindak sebagai "View" layaknya page builder.
export const homepageData: Homepage = {
  heroBanner: {
    id: "hero_1",
    title: "Timeless Elegance",
    subtitle: "Discover our latest collection",
    imageUrl: "/hero/main-banner.jpg",
    ctaText: "Shop Now",
    ctaLink: "/collections/new-arrivals",
    position: "hero",
  },
  featuredCollections: ["col_1"], // Hanya menyimpan ID referensi agar scalable
  newArrivals: ["prod_1"],        // Hanya menyimpan ID referensi
  promotionalBanners: [],
  testimonials: [
    {
      id: "test_1",
      author: "Sarah",
      content: "The quality of the silk is amazing. Truly luxury in every stitch.",
      rating: 5,
    }
  ],
};
