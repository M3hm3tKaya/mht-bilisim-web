// Locale detection & redirect middleware
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect preferred language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLocale = acceptLanguage.includes('tr') ? 'tr' : acceptLanguage.includes('en') ? 'en' : defaultLocale;

  // Redirect to the locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all paths except _next, api, static files
    '/((?!_next|api|favicon\\.ico|.*\\..*).*)',
  ],
};
