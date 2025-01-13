/* Aşağıda global olarak tanımlanmış değişkenler bulunmaktadır, bunları değiştirmeyin. Açıklamaları takip ederek görevleri tamamlayın. */
var cumleler = [
  ["Annem", "ekmek", "almak", "için", "gitti."],
  ["Babam", "her", "zaman", "çok", "sevdi."],
  ["Annemin", "bugün", "2'de", "doğum", "günü."],
  ["Olanları", "unutup", "bir", "daha", "dönemem."],
  ["Her", "zaman", "içinde", "yarası", "var."],
  ["O", "zaman", "senin", "bu", "halindim."],
  ["Artık", "içimden", "bir", "şey", "gelmiyor."],
  ["Kader", "bizi", "her", "zaman", "ayırdı."],
  ["Hiç", "bir", "zaman", "yazılanı", "silemedim."],
  ["İçimden", "gel", "dedim", "ama", "gelmedin."],
  ["Kader", "o", "defteri", "tekrar", "açamaz."],
  ["Şarkılar", "seni", "bana", "hatırlatan", "gerçekti."],
  ["Bu", "gece", "çok", "uykum", "vardı."],
  ["Neden", "böyle", "yaptığına", "anlam", "veremedim."],
  ["Benim", "boyum", "ondan", "bayağı", "kısaydı."],
  ["Senin", "gibi", "birini", "sevdim."],
  ["Kader", "seni", "yeniden", "yazamıyorum."],
  ["Neden", "bu", "kadar", "acı?"],
  ["Ben", "böyle", "olmasını", "istemedim."],
  ["Sonumu", "ve", "önümü", "bilemiyorum."],
  ["Sana", "gel", "bile", "diyemiyorum."],
  ["Onu", "çok", "seviyor."],
  ["Olan", "oldu", "artık."],
  ["Basım", "çok", "ağrıyor."],
  ["Neden", "böyle", "olduk?"],
  ["Nereden", "nereye", "gelmiştik."],
  ["Düşünmekten,", "kendimden", "yoruldum."],
  ["Böyle", "yaptı."],
  ["Suçlu", "değilsin."],
  ["Neden", "yaptın?"],
  ["Sana", "değer."],
  ["Acım", "içimde."],
  ["Annen", "hazırdı."],
  ["Bıktım."],
  ["İstedim."],
  ["Yaptım."],
  ["Nedendi?"],
  ["Yoruldum."],
];

var sebzeler = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
var meyveler = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🥥",
];

var emojiler = {
  ":)": "🙂",
  ":(": "😔",
  ":d": "😁",
  ":p": "😛",
  ":o": "😱",
  "<3": "❤️",
};

/* ÖRNEK GÖREV:
	cumleKur fonksiyonuna aşağıdakileri uygulayın:
		1. Fonksiyon argüman olarak birbirinden farklı 5 tane string değişkeni parametre olarak alacak
		2. 5 parametrenin birincisi öntanımsız olacak, diğer 4 string öntanımlı olacak ve "" (empty string) değerini alacaktır.
		
      (💡 İPUCU: Ön tanımlı özelliği fonksiyonun gerekli parametresi gönderilmeden de çağırılabilmesini mümkün kılmaktadır.
      ÖRNEK PARAMETRELERİ ÖN TANIMLI FONKSİYON: 
        function foo(degisken=false){
          return degisken;
        }
      Yukarıdaki fonksiyonu foo("deneme") olarak çağırabiliriz, bu fonksiyon "deneme" stringini döndürecektir. Aynı fonksiyonu 
      foo(); şeklinde de çağırabiliriz. Bu durumda parametre olarak bir şey göndermediğimiz için fonksiyon içindeki degisken 
      değişkenine false değeri atanacaktır. Bu durumda foo(); fonksiyonunu çalıştırdığımız false döndürür.)

		3. Alınan 5 string uc uca eklenerek bir stringe dönüştürülecektir.
		4. Fonksiyon, oluşturulan stringi döndürecektir. 
	*/

