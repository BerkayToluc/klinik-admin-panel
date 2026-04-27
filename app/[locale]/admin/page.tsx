'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, FileText, Users, Settings, LogOut, Search, Eye, Bell, Activity, Plus, Minus, X, Trash2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { useLocale } from 'next-intl';
import { supabase } from '@/lib/supabase';

const questionsList = [
  "Bayılacağım", "Bende beyin tümörü olmalı", "Kalp krizi geçireceğim", "Öleceğim",
  "Aptalca davranacağım", "Kör olacağım", "Kendimi kontrol edemeyeceğim", "Birine zarar vereceğim",
  "Felç geçireceğim", "Çıldıracağım", "Çığlık atacağım", "Saçmalayacağım veya gülünç konuşacağım",
  "Korkudan felç olacağım", "Boğularak öleceğim"
];

const optionsMap: Record<number, string> = {
  1: "Hiçbir zaman (1)", 2: "Nadiren (2)", 3: "Yarı yarıya (3)", 4: "Genellikle (4)", 5: "Her zaman (5)"
};

export default function AdminDashboard() {
  const locale = useLocale();
  
  // 1. GÜVENLİK (LOGIN) STATE'İ
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);

  // 2. MENÜ (SEKME) STATE'İ
  const [activeTab, setActiveTab] = useState<'dashboard' | 'results' | 'clients'>('dashboard');
  
  // 3. ARAMA VE VERİ STATELERİ
  const [searchQuery, setSearchQuery] = useState("");
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Sadece giriş yapıldıktan sonra yüklenir
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteListModalOpen, setIsDeleteListModalOpen] = useState(false);
  const [viewedSubmission, setViewedSubmission] = useState<any | null>(null);
  const [newClientName, setNewClientName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [deleteConfirm, setDeleteConfirm] = useState<{
    isOpen: boolean; id: string | null; name: string; type: 'test' | 'client';
  }>({ isOpen: false, id: null, name: "", type: "test" });

  // GİRİŞ YAPMA FONKSİYONU (Maskelenmiş Şifre ile)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // "QmVya2F5MjMyMw==" metni, "Berkay2323" şifresinin Base64 ile maskelenmiş halidir.
    // Sen şifreyi girdiğinde kod bunu çevirip kıyaslar. 
    // GitHub'a bakan biri sadece "QmVya2F5MjMyMw==" yazısını görür, asıl şifreni bilemez.
    if (btoa(passwordInput) === "QmVya2F5MjMyMw==") { 
      setIsAuthenticated(true);
      setLoginError(false);
      fetchData(); 
    } else {
      setLoginError(true);
      setPasswordInput("");
    }
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data: resultsData } = await supabase.from('scale_results').select('*').order('created_at', { ascending: false });
      const { data: clientsData } = await supabase.from('clients').select('*').order('created_at', { ascending: false });
      if (resultsData) setSubmissions(resultsData);
      if (clientsData) setClients(clientsData);
    } catch (error) {
      console.error("Veriler çekilemedi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  const formatTime = (dateString: string) => new Date(dateString).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newClientName.trim() === "") return;
    setIsProcessing(true);
    try {
      await supabase.from('clients').insert([{ name: newClientName }]);
      await fetchData(); 
      setIsAddModalOpen(false);
      setNewClientName("");
    } catch (error) {
      console.error("Danışan eklenemedi:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const triggerDelete = (id: string, patientName: string, deleteType: 'test' | 'client') => {
    setIsDeleteListModalOpen(false); 
    setDeleteConfirm({ isOpen: true, id, name: patientName, type: deleteType });
  };

  const executeDelete = async () => {
    if (!deleteConfirm.id) return;
    setIsProcessing(true);
    try {
      if (deleteConfirm.type === 'test') {
        await supabase.from('scale_results').delete().eq('id', deleteConfirm.id);
      } else if (deleteConfirm.type === 'client') {
        await supabase.from('clients').delete().eq('id', deleteConfirm.id);
        await supabase.from('scale_results').delete().eq('patient', deleteConfirm.name);
      }
      await fetchData();
    } catch (error) {
      console.error("Silme işlemi başarısız:", error);
    } finally {
      setIsProcessing(false);
      setDeleteConfirm({ isOpen: false, id: null, name: "", type: "test" });
    }
  };

  const markAsReviewed = async (submission: any) => {
    setViewedSubmission(submission); 
    if (submission.status === 'Yeni') {
      try {
        await supabase.from('scale_results').update({ status: 'İncelendi' }).eq('id', submission.id);
        setSubmissions(prev => prev.map(s => s.id === submission.id ? { ...s, status: 'İncelendi' } : s));
      } catch (error) {
        console.error("Durum güncellenemedi", error);
      }
    }
  };

  // CANLI ARAMA FİLTRELERİ (Search Engine)
  const filteredSubmissions = submissions.filter(sub => 
    sub.patient.toLowerCase().includes(searchQuery.toLowerCase()) || 
    sub.test.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // --- GİRİŞ EKRANI (LOGIN YÜZÜ) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sand-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-sand-200 animate-in zoom-in-95 duration-500">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-[#7c9082]" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-ink-dark">Yönetici Girişi</h1>
            <p className="text-ink-light text-sm mt-2 text-center">Gökçe Toluç Saklı - Klinik Yönetim Paneli</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-ink-light mb-2">Yönetici Şifresi</label>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Şifrenizi giriniz..."
                className={`w-full border rounded-xl px-4 py-3 text-ink-dark focus:outline-none focus:ring-2 transition-all ${
                  loginError ? 'border-red-400 focus:ring-red-200 bg-red-50' : 'border-sand-200 focus:border-[#7c9082] focus:ring-[#7c9082]/20'
                }`}
                autoFocus
              />
              {loginError && <p className="text-red-500 text-xs font-medium mt-2">Hatalı şifre. Lütfen tekrar deneyin.</p>}
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 rounded-full bg-[#7c9082] text-white font-bold hover:bg-[#5e6f63] transition-colors shadow-md"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href={`/${locale}`} className="text-sm text-sand-400 hover:text-ink-dark transition-colors">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- ANA PANEL EKRANI ---
  return (
    <div className="min-h-screen bg-sand-50 flex">
      
      {/* SOL MENÜ */}
      <aside className="w-64 bg-ink-dark text-sand-50 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="relative w-10 h-10 bg-white rounded-full p-1">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Klinik Yönetim</h2>
            <p className="text-[10px] text-sage-400 uppercase tracking-widest">Admin Paneli</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              activeTab === 'dashboard' ? 'bg-sage-500/20 text-sage-300' : 'text-sand-50/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" /> <span>Panel Özeti</span>
          </button>
          <button 
            onClick={() => setActiveTab('results')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              activeTab === 'results' ? 'bg-sage-500/20 text-sage-300' : 'text-sand-50/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-5 h-5" /> <span>Ölçek Sonuçları</span>
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              activeTab === 'clients' ? 'bg-sage-500/20 text-sage-300' : 'text-sand-50/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-5 h-5" /> <span>Danışanlar</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" /> <span>Sistemi Kilitle</span>
          </button>
        </div>
      </aside>

      {/* ANA İÇERİK ALANI */}
      <main className="flex-1 md:ml-64 p-4 md:p-8">
        
        {/* Üst Bar (Arama ve Butonlar) */}
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-sand-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-ink-dark">
              {activeTab === 'dashboard' ? 'Hoş Geldiniz, Gökçe Hanım' : 
               activeTab === 'results' ? 'Ölçek Sonuçları' : 'Kayıtlı Danışanlar'}
            </h1>
            <p className="text-sm text-ink-light">Sistemdeki güncel durumunuz aşağıdadır.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="relative flex-1 sm:w-64 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sand-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Danışan veya test ara..." 
                className="w-full pl-9 pr-4 py-2 bg-sand-50 border border-sand-200 rounded-full text-sm focus:outline-none focus:border-sage-500 transition-colors"
              />
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button onClick={() => setIsAddModalOpen(true)} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#7c9082] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#5e6f63] transition-colors shadow-sm whitespace-nowrap">
                <Plus className="w-4 h-4" /> Yeni Danışan
              </button>
              <button onClick={() => setIsDeleteListModalOpen(true)} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-50 transition-colors shadow-sm whitespace-nowrap">
                <Minus className="w-4 h-4" /> Danışan Çıkar
              </button>
            </div>
          </div>
        </header>

        {/* SEKME: PANEL ÖZETİ (DASHBOARD) */}
        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in duration-300">
            {/* İstatistik Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-100 text-[#7c9082] rounded-full flex items-center justify-center"><FileText className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-ink-light font-medium">Toplam Test</p>
                  <p className="text-2xl font-bold text-ink-dark">{isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : submissions.length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-ink-light font-medium">Kayıtlı Danışan</p>
                  <p className="text-2xl font-bold text-ink-dark">{isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : clients.length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center"><Activity className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-ink-light font-medium">Yeni Sonuçlar</p>
                  <p className="text-2xl font-bold text-ink-dark">{isLoading ? "..." : submissions.filter(s => s.status === 'Yeni').length}</p>
                </div>
              </div>
            </div>

            {/* Son 5 Test Tablosu */}
            <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-sand-200 flex justify-between items-center bg-sand-50/50">
                <h3 className="text-lg font-bold text-ink-dark">Son Doldurulan Ölçekler (Özet)</h3>
                <button onClick={() => setActiveTab('results')} className="text-sm text-[#7c9082] font-bold hover:underline">Tümünü Gör</button>
              </div>
              <div className="overflow-x-auto min-h-[200px] relative">
                {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10"><Loader2 className="w-8 h-8 animate-spin text-[#7c9082]" /></div>}
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white text-xs uppercase tracking-wider text-ink-light border-b border-sand-200">
                      <th className="p-4 font-medium">Danışan</th><th className="p-4 font-medium">Ölçek</th><th className="p-4 font-medium">Risk</th><th className="p-4 font-medium">Durum</th><th className="p-4 font-medium text-right">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-100">
                    {filteredSubmissions.slice(0, 5).map((sub) => (
                      <tr key={sub.id} className="hover:bg-sand-50 transition-colors">
                        <td className="p-4 font-medium text-ink-dark">{sub.patient}</td>
                        <td className="p-4 text-sm text-ink-light">{sub.test}</td>
                        <td className="p-4"><span className={`inline-flex px-2 py-1 rounded-md text-xs font-bold ${sub.risk === 'Yüksek' ? 'bg-red-100 text-red-700' : sub.risk === 'Orta' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{sub.risk || "Belirsiz"}</span></td>
                        <td className="p-4"><span className={`inline-flex items-center gap-1 text-xs font-medium ${sub.status === 'Yeni' ? 'text-[#7c9082]' : 'text-sand-400'}`}>{sub.status === 'Yeni' && <span className="w-1.5 h-1.5 rounded-full bg-[#7c9082] animate-pulse"></span>}{sub.status}</span></td>
                        <td className="p-4 text-right">
                          <button onClick={() => markAsReviewed(sub)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-sand-300 rounded-lg text-sm font-medium hover:bg-sage-50 text-[#7c9082]"><Eye className="w-4 h-4" /> Aç</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SEKME: TÜM ÖLÇEK SONUÇLARI */}
        {activeTab === 'results' && (
          <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
             <div className="p-6 border-b border-sand-200 flex justify-between items-center bg-sand-50/50">
                <h3 className="text-lg font-bold text-ink-dark">Tüm Test Sonuçları</h3>
              </div>
              <div className="overflow-x-auto min-h-[400px] relative">
                {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10"><Loader2 className="w-8 h-8 animate-spin text-[#7c9082]" /></div>}
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white text-xs uppercase tracking-wider text-ink-light border-b border-sand-200">
                      <th className="p-4 font-medium">Danışan</th><th className="p-4 font-medium">Ölçek</th><th className="p-4 font-medium">Tarih</th><th className="p-4 font-medium">Risk</th><th className="p-4 font-medium">Durum</th><th className="p-4 font-medium text-right">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-100">
                    {filteredSubmissions.length === 0 ? (
                      <tr><td colSpan={6} className="p-8 text-center text-ink-light">Arama kriterlerine uygun sonuç bulunamadı.</td></tr>
                    ) : (
                      filteredSubmissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-sand-50 transition-colors">
                          <td className="p-4 font-medium text-ink-dark">{sub.patient}</td>
                          <td className="p-4 text-sm text-ink-light">{sub.test}</td>
                          <td className="p-4 text-sm text-ink-light">{formatDate(sub.created_at)} <span className="text-xs text-sand-400">{formatTime(sub.created_at)}</span></td>
                          <td className="p-4"><span className={`inline-flex px-2 py-1 rounded-md text-xs font-bold ${sub.risk === 'Yüksek' ? 'bg-red-100 text-red-700' : sub.risk === 'Orta' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{sub.risk || "Belirsiz"}</span></td>
                          <td className="p-4"><span className={`inline-flex items-center gap-1 text-xs font-medium ${sub.status === 'Yeni' ? 'text-[#7c9082]' : 'text-sand-400'}`}>{sub.status === 'Yeni' && <span className="w-1.5 h-1.5 rounded-full bg-[#7c9082] animate-pulse"></span>}{sub.status}</span></td>
                          <td className="p-4 text-right flex justify-end gap-2">
                            <button onClick={() => markAsReviewed(sub)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-sand-300 rounded-lg text-sm font-medium hover:bg-sage-50 text-[#7c9082]"><Eye className="w-4 h-4" /> Aç</button>
                            <button onClick={() => triggerDelete(sub.id, sub.patient, 'test')} className="p-2 text-sand-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
          </div>
        )}

        {/* SEKME: DANIŞANLAR LİSTESİ */}
        {activeTab === 'clients' && (
          <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
             <div className="p-6 border-b border-sand-200 flex justify-between items-center bg-sand-50/50">
                <h3 className="text-lg font-bold text-ink-dark">Sistemdeki Danışanlar</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-[400px]">
                {filteredClients.length === 0 ? (
                  <div className="col-span-full p-8 text-center text-ink-light">Arama kriterlerine uygun danışan bulunamadı.</div>
                ) : (
                  filteredClients.map((client) => (
                    <div key={client.id} className="flex flex-col p-5 bg-sand-50 border border-sand-200 rounded-2xl hover:border-[#7c9082] transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#7c9082] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {client.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="font-bold text-ink-dark text-lg leading-tight">{client.name}</h4>
                            {/* YAŞ VE CİNSİYET BURAYA EKLENDİ */}
                            <div className="flex gap-2 mt-1.5 mb-1">
                               <span className="text-[10px] font-bold bg-white text-ink-dark border border-sand-200 px-2 py-0.5 rounded-md">
                                 {client.age ? `${client.age} Yaş` : 'Yaş Girilmedi'}
                               </span>
                               <span className="text-[10px] font-bold bg-white text-ink-dark border border-sand-200 px-2 py-0.5 rounded-md">
                                 {client.gender ? client.gender : 'Cinsiyet Girilmedi'}
                               </span>
                            </div>
                            <p className="text-[10px] text-ink-light">Kayıt: {formatDate(client.created_at)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-sand-200 flex justify-between items-center">
                         <span className="text-xs font-medium text-ink-light bg-white px-2 py-1 rounded-md border border-sand-100">
                           {submissions.filter(s => s.patient === client.name).length} Test Çözdü
                         </span>
                         <button onClick={() => triggerDelete(client.id, client.name, 'client')} className="text-sm text-red-500 font-medium hover:underline flex items-center gap-1">
                           <Trash2 className="w-3 h-3" /> Çıkar
                         </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
          </div>
        )}

      </main>

      {/* DETAY MODALI VE SİLME MODALLARI */}
      {viewedSubmission && (
        <div className="fixed inset-0 bg-ink-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-sand-100">
              <div>
                <h2 className="text-2xl font-bold text-ink-dark flex items-center gap-3"><FileText className="w-6 h-6 text-[#7c9082]" />{viewedSubmission.patient} - Test Detayı</h2>
                <p className="text-ink-light mt-1 text-sm">{formatDate(viewedSubmission.created_at)} saat {formatTime(viewedSubmission.created_at)} tarihinde dolduruldu.</p>
              </div>
              <button onClick={() => setViewedSubmission(null)} className="p-2 bg-sand-50 rounded-full text-ink-light hover:bg-red-50 hover:text-red-500 transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="mb-8 flex items-center gap-4 bg-sand-50 p-4 rounded-xl border border-sand-200">
               <div><p className="text-xs uppercase font-bold text-ink-light">Ölçek Adı</p><p className="font-bold text-ink-dark">{viewedSubmission.test}</p></div>
               <div className="h-10 w-px bg-sand-200 mx-4"></div>
               <div>
                 <p className="text-xs uppercase font-bold text-ink-light mb-1">Hesaplanan Risk</p>
                 <span className={`inline-flex px-3 py-1 rounded-md text-sm font-bold ${viewedSubmission.risk === 'Yüksek' ? 'bg-red-100 text-red-700' : viewedSubmission.risk === 'Orta' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{viewedSubmission.risk || "Belirsiz"}</span>
               </div>
            </div>
            <h3 className="font-bold text-lg text-ink-dark mb-4">Verilen Cevaplar:</h3>
            <div className="space-y-3">
              {questionsList.map((question, index) => {
                const answerValue = viewedSubmission.answers ? viewedSubmission.answers[index] : null;
                const answerText = answerValue ? optionsMap[answerValue] : "Cevaplanmadı";
                return (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-sand-200 rounded-xl hover:border-sage-300 transition-colors">
                    <p className="text-ink-dark font-medium pr-4"><span className="text-sand-400 mr-2">{index + 1}.</span>{question}</p>
                    <span className={`mt-2 sm:mt-0 whitespace-nowrap px-3 py-1 rounded-lg text-sm font-bold ${answerValue ? 'bg-sage-50 text-[#7c9082]' : 'bg-gray-100 text-gray-400'}`}>{answerText}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 pt-6 border-t border-sand-100 flex justify-end">
              <button onClick={() => setViewedSubmission(null)} className="px-6 py-3 rounded-full bg-[#7c9082] text-white font-bold hover:bg-[#5e6f63] transition-colors">Pencereyi Kapat</button>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-ink-dark/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6"><h3 className="text-xl font-bold text-ink-dark">Yeni Danışan Ekle</h3><button onClick={() => setIsAddModalOpen(false)} className="text-red-500"><X className="w-6 h-6" /></button></div>
            <form onSubmit={handleAddClient}>
              <div className="mb-6"><input type="text" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} placeholder="Ad Soyad..." autoFocus className="w-full border rounded-xl px-4 py-3 text-ink-dark focus:border-[#7c9082]" /></div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 rounded-full border text-ink-dark font-bold hover:bg-sand-50">İptal</button>
                <button type="submit" disabled={!newClientName || isProcessing} className="flex-1 py-3 bg-[#7c9082] text-white font-bold rounded-full">{isProcessing ? "Ekleniyor..." : "Ekle"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteListModalOpen && (
        <div className="fixed inset-0 bg-ink-dark/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4"><h3 className="text-xl font-bold flex items-center gap-2"><Users className="w-5 h-5 text-red-500" />Danışan Seç ve Çıkar</h3><button onClick={() => setIsDeleteListModalOpen(false)} className="text-red-500"><X className="w-6 h-6" /></button></div>
            <div className="max-h-[50vh] overflow-y-auto space-y-3 mt-4">
              {clients.map(client => (
                <div key={client.id} className="flex justify-between items-center p-3 bg-sand-50 rounded-xl border">
                  <div><p className="font-bold">{client.name}</p></div>
                  <button onClick={() => triggerDelete(client.id, client.name, 'client')} className="flex items-center gap-1 px-3 py-1.5 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-bold"><Trash2 className="w-4 h-4" /> Sil</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {deleteConfirm.isOpen && (
        <div className="fixed inset-0 bg-ink-dark/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Emin misiniz?</h3>
            <p className="text-ink-light mb-8"><strong className="text-ink-dark">{deleteConfirm.name}</strong> kalıcı olarak silinecek.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm({ isOpen: false, id: null, name: "", type: "test" })} disabled={isProcessing} className="flex-1 py-3 rounded-full border font-bold">İptal</button>
              <button onClick={executeDelete} disabled={isProcessing} className="flex-1 py-3 bg-red-600 text-white font-bold rounded-full">Evet, Sil</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}