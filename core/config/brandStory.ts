import { BrandStoryConfig, BrandStoryConfigSchema } from './schema';

const brandStoryConfigData: BrandStoryConfig = {
  header: {
    eyebrow: "The Brand Philosophy",
    title: "The AISCHMIRA Narrative",
    subtitle: "Where understated elegance meets Indonesian heritage and pure silk perfection.",
  },
  blocks: [
    {
      id: "block_philosophy",
      type: "philosophy",
      eyebrow: "Brand Philosophy",
      title: "The Art of Quiet Sophistication",
      quote: "Minimalism is not the absence of detail, but the presence of perfection.",
      paragraphs: [
        "AISCHMIRA is a luxury fashion house dedicated to crafting timeless apparel for the modern visionary. Conceived with an unwavering dedication to pure mulberry silk, architectural tailoring, and quiet sophistication.",
        "Proudly designed and hand-assembled in Indonesia, each garment celebrates the harmony of raw natural textures, precise lines, and effortless comfort.",
      ],
      cta: {
        label: "Discover Brand Story",
        href: "/about",
      },
      image: {
        src: "/images/products/placeholder.png",
        alt: "AISCHMIRA Heritage Atelier Craftsmanship",
        caption: "Handcrafted in Indonesia",
        aspectRatio: "portrait",
      },
      layoutOrder: "image-left",
    },
    {
      id: "block_craftsmanship",
      type: "craftsmanship",
      eyebrow: "Master Craftsmanship",
      title: "Hand-Assembly & Heritage Textiles",
      headline: "Hand-assembled in Indonesia by master women artisans.",
      paragraphs: [
        "From hand-rolled mulberry silk hems to blind-stitched interior seams, our garments are built with meticulous attention to structural longevity and tactile luxury.",
        "We empower local artisan studios, blending generational handloom expertise with contemporary architectural cuts for modern everyday confidence.",
      ],
      cta: {
        label: "Explore Collections",
        href: "/collections",
      },
      image: {
        src: "/images/products/placeholder.png",
        alt: "AISCHMIRA Master Artisan Hand-Stitching",
        caption: "Artisanal Silk Tailoring",
        aspectRatio: "landscape",
      },
      layoutOrder: "image-right",
    },
  ],
  pillars: [
    {
      id: "pillar_craft",
      icon: "Scissors",
      title: "Artisanal Craftsmanship",
      description: "Hand-rolled hems & blind interior stitching",
    },
    {
      id: "pillar_materials",
      icon: "Gem",
      title: "Premium Materials",
      description: "100% Pure Grade-6A Mulberry Silk & Linen",
    },
    {
      id: "pillar_indonesia",
      icon: "Heart",
      title: "Designed in Indonesia",
      description: "Empowering local women artisan studios",
    },
    {
      id: "pillar_elegance",
      icon: "Compass",
      title: "Timeless Elegance",
      description: "Restrained cuts designed to transcend trends",
    },
  ],
};

export const BRAND_STORY_CONFIG: BrandStoryConfig = BrandStoryConfigSchema.parse(brandStoryConfigData);
