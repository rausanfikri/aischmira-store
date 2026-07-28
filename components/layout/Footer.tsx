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
      <div className="container-hero">
        
        {/* Balanced 5-Column Navigation Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-20 sm:mb-28 text-left">
          
          {/* Column 1: Logo & Brand Story */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col space-y-5">
            <Link href="/" className="block" aria-label="AISCHMIRA Home">
              {imgError ? (
                <span className="font-heading text-2xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
                  AISCHMIRA
                </span>
              ) : (
                <Image
                  src="/logo.png"
                  alt="AISCHMIRA"
                  width={220}
                  height={70}
                  className="object-contain h-[48px] w-auto opacity-90"
                  onError={() => setImgError(true)}
                />
              )}
            </Link>
            
            <h3 className="font-heading italic text-xl text-text font-light leading-snug">
              Crafted to comfort.<br />
              <span>Designed to stand out.</span>
            </h3>
            
            <p className="font-body text-xs text-text/60 leading-relaxed font-light">
              Timeless silhouettes, pure silk, and modern Indonesian luxury craftsmanship.
            </p>
          </div>

          {/* Column 2: Collections */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Collections
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections/femme" className="hover:text-primary transition-colors">FEMME</Link></li>
              <li><Link href="/collections/her" className="hover:text-primary transition-colors">HER</Link></li>
              <li><Link href="/collections/she" className="hover:text-primary transition-colors">SHE</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Classic Collection</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Silk Scarves</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Categories
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections" className="hover:text-primary transition-colors">Outerwear</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Tops</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Bottoms</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Dress</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Pyjama Sets</Link></li>
            </ul>
          </div>

          {/* Column 4: Customer Service & Contact */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">About AISCHMIRA</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ & Delivery</Link></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-whatsapp font-medium">
                  WhatsApp Concierge
                </a>
              </li>
              <li>
                <a href="mailto:hello@aischmira.store" className="hover:text-primary transition-colors normal-case tracking-normal text-xs text-text/70">
                  hello@aischmira.store
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media (@aischmira) */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Social Media
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-xs tracking-widest uppercase text-text/80">
              {socialMediaLinks.slice(0, 6).map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <social.icon size={14} strokeWidth={1.5} />
                    <span>{social.name} (@aischmira)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-border/40 pt-10 gap-4 font-body text-[10px] text-text/50 tracking-widest uppercase">
          <p>© 2026 AISCHMIRA. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">Shipping Info</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">Returns Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
