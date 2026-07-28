import { HeroSection, CraftsmanshipPillar, Testimonial } from "./types";
import { dummyHero, dummyPillars, dummyTestimonials } from "./dummy";

export class HomepageService {
  static async getHero(): Promise<HeroSection> {
    return dummyHero;
  }

  static async getCraftsmanshipPillars(): Promise<CraftsmanshipPillar[]> {
    return dummyPillars;
  }

  static async getTestimonials(): Promise<Testimonial[]> {
    return dummyTestimonials;
  }
}
