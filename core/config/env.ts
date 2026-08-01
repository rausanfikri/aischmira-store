import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("https://aischmira.store"),
  NEXT_PUBLIC_ENABLE_BIGSELLER: z
    .string()
    .default("false")
    .transform((val) => val === "true" || val === "1"),
  NEXT_PUBLIC_ENABLE_SUPABASE: z
    .string()
    .default("false")
    .transform((val) => val === "true" || val === "1"),
  NEXT_PUBLIC_ENABLE_CMS: z
    .string()
    .default("false")
    .transform((val) => val === "true" || val === "1"),
  NEXT_PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .default("false")
    .transform((val) => val === "true" || val === "1"),
});

export type AppEnvironment = z.infer<typeof envSchema>;

export function getValidatedEnvironment(): AppEnvironment {
  return envSchema.parse({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://aischmira.store",
    NEXT_PUBLIC_ENABLE_BIGSELLER: process.env.NEXT_PUBLIC_ENABLE_BIGSELLER || "false",
    NEXT_PUBLIC_ENABLE_SUPABASE: process.env.NEXT_PUBLIC_ENABLE_SUPABASE || "false",
    NEXT_PUBLIC_ENABLE_CMS: process.env.NEXT_PUBLIC_ENABLE_CMS || "false",
    NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS || "false",
  });
}