// ÖRNEĞİN ÇÖZÜMÜ:
function cumleKur(
  birinci,
  ikinci = "",
  ucuncu = "",
  dorduncu = "",
  besinci = ""
) {
  return birinci + ikinci + ucuncu + dorduncu + besinci;
}

/* (Oto test yok) cumleKur fonksiyonuna yalnızca 1 parametre göndererek "Hello World!" stringini elde edin, 
sonucu konsolde gözlemleyin */

/* (Oto test yok) cumleKur fonksiyonuna yalnızca 2 parametre göndererek "Hello World!" stringini elde edin, 
sonucu konsolde gözlemleyin */

/* (Oto test var) cumleKur fonksiyonuna 5 parametre göndererek "Ben iyi bir yazılımcı olacağım!" stringini 
elde edin, sonucu `bircumle` değişkenine atayın ve konsolde gözlemleyin */
var bircumle;
bircumle = cumleKur("Ben ", "iyi ", "bir ", "yazılımcı ", "olacağım!");
console.log(bircumle);

//		Sayfanın en üstünde global olarak tanımlanmış `cumleler` adında bir dizi bulunmaktadır. Bu dizinin
// içinde en çok 5 en az 1 adet string bulunan diziler bulunmaktadır.Aşağıdaki görevlerde aksi
// belirtilmedikçe bu dizi kullanılacaktır.

/* 	GÖREV 1:
		cumlelereDonustur fonksiyonuna aşağıdaki yönergeleri uygulayın.
			1. `cumleler` adındaki dizi fonksiyonun BİRİNCİ parametresi olarak alınacak.
			2. Kelime aralarındaki ayraç(seperator) olarak kullanılmak üzere bir string değişkeni fonksiyonun 
      İKİNCİ parametresi olarak alınacak. Ayraç parametresine "," değerini ön tanımlı yapmanız beklenmektedir.
			3. Dizinin içindeki her dizi elemanı 1 cümle oluşturacak şekilde uc uca eklenecek, kelimelerin 
      aralarına 2. parametrede girilen ayraç yerleştirilecek;
				NOT: cumlelereDonustur(cumleler, " ") fonksiyonu çağırıldığında şu dizinin oluşturacağı cümle: 
        ["Annem","ekmek","almak","için","gitti."] => "Annem ekmek almak için gitti." şeklinde olmalıdır. 
				💡 İPUCU: Bu çalışmada cümleleri kolay oluşturmak için .map ve .join metodunu bir arada kullanmanız 
        gerekmektedir. 
			4. Oluşturulan her cümle yeni bir dizi oluşturulup o dizinin içine aktarılacak. 
			5. Oluşturulan yeni dizi döndürülecek.
	*/

const ayrac = " ";
function cumlelereDonustur(cumleler, ayrac) {
  const yeniCumleler = cumleler.map((cumle) => cumle.join(ayrac));
  return yeniCumleler;
}

/* GÖREV 2:
		paragrafOlustur fonksiyonuna aşağıdakileri uygulayın.
			1. cumleler dizisi fonksiyonun birinci parametresi olarak alınacak
			2. cumleKur fonksiyonu geriçağırım(callback) için fonksiyonun ikinci parametresi olarak alınacak
			3. cumlelereDonustur fonksiyonu geriçağırım(callback) için fonksiyonun üçüncü parametresi olarak alınacak
			4. Bir dizi oluşturulacak ve cumlelereDonustur fonksiyonu cumleler ve " " ayracıyla çağırılarak bu
         diziye aktarılacak
			5. Oluşturulan bu dizinin tek sayılı anahtarlarını(index) [1,3,5,7,9] kullanarak ilk 5 elemanı geriçağırım 
         olarak çağırılan cumleKur dizisinin parametreleri olarak aktarılarak çağırılacak ÖRNEK: 
         callback(dizi[1],dizi[2],dizi[3],dizi[5],dizi[7])
			6. Oluşturulan paragraf döndürülecek
	*/

