"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

export function Logo({ scrolled }: LogoProps) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <Link
      href="/"
      className="relative flex items-center justify-center shrink max-w-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs py-1"
      aria-label="AISCHMIRA Flagship Home"
    >
      {imgError ? (
        <span
          className="font-heading text-lg sm:text-2xl lg:text-3xl tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[var(--header-text)] font-light truncate"
          aria-hidden="true"
        >
          AISCHMIRA
        </span>
      ) : (
        <Image
          src="/logo.png"
          alt="AISCHMIRA Flagship"
          width={220}
          height={70}
          className={cn(
            "object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[220px] transition-all duration-300 ease-in-out",
            scrolled
              ? "h-[28px] sm:h-[34px] md:h-[var(--header-logo-size-scrolled)]"
              : "h-[32px] sm:h-[38px] md:h-[var(--header-logo-size)]"
          )}
          onError={() => setImgError(true)}
          priority
        />
      )}
    </Link>
  );
}
