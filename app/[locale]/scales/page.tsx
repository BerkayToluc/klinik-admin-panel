'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ClipboardList, Search, X, Clock, HelpCircle, Play } from 'lucide-react';
import { useLocale } from 'next-intl';

// Tüm testlerimizin listesi ve "Akıllı Motor" için kullanılacak ID'leri (slug)
const scalesList = [
  { 
    id: 'beck-depresyon', 
    title: 'Beck Depresyon Envanteri (BDE)', 
    description: 'Son bir hafta içindeki duygu durumunuzu ve depresif belirtilerinizi değerlendiren klinik ölçek.', 
    questionCount: 21, 
    estimatedTime: '5 dk',
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'group-hover:border-blue-300'
  },
  { 
    id: 'beck-anksiyete', 
    title: 'Beck Anksiyete Ölçeği (BAÖ)', 
    description: 'Kaygı ve endişe durumlarında yaşanan bedensel ve ruhsal belirtilerin şiddetini ölçen envanter.', 
    questionCount: 21, 
    estimatedTime: '5 dk',
    color: 'bg-teal-50 text-teal-600',
    borderColor: 'group-hover:border-teal-300'
  },
  { 
    id: 'hamilton-anksiyete', 
    title: 'Hamilton Anksiyete Değerlendirme Ölçeği (HARS)', 
    description: 'Anksiyete seviyesini ve belirtilerin şiddetini belirlemek için kullanılan klinik değerlendirme formu.', 
    questionCount: 14, 
    estimatedTime: '10 dk',
    color: 'bg-indigo-50 text-indigo-600',
    borderColor: 'group-hover:border-indigo-300'
  },
  { 
    id: 'hamilton-depresyon', 
    title: 'Hamilton Depresyon Değerlendirme Ölçeği', 
    description: 'Depresyonun şiddetini ve belirti profilini belirlemek amacıyla uzman tarafından uygulanan değerlendirme formu.', 
    questionCount: 17, 
    estimatedTime: '15 dk',
    color: 'bg-cyan-50 text-cyan-600',
    borderColor: 'group-hover:border-cyan-300'
  },
  { 
    id: 'beden-duyumlari', 
    title: 'Beden Duyumları Ölçeği (BDÖ)', 
    description: 'Anksiyete anında ortaya çıkan fiziksel duyumların kişide yarattığı korku düzeyini ölçer.', 
    questionCount: 18, 
    estimatedTime: '5 dk',
    color: 'bg-orange-50 text-orange-600',
    borderColor: 'group-hover:border-orange-300'
  },
  { 
    id: 'young-sema', 
    title: 'Young Şema Ölçeği (YSÖ-K3)', 
    description: 'Çocukluk çağında gelişen ve yetişkinlikte tekrarlayan temel inanç ve şemaları analiz eden geniş kapsamlı test.', 
    questionCount: 90, 
    estimatedTime: '20 dk',
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'group-hover:border-purple-300'
  },
  { 
    id: 'padua', 
    title: 'Padua Envanteri', 
    description: 'Günlük yaşamda karşılaşılan takıntılı düşünce ve zorlayıcı davranışların derecesini ölçen değerlendirme.', 
    questionCount: 60, 
    estimatedTime: '15 dk',
    color: 'bg-rose-50 text-rose-600',
    borderColor: 'group-hover:border-rose-300'
  },
  { 
    id: 'otomatik-dusunceler', 
    title: 'Otomatik Düşünceler Ölçeği', 
    description: 'Kişinin zihninden istemsizce geçen olumsuz düşünce kalıplarını ve bunların sıklığını değerlendiren klinik ölçek.', 
    questionCount: 30, 
    estimatedTime: '7 dk',
    color: 'bg-yellow-50 text-yellow-600',
    borderColor: 'group-hover:border-yellow-300'
  },
  { 
    id: 'liebowitz', 
    title: 'Liebowitz Sosyal Fobi Ölçeği', 
    description: 'Sosyal ortamlarda duyulan kaygı ve bu ortamlardan kaçınma davranışlarını ayrı ayrı inceleyen test.', 
    questionCount: 24, 
    estimatedTime: '10 dk',
    color: 'bg-amber-50 text-amber-600',
    borderColor: 'group-hover:border-amber-300'
  },
  { 
    id: 'maudsley', 
    title: 'Maudsley Obsesif Kompulsif Soru Listesi', 
    description: 'Temizlik, kontrol etme ve yavaşlık gibi takıntı alt türlerini Doğru/Yanlış formatında inceleyen liste.', 
    questionCount: 37, 
    estimatedTime: '10 dk',
    color: 'bg-indigo-50 text-indigo-600',
    borderColor: 'group-hover:border-indigo-300'
  },
  { 
    id: 'yeme-tutumu', 
    title: 'Yeme Tutumu Testi (EAT-40)', 
    description: 'Yeme alışkanlıkları, kilo kontrolü ve beslenme ile ilgili tutumları değerlendiren klinik form.', 
    questionCount: 40, 
    estimatedTime: '15 dk',
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'group-hover:border-emerald-300'
  },
  { 
    id: 'mmpi', 
    title: 'MMPI Çok Yönlü Kişilik Envanteri', 
    description: 'Kişilik özelliklerini ve psikolojik durumları çok boyutlu ve detaylı bir şekilde analiz eden devasa klinik test.', 
    questionCount: 566, 
    estimatedTime: '45-60 dk',
    color: 'bg-slate-100 text-slate-700',
    borderColor: 'group-hover:border-slate-400'
  },
  { 
    id: 'des', 
    title: 'Dissosiyatif Yaşantılar Ölçeği (DES)', 
    description: 'Günlük hayatınızda başınızdan geçmiş olabilecek kopukluk (dissosiyasyon) yaşantılarını değerlendirir.', 
    questionCount: 28, 
    estimatedTime: '10 dk',
    color: 'bg-violet-50 text-violet-600',
    borderColor: 'group-hover:border-violet-300'
  },
  { 
    id: 'panik-bozuklugu', 
    title: 'Panik Bozukluğu Şiddet Ölçeği (PBŞÖ)', 
    description: 'Panik ataklarının sıklığını, zorlanma düzeyini ve günlük yaşama olan etkisini ölçer.', 
    questionCount: 7, 
    estimatedTime: '5 dk',
    color: 'bg-red-50 text-red-600',
    borderColor: 'group-hover:border-red-300'
  },
  { 
    id: 'pbq-kisa', 
    title: 'Kişilik İnanç Ölçeği Kısa Form (PBQ-S1)', 
    description: 'Temel inançlarınızı ve kişilik örüntülerinizi değerlendiren çok boyutlu bir ölçektir.', 
    questionCount: 65, 
    estimatedTime: '15 dk',
    color: 'bg-fuchsia-50 text-fuchsia-600',
    borderColor: 'group-hover:border-fuchsia-300'
  },
  { 
    id: 'yale-brown', 
    title: 'Yale-Brown Obsesyon Kompülsiyon Ölçeği (Y-BOCS)', 
    description: 'Obsesif düşüncelerin ve kompülsif davranışların türünü, şiddetini ve günlük yaşama olan etkisini ölçer.', 
    questionCount: 19, 
    estimatedTime: '10 dk',
    color: 'bg-sky-50 text-sky-600',
    borderColor: 'group-hover:border-sky-300'
  },
  { 
    id: 'rosenberg', 
    title: 'Rosenberg Benlik Saygısı Envanteri', 
    description: 'Kişinin kendisine yönelik olumlu ve olumsuz tutumlarını, özdeğer ve benlik saygısı düzeyini kapsamlı olarak değerlendirir.', 
    questionCount: 63, 
    estimatedTime: '15 dk',
    color: 'bg-pink-50 text-pink-600',
    borderColor: 'group-hover:border-pink-300'
  }
];

