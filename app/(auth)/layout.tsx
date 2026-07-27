import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | AISCHMIRA",
  description: "Sign in or create an account.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-[104px] pb-24">
      {/* Decorative center element for auth pages */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-surface p-8 md:p-12 shadow-sm border border-border/20">
          {children}
        </div>
      </div>
    </div>
  );
}
