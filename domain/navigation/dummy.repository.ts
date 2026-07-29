import { NavigationConfig, NavigationGroup } from './entity';
import { INavigationRepository } from './repository';
import { NavigationMapper } from './mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError, RepositoryError } from '@/shared/errors';
import { NAVIGATION_CONFIG, FOOTER_CONFIG } from '@/core/config';

export class DummyNavigationRepository implements INavigationRepository {
  public async getNavigation(): Promise<Result<NavigationConfig, AppError>> {
    try {
      const rawPayload = {
        mainNav: NAVIGATION_CONFIG.mainNav,
        utilityNav: NAVIGATION_CONFIG.utilityNav,
        footerNav: FOOTER_CONFIG.linkGroups,
        mobileNav: NAVIGATION_CONFIG.mobileNav,
      };
      const entity = NavigationMapper.toEntity(rawPayload as unknown as Record<string, unknown>);
      return success(entity);
    } catch (err) {
      return failure(new RepositoryError('Failed to load navigation configuration', { cause: err }));
    }
  }

  public async getFooterNavigation(): Promise<Result<NavigationGroup[], AppError>> {
    try {
      const navResult = await this.getNavigation();
      if (navResult.isFailure) return navResult;
      return success(navResult.value.footerNav);
    } catch (err) {
      return failure(new RepositoryError('Failed to load footer navigation', { cause: err }));
    }
  }
}
