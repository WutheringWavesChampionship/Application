import {
  ACCEPTED_LANGUAGES,
  LOCALE_COOKIE_NAME,
  TG_AUTH_PATH,
} from '@entities/constants';
import { getClientLocale } from '@features/server/localization';
import { NextResponse, NextRequest } from 'next/server';

const locales = ACCEPTED_LANGUAGES;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname)
  if (pathname.startsWith(TG_AUTH_PATH)) {
    console.log(TG_AUTH_PATH)
    return
  }

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE_NAME, pathnameLocale, { secure: true });
    response.headers.set(LOCALE_COOKIE_NAME, pathnameLocale);
    return response;
  }
  if (pathname.startsWith('/storage/')) {
    const url = new URL(request.url);
    url.hostname = process.env.SERVER_API_URL as string;
    url.href = `${process.env.SERVER_API_URL}${pathname}`;
    const response = NextResponse.rewrite(url);
    return response;
  }
  if (pathname.endsWith('.svg')) return;
  if (pathname.endsWith('.png')) return;
  if (pathname.endsWith('.jpg')) return;
  if (pathname.endsWith('.jpeg')) return;

  // Redirect if there is no locale
  const locale = getClientLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set(LOCALE_COOKIE_NAME, locale, { secure: true });
  response.headers.set(LOCALE_COOKIE_NAME, locale);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/',
  ],
};
