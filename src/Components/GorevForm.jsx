import { useState, useEffect } from 'react'

function GorevForm({ onKaydet, duzenlenenGorev, onIptal }) {
  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')

  useEffect(() => {
    if (duzenlenenGorev) {
      setBaslik(duzenlenenGorev.baslik)
      setAciklama(duzenlenenGorev.aciklama)
    } else {
      setBaslik('')
      setAciklama('')
    }
  }, [duzenlenenGorev])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (baslik.trim() === '') return

    onKaydet(baslik.trim(), aciklama.trim())
    setBaslik('')
    setAciklama('')
  }

  return (
    <div className="card form-kart">
      <div className="card-body p-4">
        <h5 className="card-title mb-3">
          {duzenlenenGorev ? 'Görevi Düzenle' : 'Yeni Görev Ekle'}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-medium">Başlık</label>
            <input
              type="text"
              className="form-control"
              value={baslik}
              onChange={(e) => setBaslik(e.target.value)}
              placeholder="Örn: Ödevi bitir"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-medium">Açıklama</label>
            <textarea
              className="form-control"
              rows="2"
              value={aciklama}
              onChange={(e) => setAciklama(e.target.value)}
              placeholder="İsteğe bağlı detay..."
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-ana text-white">
              {duzenlenenGorev ? 'Güncelle' : 'Ekle'}
            </button>
            {duzenlenenGorev && (
              <button type="button" className="btn btn-light border" onClick={onIptal}>
                İptal
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default GorevForm
