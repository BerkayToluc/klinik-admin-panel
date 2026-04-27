'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, FileText, Download, Search, X } from 'lucide-react';
import { useLocale } from 'next-intl';

const formsList = [
  { id: 1, title: "3DS Formu", description: "Klinik değerlendirme ve takip ölçeği.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/3ds.pdf" },
  { id: 2, title: "ACT Düşünce Kaydı", description: "Kabul ve Kararlılık Terapisi düşünce takip formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/act_dusunce_kaydi.pdf" },
  { id: 3, title: "Akıllı Amaçlar (SMART)", description: "Terapi sürecinde hedef belirleme ve takip çalışması.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/akilli_amaclar.pdf" },
  { id: 4, title: "Aktivite Günlüğü", description: "Günlük aktivitelerin ve duygu durumun kaydedildiği takip çizelgesi.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/aktivite_gunlugu_duz.pdf" },
  { id: 5, title: "Dava Formu", description: "Düşüncelerin kanıt temelli incelendiği bilişsel teknik formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/dava.pdf" },
  { id: 6, title: "Değişim Avantaj & Dezavantaj", description: "Karar verme sürecinde değişim analiz formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/degisim_avantaj_dezavantaj.pdf" },
  { id: 7, title: "DURR Formu", description: "Duygu düzenleme ve tepki durdurma egzersizi.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/durr.pdf" },
  { id: 8, title: "DURR-5 Formu", description: "Duygu odaklı hızlı müdahale ve değerlendirme aracı.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/durr5.pdf" },
  { id: 9, title: "Ellis'in ABC Modeli", description: "Olay, inanç ve sonuç analizi için temel BDT formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/ellisin_abc_si.pdf" },
  { id: 10, title: "ERP Günlüğü", description: "Maruz bırakma ve tepki önleme seans takip formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/erp_gunluk.pdf" },
  { id: 11, title: "Helikopter Bakışı", description: "Problemlere geniş perspektiften bakma alıştırması.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/helikopter_bakisi.pdf" },
  { id: 12, title: "Korkulan Durumların Sıralanması", description: "Hiyerarşik korku listesi oluşturma formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/korkulan_durumlarin_siralanmasi.pdf" },
  { id: 13, title: "Madde Kullanım Günlüğü", description: "Bağımlılık sürecini takip etmeye yardımcı kayıt çizelgesi.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/madde_kullanim_gunlugu.pdf" },
  { id: 14, title: "Olumlu Kişisel Nitelikler", description: "Öz saygı gelişimini destekleyen nitelik listesi.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/olumlu_kisisel_nitelikler.pdf" },
  { id: 15, title: "Otomatik Düşünce İnceleme", description: "Olumsuz otomatik düşünceleri sorgulama ve yeniden yapılandırma formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/otomatik_dusunce_inceleme_formu.pdf" },
  { id: 16, title: "Panik Atak Kendine Yardım", description: "Panik atak anında uygulanabilecek strateji rehberi.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/panik-atak-kendine-yardim.pdf" },
  { id: 17, title: "Panik Günlüğü", description: "Atak sıklığı, şiddeti ve eşlik eden düşüncelerin kaydı.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/panik_gunlugu.pdf" },
  { id: 18, title: "Panik & Agorafobi Bilgi Notu", description: "Hakan Türkçapar tarafından hazırlanan kapsamlı bilgilendirme metni.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/panikagorafobibilgihturkcapar.pdf" },
  { id: 19, title: "Pozitif Kişilik Özellikleri", description: "Kişisel güçlü yönlerin keşfedildiği çalışma formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/pozitif_kisilik_ozellikleri_formu.pdf" },
  { id: 20, title: "Pozitif Kişisel Nitelikler Alıştırması", description: "Benlik algısını güçlendirmeye yönelik klinik egzersiz.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/pozitif_kisisel_nitelikler_alistirmasi.pdf" },
  { id: 21, title: "Problem Çözme Çalışması", description: "Adım adım problem çözme becerileri uygulama formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/problem_cozme_calismasi.pdf" },
  { id: 22, title: "PTSD (TSSB) Metaforu", description: "Travma sonrası stres bozukluğunu anlamaya yardımcı görsel anlatım.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/ptsd_metaforu.pdf" },
  { id: 23, title: "Yaşam Çizelgesi (Timeline)", description: "Hayatınızdaki önemli olayların kronolojik dökümü.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/timeline.pdf" },
  { id: 24, title: "TSSB Düşünce Kayıt Formu", description: "Travma ile ilişkili bilişlerin incelendiği kayıt formu.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/tssb_dusunce_kayit_formu.pdf" },
  { id: 25, title: "Yineleme Önleme Formu", description: "Tedavi kazanımlarını koruma ve nüks önleme stratejileri.", fileUrl: "https://ebyinbdxwjyhcmivtluq.supabase.co/storage/v1/object/public/forms/yineleme_onleme.pdf" },
];

export default function FormsPage() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredForms = formsList.filter(form => 
    form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-sand-50">
      {/* ÜST BAR - 2. FOTOĞRAFA GÖRE GÜNCELLENDİ */}
      <div className="border-b border-sand-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-ink-light hover:text-sage-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Geri Dön</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 transition-transform hover:scale-105">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div className="hidden sm:flex flex-col justify-center mt-1">
              <span className="text-[11px] font-bold text-ink-light tracking-wide leading-none mb-1">
                Klinik Psikolog
              </span>
              <span className="text-base font-extrabold text-ink-dark tracking-wide leading-none whitespace-nowrap">
                Gökçe TOLUÇ SAKLI
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-4xl font-serif font-bold text-ink-dark mb-4">Bilgilendirme Formları</h1>
            <p className="text-ink-light text-lg max-w-2xl">
              Terapi sürecinizi destekleyen materyalleri ve çalışma kağıtlarını aşağıdan indirebilirsiniz.
            </p>
          </div>

          {/* ARAMA ÇUBUĞU */}
          <div className="relative mb-8 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-sand-400 group-focus-within:text-[#7c9082] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Form adı veya içerik ile ara..."
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

          <div className="grid grid-cols-1 gap-4">
            {filteredForms.length > 0 ? (
              filteredForms.map((form) => (
                <div 
                  key={form.id} 
                  className="bg-white rounded-2xl p-5 border border-sand-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:border-[#7c9082] hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-ink-dark mb-1">{form.title}</h3>
                    <p className="text-sm text-ink-light leading-snug">{form.description}</p>
                  </div>

                  <div className="w-full sm:w-auto mt-4 sm:mt-0">
                    <a 
                      href={form.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand-50 text-ink-dark hover:bg-[#7c9082] hover:text-white font-bold text-sm transition-all"
                    >
                      <Download className="w-4 h-4" /> İndir
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-sand-300">
                <FileText className="w-12 h-12 text-sand-200 mx-auto mb-4" />
                <p className="text-ink-light font-medium">Aradığınız kriterlere uygun bir form bulunamadı.</p>
              </div>
            )}
          </div>
          
          <div className="mt-12 bg-sage-50 border-l-4 border-[#7c9082] p-5 rounded-r-xl">
            <p className="text-sage-800 text-sm leading-relaxed italic">
              * Listede bulamadığınız bir döküman için lütfen klinik sekretaryasıyla veya terapistinizle iletişime geçiniz.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}