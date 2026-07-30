import { LookbookCampaignDTO, LookbookBlockDTO } from './schema';

export type { LookbookBlockDTO };

export interface LookbookCampaignResponseDTO {
  data: LookbookCampaignDTO;
  meta?: Record<string, unknown>;
}

export interface LookbookCampaignListResponseDTO {
  data: LookbookCampaignDTO[];
  total: number;
}
