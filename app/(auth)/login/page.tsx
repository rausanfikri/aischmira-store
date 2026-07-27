import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-heading italic text-3xl md:text-4xl text-text mb-2">Welcome Back</h1>
      <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mb-10">Sign in to your account</p>

      <form className="flex flex-col gap-6 text-left">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="font-body text-[10px] tracking-widest uppercase text-text/70">Password</label>
            <Link href="#" className="font-body text-[9px] tracking-widest uppercase text-text/40 hover:text-text transition-colors">Forgot?</Link>
          </div>
          <input 
            type="password" 
            id="password" 
            className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            placeholder="Enter your password"
          />
        </div>

        <button type="button" className="mt-4 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm flex items-center justify-center gap-2">
          Sign In <ArrowRight size={14} />
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-border/50">
        <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
          New to AISCHMIRA? <Link href="/register" className="text-text hover:text-primary transition-colors border-b border-text/30 pb-0.5">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
