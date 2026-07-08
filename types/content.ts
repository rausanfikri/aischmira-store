export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  position?: 'hero' | 'middle' | 'bottom';
}

export interface Homepage {
  heroBanner: Banner;
  featuredCollections: string[]; // Array of Collection IDs
  newArrivals: string[];         // Array of Product IDs
  promotionalBanners: Banner[];
  testimonials: Testimonial[];
}
