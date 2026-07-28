import { Collection } from "@/types";

export interface ExtendedCollection extends Collection {
  category: "newest" | "classic" | "scarf";
  story?: string;
  designerNotes?: string;
  materials?: string[];
}

export const collectionsData: ExtendedCollection[] = [
  // Newest Collections
  {
    id: "col_femme",
    name: "FEMME",
    slug: "femme",
    category: "newest",
    description: "For the woman who moves through life with effortless grace and quiet strength.",
    story: "Conceived as an ode to modern femininity, the FEMME edit pairs sculptural tailoring with liquid silk drapes.",
    designerNotes: "Focus on clean shoulder lines, unlined lightweight construction, and hand-stitched hem boundaries.",
    materials: ["100% Pure Mulberry Silk", "Fine Linen Weave", "Organic Mulberry Satin"],
    coverImage: "/images/products/placeholder.png",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
  },
  {
    id: "col_her",
    name: "HER",
    slug: "her",
    category: "newest",
    description: "Pieces that celebrate the multifaceted strength and elegance of womanhood.",
    story: "HER explores architectural volume and muted earthy tones, offering versatile separates that elevate daily rituals.",
    designerNotes: "Designed with subtle interior binding and custom horn buttons carved by local artisans.",
    materials: ["Heavyweight Silk Crepe", "Breathable Cotton Voile", "Italian Crepe de Chine"],
    coverImage: "/images/products/placeholder.png",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
  },
  {
    id: "col_she",
    name: "SHE",
    slug: "she",
    category: "newest",
    description: "A bold yet refined collection created for the modern visionary.",
    story: "SHE marries structured outerwear with delicate underpinnings, balancing power and softness in equal measure.",
    designerNotes: "Precision lapels, hidden magnetic closures, and hand-rolled borders define this landmark edit.",
    materials: ["Double-Faced Wool Silk", "Custom Jacquard Weave", "Habotai Silk Lining"],
    coverImage: "/images/products/placeholder.png",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
  },
  
  // Classic Collections
  {
    id: "col_bianca", name: "Bianca", slug: "bianca", category: "classic",
    description: "Timeless elegance defined by clean lines and luxurious silk satin.",
    story: "The Bianca capsule remains a cornerstone of the AISCHMIRA wardrobe.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_priscila", name: "Priscila", slug: "priscila", category: "classic",
    description: "Effortless silhouettes for the modern classic wardrobe.",
    story: "Tailored blazers and fluid trousers crafted for timeless longevity.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_safira", name: "Safira", slug: "safira", category: "classic",
    description: "Understated luxury with a focus on meticulous tailoring.",
    story: "Safira combines rich jewel undertones with breathable natural fibers.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_briana", name: "Briana", slug: "briana", category: "classic",
    description: "Sophisticated pieces designed for seamless day-to-night transitions.",
    story: "Minimalist dresses cut on the bias for fluid natural movement.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_tifani", name: "Tifani", slug: "tifani", category: "classic",
    description: "Feminine forms and gentle draping for everyday elegance.",
    story: "Relaxed silhouettes crafted to honor understated sophistication.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_zamira", name: "Zamira", slug: "zamira", category: "classic",
    description: "A celebration of classic prints and fluid movement.",
    story: "Intricate subtle motifs rendered on pure silk twill.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_gendis", name: "Gendis", slug: "gendis", category: "classic",
    description: "Indonesian heritage-inspired designs modernized for today.",
    story: "Blending traditional motif sensibilities with minimalist cuts.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_amara", name: "Amara", slug: "amara", category: "classic",
    description: "Structured forms meeting soft, premium textiles.",
    story: "Architectural seams and understated luxury finishing.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_dasya", name: "Dasya", slug: "dasya", category: "classic",
    description: "Relaxed yet refined everyday essentials.",
    story: "Pure cotton and linen coordinates designed for calm living.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_jolly", name: "Jolly", slug: "jolly", category: "classic",
    description: "Elevated loungewear for moments of luxurious rest.",
    story: "Silk pyjama sets and loungewear crafted with French seams.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_aveline", name: "Aveline", slug: "aveline", category: "classic",
    description: "Delicate details and romantic silhouettes.",
    story: "Whisper-light fabrics finished with subtle hand-stitching.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_luna", name: "Luna", slug: "luna", category: "classic",
    description: "Evening wear redefined with minimalist sensibilities.",
    story: "Clean monochromatic evening dresses cut from heavy silk crepe.",
    coverImage: "/images/products/placeholder.png",
  },

  // Scarf Collections
  {
    id: "col_am_monogram", name: "AM Monogram", slug: "am-monogram", category: "scarf",
    description: "Our signature monogram expressed on premium 100% silk twill.",
    story: "A heraldic emblem of AISCHMIRA craftsmanship, hand-rolled at the borders.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_floral_meadow", name: "Floral Meadow", slug: "floral-meadow", category: "scarf",
    description: "Intricate botanical illustrations in soft, muted palettes.",
    story: "Inspired by native Indonesian flora drawn in delicate linework.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_chili_chic", name: "Chili Chic", slug: "chili-chic", category: "scarf",
    description: "Vibrant accents for the bold minimalist.",
    story: "Rich terracotta and deep amber hues printed on fluid silk chiffon.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_garlic_bloom", name: "Garlic Bloom", slug: "garlic-bloom", category: "scarf",
    description: "Subtle organic patterns for everyday versatility.",
    story: "Earthy ivory and sage green tones suitable for draped styling.",
    coverImage: "/images/products/placeholder.png",
  },
  {
    id: "col_spice_blossom", name: "Spice Blossom", slug: "spice-blossom", category: "scarf",
    description: "Warm, earthy tones capturing the essence of nature.",
    story: "Deep cinnamon and saffron hues hand-printed on Mulberry silk.",
    coverImage: "/images/products/placeholder.png",
  }
];
