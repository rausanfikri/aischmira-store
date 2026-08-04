# AISCHMIRA.STORE — Authentication & Identity Architecture Specification

## Overview
AISCHMIRA.STORE uses **Supabase Authentication** as the identity provider. Authentication logic is isolated behind Clean Architecture interfaces (`AuthService`, `CustomerService`, `ICustomerRepository`) so that UI components remain decoupled from identity provider implementation details.

## Authentication Methods

### Active Method (Sprint I1.2)
- **Google Sign-In (OAuth 2.0)**: Primary sign-in method utilizing PKCE authorization code flow with automatic user profile and loyalty account provisioning.

### Prepared Provider Extension Points
The system architecture is designed to support the following additional providers without breaking existing UI components or database relations:
- **Apple Login** (`signInWithApple()`)
- **Email & Password** (`signInWithEmailPassword()`)
- **Magic Link** (`signInWithMagicLink()`)
- **OTP / WhatsApp OTP** (`sendOTP()`)

---

## Session Management & `@supabase/ssr`

Authentication session management operates in SSR mode via `@supabase/ssr`:
1. **Browser Client** (`lib/supabase/client.ts`): Instantiated in Client Components with automatic PKCE state management and token persistence.
2. **Server Client** (`lib/supabase/server.ts`): Instantiated in Server Components, Route Handlers, and Server Actions utilizing Next.js `cookies()`.
3. **Middleware** (`middleware.ts`): Performs eager session token validation and refresh on every incoming request, applying refreshed cookies to the HTTP response before page rendering.

---

## Protected Routes & Authorization

The following routes require an active user session. Unauthenticated access attempts are intercepted by Next.js Middleware and redirected to `/login?redirectTo=<target_path>`:

- `/account`
- `/account/dashboard`
- `/account/profile`
- `/account/orders`
- `/account/loyalty`
- `/account/membership`
- `/account/saved-looks`
- `/account/settings`

---

## PKCE OAuth Callback Flow

1. User clicks **"Continue with Google"** on `/login`.
2. `authService.signInWithGoogle()` calls `supabase.auth.signInWithOAuth()`, initiating redirect to Google OAuth consent.
3. Upon approval, Google redirects back to `/auth/callback?code=...&next=/account/dashboard`.
4. Route handler `app/(auth)/auth/callback/route.ts` exchanges the authorization code for a session token using `supabase.auth.exchangeCodeForSession()`.
5. Session cookies are written to the browser, and the user is redirected to their target destination.
