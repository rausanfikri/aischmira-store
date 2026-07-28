"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  isTransparent?: boolean;
}

export function NavLinks({ isTransparent }: NavLinksProps) {
  const linkClass = cn(
    "font-body text-xs tracking-widest uppercase font-medium transition-colors hover:text-primary focus:outline-none",
    isTransparent ? "text-surface hover:text-primary-light" : "text-text hover:text-primary"
  );

  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
      <Link href="/collections" className={linkClass}>
        Collections
      </Link>
      <Link href="/collections" className={linkClass}>
        Categories
      </Link>
      <Link href="/journal" className={linkClass}>
        Journal
      </Link>
      <Link href="/about" className={linkClass}>
        About
      </Link>
    </nav>
  );
}
