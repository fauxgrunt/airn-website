// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config'; // We import the config you just made

// The function MUST be named 'proxy'
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the path already has a locale (e.g., /en/partners)
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Path is correct, do nothing.
  }

  // 2. If no locale, redirect to our default (English)
  const { defaultLocale } = i18n;
  
  // Rebuild the URL with the default locale
  // e.g., a request for /partners will be redirected to /en/partners
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

// 3. Configure the matcher
export const config = {
  // This matcher ensures the proxy only runs on page requests
  // It skips files, images, and API routes.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};