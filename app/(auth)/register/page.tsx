"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Sparkles } from "lucide-react";

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
        <p className="font-body text-xs text-text/60 font-light">Join the AISCHMIRA Privé society for bespoke rewards and private sales.</p>
      </div>

      {/* Privé Welcome Reward Badge */}
      <div className="bg-primary/10 border border-primary/30 p-4 rounded-sm mb-6 flex items-start gap-3">
        <Sparkles size={18} className="text-primary shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-body text-[10px] tracking-widest uppercase font-medium text-text">Welcome Reward</span>
          <p className="font-body text-xs text-text/70">Receive <strong className="text-primary">1,000 Privé Points</strong> instantly upon registering your account.</p>
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
