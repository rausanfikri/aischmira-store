import { HeroSection, CraftsmanshipPillar, Testimonial } from "./types";

export const dummyHero: HeroSection = {
  title: "Crafted to comfort.\nDesigned to stand out.",
  subtitle: "Timeless silhouettes, pure silk, and modern Indonesian craftsmanship.",
  eyebrow: "AISCHMIRA • FLAGSHIP 2026",
  primaryCtaText: "Shop Collection",
  primaryCtaLink: "/collections",
  secondaryCtaText: "Our Story",
  secondaryCtaLink: "/about",
  bgImage: "/images/hero/hero-bg.png",
};

export const dummyPillars: CraftsmanshipPillar[] = [
  { title: "100% Pure Mulberry Silk", description: "Sourced from master weavers, offering a liquid-like drape, natural breathability, and subtle lustre.", iconName: "Gem" },
  { title: "Hand-Rolled Hem Boundaries", description: "Every scarf edge and garment hem is finished by hand using traditional Indonesian embroidery techniques.", iconName: "Scissors" },
  { title: "Precision Architectural Cut", description: "Pattern pieces are hand-cut individually to honor the natural grain line of fine silk and wool.", iconName: "Sparkles" },
  { title: "Crafted in Indonesia", description: "Designed and hand-assembled in small batches in Indonesia, empowering local women artisans.", iconName: "Heart" },
];

export const dummyTestimonials: Testimonial[] = [
  { id: "1", author: "Victoria Valence", city: "Jakarta", quote: "The Mulberry silk drape is completely unmatched. Elegance in every seam.", rating: 5 },
  { id: "2", author: "Siti Rahma", city: "Surabaya", quote: "Order via WhatsApp was seamless and delivered in luxury gift packaging within 2 days.", rating: 5 },
];
