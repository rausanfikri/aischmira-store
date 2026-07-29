import { z } from 'zod';

export const NavigationItemSchema: z.ZodType<unknown> = z.lazy(() =>
  z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    href: z.string().min(1),
    isExternal: z.boolean().optional(),
    badge: z.string().optional(),
    children: z.array(NavigationItemSchema).optional(),
  })
);

export const NavigationGroupSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  links: z.array(NavigationItemSchema),
});

export const NavigationConfigSchema = z.object({
  mainNav: z.array(NavigationItemSchema),
  utilityNav: z.array(NavigationItemSchema),
  footerNav: z.array(NavigationGroupSchema),
  mobileNav: z.array(NavigationItemSchema),
});
