import { z } from 'zod';
import { Result } from '../types/Result';

export const MemberSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  status: z.enum(['UNVERIFIED', 'ACTIVE', 'SUSPENDED']).default('UNVERIFIED'),
});

export type Member = z.infer<typeof MemberSchema>;

export interface IMemberRepository {
  findById(id: string): Promise<Result<Member | null>>;
  findByEmail(email: string): Promise<Result<Member | null>>;
  create(member: Omit<Member, 'id'>): Promise<Result<Member>>;
}
