import { z } from 'zod';

export const commonSchemas = {
  id: z.string().min(1),
  slug: z.string().min(1),
};