export default function ScalesStorefrontPage() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScales = scalesList.filter(scale => 
    scale.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scale.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-sand-50">
      {/* Üst Bar - 2. Fotoğrafa Göre Güncellendi */}
      <div className="border-b border-sand-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-ink-light hover:text-sage-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-bold">Geri Dön</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 transition-transform hover:scale-105">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div className="hidden sm:flex flex-col justify-center mt-1">
              <span className="text-[11px] font-bold text-ink-light tracking-wide leading-none mb-1 text-left">
                Klinik Psikolog
              </span>
              <span className="text-base font-extrabold text-ink-dark tracking-wide leading-none whitespace-nowrap text-left">
                Gökçe TOLUÇ SAKLI
              </span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-4xl font-serif font-bold text-ink-dark mb-4">Klinik Ölçekler</h1>
            <p className="text-ink-light text-lg max-w-3xl">
              Uzman klinik psikoloğunuz tarafından size yönlendirilen psikolojik değerlendirme testlerini aşağıdan bularak çözmeye başlayabilirsiniz.
            </p>
          </div>

          {/* ARAMA ÇUBUĞU */}
          <div className="relative mb-8 group max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-sand-400 group-focus-within:text-[#7c9082] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Çözmek istediğiniz testi arayın (Örn: Beck, Şema, MMPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-12 py-4 bg-white border border-sand-200 rounded-2xl text-ink-dark placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-[#7c9082]/20 focus:border-[#7c9082] transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sand-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* TESTLER LİSTESİ (VİTRİN) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredScales.length > 0 ? (
              filteredScales.map((scale) => (
                <div 
                  key={scale.id} 
                  className={`bg-white rounded-3xl p-6 border border-sand-200 shadow-sm flex flex-col group transition-all hover:shadow-md ${scale.borderColor}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${scale.color}`}>
                      <ClipboardList className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink-dark leading-tight mb-3 group-hover:text-[#7c9082] transition-colors">{scale.title}</h3>
                      
                      {/* GÜNCEL VE KUSURSUZ OKUNAN ETİKETLER BURADA */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 bg-gray-200 px-3 py-1.5 rounded-full border border-gray-300 shadow-sm">
                          <HelpCircle className="w-3.5 h-3.5 text-gray-600" /> {scale.questionCount} Soru
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 bg-gray-200 px-3 py-1.5 rounded-full border border-gray-300 shadow-sm">
                          <Clock className="w-3.5 h-3.5 text-gray-600" /> ~{scale.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-ink-light leading-relaxed mb-6 flex-grow">
                    {scale.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-sand-100">
                    <Link 
                      href={`/${locale}/scales/${scale.id}`}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sand-50 text-ink-dark font-bold hover:bg-[#7c9082] hover:text-white transition-all duration-300"
                    >
                      <Play className="w-4 h-4" /> Testi Başlat
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-sand-300">
                <ClipboardList className="w-12 h-12 text-sand-200 mx-auto mb-4" />
                <p className="text-ink-light font-medium text-lg">Aradığınız isimde bir test bulunamadı.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}