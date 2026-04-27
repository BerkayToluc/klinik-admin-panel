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
      // DİKKAT: Dosyanın adının tam olarak bu olduğuna emin ol (.jpg veya .jpeg)
      src: "/images/seminer.jpeg", 
      alt: "Eğitim ve Seminer Sunumu",
      title: t('g5Title'),
      description: t('g5Desc')
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-sand-50">
      {/* 5 eleman sığsın diye max genişliği (max-w-7xl yerine max-w-[90rem]) artırdık */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-ink-light">
            {t('description')}
          </p>
        </div>
        
        {/* lg:grid-cols-5 ile bilgisayarda 5 sütun yan yana olacak */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-500/20 group hover:shadow-lg hover:border-sage-500/40 transition-all duration-300 flex flex-col">
              
              {/* aspect-[4/3] yatay dikdörtgen formatıdır, fotoğrafların kesilmeden sığmasını sağlar */}
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-ink-dark mb-2">{item.title}</h3>
                  <p className="text-xs text-ink-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}