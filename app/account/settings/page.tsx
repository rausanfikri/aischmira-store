"use client";

import * as React from "react";
import { ShieldCheck, Key, Bell, Lock, Check } from "lucide-react";

export default function SettingsPage() {
  const [notifyWhatsApp, setNotifyWhatsApp] = React.useState(true);
  const [notifyEmail, setNotifyEmail] = React.useState(true);
  const [savedSuccess, setSavedSuccess] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border/40 pb-4">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-emerald-700 block mb-1">
          AISCHMIRA Privé &bull; Security & Privacy
        </span>
        <h2 className="font-heading italic text-3xl text-text font-light flex items-center gap-2">
          <ShieldCheck size={24} className="text-emerald-700" /> Account & Security Settings
        </h2>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Security & Authentication */}
        <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <Key size={18} className="text-primary" />
            <h3 className="font-heading italic text-2xl text-text font-light">
              Authentication & Passkeys
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border/30 rounded-sm">
              <div>
                <h4 className="font-heading italic text-lg text-text font-light">Passwordless Biometric Passkey</h4>
                <p className="font-body text-xs text-text/50 font-light mt-0.5">
                  Use Touch ID, Face ID, or Windows Hello for instant passwordless sanctuary access.
                </p>
              </div>
              <span className="font-body text-[9px] tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between p-4 border border-border/30 rounded-sm">
              <div>
                <h4 className="font-heading italic text-lg text-text font-light">Two-Factor Authentication (2FA)</h4>
                <p className="font-body text-xs text-text/50 font-light mt-0.5">
                  Protect account orders with SMS / WhatsApp verification codes.
                </p>
              </div>
              <span className="font-body text-[9px] tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Enabled
              </span>
            </div>
          </div>
        </div>

        {/* Notifications & Concierge Dispatch */}
        <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <Bell size={18} className="text-primary" />
            <h3 className="font-heading italic text-2xl text-text font-light">
              Concierge Dispatch & Preferences
            </h3>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-border/30 rounded-sm cursor-pointer">
              <div>
                <span className="font-heading italic text-lg text-text font-light block">WhatsApp Order Status Alerts</span>
                <span className="font-body text-xs text-text/50 font-light block">
                  Receive real-time courier tracking updates directly on WhatsApp.
                </span>
              </div>
              <input
                type="checkbox"
                checked={notifyWhatsApp}
                onChange={(e) => setNotifyWhatsApp(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between p-4 border border-border/30 rounded-sm cursor-pointer">
              <div>
                <span className="font-heading italic text-lg text-text font-light block">Privé Invitation Drops & Lookbooks</span>
                <span className="font-body text-xs text-text/50 font-light block">
                  Receive 48-hour priority invitations to private collection releases.
                </span>
              </div>
              <input
                type="checkbox"
                checked={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
            </label>
          </div>
        </div>

        {/* Data Governance & Privacy */}
        <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <Lock size={18} className="text-primary" />
            <h3 className="font-heading italic text-2xl text-text font-light">
              Privacy & Data Governance
            </h3>
          </div>
          <p className="font-body text-xs text-text/60 leading-relaxed font-light">
            Your personal measurements, preferred color palettes, and order history are strictly confidential under AISCHMIRA Privé Data Protection Standards.
          </p>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-sm hover:bg-primary transition-colors font-medium"
          >
            Save Security Preferences
          </button>
          {savedSuccess && (
            <span className="font-body text-xs text-emerald-700 flex items-center gap-1">
              <Check size={16} /> Preferences updated successfully.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
