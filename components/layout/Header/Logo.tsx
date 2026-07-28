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
      className="relative flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out focus:outline-none"
      aria-label="AISCHMIRA Flagship Home"
    >
      {imgError ? (
        <span className="font-heading text-2xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
          AISCHMIRA
        </span>
      ) : (
        <Image
          src="/logo.png"
          alt="AISCHMIRA Flagship"
          width={220}
          height={70}
          className={cn(
            "object-contain w-auto transition-all duration-300 ease-in-out",
            scrolled
              ? "h-[38px] md:h-[44px]"
              : "h-[38px] md:h-[52px]"
          )}
          onError={() => setImgError(true)}
          priority
        />
      )}
    </Link>
  );
}
