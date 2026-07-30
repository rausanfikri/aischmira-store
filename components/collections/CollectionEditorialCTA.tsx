"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

interface CollectionEditorialCTAProps {
  collection: Collection;
}

export function CollectionEditorialCTA({ collection }: CollectionEditorialCTAProps) {
  if (!collection) return null;

  const whatsappMessage = `Hello AISCHMIRA Styling Concierge, I am inquiring about the ${collection.name} Collection (${collection.season || "Edit"}) and would like personal recommendations.`;
  const whatsappUrl = getWhatsAppInquiryUrl(whatsappMessage);

  return (
    <section className="py-24 md:py-36 bg-text text-surface text-center relative overflow-hidden">
      <div className="container-custom max-w-3xl mx-auto space-y-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            Atelier Personal Concierge
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-surface leading-tight font-light">
            Inquire About Custom Fits & Privé Styling for {collection.name}
          </h2>
          <p className="font-body text-xs md:text-sm text-surface/80 leading-relaxed font-light max-w-xl mx-auto">
            Speak directly with an AISCHMIRA fashion director for bespoke sizing, silk care guidance, or private atelier appointments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/wa bg-primary text-black hover:bg-surface hover:text-black transition-all duration-300 font-body text-[10px] tracking-[0.25em] uppercase px-8 py-4 rounded-sm font-bold inline-flex items-center gap-3 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult Styling Concierge</span>
          </a>
          <Link
            href="/collections"
            className="group/cta border border-surface/40 text-surface hover:border-surface hover:bg-surface/10 transition-all duration-300 font-body text-[10px] tracking-[0.25em] uppercase px-8 py-4 rounded-sm font-medium inline-flex items-center gap-2"
          >
            <span>Explore All Edits</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
