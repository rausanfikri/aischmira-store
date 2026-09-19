"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useDemoAccount } from "@/store/demo-account";
export function AccountNav() { const router = useRouter(); const demo = useDemoAccount(); const [error, setError] = useState(""); return <nav className="filter-links" aria-label="Account"><Link href="/account">Overview</Link><Link href="/account/profile">Profile</Link><Link href="/account/orders">Orders</Link><Link href="/account/loyalty">Loyalty</Link><button onClick={async () => { try {
    const result = await createClient()?.auth.signOut();
    if (result?.error) {
        setError("Sign out failed. Please retry.");
        return;
    }
    demo.save({ active: false, email: "", name: "", phone: "" });
    router.push("/login");
    router.refresh();
}
catch {
    setError("Sign out is unavailable.");
} }}>Sign out</button><span role="status">{error}</span></nav>; }
