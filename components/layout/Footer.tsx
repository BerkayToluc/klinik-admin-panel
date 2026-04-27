'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navbar'); 
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-dark text-sand-50 py-12 lg:py-16 border-t border-ink-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* GÜNCELLENEN LOGO KISMI */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-4 mb-6 w-fit group">
              <div className="relative w-16 h-16 bg-white/95 rounded-2xl p-2 shadow-inner group-hover:scale-105 transition-transform flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Gökçe Toluç Saklı Logo" 
                  fill 
                  className="object-contain p-1" // Logoyu sığdırır ve kesilmesini engeller
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white tracking-wide">
                  Gökçe Toluç Saklı
                </span>
                <span className="text-[10px] text-sand-50/40 uppercase tracking-[0.2em] font-medium">
                   Clinical Psychologist
                </span>
              </div>
            </Link>
            <p className="text-sand-50/70 text-sm leading-relaxed max-w-xs">{t('slogan')}</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-medium text-white mb-6">{t('quickLinks')}</h4>
            <nav className="flex flex-col space-y-3">
              <Link href={`/${locale}#about`} className="text-sand-50/80 hover:text-white transition-colors text-sm">{navT('about')}</Link>
              <Link href={`/${locale}#services`} className="text-sand-50/80 hover:text-white transition-colors text-sm">{navT('services')}</Link>
              <Link href={`/${locale}#contact`} className="text-sand-50/80 hover:text-white transition-colors text-sm">{navT('contact')}</Link>
              <Link href={`/${locale}#faq`} className="text-sand-50/80 hover:text-white transition-colors text-sm">{navT('faq')}</Link>
            </nav>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-medium text-white mb-6">{t('connect')}</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/g%C3%B6k%C3%A7e-tolu%C3%A7-sakl%C4%B1-779a88172/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage-500 transition-colors text-white"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/psikologgokcetoluc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage-500 transition-colors text-white"><InstagramIcon className="w-5 h-5" /></a>
              <a href="mailto:uzmpskgokce@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage-500 transition-colors text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sand-50/60">&copy; {currentYear} {t('copyright')}</p>
          <div className="flex gap-6 text-sm text-sand-50/60">
            <Link href={`/${locale}/kvkk`} className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/kvkk`} className="hover:text-white transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}