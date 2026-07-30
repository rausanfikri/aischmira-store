"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Testimonial } from "@/domain/testimonial/entity";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { author, quote, purchasedCollection } = testimonial;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease }}
      className="bg-background border border-border/40 hover:border-primary/40 transition-colors duration-500 rounded-xs p-8 sm:p-10 flex flex-col justify-between space-y-8 group shadow-xs hover:shadow-sm"
    >
      {/* Editorial Quote Body */}
      <div className="space-y-4">
        {purchasedCollection && (
          <span className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
            {purchasedCollection}
          </span>
        )}

        <blockquote className="font-heading italic text-xl sm:text-2xl text-text font-light leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Attribution Footer */}
      <div className="pt-6 border-t border-border/30 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-body text-xs sm:text-sm font-medium text-text tracking-wide">
              {author.name}
            </span>
            {author.verified && (
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/10 text-primary"
                title="Verified Patron"
                aria-label="Verified Patron"
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            )}
          </div>

          {(author.title || author.location) && (
            <p className="font-body text-[11px] text-text-muted font-light">
              {[author.title, author.location].filter(Boolean).join(" — ")}
            </p>
          )}
        </div>

        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
