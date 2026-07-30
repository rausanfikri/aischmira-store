"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Collection } from "@/domain/collection/entity";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
  variant?: "hero" | "editorial" | "compact";
  index?: number;
  className?: string;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CollectionCard({
  collection,
  variant = "editorial",
  index = 0,
  className,
}: CollectionCardProps) {
  const isHero = variant === "hero";
  const tag = collection.subtitle || "Capsule Edit";

  if (isHero) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: index * 0.15, ease }}
        className={cn(
          "group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface border border-border/30 rounded-xs overflow-hidden p-6 sm:p-8 lg:p-12 transition-all duration-700 hover:border-primary/40 hover:shadow-lg",
          className
        )}
      >
        {/* Visual Column */}
        <Link
          href={`/collections/${collection.slug}`}
          className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-background rounded-xs block"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={collection.coverImage}
            alt={`AISCHMIRA ${collection.name} Collection`}
            fill
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
            quality={92}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        </Link>

        {/* Story Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-4">
          <div className="space-y-2">
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-primary font-bold block">
              {tag}
            </span>
            <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text font-light leading-tight">
              <Link
                href={`/collections/${collection.slug}`}
                className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
              >
                {collection.name}
              </Link>
            </h3>
          </div>

          <p className="font-body text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
            {collection.story || collection.description}
          </p>

          {collection.materials && collection.materials.length > 0 && (
            <div className="pt-2 border-t border-border/30">
              <span className="font-body text-[8px] tracking-[0.25em] uppercase text-text-muted font-semibold block mb-1.5">
                Artisanal Materials
              </span>
              <p className="font-body text-[11px] text-text/75 font-light">
                {collection.materials.join(" • ")}
              </p>
            </div>
          )}

          <div className="pt-4">
            <Link
              href={`/collections/${collection.slug}`}
              className="inline-flex items-center gap-3 group/cta font-body text-[10px] tracking-[0.25em] uppercase text-text font-medium hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-xs py-1"
            >
              <span>Explore Collection</span>
              <span className="block w-6 h-px bg-text group-hover/cta:bg-primary group-hover/cta:w-10 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.0, delay: index * 0.18, ease }}
      className={cn(
        "group flex flex-col bg-surface border border-border/30 rounded-xs overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-md",
        className
      )}
    >
      {/* Cover Image */}
      <Link
        href={`/collections/${collection.slug}`}
        className="relative w-full aspect-[3/4] overflow-hidden bg-background block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={collection.coverImage}
          alt={`AISCHMIRA ${collection.name} Collection`}
          fill
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
        <div className="absolute bottom-5 left-6 right-6 text-surface">
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-surface/75 block mb-1">
            {tag}
          </span>
          <h3 className="font-heading italic text-2xl sm:text-3xl text-surface font-light drop-shadow-sm">
            {collection.name}
          </h3>
        </div>
      </Link>

      {/* Card Details */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
        <p className="font-body text-xs text-text-secondary leading-relaxed font-light line-clamp-3">
          {collection.description}
        </p>

        <div className="pt-2 border-t border-border/20">
          <Link
            href={`/collections/${collection.slug}`}
            className="w-full inline-flex items-center justify-between font-body text-[10px] tracking-[0.2em] uppercase text-text hover:text-primary py-2 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
          >
            <span>View Edit</span>
            <span className="text-primary font-bold text-xs group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
