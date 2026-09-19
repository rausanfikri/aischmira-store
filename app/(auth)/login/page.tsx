import { AuthForm } from "@/components/account/AuthForm";
import { getSupabaseConfig } from "@/lib/supabase/config";
export const metadata = { title: "Sign in" };
export default function Page() { return <AuthForm configured={!!getSupabaseConfig()}/>; }
