"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/account/dashboard");
    }, 800);
  };

  return (
    <div className="flex flex-col">
      <div className="text-left mb-6">
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block mb-2">Exclusive Access</span>
        <h1 className="font-heading italic text-3xl md:text-4xl text-text mb-2">Create Account</h1>
        <p className="font-body text-xs text-text/60 font-light">Join the AISCHMIRA Privé society for order tracking and private member services.</p>
      </div>

      {/* Primary Google Auth */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => {
            setIsLoading(true);
            window.location.href = "/account/dashboard";
          }}
          className="w-full py-3.5 px-4 bg-surface hover:bg-surface/80 border border-border/60 text-text font-body text-xs tracking-wider uppercase font-medium rounded-xs flex items-center justify-center gap-3 transition-colors shadow-xs"
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
          Continue with Google
        </button>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/40" />
          </div>
          <span className="relative bg-background px-3 font-body text-[9px] tracking-widest uppercase text-text/40">
            or register with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="font-body text-[10px] tracking-widest uppercase text-text/70">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className="font-body text-[10px] tracking-widest uppercase text-text/70">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane.doe@example.com"
            className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-body text-[10px] tracking-widest uppercase text-text/70">WhatsApp / Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+62 812 3456 7890"
            className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="font-body text-[10px] tracking-widest uppercase text-text/70">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••••"
              className="w-full border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors pr-10 placeholder:text-text/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2 text-text/40 hover:text-text transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <p className="font-body text-[10px] text-text/50 leading-relaxed mt-1">
          By registering, you agree to the AISCHMIRA Privé <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm flex items-center justify-center gap-2 font-medium disabled:opacity-50"
        >
          {isLoading ? "Creating Account..." : "Create Privé Account"} <ArrowRight size={14} />
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-border/40 text-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
          Already a Privé Member?{" "}
          <Link href="/login" className="text-text hover:text-primary font-medium transition-colors border-b border-text/40 pb-0.5">
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  );
}
