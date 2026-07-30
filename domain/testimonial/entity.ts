export type TestimonialType =
  | 'EDITORIAL_QUOTE'
  | 'CUSTOMER_STORY'
  | 'PRESS_MENTION'
  | 'FEATURED_COMMUNITY';

export interface TestimonialAuthor {
  name: string;
  location?: string;
  avatar?: string;
  title?: string;
  verified?: boolean;
}

export interface Testimonial {
  id: string;
  author: TestimonialAuthor;
  quote: string;
  story?: string;
  purchasedCollection?: string;
  purchasedProduct?: string;
  type: TestimonialType;
  featured: boolean;
  rating?: number;
  date?: string;
}

export interface CommunityStat {
  id: string;
  value: string;
  label: string;
  description: string;
}
