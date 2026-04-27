import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero'); // Çevirmenimizi Hero sözlüğüne bağladık

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Metin Kısmı */}
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-dark leading-tight mb-6">
              {t('title1')} <br/>
              <span className="text-sage-500">{t('title2')}</span>
            </h1>
            <p className="text-lg text-ink-light mb-8 leading-relaxed">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#booking"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-sage-500 text-white font-medium hover:bg-sage-700 transition-all shadow-sm"
                )}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('btnBook')}
              </Link>
              <Link 
                href="#about"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-sand-100 text-ink-dark font-medium hover:bg-sand-500 transition-all"
                )}
              >
                {t('btnAbout')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Görsel Kısmı */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-sand-100 relative shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/1.jpeg"
                alt="Gökçe Toluç Saklı"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-3xl border-2 border-sage-100 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
}