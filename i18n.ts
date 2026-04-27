// @ts-nocheck
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['tr', 'en'];

export default getRequestConfig(async (context) => {
  // Hem yeni (requestLocale) hem eski (locale) sürümleri destekleyen güvenli yöntem
  const locale = context.locale || (context.requestLocale ? await context.requestLocale : 'tr');

  if (!locales.includes(locale)) notFound();

  return {
    locale: locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});