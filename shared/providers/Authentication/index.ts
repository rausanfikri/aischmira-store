import { createContext } from 'react';

export interface AuthContextValue {
  isAuthenticated: boolean;
  userId: string | null;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
