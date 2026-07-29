import { NavigationConfig, NavigationGroup } from './entity';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface INavigationRepository {
  getNavigation(): Promise<Result<NavigationConfig, AppError>>;
  getFooterNavigation(): Promise<Result<NavigationGroup[], AppError>>;
}
