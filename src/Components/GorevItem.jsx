function GorevItem({ gorev, onDuzenle, onSil, onDurumDegistir }) {
  return (
    <div className={`list-group-item gorev-satiri ${gorev.tamamlandi ? 'tamamlanan' : ''}`}>
      <div className="d-flex justify-content-between align-items-start gap-3">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={gorev.tamamlandi}
                onChange={() => onDurumDegistir(gorev.id)}
              />
              <label className="form-check-label gorev-baslik ms-1">
                {gorev.baslik}
              </label>
            </div>
            <span
              className={`durum-etiketi ${gorev.tamamlandi ? 'durum-tamam' : 'durum-bekliyor'}`}
            >
              {gorev.tamamlandi ? 'Tamam' : 'Bekliyor'}
            </span>
          </div>
          {gorev.aciklama && (
            <p className="gorev-aciklama">{gorev.aciklama}</p>
          )}
          <small className="gorev-tarih">{gorev.tarih}</small>
        </div>
        <div className="gorev-butonlar d-flex gap-1 flex-shrink-0">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => onDuzenle(gorev.id)}
          >
            Düzenle
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onSil(gorev.id)}
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  )
}

export default GorevItem
