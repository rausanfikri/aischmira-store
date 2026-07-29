import { NavigationConfig } from '../entity';
import { INavigationRepository } from '../repository';
import { DummyNavigationRepository } from '../dummy.repository';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { logger } from '@/shared/logger';

export class GetNavigationUseCase {
  constructor(private readonly repository: INavigationRepository = new DummyNavigationRepository()) {}

  public async execute(): Promise<Result<NavigationConfig, AppError>> {
    logger.info('Executing GetNavigationUseCase');
    return this.repository.getNavigation();
  }
}
