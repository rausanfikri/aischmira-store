import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-heading italic text-3xl md:text-4xl text-text mb-2">Create Account</h1>
      <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mb-10">Join the AISCHMIRA community</p>

      <form className="flex flex-col gap-6 text-left">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-body text-[10px] tracking-widest uppercase text-text/70">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-body text-[10px] tracking-widest uppercase text-text/70">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-body text-[10px] tracking-widest uppercase text-text/70">Password</label>
          <input 
            type="password" 
            id="password" 
            className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
          />
        </div>

        <p className="font-body text-[9px] text-text/40 leading-relaxed mt-2">
          By creating an account, you agree to our <Link href="/terms" className="underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
        </p>

        <button type="button" className="mt-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm flex items-center justify-center gap-2">
          Create Account <ArrowRight size={14} />
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-border/50">
        <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
          Already have an account? <Link href="/login" className="text-text hover:text-primary transition-colors border-b border-text/30 pb-0.5">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
