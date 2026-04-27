'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, Check, Send, CheckCircle2, User, Loader2, AlertCircle, ChevronRight, ChevronLeft, Info } from 'lucide-react';
import { useLocale } from 'next-intl';
import { supabase } from '@/lib/supabase';
import { testDatabase } from '@/data/testDatabase';

export default function DynamicScalePage() {
  const locale = useLocale();
  const params = useParams();
  const scaleId = params.scaleId as string; 
  
  const currentTest = testDatabase[scaleId];

  // YENİ DURUMLAR (STATES)
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Hangi sorudayız?
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showValidation, setShowValidation] = useState(false); // Bilgileri girmeden teste başlamasın diye

  const qIndex = currentQuestionIndex;
  const q = currentTest?.questions[qIndex];

  // CEVAPLAMA FONKSİYONLARI
  const handleOptionSelect = (val: number, optIndex: number) => {
    setAnswers(prev => ({ ...prev, [qIndex]: { value: val, selectedIndex: optIndex } }));
  };

  const handleDualSelect = (type: 'kaygi' | 'kacinma', val: number) => {
    setAnswers(prev => ({ ...prev, [qIndex]: { ...prev[qIndex], [type]: val } }));
  };

  // ŞU ANKİ SORU CEVAPLANDI MI? (İleri butonunu açmak için)
  const isCurrentQuestionAnswered = () => {
    const ans = answers[qIndex];
    if (!ans) return false;
    if (currentTest.scoringType === 'dual') {
      return ans.kaygi !== undefined && ans.kacinma !== undefined;
    }
    return ans.value !== undefined;
  };

  // İLERİ / GERİ BUTONLARI
  const handleNext = () => {
    if (patientName.trim() === "" || patientAge.trim() === "" || patientGender === "") {
      setShowValidation(true);
      alert("Lütfen teste başlamadan önce Ad, Yaş ve Cinsiyet bilgilerinizi eksiksiz doldurun.");
      return;
    }
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // GÖNDERME İŞLEMİ
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      let totalScore = 0;
      if (currentTest.scoringType === 'dual') {
        Object.values(answers).forEach((ans: any) => { totalScore += (ans.kaygi || 0) + (ans.kacinma || 0); });
      } else {
        totalScore = Object.values(answers).reduce((acc: any, curr: any) => acc + (curr.value !== undefined ? curr.value : 0), 0);
      }

      const riskLevel = currentTest.calculateRisk ? currentTest.calculateRisk(totalScore) : "Belirsiz";

      // 1. AYNI İSİMDE DANIŞAN VAR MI KONTROL ET (Mükerrer Kayıt Önleme)
      const { data: existingClient } = await supabase
        .from('clients')
        .select('id')
        .eq('name', patientName)
        .maybeSingle();

      if (!existingClient) {
        // Danışan yoksa yeni kayıt oluştur
        const { error: clientError } = await supabase.from('clients').insert([
          { name: patientName, age: patientAge, gender: patientGender }
        ]);
        if (clientError) throw clientError;
      } else {
        // Danışan zaten varsa sadece Yaş ve Cinsiyetini güncelle (Yeni satır açma)
        const { error: updateError } = await supabase.from('clients')
          .update({ age: patientAge, gender: patientGender })
          .eq('id', existingClient.id);
        if (updateError) throw updateError;
      }

      // 2. Testi kaydet (Test her zaman yeni bir satır olarak eklenir)
      const { error: resultError } = await supabase.from('scale_results').insert([
        {
          patient: patientName,
          age: patientAge,
          gender: patientGender,
          test: currentTest.title,
          risk: riskLevel,
          status: 'Yeni',
          answers: answers,
          total_score: totalScore
        }
      ]);
      if (resultError) throw resultError;

      setIsSubmitted(true);
    } catch (error: any) {
      console.error("VERİTABANI HATASI:", error);
      alert(`Gönderilirken bir hata oluştu: ${error.message || "Bilinmeyen Hata"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentTest) {
    return (
      <main className="min-h-screen bg-sand-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-lg text-center shadow-xl border border-sand-200">
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-ink-dark mb-4">Test Hazırlanıyor</h2>
          <Link href={`/${locale}/scales`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c9082] text-white font-bold rounded-full hover:bg-[#5e6f63]">
            <ArrowLeft className="w-4 h-4" /> Vitrine Geri Dön
          </Link>
        </div>
      </main>
    );
  }

  // İLERLEME YÜZDESİ
  const progressPercentage = Math.round(((currentQuestionIndex) / currentTest.questions.length) * 100);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ÜST BAR */}
      <div className="border-b border-sand-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href={`/${locale}/scales`} className="flex items-center gap-2 text-ink-light hover:text-sage-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-bold">Ölçeklere Dön</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 transition-transform hover:scale-105">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            {/* BURASI DÜZELTİLDİ: Üstte küçük Klinik Psikolog, altta büyük İsim */}
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

      <div className="max-w-3xl mx-auto px-4 py-8 w-full flex-grow flex flex-col">
        {!isSubmitted ? (
          <div className="animate-in slide-in-from-bottom-8 duration-700 flex-grow flex flex-col">
            
            {/* KİŞİSEL BİLGİLER VE YÖNERGE */}
            <div className={currentQuestionIndex !== 0 ? "hidden sm:block mb-8" : "mb-8"}>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-dark mb-6 text-center">{currentTest.title}</h2>
              
              <div className={`bg-white p-6 rounded-2xl border-2 shadow-sm mb-6 ${showValidation && (!patientName || !patientAge || !patientGender) ? 'border-red-400' : 'border-sand-200'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* AD SOYAD */}
                  <div className="sm:col-span-6">
                    <label className="block text-[11px] font-black text-sage-700 uppercase tracking-wider mb-2">Adınız ve Soyadınız <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 text-ink-dark font-bold focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                  </div>
                  {/* YAŞ */}
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-black text-sage-700 uppercase tracking-wider mb-2">Yaşınız <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      placeholder="Örn: 24"
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 text-ink-dark font-bold focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                  </div>
                  {/* CİNSİYET */}
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-black text-sage-700 uppercase tracking-wider mb-2">Cinsiyetiniz <span className="text-red-500">*</span></label>
                    <select 
                      value={patientGender}
                      onChange={(e) => setPatientGender(e.target.value)}
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 text-ink-dark font-bold focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none"
                    >
                      <option value="">Seçiniz...</option>
                      <option value="Kadın">Kadın</option>
                      <option value="Erkek">Erkek</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* YÖNERGE */}
            <div className="bg-sage-50 border-l-4 border-sage-500 p-4 rounded-r-xl shadow-sm flex gap-3 items-start mb-8">
              <Info className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
              <p className="text-sage-800 text-sm leading-relaxed">
                <strong>Yönerge:</strong> {currentTest.description}
              </p>
            </div>

            {/* İLERLEME ÇUBUĞU */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold text-sand-500 mb-2 uppercase tracking-widest">
                <span>Soru {currentQuestionIndex + 1} / {currentTest.questions.length}</span>
                <span>%{progressPercentage} Tamamlandı</span>
              </div>
              <div className="w-full h-2.5 bg-sand-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#7c9082] transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            {/* TEKLİ SORU KARTI */}
            <div className="bg-white rounded-3xl border border-sand-200 shadow-sm p-6 sm:p-10 mb-8 flex-grow flex flex-col justify-center">
              <h4 className="text-2xl sm:text-3xl font-bold text-ink-dark mb-10 text-center leading-tight">
                {q.text ? q.text : `${currentQuestionIndex + 1}. Bölüm: Aşağıdakilerden size en uygun olanı seçiniz`}
              </h4>

              {currentTest.scoringType === 'sum' && (
                <div className="grid grid-cols-1 gap-3 max-w-xl mx-auto w-full">
                  {q.options.map((opt: any, optIndex: number) => {
                    const active = answers[qIndex]?.selectedIndex === optIndex;
                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleOptionSelect(opt.value, optIndex)}
                        className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 group
                          ${active ? 'border-[#7c9082] bg-sage-50 shadow-md transform scale-[1.02]' : 'border-sand-100 bg-white hover:border-sand-300'}`}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${active ? 'bg-[#7c9082] border-[#7c9082]' : 'border-sand-300 group-hover:border-sand-400'}`}>
                          {active && <Check className="w-4 h-4 text-white stroke-[3px]" />}
                        </div>
                        <span className={`text-lg font-medium ${active ? 'text-[#7c9082]' : 'text-ink-dark'}`}>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Dual ve Slider kısımları aynı kalıyor */}
              {currentTest.scoringType === 'dual' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-sand-50 p-6 rounded-2xl">
                    <p className="font-black text-ink-dark mb-4 text-center uppercase tracking-wider text-sm">Kaygı Şiddeti</p>
                    <div className="flex flex-col gap-2">
                      {currentTest.optionsKaygi.map((opt: any) => {
                        const active = answers[qIndex]?.kaygi === opt.value;
                        return (
                          <button
                            key={`kaygi-${opt.value}`}
                            onClick={() => handleDualSelect('kaygi', opt.value)}
                            className={`text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${active ? 'border-amber-500 bg-amber-50 shadow-sm' : 'border-white bg-white hover:border-amber-200'}`}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? 'bg-amber-500 border-amber-500' : 'border-sand-300'}`} />
                            <span className={`font-medium ${active ? 'text-amber-800' : 'text-ink-dark'}`}>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-sand-50 p-6 rounded-2xl">
                    <p className="font-black text-ink-dark mb-4 text-center uppercase tracking-wider text-sm">Kaçınma Şiddeti</p>
                    <div className="flex flex-col gap-2">
                      {currentTest.optionsKacinma.map((opt: any) => {
                        const active = answers[qIndex]?.kacinma === opt.value;
                        return (
                          <button
                            key={`kacinma-${opt.value}`}
                            onClick={() => handleDualSelect('kacinma', opt.value)}
                            className={`text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${active ? 'border-rose-500 bg-rose-50 shadow-sm' : 'border-white bg-white hover:border-rose-200'}`}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? 'bg-rose-500 border-rose-500' : 'border-sand-300'}`} />
                            <span className={`font-medium ${active ? 'text-rose-800' : 'text-ink-dark'}`}>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentTest.scoringType === 'slider' && (
                <div className="bg-sand-50 p-10 rounded-3xl border-2 border-sand-100 max-w-2xl mx-auto w-full">
                  <div className="flex items-end justify-center mb-10">
                    <span className="text-5xl font-black text-[#7c9082]">
                      %{answers[qIndex]?.value !== undefined ? answers[qIndex].value : (currentTest.sliderConfig?.min || 0)}
                    </span>
                  </div>
                  <div className="relative w-full flex items-center h-10 px-2">
                    <div className="absolute left-2 right-2 h-3 bg-gray-300 rounded-full pointer-events-none"></div>
                    <div className="absolute left-2 right-2 flex justify-between pointer-events-none">
                      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((tick) => (
                        <div key={tick} className="w-[3px] h-5 bg-gray-400 rounded-full -mt-1"></div>
                      ))}
                    </div>
                    <input
                      type="range"
                      min={currentTest.sliderConfig?.min || 0}
                      max={currentTest.sliderConfig?.max || 100}
                      step={currentTest.sliderConfig?.step || 10}
                      value={answers[qIndex]?.value !== undefined ? answers[qIndex].value : (currentTest.sliderConfig?.min || 0)}
                      onChange={(e) => handleOptionSelect(parseInt(e.target.value), 0)}
                      className="absolute left-0 right-0 w-full h-full bg-transparent appearance-none cursor-pointer z-10 m-0 focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7c9082] [&::-webkit-slider-thumb]:shadow-lg"
                    />
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-500 mt-6 px-1">
                    <span>%{currentTest.sliderConfig?.min || 0} (Hiç)</span>
                    <span>%{currentTest.sliderConfig?.max || 100} (Her Zaman)</span>
                  </div>
                </div>
              )}
            </div>

            {/* İLERİ / GERİ VE GÖNDER BUTONLARI */}
            <div className="flex items-center justify-between border-t border-sand-200 pt-6">
              <button 
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-ink-dark bg-sand-100 hover:bg-sand-200 disabled:opacity-30 transition-all"
              >
                <ChevronLeft className="w-5 h-5" /> Geri
              </button>

              {currentQuestionIndex < currentTest.questions.length - 1 ? (
                <button 
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered()}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-ink-dark hover:bg-black disabled:bg-gray-300 shadow-md transition-all"
                >
                  İleri <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={!isCurrentQuestionAnswered() || isSubmitting}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-[#7c9082] hover:bg-[#5e6f63] shadow-xl transition-all"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Kaydet ve Gönder"}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Onay Ekranı Aynı Kalıyor */
          <div className="text-center py-20 animate-in zoom-in duration-500 flex-grow flex flex-col justify-center">
             <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle2 className="w-12 h-12 text-[#7c9082]" />
             </div>
             <h2 className="text-4xl font-serif font-bold text-ink-dark mb-4">Teşekkürler, {patientName}!</h2>
             <p className="text-ink-light text-lg max-w-md mx-auto mb-12">
               Cevaplarınız güvenli bir şekilde kaydedildi ve Gökçe Hanım'a iletildi.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href={`/${locale}/scales`} className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border-2 border-sand-200 text-ink-dark font-bold hover:border-[#7c9082] transition-colors">
                 Diğer Testlere Dön
               </Link>
               <Link href={`/${locale}`} className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#7c9082] text-white font-bold hover:bg-[#5e6f63] shadow-md transition-colors">
                 Ana Sayfaya Dön
               </Link>
             </div>
          </div>
        )}
      </div>
    </main>
  );
}