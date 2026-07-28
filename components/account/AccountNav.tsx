"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Heart, LogOut, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccountNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/account/dashboard", label: "Dashboard Overview", icon: User },
    { href: "/account/profile", label: "Profile & Addresses", icon: MapPin },
    { href: "/account/orders", label: "Order History & Concierge", icon: ShoppingBag },
    { href: "/wishlist", label: "Saved Wishlist", icon: Heart },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-surface/60 border border-border/40 p-6 rounded-sm space-y-6">
        
        {/* User Card */}
        <div className="border-b border-border/40 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-body text-[9px] tracking-widest uppercase text-emerald-800 font-medium">AISCHMIRA Privé</span>
          </div>
          <h3 className="font-heading italic text-xl text-text">Jane Doe</h3>
          <p className="font-body text-[11px] text-text/50 font-light truncate">jane.doe@example.com</p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 font-body text-xs tracking-widest uppercase">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 py-3 px-3 rounded-sm transition-all duration-300",
                  isActive
                    ? "bg-text text-surface font-medium shadow-sm"
                    : "text-text/60 hover:text-text hover:bg-surface"
                )}
              >
                <Icon size={16} strokeWidth={1.5} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          
          <div className="pt-4 mt-2 border-t border-border/40">
            <Link
              href="/login"
              className="flex items-center gap-3 py-2 px-3 text-text/40 hover:text-red-700 transition-colors"
            >
              <LogOut size={16} strokeWidth={1.5} />
              <span>Sign Out</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
