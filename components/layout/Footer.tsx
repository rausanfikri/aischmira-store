"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMediaLinks } from "@/data/socials";

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/6285121344848";
  const [imgError, setImgError] = React.useState(false);

  return (
    <footer className="bg-background text-text border-t border-border pt-24 pb-12 sm:pt-32 sm:pb-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        
        {/* Top: Logo & Tagline */}
        <div className="flex flex-col items-center text-center mb-20 sm:mb-28">
          <Link href="/" className="block mb-10" aria-label="AISCHMIRA Home">
            {imgError ? (
              <span className="font-heading text-3xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
                AISCHMIRA
              </span>
            ) : (
              <Image
                src="/logo.png"
                alt="AISCHMIRA"
                width={400}
                height={120}
                className="object-contain h-[100px] sm:h-[120px] w-auto opacity-90"
                onError={() => setImgError(true)}
              />
            )}
          </Link>
          <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Crafted to comfort.<br className="hidden sm:block" />
            <span className="italic sm:ml-2">Designed to stand out.</span>
          </h3>
          <p className="font-body text-sm text-text/60 tracking-widest uppercase font-light mt-4">
            Elegance in every curve and every moment.
          </p>
        </div>

        {/* Middle: 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24 sm:mb-32">
          
          {/* Column 1: Collections */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/40 mb-8">Collections</h4>
            <ul className="flex flex-col gap-5 font-body text-[11px] tracking-[0.2em] uppercase text-text/80">
              <li><Link href="#" className="hover:text-primary transition-colors">FEMME</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">HER</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SHE</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/40 mb-8">Company</h4>
            <ul className="flex flex-col gap-5 font-body text-[11px] tracking-[0.2em] uppercase text-text/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/40 mb-8">Contact</h4>
            <ul className="flex flex-col gap-5 font-body text-[11px] tracking-[0.2em] uppercase text-text/80">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@aischmira.store" className="hover:text-primary transition-colors lowercase tracking-wide normal-case text-sm">
                  hello@aischmira.store
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/40 mb-8">Follow Us</h4>
            <ul className="flex flex-col gap-5 font-body text-[11px] tracking-[0.2em] uppercase text-text/80">
              {socialMediaLinks.map(social => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-3 justify-center sm:justify-start">
                    <social.icon size={16} strokeWidth={1.5} />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <div className="w-full flex flex-col items-center text-center border-t border-border/50 pt-12">
          <p className="font-body text-[10px] text-text/40 tracking-[0.2em] uppercase">
            © 2026 AISCHMIRA
          </p>
        </div>

      </div>
    </footer>
  );
}
