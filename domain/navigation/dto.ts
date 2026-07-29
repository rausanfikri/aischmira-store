export interface NavigationItemDTO {
  id: string;
  label: string;
  href: string;
  is_external?: boolean;
  badge?: string;
  children?: NavigationItemDTO[];
}

export interface NavigationGroupDTO {
  id: string;
  title: string;
  links: NavigationItemDTO[];
}

export interface NavigationDTO {
  main_menu: NavigationItemDTO[];
  utility_menu: NavigationItemDTO[];
  footer_menu: NavigationGroupDTO[];
  mobile_menu: NavigationItemDTO[];
}
