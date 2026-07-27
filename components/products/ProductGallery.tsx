"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
      {/* Thumbnails (Desktop side, Mobile bottom) */}
      <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar snap-x md:snap-none">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={cn(
              "relative w-20 h-28 shrink-0 bg-surface overflow-hidden transition-all duration-300 snap-center",
              activeIdx === idx ? "opacity-100 ring-1 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <Image src={img} alt="" fill className="object-cover object-center" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[80vh] bg-surface order-1 md:order-2 overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              activeIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image src={img} alt="Product Image" fill className="object-cover object-center" priority={idx === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
