"use client";

import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useAnnouncementContext } from "@/providers/AnnouncementProvider";
import { cn } from "@/lib/utils";

interface HeaderShellProps {
  children: (props: { scrolled: boolean; isHomeTransparent: boolean }) => React.ReactNode;
  className?: string;
}

export function HeaderShell({ children, className }: HeaderShellProps) {
  const pathname = usePathname();
  const { scrolled } = useScrollPosition(30);
  const { dismissed } = useAnnouncementContext();

  const isHome = pathname === "/";
  const isHomeTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky left-0 right-0 z-40 w-full flex items-center border-b transition-all duration-300 ease-in-out",
        isHomeTransparent
          ? "bg-transparent backdrop-blur-none h-[var(--header-height)] border-transparent text-surface [--header-text:#ffffff] [--header-bg:transparent]"
          : "bg-background/95 backdrop-blur-md h-[var(--header-height-scrolled)] border-border/40 shadow-xs text-text [--header-text:var(--color-text)] [--header-bg:var(--color-background)]",
        className
      )}
      style={{
        top: dismissed ? 0 : "var(--announcement-height)",
      }}
    >
      {children({ scrolled, isHomeTransparent })}
    </header>
  );
}
