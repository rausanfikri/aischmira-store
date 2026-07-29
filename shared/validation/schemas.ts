import { z } from 'zod';

export const idSchema = z.string().min(1, 'ID is required');

export const slugSchema = z
  .string()
  .min(1, 'Slug is required')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lower-kebab-case');

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address format');

export const phoneSchema = z
  .string()
  .min(8, 'Phone number must be at least 8 digits')
  .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number format');

export const dateStringSchema = z
  .string()
  .datetime({ message: 'Invalid ISO date string format' });

export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
});

export const priceSchema = z.number().nonnegative('Price cannot be negative');

export const urlSchema = z.string().url('Invalid URL format');
