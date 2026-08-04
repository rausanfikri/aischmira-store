import { createClient as createBrowserClient } from '@/lib/supabase/client';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface UserSession {
  userId: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
}

export class AuthService {
  private getClient() {
    return createBrowserClient();
  }

  /**
   * Initiate Google OAuth Sign-In flow.
   * Redirects user to Google OAuth consent and back to /auth/callback.
   */
  public async signInWithGoogle(redirectTo?: string): Promise<Result<{ url?: string }, AppError>> {
    try {
      const supabase = this.getClient();
      const origin = typeof window !== 'undefined' ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
      const callbackUrl = `${origin}/auth/callback${redirectTo ? `?next=${encodeURIComponent(redirectTo)}` : ''}`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: callbackUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        return failure(new AppError(error.message, 'AUTH_OAUTH_ERROR'));
      }

      return success({ url: data.url || undefined });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to initiate Google authentication';
      return failure(new AppError(msg, 'AUTH_ERROR'));
    }
  }

  /**
   * Sign out the current authenticated user and clear session cookies.
   */
  public async signOut(): Promise<Result<void, AppError>> {
    try {
      const supabase = this.getClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        return failure(new AppError(error.message, 'AUTH_SIGNOUT_ERROR'));
      }
      return success(undefined);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to sign out';
      return failure(new AppError(msg, 'AUTH_SIGNOUT_ERROR'));
    }
  }

  /**
   * Retrieve current authenticated user session metadata.
   */
  public async getCurrentUser(): Promise<Result<UserSession | null, AppError>> {
    try {
      const supabase = this.getClient();
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        return success(null);
      }

      const session: UserSession = {
        userId: user.id,
        email: user.email || '',
        fullName: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0],
        avatarUrl: user.user_metadata?.avatar_url || user.user_metadata?.picture,
      };

      return success(session);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch user session';
      return failure(new AppError(msg, 'AUTH_SESSION_ERROR'));
    }
  }

  /* -------------------------------------------------------------------------- */
  /* FUTURE AUTHENTICATION EXTENSION POINTS (APPLE, EMAIL/PASS, MAGIC LINK, OTP) */
  /* -------------------------------------------------------------------------- */

  public async signInWithApple(): Promise<Result<never, AppError>> {
    return failure(new AppError('Apple Login architecture prepared for future sprint', 'NOT_IMPLEMENTED'));
  }

  public async signInWithEmailPassword(): Promise<Result<never, AppError>> {
    return failure(new AppError('Email & Password architecture prepared for future sprint', 'NOT_IMPLEMENTED'));
  }

  public async signInWithMagicLink(): Promise<Result<never, AppError>> {
    return failure(new AppError('Magic Link architecture prepared for future sprint', 'NOT_IMPLEMENTED'));
  }

  public async sendOTP(): Promise<Result<never, AppError>> {
    return failure(new AppError('OTP architecture prepared for future sprint', 'NOT_IMPLEMENTED'));
  }
}

export const authService = new AuthService();
