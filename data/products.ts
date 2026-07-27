import { Product } from "@/types";

const MOCK_VARIANTS = [
  { id: "v1", sku: "SKU-001", color: "Beige", size: "S", price: 0, stock: 10, images: ["/images/products/placeholder.png"] },
  { id: "v2", sku: "SKU-002", color: "Beige", size: "M", price: 0, stock: 5, images: ["/images/products/placeholder.png"] },
  { id: "v3", sku: "SKU-003", color: "Beige", size: "L", price: 0, stock: 2, images: ["/images/products/placeholder.png"] },
];

const COMMON_PRODUCT_DATA = {
  material: "100% Premium Silk. Crafted from the finest mulberry silk, offering a luxurious drape and a soft, lustrous finish that feels incredible against the skin.",
  careInstruction: "Dry clean only. Do not bleach. Iron on low heat. Store in a cool, dry place away from direct sunlight.",
  shippingInfo: "Complimentary express shipping on all orders. Delivered in our signature AISCHMIRA packaging. Returns accepted within 14 days.",
  story: "Inspired by the quiet confidence of the modern woman, this piece is designed to be a versatile staple in your wardrobe. The fluid silhouette flatters every form, while the impeccable tailoring ensures it stands the test of time.",
  images: ["/images/products/placeholder.png", "/images/products/placeholder.png", "/images/products/placeholder.png"],
  createdAt: "2026-07-01T00:00:00Z",
  updatedAt: "2026-07-01T00:00:00Z",
};

