"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[510] text-surface/70 hover:text-surface transition-colors p-2 rounded-full"
          aria-label="Close lightbox"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 md:left-8 z-[510] text-surface/70 hover:text-surface transition-colors p-3"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-4 md:right-8 z-[510] text-surface/70 hover:text-surface transition-colors p-3"
            aria-label="Next image"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        )}

        {/* Main Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl h-[80vh] px-4"
        >
          <Image
            src={images[currentIndex]}
            alt={`View ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Counter indicator */}
        <div className="absolute bottom-6 font-body text-xs tracking-widest text-surface/60 uppercase">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </AnimatePresence>
  );
}
