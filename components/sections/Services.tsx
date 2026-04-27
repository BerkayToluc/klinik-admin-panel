import { User, Users, Baby, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('s1Title'),
      description: t('s1Desc'),
      icon: <User className="w-6 h-6 text-sage-700" />,
    },
    {
      title: t('s2Title'),
      description: t('s2Desc'),
      icon: <Baby className="w-6 h-6 text-sage-700" />,
    },
    {
      title: t('s3Title'),
      description: t('s3Desc'),
      icon: <Users className="w-6 h-6 text-sage-700" />,
    },
    {
      title: t('s4Title'),
      description: t('s4Desc'),
      icon: <Globe className="w-6 h-6 text-sage-700" />,
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-ink-light">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-sand-50 border border-sand-500/20 hover:border-sage-500/40 hover:shadow-lg hover:shadow-sage-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-ink-dark mb-3">
                {service.title}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}