export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  id: string;
  title: string;
  links: NavigationItem[];
}

export interface NavigationConfig {
  mainNav: NavigationItem[];
  utilityNav: NavigationItem[];
  footerNav: NavigationGroup[];
  mobileNav: NavigationItem[];
}
