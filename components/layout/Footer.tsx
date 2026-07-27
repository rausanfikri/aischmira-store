"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { socialMediaLinks } from "@/data/socials";

export function Footer() {
  const WHATSAPP_URL =
    "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  const [imgError, setImgError] = React.useState(false);

  return (
    <footer className="bg-background text-text border-t border-border pt-20 pb-10 sm:pt-32 sm:pb-16" role="contentinfo">
      <div className="mx-auto max-w-[700px] px-4 flex flex-col items-center text-center">
        
        {/* Logo & Tagline */}
        <div className="mb-16 flex flex-col items-center">
          <Link href="/" className="block mb-10" aria-label="AISCHMIRA Home">
            {imgError ? (
              <span className="font-heading text-2xl sm:text-3xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
                AISCHMIRA
              </span>
            ) : (
              <Image
                src="/logo.png"
                alt="AISCHMIRA"
                width={180}
                height={50}
                className="object-contain h-10 w-auto opacity-90"
                onError={() => setImgError(true)}
              />
            )}
          </Link>
          <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Crafted to comfort.<br />
            <span className="italic">Designed to stand out.</span>
          </h3>
          <p className="font-body text-sm text-text-secondary tracking-widest uppercase max-w-sm font-light">
            Elegance in every curve and every moment.
          </p>
        </div>

        <div className="w-16 h-px bg-border mb-16" />

        {/* Navigation */}
        <nav className="mb-16 w-full" aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { label: "Collection", href: "/collections" },
              { label: "Lookbook", href: "/lookbook" },
              { label: "Journal", href: "/journal" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-16 h-px bg-border mb-16" />

        {/* Follow Us */}
        <div className="mb-16 flex flex-col items-center">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-secondary mb-8">
            Follow Us
          </p>
          <div className="flex justify-center gap-6">
            {socialMediaLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  title={social.name}
                  className="text-text-secondary hover:text-primary transition-colors duration-300 flex flex-col items-center gap-2"
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span className="font-body text-[9px] tracking-[0.1em] uppercase hidden sm:block">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="w-16 h-px bg-border mb-16" />

        {/* Contact */}
        <div className="mb-20 flex flex-col items-center space-y-6">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-secondary">
            Contact
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-heading text-xl sm:text-2xl text-text hover:text-primary transition-colors tracking-widest"
          >
            <FaWhatsapp size={20} className="text-primary" />
            +62 851-2134-4848
          </a>
          <a
            href="mailto:hello@aischmira.store"
            className="font-body text-sm text-text-secondary hover:text-primary transition-colors font-light tracking-wide"
          >
            hello@aischmira.store
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full flex flex-col items-center text-center gap-4">
          <p className="font-body text-xs text-text-secondary/60 tracking-widest uppercase">
            © 2026 AISCHMIRA. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
