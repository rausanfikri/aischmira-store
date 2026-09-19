"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useDemoAccount } from "@/store/demo-account";
export function AuthForm({ register = false, configured }: {
    register?: boolean;
    configured: boolean;
}) {
    const [message, setMessage] = useState("");
    const [busy, setBusy] = useState(false);
    const router = useRouter();
    const demo = useDemoAccount();
    async function submit(form: FormData) { setBusy(true); setMessage(""); try {
        const client = createClient();
        if (!client) {
            setMessage("Authentication is not configured. Use the demo account preview below.");
            return;
        }
        const email = String(form.get("email"));
        const password = String(form.get("password"));
        const result = register ? await client.auth.signUp({ email, password }) : await client.auth.signInWithPassword({ email, password });
        if (result.error)
            setMessage(result.error.message);
        else if (register && !result.data.session)
            setMessage("Check your email to confirm your account.");
        else {
            router.push("/account");
            router.refresh();
        }
    }
    catch {
        setMessage("Authentication is temporarily unavailable.");
    }
    finally {
        setBusy(false);
    } }
    return <div className="auth-panel"><p className="eyebrow">Your AISCHMIRA</p><h1>{register ? "Create an account" : "Welcome back"}</h1><p>{configured ? "Sign in with your email." : "Production authentication is not configured. Explore the account prototype below."}</p><form action={submit}><label>Email<input type="email" name="email" required autoComplete="email"/></label><label>Password<input type="password" name="password" required minLength={8} autoComplete={register ? "new-password" : "current-password"}/></label><button className="button wide" disabled={!configured || busy}>{register ? "Register" : "Sign in"}</button><p role="status">{message}</p></form><Link href={register ? "/login" : "/register"}>{register ? "Already have an account? Sign in" : "New to AISCHMIRA? Register"}</Link><hr /><button className="button secondary wide" onClick={() => { demo.save({ email: "", name: "", phone: "", active: true }); router.push("/account/profile"); }}>Explore demo account</button><p className="muted">Demo profile stays in this tab only. No real account, orders or loyalty points are created.</p></div>;
}
