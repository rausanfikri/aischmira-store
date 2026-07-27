"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/data/navigation";
import { socialMediaLinks } from "@/data/socials";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading font-light tracking-[0.3em] uppercase text-accent",
        className
      )}
      aria-hidden="true"
    >
      AISCHMIRA
    </span>
  );
}

function NavLogo({ inverted = false }: { inverted?: boolean }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <LogoMark className={inverted ? "text-surface text-xl" : "text-[1.1rem]"} />
    );
  }

  return (
    <span className="relative block">
      <Image
        src="/logo.png"
        alt="AISCHMIRA"
        width={160}
        height={44}
        className={cn(
          "object-contain w-auto",
          inverted ? "h-9 brightness-0 invert" : "h-9 sm:h-10"
        )}
        priority
        onError={() => setImgError(true)}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            : "bg-surface/90 backdrop-blur-sm"
        )}
        style={{ top: "40px" }}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between gap-6">

            {/* Logo */}
            <Link
              href="/"
              className="relative shrink-0 flex items-center"
              aria-label="AISCHMIRA — Kembali ke Beranda"
            >
              <NavLogo />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8 flex-1 justify-center"
              aria-label="Navigasi utama"
            >
              {navigationData.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-text/70 hover:text-text transition-colors duration-200 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Social Icons + Utility + Mobile Toggle */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Desktop Socials — limited: show only top 4 */}
              <div className="hidden xl:flex items-center gap-1 border-r border-border pr-3 mr-1">
                {socialMediaLinks.slice(0, 4).map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      title={social.name}
                      className="h-9 w-9 flex items-center justify-center text-text/40 hover:text-text transition-colors duration-200 rounded-full hover:bg-black/5"
                    >
                      <Icon size={14} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>

              {/* Search */}
              <Link
                href="/search"
                aria-label="Cari produk"
                className="hidden sm:flex h-10 w-10 items-center justify-center text-text/60 hover:text-text transition-colors rounded-full hover:bg-black/5"
              >
                <Search size={18} strokeWidth={1.25} />
              </Link>

              {/* WhatsApp CTA (desktop) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi AISCHMIRA via WhatsApp"
                className="hidden md:flex items-center gap-2 bg-text text-surface rounded-none px-5 py-2.5 text-[10px] font-body tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ml-2"
              >
                Shop Now
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex h-10 w-10 items-center justify-center text-text/80 hover:text-text transition-colors rounded-full hover:bg-black/5 z-50 relative"
              >
                {mobileOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-surface flex flex-col pt-[104px]" // 40px announcement + 64px header
            aria-hidden={!mobileOpen}
          >
            <nav
              className="flex flex-col px-8 py-8 gap-8 flex-1 overflow-y-auto"
              aria-label="Navigasi mobile"
            >
              <div className="flex flex-col gap-6">
                {navigationData.mainNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-3xl font-light tracking-wide text-text hover:text-primary transition-colors block border-b border-border/50 pb-4"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-auto pt-8 pb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center bg-text text-surface py-4 text-[11px] tracking-[0.2em] uppercase font-body hover:bg-primary transition-colors"
                >
                  Shop via WhatsApp
                </a>
                
                {/* Mobile Socials */}
                <div className="mt-10 border-t border-border/50 pt-8">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text/40 mb-6 text-center">
                    Follow Us
                  </p>
                  <div className="flex justify-center gap-6">
                    {socialMediaLinks.slice(0, 4).map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.ariaLabel}
                          title={social.name}
                          className="flex h-10 w-10 items-center justify-center text-text/50 hover:text-primary hover:bg-primary-light rounded-full transition-colors"
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
