"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login redirect
    setTimeout(() => {
      setIsLoading(false);
      router.push("/account/dashboard");
    }, 800);
  };

  return (
    <div className="flex flex-col">
      <div className="text-left mb-8">
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block mb-2">Member Portal</span>
        <h1 className="font-heading italic text-3xl md:text-4xl text-text mb-2">Welcome Back</h1>
        <p className="font-body text-xs text-text/60 font-light">Sign in to your AISCHMIRA account to manage your profile and orders.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-body text-[10px] tracking-widest uppercase text-text/70 flex items-center gap-1.5">
            <Mail size={12} /> Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-border/60 bg-transparent py-2.5 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
            placeholder="jane.doe@example.com"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="font-body text-[10px] tracking-widest uppercase text-text/70 flex items-center gap-1.5">
              <Lock size={12} /> Password
            </label>
            <Link href="#" className="font-body text-[9px] tracking-widest uppercase text-text/40 hover:text-text transition-colors">
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-border/60 bg-transparent py-2.5 font-body text-sm text-text focus:outline-none focus:border-text transition-colors pr-10 placeholder:text-text/30"
              placeholder="••••••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2.5 text-text/40 hover:text-text transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm flex items-center justify-center gap-2 font-medium disabled:opacity-50"
        >
          {isLoading ? "Signing In..." : "Sign In to Account"} <ArrowRight size={14} />
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-border/40 text-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
          New to AISCHMIRA?{" "}
          <Link href="/register" className="text-text hover:text-primary font-medium transition-colors border-b border-text/40 pb-0.5">
            Create Account & Join Privé
          </Link>
        </p>
      </div>
    </div>
  );
}
