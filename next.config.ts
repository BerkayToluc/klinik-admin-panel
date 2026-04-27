import createNextIntlPlugin from 'next-intl/plugin';

// next-intl'e i18n dosyamızın tam yerini söylüyoruz
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);