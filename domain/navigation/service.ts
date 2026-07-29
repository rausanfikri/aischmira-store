import { NavigationConfig, NavigationGroup } from './entity';
import { INavigationRepository } from './repository';
import { DummyNavigationRepository } from './dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class NavigationService {
  constructor(private readonly repository: INavigationRepository = new DummyNavigationRepository()) {}

  public async getNavigation(): Promise<Result<NavigationConfig, AppError>> {
    logger.debug('NavigationService: Fetching full navigation configuration');
    return this.repository.getNavigation();
  }

  public async getFooterNavigation(): Promise<Result<NavigationGroup[], AppError>> {
    logger.debug('NavigationService: Fetching footer navigation');
    return this.repository.getFooterNavigation();
  }
}

export const navigationService = new NavigationService();
