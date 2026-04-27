import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en'],
  defaultLocale: 'tr'
});

export const config = {
  // Sadece sayfaları yakala, resimleri veya CSS'i engelleme
  matcher: ['/((?!api|_next|.*\\..*).*)']
};