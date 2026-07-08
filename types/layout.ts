export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[]; // For dropdown menus
}

export interface Navigation {
  mainNav: NavItem[];
  utilityNav: NavItem[]; // e.g., Search, Cart, Account
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface Footer {
  brandDescription: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: NavItem[];
  copyright: string;
}
