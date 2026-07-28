"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMediaLinks } from "@/data/socials";

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/6285121344848";
  const [imgError, setImgError] = React.useState(false);

  return (
    <footer className="bg-background text-text border-t border-border/40 pt-20 pb-12 sm:pt-28 sm:pb-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Centered Logo Branding */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24 space-y-6">
          <Link href="/" className="block" aria-label="AISCHMIRA Home">
            {imgError ? (
              <span className="font-heading text-3xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
                AISCHMIRA
              </span>
            ) : (
              <Image
                src="/logo.png"
                alt="AISCHMIRA"
                width={360}
                height={100}
                className="object-contain h-[90px] sm:h-[110px] w-auto opacity-90 mx-auto"
                onError={() => setImgError(true)}
              />
            )}
          </Link>
          
          <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide max-w-md">
            Crafted to comfort.<br />
            <span className="italic">Designed to stand out.</span>
          </h3>
          
          <p className="font-body text-xs text-text/60 tracking-editorial uppercase font-light max-w-lg mx-auto leading-relaxed">
            Discover timeless fashion for modern women.
          </p>
        </div>

        {/* Balanced 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-20 sm:mb-28 text-center sm:text-left">
          
          {/* Column 1: Collections */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-medium">Collections</h4>
            <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections/femme" className="hover:text-primary transition-colors">FEMME</Link></li>
              <li><Link href="/collections/her" className="hover:text-primary transition-colors">HER</Link></li>
              <li><Link href="/collections/she" className="hover:text-primary transition-colors">SHE</Link></li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-medium">Categories</h4>
            <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections" className="hover:text-primary transition-colors">Apparel & Ready-to-Wear</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Silk Scarves</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-medium">Customer Service</h4>
            <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">About AISCHMIRA</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">AISCHMIRA Journal</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ & Shipping</Link></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media (@aischmira) */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-medium">Social Media</h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              {socialMediaLinks.slice(0, 6).map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2.5 justify-center sm:justify-start"
                  >
                    <social.icon size={15} strokeWidth={1.5} />
                    <span>{social.name} (@aischmira)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col items-center text-center border-t border-border/40 pt-10">
          <p className="font-body text-[10px] text-text/40 tracking-[0.25em] uppercase">
            © 2026 AISCHMIRA. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
