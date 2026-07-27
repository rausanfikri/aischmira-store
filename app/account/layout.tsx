import { Metadata } from "next";
import Link from "next/link";
import { User, ShoppingBag, Heart, LogOut } from "lucide-react";

export const metadata: Metadata = {
  title: "My Account | AISCHMIRA",
  description: "Manage your AISCHMIRA account.",
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pt-[104px] pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16">
          <h1 className="font-heading italic text-3xl md:text-5xl text-text">My Account</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <nav className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/60">
              <Link href="/account/dashboard" className="flex items-center gap-3 py-2 hover:text-text transition-colors">
                <User size={16} strokeWidth={1.5} /> Dashboard
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 py-2 hover:text-text transition-colors">
                Profile Details
              </Link>
              <Link href="/account/orders" className="flex items-center gap-3 py-2 hover:text-text transition-colors">
                <ShoppingBag size={16} strokeWidth={1.5} /> Order History
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 py-2 hover:text-text transition-colors">
                <Heart size={16} strokeWidth={1.5} /> Wishlist
              </Link>
              <div className="pt-8 mt-4 border-t border-border/50">
                <button className="flex items-center gap-3 py-2 text-text/40 hover:text-text transition-colors">
                  <LogOut size={16} strokeWidth={1.5} /> Sign Out
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}
