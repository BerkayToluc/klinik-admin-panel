'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('Gallery');

  const galleryItems = [
    {
      src: "/images/3.jpeg", 
      alt: "Seminer ve Sunum",
      title: t('g1Title'),
      description: t('g1Desc')
    },
    {
      src: "/images/2.jpeg", 
      alt: "Ekip Çalışması",
      title: t('g2Title'),
      description: t('g2Desc')
    },
    {
      src: "/images/4.jpeg", 
      alt: "Eğitim Programları",
      title: t('g3Title'),
      description: t('g3Desc')
    },
    {
      src: "/images/5.jpeg", 
      alt: "Mesleki Gelişim",
      title: t('g4Title'),
      description: t('g4Desc')
    },
    {
      src: "/images/seminer.jpeg", 
      alt: "Eğitim ve Seminer Sunumu",
      title: t('g5Title'),
      description: t('g5Desc')
    },
    {
      src: "/images/Sertifika.jpeg",
      alt: "Kongre ve Bildiriler",
      title: t('g6Title'),
      description: t('g6Desc')
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-sand-50">
      {/* max-w-7xl yerine max-w-6xl kullanarak tüm galeriyi ekranda biraz daha toplu hale getirdik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-ink-light">
            {t('description')}
          </p>
        </div>
        
        {/* lg:grid-cols-3 ile yan yana 3 tane durmaya devam ediyor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-500/20 group hover:shadow-lg hover:border-sage-500/40 transition-all duration-300 flex flex-col">
              
              {/* aspect-[4/3] yerine aspect-[3/2] kullandık. Fotoğraf kalitesi aynı kalır ama ekranda dikey olarak daha az yer kaplar */}
              <div className="relative aspect-[3/2] overflow-hidden bg-sand-100">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ink-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}