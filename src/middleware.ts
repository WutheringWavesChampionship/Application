import {
  ACCEPTED_LANGUAGES,
  LOCALE_COOKIE_NAME,
  SET_TOKEN_PATH,
  TG_AUTH_PATH,
  USER_TOKEN_COOKIE_NAME,
} from '@entities/constants';
import { getClientLocale } from '@features/server/localization';
import { NextResponse, NextRequest } from 'next/server';

const locales = ACCEPTED_LANGUAGES;

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith(TG_AUTH_PATH)) {
    return;
  }
  if (pathname.startsWith(SET_TOKEN_PATH)) {
    const token = searchParams.get(USER_TOKEN_COOKIE_NAME);
    searchParams.delete(USER_TOKEN_COOKIE_NAME);
    request.nextUrl.pathname = '/';
    const response = NextResponse.redirect(request.nextUrl);
    if (token) {
      response.cookies.set(USER_TOKEN_COOKIE_NAME, token, { secure: true });
    }
    return response;
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
  if (pathname.endsWith('.webp')) return;

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
