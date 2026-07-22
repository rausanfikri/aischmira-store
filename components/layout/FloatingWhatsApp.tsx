"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export function FloatingWhatsApp() {
  const WHATSAPP_URL = "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-floating hover:bg-primary-hover hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </Link>
    </div>
  );
}
