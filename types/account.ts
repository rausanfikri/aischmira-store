export interface AccountUser { id: string; email: string; }

export type AccountSession =
  | { status: "authenticated"; user: AccountUser }
  | { status: "signed-out" | "unconfigured" | "unavailable" };

export type AccountData<T> =
  | { status: "ready"; data: T }
  | { status: "unavailable"; message: string };

export interface AccountProfile { fullName: string | null; phone: string | null; }

export interface AccountOrder {
  id: string;
  number: string;
  createdAt: string;
  status: string | null;
  total: number;
  itemCount: number | null;
  skus: string[];
}

export interface LoyaltyTransaction {
  id: string;
  amount: number;
  type: "EARNED" | "REDEEMED" | "EXPIRED";
  description: string;
  createdAt: string;
}

export interface AccountLoyalty {
  available: number | null;
  earned: number | null;
  used: number | null;
  transactions: LoyaltyTransaction[];
}

export interface AccountActionState {
  status: "idle" | "error" | "success";
  message: string;
}
