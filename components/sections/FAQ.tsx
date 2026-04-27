'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink-dark mb-4">{t('title')}</h2>
          <p className="text-ink-light">{t('description')}</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-sand-500/30 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center bg-sand-50 hover:bg-sand-100 transition-colors"
              >
                <span className="font-semibold text-ink-dark">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-sage-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-sand-500/20 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-ink-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}