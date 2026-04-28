'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe2, ChevronDown, FileText, ClipboardList } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const t = useTranslations('Navbar'); 
  const locale = useLocale(); 
  const router = useRouter();
  const pathname = usePathname(); 

  const toggleLanguage = () => {
    const nextLocale = locale === 'tr' ? 'en' : 'tr';
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="fixed w-full z-50 bg-sand-50/90  border-b border-sand-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link 
            href={`/${locale}`} 
            onClick={(e) => {
              if (pathname === `/${locale}`) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex-shrink-0 flex items-center gap-4 group"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Gökçe Toluç Saklı Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center mt-1">
              {/* uppercase kaldırıldı, font ve boşluklar ayarlandı */}
              <span className="text-xs md:text-sm font-bold text-ink-light tracking-wide leading-none mb-1.5">
                Klinik Psikolog
              </span>
              <span className="text-lg md:text-[22px] font-extrabold text-ink-dark tracking-wide leading-none whitespace-nowrap">
                Gökçe TOLUÇ SAKLI
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            <Link href={`/${locale}#about`} className="text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap">{t('about')}</Link>
            <Link href={`/${locale}#services`} className="text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap">{t('services')}</Link>
            
            <div 
              className="relative h-20 flex items-center"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap"
              >
                Ölçek & Form
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[70px] w-56 bg-white border border-sand-500/20 shadow-xl rounded-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href={`/${locale}/scales`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-sage-50 text-ink-dark transition-colors group"
                  >
                    <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 group-hover:bg-white transition-colors">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold whitespace-nowrap">Klinik Ölçekler</span>
                      <span className="text-[10px] text-ink-light leading-none mt-1 whitespace-nowrap">Online Testler</span>
                    </div>
                  </Link>

                  <Link 
                    href={`/${locale}/forms`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 text-ink-dark transition-colors group mt-1"
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold whitespace-nowrap">Bilgi Formları</span>
                      <span className="text-[10px] text-ink-light leading-none mt-1 whitespace-nowrap">PDF Dökümanlar</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href={`/${locale}#contact`} className="text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap">{t('contact')}</Link>
            <Link href={`/${locale}#faq`} className="text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap">{t('faq')}</Link>
            
            <div className="flex items-center gap-4 xl:gap-6 pl-4 xl:pl-6 border-l border-sand-500/30">
              <div className="flex items-center gap-3 pr-4 border-r border-sand-500/30">
                <a href="https://www.linkedin.com/in/g%C3%B6k%C3%A7e-tolu%C3%A7-sakl%C4%B1-779a88172/" target="_blank" rel="noopener noreferrer" className="text-ink-light hover:text-sage-500 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/psikologgokcetoluc/" target="_blank" rel="noopener noreferrer" className="text-ink-light hover:text-sage-500 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-sm font-medium text-ink-light hover:text-sage-500 transition-colors whitespace-nowrap">
                <Globe2 className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
              </button>

              <Link href={`/${locale}#booking`} className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sage-500 text-white text-sm font-medium hover:bg-sage-700 transition-all shadow-sm whitespace-nowrap">
                {t('book')}
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4 relative z-50">
  {/* Dil Değiştirme Butonu */}
  <button 
    type="button" 
    onClick={(e) => {
      e.preventDefault();
      toggleLanguage();
    }}
    className="text-ink-light font-medium uppercase text-xs p-2 cursor-pointer touch-manipulation active:opacity-50"
    style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    {locale}
  </button>

  {/* Menü (3 Çizgi) Butonu */}
  <button 
    type="button" 
    onClick={(e) => {
      e.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }}
    className="text-ink-dark p-2 cursor-pointer touch-manipulation active:opacity-50 relative z-50"
    style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>
        </div>
      </div>

      {isMenuOpen && (
  <div className="lg:hidden bg-white border-b border-sand-500/20 absolute w-full left-0 top-20 z-40 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <Link href={`/${locale}#about`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark border-b border-sand-100">{t('about')}</Link>
            <Link href={`/${locale}#services`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark border-b border-sand-100">{t('services')}</Link>
            
            <div className="border-b border-sand-100 py-2">
               <p className="px-3 py-1 text-xs font-bold text-ink-light uppercase">Ölçek & Form</p>
               <Link href={`/${locale}/scales`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark hover:text-sage-500 pl-6 flex items-center gap-2">
                 <ClipboardList className="w-4 h-4 text-sage-500" /> Klinik Ölçekler
               </Link>
               <Link href={`/${locale}/forms`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark hover:text-sage-500 pl-6 flex items-center gap-2">
                 <FileText className="w-4 h-4 text-orange-500" /> Bilgi Formları
               </Link>
            </div>

            <Link href={`/${locale}#contact`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark border-b border-sand-100">{t('contact')}</Link>
            <Link href={`/${locale}#faq`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-ink-dark border-b border-sand-100">{t('faq')}</Link>
            
            <div className="pt-4 flex items-center justify-between">
              <div className="flex gap-6">
                <a href="https://www.instagram.com/psikologgokcetoluc/" target="_blank" rel="noopener noreferrer" className="text-sage-500"><InstagramIcon className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/g%C3%B6k%C3%A7e-tolu%C3%A7-sakl%C4%B1-779a88172/" target="_blank" rel="noopener noreferrer" className="text-sage-500"><LinkedinIcon className="w-6 h-6" /></a>
              </div>
              <Link href={`/${locale}#booking`} onClick={() => setIsMenuOpen(false)} className="bg-sage-500 text-white px-6 py-2 rounded-full text-sm font-medium">{t('book')}</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}