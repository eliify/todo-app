// Gorev veri yapisi
export function yeniGorev(baslik, aciklama) {
  return {
    id: Date.now(),
    baslik: baslik,
    aciklama: aciklama,
    tamamlandi: false,
    tarih: new Date().toLocaleDateString('tr-TR')
  }
}
