// data/testDatabase.ts
import { mmpiQuestions } from './mmpiData';

export const testDatabase: Record<string, any> = {
  
  // 1. BECK ANKSİYETE ÖLÇEĞİ (Tamamı Eklendi - 21 Soru)
  'beck-anksiyete': {
    title: 'Beck Anksiyete Ölçeği (BAÖ)',
    description: 'Aşağıda insanların kaygılı ya da endişeli oldukları zamanlarda yaşadıkları bazı belirtiler verilmiştir. Lütfen her maddedeki belirtinin BUGÜN DÂHİL SON BİR (1) HAFTADIR sizi ne kadar rahatsız ettiğini seçiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      if (score >= 26) return 'Şiddetli Düzeyde Anksiyete';
      if (score >= 16) return 'Orta Düzeyde Anksiyete';
      if (score >= 8) return 'Hafif Düzeyde Anksiyete';
      return 'Minimal Düzeyde Anksiyete';
    },
    questions: [
      { id: 1, text: "1. Bedeninizin herhangi bir yerinde uyuşma veya karıncalanma", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 2, text: "2. Sıcak / ateş basmaları", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 3, text: "3. Bacaklarda halsizlik, titreme", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 4, text: "4. Gevşeyememe", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 5, text: "5. Çok kötü şeyler olacak korkusu", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 6, text: "6. Baş dönmesi veya sersemlik", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 7, text: "7. Kalp çarpıntısı", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 8, text: "8. Dengeyi kaybetme duygusu", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 9, text: "9. Dehşete kapılma", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 10, text: "10. Sinirlilik", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 11, text: "11. Boğuluyormuş gibi olma duygusu", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 12, text: "12. Ellerde titreme", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 13, text: "13. Titreklik", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 14, text: "14. Kontrolü kaybetme korkusu", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 15, text: "15. Nefes almada güçlük", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 16, text: "16. Ölüm korkusu", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 17, text: "17. Korkuya kapılma", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 18, text: "18. Midede hazımsızlık ya da rahatsızlık hissi", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 19, text: "19. Baygınlık", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 20, text: "20. Yüzün kızarması", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] },
      { id: 21, text: "21. Terleme (sıcaklığa bağlı olmayan)", options: [{ value: 0, label: "Hiç" }, { value: 1, label: "Hafif düzeyde" }, { value: 2, label: "Orta düzeyde" }, { value: 3, label: "Ciddi düzeyde" }] }
    ]
  },

  // 2. BECK DEPRESYON ENVANTERİ (Tamamı Eklendi - 21 Soru)
  'beck-depresyon': {
    title: 'Beck Depresyon Envanteri (BDE)',
    description: 'Aşağıdaki grupları dikkatlice okuyunuz. Bugün dâhil son bir (1) hafta içinde kendinizi nasıl hissettiğinizi en iyi anlatan cümleyi seçiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      if (score >= 30) return 'Şiddetli Depresyon Belirtileri';
      if (score >= 19) return 'Orta Düzey Depresyon Belirtileri';
      if (score >= 10) return 'Hafif Düzey Depresyon Belirtileri';
      return 'Minimal Belirtiler';
    },
    questions: [
      { text: "1. Madde", options: [{ value: 0, label: "Üzgün ve sıkıntılı değilim." }, { value: 1, label: "Kendimi üzüntülü ve sıkıntılı hissediyorum." }, { value: 2, label: "Hep üzüntülü ve sıkıntılıyım. Bundan kurtulamıyorum." }, { value: 3, label: "O kadar üzgün ve sıkıntılıyım ki, artık dayanamıyorum." }] },
      { text: "2. Madde", options: [{ value: 0, label: "Gelecek hakkında umutsuz ve karamsar değilim." }, { value: 1, label: "Gelecek için karamsarım." }, { value: 2, label: "Gelecekten beklediğim hiçbir şey yok." }, { value: 3, label: "Gelecek hakkında umutsuzum ve sanki hiçbir şey düzelmeyecekmiş gibi geliyor." }] },
      { text: "3. Madde", options: [{ value: 0, label: "Kendimi başarısız biri olarak görmüyorum." }, { value: 1, label: "Başkalarından daha başarısız olduğumu hissediyorum." }, { value: 2, label: "Geçmişe baktığımda başarısızlıklarla dolu olduğunu görüyorum." }, { value: 3, label: "Kendimi tümüyle başarısız bir insan olarak görüyorum." }] },
      { text: "4. Madde", options: [{ value: 0, label: "Her şeyden eskisi kadar zevk alıyorum." }, { value: 1, label: "Birçok şeyden eskiden olduğu gibi zevk alamıyorum." }, { value: 2, label: "Artık hiçbir şey bana tam anlamıyla zevk vermiyor." }, { value: 3, label: "Her şeyden sıkılıyorum." }] },
      { text: "5. Madde", options: [{ value: 0, label: "Kendimi herhangi bir biçimde suçlu hissetmiyorum." }, { value: 1, label: "Kendimi zaman zaman suçlu hissediyorum." }, { value: 2, label: "Çoğu zaman kendimi suçlu hissediyorum." }, { value: 3, label: "Kendimi her zaman suçlu hissediyorum." }] },
      { text: "6. Madde", options: [{ value: 0, label: "Cezalandırılması gereken şeyler yaptığımı sanmıyorum." }, { value: 1, label: "Yaptıklarımdan dolayı cezalandırılabileceğimi düşünüyorum." }, { value: 2, label: "Cezamı çekmeyi bekliyorum." }, { value: 3, label: "Sanki cezamı bulmuşum gibi geliyor." }] },
      { text: "7. Madde", options: [{ value: 0, label: "Kendimden memnunum." }, { value: 1, label: "Kendimden pek memnun değilim." }, { value: 2, label: "Kendime kızgınım." }, { value: 3, label: "Kendimden nefret ediyorum." }] },
      { text: "8. Madde", options: [{ value: 0, label: "Başkalarından daha kötü olduğumu sanmıyorum." }, { value: 1, label: "Hatalarım ve zayıf taraflarım olduğunu düşünüyorum." }, { value: 2, label: "Hatalarımdan dolayı kendimden utanıyorum." }, { value: 3, label: "Her şeyi yanlış yapıyormuşum gibi geliyor ve hep kendimde kabahat buluyorum." }] },
      { text: "9. Madde", options: [{ value: 0, label: "Kendimi öldürmek gibi düşüncelerim yok." }, { value: 1, label: "Kimi zaman kendimi öldürmeyi düşündüğüm oluyor ama yapmıyorum." }, { value: 2, label: "Kendimi öldürmek isterdim." }, { value: 3, label: "Fırsatını bulsam kendimi öldürürüm." }] },
      { text: "10. Madde", options: [{ value: 0, label: "İçimden ağlamak geldiği pek olmuyor." }, { value: 1, label: "Zaman zaman içimden ağlamak geliyor." }, { value: 2, label: "Çoğu zaman ağlıyorum." }, { value: 3, label: "Eskiden ağlayabilirdim ama şimdi istesem de ağlayamıyorum." }] },
      { text: "11. Madde", options: [{ value: 0, label: "Her zaman olduğumdan daha canı sıkkın ve sinirli değilim." }, { value: 1, label: "Eskisine oranla daha kolay canım sıkılıyor ve kızıyorum." }, { value: 2, label: "Her şey canımı sıkıyor ve kendimi hep sinirli hissediyorum." }, { value: 3, label: "Canımı sıkan şeylere bile artık kızamıyorum." }] },
      { text: "12. Madde", options: [{ value: 0, label: "Başkalarıyla görüşme, konuşma isteğimi kaybetmedim." }, { value: 1, label: "Eskisi kadar insanlarla birlikte olmak istemiyorum." }, { value: 2, label: "Birileriyle görüşüp konuşmak hiç içimden gelmiyor." }, { value: 3, label: "Artık çevremde hiç kimseyi istemiyorum." }] },
      { text: "13. Madde", options: [{ value: 0, label: "Karar verirken eskisinden fazla güçlük çekmiyorum." }, { value: 1, label: "Eskiden olduğu kadar kolay karar veremiyorum." }, { value: 2, label: "Eskiye kıyasla karar vermekte çok güçlük çekiyorum." }, { value: 3, label: "Artık hiç karar veremiyorum." }] },
      { text: "14. Madde", options: [{ value: 0, label: "Her zamankinden farklı göründüğümü sanmıyorum." }, { value: 1, label: "Aynada kendime her zamankinden kötü görünüyorum." }, { value: 2, label: "Aynaya baktığımda kendimi yaşlanmış ve çirkinleşmiş buluyorum." }, { value: 3, label: "Kendimi çok çirkin buluyorum." }] },
      { text: "15. Madde", options: [{ value: 0, label: "Eskisi kadar iyi iş güç yapabiliyorum." }, { value: 1, label: "Her zaman yaptığım işler şimdi gözümde büyüyor." }, { value: 2, label: "Ufacık bir işi bile yapabilmek için kendimi çok zorlamam gerekiyor." }, { value: 3, label: "Artık hiçbir iş yapamıyorum." }] },
      { text: "16. Madde", options: [{ value: 0, label: "Uyku düzenimde bir değişiklik yok." }, { value: 1, label: "Eskisi kadar iyi uyuyamıyorum." }, { value: 2, label: "Eskisine göre daha erken uyanıyorum ve tekrar uyumakta zorlanıyorum." }, { value: 3, label: "Eskisine göre çok daha erken uyanıyorum ve tekrar uyuyamıyorum." }] },
      { text: "17. Madde", options: [{ value: 0, label: "Kendimi her zamankinden yorgun hissetmiyorum." }, { value: 1, label: "Eskiye oranla daha çabuk yoruluyorum." }, { value: 2, label: "Her şey beni yoruyor." }, { value: 3, label: "Kendimi hiçbir şey yapamayacak kadar yorgun ve bitkin hissediyorum." }] },
      { text: "18. Madde", options: [{ value: 0, label: "İştahımda bir değişiklik yok." }, { value: 1, label: "İştahım eskisi kadar iyi değil." }, { value: 2, label: "İştahım çok azaldı." }, { value: 3, label: "Artık hiç iştahım yok." }] },
      { text: "19. Madde", options: [{ value: 0, label: "Son zamanlarda zayıflamadım." }, { value: 1, label: "Zayıflamaya çalışmadığım halde en az 2 Kg verdim." }, { value: 2, label: "Zayıflamaya çalışmadığım halde en az 4 Kg verdim." }, { value: 3, label: "Zayıflamaya çalışmadığım halde en az 6 Kg verdim." }] },
      { text: "20. Madde", options: [{ value: 0, label: "Sağlığımla ilgili kaygılarım yok." }, { value: 1, label: "Ağrılar, mide sancıları, kabızlık gibi şikayetlerim oluyor ve bunlar beni tasalandırıyor." }, { value: 2, label: "Sağlığımın bozulmasından çok kaygılanıyorum ve kafamı başka şeylere vermekte zorlanıyorum." }, { value: 3, label: "Sağlık durumum kafama o kadar takılıyor ki, başka hiçbir şey düşünemiyorum." }] },
      { text: "21. Madde", options: [{ value: 0, label: "Sekse karşı ilgimde herhangi bir değişiklik yok." }, { value: 1, label: "Eskisine oranla sekse ilgim az." }, { value: 2, label: "Cinsel isteğim çok azaldı." }, { value: 3, label: "Hiç cinsel istek duymuyorum." }] }
    ]
  },

  // 3. LIEBOWITZ SOSYAL FOBİ (Tamamı Eklendi - 24 Soru)
  'liebowitz': {
    title: 'Liebowitz Sosyal Fobi Belirtileri Ölçeği',
    description: 'Sol kolondaki durumlarda duyduğunuz kaygının şiddetine göre, sağ kolonda ise bu durumlardan kaçınma şiddetinize göre puan verin.',
    scoringType: 'dual',
    calculateRisk: (score: number) => {
      if (score >= 128) return 'Çok Şiddetli Sosyal Fobi';
      if (score >= 113) return 'Şiddetli Sosyal Fobi';
      if (score >= 98) return 'Belirgin Sosyal Fobi';
      return 'Hafif / Normal';
    },
    optionsKaygi: [ 
      { value: 1, label: "1: Yok ya da çok hafif" }, 
      { value: 2, label: "2: Hafif" }, 
      { value: 3, label: "3: Orta derecede" }, 
      { value: 4, label: "4: Şiddetli" } 
    ],
    optionsKacinma: [ 
      { value: 1, label: "1: Kaçınma yok ya da çok ender" }, 
      { value: 2, label: "2: Zaman zaman kaçınırım" }, 
      { value: 3, label: "3: Çoğunlukla kaçınırım" }, 
      { value: 4, label: "4: Her zaman kaçınırım" } 
    ],
    questions: [
      { id: 1, text: "1. Önceden hazırlanmaksızın bir toplantıda kalkıp konuşmak" },
      { id: 2, text: "2. Seyirci önünde hareket, gösteri ya da konuşma yapmak" },
      { id: 3, text: "3. Dikkatleri üzerinde toplamak" },
      { id: 4, text: "4. Romantik veya cinsel bir ilişki kurmak amacıyla birisiyle tanışmaya çalışmak" },
      { id: 5, text: "5. Bir gruba önceden hazırlanmış sözlü bilgi sunmak" },
      { id: 6, text: "6. Başkaları içerdeyken bir odaya girmek" },
      { id: 7, text: "7. Kendisinden daha yetkili biriyle konuşmak" },
      { id: 8, text: "8. Satın aldığı bir malı ödediği parayı geri almak üzere mağazaya iade etmek" },
      { id: 9, text: "9. Çok iyi tanımadığı birisine fikir ayrılığı veya hoşnutsuzluğun ifade edilmesi" },
      { id: 10, text: "10. Gözlendiği sırada çalışmak" },
      { id: 11, text: "11. Çok iyi tanımadığı bir kişiyle yüz yüze konuşmak" },
      { id: 12, text: "12. Bir eğlenceye gitmek" },
      { id: 13, text: "13. Çok iyi tanımadığı birisinin gözlerinin içine doğrudan bakmak" },
      { id: 14, text: "14. Yetenek, beceri ya da bilginin sınanması" },
      { id: 15, text: "15. Gözlendiği sırada yazı yazmak" },
      { id: 16, text: "16. Çok iyi tanımadığı bir kişiyle telefonla konuşmak" },
      { id: 17, text: "17. Umumi yerlerde yemek yemek" },
      { id: 18, text: "18. Evde misafir ağırlamak" },
      { id: 19, text: "19. Küçük bir grup faaliyetine katılmak" },
      { id: 20, text: "20. Umumi yerlerde bir şeyler içmek" },
      { id: 21, text: "21. Umumi telefonları kullanmak" },
      { id: 22, text: "22. Yabancılarla konuşmak" },
      { id: 23, text: "23. Satış elemanının yoğun baskısına karşı koymak" },
      { id: 24, text: "24. Umumi tuvalette idrar yapmak" }
    ]
  },

  // 4. YOUNG ŞEMA ÖLÇEĞİ (90 Soru - Tamamı Eklendi)
  'young-sema': {
    title: 'Young Şema Ölçeği (YSÖ-K3)',
    description: 'Lütfen her bir ifadeyi okuyun ve sizi ne kadar iyi tanımladığına karar verin.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Detaylı Şema Analizi Gerektirir'; },
    
    questions: [
      "1. Bana bakan, benimle zaman geçiren, başıma gelen olaylarla gerçekten ilgilenen kimsem olmadı.",
      "2. Beni terk edeceklerinden korktuğum için yakın olduğum insanların peşini bırakmam.",
      "3. İnsanların beni kullandıklarını hissediyorum.",
      "4. Uyumsuzum.",
      "5. Beğendiğim hiçbir erkek/kadın, kusurlarımı görürse beni sevmez.",
      "6. İş (veya okul) hayatımda neredeyse hiçbir şeyi diğer insanlar kadar iyi yapamıyorum.",
      "7. Günlük yaşamımı tek başıma idare edebilme becerisine sahip olduğumu hissetmiyorum.",
      "8. Kötü bir şey olacağı duygusundan kurtulamıyorum.",
      "9. Anne babamdan ayrılmayı, bağımsız hareket edebilmeyi, yaşıtlarım kadar, başaramadım.",
      "10. Eğer istediğimi yaparsam, başımı derde sokarım diye düşünürüm.",
      "11. Genellikle yakınlarıma ilgi gösteren ve bakan ben olurum.",
      "12. Olumlu duygularımı diğerlerine göstermekten utanırım (sevdiğimi, önemsediğimi göstermek gibi).",
      "13. Yaptığım çoğu şeyde en iyi olmalıyım; ikinci olmayı kabullenemem.",
      "14. Diğer insanlardan bir şeyler istediğimde bana 'hayır' denilmesini çok zor kabullenirim.",
      "15. Kendimi sıradan ve sıkıcı işleri yapmaya zorlayamam.",
      "16. Paramın olması ve önemli insanlar tanıyor olmak beni değerli yapar.",
      "17. Her şey yolunda gidiyor görünse bile, bunun bozulacağını hissederim.",
      "18. Eğer bir yanlış yaparsam, cezalandırılmayı hak ederim.",
      "19. Çevremde bana sıcaklık, koruma ve duygusal yakınlık gösteren kimsem yok.",
      "20. Diğer insanlara o kadar muhtacım ki onları kaybedeceğim diye çok endişeleniyorum.",
      "21. İnsanlara karşı tedbiri elden bırakamam yoksa bana kasıtlı olarak zarar vereceklerini hissederim.",
      "22. Temel olarak diğer insanlardan farklıyım.",
      "23. Gerçek beni tanırlarsa beğendiğim hiç kimse bana yakın olmak istemez.",
      "24. İşleri halletmede son derece yetersizim.",
      "25. Gündelik işlerde kendimi başkalarına bağımlı biri olarak görüyorum.",
      "26. Her an bir felaket (doğal, adli, mali veya tıbbi) olabilir diye hissediyorum.",
      "27. Annem, babam ve ben birbirimizin hayatı ve sorunlarıyla aşırı ilgili olmaya eğilimliyiz.",
      "28. Diğer insanların isteklerine uymaktan başka yolum yokmuş gibi hissediyorum; eğer böyle yapmazsam bir şekilde beni reddederler veya intikam alırlar.",
      "29. Başkalarını kendimden daha fazla düşündüğüm için ben iyi bir insanım.",
      "30. Duygularımı diğerlerine açmayı utanç verici bulurum.",
      "31. En iyisini yapmalıyım, 'yeterince iyi' ile yetinemem.",
      "32. Ben özel biriyim ve diğer insanlar için konulmuş olan kısıtlamaları veya sınırları kabul etmek zorunda değilim.",
      "33. Eğer hedefime ulaşamazsam kolaylıkla yılgınlığa düşer ve vazgeçerim.",
      "34. Başkalarının da farkında olduğu başarılar benim için en değerlisidir.",
      "35. İyi bir şey olursa, bunu kötü bir şeyin izleyeceğinden endişe ederim.",
      "36. Eğer yanlış yaparsam, bunun özürü yoktur.",
      "37. Birisi için özel olduğumu hiç hissetmedim.",
      "38. Yakınlarımın beni terk edeceği ya da ayrılacağından endişe duyarım.",
      "39. Herhangi bir anda birileri beni aldatmaya kalkışabilir.",
      "40. Bir yere ait değilim, yalnızım.",
      "41. Başkalarının sevgisine, ilgisine ve saygısına değer bir insan değilim.",
      "42. İş ve başarı alanlarında birçok insan benden daha yeterli.",
      "43. Doğru ile yanlışı birbirinden ayırmakta zorlanırım.",
      "44. Fiziksel bir saldırıya uğramaktan endişe duyarım.",
      "45. Annem, babam ve ben özel hayatımız birbirimizden saklarsak, birbirimizi aldatmış hisseder veya suçluluk duyarız.",
      "46. İlişkilerimde, diğer kişinin yönlendirici olmasına izin veririm.",
      "47. Yakınlarımla o kadar meşgulüm ki kendime çok az zaman kalıyor.",
      "48. İnsanlarla beraberken içten ve cana yakın olmak benim için zordur.",
      "49. Tüm sorumluluklarımı yerine getirmek zorundayım.",
      "50. İstediğimi yapmaktan alıkonulmaktan veya kısıtlanmaktan nefret ederim.",
      "51. Uzun vadeli amaçlara ulaşabilmek için şu andaki zevklerimden fedakarlık etmekte zorlanırım.",
      "52. Başkalarından yoğun bir ilgi görmezsem kendimi daha az önemli hissederim.",
      "53. Yeterince dikkatli olmazsanız, neredeyse her zaman bir şeyler ters gider.",
      "54. Eğer işimi doğru yapmazsam sonuçlara katlanmam gerekir.",
      "55. Beni gerçekten dinleyen, anlayan veya benim gerçek ihtiyaçlarım ve duygularımı önemseyen kimsem olmadı.",
      "56. Önem verdiğim birisinin benden uzaklaştığını sezersem çok kötü hissederim.",
      "57. Diğer insanların niyetleriyle ilgili oldukça şüpheciyimdir.",
      "58. Kendimi diğer insanlara uzak veya kopmuş hissediyorum.",
      "59. Kendimi sevilebilecek biri gibi hissetmiyorum.",
      "60. İş (okul) hayatımda diğer insanlar kadar yetenekli değilim.",
      "61. Gündelik işler için benim kararlarıma güvenilemez.",
      "62. Tüm paramı kaybedip çok fakir veya zavallı duruma düşmekten endişe duyarım.",
      "63. Çoğunlukla annem ve babamın benimle iç içe yaşadığını hissediyorum-Benim kendime ait bir hayatım yok.",
      "64. Kendim için ne istediğimi bilmediğim için daima benim adıma diğer insanların karar vermesine izin veririm.",
      "65. Ben hep başkalarının sorunlarını dinleyen kişi oldum.",
      "66. Kendimi o kadar kontrol ederim ki insanlar beni duygusuz veya hissiz bulurlar.",
      "67. Başarmak ve bir şeyler yapmak için sürekli bir baskı altındayım.",
      "68. Diğer insanların uyduğu kurallara ve geleneklere uymak zorunda olmadığımı hissediyorum.",
      "69. Benim yararıma olduğunu bilsem bile hoşuma gitmeyen şeyleri yapmaya kendimi zorlayamam.",
      "70. Bir toplantıda fikrimi söylediğimde veya bir topluluğa tanıtıldığımda onaylanılmayı ve takdir görmeyi isterim.",
      "71. Ne kadar çok çalışırsam çalışayım, maddi olarak iflas edeceğimden ve neredeyse her şeyimi kaybedeceğimden endişe ederim.",
      "72. Neden yanlış yaptığımın önemi yoktur; eğer hata yaptıysam sonucuna da katlanmam gerekir.",
      "73. Hayatımda ne yapacağımı bilmediğim zamanlarda uygun bir öneride bulunacak veya beni yönlendirecek kimsem olmadı.",
      "74. İnsanların beni terk edeceği endişesiyle bazen onları kendimden uzaklaştırırım.",
      "75. Genellikle insanların asıl veya art niyetlerini araştırırım.",
      "76. Kendimi hep grupların dışında hissederim.",
      "77. Kabul edilemeyecek pek çok özelliğim yüzünden insanlara kendimi açamıyorum veya beni tam olarak tanımalarına izin vermiyorum.",
      "78. İş (okul) hayatımda diğer insanlar kadar zeki değilim.",
      "79. Ortaya çıkan gündelik sorunları çözebilme konusunda kendime güvenmiyorum.",
      "80. Bir doktor tarafından herhangi bir ciddi hastalık bulunmamasına rağmen bende ciddi bir hastalığın gelişmekte olduğu endişesine kapılıyorum.",
      "81. Sık sık annemden babamdan ya da eşimden ayrı bir kimliğimin olmadığını hissediyorum.",
      "82. Haklarıma saygı duyulmasını ve duygularımın hesaba katılmasını istemekte çok zorlanıyorum.",
      "83. Başkaları beni, diğerleri için çok, kendim için az şey yapan biri olarak görüyorlar.",
      "84. Diğerleri beni duygusal olarak soğuk bulurlar.",
      "85. Kendimi sorumluluktan kolayca sıyıramıyorum veya hatalarım için gerekçe bulamıyorum.",
      "86. Benim yaptıklarımın, diğer insanların katkılarından daha önemli olduğunu hissediyorum.",
      "87. Kararlarıma nadiren sadık kalabilirim.",
      "88. Bir dolu övgü ve iltifat almam kendimi değerli birisi olarak hissetmemi sağlar.",
      "89. Yanlış bir kararın bir felakete yol açabileceğinden endişe ederim.",
      "90. Ben cezalandırılmayı hak eden kötü bir insanım."
    ].map((soruMetni, index) => ({
      id: index + 1,
      text: soruMetni,
      options: [
        { value: 1, label: "1 - Tamamıyla yanlış" },
        { value: 2, label: "2 - Büyük ölçüde yanlış" },
        { value: 3, label: "3 - Uyan tarafı uymayanından biraz fazla" },
        { value: 4, label: "4 - Orta derecede doğru" },
        { value: 5, label: "5 - Çoğunlukla doğru" },
        { value: 6, label: "6 - Mükemmel şekilde tanımlıyor" }
      ]
    }))
  },

  // 5. PADUA ENVANTERİ (Tamamı Eklendi - 60 Soru)
  'padua': {
    title: 'Padua Envanteri',
    description: 'Lütfen her bir ifade için bu tür davranış ya da düşüncelerin oluşturabileceği rahatsızlık derecesine en uygun olan seçeneği işaretleyiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      "1. Paraya dokunduğumda ellerimi kirlenmiş hissederim.",
      "2. Vücut salgıları ile (ter, tükürük, idrar, v.b. gibi) hafif bir temasla bile giysilerimin kirlenebileceğini veya bir şekilde zarar görebileceğimi düşünürüm.",
      "3. Yabancıların veya belirli insanların dokunduğunu biliyorsam, bir nesneye dokunmakta zorlanırım.",
      "4. Çöpe veya kirli şeylere dokunmakta zorlanırım.",
      "5. Mikrop kapmaktan ve hastalıklardan korktuğum için umumi tuvaletleri kullanmaktan kaçınırım.",
      "6. Bulaşıcı hastalıktan korktuğum için halka açık telefonları kullanmaktan kaçınırım.",
      "7. Ellerimi gereğinden daha sık ve daha uzun süre yıkarım.",
      "8. Bazen sadece kirlendiğim ya da mikrop kaptığımı düşünerek derhal yıkanır veya temizlenirim.",
      "9. Bir şeye dokunduğumda \"mikrop kaptığımı\" düşünerek, derhal yıkanır veya temizlenirim.",
      "10. Bir hayvanın bana dokunması halinde, kendimi kirli hisseder ve derhal yıkanmam veya üstümdeki giysileri değiştirmem gerekir.",
      "11. Kaygılar ve üzüntüler aklıma geldiğinde, onlar hakkında güvenebildiğim birisiyle konuşmadan rahat edemem.",
      "12. Konuşurken aynı şeyleri veya aynı cümleleri birkaç kez tekrarlama ihtiyacı duyarım.",
      "13. İnsanların söyledikleri ilk seferinde anladığım halde birkaç kez tekrar ettirme ihtiyacı duyarım.",
      "14. Giyinirken, soyunurken ve yıkanırken, özel bir sırayı takip etme zorunluluğu hissederim.",
      "15. Yatmadan önce belirli şeyleri belirli bir sırayla yapmak zorundayım.",
      "16. Yatmadan önce giysilerimi özel bir şekilde asmak veya katlamak zorundayım.",
      "17. Belirli sayıları nedensiz yere tekrarlama zorunluluğu hissederim.",
      "18. Bir şeyleri doğru olarak yapıldığından emin olana kadar, birkaç kez tekrarlamak zorundayım.",
      "19. Bir şeyleri gereğinden daha sık kontrol etme eğilimindeyim.",
      "20. Ocağı, muslukları ve elektrik düğmelerini kapattıktan sonra tekrar tekrar kontrol ederim.",
      "21. Tam olarak kapalı olduğundan emin olmak için, kapıları, pencereleri, çekmeceleri kontrol etmek uğruna eve geri dönerim.",
      "22. Doğru bir şekilde doldurduğumdan emin olmak için formların, evrakların veya çeklerin ayrıntılarını sürekli kontrol ederim.",
      "23. Sigara, kibrit gibi yanan cisimlerin tam olarak söndüğünden emin olana kadar geri dönüp bakarım.",
      "24. Elime para aldığım zaman, üst üste birkaç kez sayarım.",
      "25. Mektupları postalamadan önce pek çok kez dikkatle kontrol ederim.",
      "26. Önemsiz meselelerde bile, karar vermeyi zor bulurum.",
      "27. Gerçekte bir şeyi yaptığımı bildiğim halde, bazen bundan emin olamam.",
      "28. Özellikle benimle ilgili önemli konular konuşulurken, bir şeyleri hiçbir zaman tam olarak ifade edemeyeceğim izlenimine kapılırım.",
      "29. Bir şeyleri özenli bir şekilde yapsam bile, hala yaptığım işi kötü yaptığım veya eksik bıraktığım izlenimini içimde taşırım.",
      "30. Belirli şeyleri gerektiğinden daha fazla yapmaya devam ettiğim için, bazen geç kalırım.",
      "31. Yaptığım şeylerin pek çoğuna ilişkin kaygılar ve problemler üretirim.",
      "32. Belirli şeyler üzerinde düşünmeye başladığımda, onlara takılıp kalırım.",
      "33. Kendi isteğim dışında, hoşa gitmeyen düşünceler aklıma gelir ve onlardan kurtulamam.",
      "34. Müstehcen veya kötü kelimeler aklıma gelir ve onlardan kurtulamam.",
      "35. Beynim sürekli olarak kendi bildiğini yapıyor ve ben çevremde olup bitene ayak uydurmakta güçlük çekiyorum.",
      "36. Dalgınlığımın veya yaptığım küçük hataların felaket sonuçlar doğuracağını düşünürüm.",
      "37. Birilerine bilmeden zarar verebileceğime ilişkin uzun süre düşünür veya kaygılanırım.",
      "38. Ne zaman bir felaket haberi duysam, bir şekilde benim hatam olduğunu düşünürüm.",
      "39. Bazen kendime zarar verdiğim veya bazı hastalıklarımın olduğuna ilişkin uzun süre sebepsiz yere kaygılanırım.",
      "40. Bazen hiç nedeni yokken nesneleri saymaya başlarım.",
      "41. Önemsiz sayıları tamamıyla hatırlamam gerektiği hissine kapılırım.",
      "42. Bir şey okuduğum sırada, en azından iki veya üç defa, önemli bir şeyleri kaçırdığım kaygısıyla geri dönmek ve pasajı yeniden okumak zorunda olduğum izlenimine kapılırım.",
      "43. Önemsiz şeyleri bütünüyle hatırlayabilmek uğruna kaygılanır ve onları unutmamak için çabalarım.",
      "44. Bir düşünce veya şüphe aklıma takıldığı zaman, onu bütün yönleriyle gözden geçirmem gerekir ve bu şekilde yapana kadar rahat edemem.",
      "45. Belirli durumlarda, kontrolümü kaybetmekten ve utanç verici şeyler yapmaktan korkarım.",
      "46. Bir köprüden veya yüksek bir pencereden aşağıya baktığım zaman, kendimi boşluğa bırakacakmış gibi hissederim.",
      "47. Yaklaşan bir tren gördüğüm zaman, bazen kendimi onun altına atabileceğimi düşünürüm.",
      "48. Bazı zamanlar içimden kalabalığın içinde soyunmak gelir.",
      "49. Araba sürerken bazen içimden bir his arabayı birilerinin üstüne veya bir şeylere doğru sürmeye zorlar.",
      "50. Silahlara bakmak beni heyecanlandırır ve şiddet içeren düşüncelere sürükler.",
      "51. Bıçakların, kamaların ve diğer kesici aletlerin keskin tarafından rahatsız olurum.",
      "52. Bazen içimde gerçekten aptalca ve yapmak istemediğim şeyleri bana yaptıran bir şey olduğunu hissediyorum.",
      "53. Bazen sebepsiz yere bir şeyleri kırmak veya hasar vermek ihtiyacı hissederim.",
      "54. Bazen içimden bir his hiçbir işime yaramadığı halde, başka insanların eşyalarını çalmaya zorlar.",
      "55. Bazen neredeyse karşı konulmaz bir biçimde süper marketten bir şeyler çalmak içimden geçer.",
      "56. Bazen savunmasız çocuklara veya hayvanlara aniden zarar verecekmişim gibi gelir.",
      "57. Belirli hareketleri yapmam veya özel bir şekilde yürümem gerektiği hissine kapılırım.",
      "58. Belirli durumlarda, sonrasında rahatsız olacağımı bildiğim halde aşırı yeme isteği duyarım.",
      "59. Bir intihar veya bir cinayet haberi duyduğumda, uzun bir süre boyunca üzülürüm ve bu olay üzerinde düşünmekten bir türlü kendimi alamam.",
      "60. Mikroplar ve hastalıklara ilişkin gereksiz kaygılar üretirim."
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 0, label: "Hiç" },
        { value: 1, label: "Çok az" },
        { value: 2, label: "Çok" },
        { value: 3, label: "Epeyce" },
        { value: 4, label: "Aşırı" }
      ]
    }))
  },

  // 6. MAUDSLEY OBSESİF KOMPULSİF SORU LİSTESİ (Tamamı Eklendi - 37 Soru)
  'maudsley': {
    title: 'Maudsley Obsesif Kompulsif Soru Listesi',
    description: 'Aşağıdaki cümleleri dikkatle okuyunuz. Size uygunsa "DOĞRU"yu uygun değilse "YANLIŞ"ı işaretleyiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      "1. Bana bir hastalık bulaşır korkusuyla herkesin kullandığı telefonları kullanmaktan kaçınırım.",
      "2. Sık sık hoşa gitmeyen şeyler düşünür, onları zihnimden uzaklaştırmakta güçlük çekerim.",
      "3. Dürüstlüğe herkesten çok önem veririm.",
      "4. İşleri zamanında bitiremediğim için çoğu kez geç kalırım.",
      "5. Bir hayvana dokununca hastalık bulaşır diye kaygılanırım.",
      "6. Sık sık havagazını, su musluklarını ve kapıları birkaç kez kontrol ederim.",
      "7. Değişmez kurallarım vardır.",
      "8. Aklıma takılan nahoş düşünceler hemen her gün beni rahatsız eder.",
      "9. Kaza ile bir başkasına çarptığımda rahatsız olurum.",
      "10. Her gün yaptığım basit günlük işlerden bile emin olamam.",
      "11. Çocukken annem de babam da beni fazla sıkmazlardı.",
      "12. Bazı şeyleri tekrar tekrar yaptığım için işimde geri kaldığım oluyor.",
      "13. Çok fazla sabun kullanırım.",
      "14. Bana göre bazı sayılar son derece uğursuzdur.",
      "15. Mektupları postalamadan önce onları tekrar tekrar kontrol ederim.",
      "16. Sabahları giyinmek için uzun zaman harcarım.",
      "17. Temizliğe aşırı düşkünüm.",
      "18. Ayrıntılara gereğinden fazla dikkat ederim.",
      "19. Pis tuvaletlere giremem.",
      "20. Esas sorunum bazı şeyleri tekrar tekrar kontrol etmemdir.",
      "21. Mikrop kapmaktan ve hastalanmaktan korkar ve kaygılanırım.",
      "22. Bazı şeyleri birden fazla kontrol ederim.",
      "23. Günlük işlerimi belirli bir programa göre yaparım.",
      "24. Paraya dokunduktan sonra ellerimi kirli hissederim.",
      "25. Alıştığım işi yaparken bile kaç kere yaptığımı sayarım.",
      "26. Sabahları elimi yüzümü yıkamak çok zamanımı alır.",
      "27. Çok miktarda mikrop öldürücü ilaç kullanırım.",
      "28. Her gün bazı şeyleri tekrar tekrar kontrol etmek bana zaman kaybettirir.",
      "29. Geceleri giyeceklerimi katlayıp asmak uzun zamanımı alır.",
      "30. Dikkatle yaptığım bir işin bile tam doğru olup olmadığına emin olamam.",
      "31. Kendimi toparlayamadığım için günler, haftalar, hatta aylarca hiçbir şeye el sürmediğim olur.",
      "32. En büyük mücadelelerimi kendimle yaparım.",
      "33. Çoğu zaman büyük bir hata ya da kötülük yaptığım duygusuna kapılırım.",
      "34. Sık sık kendime birşeyleri dert edinirim.",
      "35. Önemsiz ufak şeylerde bile karar verip işe girişmeden önce durup düşünürüm.",
      "36. Reklamlardaki ampuller gibi önemsiz şeyleri sayma alışkanlığım vardır.",
      "37. Bazen önemsiz düşünceler aklıma takılır ve beni günlerce rahatsız eder."
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 1, label: "Doğru" },
        { value: 0, label: "Yanlış" }
      ]
    }))
  },

  // 7. YEME TUTUMU TESTİ (EAT-40) (Tamamı Eklendi - 40 Soru)
  'yeme-tutumu': {
    title: 'Yeme Tutumu Testi (EAT-40)',
    description: 'Bu anket sizin yeme alışkanlıklarınızla ilgilidir. Lütfen her bir soruyu dikkatlice okuyunuz ve size en uygun olan seçeneği işaretleyiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      if (score >= 30) return 'Yeme Bozukluğu Riski Yüksek';
      return 'Normal Yeme Tutumu';
    },
    questions: [
      "1. Başkaları ile birlikte yemek yemekten hoşlanırım.",
      "2. Başkaları için yemek pişiririm, fakat pişirdiğim yemeği yemem.",
      "3. Yemekten önce sıkıntılı olurum.",
      "4. Şişmanlamaktan ödüm kopar.",
      "5. Acıktığımda yemek yememeğe çalışırım.",
      "6. Aklım fikrim yemektedir.",
      "7. Yemek yemeyi durduramadığım zamanlar olur.",
      "8. Yiyeceğimi küçük küçük parçalara bölerim.",
      "9. Yediğim yiyeceğin kalorisini bilirim.",
      "10. Ekmek, patates, pirinç gibi yüksek kalorili yiyeceklerden kaçınırım.",
      "11. Yemeklerden sonra şişkinlik hissederim.",
      "12. Ailem fazla yememi bekler.",
      "13. Yemek yedikten sonra kusarım.",
      "14. Yemek yedikten sonra aşırı suçluluk duyarım.",
      "15. Tek düşüncem daha zayıf olmaktır.",
      "16. Aldığım kalorileri yakmak için yorulana dek egzersiz yaparım.",
      "17. Günde birkaç kere tartılırım.",
      "18. Vücudumu saran dar elbiselerden hoşlanırım.",
      "19. Et yemekten hoşlanırım.",
      "20. Sabahları erken uyanırım.",
      "21. Günlerce aynı yemeği yerim.",
      "22. Egzersiz yaptığımda harcadığım kalorileri hesaplarım.",
      "23. Adetlerim düzenlidir.",
      "24. Başkaları çok zayıf olduğumu düşünür.",
      "25. Şişmanlama (vücudumun yağ toplayacağı) düşüncesi zihnimi meşgul eder.",
      "26. Yemeklerimi yemek başkalarınınkinden daha uzun sürer.",
      "27. Lokantada yemek yemeyi severim.",
      "28. Müshil kullanırım.",
      "29. Şekerli yiyeceklerden kaçınırım.",
      "30. Diyet (perhiz) yemekleri yerim.",
      "31. Yaşamımı yiyeceğin kontrol ettiğini düşünürüm.",
      "32. Yiyecek konusunda kendimi denetleyebilirim.",
      "33. Yemek konusunda başkalarının bana baskı yaptığını hissederim.",
      "34. Yiyecekle ilgili düşünceler çok zamanımı alır.",
      "35. Kabızlıktan yakınırım.",
      "36. Tatlı yedikten sonra rahatsız olurum.",
      "37. Perhiz yaparım.",
      "38. Midemin boş olmasından hoşlanırım.",
      "39. Şekerli yağlı yiyecekleri denemekten hoşlanırım.",
      "40. Yemeklerden sonra içimden kusmak gelir."
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 3, label: "Daima" },
        { value: 2, label: "Çok Sık" },
        { value: 1, label: "Sık Sık" },
        { value: 0, label: "Bazen" },
        { value: 0, label: "Nadiren" },
        { value: 0, label: "Hiçbir Zaman" }
      ]
    }))
  },

  // 8. MMPI ÇOK YÖNLÜ KİŞİLİK ENVANTERİ (Dışarıdan Çekiliyor!)
  'mmpi': {
    title: 'MMPI Çok Yönlü Kişilik Envanteri',
    description: 'Aşağıdaki soruları okuyarak KENDİ DURUMUNUZA GÖRE "Doğru" ya da "Yanlış" olup olmadığına karar veriniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Bilgisayarlı Profil Analizi Gerektirir'; },
    questions: mmpiQuestions.map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 1, label: "Doğru" },
        { value: 0, label: "Yanlış" }
      ]
    }))
  },
  // 9. OTOMATİK DÜŞÜNCELER ÖLÇEĞİ (Tamamı - 30 Soru)
  'otomatik-dusunceler': {
    title: 'Otomatik Düşünceler Ölçeği',
    description: 'Aşağıda kişilerin zaman zaman aklına gelen bazı düşünceler sıralanmıştır. Lütfen her birini okuyarak, bu düşüncelerin SON BİR HAFTA içinde aklınızdan ne kadar sıklıkla geçtiğini belirtiniz[cite: 1152, 1153].',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      return 'Klinik Değerlendirme Gerektirir';
    },
    questions: [
      "1. Tüm dünya bana karşıymış gibi geliyor", "2. Hiç bir işe yaramıyorum", "3. Neden hiç başarılı olamıyorum",
      "4. Beni hiç kimse anlamıyor", "5. Başkalarını düş kırıklığına uğrattığım oldu", "6. Devam edebileceğimi sanmıyorum",
      "7. Keşke daha iyi bir insan olsaydım", "8. Öyle güçsüzüm ki...", "9. Hayatım istediğim gibi gitmiyor",
      "10. Kendimi düş kırıklığına uğrattım", "11. Artık hiçbir şeyin tadı kalmadı", "12. Artık dayanamayacağım",
      "13. Bir türlü harekete geçemiyorum", "14. Neyim var benim", "15. Keşke başka bir yerde olsaydım",
      "16. Hiçbir şeyin iki ucunu bir araya getiremiyorum", "17. Kendimden nefret ediyorum", "18. Değersiz bir insanım",
      "19. Keşke birden yok olabilseydim", "20. Ne zorum var benim", "21. Hayatta hep kaybetmeye mahkûmum",
      "22. Hayatım karmakarışık", "23. Başarısızım", "24. Hiç bir zaman başaramayacağım",
      "25. Kendimi çok çaresiz hissediyorum", "26. Bir şeylerin değişmesi gerek", "27. Bende mutlaka bir bozukluk olmalı",
      "28. Geleceğim kasvetli", "29. Hiç bir şey için uğraşmaya değmez", "30. Hiçbir şeyi bitiremiyorum"
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 1, label: "1. Hiç aklımdan geçmedi [cite: 1155]" },
        { value: 2, label: "2. Ender olarak aklımdan geçti [cite: 1158]" },
        { value: 3, label: "3. Arada sırada aklımdan geçti [cite: 1159]" },
        { value: 4, label: "4. Sık sık aklımdan geçti [cite: 1156]" },
        { value: 5, label: "5. Hep aklımdan geçti [cite: 1157]" }
      ]
    }))
  },
