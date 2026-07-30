"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { CommunityStat } from "@/domain/testimonial/entity";

interface CommunityStatsBarProps {
  stats: CommunityStat[];
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CommunityStatsBar({ stats }: CommunityStatsBarProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="pt-16 border-t border-border/30">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: idx * 0.12, ease }}
            className="text-center space-y-2 p-6 rounded-xs bg-background/50 border border-border/20"
          >
            <span className="font-heading italic text-4xl sm:text-5xl text-primary font-light block drop-shadow-xs">
              {stat.value}
            </span>
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-text font-semibold block">
              {stat.label}
            </span>
            <p className="font-body text-[11px] text-text-muted font-light leading-snug">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
