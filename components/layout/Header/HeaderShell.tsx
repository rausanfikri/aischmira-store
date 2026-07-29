"use client";

import * as React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useAnnouncementContext } from "@/providers/AnnouncementProvider";
import { cn } from "@/lib/utils";

interface HeaderShellProps {
  children: (props: { scrolled: boolean }) => React.ReactNode;
  className?: string;
}

export function HeaderShell({ children, className }: HeaderShellProps) {
  const { scrolled } = useScrollPosition(30);
  const { dismissed } = useAnnouncementContext();

  return (
    <header
      className={cn(
        "sticky left-0 right-0 z-40 w-full flex items-center border-b transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[var(--header-bg-scrolled)] backdrop-blur-xl h-[var(--header-height-scrolled)] border-border/40 shadow-sm"
          : "bg-[var(--header-bg)] backdrop-blur-md h-[var(--header-height)] border-transparent",
        className
      )}
      style={{
        top: dismissed ? 0 : "var(--announcement-height)",
      }}
    >
      {children({ scrolled })}
    </header>
  );
}
