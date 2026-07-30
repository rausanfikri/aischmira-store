"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { LookbookCampaign } from "@/domain/lookbook/entity";
import { LookbookBlockRenderer } from "./LookbookBlockRenderer";
import { services } from "@/services";

interface EditorialLookbookProps {
  campaign?: LookbookCampaign;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function EditorialLookbook({ campaign: initialCampaign }: EditorialLookbookProps) {
  const [campaign, setCampaign] = React.useState<LookbookCampaign | undefined>(initialCampaign);

  React.useEffect(() => {
    if (!initialCampaign) {
      let isMounted = true;
      services.lookbook.getActiveCampaign().then((res) => {
        if (isMounted && res.isSuccess && res.value) {
          setCampaign(res.value);
        }
      });
      return () => {
        isMounted = false;
      };
    }
  }, [initialCampaign]);

  if (!campaign) return null;

  return (
    <section
      className="bg-surface py-24 md:py-36 border-b border-border/30 overflow-hidden"
      aria-label={`AISCHMIRA Editorial Lookbook — ${campaign.title}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
            className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block"
          >
            {campaign.season} — Editorial Campaign
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-text font-light leading-tight"
          >
            {campaign.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-body text-xs sm:text-sm tracking-widest uppercase text-text-muted font-light leading-relaxed max-w-xl"
          >
            {campaign.tagline || campaign.description}
          </motion.p>
        </div>

        {/* Dynamic CMS-Ready Lookbook Blocks */}
        <div className="space-y-8">
          {campaign.blocks.map((block, idx) => (
            <LookbookBlockRenderer key={block.id} block={block} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
