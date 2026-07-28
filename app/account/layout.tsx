import { Metadata } from "next";
import { AccountNav } from "@/components/account/AccountNav";

export const metadata: Metadata = {
  title: "My Account | AISCHMIRA Privé",
  description: "Manage your AISCHMIRA Privé loyalty membership, orders, and addresses.",
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pt-[104px] pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Account Header */}
        <div className="mb-10 border-b border-border/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block mb-2">AISCHMIRA Privé Flagship</span>
            <h1 className="font-heading italic text-3xl md:text-5xl text-text">My Account</h1>
          </div>
          <div className="font-body text-xs text-text/60 tracking-widest uppercase">
            Privé Tier: <span className="font-medium text-text border-b border-primary/60 pb-0.5">Gold Privé</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          <AccountNav />
          <main className="flex-1 bg-surface/30 p-6 md:p-10 border border-border/30 rounded-sm">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

