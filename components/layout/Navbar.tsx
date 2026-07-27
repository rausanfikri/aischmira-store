"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/data/navigation";
import { socialMediaLinks } from "@/data/socials";
import { motion, AnimatePresence } from "framer-motion";


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
        width={260}
        height={72}
        className={cn(
          "object-contain w-auto",
          inverted ? "h-14 brightness-0 invert" : "h-14 sm:h-[64px] lg:h-[100px]"
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
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
        style={{ top: "40px" }}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[80px] lg:h-[120px] items-center justify-between">

            {/* Left Nav (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1" aria-label="Navigasi Kiri">
              {[
                { label: "Collection", href: "#featured-collections" },
                { label: "Lookbook", href: "/lookbook" },
                { label: "Journal", href: "/journal" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
              <Link href="/" className="relative" aria-label="AISCHMIRA — Kembali ke Beranda">
                <NavLogo />
              </Link>
            </div>

            {/* Right Nav & Utilities */}
            <div className="flex items-center justify-end gap-6 flex-1">
              {/* Desktop Right Nav */}
              <nav className="hidden lg:flex items-center gap-8" aria-label="Navigasi Kanan">
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex h-10 w-10 items-center justify-center text-text/80 hover:text-text transition-colors rounded-full hover:bg-black/5 z-50 relative -mr-2"
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
