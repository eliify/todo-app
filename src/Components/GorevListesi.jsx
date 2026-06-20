import GorevItem from './GorevItem'

function GorevListesi({ gorevler, onDuzenle, onSil, onDurumDegistir }) {
  if (gorevler.length === 0) {
    return (
      <div className="bos-liste">
        <div className="bos-liste-icon">📋</div>
        <p>Henüz görev yok. Yukarıdan ilk görevini ekleyebilirsin.</p>
      </div>
    )
  }

  const tamamlanan = gorevler.filter((g) => g.tamamlandi).length

  return (
    <div className="card liste-kart">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Görev Listesi</span>
        <span className="text-muted fw-normal small">
          {tamamlanan}/{gorevler.length} tamamlandı
        </span>
      </div>
      <div className="list-group list-group-flush">
        {gorevler.map((gorev) => (
          <GorevItem
            key={gorev.id}
            gorev={gorev}
            onDuzenle={onDuzenle}
            onSil={onSil}
            onDurumDegistir={onDurumDegistir}
          />
        ))}
      </div>
    </div>
  )
}

export default GorevListesi
