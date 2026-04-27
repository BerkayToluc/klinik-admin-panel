import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function KVKKPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-sand-50 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-ink-light hover:text-sage-500 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-sand-500/20 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-ink-dark mb-8 leading-tight">
            6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU ("KVKK") UYARINCA AYDINLATMA METNİ
          </h1>

          <div className="space-y-8 text-ink-dark/80 text-sm md:text-base leading-relaxed">
            
            <section>
              <p>
                Türkiye'de Uzman Klinik Psikolog Gökçe Toluç ("Psikolog") olarak; veri sorumlusu sıfatıyla, aşağıda belirtilen şekillerde elde ettiğimiz kişisel verilerinizin, işlenmelerini gerektiren amaç çerçevesinde ve bu amaç ile bağlantılı, sınırlı ve ölçülü şekilde kaydedileceğini, depolanacağını ve kanunen yetkili kurumlara aktarılabileceğini bildiririz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink-dark mb-3">1. İşlenen Kişisel Verileriniz</h2>
              <p className="mb-2">Tarafımızca, danışanların sağlamış olduğu aşağıdaki veriler işlenebilmektedir:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Kimlik Verisi:</strong> Ad, soyadı, doğum tarihi, TCKN vb.</li>
                <li><strong>İletişim Verisi:</strong> Telefon numarası, adres, e-posta adresi.</li>
                <li><strong>Özel Nitelikli Kişisel Veri:</strong> Sağlık verileri, ruh sağlığı bilgileri.</li>
                <li><strong>Eğitim ve Aile Verisi:</strong> Öğrenim durumu, medeni durum ve yakınların iletişim bilgileri.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink-dark mb-3">2. Toplanma Yöntemi ve Hukuki Sebebi</h2>
              <p>
                Kişisel verileriniz, terapist olarak danışmanlık yükümlülüklerimizi yerine getirmek, aramızdaki hizmet akdinin ifası ve bilgilendirme/anamnez formları vasıtasıyla fiziksel veya elektronik ortamda toplanmaktadır. Seans odalarında kesinlikle kamera veya ses kaydı yapılmamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink-dark mb-3">3. İşlenme Amaçları</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Danışan hakkında ön bilgi edinmek ve sorunlara çözüm üretmek.</li>
                <li>Danışmanlık hizmetinin güvenli bir şekilde ifa edilmesi.</li>
                <li>Psikologun idaresi, danışan sayfasının oluşturulması ve acil durumlarda iletişim sağlanması.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink-dark mb-3">4. Üçüncü Kişilerle Paylaşım ve İstisnai Durumlar</h2>
              <p>
                Terapistiniz olarak; sizin "kendinize veya başka kişilere ciddi bir zarar verme" niyetiniz/planınız olduğu durumda sizi ve diğerlerini korumak amacıyla durumu ilgili kişilere veya resmi makamlara bildirmek etik ve yasal bir zorunluluktur. Bunun dışında verileriniz, gizlilik ilkesi gereği üçüncü şahıslarla paylaşılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink-dark mb-3">5. Haklarınız (KVKK Madde 11)</h2>
              <p className="mb-2">Kanun gereği tarafımıza başvurarak;</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenme amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini, kanuni şartlar oluştuğunda silinmesini talep etme haklarına sahipsiniz.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}