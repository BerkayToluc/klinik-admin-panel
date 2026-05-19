import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BilgilendirmeFormuPage({ params }: { params: Promise<{ locale: string }> }) {
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
            BİLGİLENDİRME FORMU
          </h1>

          <div className="space-y-4 text-ink-dark/80 text-sm md:text-base leading-relaxed">

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>Seanslar ortalama 50 dakika sürmektedir.</p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>Online seanslar <strong>"Google Meet"</strong> programı üzerinden gerçekleşmektedir.</p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Seans sıklıkları sürecin başında en az haftada bir olacak şekilde tavsiye edilir. Danışanın uygunluk durumuna göre birlikte karar verilir. Bu oturumlar boyunca ilk önce başvurunuza neden olan sorununuzu tanımlamaya çalışıp, sorununuzun çözümüne yardımcı olabilecek unsurları keşfettikten sonra birlikte bir çözüm için ilerleyeceğiz.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Görüşme esnasında alınan notlar, tutulan kayıtlar, psikoterapi süresince söylediğiniz her şey kesinlikle gizli kalacak, 3. bir kişiyle paylaşılmayacaktır.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Terapist belirli <em>"istisnai durumlar"</em>da bu Gizlilik Kuralı'nın dışına çıkmakla yükümlüdür. Terapistiniz olarak; sizin <em>"kendinize veya başka kişilere ciddi bir zarar verme (Örn; kendinizin veya başkasının canına kastetme) niyetiniz/planınız olduğu durumda"</em> sizi ve diğerlerini korumak amacıyla konuyla ilgili kişilere durumu bildirmem hem psikoterapi etik ilke ve uygulama standartları hem de ülkemizdeki kanunlar <em>(Türk Ceza Kanunu)</em> açısından zorunluluktur. Benzer bir durumda ceza ve hukuk davalarında tanıklık celbi gelmesi halinde kanunen <em>(Ceza Muhakemesi Kanunu)</em> tanıklık yapmak zorunda kalabilirim.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Terapi süresince bir sıkıntınızla ilgili çalışmak ve duygularınızı keşfetmek zaman zaman size üzüntü, acı vb. duygular hissettirebilir. Bu iniş çıkışlar terapi sürecinde olağandır. Bu sürecin sonunda yaşam kalitenizin iyileşmesi ve daha sağlıklı bir bakış açısı kazanmanız beklenmektedir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Sürecin beklenen sonuca ulaşması için danışan olarak belirlenen gün ve saatlerde randevulara devam etme sorumluluğu danışana aittir. Bu nedenle randevu oluştururken birlikte en uygun gün ve saati belirlememiz önemlidir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Seansa geç kalmanız halinde seans sürenizde bir değişiklik olmadan kalan süreniz kullanılır.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Yüz yüze bireysel seans ücreti <strong>1.250 ₺</strong>, online bireysel seans ücreti <strong>1.000 ₺</strong>, aile ve çift terapisi seans ücreti <strong>2.000 ₺</strong>'dir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Seansa katılmamak için önemli bir gerekçeniz olduğu durumda bunu terapistiniz ile en az <strong>24 saat öncesinden</strong> paylaşmanız beklenmektedir. Seansın olduğu gün içerisinde seanstan önce yapılan iptallerde seans ücretinin tamamı talep edilecektir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Görüşmelerin üst üste üç kez iptal edilmesi halinde terapi süreci sonlandırılır.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Danışan olarak istediğiniz zaman süreci sonlandırma hakkınız vardır ve bununla ilgili bir yükümlülüğünüz bulunmamaktadır.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Etik çerçeve gereğince danışanın —çok acil durumlar dışında— randevu işlemleri haricinde terapistini araması veya mesaj yoluyla ulaşması doğru değildir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Terapistin her seans sonunda vermiş olduğu ödevlere uyulması sürecin verimliliği açısından önemlidir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                KVKK uyarınca benimle paylaştığınız kişisel bilgileriniz <em>(isim, soyisim, T.C. kimlik no, adres, sağlık bilgileriniz vd.)</em> hukuka ve usulüne uygun olarak muhafaza edilip korunmaktadır. Seanslarımız sona erdikten sonra dosyanız 2 yıl boyunca aynı şekilde hukuka ve usulüne uygun olarak muhafaza edilip korunacaktır. 2 sene sonunda tarafınızca bir talepte bulunulmaması durumunda dosyanız ile bilgileriniz hukuka ve usulüne uygun olarak imha edilecektir.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-ink-dark/40 select-none">•</span>
              <p>
                Geri kalan tüm sorularınız ve randevu işlemleriniz için{' '}
                <a href="tel:+908504304623" className="font-semibold text-sage-600 hover:underline">
                  0850 430 46 23
                </a>{' '}
                numaralı telefondan ulaşabilirsiniz.
              </p>
            </div>

          </div>

          {/* İmza Alanı */}
          <div className="mt-12 pt-8 border-t border-sand-500/30">
            <div className="grid grid-cols-2 gap-8 text-sm text-ink-dark/70">
              <div className="space-y-8">
                <p className="font-semibold text-ink-dark">Danışan</p>
                <div className="border-b border-ink-dark/20 w-48" />
              </div>
              <div className="space-y-8 text-right">
                <p className="font-semibold text-ink-dark">Uzman Klinik Psikolog</p>
                <p className="font-bold text-ink-dark">Gökçe TOLUÇ</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
