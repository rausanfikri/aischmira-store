import { Metadata } from "next";
import { AccountNav } from "@/components/account/AccountNav";
import { customerService } from "@/services/customer.service";

export const metadata: Metadata = {
  title: "My Account | AISCHMIRA Privé Sanctuary",
  description: "Manage your AISCHMIRA Privé loyalty membership, order history, saved looks, and concierge preferences.",
};

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const profileRes = await customerService.getCustomerProfile();
  const profile = profileRes.isSuccess ? profileRes.value : null;

  return (
    <div className="min-h-screen bg-background pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="container-custom">
        {/* Account Header */}
        <div className="mb-10 border-b border-border/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block mb-2">
              AISCHMIRA Privé &bull; Client Sanctuary
            </span>
            <h1 className="font-heading italic text-3xl md:text-5xl text-text font-light">
              Welcome Back, {profile?.fullName || "Member"}
            </h1>
          </div>
          <div className="font-body text-xs text-text/60 tracking-widest uppercase">
            Membership Tier:{" "}
            <span className="font-medium text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full ml-1">
              {profile?.membershipTier || "Gold Privé"}
            </span>
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
