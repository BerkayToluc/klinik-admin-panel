import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function QuoteBanner() {
  const t = useTranslations('Quote');
  
  return (
    <section className="py-24 bg-sage-500 text-white overflow-hidden relative">
      {/* Arka plandaki büyük estetik tırnak işareti */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center">
        <span className="text-[20rem] font-serif leading-none italic">"</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Sol Taraftaki Logo */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 shadow-2xl">
            <Image 
              src="/logo.png" 
              alt="Gökçe Toluç Saklı Logo" 
              fill 
              className="object-contain p-2"
            />
          </div>

          {/* Sağ Taraftaki Metin Grubu */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-serif italic leading-snug mb-8">
              {t('text')}
            </h2>
            <div className="w-12 h-px bg-white/30 mb-6 mx-auto md:mx-0"></div>
            <p className="text-sm uppercase tracking-widest font-medium opacity-80">
              {t('author')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}