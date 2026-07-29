import { NavigationGroup } from '../entity';
import { INavigationRepository } from '../repository';
import { DummyNavigationRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetFooterNavigationUseCase {
  constructor(private readonly repository: INavigationRepository = new DummyNavigationRepository()) {}

  public async execute(): Promise<Result<NavigationGroup[], AppError>> {
    logger.info('Executing GetFooterNavigationUseCase');
    return this.repository.getFooterNavigation();
  }
}
