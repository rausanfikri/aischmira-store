"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const COLLECTIONS = {
  new: ["FEMME", "HER", "SHE"],
  classic: ["Bianca", "Priscila", "Safira", "Briana", "Tifani", "Zamira", "Gendis", "Amara", "Dasya", "Jolly", "Aveline", "Luna"],
  scarf: ["AM Monogram", "Floral Meadow", "Chili Chic", "Garlic Bloom", "Spice Blossom"]
};

const CATEGORIES = [
  "Outerwear", "Tops", "Bottoms", "Dress", "Long Pyjama Set", "Short Pyjama Set", "Accessories"
];

export default function DesktopNav() {
  return (
    <NavigationMenu.Root className="relative z-10 hidden lg:flex w-full items-center">
      <NavigationMenu.List className="flex items-center gap-8 m-0 p-0 list-none">
        
        {/* Collections Item */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex items-center gap-1 font-body text-[11px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors py-8 bg-transparent outline-none">
            Collections
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen flex justify-start bg-surface border-t border-border/50 shadow-lg">
              <div className="mx-auto w-full max-w-7xl px-8 py-16 grid grid-cols-4 gap-12">
                <div>
                  <h4 className="font-heading italic text-xl mb-6 text-primary">New Collections</h4>
                  <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.new.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading italic text-xl mb-6">Classic</h4>
                  <ul className="grid grid-cols-2 gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.classic.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading italic text-xl mb-6">Scarves</h4>
                  <ul className="flex flex-col gap-4 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.scarf.map(item => (
                      <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Editorial Image */}
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image src="/images/mega-menu.png" alt="Editorial Collection" fill className="object-cover object-top hover:scale-105 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-black/10 flex items-end p-6">
                    <span className="text-surface font-heading italic text-2xl drop-shadow-md">The Editorial Edit</span>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Categories Item */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex items-center gap-1 font-body text-[11px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors py-8 bg-transparent outline-none">
            Categories
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen bg-surface border-t border-border/50 shadow-lg">
              <div className="mx-auto w-full max-w-7xl px-8 py-16 flex justify-center">
                <ul className="grid grid-cols-4 gap-x-16 gap-y-6 font-body text-xs tracking-widest uppercase text-text/80 text-center">
                  {CATEGORIES.map(item => (
                    <li key={item}><Link href="#" className="hover:text-primary transition-colors block">{item}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-[0px] w-full overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
}
