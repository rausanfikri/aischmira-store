import { FooterNavigation } from "./types";
import { dummyFooterNav } from "./dummy";

export class NavigationService {
  static async getFooterNavigation(): Promise<FooterNavigation> {
    return dummyFooterNav;
  }
}
