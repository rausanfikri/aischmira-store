"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Overlay/Modal";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sizing & Fit Guide" className="max-w-xl">
      <div className="space-y-6 pt-2">
        <p className="font-body text-xs text-text/70 leading-relaxed">
          AISCHMIRA garments are tailored to standard European sizing with refined editorial silhouettes.
          All measurements below are provided in centimeters (cm).
        </p>

        <div className="overflow-x-auto border border-border/50">
          <table className="w-full text-left font-body text-xs border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border/50 font-body text-[10px] tracking-widest uppercase text-text/60">
                <th className="py-3 px-4 font-normal">Size</th>
                <th className="py-3 px-4 font-normal">Bust / Chest</th>
                <th className="py-3 px-4 font-normal">Waist</th>
                <th className="py-3 px-4 font-normal">Hip</th>
                <th className="py-3 px-4 font-normal">EU / UK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30 text-text/80">
              <tr>
                <td className="py-3 px-4 font-medium">S</td>
                <td className="py-3 px-4">82 - 86 cm</td>
                <td className="py-3 px-4">64 - 68 cm</td>
                <td className="py-3 px-4">90 - 94 cm</td>
                <td className="py-3 px-4">36 / 8</td>
              </tr>
              <tr className="bg-surface/30">
                <td className="py-3 px-4 font-medium">M</td>
                <td className="py-3 px-4">86 - 90 cm</td>
                <td className="py-3 px-4">68 - 72 cm</td>
                <td className="py-3 px-4">94 - 98 cm</td>
                <td className="py-3 px-4">38 / 10</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">L</td>
                <td className="py-3 px-4">90 - 96 cm</td>
                <td className="py-3 px-4">72 - 78 cm</td>
                <td className="py-3 px-4">98 - 104 cm</td>
                <td className="py-3 px-4">40 / 12</td>
              </tr>
              <tr className="bg-surface/30">
                <td className="py-3 px-4 font-medium">XL</td>
                <td className="py-3 px-4">96 - 102 cm</td>
                <td className="py-3 px-4">78 - 84 cm</td>
                <td className="py-3 px-4">104 - 110 cm</td>
                <td className="py-3 px-4">42 / 14</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-surface p-4 rounded-sm border border-border/30 space-y-2">
          <h4 className="font-heading italic text-sm text-text">Bespoke Fit Assistance</h4>
          <p className="font-body text-[11px] text-text/60 leading-relaxed">
            Need tailored advice on fit or custom alterations? Our private sales concierge is available via WhatsApp to assist with exact measurements before ordering.
          </p>
        </div>
      </div>
    </Modal>
  );
}
