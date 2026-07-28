"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppSection() {
  const WHATSAPP_URL = "https://wa.me/6285121344848";

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-surface p-12 md:p-20 rounded-sm border border-border/40 shadow-sm space-y-8"
        >
          <div className="w-14 h-14 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center mx-auto border border-whatsapp/20">
            <MessageCircle size={28} strokeWidth={1.5} />
          </div>

          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Bespoke Concierge Service
          </span>

          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text font-light">
            Need Personal Styling Assistance?
          </h2>

          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-text/70 font-light leading-relaxed max-w-xl mx-auto">
            Our team is ready to help you choose the perfect collection.
          </p>

          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white hover:opacity-95 transition-opacity font-body text-[10px] tracking-[0.2em] uppercase py-4 px-12 rounded-sm font-medium shadow-sm"
            >
              <MessageCircle size={16} /> Chat via WhatsApp
            </a>
          </div>

          <p className="font-body text-[9px] text-text/40 tracking-widest uppercase">
            Available Monday &ndash; Sunday &bull; 09:00 &ndash; 21:00 WIB
          </p>
        </motion.div>

      </div>
    </section>
  );
}
