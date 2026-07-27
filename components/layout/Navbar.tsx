"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/6285121344848";

const COLLECTIONS = {
  new: ["FEMME", "HER", "SHE"],
  classic: ["Bianca", "Priscila", "Safira", "Briana", "Tifani", "Zamira", "Gendis", "Amara", "Dasya", "Jolly", "Aveline", "Luna"],
  scarf: ["AM Monogram", "Floral Meadow", "Chili Chic", "Garlic Bloom", "Spice Blossom"]
};

const CATEGORIES = [
  "Outerwear", "Tops", "Bottoms", "Dress", "Long Pyjama Set", "Short Pyjama Set", "Accessories"
];

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

function NavLogo({ inverted = false, scrolled = false }: { inverted?: boolean, scrolled?: boolean }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <LogoMark className={inverted ? "text-surface text-xl" : "text-[1.1rem] sm:text-2xl"} />
    );
  }

  return (
    <span className="relative flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="AISCHMIRA"
        width={300}
        height={100}
        className={cn(
          "object-contain transition-all duration-300",
          inverted ? "h-14 brightness-0 invert" : "",
          !inverted && "w-[120px] sm:w-[150px] lg:w-[180px]",
          scrolled && "scale-90"
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
  
  // UI states
  const [activeMenu, setActiveMenu] = React.useState<"collections" | "categories" | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = (mobileOpen || searchOpen || cartOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, searchOpen, cartOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setCartOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "top-0 bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm"
            : "top-[40px] bg-transparent"
        )}
        role="banner"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[80px] lg:h-[96px] items-center justify-between relative">

            {/* Left Nav (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1" aria-label="Desktop Left Navigation">
              <button 
                className="group flex items-center gap-1 font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors py-8"
                onMouseEnter={() => setActiveMenu("collections")}
              >
                Collections
                <ChevronDown size={12} className={cn("transition-transform duration-300", activeMenu === "collections" && "rotate-180")} />
              </button>
              <button 
                className="group flex items-center gap-1 font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors py-8"
                onMouseEnter={() => setActiveMenu("categories")}
              >
                Categories
                <ChevronDown size={12} className={cn("transition-transform duration-300", activeMenu === "categories" && "rotate-180")} />
              </button>
            </nav>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
              <Link href="/" className="relative flex" aria-label="AISCHMIRA — Home">
                <NavLogo scrolled={scrolled} />
              </Link>
            </div>

            {/* Right Nav (Icons) */}
            <div className="flex items-center justify-end gap-5 flex-1">
              {/* Desktop Icons */}
              <div className="hidden lg:flex items-center gap-6">
                <button onClick={() => setSearchOpen(true)} className="text-text hover:text-primary transition-colors" aria-label="Search">
                  <Search size={20} strokeWidth={1.5} />
                </button>
                
                <div className="relative group">
                  <button className="text-text hover:text-primary transition-colors flex items-center gap-1" aria-label="Account">
                    <User size={20} strokeWidth={1.5} />
                  </button>
                  {/* Account Dropdown */}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-surface shadow-xl border border-border/50 rounded-sm w-56 p-6 flex flex-col gap-4 font-body text-[10px] tracking-widest uppercase">
                      <div className="border-b border-border/50 pb-4 mb-2">
                        <p className="text-text/40 text-[9px] mb-3">Welcome</p>
                        <div className="flex flex-col gap-3">
                          <button className="text-left hover:text-primary transition-colors font-medium">Sign In</button>
                          <button className="text-left hover:text-primary transition-colors">Register</button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-text/70">
                        <button className="text-left hover:text-primary transition-colors">Dashboard</button>
                        <button className="text-left hover:text-primary transition-colors">My Orders</button>
                        <button className="text-left hover:text-primary transition-colors">Wishlist</button>
                        <button className="text-left hover:text-primary transition-colors">Rewards</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={() => setCartOpen(true)} className="text-text hover:text-primary transition-colors relative" aria-label="Shopping Bag">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 bg-primary text-surface text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </button>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="lg:hidden flex h-10 w-10 items-center justify-center text-text/80 hover:text-text transition-colors rounded-full relative -mr-2"
              >
                {mobileOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu === "collections" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-surface border-t border-border/50 shadow-lg hidden lg:block"
            >
              <div className="mx-auto max-w-7xl px-8 py-16 grid grid-cols-3 gap-16">
                <div>
                  <h4 className="font-heading italic text-xl mb-6 text-primary">New Collections</h4>
                  <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.new.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading italic text-xl mb-6">Classic</h4>
                  <ul className="grid grid-cols-2 gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.classic.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading italic text-xl mb-6">Scarves</h4>
                  <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.scarf.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === "categories" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-surface border-t border-border/50 shadow-lg hidden lg:block"
            >
              <div className="mx-auto max-w-7xl px-8 py-16 flex justify-center">
                <ul className="grid grid-cols-4 gap-x-16 gap-y-6 font-body text-xs tracking-widest uppercase text-text/80 text-center">
                  {CATEGORIES.map(item => (
                    <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center p-4 pt-32 overflow-y-auto"
          >
            <button onClick={() => setSearchOpen(false)} className="absolute top-8 right-8 text-text hover:text-primary transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
            <div className="w-full max-w-4xl relative mb-16">
              <input 
                type="text" 
                placeholder="Search products, collections..." 
                className="w-full bg-transparent border-b-2 border-text/20 focus:border-primary text-2xl md:text-4xl font-heading font-light py-4 outline-none placeholder:text-text/30 transition-colors"
                autoFocus
              />
              <Search size={28} className="absolute right-0 top-1/2 -translate-y-1/2 text-text/30" strokeWidth={1} />
            </div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 text-left pb-16">
              <div>
                <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Recent Searches</h3>
                <ul className="flex flex-col gap-4 font-heading text-xl text-text/80">
                  <li><button className="hover:text-primary transition-colors">Silk Scarves</button></li>
                  <li><button className="hover:text-primary transition-colors">Priscila Dress</button></li>
                  <li><button className="hover:text-primary transition-colors">Outerwear 2025</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Popular Collections</h3>
                <ul className="flex flex-col gap-4 font-heading text-xl text-text/80">
                  <li><button className="hover:text-primary transition-colors">FEMME Collection</button></li>
                  <li><button className="hover:text-primary transition-colors">HER Edit</button></li>
                  <li><button className="hover:text-primary transition-colors">Classic Scarf</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Popular Products</h3>
                <div className="flex flex-col gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-16 bg-surface overflow-hidden">
                        <Image src={`https://picsum.photos/seed/search-prod-${i}/100/150`} alt="" width={48} height={64} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-heading text-lg group-hover:text-primary transition-colors">Bianca Dress</span>
                        <span className="font-body text-[10px] tracking-widest text-text/50 uppercase">Rp 899.000</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="font-heading text-2xl tracking-wider uppercase">Shopping Bag</h2>
                <button onClick={() => setCartOpen(false)} className="hover:text-primary"><X size={24} strokeWidth={1.25} /></button>
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-text/50">
                <ShoppingBag size={48} strokeWidth={1} className="mb-6 opacity-20" />
                <p className="font-body text-xs tracking-widest uppercase">Your bag is empty.</p>
              </div>
              <div className="p-6 border-t border-border/50 bg-background/50">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-text text-surface py-4 text-[11px] tracking-[0.2em] uppercase font-body hover:bg-primary transition-colors rounded-full"
                >
                  Checkout via WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-surface flex flex-col pt-[104px]" // 40px announcement + 64px header
          >
            <nav className="flex flex-col px-8 py-8 gap-8 flex-1 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {["Collections", "Lookbook", "Journal"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-3xl font-light tracking-wide text-text hover:text-primary transition-colors block border-b border-border/50 pb-4"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
