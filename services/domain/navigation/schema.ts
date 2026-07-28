import { z } from "zod";

export const navItemSchema = z.object({
  name: z.string(),
  href: z.string(),
  isExternal: z.boolean().optional(),
});

export const navSectionSchema = z.object({
  title: z.string(),
  items: z.array(navItemSchema),
});
