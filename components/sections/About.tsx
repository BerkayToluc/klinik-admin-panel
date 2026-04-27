import { GraduationCap, HeartHandshake, Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About'); // Çevirmenimizi About sözlüğüne bağladık

  const highlights = [
    {
      icon: <Globe2 className="w-6 h-6 text-sage-500" />,
      title: t('card1Title'),
      description: t('card1Desc')
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-sage-500" />,
      title: t('card2Title'),
      description: t('card2Desc')
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-sage-500" />,
      title: t('card3Title'),
      description: t('card3Desc')
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sol Taraf: Metin */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-dark mb-6">
              {t('titlePrefix')} <span className="text-sage-500">Gökçe Toluç Saklı</span>
            </h2>
            <div className="space-y-4 text-lg text-ink-light leading-relaxed">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>
          </div>

          {/* Sağ Taraf: Kartlar */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-sand-50 border border-sand-500/30 hover:border-sage-500/50 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink-dark mb-2">{item.title}</h3>
                  <p className="text-ink-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}