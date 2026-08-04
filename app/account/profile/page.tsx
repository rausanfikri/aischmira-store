"use client";

import * as React from "react";
import { Check, MapPin, Bell, Shield } from "lucide-react";
import { customerService } from "@/services/customer.service";

export default function ProfilePage() {
  const [savedSuccess, setSavedSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    whatsappNotifications: true,
    emailPrivateSales: true,
  });

  React.useEffect(() => {
    customerService.getCustomerProfile().then((res) => {
      if (res.isSuccess) {
        const p = res.value;
        const defaultAddr = p.addresses.find((a) => a.isDefault) || p.addresses[0];
        setFormData({
          firstName: p.firstName || p.fullName.split(" ")[0] || "",
          lastName: p.lastName || p.fullName.split(" ").slice(1).join(" ") || "",
          email: p.email || "",
          phone: p.phone || "",
          address: defaultAddr?.street || "",
          city: defaultAddr?.city || "",
          province: "",
          postalCode: defaultAddr?.postalCode || "",
          whatsappNotifications: p.preferences?.whatsappNotifications ?? true,
          emailPrivateSales: p.preferences?.newsletterSubscribed ?? true,
        });
      }
      setIsLoading(false);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="py-12 text-center font-body text-xs text-text/50 tracking-widest uppercase animate-pulse">
        Loading Client Profile Data...
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-heading italic text-2xl md:text-3xl text-text mb-2">Profile & Delivery Preferences</h2>
        <p className="font-body text-xs text-text/60 font-light">Manage your personal profile details, default shipping addresses, and Privé notifications.</p>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-900 text-white rounded-sm font-body text-xs flex items-center gap-2">
          <Check size={16} /> Profile changes saved successfully.
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Personal Info Section */}
        <div className="space-y-6 bg-background p-6 border border-border/40 rounded-sm">
          <h3 className="font-heading italic text-xl text-text flex items-center gap-2 border-b border-border/30 pb-3">
            <Shield size={18} className="text-text/70" /> Personal Identity
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
              <input
                type="email"
                id="email"
                readOnly
                value={formData.email}
                className="border-b border-border/40 bg-transparent py-2 font-body text-sm text-text/70 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">WhatsApp / Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+62 812 XXXX XXXX"
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
              />
            </div>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div className="space-y-6 bg-background p-6 border border-border/40 rounded-sm">
          <h3 className="font-heading italic text-xl text-text flex items-center gap-2 border-b border-border/30 pb-3">
            <MapPin size={18} className="text-text/70" /> Default Shipping Address
          </h3>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Street Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Primary Residence / Villa address"
              className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Jakarta Selatan"
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Province / Region</label>
              <input
                type="text"
                id="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="DKI Jakarta"
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="12190"
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
              />
            </div>
          </div>
        </div>

        {/* Notifications Preference */}
        <div className="space-y-4 bg-background p-6 border border-border/40 rounded-sm">
          <h3 className="font-heading italic text-xl text-text flex items-center gap-2 border-b border-border/30 pb-3">
            <Bell size={18} className="text-text/70" /> Communication & Concierge Preferences
          </h3>

          <div className="space-y-3 font-body text-xs text-text/80">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="whatsappNotifications"
                checked={formData.whatsappNotifications}
                onChange={handleChange}
                className="accent-primary"
              />
              <span>Receive WhatsApp updates for order status, delivery dispatch, and bespoke concierge offers.</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="emailPrivateSales"
                checked={formData.emailPrivateSales}
                onChange={handleChange}
                className="accent-primary"
              />
              <span>Receive AISCHMIRA Privé private sales invitations and seasonal lookbooks via email.</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary transition-colors rounded-sm font-medium"
        >
          Save Profile Changes
        </button>
      </form>
    </div>
  );
}
