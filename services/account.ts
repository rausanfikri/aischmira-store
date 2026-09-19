import "server-only";
import { cache } from "react";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { getSupabaseConfig } from "@/lib/supabase/config";
import type { AccountData, AccountLoyalty, AccountOrder, AccountProfile, AccountSession } from "@/types/account";

const profileSchema = z.object({ full_name: z.string().nullable(), phone: z.string().nullable() });
const orderSchema = z.object({
  id: z.string().uuid(), order_number: z.string(), created_at: z.iso.datetime({ offset: true }),
  status: z.string().nullable(), total_amount: z.coerce.number().finite().nonnegative(),
  item_count: z.number().int().nonnegative().nullable(), skus: z.array(z.string()).nullable(),
});
const loyaltySchema = z.object({
  points_balance: z.number().int().nullable(), lifetime_points: z.number().int().nullable(),
  points_used: z.number().int().nonnegative().nullable().optional(),
});
const transactionSchema = z.object({
  id: z.string().uuid(), amount: z.number().int(), type: z.enum(["EARNED", "REDEEMED", "EXPIRED"]),
  description: z.string(), created_at: z.iso.datetime({ offset: true }),
});

const unavailable = <T>(message: string): AccountData<T> => ({ status: "unavailable", message });

export const getAccountSession = cache(async (): Promise<AccountSession> => {
  if (!getSupabaseConfig()) return { status: "unconfigured" };
  try {
    const client = await createClient();
    if (!client) return { status: "unconfigured" };
    const { data, error } = await client.auth.getUser();
    if (error) return { status: error.name === "AuthSessionMissingError" ? "signed-out" : "unavailable" };
    if (!data.user?.email) return { status: "signed-out" };
    return { status: "authenticated", user: { id: data.user.id, email: data.user.email } };
  } catch { return { status: "unavailable" }; }
});

export async function getAccountProfile(): Promise<AccountData<AccountProfile | null>> {
  const session = await getAccountSession();
  if (session.status !== "authenticated") return unavailable("Sign in to view your personal information.");
  try {
    const client = await createClient();
    if (!client) return unavailable("Your profile is temporarily unavailable.");
    const { data, error } = await client.from("profiles").select("full_name,phone").eq("id", session.user.id).maybeSingle();
    if (error) return unavailable("Your profile could not be loaded. Please try again later.");
    if (!data) return { status: "ready", data: null };
    const parsed = profileSchema.safeParse(data);
    if (!parsed.success) return unavailable("Your profile could not be loaded. Please contact us for assistance.");
    return { status: "ready", data: { fullName: parsed.data.full_name, phone: parsed.data.phone } };
  } catch { return unavailable("Your profile is temporarily unavailable."); }
}

export async function getAccountOrders(): Promise<AccountData<AccountOrder[]>> {
  const session = await getAccountSession();
  if (session.status !== "authenticated") return unavailable("Sign in to view your order history.");
  try {
    const client = await createClient();
    if (!client) return unavailable("Your order history is temporarily unavailable.");
    const { data, error } = await client.from("order_history_reference")
      .select("id,order_number,created_at,status,total_amount,item_count,skus")
      .eq("customer_id", session.user.id).order("created_at", { ascending: false }).limit(100);
    const parsed = z.array(orderSchema).safeParse(data);
    if (error || !parsed.success) return unavailable("Your order history could not be loaded. Please try again later.");
    return { status: "ready", data: parsed.data.map((order) => ({
      id: order.id, number: order.order_number, createdAt: order.created_at, status: order.status,
      total: order.total_amount, itemCount: order.item_count, skus: order.skus ?? [],
    })) };
  } catch { return unavailable("Your order history is temporarily unavailable."); }
}

export async function getAccountLoyalty(): Promise<AccountData<AccountLoyalty | null>> {
  const session = await getAccountSession();
  if (session.status !== "authenticated") return unavailable("Sign in to view your loyalty points.");
  try {
    const client = await createClient();
    if (!client) return unavailable("Your loyalty points are temporarily unavailable.");
    const [account, ledger] = await Promise.all([
      client.from("loyalty_accounts").select("points_balance,lifetime_points").eq("customer_id", session.user.id).maybeSingle(),
      client.from("loyalty_transactions").select("id,amount,type,description,created_at").eq("customer_id", session.user.id).order("created_at", { ascending: false }).limit(100),
    ]);
    if (account.error || ledger.error) return unavailable("Your loyalty information could not be loaded. Please try again later.");
    const transactions = z.array(transactionSchema).safeParse(ledger.data);
    if (!transactions.success) return unavailable("Your loyalty activity could not be loaded.");
    if (!account.data && transactions.data.length === 0) return { status: "ready", data: null };
    const parsed = account.data ? loyaltySchema.safeParse(account.data) : null;
    if (parsed && !parsed.success) return unavailable("Your loyalty points could not be loaded.");
    return { status: "ready", data: {
      available: parsed?.success ? parsed.data.points_balance : null,
      earned: parsed?.success ? parsed.data.lifetime_points : null,
      used: parsed?.success ? parsed.data.points_used ?? null : null,
      transactions: transactions.data.map((entry) => ({ id: entry.id, amount: entry.amount, type: entry.type, description: entry.description, createdAt: entry.created_at })),
    } };
  } catch { return unavailable("Your loyalty information is temporarily unavailable."); }
}
