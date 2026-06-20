import { useState, useEffect } from 'react'
import GorevForm from '../Components/GorevForm'
import GorevListesi from '../Components/GorevListesi'
import { yeniGorev } from '../Interfaces/Gorev'

const STORAGE_KEY = 'gorevler'

function AnaSayfa() {
  const [gorevler, setGorevler] = useState(() => {
    const kayit = localStorage.getItem(STORAGE_KEY)
    return kayit ? JSON.parse(kayit) : []
  })
  const [duzenlenenId, setDuzenlenenId] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gorevler))
  }, [gorevler])

  const handleKaydet = (baslik, aciklama) => {
    if (duzenlenenId) {
      setGorevler(
        gorevler.map((g) =>
          g.id === duzenlenenId ? { ...g, baslik, aciklama } : g
        )
      )
      setDuzenlenenId(null)
    } else {
      setGorevler([yeniGorev(baslik, aciklama), ...gorevler])
    }
  }

  const handleDuzenle = (id) => {
    setDuzenlenenId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSil = (id) => {
    if (window.confirm('Bu görevi silmek istediğine emin misin?')) {
      setGorevler(gorevler.filter((g) => g.id !== id))
      if (duzenlenenId === id) setDuzenlenenId(null)
    }
  }

  const handleDurumDegistir = (id) => {
    setGorevler(
      gorevler.map((g) =>
        g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g
      )
    )
  }

  const duzenlenenGorev = gorevler.find((g) => g.id === duzenlenenId)
  const tamamlananSayisi = gorevler.filter((g) => g.tamamlandi).length
  const bekleyenSayisi = gorevler.length - tamamlananSayisi

  return (
    <div className="app-wrapper">
      <header className="page-header">
        <h1>Görevlerim</h1>
        <p>Günlük işlerini buradan takip et</p>
      </header>

      {gorevler.length > 0 && (
        <div className="istatistikler">
          <div className="istatistik-kutu">
            <span>{gorevler.length}</span>
            <small>Toplam</small>
          </div>
          <div className="istatistik-kutu">
            <span>{bekleyenSayisi}</span>
            <small>Bekleyen</small>
          </div>
          <div className="istatistik-kutu">
            <span>{tamamlananSayisi}</span>
            <small>Tamamlanan</small>
          </div>
        </div>
      )}

      <GorevForm
        onKaydet={handleKaydet}
        duzenlenenGorev={duzenlenenGorev}
        onIptal={() => setDuzenlenenId(null)}
      />

      <GorevListesi
        gorevler={gorevler}
        onDuzenle={handleDuzenle}
        onSil={handleSil}
        onDurumDegistir={handleDurumDegistir}
      />
    </div>
  )
}

export default AnaSayfa
