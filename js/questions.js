const questions = [
  // ============================================================
  // TRAFİK VE ÇEVRE BİLGİSİ
  // ============================================================
  {
    id: 1, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Şehir içi yollarda azami hız sınırı kaç km/s'dir?",
    options: ["30 km/s", "50 km/s", "70 km/s", "90 km/s"],
    correct: 1,
    explanation: "Karayolları Trafik Kanunu'na göre şehir içi yollarda azami hız sınırı 50 km/s'dir."
  },
  {
    id: 2, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Şehirlerarası karayollarında otomobiller için azami hız sınırı kaç km/s'dir?",
    options: ["70 km/s", "80 km/s", "90 km/s", "100 km/s"],
    correct: 2,
    explanation: "Şehirlerarası karayollarında otomobiller için azami hız sınırı 90 km/s'dir."
  },
  {
    id: 3, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Otoyollarda otomobiller için azami hız sınırı kaç km/s'dir?",
    options: ["100 km/s", "110 km/s", "120 km/s", "130 km/s"],
    correct: 2,
    explanation: "Otoyollarda otomobiller için azami hız sınırı 120 km/s'dir."
  },
  {
    id: 4, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Sürücülerin kanda izin verilen maksimum alkol miktarı nedir?",
    options: ["0.25 promil", "0.50 promil", "0.75 promil", "1.00 promil"],
    correct: 1,
    explanation: "Türkiye'de sürücüler için kan alkol oranı sınırı 0.50 promildir. Profesyonel sürücüler için bu sınır 0.20 promildir."
  },
  {
    id: 5, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "'DUR' işaretinin şekli hangisidir?",
    options: ["Üçgen", "Yuvarlak", "Sekizgen (Octagon)", "Dikdörtgen"],
    correct: 2,
    explanation: "'DUR' işareti sekizgen (octagon) şeklindedir ve kırmızı zemin üzerine beyaz yazıyla belirtilir."
  },
  {
    id: 6, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Uyarı trafik işaretleri hangi şekle sahiptir?",
    options: ["Yuvarlak mavi", "Üçgen sarı-kırmızı", "Sekizgen kırmızı", "Dikdörtgen yeşil"],
    correct: 1,
    explanation: "Uyarı trafik işaretleri üçgen şeklinde olup sarı zemin üzerine siyah resim ve kırmızı bordürden oluşur."
  },
  {
    id: 7, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Hangi durum güvenli takip mesafesi için en doğru ifadedir?",
    options: ["En az 1 araç boyu", "En az 2 araç boyu", "En az 3 saniye", "En az 10 metre"],
    correct: 2,
    explanation: "Güvenli takip mesafesi için 3-4 saniyelik zaman mesafesi esas alınır. Araç hızına göre bu mesafe değişir."
  },
  {
    id: 8, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Emniyet kemeri takmak hangi durumda zorunludur?",
    options: ["Yalnızca şehirlerarası yollarda", "Yalnızca ön koltukta", "Araçtaki tüm koltuk için zorunludur", "Yalnızca otoyollarda"],
    correct: 2,
    explanation: "Emniyet kemeri, araçtaki tüm yolcular için her koşulda zorunludur."
  },
  {
    id: 9, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Sağdan önce gelme kuralına göre işaretsiz bir kavşakta hangi araç önce geçer?",
    options: ["Soldan gelen araç", "Sağdan gelen araç", "Karşıdan gelen araç", "Büyük araç"],
    correct: 1,
    explanation: "İşaretsiz kavşaklarda sağdan gelen araç önceliklidir ve ona yol verilmesi zorunludur."
  },
  {
    id: 10, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Araç sürerken el telefonu kullanmak yasak iken aşağıdakilerden hangisi serbesttir?",
    options: ["Telefonu elimizde tutarak konuşmak", "Kulaklık veya bluetooth ile konuşmak", "Telefonu dizüstümüzde tutmak", "Telefonla mesaj okumak"],
    correct: 1,
    explanation: "Telefonu elde tutarak konuşmak yasaktır. Hands-free (kulaklık/bluetooth) kullanımı serbest olmakla birlikte dikkat dağıtabilir."
  },
  {
    id: 11, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Park yasağı olan işaretin görsel özelliği hangisidir?",
    options: ["Mavi zemin - kırmızı çarpı işareti", "Sarı zemin - P harfi", "Kırmızı zemin - beyaz P", "Beyaz zemin - siyah P"],
    correct: 0,
    explanation: "Park yasağı işareti mavi zemin üzerinde kırmızı renkte P harfinin üzerine çizgi çekilmiş şeklindedir."
  },
  {
    id: 12, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Kavşaklara kaç metre kala park etmek yasaktır?",
    options: ["3 metre", "5 metre", "10 metre", "15 metre"],
    correct: 1,
    explanation: "Karayolları Trafik Kanunu'na göre kavşaklara 5 metre mesafeye kadar park etmek yasaktır."
  },
  {
    id: 13, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Ambulans, itfaiye ve polis araçlarına yol vermek hangi durumda zorunludur?",
    options: ["Yalnızca kırmızı ışıkta", "Siren ve ışıkları yanıyorsa her zaman", "Sadece bulvar ve caddelerde", "Yalnızca otoyollarda"],
    correct: 1,
    explanation: "Acil durum araçları siren ve ışıkları yanıyorken yol vermek zorunludur. Trafik ışığı kırmızı bile olsa geçiş üstünlükleri vardır."
  },
  {
    id: 14, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Araç lastiği seyir halindeyken patlasaydı ne yapılmalıdır?",
    options: ["Frene hızlıca sert basılmalıdır", "Direksiyonu sert çevirmeliyiz", "Sert frenlemeden kaçınarak yavaşça durulmalıdır", "Gaz artırılarak denge sağlanmalıdır"],
    correct: 2,
    explanation: "Lastik patlarsa ani fren ve ani manevra tehlikelidir. Direksiyonu sıkıca tutarak yavaşça kontrollü bir şekilde durulmalıdır."
  },
  {
    id: 15, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Araçla hangi taraftan sollama (geçme) yapılır?",
    options: ["Sağdan", "Soldan", "Her iki taraftan serbesttir", "Yolun genişliğine göre değişir"],
    correct: 1,
    explanation: "Karayollarında sollama daima soldan yapılır. Sağdan sollama yasaktır."
  },
  {
    id: 16, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Yağmurlu havada araç kullanırken ne yapılmalıdır?",
    options: ["Hız artırılmalıdır", "Hız düşürülmeli ve takip mesafesi artırılmalıdır", "Sadece farlar açılmalıdır", "Hiçbir değişiklik gerekmez"],
    correct: 1,
    explanation: "Yağmurlu havalarda yolun kayganlaşması nedeniyle hız düşürülmeli, takip mesafesi artırılmalı ve dikkat artırılmalıdır."
  },
  {
    id: 17, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "12 yaşından küçük çocuklar araçta nerede oturmalıdır?",
    options: ["Ön koltuğa otururlar", "Arka koltukta çocuk koltuğuyla oturmalıdır", "Her yerde oturabilirler", "Emniyet kemeri taksalar ön koltukta otururlar"],
    correct: 1,
    explanation: "12 yaşından küçük çocuklar ön koltukta oturamazlar, arka koltukta uygun çocuk koltuğuyla seyahat etmelidirler."
  },
  {
    id: 18, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Araç ile sollamanın yasak olduğu yerler hangisidir?",
    options: ["Yalnızca virajlarda", "Yalnızca köprülerde", "Virajlar, tepeler, kavşaklar ve hemzemin geçitler", "Sadece hemzemin geçitlerde"],
    correct: 2,
    explanation: "Sollama; virajlarda, tepe üstlerinde, kavşaklarda, hemzemin geçitlerde ve görüşü engelleyen yerlerde yasaktır."
  },
  {
    id: 19, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Uzun farların (depo far) kullanılabileceği yer neresidir?",
    options: ["Her yerde kullanılabilir", "Şehir içinde kullanılabilir", "Karşıdan araç gelmediği zaman şehir dışında", "Sis varken"],
    correct: 2,
    explanation: "Uzun farlar (depo far) ancak karşıdan araç gelmediğinde ve şehir dışında yeterli aydınlatma olmayan yollarda kullanılabilir."
  },
  {
    id: 20, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Kavşakta 'Yol Ver' işareti bulunan araç ne yapmalıdır?",
    options: ["Hızlanarak geçer", "Durur ve bekler", "Yavaşlar, gerekirse durarak önce yola geçen araçlara yol verir", "Korna çalarak uyarır"],
    correct: 2,
    explanation: "'Yol Ver' işareti olan araç yavaşlamalı, gerekirse durarak kavşaktaki diğer araçların geçmesine izin vermelidir."
  },
  {
    id: 21, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Dönel kavşakta (traffic circle) öncelik kime aittir?",
    options: ["Dışarıdan giren araçlara", "Kavşak içindeki araçlara", "Büyük araçlara", "Sağdan gelene"],
    correct: 1,
    explanation: "Dönel kavşaklarda öncelik her zaman dönel kavşak içindeki araçlara aittir. Dışarıdan girecek araçlar yol vermelidir."
  },
  {
    id: 22, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Demir yolu hemzemin geçitlerinde araç geçerken hangi kurala uyulmalıdır?",
    options: ["Hız düşürülerek geçilir", "Mutlaka durulur, sağa sola bakılır, güvenli olduğuna kanaat getirilirse geçilir", "Işık yoksa serbestçe geçilir", "Bariyer yoksa durmak gerekmez"],
    correct: 1,
    explanation: "Hemzemin geçitlerde mutlaka durulmalı, tren gelip gelmediği kontrol edilmeli ve güvenli olduğuna emin olunarak geçilmelidir."
  },
  {
    id: 23, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Gece araç kullanırken karşıdan araç gelince ne yapılmalıdır?",
    options: ["Uzun farlar yakılır", "Uzun fardan kısa fara geçilir", "Farlar tamamen kapatılır", "Hız artırılır"],
    correct: 1,
    explanation: "Gece karşıdan araç geldiğinde selektör yapılarak uzun fardan kısa fara geçilmelidir. Bu hem yasal bir zorunluluk hem de güvenlik gereğidir."
  },
  {
    id: 24, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Araç kullanırken alkollü içecek tüketmek hakkında ne doğrudur?",
    options: ["Az miktarda bira serbesttir", "Tamamen yasaktır", "Sadece bira içilebilir", "Şehir dışında serbesttir"],
    correct: 1,
    explanation: "Araç sürerken her türlü alkollü içecek tüketimi tamamen yasaktır. Ayrıca 0.50 promilin üzerinde alkol tespit edilmesi cezai yaptırım gerektirir."
  },
  {
    id: 25, category: "traffic", categoryName: "Trafik ve Çevre Bilgisi",
    question: "Sis lambası hangi durumlarda kullanılabilir?",
    options: ["Her zaman kullanılabilir", "Yalnızca sis, kar veya yoğun yağmurda görüş 50 m'nin altındayken", "Yalnızca şehir dışında", "Gece her zaman açık olmalıdır"],
    correct: 1,
    explanation: "Sis lambası yalnızca sis, yoğun yağmur veya kar nedeniyle görüş mesafesinin 50 metrenin altına düştüğü durumlarda kullanılabilir."
  },

  // ============================================================
  // MOTOR VE ARAÇ TEKNİĞİ
  // ============================================================
  {
    id: 26, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Motor yağı seviyesi ne zaman kontrol edilmelidir?",
    options: ["Araç çalışırken", "Motor soğukken ve araç düz zemindeyken", "Her zaman", "Sadece uzun yolculuklardan önce"],
    correct: 1,
    explanation: "Motor yağı seviyesi, motor soğukken ve araç düz bir zeminde park halindeyken kontrol edilmelidir. Motor çalışır halde yağ kontrol edilmez."
  },
  {
    id: 27, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Araç aküsü bittiğinde ne yapılabilir?",
    options: ["Akü kendiliğinden dolar", "Takviye kablo (jüpiter) ile başka bir araçtan akım alınabilir", "Sadece servise çekilir", "Marşa basmaya devam edilir"],
    correct: 1,
    explanation: "Akü bittiğinde takviye kablo (jüpiter) kullanılarak başka bir araçtan veya aküden akım alınabilir. Doğru sıra önemlidir: önce artı, sonra eksi bağlanır."
  },
  {
    id: 28, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Fren balataları aşındığında hangi belirti ortaya çıkar?",
    options: ["Motor sesinde değişim", "Fren pedalı yumuşar", "Fren yaparken metalik gıcırtı sesi duyulur", "Direksiyon titrer"],
    correct: 2,
    explanation: "Fren balataları aşındığında frenleme sırasında metalik gıcırtı/çizme sesi duyulur. Bu durumda balatalar derhal değiştirilmelidir."
  },
  {
    id: 29, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Lastik basıncı düşük olursa ne gibi sorunlar ortaya çıkar?",
    options: ["Yakıt tasarrufu sağlanır", "Lastiğin ömrü uzar", "Araç kontrolü güçleşir ve yakıt tüketimi artar", "Motor daha verimli çalışır"],
    correct: 2,
    explanation: "Düşük lastik basıncı araç kontrolünü zorlaştırır, lastik aşınmasını artırır, yakıt tüketimini yükseltir ve kaza riskini artırır."
  },
  {
    id: 30, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Gösterge panelinde motor ısı lambası yanarsa ne yapılmalıdır?",
    options: ["Yolculuğa devam edilir", "Motor kapatılır ve soğuması beklenir, sonra radyatör suyu kontrol edilir", "Radyatör kapağı hemen açılır", "Hız artırılarak motor soğutulur"],
    correct: 1,
    explanation: "Motor ısı lambası yandığında güvenli bir yerde durulur, motor kapatılır ve tamamen soğuması beklenir. Soğumadan kesinlikle radyatör kapağı açılmaz."
  },
  {
    id: 31, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "ABS (Antilock Braking System) ne işe yarar?",
    options: ["Klima sistemidir", "Fren yaparken tekerleklerin kilitlenmesini önler", "Gaz tasarrufu sağlar", "Yakıt enjeksiyonunu düzenler"],
    correct: 1,
    explanation: "ABS, ani fren sırasında tekerleklerin kilitlenmesini önleyerek araç kontrolünün korunmasını sağlar ve frenleme mesafesini kısaltır."
  },
  {
    id: 32, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Direksiyon sertleşirse bu neyin işareti olabilir?",
    options: ["Yakıt azalmış", "Güç direksiyon sıvısı azalmış veya sistem arızalı", "Fren balataları aşınmış", "Motor yağı azalmış"],
    correct: 1,
    explanation: "Direksiyonun sertleşmesi genellikle güç direksiyon sıvısının azalması veya güç direksiyon pompasının arızalanmasından kaynaklanır."
  },
  {
    id: 33, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Motor yağı değişimi ne zaman yapılmalıdır?",
    options: ["Araç su kaybedince", "Üretici kılavuzunda belirtilen km veya süre aralıklarında", "Yalnızca motor sesinde değişim olunca", "Yılda bir kez yeterlidir"],
    correct: 1,
    explanation: "Motor yağı değişimi üretici kılavuzunda belirtilen kilometre veya zaman aralıklarında yapılmalıdır. Genellikle 5.000-15.000 km arasında değişir."
  },
  {
    id: 34, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Araçtaki yanıp sönen 'CHECK ENGINE' veya motor uyarı lambası ne anlama gelir?",
    options: ["Yakıt dolumu gerekiyor", "Motor sisteminde bir sorun var, bakım gerekiyor", "Akü zayıf", "Lastik basıncı düşük"],
    correct: 1,
    explanation: "Motor arıza lambası (CHECK ENGINE) motor veya egzoz sisteminde bir sorun olduğunu gösterir. Bir servise götürülerek hata kodu okutulmalıdır."
  },
  {
    id: 35, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Tamamen durmadan vites değiştirmek neye zarar verir?",
    options: ["Yakıt tasarrufu sağlar", "Şanzımana zarar verebilir", "Motoru güçlü hale getirir", "Normal bir sürüş tekniğidir"],
    correct: 1,
    explanation: "Araç durmadan geri vites veya park vitesi takılması şanzımana ciddi zarar verir. Araç tamamen durulmadan vites değiştirilmemelidir."
  },
  {
    id: 36, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Araç lastiği değiştirilirken el freni nasıl olmalıdır?",
    options: ["Çekili olmamalıdır", "Çekili olmalıdır", "Önemli değildir", "Vitesin olmasına göre değişir"],
    correct: 1,
    explanation: "Lastik değiştirirken araç güvenli ve düz bir zeminde park edilmeli, el freni çekilmeli ve araç takozlanmalıdır."
  },
  {
    id: 37, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Soğuk havada araç ilk çalıştırıldığında ne yapılmalıdır?",
    options: ["Hemen gazı basıp hızla sürülmeli", "Birkaç dakika beklenerek motor ısınmalıdır", "Klima açılmalıdır", "Motor hemen kapatılıp tekrar açılmalıdır"],
    correct: 1,
    explanation: "Soğuk havada araç çalıştırıldıktan sonra motor yağının tüm parçalara yayılması için kısa süre beklenmeli, sonra nazikçe kullanılmalıdır."
  },
  {
    id: 38, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Gösterge panelinde yağ basınç lambası yanarsa ne yapılmalıdır?",
    options: ["Yolculuğa devam edilir", "Hemen güvenli bir yerde durulur, motor kapatılır ve yağ seviyesi kontrol edilir", "Yavaş gidilir", "Yağ eklenerek devam edilir"],
    correct: 1,
    explanation: "Yağ basınç lambası yandığında motor hemen kapatılmalıdır. Yağsız çalışan motor kısa sürede büyük hasara uğrar."
  },
  {
    id: 39, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "ESP (Elektronik Denge Programı) sistemi ne işe yarar?",
    options: ["Yakıt tasarrufu sağlar", "Kayma veya dönme sırasında aracın kontrolden çıkmasını önler", "Motor gücünü artırır", "Klima sistemini düzenler"],
    correct: 1,
    explanation: "ESP sistemi, araç kayarken veya dönerken tekerleklere ayrı ayrı fren uygulayarak aracın yoldan çıkmasını önler ve kontrolü sağlar."
  },
  {
    id: 40, category: "engine", categoryName: "Motor ve Araç Tekniği",
    question: "Araç yakıt tüketimini azaltmak için hangisi doğrudur?",
    options: ["Lastik basıncını düşürmek", "Klima sürekli açık tutmak", "Uygun viteste sabit hızda sürmek", "Sık sık hızlanıp yavaşlamak"],
    correct: 2,
    explanation: "Uygun viteste, sabit ve ekonomik hızda sürüş yakıt tüketimini önemli ölçüde azaltır. Ani hızlanma ve frenleme yakıtı boşa harcar."
  },

  // ============================================================
  // İLK YARDIM
  // ============================================================
  {
    id: 41, category: "firstaid", categoryName: "İlk Yardım",
    question: "Trafik kazasında omurga yaralanması şüphesi olan birini nasıl hareket ettirmelisiniz?",
    options: ["Hızlıca kaldırarak güvenli yere taşımalısınız", "Kesinlikle eğitimli sağlık personeli gelmeden hareket ettirmemelisiniz", "Kollarından tutarak çekmelisiniz", "Sırtından tutarak kaldırmalısınız"],
    correct: 1,
    explanation: "Omurga yaralanması şüphesinde kişiyi hareket ettirmek felce yol açabilir. Kesinlikle eğitimli sağlık personeli gelene kadar hareket ettirilmemelidir."
  },
  {
    id: 42, category: "firstaid", categoryName: "İlk Yardım",
    question: "Yaralı birinin kanaması nasıl durdurulur?",
    options: ["Soğuk su uygulanır", "Alkol dökürlür", "Temiz bir bez veya sargıyla baskı uygulanır", "Yara açık bırakılır"],
    correct: 2,
    explanation: "Kanama kontrolünde yara üzerine temiz bir bez koyularak sıkıca baskı uygulanır. Kanamanın durması için baskıya devam edilmelidir."
  },
  {
    id: 43, category: "firstaid", categoryName: "İlk Yardım",
    question: "Türkiye'de acil yardım telefon numarası hangisidir?",
    options: ["110", "112", "155", "156"],
    correct: 1,
    explanation: "112, Türkiye'deki tek acil yardım numarasıdır. Ambulans, polis ve itfaiye çağrıları bu hat üzerinden karşılanır."
  },
  {
    id: 44, category: "firstaid", categoryName: "İlk Yardım",
    question: "Bayılan birine ilk yardımda önce ne yapılmalıdır?",
    options: ["Su içirilir", "Bilinci kontrol edilir ve 112 aranır", "Hemen suni solunum verilir", "Ağzına şeker konur"],
    correct: 1,
    explanation: "Bilinç kaybında önce güvenlik sağlanır, kişinin bilinci ve solunumu kontrol edilir, ardından 112 aranır. Aceleyle yanlış müdahale zarar verebilir."
  },
  {
    id: 45, category: "firstaid", categoryName: "İlk Yardım",
    question: "Doğru CPR (Kalp-Akciğer Canlandırma) baskı ritmi nedir?",
    options: ["Dakikada 40-60 baskı", "Dakikada 100-120 baskı", "Dakikada 60-80 baskı", "Dakikada 150 baskı"],
    correct: 1,
    explanation: "CPR'da göğüs baskısı dakikada 100-120 kez yapılmalıdır. Baskı derinliği yetişkinlerde 5-6 cm olmalıdır."
  },
  {
    id: 46, category: "firstaid", categoryName: "İlk Yardım",
    question: "Yanık yarasına ilk yardımda ne uygulanmalıdır?",
    options: ["Diş macunu", "Yağ veya tereyağı", "En az 20 dakika bol soğuk (akarsıcak değil) su", "Doğrudan buz"],
    correct: 2,
    explanation: "Yanıklarda en az 20 dakika bol soğuk (ama buz değil) su altında soğutulmalıdır. Diş macunu, yağ veya buz uygulamak yanığı kötüleştirir."
  },
  {
    id: 47, category: "firstaid", categoryName: "İlk Yardım",
    question: "Kırık şüphesi olan bir kol veya bacağa ne yapılmalıdır?",
    options: ["Hemen hareket ettirilir", "Atel (splint) ile sabitlenir ve hareket ettirilmez", "Ovulur ve masaj yapılır", "Sıcak su uygulanır"],
    correct: 1,
    explanation: "Kırık şüphesinde eklem hareket ettirilmemeli, atel ile sabitlenmeli ve yardım beklenmelidir. Yanlış hareket kırığı kötüleştirebilir."
  },
  {
    id: 48, category: "firstaid", categoryName: "İlk Yardım",
    question: "Kaza yerinde yaralıya yaklaşmadan önce ilk yapılması gereken nedir?",
    options: ["Yaralının yaşını sormak", "Olay yerinin güvenli olup olmadığını kontrol etmek", "Kazanın sebebini araştırmak", "Fotoğraf çekmek"],
    correct: 1,
    explanation: "Kaza yerine yaklaşmadan önce olay yerinin güvenli olup olmadığı kontrol edilmelidir. Güvenli olmayan bir ortamda yardım yapanın da zarar görmesi riski vardır."
  },
  {
    id: 49, category: "firstaid", categoryName: "İlk Yardım",
    question: "Solunum yolu tıkanan (boğulan) birine ne yapılmalıdır?",
    options: ["Su içirilir", "Sırtına vurulur veya Heimlich manevrasıyla yardım edilir", "Yatırılır", "Beklenilir"],
    correct: 1,
    explanation: "Solunum yolu tıkanan kişiye sırtına kuvvetli darbeler vurulabilir veya Heimlich manevrası uygulanabilir. Hemen 112 de aranmalıdır."
  },
  {
    id: 50, category: "firstaid", categoryName: "İlk Yardım",
    question: "Bilinç kaybı olmayan yaralıya ne yapılmalıdır?",
    options: ["Hemen hareket ettirilir", "Olay yerinden uzaklaştırılır", "Sakin tutulur, 112 aranır ve profesyonel yardım beklenir", "Yiyecek-içecek verilir"],
    correct: 2,
    explanation: "Bilinç kaybı olmayan yaralı sakin tutulmalı, hareket ettirilmemeli, 112 aranmalı ve profesyonel yardım beklenmelidir."
  },
  {
    id: 51, category: "firstaid", categoryName: "İlk Yardım",
    question: "Kaza yapan ve şoktaki birine ne yapılmalıdır?",
    options: ["Ayağa kaldırılır", "Sıcak tutulur, yatırılır ve bacakları hafif yükseltilir", "Soğuk su verilir", "Yalnız bırakılır"],
    correct: 1,
    explanation: "Şok durumundaki kişi yatırılmalı, bacakları yaklaşık 30 cm yükseltilmeli ve üzerine battaniye örtülerek sıcak tutulmalıdır."
  },
  {
    id: 52, category: "firstaid", categoryName: "İlk Yardım",
    question: "Trafik kazasında yanan araçta mahsur kalan biri için ne yapılmalıdır?",
    options: ["Aracı itmeye çalışılır", "Kapıyı kırmaya çalışılır", "112 aranır, uzmanlar beklenir ve güvenlik mesafesi korunur", "Kendi kendine söndürmeye çalışılır"],
    correct: 2,
    explanation: "Yanan araçta müdahale son derece tehlikelidir. Hemen 112 aranmalı, uzmanlar beklenmelidir. Araçtan güvenli mesafede durulmalıdır."
  },
  {
    id: 53, category: "firstaid", categoryName: "İlk Yardım",
    question: "Burun kanamasında yapılması gereken nedir?",
    options: ["Baş öne eğilir ve burun sıkılır", "Baş geriye doğru eğilir", "Boyun sıkılır", "Su içirilir"],
    correct: 0,
    explanation: "Burun kanamasında baş hafifçe öne eğilmeli ve burun delikleri 10 dakika süreyle sıkılmalıdır. Başı geriye eğmek kanın yutulmasına neden olur."
  },
  {
    id: 54, category: "firstaid", categoryName: "İlk Yardım",
    question: "Hipotermi (hipotermi/donma) durumundaki birine ne yapılmalıdır?",
    options: ["Hızla ısıtılır (sıcak su veya ateş)", "Yavaşça ısıtılır, kuru ve sıcak bir ortama alınır", "Egzersiz yaptırılır", "Soğuk su içirilir"],
    correct: 1,
    explanation: "Hipotermi durumunda kişi kuru ve sıcak bir ortama alınır, ıslak kıyafetler çıkarılır ve yavaşça ısıtılır. Ani ısıtma kalp problemlerine yol açabilir."
  },
  {
    id: 55, category: "firstaid", categoryName: "İlk Yardım",
    question: "CPR yaparken göğüse basma ve suni solunum oranı nasıl olmalıdır?",
    options: ["10 baskı, 2 nefes", "30 baskı, 2 nefes", "15 baskı, 1 nefes", "20 baskı, 4 nefes"],
    correct: 1,
    explanation: "Modern CPR protokolüne göre oran 30 göğüs baskısı ve 2 suni nefestir. Bu döngü yardım gelene kadar tekrarlanır."
  },

  // ============================================================
  // TRAFİK ADABI
  // ============================================================
  {
    id: 56, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Arkadan çok yakın mesafeden takip eden bir araç varken ne yapmalısınız?",
    options: ["Ani fren yapmalısınız", "Hızınızı artırmalısınız", "Sağa çekip yol vermeli veya hızınızı yavaşça azaltmalısınız", "Araçları dikkate almamalısınız"],
    correct: 2,
    explanation: "Yakından takip edilen durumlarda güvenlik için sağa çekip yol vermek veya hızı yavaşça azaltmak doğru davranıştır."
  },
  {
    id: 57, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Kavşaklara yaklaşırken nasıl davranılmalıdır?",
    options: ["Hız artırılmalı ve hızlı geçilmeli", "Hız kesmeli, sağa-sola bakmalı ve dikkatli ilerlenmelidir", "Korna çalınmalıdır", "Tüm kavşaklarda durulmalıdır"],
    correct: 1,
    explanation: "Kavşaklara yaklaşırken hız düşürülmeli, trafik kontrol edilmeli ve gerekirse durulmalıdır. Kavşaklar kaza riskinin en yüksek olduğu yerlerdir."
  },
  {
    id: 58, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Araç kullanırken aşırı yorgunluk hissedilirse ne yapılmalıdır?",
    options: ["Müzik sesini açmalısınız", "Pencereleri açarak devam etmelisiniz", "Güvenli bir yerde mola verilmelidir", "Hız artırılarak çabuk bitirilmelidir"],
    correct: 2,
    explanation: "Yorgunluk refleks süresini uzatır ve kaza riskini ciddi biçimde artırır. Mola vererek dinlenmek zorunludur."
  },
  {
    id: 59, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Şerit değiştirmeden önce ne yapılmalıdır?",
    options: ["Hız artırılır", "Sadece dikiz aynasına bakılır", "Sinyal verilir, aynalar kontrol edilir ve kör nokta kontrol edilir", "Korna çalınır"],
    correct: 2,
    explanation: "Şerit değişiminde önce sinyal verilmeli, dikiz ve yan aynalar kontrol edilmeli, ardından kör nokta kontrol edilerek geçiş yapılmalıdır."
  },
  {
    id: 60, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Yayaya yol vermek ne zaman zorunludur?",
    options: ["Yalnızca yaya geçidinde", "Yalnızca ışıklı geçitlerde", "Yayalar yoldaysa her zaman ve her yerde", "Yalnızca yaya geçidine bastılarsa"],
    correct: 2,
    explanation: "Yayalara her koşulda ve her yerde öncelik tanınmalıdır. Yaya geçitlerinde araçların mutlaka durması zorunludur."
  },
  {
    id: 61, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Okul servisi durup 'DUR' işareti açtığında ne yapılmalıdır?",
    options: ["Normal hızda devam edilir", "Karşı şeritten geçilirse yavaşlanır", "Her iki yönden gelen araçlar durmalıdır", "Sadece aynı yönden gelenler durur"],
    correct: 2,
    explanation: "Okul servisi 'DUR' işareti açtığında her iki yönden gelen araçlar durmalıdır. Çocukların güvenli geçişi sağlanana kadar beklenir."
  },
  {
    id: 62, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Uzun yol yolculuklarında güvenlik için en doğru davranış hangisidir?",
    options: ["Mola vermeden gitmeye devam etmek", "Her 2 saatte bir mola vermek", "Yalnızca gece yola çıkmak", "Hız artırarak çabuk bitirmek"],
    correct: 1,
    explanation: "Uzun yolculuklarda her 2 saatte bir mola verilmesi önerilir. Bu hem yorgunluğu azaltır hem de kaza riskini düşürür."
  },
  {
    id: 63, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Direksiyon başında uyku getirici ilaç kullanmak hakkında ne doğrudur?",
    options: ["Az miktarda güvenlidir", "Uyku getirici ilaçlar kullanılarak araç sürmek çok tehlikelidir ve yasaktır", "Kahve içerek etkisi giderilebilir", "Kısa mesafelerde sorun olmaz"],
    correct: 1,
    explanation: "Uyku getirici, baş döndürücü veya dikkat azaltan ilaçlar kullanırken araç sürmek çok tehlikelidir. İlaç kullanmadan önce doktor veya eczane bilgisi alınmalıdır."
  },
  {
    id: 64, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Diğer sürücülere karşı nasıl bir tutum sergilenmelidir?",
    options: ["Yarışmacı ve rekabetçi", "Anlayışlı, sabırlı ve saygılı", "Agresif korna ve el hareketleriyle tepkisel", "Her zaman önce gitme hakkı kendinde"],
    correct: 1,
    explanation: "Trafikte sabırlı, anlayışlı ve saygılı olmak hem kaza riskini azaltır hem de trafik akışını düzenler. Agresif sürüş başlı başına tehlikeli bir davranıştır."
  },
  {
    id: 65, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Kavşakta dönerken sinyal kullanmak zorunlu mudur?",
    options: ["Hayır, gerekli değildir", "Sadece şehir içinde zorunludur", "Evet, her zaman dönmeden önce sinyal verilmelidir", "Sadece başka araç varsa"],
    correct: 2,
    explanation: "Dönüşlerde sinyal vermek her durumda zorunludur. Sinyal diğer sürücüleri ve yayaları uyararak kazaları önler."
  },
  {
    id: 66, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Gece araç kullanırken dikkat edilmesi gereken en önemli husus nedir?",
    options: ["Gündüz gibi aynı hızda devam edilir", "Görüş mesafesi kısaldığından hız düşürülmeli ve dikkat artırılmalıdır", "Yalnızca uzun farlar kullanılmalıdır", "Pencere kapatılmalıdır"],
    correct: 1,
    explanation: "Gece görüş mesafesi azalır. Bu nedenle hız düşürülmeli, dikkat artırılmalı ve dur-kalk mesafesi göz önünde bulundurulmalıdır."
  },
  {
    id: 67, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Kaza tanığı olduğunuzda ne yapmalısınız?",
    options: ["Hız kesmeden geçmeli ve kendi yolunuza devam etmelisiniz", "112'yi arayarak yardım çağırmalısınız", "Kendiniz müdahale etmek zorundasınız", "Yalnızca fotoğraf çekmelisiniz"],
    correct: 1,
    explanation: "Trafik kazasında hem insani hem yasal açıdan 112'yi arayarak yardım çağırmak zorunludur. Gerektiğinde ilk yardım yapılabilir."
  },
  {
    id: 68, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Çocuk okul bölgelerinde araç kullanırken ne yapılmalıdır?",
    options: ["Standart hız limitiyle devam edilir", "Hız düşürülür ve çocuklara karşı son derece dikkatli olunur", "Çocuklar kenarda yürümek zorundadır", "Korna çalarak çocuklar uyarılır"],
    correct: 1,
    explanation: "Okul bölgelerinde hız önemli ölçüde düşürülmeli ve çocukların ani hareketlerine karşı her an hazırlıklı olunmalıdır."
  },
  {
    id: 69, category: "etiquette", categoryName: "Trafik Adabı",
    question: "Araçta yüksek sesli müzik çalarken hangisi doğrudur?",
    options: ["İstediğiniz kadar yüksek çalabilirsiniz", "Dışarıdaki acil araç seslerini ve uyarıları duyamayacak kadar yüksek olmamalıdır", "Sadece arka yolcular rahatsız edilmemelidir", "Müzik sesi trafik güvenliğini etkilemez"],
    correct: 1,
    explanation: "Araçta müzik o kadar yüksek çalınmamalıdır ki dışarıdaki trafik sesleri, ambulans sireni veya diğer uyarılar duyulamasın."
  },
  {
    id: 70, category: "etiquette", categoryName: "Trafik Adabı",
    question: "İki araç aynı anda dar bir köprüye ulaşırsa ne olmalıdır?",
    options: ["İkisi de birden geçmeye çalışır", "Daha büyük araç önce geçer", "Köprüye önce ulaşan araç geçer, diğeri bekler", "Köprüden geri gidilerek yol verilir"],
    correct: 2,
    explanation: "Dar köprülerde köprüye önce ulaşan araç geçiş önceliğine sahiptir. Karşıdan gelen araç bekler."
  }
];
