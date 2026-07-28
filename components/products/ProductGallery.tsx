"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface ProductGalleryProps {
  images: string[];
}

const imageVariants = {
  enter: { opacity: 0, scale: 1.02 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  /* Keyboard navigation within gallery */
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsLightboxOpen(true);
      }
    },
    [images.length]
  );

  return (
    <>
      <div
        ref={galleryRef}
        className="flex flex-col md:flex-row gap-4 md:gap-6 h-full"
        role="region"
        aria-label="Product image gallery"
        onKeyDown={handleKeyDown}
      >
        {/* Thumbnails — Desktop: vertical left rail, Mobile: horizontal bottom */}
        <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar snap-x md:snap-none pb-2 md:pb-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "relative w-[72px] h-[96px] shrink-0 bg-surface overflow-hidden transition-all duration-500 snap-center rounded-sm",
                activeIdx === idx
                  ? "opacity-100 ring-1 ring-text ring-offset-2 ring-offset-background"
                  : "opacity-40 hover:opacity-80"
              )}
              aria-label={`View image ${idx + 1} of ${images.length}`}
              aria-pressed={activeIdx === idx}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover object-center"
                sizes="72px"
              />
            </button>
          ))}
        </div>

        {/* Main Display Image with hover zoom */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          tabIndex={0}
          role="button"
          aria-label="Click to enlarge image, use arrow keys to navigate"
          className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[80vh] bg-surface order-1 md:order-2 overflow-hidden rounded-sm cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIdx]}
                alt={`Product view ${activeIdx + 1}`}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                priority={activeIdx === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom Overlay Hint */}
          <div className="absolute top-4 right-4 z-20 bg-background/70 backdrop-blur-sm p-2.5 rounded-full text-text/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={16} strokeWidth={1.5} />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 z-20 font-body text-[10px] tracking-widest text-text/50 uppercase">
            {activeIdx + 1} / {images.length}
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
