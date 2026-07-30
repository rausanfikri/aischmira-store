"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Gem, Scissors, Compass, Heart } from "lucide-react";
import type { BrandStoryConfig } from "@/core/config/schema";
import { BrandStoryBlock } from "./BrandStoryBlock";
import { services } from "@/services";

interface BrandStoryProps {
  story?: BrandStoryConfig;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function getPillarIcon(iconName: string) {
  switch (iconName) {
    case "Scissors":
      return <Scissors size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />;
    case "Gem":
      return <Gem size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />;
    case "Heart":
      return <Heart size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />;
    case "Compass":
    default:
      return <Compass size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />;
  }
}

export function BrandStory({ story: initialStory }: BrandStoryProps) {
  const [story, setStory] = React.useState<BrandStoryConfig | undefined>(initialStory);

  React.useEffect(() => {
    if (!initialStory) {
      let isMounted = true;
      services.brand.getBrandStory().then((res) => {
        if (isMounted && res.isSuccess) {
          setStory(res.value);
        }
      });
      return () => {
        isMounted = false;
      };
    }
  }, [initialStory]);

  if (!story) return null;

  return (
    <section
      className="bg-surface py-24 md:py-36 border-b border-border/30 overflow-hidden"
      aria-label="AISCHMIRA Brand Narrative and Heritage"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-20 md:space-y-28">
        {/* Centered Editorial Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
            className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block"
          >
            {story.header.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-text font-light leading-tight"
          >
            {story.header.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-body text-xs sm:text-sm tracking-widest uppercase text-text-muted font-light leading-relaxed"
          >
            {story.header.subtitle}
          </motion.p>
        </div>

        {/* Modular Story Blocks */}
        <div className="space-y-20 md:space-y-28">
          {story.blocks.map((block, idx) => (
            <BrandStoryBlock key={block.id} block={block} index={idx} />
          ))}
        </div>

        {/* 4 Pillars Badge Bar */}
        <div className="pt-12 border-t border-border/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {story.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 bg-background rounded-xs border border-border/30 space-y-2 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-xs"
              >
                {getPillarIcon(pillar.icon)}
                <h4 className="font-heading italic text-xl text-text font-light">{pillar.title}</h4>
                <p className="font-body text-[11px] text-text-muted font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
