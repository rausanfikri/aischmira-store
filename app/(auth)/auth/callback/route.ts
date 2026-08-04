import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * Auth Callback Route Handler for PKCE OAuth exchanges (e.g. Google Sign-In redirect).
 * Exchanges authorization code for a session and sets authentication cookies.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/account/dashboard';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const isRelative = next.startsWith('/');
      const destination = isRelative ? `${origin}${next}` : next;
      return NextResponse.redirect(destination);
    }
  }

  // Auth failure fallback redirect to login
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
