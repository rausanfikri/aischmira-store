"use client";

import * as React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

interface HeaderShellProps {
  children: (props: { scrolled: boolean }) => React.ReactNode;
  className?: string;
}

export function HeaderShell({ children, className }: HeaderShellProps) {
  const { scrolled } = useScrollPosition(30);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out flex items-center border-b border-border/40 backdrop-blur-xl",
        scrolled
          ? "bg-[var(--header-bg-scrolled)] h-[var(--header-height-scrolled)] shadow-xs"
          : "bg-[var(--header-bg)] h-[var(--header-height)]",
        className
      )}
    >
      {children({ scrolled })}
    </header>
  );
}
