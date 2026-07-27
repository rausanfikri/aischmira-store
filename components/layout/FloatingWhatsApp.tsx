"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const WHATSAPP_URL = "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
        className="flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] bg-text text-surface rounded-full shadow-2xl hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 relative"
      >
        <FaWhatsapp size={26} className="sm:w-7 sm:h-7" />
        
        {/* Subtle ping effect behind */}
        <span className="absolute inset-0 rounded-full border border-text/30 group-hover:border-primary/50 group-hover:scale-[1.15] transition-all duration-500 -z-10" />
      </Link>
    </motion.div>
  );
}
