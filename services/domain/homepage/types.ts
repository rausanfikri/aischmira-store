export interface HeroSection {
  title: string;
  subtitle: string;
  eyebrow: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
}

export interface CraftsmanshipPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  quote: string;
  rating: number;
}
