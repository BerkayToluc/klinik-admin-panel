# 🧠 Klinik Psikolog Kurumsal Web Platformu & Yönetim Paneli

Bu proje, Amerika'da hizmet veren bir klinik psikolog için sıfırdan (end-to-end) tasarlanıp geliştirilmiş; içerik yönetim sistemi (CMS) ve uluslararası randevu modüllerini barındıran modern bir web platformudur. 

Proje, modern web teknolojileri ve yapay zeka destekli **"Vibe Coding"** metodolojisi kullanılarak çevik (agile) bir yaklaşımla geliştirilmiş ve canlıya alınmıştır.

🔗 **Canlı Site:** [psikologgokcesakli.com](https://psikologgokcesakli.com)

## ✨ Öne Çıkan Özellikler

* **🌍 Çift Dil Desteği (i18n):** `next-intl` kullanılarak projenin tamamı Türkçe ve İngilizce dillerinde akıcı bir şekilde çalışacak şekilde yapılandırıldı.
* **📅 Dinamik Randevu Sistemi:** Calendly API entegrasyonu ile Amerika ve Türkiye (veya dünyanın herhangi bir yeri) arasındaki saat dilimi (Timezone) farkları otomatik olarak hesaplanarak danışanlara pürüzsüz bir randevu deneyimi sunuldu.
* **📋 Klinik Ölçekler ve Formlar:** Danışanların online olarak doldurabildiği psikolojik testler ve PDF bilgi formları sisteme entegre edildi.
* **🔐 Supabase Entegrasyonu:** Dinamik içerik yönetimi ve veri depolama süreçleri için Supabase (PostgreSQL) kullanıldı. Güvenli kimlik doğrulama (Auth) ile Admin Paneli inşa edildi.
* **📱 Responsive & Modern Arayüz:** Tailwind CSS kullanılarak her cihaza (mobil, tablet, masaüstü) %100 uyumlu, şık ve minimalist bir UI/UX tasarımı uygulandı.

## 🛠 Kullanılan Teknolojiler

* **Frontend:** Next.js (App Router), React, TypeScript/JavaScript
* **Stilleme:** Tailwind CSS, Lucide React (İkonlar)
* **Backend & Veritabanı:** Supabase (PostgreSQL & Auth)
* **Çoklu Dil (i18n):** next-intl
* **Canlıya Alma (Deployment):** Vercel (CI/CD Pipeline)

## 🚀 Kurulum ve Geliştirme (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Repoyu klonlayın:**
   ```bash
   git clone [https://github.com/KULLANICI_ADIN/klinik-admin-panel.git](https://github.com/KULLANICI_ADIN/klinik-admin-panel.git)
