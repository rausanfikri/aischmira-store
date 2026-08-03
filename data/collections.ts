export interface ExtendedCollection {
  id: string;
  name: string;
  slug: string;
  category: "newest" | "classic" | "scarf";
  title?: string;
  subtitle?: string;
  description: string;
  story?: string;
  designerNotes?: string;
  materials?: string[];
  coverImage: string;
  heroImage?: string;
  isFeatured?: boolean;
  publishedAt?: string;
  season?: string;
  campaignId?: string;
  campaignBadge?: string;
  bigSellerCollectionId?: string;
  productSkuList?: string[];
  ctaLabel?: string;
}

export const collectionsData: ExtendedCollection[] = [
  // Newest Collections
  {
    id: "col_femme",
    name: "FEMME",
    slug: "femme",
    category: "newest",
    subtitle: "Fluid Tailoring & Pure Silk Satin",
    description: "For the woman who moves through life with effortless grace and quiet strength.",
    story: "Conceived as an ode to modern femininity, the FEMME edit pairs sculptural tailoring with liquid silk drapes.",
    designerNotes: "Focus on clean shoulder lines, unlined lightweight construction, and hand-stitched hem boundaries.",
    materials: ["100% Pure Mulberry Silk", "Fine Linen Weave", "Organic Mulberry Satin"],
    coverImage: "/images/products/placeholder.png",
    heroImage: "/images/products/placeholder.png",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
    season: "Autumn / Winter 2026",
    campaignBadge: "Signature Edit",
    campaignId: "cmp_fw26_femme",
    bigSellerCollectionId: "BS_COL_FEMME_01",
    productSkuList: ["SKU-FEMME-001", "SKU-FEMME-002", "SKU-FEMME-003"],
    ctaLabel: "Explore FEMME Edit",
  },
  {
    id: "col_her",
    name: "HER",
    slug: "her",
    category: "newest",
    subtitle: "Architectural Volume & Muted Tones",
    description: "Pieces that celebrate the multifaceted strength and elegance of womanhood.",
    story: "HER explores architectural volume and muted earthy tones, offering versatile separates that elevate daily rituals.",
    designerNotes: "Designed with subtle interior binding and custom horn buttons carved by local artisans.",
    materials: ["Heavyweight Silk Crepe", "Breathable Cotton Voile", "Italian Crepe de Chine"],
    coverImage: "/images/products/placeholder.png",
    heroImage: "/images/products/placeholder.png",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
    season: "Resort / High Summer 2026",
    campaignBadge: "Capsule Edit",
    campaignId: "cmp_rs26_her",
    bigSellerCollectionId: "BS_COL_HER_02",
    productSkuList: ["SKU-HER-001", "SKU-HER-002"],
    ctaLabel: "View HER Edit",
  },
  {
    id: "col_she",
    name: "SHE",
    slug: "she",
    category: "newest",
    subtitle: "Basque Waist Silhouette & Puff Sleeves",
    description: "A vintage-inspired luxury collection featuring fitted basque waist architecture, front covered buttons, and fluid gathered drapes.",
    story: "SHE marries structured basque tailoring with delicate puff sleeves, balancing power and softness in equal measure.",
    designerNotes: "Precision waist seam contouring, custom hand-covered fabric buttons, and hand-rolled borders define this landmark edit.",
    materials: ["100% Premium Silk Satin", "Habotai Silk Lining", "Custom Fabric-Covered Buttons"],
    coverImage: "/images/products/she-dress/she-dress-hero-white-01.jpg",
    heroImage: "/images/products/she-dress/she-dress-hero-white-01.jpg",
    isFeatured: true,
    publishedAt: "2026-07-01T00:00:00Z",
    season: "Spring / Summer 2026",
    campaignBadge: "Heritage Edit",
    campaignId: "cmp_ss26_she",
    bigSellerCollectionId: "BS_COL_SHE_03",
    productSkuList: ["SHE-001-WHT", "SHE-001-BLK", "SHE-001-IVR", "SHE-001-RED", "SHE-001-PNK"],
    ctaLabel: "Discover SHE Edit",
  },
  
  // Classic Collections
  {
    id: "col_bianca", name: "Bianca", slug: "bianca", category: "classic",
    subtitle: "Pure White Silk & Clean Lines",
    description: "Timeless elegance defined by clean lines and luxurious silk satin.",
    story: "The Bianca capsule remains a cornerstone of the AISCHMIRA wardrobe.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    campaignBadge: "Classic Core",
    bigSellerCollectionId: "BS_COL_BIANCA",
  },
  {
    id: "col_priscila", name: "Priscila", slug: "priscila", category: "classic",
    subtitle: "Tailored Blazers & Fluid Trousers",
    description: "Effortless silhouettes for the modern classic wardrobe.",
    story: "Tailored blazers and fluid trousers crafted for timeless longevity.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    campaignBadge: "Tailored Series",
    bigSellerCollectionId: "BS_COL_PRISCILA",
  },
  {
    id: "col_safira", name: "Safira", slug: "safira", category: "classic",
    subtitle: "Jewel Undertones & Natural Fibers",
    description: "Understated luxury with a focus on meticulous tailoring.",
    story: "Safira combines rich jewel undertones with breathable natural fibers.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    campaignBadge: "Classic Core",
    bigSellerCollectionId: "BS_COL_SAFIRA",
  },
  {
    id: "col_briana", name: "Briana", slug: "briana", category: "classic",
    subtitle: "Bias-Cut Silk Dresses",
    description: "Sophisticated pieces designed for seamless day-to-night transitions.",
    story: "Minimalist dresses cut on the bias for fluid natural movement.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    campaignBadge: "Evening Series",
    bigSellerCollectionId: "BS_COL_BRIANA",
  },
  {
    id: "col_tifani", name: "Tifani", slug: "tifani", category: "classic",
    subtitle: "Soft Draping & Daily Sophistication",
    description: "Feminine forms and gentle draping for everyday elegance.",
    story: "Relaxed silhouettes crafted to honor understated sophistication.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    bigSellerCollectionId: "BS_COL_TIFANI",
  },
  {
    id: "col_zamira", name: "Zamira", slug: "zamira", category: "classic",
    subtitle: "Subtle Heritage Motifs",
    description: "A celebration of classic prints and fluid movement.",
    story: "Intricate subtle motifs rendered on pure silk twill.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    bigSellerCollectionId: "BS_COL_ZAMIRA",
  },
  {
    id: "col_gendis", name: "Gendis", slug: "gendis", category: "classic",
    subtitle: "Indonesian Lineage Modernized",
    description: "Indonesian heritage-inspired designs modernized for today.",
    story: "Blending traditional motif sensibilities with minimalist cuts.",
    coverImage: "/images/products/placeholder.png",
    season: "Heritage Collection",
    campaignBadge: "Artisanal Series",
    bigSellerCollectionId: "BS_COL_GENDIS",
  },
  {
    id: "col_amara", name: "Amara", slug: "amara", category: "classic",
    subtitle: "Architectural Seams & Soft Forms",
    description: "Structured forms meeting soft, premium textiles.",
    story: "Architectural seams and understated luxury finishing.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    bigSellerCollectionId: "BS_COL_AMARA",
  },
  {
    id: "col_dasya", name: "Dasya", slug: "dasya", category: "classic",
    subtitle: "Organic Linen Coordinates",
    description: "Relaxed yet refined everyday essentials.",
    story: "Pure cotton and linen coordinates designed for calm living.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    bigSellerCollectionId: "BS_COL_DASYA",
  },
  {
    id: "col_jolly", name: "Jolly", slug: "jolly", category: "classic",
    subtitle: "French-Seamed Silk Loungewear",
    description: "Elevated loungewear for moments of luxurious rest.",
    story: "Silk pyjama sets and loungewear crafted with French seams.",
    coverImage: "/images/products/placeholder.png",
    season: "Loungewear Core",
    campaignBadge: "Privé Resting",
    bigSellerCollectionId: "BS_COL_JOLLY",
  },
  {
    id: "col_aveline", name: "Aveline", slug: "aveline", category: "classic",
    subtitle: "Whisper-Light Hand-Stitched Details",
    description: "Delicate details and romantic silhouettes.",
    story: "Whisper-light fabrics finished with subtle hand-stitching.",
    coverImage: "/images/products/placeholder.png",
    season: "Permanent Collection",
    bigSellerCollectionId: "BS_COL_AVELINE",
  },
  {
    id: "col_luna", name: "Luna", slug: "luna", category: "classic",
    subtitle: "Monochromatic Heavy Silk Crepe",
    description: "Evening wear redefined with minimalist sensibilities.",
    story: "Clean monochromatic evening dresses cut from heavy silk crepe.",
    coverImage: "/images/products/placeholder.png",
    season: "Evening Edition",
    campaignBadge: "Nocturne Series",
    bigSellerCollectionId: "BS_COL_LUNA",
  },

  // Scarf Collections
  {
    id: "col_am_monogram", name: "AM Monogram", slug: "am-monogram", category: "scarf",
    subtitle: "Hand-Rolled 100% Silk Twill Emblem",
    description: "Our signature monogram expressed on premium 100% silk twill.",
    story: "A heraldic emblem of AISCHMIRA craftsmanship, hand-rolled at the borders.",
    coverImage: "/images/products/placeholder.png",
    season: "Atelier Signature",
    campaignBadge: "Iconic Scarf",
    bigSellerCollectionId: "BS_COL_MONOGRAM",
  },
  {
    id: "col_floral_meadow", name: "Floral Meadow", slug: "floral-meadow", category: "scarf",
    subtitle: "Botanical Linework & Muted Palette",
    description: "Intricate botanical illustrations in soft, muted palettes.",
    story: "Inspired by native Indonesian flora drawn in delicate linework.",
    coverImage: "/images/products/placeholder.png",
    season: "Flora Edition",
    bigSellerCollectionId: "BS_COL_MEADOW",
  },
  {
    id: "col_chili_chic", name: "Chili Chic", slug: "chili-chic", category: "scarf",
    subtitle: "Terracotta & Deep Amber Silk Chiffon",
    description: "Vibrant accents for the bold minimalist.",
    story: "Rich terracotta and deep amber hues printed on fluid silk chiffon.",
    coverImage: "/images/products/placeholder.png",
    season: "Color Edit",
    bigSellerCollectionId: "BS_COL_CHILI",
  },
  {
    id: "col_garlic_bloom", name: "Garlic Bloom", slug: "garlic-bloom", category: "scarf",
    subtitle: "Earthy Ivory & Sage Green Tones",
    description: "Subtle organic patterns for everyday versatility.",
    story: "Earthy ivory and sage green tones suitable for draped styling.",
    coverImage: "/images/products/placeholder.png",
    season: "Organic Edit",
    bigSellerCollectionId: "BS_COL_GARLIC",
  },
  {
    id: "col_spice_blossom", name: "Spice Blossom", slug: "spice-blossom", category: "scarf",
    subtitle: "Hand-Printed Cinnamon & Saffron Mulberry Silk",
    description: "Warm, earthy tones capturing the essence of nature.",
    story: "Deep cinnamon and saffron hues hand-printed on Mulberry silk.",
    coverImage: "/images/products/placeholder.png",
    season: "Spice Edition",
    bigSellerCollectionId: "BS_COL_SPICE",
  }
];
