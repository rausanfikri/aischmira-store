"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { authService } from "@/services/auth.service";

function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/account/dashboard";
  const errorMessage = searchParams.get("error");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(
    errorMessage === "auth_failed" ? "Authentication failed. Please try again." : null
  );

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    const result = await authService.signInWithGoogle(redirectTo);
    if (result.isFailure) {
      setError(result.error.message);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
      setError("Email & Password authentication is disabled for this preview. Please use Google Sign-In.");
    }, 600);
  };

  return (
    <div className="flex flex-col">
      <div className="text-left mb-8">
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block mb-2">Member Portal</span>
        <h1 className="font-heading italic text-3xl md:text-4xl text-text mb-2">Welcome Back</h1>
        <p className="font-body text-xs text-text/60 font-light">Sign in to your AISCHMIRA account to manage your profile, loyalty, and orders.</p>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-body rounded-sm">
          {error}
        </div>
      )}

      {/* Google Sign-In Primary OAuth Action */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full bg-surface border border-border/80 hover:border-text text-text font-body text-xs tracking-wider uppercase py-3.5 px-4 rounded-sm flex items-center justify-center gap-3 transition-colors mb-6 shadow-sm disabled:opacity-50 cursor-pointer"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      <div className="relative my-4 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/40" />
        </div>
        <span className="relative bg-background px-3 font-body text-[10px] tracking-widest uppercase text-text/40">
          or sign in with email
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-2">
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
            placeholder="member@aischmira.store"
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
          className="mt-4 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm flex items-center justify-center gap-2 font-medium disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? "Authenticating..." : "Sign In to Account"} <ArrowRight size={14} />
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

export default function LoginPage() {
  return (
    <React.Suspense fallback={
      <div className="py-12 text-center font-body text-xs text-text/50 tracking-widest uppercase animate-pulse">
        Loading Authentication...
      </div>
    }>
      <LoginForm />
    </React.Suspense>
  );
}