function paragrafOlustur(cumleler, cumleKur, cumlelereDonustur, ayrac = " ") {
  var dizi = cumlelereDonustur(cumleler, ayrac);
  var paragraf = cumleKur(dizi[1], dizi[3], dizi[5], dizi[7], dizi[9]);
  return paragraf;
}
/* 	GÖREV 3:
		Yukarıda isimleri sebzeler ve meyveler olan 2 dizi bulunmaktadır. Bu dizileri kullanarak aşağıdaki görevleri tamamlayın.
			3a. meyveler dizisinin ilk ve son elemanlarını diziden çıkartın. (.pop ve .shift metodlarını kullanın)
 */
//3a çözümü
meyveler.shift();
meyveler.pop();

/* 			3b.  Bir tavşan ve bir kirpi arkadaşlar sebzeler dizimizin peşine düştü. Tavşan => 🐇 , Kirpi=> 🦔 , 
Tavşanla kirpi sebzeleri ele geçirmek için bir plan kurdular. Tavşan diziye önden saldıracak, kirpi ise 
arkalarından dolaşacak. Varsayalım ki arkadaşların planları başarılı oldu. Tavşanı dizinin ilk elemanına 🐇, 
Kirpiyi dizinin son elemanına ekleyin 🦔
 */
//3b çözümü
sebzeler.unshift("🐇");
sebzeler.push("🦔");

/* 			3c. manav isminde bir dizi oluşturun.`meyveler` dizisi ilk elemanlara, `sebzeler` dizisi son 
elemanlara denk gelecek şekilde, iki diziyi birleştirip sonucu manav dizisine aktarın. (.concat metodu)
 */
//3c çözümü
/* kodlar buraya */

var manav = meyveler.concat(sebzeler);

/* 	GÖREV 4:
		Yeni kurulmuş bir mesajlaşma startup firması atılan mesajları emojilerle zenginleştirmek istiyor. 
    Bunun için emojiler adında bir nesne tanımlamışlar. Kullanıcının gönderdiği mesaj stringi içinde 
    emojiler nesnesinin anahtarı(index) bulunuyorsa, bu işareti otomatik olarak anahtara ait değerde 
    tanımlanmış emoji ile değiştirecek bir fonksiyon geliştirmek istiyorlar. ÖRNEK: Mesaj içinde ":)" 
    sembolü bulunursa mesajı alan kişi bu sembolü "🙂" olarak görecek. Burdan yola çıkarak 
    emojileriDonustur fonksiyonuna aşağıdakileri uygulayın.
			1. Atılan mesaj stringi fonksiyonun birinci parametresi olarak alınacak
			2. emojiler nesnesi fonksiyonun ikinci parametresi olarak alınacak
			3. mesaj stringi emoji nesnesinde tanımlı olan tüm sembolleri istenilen değere dönüştürecek 
        ( .replaceAll metodu kullanılacak)
				NOT: burada dikkat edilmesi gereken husus şudur; harfli sembolleri kullanıcı küçük harf ve 
        büyük harf olarak girebilir. yani hem :d hem de :D sembolleri 😁'a dönüşmelidir. bunun için 
        (.toUpperCase ve .toLowerCase metotlarıı kullanabilirsiniz.)
			4. elde edilen string döndürülecek
 */

function emojileriDonustur(mesaj, emojiler) {
  for (var sembol in emojiler) {
    var buyukHarfliSembol = sembol.toUpperCase();
    var kucukHarfliSembol = sembol.toLowerCase();
    mesaj = mesaj.replaceAll(buyukHarfliSembol, emojiler[sembol]);
    mesaj = mesaj.replaceAll(kucukHarfliSembol, emojiler[sembol]);
  }
  return mesaj;
}

var mesaj = "Merhaba! Bugün çok mutluyum :) :D <3";
var donusturulmusMesaj = emojileriDonustur(mesaj, emojiler);
//console.log(donusturulmusMesaj);

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  cumleler,
  cumleKur,
  bircumle,
  cumlelereDonustur,
  paragrafOlustur,
  sebzeler,
  meyveler,
  manav,
  emojiler,
  emojileriDonustur,
};
