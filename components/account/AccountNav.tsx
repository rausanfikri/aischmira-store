"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Heart, LogOut, MapPin, Crown, Sparkles, Settings } from "lucide-react";
import { customerService } from "@/services/customer.service";
import { CustomerProfile } from "@/domain/customer";
import { cn } from "@/lib/utils";

export function AccountNav() {
  const pathname = usePathname();
  const [profile, setProfile] = React.useState<CustomerProfile | null>(null);

  React.useEffect(() => {
    customerService.getCustomerProfile().then((res) => {
      if (res.isSuccess) setProfile(res.value);
    });
  }, []);

  const navItems = [
    { href: "/account/dashboard", label: "Dashboard Overview", icon: User },
    { href: "/account/profile", label: "Profile & Addresses", icon: MapPin },
    { href: "/account/orders", label: "Order History & Concierge", icon: ShoppingBag },
    { href: "/wishlist", label: "Personal Closet Wishlist", icon: Heart },
    { href: "/account/membership", label: "Privé Loyalty & Membership", icon: Crown },
    { href: "/account/saved-looks", label: "Curated Saved Looks", icon: Sparkles },
    { href: "/account/settings", label: "Account & Security Settings", icon: Settings },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-surface/60 border border-border/40 p-6 rounded-sm space-y-6">
        {/* User Card */}
        <div className="border-b border-border/40 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-body text-[9px] tracking-widest uppercase text-amber-800 font-medium">
              {profile?.membershipTier || "AISCHMIRA Privé"}
            </span>
          </div>
          <h3 className="font-heading italic text-xl text-text font-light">
            {profile?.fullName || "AISCHMIRA Member"}
          </h3>
          <p className="font-body text-[11px] text-text/50 font-light truncate">
            {profile?.email || "member@aischmira.store"}
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1.5 font-body text-[11px] tracking-widest uppercase">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === "/account/dashboard" && pathname === "/account");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 py-2.5 px-3 rounded-sm transition-all duration-300",
                  isActive
                    ? "bg-text text-surface font-medium shadow-sm"
                    : "text-text/60 hover:text-text hover:bg-surface"
                )}
              >
                <Icon size={15} strokeWidth={1.5} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-border/40">
            <Link
              href="/login"
              className="flex items-center gap-3 py-2 px-3 text-text/40 hover:text-red-700 transition-colors"
            >
              <LogOut size={15} strokeWidth={1.5} />
              <span>Sign Out</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
