import { NavigationConfig, NavigationItem, NavigationGroup } from './entity';
import { NavigationDTO, NavigationItemDTO, NavigationGroupDTO } from './dto';

export class NavigationMapper {
  private static mapItem(raw: Record<string, unknown> | NavigationItemDTO): NavigationItem {
    const rawAny = raw as Record<string, unknown>;
    const childrenRaw = Array.isArray(rawAny.children) ? rawAny.children : [];
    return {
      id: String(rawAny.id || `nav_${Math.random().toString(36).substring(2, 7)}`),
      label: String(rawAny.label || 'Link'),
      href: String(rawAny.href || '#'),
      isExternal: Boolean(rawAny.isExternal ?? rawAny.is_external ?? false),
      badge: rawAny.badge ? String(rawAny.badge) : undefined,
      children: childrenRaw.length > 0 ? childrenRaw.map(c => NavigationMapper.mapItem(c as Record<string, unknown>)) : undefined,
    };
  }

  private static mapGroup(raw: Record<string, unknown> | NavigationGroupDTO): NavigationGroup {
    const rawAny = raw as Record<string, unknown>;
    const linksRaw = Array.isArray(rawAny.links) ? rawAny.links : [];
    return {
      id: String(rawAny.id || `group_${Math.random().toString(36).substring(2, 7)}`),
      title: String(rawAny.title || 'Section'),
      links: linksRaw.map(l => NavigationMapper.mapItem(l as Record<string, unknown>)),
    };
  }

  public static toEntity(raw: Record<string, unknown> | NavigationDTO): NavigationConfig {
    const rawAny = raw as Record<string, unknown>;
    const mainRaw = Array.isArray(rawAny.mainNav ?? rawAny.main_menu) ? (rawAny.mainNav ?? rawAny.main_menu) as Record<string, unknown>[] : [];
    const utilityRaw = Array.isArray(rawAny.utilityNav ?? rawAny.utility_menu) ? (rawAny.utilityNav ?? rawAny.utility_menu) as Record<string, unknown>[] : [];
    const footerRaw = Array.isArray(rawAny.footerNav ?? rawAny.footer_menu) ? (rawAny.footerNav ?? rawAny.footer_menu) as Record<string, unknown>[] : [];
    const mobileRaw = Array.isArray(rawAny.mobileNav ?? rawAny.mobile_menu) ? (rawAny.mobileNav ?? rawAny.mobile_menu) as Record<string, unknown>[] : [];

    return {
      mainNav: mainRaw.map(NavigationMapper.mapItem),
      utilityNav: utilityRaw.map(NavigationMapper.mapItem),
      footerNav: footerRaw.map(NavigationMapper.mapGroup),
      mobileNav: mobileRaw.map(NavigationMapper.mapItem),
    };
  }
}
