import { TestimonialDTO, CommunityStatDTO } from './schema';

export type { TestimonialDTO, CommunityStatDTO };

export interface TestimonialListResponseDTO {
  data: TestimonialDTO[];
  total: number;
}

export interface CommunityStatListResponseDTO {
  data: CommunityStatDTO[];
  total: number;
}
