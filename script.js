let bakiye = 1000;


const metin = `Bakiyeyi Görüntüle : 1
Para Yatır : 2
Para Çek : 3
Çıkış : 4

Lütfen yapmak istediğiniz işlemin numarasını giriniz.`;

let menu = Number(prompt(metin));

switch (menu) {
  case 1:
    screenText.innerHTML = `Güncel Bakiyenizi Görüntülemektesiniz.
        Güncel Bakiyeniz : ${bakiye} Türk Lirasıdır`;
    break;
  case 2:
    let paraYatir = Number(prompt("Yatırmak istediğiniz tutarı giriniz."));
    screenText.innerHTML = `Para Yatırma işleminiz başarı ile gerçekleştirilmiştir. Güncel Bakiyeniz ${(bakiye =
      bakiye + paraYatir)} Türk Lirasıdır.`;
    break;
  case 3:
    let paraCek = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
    screenText.innerHTML = `Para Çekme işleminiz başarı ile gerçekleştirilmiştir. Güncel Bakiyeniz ${(bakiye =
      bakiye - paraCek)} Türk Lirasıdır `;

    if (bakiye < paraCek) {
      screenText.innerHTML = `Bakiyeniz yetersizdir.`;
    }

    break;
  case 4:
    screenText.innerHTML = `Başarı ile çıkış yapılmıştır. Hoşçakalın!`;

    break;
  default:
    screenText.innerHTML = `Lütfen sayfayı yenileyiniz ve geçerli bir işlem numarası yazınız !`;
    break;
}
