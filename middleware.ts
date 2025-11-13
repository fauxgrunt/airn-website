// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set the default locale
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const { pathname } = request.nextUrl;

  // Check if the request is for the root (/)
  if (pathname === '/') {
    // If so, redirect to the default locale (/en)
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Otherwise, continue as normal
  return NextResponse.next();
}

// Config to specify which paths the middleware should run on
export const config = {
  matcher: [
    // Match only the root path
    '/',
  ],
};