// 10. DİSSOSİYATİF YAŞANTILAR ÖLÇEĞİ (DES) - Slider Versiyonu
  'des': {
    title: 'Dissosiyatif Yaşantılar Ölçeği (DES)',
    description: 'Aşağıda anlatılan durumların sizde ne ölçüde olduğunu %0 ile %100 arasında kaydırarak değerlendiriniz.',
    scoringType: 'slider', // YENİ: Motor artık bunun bir kaydırma çubuğu olduğunu biliyor!
    sliderConfig: { min: 0, max: 100, step: 10 }, // %10'ar artacak
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      "1. Bazı insanlar, yolculuk yaparken yol boyunca ya da yolun bir bölümünde neler olduğunu hatırlamadıklarını birden farkederler.",
      "2. Bazı insanlar zaman zaman, birisini dinlerken, söylenenlerin bir kısmını ya da tamamını duymamış olduklarını birden farkederler.",
      "3. Bazı insanlar kimi zaman, kendilerini nasıl geldiklerini bilmedikleri bir yerde bulurlar.",
      "4. Bazı insanlar zaman zaman kendilerini, giydiklerini hatırlamadıkları elbiseler içinde bulurlar.",
      "5. Bazı insanlar zaman zaman eşyaları arasında, satın aldıklarını hatırlamadıkları yeni şeyler bulurlar.",
      "6. Bazı insanlar, zaman zaman, yanlarına gelerek başka bir isimle hitabeden ya da önceden tanıştıklarında ısrar eden, tanımadıkları kişilerle karşılaşırlar.",
      "7. Bazı insanlar, zaman zaman, kendilerinin yanıbaşında duruyor ya da kendilerini birşey yaparken seyrediyor ve sanki kendi kendilerine karşıdan bakıyormuş gibi bir his duyarlar.",
      "8. Bazı insanlara, arkadaşlarını ya da aile bireylerini, zaman zaman tanımadıklarının söylendiği olur.",
      "9. Bazı insanlar, yaşamlarındaki kimi önemli olayları (örneğin nikah ya da mezuniyet töreni) hiç hatırlamadıklarını farkederler.",
      "10. Bazı insanlar zaman zaman, yalan söylemediklerini bildikleri bir konuda, başkaları tarafından, yalan söylemiş olmakla suçlanırlar.",
      "11. Bazı insanlar kimi zaman, aynaya baktıklarında kendilerini tanıyamazlar.",
      "12. Bazı insanlar kimi zaman, diğer insanların, eşyaların ve çevrelerindeki dünyanın gerçek olmadığı hissini duyarlar.",
      "13. Bazı insanlar, kimi zaman vücutlarının kendilerine ait olmadığı hissini duyarlar.",
      "14. Bazı insanlar, zaman zaman geçmişteki bir olayı o kadar canlı hatırlarlar ki, sanki o olayı yeniden yaşıyor gibi olurlar.",
      "15. Bazı insanlar kimi zaman, olduğunu hatırladıkları şeylerin, gerçekte mi yoksa rüyada mı olduğundan emin olamazlar.",
      "16. Bazı insanlar zaman zaman, bildikleri bir yerde oldukları halde orayı yabancı bulur ve tanıyamazlar.",
      "17. Bazı insanlar, televizyon ya da fim seyrederken, kimi zaman kendilerini öyküye o kadar kaptırırlar ki çevrelerinde olan bitenin farkına varamazlar.",
      "18. Bazı insanlar kimi zaman kendilerini, kafalarında kurdukları bir fantazi ya da hayale o kadar kaptırırlar ki, sanki bunlar gerçekten başlarından geçiyormuş gibi hissederler.",
      "19. Bazı insanlar, ağrı hissini duymamayı zaman zaman başarabildiklerini farkederler.",
      "20. Bazı insanlar kimi zaman, boşluğa bakıp hiç bir şey düşünmeden ve zamanın geçtiğini anlamaksızın oturduklarını farkederler.",
      "21. Bazı insanlar, yalnız olduklarında, zaman zaman sesli olarak kendi kendilerine konuştuklarını farkederler.",
      "22. Bazı insanlar kimi zaman iki ayrı durumda o kadar değişik davrandıklarını görürler ki, kendilerini neredeyse iki farklı insanmış gibi hissettikleri olur.",
      "23. Bazı insanlar, normalde güçlük çektikleri bir şeyi (örneğin spor türleri, iş, sosyal ortamlar vb.) belirli durumlarda son derece kolay ve akıcı biçimde yapabildiklerini farkederler.",
      "24. Bazı insanlar, zaman zaman, bir şeyi yaptıklarını mı yoksa yapmayı sadece akılarından geçirmiş mi olduklarını (örneğin bir mektubu postaya attığını mı yoksa sadece atmayı düşündüğünü mü) hatırlayamazlar.",
      "25. Bazı insanlar kimi zaman, yaptıklarını hatırlamadıkları şeyleri yapmış olduklarını gösteren kanıtlar bulurlar.",
      "26. Bazı insanlar, zaman zaman eşyaları arasında, kendilerinin yapmış olması gereken, fakat yaptıklarını hatırlamadıkları yazılar, çizimler ve notlar bulurlar.",
      "27. Bazı insanlar, zaman zaman kafalarının içersinde, belli şeyleri yapmalarını isteyen ya da yaptıkları şeyler üzerine yorumda bulunan sesler duyarlar.",
      "28. Bazı insanlar, zaman zaman, dünyaya bir sis perdesi arkasından bakıyormuş gibi hissederler, öyle ki insanlar ve eşyalar çok uzakta ve belirsiz görünürler."
    ].map((text, idx) => ({
      id: idx + 1,
      text: text
    }))
  },

  // 11. PANİK BOZUKLUĞU ŞİDDET ÖLÇEĞİ (PBŞÖ) - 7 Soru
  'panik-bozuklugu': {
    title: 'Panik Bozukluğu Şiddet Ölçeği (PBŞÖ)',
    description: 'Lütfen son bir ayı göz önüne alarak, her başlık için durumunuza en uygun olan şiddet derecesini işaretleyiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      "1. PANİK ATAĞI SIKLIĞI (Sınırlı belirtili ataklar dahil)",
      "2. PANİK ATAKLARI SIRASINDAKİ ZORLANMA",
      "3. BEKLENTİ ANKSİYETESİNİN ŞİDDETİ (Paniğe ilişkin korku, endişe)",
      "4. AGORAFOBİK KORKU / KAÇINMA",
      "5. PANİK ATAĞI İLE İLİŞKİLİ DUYUMLARDAN KORKU / KAÇINMA",
      "6. ÇALIŞMA İŞLEVSELLİĞİNDE BOZULMA / AKSAMA",
      "7. TOPLUMSAL İŞLEVSELLİKTE BOZULMA / AKSAMA"
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 0, label: "0 - Hiç / Mevcut değil" },
        { value: 1, label: "1 - Ilımlı / Hafif" },
        { value: 2, label: "2 - Orta / Kontrol edilebilir" },
        { value: 3, label: "3 - Şiddetli / Büyük ölçüde aksama" },
        { value: 4, label: "4 - Aşırı / Yeti yitirici" }
      ]
    }))
  },

  // 12. KİŞİLİK İNANÇ ÖLÇEĞİ KISA FORM (PBQ-S1) - 65 Soru
  'pbq-kisa': {
    title: 'Kişilik İnanç Ölçeği Kısa Form-V.1',
    description: 'Lütfen aşağıdaki ifadeleri okuyunuz ve ÇOĞU ZAMAN nasıl hissettiğinize göre HER BİRİNE NE KADAR İNANDIĞINIZI belirtiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Detaylı Kişilik Örüntüsü Analizi Gerektirir'; },
    questions: [
      "1. Aşağılanma veya yetersizlikle karşılaşmak katlanılamaz bir şeydir.",
      "2. Ne pahasına olursa olsun rahatsızlık verici durumlardan kaçınmalıyım.",
      "3. Eğer insanlar dostça davranıyorlarsa beni kullanmaya ya da sömürmeye çalışıyor olabilirler.",
      "4. Bir yandan yetkili kişilerin hakimiyetine karşı direnmeli ama aynı zamanda takdir ve benimsemelerini sağlamalıyım.",
      "5. Rahatsızlık verici duygulara katlanamam.",
      "6. Kusurlar, eksikler ya da yanlışlar hoş görülemez.",
      "7. Diğer insanlar sıklıkla çok şey isterler.",
      "8. İlgi merkezi olmalıyım.",
      "9. Eğer bir sistemim olmazsa herşey darmadağın olur.",
      "10. Hak ettiğim saygının gösterilmemesi veya hakkım olanı alamamak katlanılmaz bir durumdur.",
      "11. Her şeyde kusursuz iş çıkarmak önemlidir.",
      "12. Diğer insanlarla birlikte bir şeyler yapmaktansa kendi başıma yapmaktan daha çok hoşlanırım",
      "13. Eğer dikkat etmezsem başkaları beni kullanmaya ya da yönlendirmeye çalışır.",
      "14. Diğer insanların gizli amaçları vardır.",
      "15. Olabilecek en kötü şey terk edilmektir.",
      "16. Diğer insanlar ne kadar özel biri olduğumu fark etmelidirler.",
      "17. Diğer insanlar bilerek beni aşağılıyorlar.",
      "18. Karar verirken diğer insanların yardımına ya da bana ne yapacağımı söylemelerine gereksinim duyarım.",
      "19. Ayrıntılar son derece önemlidir.",
      "20. İnsanlar çok fazla patronluk taslarlarsa onların isteklerini dikkate almamaya hakkım vardır.",
      "21. Yetkili kişiler sınırlarını bilmeyen, sürekli iş isteyen, müdaheleci ve denetleyicidirler.",
      "22. İstediğimi almanın yolu, insanları etkilemek ya da eğlendirmektir.",
      "23. Kârlı çıkabilmek için elimden gelen her şeyi yapmalıyım.",
      "24. Eğer insanlar benimle ilgili bir şeyler açığa çıkarırlarsa, bunu bana karşı kullanacaklardır.",
      "25. İnsan ilişkileri karışıktır ve özgürlüğe engeldir.",
      "26. Beni ancak benim gibi zeki insanlar anlayabilirler.",
      "27. Çok üstün biri olduğum için özel muamele ve ayrıcalıkları hak ediyorum.",
      "28. Benim için başkalarından bağımsız ve özgür olmak önemlidir.",
      "29. Çoğu durumda yalnız başıma kaldığımda kendimi daha iyi hissederim.",
      "30. Her zaman en yüksek standartlara ulaşmaya çalışmak gereklidir yoksa her şey darmadağın olur.",
      "31. Rahatsız edici duygular giderek artar ve kontrolden çıkar.",
      "32. Vahşi bir ortamda yaşıyoruz ve güçlü olan hayatta kalır.",
      "33. Başkalarının dikkatini çektiğim durumlardan kaçınmalı ve mümkün olduğunca göze çarpmamalıyım.",
      "34. Başkalarının bana olan ilgilerini sürdüremezsem benden hoşlanmazlar.",
      "35. Eğer bir şey istiyorsam onu elde etmek için ne gerekirse yapmalıyım.",
      "36. Diğer bir insana 'bağlanıp' kalmaktansa yalnız olmak daha iyidir.",
      "37. İnsanları eğlendirmedikçe ya da etkilemedikçe bir hiçim.",
      "38. Eğer ilk önce harekete geçip üstünlük kurmazsam karşımdaki bana üstünlük kurar.",
      "39. İnsanlarla ilişkilerimde herhangi bir gerginlik işareti bu ilişkinin kötüye gideceğini gösterir bu nedenle o ilişkiyi bitirmeliyim.",
      "40. Eğer en yüksek düzeyde iş yapmıyorsam başarısız olurum.",
      "41. Zaman sınırlarına uymak, istenenlere itaat etmek ve uyumlu olmak onuruma ve kendi yeterliliğime doğrudan bir darbedir.",
      "42. Genellikle bana haksız davranılıyor. Bu nedenle ne şekilde olursa olsun payımı almak hakkımdır.",
      "43. İnsanlar bana yakınlaşırlarsa benim 'gerçekten' ne olduğum ortaya çıkar ve benden uzaklaşırlar.",
      "44. Muhtaç ve zayıfım.",
      "45. Yalnız başıma bırakıldığımda çaresizim.",
      "46. Diğer insanlar benim ihtiyaçlarımı gidermelidir.",
      "47. İnsanların beklediği şekilde kurallara uyarsam bu benim davranış özgürlüğüme engel olacaktır.",
      "48. Eğer fırsat verirsem insanlar beni kullanırlar.",
      "49. Her zaman hazırlıklı olmalıyım.",
      "50. Özel hayatım insanlara yakın olmaktan çok daha fazla önemlidir.",
      "51. Kurallar keyfidir ve beni sıkar.",
      "52. İnsanların beni görmezden gelmeleri berbat bir durumdur.",
      "53. İnsanların ne düşündüğünü önemsemem.",
      "54. Mutlu olabilmek için diğer insanların dikkatini çekmeye ihtiyacım var.",
      "55. Eğer insanları eğlendirirsem benim güçsüzlüğümü farketmezler.",
      "56. İşimi yaparken ya da kötü bir durumla karşılaştığımda bana yardım etmesi için her zaman yanımda birilerinin olmasına gereksinim duyarım.",
      "57. Yaptığım bir işte herhangi bir hata ya da kusur felakete yol açabilir.",
      "58. Çok yetenekli olduğum için mesleğimde ilerlerken insanlar benim yolumdan çekilmelidir.",
      "59. Eğer başkalarını ben sıkıştırmazsam, onlar beni boyun eğmeye zorlar.",
      "60. Diğer insanlara uygulanan kurallara uymak zorunda değilim.",
      "61. Bir şeyi yapmanın en iyi yolu zor kullanmak ve kurnazlıktır.",
      "62. Her zaman birilerine ulaşabilecek durumda olmalıyım.",
      "63. Temelde yalnızım- kendimi daha güçlü bir kişiye bağlayamadığım müddetçe.",
      "64. Diğer insanlara güvenemem.",
      "65. Diğer insanlar kadar mücadele gücüm yok."
    ].map((text, idx) => ({
      id: idx + 1,
      text: text,
      options: [
        { value: 4, label: "4 - Tümüyle inanıyorum" },
        { value: 3, label: "3 - Çok fazla inanıyorum" },
        { value: 2, label: "2 - Orta derecede inanıyorum" },
        { value: 1, label: "1 - Biraz inanıyorum" },
        { value: 0, label: "0 - Hiç inanmıyorum" }
      ]
    }))
  },
  // 13. YALE-BROWN OBSESYON KOMPÜLSİYON ÖLÇEĞİ (Y-BOCS) - 19 Soru
  'yale-brown': {
    title: 'Yale-Brown Obsesyon Kompülsiyon Ölçeği',
    description: 'Lütfen obsesif düşünceleriniz ve kompülsif davranışlarınızla ilgili aşağıdaki maddeleri size en uygun olan puanla değerlendiriniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      ...[
        "1. OBSESİF DÜŞÜNCELERLE GEÇEN ZAMAN", "2. OBSESİF DÜŞÜNCELERİN YAŞAMI ETKİLEMESİ", "3. OBSESİF DÜŞÜNCELERLE BİRLİKTE OLAN RAHATSIZLIK HİSSİ",
        "4. OBSESİF DÜŞÜNCELERE DİRENÇ GÖSTERME", "5. OBSESİF DÜŞÜNCELER ÜZERİNDEKİ KONTROLUN DERECESİ", "6. KOMPULSİF DAVRANIŞLAR İÇİN HARCANAN SÜRE",
        "7. KOMPULSİF DAVRANIŞLARIN YAŞAMI ETKİLEMESİ", "8. KOMPULSİF DAVRANIŞLA BİRLİKTE OLAN RAHATSIZLIK HİSSİ", "9. KOMPULSİF HAREKETLERE DİRENÇ GÖSTERME",
        "10. KOMPULSİF DAVRANIŞLAR ÜZERİNDEKİ KONTROLUN DERECESİ", "11. HASTANIN OBSESYON VE KOMPULSİYONLARINA BAKIŞ AÇISI", "12. KAÇINMA",
        "13. KARARSIZLIĞIN DERECESİ", "14. AŞIRI SORUMLULUK DUYMA", "15. HAREKETLERDE BELİRGİN AZALMA VE RAHATSIZLIK HİSSİ", "16. PATALOJİK KUŞKU"
      ].map((text, idx) => ({
        id: idx + 1, text: text,
        options: [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }]
      })),
      { id: 17, text: "17. GENEL ŞİDDET", options: [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }] },
      { id: 18, text: "18. GENEL DÜZELME", options: [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }] },
      { id: 19, text: "19. GÜVENİLİRLİK", options: [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }] }
    ]
  },

  // 14. ROSENBERG BENLİK SAYGISI ENVANTERİ - 63 Soru (Çoktan Seçmeli Özel Yapı)
  'rosenberg': {
    title: 'Rosenberg Benlik Saygısı Envanteri',
    description: 'Lütfen aşağıdaki ifadeleri okuyarak, size en uygun gelen seçeneği işaretleyiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Detaylı Alt Ölçek Analizi Gerektirir'; },
    questions: [
      // Madde 1-10: Çok Doğru / Çok Yanlış (Standart 10'lu Rosenberg)
      ...[
        "1. Kendimi en az diğer insanlar kadar değerli buluyorum.", "2. Bazı olumlu özelliklerim olduğunu düşünüyorum.", "3. Genelde kendimi başarısız bir kişi olarak görme eğilimindeyim.",
        "4. Ben de diğer insanların birçoğunun yapabildiği kadar birşeyler yapabilirim.", "5. Kendimde gurur duyacak fazla birşey bulamıyorum.", "6. Kendime karşı olumlu bir tutum içindeyim.",
        "7. Genel olarak kendimden memnunum.", "8. Kendime karşı daha fazla saygı duyabilmeyi isterdim.", "9. Bazen kesinlikle kendimin bir işe yaramadığını düşünüyorum.", "10. Bazen kendimin hiç de yeterli bir insan olmadığımı düşünüyorum."
      ].map((text, idx) => ({
        id: idx + 1, text: text,
        options: [{ value: 3, label: "a. ÇOK DOĞRU" }, { value: 2, label: "b. DOĞRU" }, { value: 1, label: "c. YANLIŞ" }, { value: 0, label: "d. ÇOK YANLIŞ" }]
      })),
      { id: 11, text: "11. Kendiniz hakkındaki düşünceleriniz değişkenlik gösterir mi, yoksa her zaman aynı mıdır?", options: [{ value: 3, label: "a. ÇOK DEĞİŞİR" }, { value: 2, label: "b. ZAMAN ZAMAN DEĞİŞİR" }, { value: 1, label: "c. ÇOK AZ DEĞİŞİR" }, { value: 0, label: "d. HİÇ DEĞİŞMEZ" }] },
      { id: 12, text: "12. Hiç kendiniz hakkında bir gün bir görüşe, başka bir gün farklı bir görüşe sahip olduğunuzu farkettiğiniz olur mu?", options: [{ value: 3, label: "a. Evet, sık sık olur" }, { value: 2, label: "b. Evet, bazen olur" }, { value: 1, label: "c. Evet, nadiren olur" }, { value: 0, label: "d. Hayır, hiç olmaz" }] },
      
      // Doğru / Yanlış Soruları
      ...[
        "13. Kendim hakkındaki görüşlerimin çok çabuk değiştiğini farkettim.", "14. Kendim hakkında bazı günler olumlu bazı günlerse olumsuz düşüncelere sahip oluyorum.", "15. Şu günlerde kendim hakkındaki görüşlerimi hiç birşeyin değiştiremeyeceğini düşünüyorum.",
        "16. Başınıza gerçekten bir şey geldiğinde kimse sizin durumunuzla pek ilgilenmeyecektir.", "17. İnsan doğasında yardımlaşma gerçekten vardır.", "18. Dikkatli davranmazsanız insanlar sizi kullanacaklardır.",
        "22. Eleştiri ya da azarlama beni çok fazla incitir.", "25. Genelde oldukça mutlu bir kişi olduğumu düşünüyorum.", "27. Hayattan çok zevk alıyorum.", "28. Ben de mutlu gördüğüm diğer kişiler kadar mutlu olabilmeyi isterdim.",
        "30. Çoğu zaman başka bir şey yapmaktansa oturup hayal kurmayı tercih ediyorum.", "31. Bana hayalperest denilebilir.", "32. Zamanımın büyük bir kısmını hayal kurmakla geçiririm.",
        "45. Ulusal veya uluslararası sorunlar tartışıldığında genellikle kötü izlenim bırakacak bir şey söylemektense hiçbir şey söylememeyi tercih ederim.", "46. Toplumsal konularla ilgili tartışmalarda insanları kızdıracak bir şey söylemektense hiçbir şey söylememeyi tercih ederim.",
        "51. 5.-6. sınıflardayken karneniz iyi olduğunda anneniz çoğu zaman ilgilenmezdi.", "52. 5.-6. sınıflardayken karneniz iyi olduğunda babanız çoğu zaman ilgilenmezdi.", "53. 5.-6. sınıflardayken karneniz kötü olduğunda anneniz çoğu zaman ilgilenmezdi.", "54. 5.-6. sınıflardayken karneniz kötü olduğunda babanız çoğu zaman ilgilenmezdi."
      ].map((text, idx) => ({
        id: idx + 13, text: text,
        options: [{ value: 1, label: "a. DOĞRU" }, { value: 0, label: "b. YANLIŞ" }]
      })),

      // Çeşitli Şıklar (Gruplandırılmış)
      { id: 19, text: "19. Bazı kişiler, insanların büyük çoğunluğunun güvenilebilir olduğunu, bazıları ise insanlarla ilişkilerinde çok güvenilemeyeceğini söylerler. Siz bu konuda ne düşünüyorsunuz?", options: [{ value: 1, label: "a. İnsanların çoğuna güvenilebilir." }, { value: 0, label: "b. İnsanlarla ilişkilerde çok güvenilemez." }] },
      { id: 20, text: "20. İnsanlar daha çok başkalarına yardım etmeye mi, yoksa kendi çıkarlarını düşünmeye mi eğilimlidirler?", options: [{ value: 1, label: "a. Başkalarına yardım etmeye" }, { value: 0, label: "b. Kendi çıkarlarını düşünmeye" }] },
      { id: 21, text: "21. Eleştiriye karşı ne kadar hassassınızdır?", options: [{ value: 3, label: "a. Çok fazla hassas" }, { value: 2, label: "b. Oldukça hassas" }, { value: 1, label: "c. Az hassas" }, { value: 0, label: "d. Hassas değil" }] },
      { id: 23, text: "23. Yanlış yaptığınız bir şey için biri size güldüğünde veya suçladığında ne kadar rahatsız olursunuz?", options: [{ value: 2, label: "a. Çok fazla" }, { value: 1, label: "b. Oldukça" }, { value: 0, label: "c. Rahatsız olmam" }] },
      { id: 24, text: "24. Genelde ne kadar mutlusunuzdur?", options: [{ value: 4, label: "a. Çok mutlu" }, { value: 3, label: "b. Mutlu" }, { value: 2, label: "c. Pek mutlu değil" }, { value: 1, label: "d. Çok mutsuz" }] },
      { id: 26, text: "26. Genel olarak kendinizi neşeli bir ruh hali içinde mi, yoksa neşesiz bir ruh hali içinde mi hissedersiniz?", options: [{ value: 3, label: "a. Çok neşeli" }, { value: 2, label: "b. Oldukça neşeli" }, { value: 1, label: "c. Ne neşeli ne neşesiz" }, { value: 0, label: "d. Oldukça neşesiz" }] },
      
      // Sıklık Soruları
      ...[
        "29. Kendinizi kederli ve karamsar hissettiğiniz olur mu?", "33. Gelecekte nasıl bir insan olacağınız konusunda hayal kurar mısınız?",
        "34. Hiç uykuya dalma ya da uykunun sürekliliği açısından sorununuz oldu mu?", "35. Hiç ellerinizin sizi rahatsız edecek kadar titrediği olur mu?", "36. Hiç sizi rahatsız edecek kadar sinirlendiğiniz olur mu?",
        "37. Hiç sizi rahatsız edecek kadar çarpıntı hissettiğiniz olur mu?", "38. Hiç sizi rahatsız edecek kadar başınızın içinde basınç hissettiğiniz olur mu?", "39. Şu sıralarda hiç tırnak yiyor musunuz?",
        "40. Egzersiz veya çalışma zamanları dışında hiç sizi rahatsız edecek kadar nefes darlığı hissettiğiniz olur mu?", "41. Hiç sizi rahatsız edecek kadar ellerinizde terleme olur mu?", "42. Hiç rahatsız edici baş ağrıları çeker misiniz?", "43. Hiç rahatsız edici kabuslar görür müsünüz?"
      ].map((text, idx) => ({
        id: idx + 29, text: text,
        options: [{ value: 4, label: "a. Çok sık / Sık Sık" }, { value: 3, label: "b. Sık / Bazen" }, { value: 2, label: "c. Ara sıra / Nadiren" }, { value: 1, label: "d. Nadiren" }, { value: 0, label: "e. Hiçbir zaman" }]
      })),

      // Son Karma Sorular
      { id: 44, text: "44. Ulusal veya uluslar arası önemli bir konuda görüşünüzü belirttiğinizde birisi size gülerse ne hissedersiniz?", options: [{ value: 2, label: "a. Çok incinirim ve rahatsız olurum." }, { value: 1, label: "b. Biraz incinirim ve rahatsız olurum." }, { value: 0, label: "c. Beni pek fazla etkilemez." }] },
      { id: 47, text: "47. Uluslar arası konuları tartışır mısınız?", options: [{ value: 3, label: "a. Pek çok" }, { value: 2, label: "b. Oldukça" }, { value: 1, label: "c. Çok az" }, { value: 0, label: "d. Hiçbir zaman" }] },
      { id: 48, text: "48. Arkadaşlarınızla birlikte uluslar arası konuları tartıştığınız zaman tutumunuz nasıl olur?", options: [{ value: 0, label: "a. Sadece dinlerim" }, { value: 1, label: "b. Arada bir görüş bildiririm" }, { value: 2, label: "c. Konuşmaya eşit oranda katılırım" }, { value: 3, label: "d. Diğerlerini ikna etmeye çalışırım" }] },
      { id: 49, text: "49. Siz 10-11 yaşlarınızdayken anneniz arkadaşlarınızı tanır mıydı?", options: [{ value: 3, label: "a. Hepsini tanırdı" }, { value: 2, label: "b. Çoğunu tanırdı" }, { value: 1, label: "c. Bazılarını tanırdı" }, { value: 0, label: "d. Hemen hemen hiçbirini tanımazdı" }] },
      { id: 50, text: "50. Bu dönemde babanız arkadaşlarınızı tanır mıydı?", options: [{ value: 3, label: "a. Hepsini tanırdı" }, { value: 2, label: "b. Çoğunu tanırdı" }, { value: 1, label: "c. Bazılarını tanırdı" }, { value: 0, label: "d. Hemen hemen hiçbirini tanımazdı" }] },
      { id: 55, text: "55. Sizce diğer aile bireyleri sizin söylediğiniz şeylerle ne kadar ilgilenirler?", options: [{ value: 2, label: "a. Çok ilgilenirler" }, { value: 1, label: "b. Oldukça ilgilenirler" }, { value: 0, label: "c. İlgilenmezler" }] },
      { id: 56, text: "56. Büyümekte olduğunuz dönemde babanızın en çok tuttuğu çocuğu kimdi?", options: [{ value: 1, label: "a. Ben" }, { value: 0, label: "b. Diğer kardeşlerim" }, { value: 0, label: "f. Bildiğim kadarıyla çok tuttuğu birisi yoktu" }] },
      { id: 57, text: "57. Bu dönemde babanız arkadaşlarınızı tanır mıydı?", options: [{ value: 3, label: "a. Hepsini tanırdı" }, { value: 2, label: "b. Çoğunu tanırdı" }, { value: 1, label: "c. Bazılarını tanırdı" }, { value: 0, label: "d. Hiçbirini tanımazdı" }] },
      { id: 58, text: "58. Anne ve babanızın hangisi ile daha rahat konuşabiliyorsunuz?", options: [{ value: 1, label: "Babamla çok/biraz fazla" }, { value: 0, label: "Her ikisiyle eşit" }, { value: 2, label: "Annemle çok/biraz fazla" }] },
      { id: 59, text: "59. Anne ve babanızın hangisi sizi daha çok över?", options: [{ value: 1, label: "Babam" }, { value: 0, label: "Eşit" }, { value: 2, label: "Annem" }] },
      { id: 60, text: "60. Anne ve babanızın hangisi size daha çok şefkat gösterir?", options: [{ value: 1, label: "Babam" }, { value: 0, label: "Eşit" }, { value: 2, label: "Annem" }] },
      { id: 61, text: "61. Anne ve babanız anlaşamadıkları zaman siz genellikle hangisinden yana olursunuz?", options: [{ value: 1, label: "Babamdan yana" }, { value: 0, label: "Eşit" }, { value: 2, label: "Annemden yana" }] },
      { id: 62, text: "62. Yalnız bir insan olmaya eğilimli misinizdir?", options: [{ value: 1, label: "a. Evet" }, { value: 0, label: "b. Hayır" }] },
      { id: 63, text: "63. İnsanların çoğu sizin nasıl bir kişi olduğunuzu bilirler mi, yoksa çoğunun sizi gerçekten tanımadıklarını mı düşünürsünüz?", options: [{ value: 1, label: "a. Çoğu benim nasıl biri olduğumu bilir." }, { value: 0, label: "b. Çoğu gerçekten beni tanımaz." }] }
    ]
  },
  // YENİ: BEDEN DUYUMLARI ÖLÇEĞİ (Tamamı - 18 Soru)
  'beden-duyumlari': {
    title: 'Beden Duyumları Ölçeği',
    description: 'Aşağıda endişeli olduğunuzda veya korktuğunuzda ortaya çıkabilecek beden duyumlarının bir listesi bulunmaktadır. Lütfen bu hislerin sizi ne kadar korkuttuğunu belirtiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => { return 'Klinik Değerlendirme Gerektirir'; },
    questions: [
      { id: 1, text: "1. Çarpıntı", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 2, text: "2. Göğüste baskı hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 3, text: "3. Kol ve bacaklarda uyuşma", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 4, text: "4. Parmak uçlarında karıncalanma", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 5, text: "5. Vücudun diğer yerlerinde uyuşma", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 6, text: "6. Nefes darlığı", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 7, text: "7. Baş dönmesi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 8, text: "8. Görme bulanıklığı veya bozuk görme", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 9, text: "9. Bulantı", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 10, text: "10. Midede rahatsızlık hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 11, text: "11. Midede düğümlenme hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 12, text: "12. Boğazda yumruk hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 13, text: "13. Bacaklarda yalpalama ve tutmama", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 14, text: "14. Terleme", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 15, text: "15. Boğaz kuruluğu", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 16, text: "16. Kendinden geçme ve şaşkınlık hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 17, text: "17. Bedenden kısmen ayrılma hissi", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] },
      { id: 18, text: "18. Diğer (Lütfen belirtiniz)", options: [{ value: 1, label: "Hiç" }, { value: 2, label: "Hafif" }, { value: 3, label: "Orta" }, { value: 4, label: "Çok" }, { value: 5, label: "Aşırı" }] }
    ]
  },

  // YENİ: HAMILTON ANKSİYETE DEĞERLENDİRME ÖLÇEĞİ (Tamamı - 14 Soru)
  'hamilton-anksiyete': {
    title: 'Hamilton Anksiyete Değerlendirme Ölçeği (HARS)',
    description: 'Lütfen aşağıdaki her konu başlığı için belirtilerin şiddetini (0-4 arası) değerlendirin.',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      if (score >= 25) return 'Şiddetli Anksiyete';
      if (score >= 18) return 'Hafif-Orta Şiddette Anksiyete';
      return 'Normal Düzey';
    },
    questions: [
      { id: 1, text: "1. ANKSİYETELİ MİZAÇ", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 2, text: "2. GERİLİM", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 3, text: "3. KORKULAR", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 4, text: "4. UYKUSUZLUK", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 5, text: "5. ENTELLEKTÜEL (Kognitif)", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 6, text: "6. DEPRESİF MİZAÇ", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 7, text: "7. SOMATİK (Muskuler)", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 8, text: "8. SOMATİK (Duygusal)", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 9, text: "9. KARDİOVASKÜLER SEMPTOMLAR", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 10, text: "10. SOLUNUM SEMPTOMLARI", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 11, text: "11. GASTROİNTESTİNAL SEMPTOMLAR", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 12, text: "12. GENİTOÜRİNER SEMPTOMLAR", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 13, text: "13. OTONOMİK SEMPTOMLAR", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] },
      { id: 14, text: "14. GÖRÜŞME SIRASINDAKİ DAVRANIŞ", options: [{ value: 0, label: "Yok (0)" }, { value: 1, label: "Hafif (1)" }, { value: 2, label: "Orta (2)" }, { value: 3, label: "Şiddetli (3)" }, { value: 4, label: "Çok Şiddetli (4)" }] }
    ]
  },
  'hamilton-depresyon': {
    title: 'Hamilton Depresyon Değerlendirme Ölçeği',
    description: 'Lütfen her belirti için durumunuza en uygun şiddet puanını seçiniz.',
    scoringType: 'sum',
    calculateRisk: (score: number) => {
      if (score >= 24) return 'Çok Şiddetli Depresyon';
      if (score >= 17) return 'Orta Şiddette Depresyon';
      if (score >= 8) return 'Hafif Depresyon';
      return 'Normal / Semptom Yok';
    },
    questions: [
      { id: 1, text: "1. DEPRESİF (ÇÖKKÜN) RUH HALİ", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Orta" }, { value: 3, label: "Şiddetli" }, { value: 4, label: "Çok Şiddetli" }] },
      { id: 2, text: "2. ÇALIŞMA VE ETKİNLİKLER", options: [{ value: 0, label: "Güçlük yok" }, { value: 1, label: "Yetersizlik hissi" }, { value: 2, label: "İşe başlamada duraksama" }, { value: 3, label: "Etkinliklerde azalma" }, { value: 4, label: "Çalışamaz durumda" }] },
      { id: 3, text: "3. GENİTAL SEMPTOMLAR", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 4, text: "4. SOMATİK SEMPTOMLAR - GASTROİNTESTİNAL", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 5, text: "5. KİLO KAYBI", options: [{ value: 0, label: "Kilo kaybı yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Belirgin" }, { value: 3, label: "Şiddetli" }] },
      { id: 6, text: "6. UYKUSUZLUK (BAŞLARKEN)", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 7, text: "7. UYKUSUZLUK (ORTA)", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 8, text: "8. UYKUSUZLUK (GEÇ)", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 9, text: "9. SOMATİK BELİRTİLER (GENEL)", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Şiddetli" }] },
      { id: 10, text: "10. SUÇLULUK DUYGULARI", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Kendini kınama" }, { value: 2, label: "Suçluluk düşünceleri" }, { value: 3, label: "Hastalığı ceza olarak görme" }, { value: 4, label: "Hezeyanlı suçluluk" }] },
      { id: 11, text: "11. İNTİHAR", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Yaşamın boş olduğu hissi" }, { value: 2, label: "Ölmüş olmayı dileme" }, { value: 3, label: "İntihar düşünceleri" }, { value: 4, label: "İntihar girişimi" }] },
      { id: 12, text: "12. PSİŞİK KAYGI", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif gerginlik" }, { value: 2, label: "Endişeli tutum" }, { value: 3, label: "Yüz hatlarında korku" }, { value: 4, label: "Panik hali" }] },
      { id: 13, text: "13. SOMATİK KAYGI", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Hafif" }, { value: 2, label: "Orta" }, { value: 3, label: "Şiddetli" }, { value: 4, label: "Yeti yitirici" }] },
      { id: 14, text: "14. HİPOKONDRİ", options: [{ value: 0, label: "Yok" }, { value: 1, label: "Vücuda aşırı ilgi" }, { value: 2, label: "Sağlığa aşırı takılma" }, { value: 3, label: "Sık şikayet" }, { value: 4, label: "Hipokondriyak hezeyanlar" }] }
    ]
  },

};