export const productsData: Product[] = [
  {
    id: "prod_1", name: "Bianca Silk Dress", slug: "bianca-silk-dress", sku: "BNC-001",
    categoryId: "Dress", collectionId: "col_bianca",
    description: "An elegant, floor-length silk dress featuring a subtle cowl neckline and an open back design.",
    basePrice: 1250000,
    isFeatured: true,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 1250000, id: `v_${Math.random()}` })),
    relatedProductIds: ["prod_2", "prod_3", "prod_4"],
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_2", name: "Priscila Tailored Blazer", slug: "priscila-tailored-blazer", sku: "PRS-001",
    categoryId: "Outerwear", collectionId: "col_priscila",
    description: "A masterclass in modern tailoring. This oversized blazer offers a relaxed yet incredibly polished silhouette.",
    basePrice: 1850000,
    isFeatured: true,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 1850000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_3", name: "Safira Wide Leg Trousers", slug: "safira-wide-leg-trousers", sku: "SFR-001",
    categoryId: "Bottoms", collectionId: "col_safira",
    description: "High-waisted wide-leg trousers that elongate the leg and provide unparalleled comfort.",
    basePrice: 950000,
    isFeatured: true,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 950000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_4", name: "AM Monogram Silk Scarf", slug: "am-monogram-silk-scarf", sku: "AM-001",
    categoryId: "Accessories", collectionId: "col_am_monogram",
    description: "Our signature monogram printed on a generous 90x90cm pure silk canvas.",
    basePrice: 450000,
    isFeatured: true,
    variants: [{ id: "v_4", sku: "AM-001-OS", color: "Monogram", size: "OS", price: 450000, stock: 20, images: ["/images/products/placeholder.png"] }],
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_5", name: "Femme Structured Coat", slug: "femme-structured-coat", sku: "FEM-001",
    categoryId: "Outerwear", collectionId: "col_femme",
    description: "A statement piece for the colder months, crafted from a luxurious wool blend.",
    basePrice: 2450000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 2450000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_6", name: "Her Minimalist Top", slug: "her-minimalist-top", sku: "HER-001",
    categoryId: "Tops", collectionId: "col_her",
    description: "An elevated everyday essential. This minimalist top features clean lines and a subtle sheen.",
    basePrice: 750000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 750000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_7", name: "She Draped Skirt", slug: "she-draped-skirt", sku: "SHE-001",
    categoryId: "Bottoms", collectionId: "col_she",
    description: "A beautifully draped midi skirt that moves fluidly with every step.",
    basePrice: 890000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 890000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_8", name: "Jolly Lounge Set", slug: "jolly-lounge-set", sku: "JLY-001",
    categoryId: "Long Pyjama Set", collectionId: "col_jolly",
    description: "Luxurious loungewear. A two-piece set featuring a relaxed top and wide-leg trousers.",
    basePrice: 1350000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 1350000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_9", name: "Floral Meadow Scarf", slug: "floral-meadow-scarf", sku: "FLR-001",
    categoryId: "Accessories", collectionId: "col_floral_meadow",
    description: "A delicate floral print that adds a touch of romance to any ensemble.",
    basePrice: 450000,
    variants: [{ id: "v_9", sku: "FLR-001-OS", color: "Floral", size: "OS", price: 450000, stock: 15, images: ["/images/products/placeholder.png"] }],
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_10", name: "Luna Evening Gown", slug: "luna-evening-gown", sku: "LNA-001",
    categoryId: "Dress", collectionId: "col_luna",
    description: "A breathtaking gown designed for unforgettable nights. Features a dramatic side slit and elegant ruching.",
    basePrice: 2850000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 2850000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_11", name: "Aveline Lace Camisole", slug: "aveline-lace-camisole", sku: "AVL-001",
    categoryId: "Tops", collectionId: "col_aveline",
    description: "A delicate silk camisole finished with intricate Chantilly lace.",
    basePrice: 650000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 650000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_12", name: "Dasya Classic Shirt", slug: "dasya-classic-shirt", sku: "DSY-001",
    categoryId: "Tops", collectionId: "col_dasya",
    description: "The quintessential white shirt, elevated through impeccable tailoring and premium fabrics.",
    basePrice: 850000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 850000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_13", name: "Gendis Belted Dress", slug: "gendis-belted-dress", sku: "GND-001",
    categoryId: "Dress", collectionId: "col_gendis",
    description: "A versatile midi dress featuring a waist-defining belt and elegant pleat details.",
    basePrice: 1150000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 1150000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_14", name: "Zamira Wrap Top", slug: "zamira-wrap-top", sku: "ZMR-001",
    categoryId: "Tops", collectionId: "col_zamira",
    description: "A flattering wrap top that cinches at the waist, creating a beautiful feminine silhouette.",
    basePrice: 790000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 790000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_15", name: "Tifani Pleated Skirt", slug: "tifani-pleated-skirt", sku: "TFN-001",
    categoryId: "Bottoms", collectionId: "col_tifani",
    description: "A classic sunray pleated skirt that offers beautiful movement.",
    basePrice: 920000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 920000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_16", name: "Briana Trench Coat", slug: "briana-trench-coat", sku: "BRN-001",
    categoryId: "Outerwear", collectionId: "col_briana",
    description: "A modern interpretation of the classic trench, featuring a fluid drape and oversized lapels.",
    basePrice: 2150000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 2150000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_17", name: "Amara Culottes", slug: "amara-culottes", sku: "AMR-001",
    categoryId: "Bottoms", collectionId: "col_amara",
    description: "Wide-leg culottes that offer the comfort of trousers with the elegance of a skirt.",
    basePrice: 850000,
    variants: MOCK_VARIANTS.map(v => ({ ...v, price: 850000, id: `v_${Math.random()}` })),
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_18", name: "Chili Chic Scarf", slug: "chili-chic-scarf", sku: "CHL-001",
    categoryId: "Accessories", collectionId: "col_chili_chic",
    description: "A bold, vibrant scarf designed to be the focal point of any outfit.",
    basePrice: 450000,
    variants: [{ id: "v_18", sku: "CHL-001-OS", color: "Red", size: "OS", price: 450000, stock: 25, images: ["/images/products/placeholder.png"] }],
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_19", name: "Garlic Bloom Scarf", slug: "garlic-bloom-scarf", sku: "GRL-001",
    categoryId: "Accessories", collectionId: "col_garlic_bloom",
    description: "Subtle botanical motifs on a creamy white base. Effortlessly chic.",
    basePrice: 450000,
    variants: [{ id: "v_19", sku: "GRL-001-OS", color: "White", size: "OS", price: 450000, stock: 12, images: ["/images/products/placeholder.png"] }],
    ...COMMON_PRODUCT_DATA
  },
  {
    id: "prod_20", name: "Spice Blossom Scarf", slug: "spice-blossom-scarf", sku: "SPC-001",
    categoryId: "Accessories", collectionId: "col_spice_blossom",
    description: "Warm terracotta and gold tones create a mesmerizing pattern inspired by nature.",
    basePrice: 450000,
    variants: [{ id: "v_20", sku: "SPC-001-OS", color: "Terracotta", size: "OS", price: 450000, stock: 8, images: ["/images/products/placeholder.png"] }],
    ...COMMON_PRODUCT_DATA
  }
];
