"use client";

import * as React from "react";
import { User } from "@/types";

interface AccountContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AccountContext = React.createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>({
    id: "user_demo_1",
    email: "client@aischmira.store",
    firstName: "Victoria",
    lastName: "Valence",
    points: 1250,
  });

  const login = (email: string) => {
    setUser({
      id: `user_${Date.now()}`,
      email,
      firstName: "Valued",
      lastName: "Member",
      points: 500,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AccountContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const context = React.useContext(AccountContext);
  if (!context) {
    throw new Error("useAccountContext must be used within an AccountProvider");
  }
  return context;
}
