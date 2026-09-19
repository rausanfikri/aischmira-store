import { AuthForm } from "@/components/account/AuthForm";
import { getSupabaseConfig } from "@/lib/supabase/config";
export const metadata = { title: "Register" };
export default function Page() { return <AuthForm register configured={!!getSupabaseConfig()}/>; }
