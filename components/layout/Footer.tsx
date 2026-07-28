"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMediaLinks } from "@/data/socials";
import { Send, Check, Mail } from "lucide-react";

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/6285121344848";
  const [imgError, setImgError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-background text-text border-t border-border/40 pt-20 pb-12 sm:pt-28 sm:pb-16" role="contentinfo">
      <div className="container-hero">
        
        {/* 1. Centered Brand Header & Tagline */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-border/30 space-y-4 max-w-xl mx-auto">
          <Link href="/" className="inline-block focus:outline-none" aria-label="AISCHMIRA Home">
            {imgError ? (
              <span className="font-heading text-3xl tracking-[0.3em] uppercase text-text" aria-hidden="true">
                AISCHMIRA
              </span>
            ) : (
              <Image
                src="/logo.png"
                alt="AISCHMIRA Flagship"
                width={240}
                height={75}
                className="object-contain h-[52px] w-auto opacity-90 hover:opacity-100 transition-opacity"
                onError={() => setImgError(true)}
                priority
              />
            )}
          </Link>
          
          <p className="font-heading italic text-xl md:text-2xl text-text font-light leading-snug">
            Crafted to comfort. Designed to stand out.
          </p>
          
          <p className="font-body text-xs text-text/60 leading-relaxed font-light tracking-wide max-w-md">
            Timeless silhouettes, pure Mulberry silk, and modern Indonesian luxury fashion craftsmanship.
          </p>
        </div>

        {/* 2. Newsletter Subscription Section (UI Only) */}
        <div className="py-16 border-b border-border/30 max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold flex items-center justify-center gap-1.5">
              <Mail size={12} /> AISCHMIRA PRIVATE SALON
            </span>
            <h3 className="font-heading italic text-2xl md:text-3xl text-text font-light">
              Join Our Editorial Journal
            </h3>
            <p className="font-body text-xs text-text/60 font-light">
              Receive private invitations to new capsule collection launches, bespoke fitting events, and editorial stories.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-sm font-body text-xs flex items-center justify-center gap-2 animate-fadeIn">
              <Check size={16} /> Welcome to the AISCHMIRA Private Salon. Your invitation has been registered.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-surface border border-border/60 px-4 py-3 text-xs font-body text-text placeholder:text-text/40 rounded-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-3 rounded-sm font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <Send size={12} />
              </button>
            </form>
          )}
        </div>

        {/* 3. Balanced 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 py-16 text-left">
          
          {/* Column 1: Collections */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Collections
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections/femme" className="hover:text-primary transition-colors">FEMME Collection</Link></li>
              <li><Link href="/collections/her" className="hover:text-primary transition-colors">HER Collection</Link></li>
              <li><Link href="/collections/she" className="hover:text-primary transition-colors">SHE Collection</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Classic Line</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Silk Scarves</Link></li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Categories
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/collections" className="hover:text-primary transition-colors">Outerwear</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Tops & Blouses</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Bottoms & Trousers</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Dresses & Gowns</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Luxury Accessories</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Silk Pyjama Sets</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care & About */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">About AISCHMIRA</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">Editorial Journal</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ & Delivery</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li>
                <a href="mailto:hello@aischmira.store" className="hover:text-primary transition-colors normal-case tracking-normal text-xs text-text/70">
                  hello@aischmira.store
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Handles */}
          <div className="flex flex-col">
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 mb-6 font-bold border-b border-border/30 pb-2">
              Contact & Social
            </h4>
            <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-whatsapp font-medium flex items-center gap-2">
                  WhatsApp Concierge
                </a>
              </li>
              {socialMediaLinks.slice(0, 4).map((social) => (
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

        {/* 4. Bottom Bar: Copyright & Legal Policies */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-border/40 pt-10 gap-4 font-body text-[10px] text-text/50 tracking-widest uppercase text-center md:text-left">
          <p>© 2026 AISCHMIRA. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
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
