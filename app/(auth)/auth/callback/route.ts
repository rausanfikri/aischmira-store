import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { safeAccountRedirect } from "@/lib/supabase/config";
export async function GET(request: Request) { const { searchParams, origin } = new URL(request.url); const code = searchParams.get("code"); try {
    const client = await createClient();
    if (code && client) {
        const { error } = await client.auth.exchangeCodeForSession(code);
        if (!error)
            return NextResponse.redirect(new URL(safeAccountRedirect(searchParams.get("next")), origin));
    }
}
catch { } return NextResponse.redirect(new URL("/login?error=auth_failed", origin)); }
