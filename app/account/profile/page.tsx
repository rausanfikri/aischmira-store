"use client";

import * as React from "react";
import { Check, MapPin, Bell, Shield } from "lucide-react";

export default function ProfilePage() {
  const [savedSuccess, setSavedSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Senopati No. 42, Kebayoran Baru",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12190",
    whatsappNotifications: true,
    emailPrivateSales: true,
  });

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
                value={formData.email}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">WhatsApp / Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
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
              className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
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
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Province / Region</label>
              <input
                type="text"
                id="province"
                value={formData.province}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="border-b border-border/60 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors"
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
