"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/data/navigation";
import { socialMediaLinks } from "@/data/socials";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading font-light tracking-[0.3em] uppercase text-[var(--color-accent)]",
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
      <LogoMark className={inverted ? "text-white text-xl" : "text-[1.1rem]"} />
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
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white/90 backdrop-blur-sm"
        )}
        style={{ top: "40px" }}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6">

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
              className="hidden lg:flex items-center gap-7 flex-1 justify-center"
              aria-label="Navigasi utama"
            >
              {navigationData.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-[12px] tracking-[0.15em] uppercase text-text/60 hover:text-[var(--color-primary)] transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Social Icons + Utility + Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Desktop Socials — limited: show only top 4 */}
              <div className="hidden xl:flex items-center gap-2 border-r border-border pr-3 mr-1">
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
                      className="h-8 w-8 flex items-center justify-center text-text/40 hover:text-[var(--color-primary)] transition-colors duration-200 rounded-full hover:bg-[var(--color-primary-light)]"
                    >
                      <Icon size={13} />
                    </a>
                  );
                })}
              </div>

              {/* Search */}
              <Link
                href="/search"
                aria-label="Cari produk"
                className="hidden sm:flex h-9 w-9 items-center justify-center text-text/50 hover:text-[var(--color-primary)] transition-colors rounded-full hover:bg-[var(--color-primary-light)]"
              >
                <Search size={17} strokeWidth={1.5} />
              </Link>

              {/* WhatsApp CTA (desktop) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi AISCHMIRA via WhatsApp"
                className="hidden md:flex items-center gap-2 bg-[var(--color-primary)] text-white rounded-lg px-4 py-2 text-[11px] font-body tracking-widest uppercase hover:bg-[var(--color-primary-hover)] transition-colors duration-300 ml-2"
              >
                Shop Now
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex h-9 w-9 items-center justify-center text-text/60 hover:text-text transition-colors rounded-full hover:bg-border"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-30 bg-white transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: "calc(40px + 64px)" }}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col px-8 py-12 gap-6 h-full overflow-y-auto"
          aria-label="Navigasi mobile"
        >
          {navigationData.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-3xl font-light tracking-wide text-text hover:text-[var(--color-primary)] transition-colors border-b border-border pb-4"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Shop via WhatsApp
            </a>
          </div>

          {/* Mobile Socials */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-body text-[11px] tracking-[0.15em] uppercase text-text/40 mb-5">
              Ikuti Kami
            </p>
            <div className="grid grid-cols-4 gap-3">
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
                    className="flex flex-col items-center gap-1.5 text-text/50 hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Icon size={20} />
                    <span className="font-body text-[9px] tracking-widest uppercase">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
