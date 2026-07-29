import { z } from 'zod';
import { Result } from '../types/Result';

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  isExternal: z.boolean().default(false),
});

export const NavigationSchema = z.object({
  mainMenu: z.array(NavItemSchema),
  footerLinks: z.array(z.object({
    title: z.string(),
    links: z.array(NavItemSchema),
  })),
});

export type Navigation = z.infer<typeof NavigationSchema>;

export interface INavigationRepository {
  getNavigation(): Promise<Result<Navigation>>;
}
