'use client';

import { useState } from 'react';
import { Mail, MapPin, Calendar, Phone } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  const t = useTranslations('Contact');
  const locale = useLocale();
  
  // KVKK Onay Durumunu Tutan "State"
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-dark mb-4">{t('title')}</h2>
          <p className="text-lg text-ink-light">{t('description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-sand-50 p-8 rounded-3xl border border-sand-500/30">
              <h3 className="text-2xl font-bold text-ink-dark mb-6">{t('infoTitle')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-sage-700" /></div>
                  <div>
                    <p className="text-sm font-medium text-ink-light mb-2">{t('phone')}</p>
                    <div className="space-y-3">
                      <a href="tel:+908504304623" className="flex items-center gap-3 text-lg text-ink-dark hover:text-sage-500 transition-colors"><span className="text-xs px-2 py-1 rounded bg-white border border-sand-500/50 text-ink-light font-bold tracking-wide">TR</span>0850 430 46 23</a>
                      <a href="tel:+17725322880" className="flex items-center gap-3 text-lg text-ink-dark hover:text-sage-500 transition-colors"><span className="text-xs px-2 py-1 rounded bg-white border border-sand-500/50 text-ink-light font-bold tracking-wide">USA</span>+1 772 532 28 80</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-sage-700" /></div>
                  <div>
                    <p className="text-sm font-medium text-ink-light mb-1">{t('email')}</p>
                    <a href="mailto:uzmpskgokce@gmail.com" className="text-lg text-ink-dark hover:text-sage-500 transition-colors">uzmpskgokce@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0"><InstagramIcon className="w-5 h-5 text-sage-700" /></div>
                  <div>
                    <p className="text-sm font-medium text-ink-light mb-1">Instagram</p>
                    <a href="https://www.instagram.com/psikologgokcetoluc/" target="_blank" rel="noopener noreferrer" className="text-lg text-ink-dark hover:text-sage-500 transition-colors">{t('instagram')}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0"><LinkedinIcon className="w-5 h-5 text-sage-700" /></div>
                  <div>
                    <p className="text-sm font-medium text-ink-light mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/g%C3%B6k%C3%A7e-tolu%C3%A7-sakl%C4%B1-779a88172/" target="_blank" rel="noopener noreferrer" className="text-lg text-ink-dark hover:text-sage-500 transition-colors">{t('linkedin')}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-sage-700" /></div>
                  <div>
                    <p className="text-sm font-medium text-ink-light mb-1">{t('location')}</p>
                    <p className="text-lg text-ink-dark">{t('locationDesc1')}<br/><span className="text-base text-ink-light">{t('locationDesc2')}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Takvim Alanı */}
          <div id="booking" className="bg-white rounded-3xl border border-sand-500/30 shadow-lg overflow-hidden flex flex-col h-full min-h-[600px]">
            
            {/* Üst Kısım ve KVKK Kutusu */}
            <div className="p-6 md:p-8 border-b border-sand-500/20 bg-sand-50">
              <h3 className="text-2xl font-bold text-ink-dark flex items-center gap-2">
                <Calendar className="w-6 h-6 text-sage-500" />
                {t('calendarTitle')}
              </h3>
              <p className="text-ink-light mt-2 mb-6">{t('calendarDesc')}</p>

              {/* Checkbox (Onay Kutusu) */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-sand-500/30 shadow-sm transition-colors hover:border-sage-500/40">
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    id="kvkk-checkbox"
                    checked={isKvkkAccepted}
                    onChange={(e) => setIsKvkkAccepted(e.target.checked)}
                    className="w-5 h-5 accent-sage-600 rounded cursor-pointer"
                  />
                </div>
                <label htmlFor="kvkk-checkbox" className="text-sm text-ink-dark cursor-pointer select-none leading-relaxed">
                  <Link href={`/${locale}/kvkk`} target="_blank" className="text-sage-600 font-bold hover:underline">
                    KVKK Aydınlatma Metni
                  </Link>
                  {t('kvkkCheck')}
                </label>
              </div>
            </div>

            {/* Takvimin Kendisi ve Bulanık Katman */}
            <div className="flex-grow w-full h-full relative bg-white overflow-hidden">
              
              {/* Takvim Gizliyken Çıkan Uyarı Katmanı */}
              {!isKvkkAccepted && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-white/70 backdrop-blur-sm transition-all duration-300">
                   <Calendar className="w-12 h-12 text-sage-600/60 mb-4" />
                   <p className="text-lg font-bold text-ink-dark mb-2">{t('kvkkRequiredTitle')}</p>
                   <p className="text-sm text-ink-dark/70 max-w-sm">{t('kvkkRequiredDesc')}</p>
                </div>
              )}

              {/* Calendly iframe */}
              <iframe
                src="https://calendly.com/uzmpskgokce/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Randevu Takvimi"
                className={`w-full h-full min-h-[500px] transition-all duration-500 ${isKvkkAccepted ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}
              ></iframe>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}