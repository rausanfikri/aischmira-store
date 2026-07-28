"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HeaderContainerProps {
  scrolled: boolean;
  isTransparent: boolean;
  children: React.ReactNode;
}

export function HeaderContainer({ scrolled, isTransparent, children }: HeaderContainerProps) {
  const headerBgClass = isTransparent
    ? "bg-transparent text-surface border-b border-transparent h-[84px]"
    : scrolled
    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 h-[72px]"
    : "bg-background/95 backdrop-blur-md border-b border-border/40 h-[84px]";

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out flex items-center",
        headerBgClass
      )}
    >
      <div className="container-hero w-full">
        {children}
      </div>
    </header>
  );
}
