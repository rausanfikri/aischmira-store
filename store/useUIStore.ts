import { create } from 'zustand';

interface UIState {
  searchOpen: boolean;
  cartOpen: boolean;
  accountOpen: boolean;
  mobileOpen: boolean;
  activeMenu: 'collections' | 'categories' | null;
  setSearchOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  setAccountOpen: (open: boolean) => void;
  setMobileOpen: (open: boolean) => void;
  setActiveMenu: (menu: 'collections' | 'categories' | null) => void;
  closeAll: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  searchOpen: false,
  cartOpen: false,
  accountOpen: false,
  mobileOpen: false,
  activeMenu: null,
  setSearchOpen: (open) => set({ searchOpen: open, cartOpen: false, accountOpen: false, mobileOpen: false }),
  setCartOpen: (open) => set({ cartOpen: open, searchOpen: false, accountOpen: false, mobileOpen: false }),
  setAccountOpen: (open) => set({ accountOpen: open, searchOpen: false, cartOpen: false, mobileOpen: false }),
  setMobileOpen: (open) => set({ mobileOpen: open, searchOpen: false, cartOpen: false, accountOpen: false }),
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  closeAll: () => set({ searchOpen: false, cartOpen: false, accountOpen: false, mobileOpen: false, activeMenu: null }),
}));
