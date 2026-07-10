"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-soft border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        )}
        style={{ top: "40px" }} // Account for announcement bar
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-xl font-light tracking-[0.3em] uppercase text-text hover:text-primary transition-colors shrink-0"
            >
              AISCHMIRA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navigationData.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-[13px] tracking-widest uppercase text-text/70 hover:text-text transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="/search"
                aria-label="Search"
                className="hidden sm:flex h-9 w-9 items-center justify-center text-text/70 hover:text-text transition-colors"
              >
                <Search size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="hidden sm:flex h-9 w-9 items-center justify-center text-text/70 hover:text-text transition-colors"
              >
                <Heart size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/cart"
                aria-label="Cart"
                className="flex h-9 w-9 items-center justify-center text-text/70 hover:text-text transition-colors"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="lg:hidden flex h-9 w-9 items-center justify-center text-text/70 hover:text-text transition-colors"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm"
          style={{ top: "calc(40px + 64px)" }}
        >
          <nav className="flex flex-col px-8 py-12 gap-8" aria-label="Mobile navigation">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-light tracking-wider text-text hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px w-16 bg-border my-2" />
            <div className="flex gap-6">
              <Link
                href="/search"
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-text/60 hover:text-text transition-colors"
              >
                Search
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-text/60 hover:text-text transition-colors"
              >
                Wishlist
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
