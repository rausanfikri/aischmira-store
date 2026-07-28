"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
        {/* Thumbnails (Desktop side, Mobile bottom) */}
        <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar snap-x md:snap-none pb-2 md:pb-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "relative w-20 h-28 shrink-0 bg-surface overflow-hidden transition-all duration-300 snap-center rounded-sm",
                activeIdx === idx ? "opacity-100 ring-1 ring-text ring-offset-2" : "opacity-50 hover:opacity-100"
              )}
              aria-label={`View thumbnail ${idx + 1}`}
            >
              <Image src={img} alt="" fill className="object-cover object-center" />
            </button>
          ))}
        </div>

        {/* Main Display Image */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[80vh] bg-surface order-1 md:order-2 overflow-hidden rounded-sm cursor-zoom-in group"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                activeIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <Image src={img} alt="Product Image" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" priority={idx === 0} />
            </div>
          ))}

          {/* Zoom Overlay Hint */}
          <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full text-text/70 opacity-80 group-hover:opacity-100 group-hover:bg-background transition-all">
            <Maximize2 size={16} />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={images}
        currentIndex={activeIdx}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(idx) => setActiveIdx(idx)}
      />
    </>
  );
}
