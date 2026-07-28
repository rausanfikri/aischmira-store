export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface FooterNavigation {
  brandDescription: string;
  sections: NavSection[];
  copyright: string;
}
