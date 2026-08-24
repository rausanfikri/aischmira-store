export interface ExtendedCollection {
  id: string;
  name: string;
  slug: string;
  category: "newest" | "classic" | "scarf";
  title?: string;
  subtitle?: string;
  description: string;
  story?: string;
  coverImage: string;
  heroImage?: string;
  isFeatured?: boolean;
  productCount?: number;
  products?: string[];
}

/**
 * Authoritative 20 Collections derived from MASTER PRODUCTS.xlsx -> DASHBOARD
 */
export const collectionsData: ExtendedCollection[] = [
  {
    "id": "col_bianca",
    "name": "Bianca",
    "slug": "bianca",
    "category": "classic",
    "description": "The Bianca collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Bianca pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 2,
    "products": [
      "bianca-blazer",
      "bianca-obie"
    ]
  },
  {
    "id": "col_priscila",
    "name": "Priscila",
    "slug": "priscila",
    "category": "classic",
    "description": "The Priscila collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Priscila pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "priscila-pleated-pants"
    ]
  },
  {
    "id": "col_safira",
    "name": "Safira",
    "slug": "safira",
    "category": "classic",
    "description": "The Safira collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Safira pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 2,
    "products": [
      "safira-top",
      "safira-skirt"
    ]
  },
  {
    "id": "col_briana",
    "name": "Briana",
    "slug": "briana",
    "category": "classic",
    "description": "The Briana collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Briana pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "briana-blouse"
    ]
  },
  {
    "id": "col_tifani",
    "name": "Tifani",
    "slug": "tifani",
    "category": "classic",
    "description": "The Tifani collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Tifani pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "tifani-trousers"
    ]
  },
  {
    "id": "col_zamira",
    "name": "Zamira",
    "slug": "zamira",
    "category": "classic",
    "description": "The Zamira collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Zamira pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "zamira-long-dress"
    ]
  },
  {
    "id": "col_gendis",
    "name": "Gendis",
    "slug": "gendis",
    "category": "classic",
    "description": "The Gendis collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Gendis pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "gendis-top"
    ]
  },
  {
    "id": "col_amara",
    "name": "Amara",
    "slug": "amara",
    "category": "classic",
    "description": "The Amara collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Amara pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "amara-skirt"
    ]
  },
  {
    "id": "col_dasya",
    "name": "Dasya",
    "slug": "dasya",
    "category": "classic",
    "description": "The Dasya collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Dasya pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 2,
    "products": [
      "dasya-blouse",
      "dasya-trousers"
    ]
  },
  {
    "id": "col_jolly",
    "name": "Jolly",
    "slug": "jolly",
    "category": "classic",
    "description": "The Jolly collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Jolly pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 2,
    "products": [
      "jolly-long-sleeve-top-pants",
      "jolly-short-sleeve-top-shorts"
    ]
  },
  {
    "id": "col_aveline",
    "name": "Aveline",
    "slug": "aveline",
    "category": "classic",
    "description": "The Aveline collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Aveline pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "aveline-shirt"
    ]
  },
  {
    "id": "col_luna",
    "name": "Luna",
    "slug": "luna",
    "category": "classic",
    "description": "The Luna collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Luna pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "luna-pants"
    ]
  },
  {
    "id": "col_am-monogram",
    "name": "Am Monogram",
    "slug": "am-monogram",
    "category": "scarf",
    "description": "The Am Monogram collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Am Monogram pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "am-monogram-scarf"
    ]
  },
  {
    "id": "col_floral-meadow",
    "name": "Floral Meadow",
    "slug": "floral-meadow",
    "category": "scarf",
    "description": "The Floral Meadow collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Floral Meadow pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "floral-meadow-scarf"
    ]
  },
  {
    "id": "col_chili-chic",
    "name": "Chili Chic",
    "slug": "chili-chic",
    "category": "scarf",
    "description": "The Chili Chic collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Chili Chic pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "chili-chic-scarf"
    ]
  },
  {
    "id": "col_garlic-bloom",
    "name": "Garlic Bloom",
    "slug": "garlic-bloom",
    "category": "scarf",
    "description": "The Garlic Bloom collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Garlic Bloom pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "garlic-bloom-scarf"
    ]
  },
  {
    "id": "col_spice-blossom",
    "name": "Spice Blossom",
    "slug": "spice-blossom",
    "category": "scarf",
    "description": "The Spice Blossom collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Spice Blossom pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": false,
    "productCount": 1,
    "products": [
      "spice-blossom-scarf"
    ]
  },
  {
    "id": "col_femme",
    "name": "Femme",
    "slug": "femme",
    "category": "newest",
    "description": "The Femme collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Femme pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": true,
    "productCount": 3,
    "products": [
      "femme-outer",
      "femme-tank-top",
      "femme-skirt"
    ]
  },
  {
    "id": "col_her",
    "name": "Her",
    "slug": "her",
    "category": "newest",
    "description": "The Her collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, Her pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/placeholder.png",
    "isFeatured": true,
    "productCount": 3,
    "products": [
      "her-long-sleeve-top",
      "her-short-sleeve-top",
      "her-pants"
    ]
  },
  {
    "id": "col_she",
    "name": "She",
    "slug": "she",
    "category": "newest",
    "description": "The She collection by AISCHMIRA \u2014 crafted with exquisite attention to silhouette, texture, and tailoring.",
    "story": "Conceived as an homage to modern femininity and timeless aesthetics, She pairs graceful lines with tactile fabrications.",
    "coverImage": "/images/products/she-dress/she-dress-hero-white-01.jpg",
    "isFeatured": true,
    "productCount": 1,
    "products": [
      "she-dress"
    ]
  }
];
