import { INavigationRepository, Navigation } from '../../../domain/navigation';
import { Result, success, failure } from '../../../domain/types/Result';
import { RepositoryError } from '../../../domain/errors';
import { navigationData } from '../../../../data/navigation';
import { footerData } from '../../../../data/footer';

export class DummyNavigationRepository implements INavigationRepository {
  async getNavigation(): Promise<Result<Navigation>> {
    try {
      const nav: Navigation = {
        mainMenu: navigationData.mainNav.map(n => ({
          label: n.label,
          href: n.href,
          isExternal: false,
        })),
        footerLinks: footerData.linkGroups.map(s => ({
          title: s.title,
          links: s.links.map(l => ({
            label: l.label,
            href: l.href,
            isExternal: l.href.startsWith('http'),
          })),
        })),
      };
      return success(nav);
    } catch (error) {
      return failure(new RepositoryError('Failed to fetch navigation', { error }));
    }
  }
}
