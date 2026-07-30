"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Testimonial, CommunityStat } from "@/domain/testimonial/entity";
import { TestimonialCard } from "./TestimonialCard";
import { CommunityStatsBar } from "./CommunityStatsBar";
import { services } from "@/services";

interface LuxuryTestimonialsProps {
  testimonials?: Testimonial[];
  stats?: CommunityStat[];
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LuxuryTestimonials({
  testimonials: initialTestimonials,
  stats: initialStats,
}: LuxuryTestimonialsProps) {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>(initialTestimonials || []);
  const [stats, setStats] = React.useState<CommunityStat[]>(initialStats || []);

  React.useEffect(() => {
    if (!initialTestimonials || initialTestimonials.length === 0) {
      let isMounted = true;
      services.testimonial.getFeaturedTestimonials().then((res) => {
        if (isMounted && res.isSuccess) setTestimonials(res.value);
      });
      return () => {
        isMounted = false;
      };
    }
  }, [initialTestimonials]);

  React.useEffect(() => {
    if (!initialStats || initialStats.length === 0) {
      let isMounted = true;
      services.testimonial.getCommunityStats().then((res) => {
        if (isMounted && res.isSuccess) setStats(res.value);
      });
      return () => {
        isMounted = false;
      };
    }
  }, [initialStats]);

  return (
    <section
      className="bg-surface py-24 md:py-36 border-b border-border/30 overflow-hidden"
      aria-label="AISCHMIRA Patronage & Customer Reflections"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
            className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block"
          >
            PATRONAGE & REFLECTIONS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-text font-light leading-tight"
          >
            Loved By Women of Discerning Taste
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-body text-xs sm:text-sm tracking-widest uppercase text-text-muted font-light leading-relaxed max-w-xl"
          >
            Reflections from clients who value pure silk craftsmanship and quiet elegance.
          </motion.p>
        </div>

        {/* 3-Column Testimonials Grid */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </div>
        )}

        {/* Community Stats Bar */}
        <CommunityStatsBar stats={stats} />
      </div>
    </section>
  );
}
