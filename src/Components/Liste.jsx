import { useState } from "react";

export default function Liste({ dark, kayitlar, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filtered = kayitlar.filter(k =>
    `${k.ad} ${k.soyad} ${k.ulke} ${k.sehir} ${k.eposta}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (kayitlar.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 mt-16 pb-20 text-center">
        <div className="text-6xl mb-4">🗺️</div>
        <p className="text-purple-300/40 text-lg font-semibold">Henüz kayıt yok</p>
        <p className="text-purple-300/30 text-sm mt-1">İlk seyahatini yukarıdan ekle</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-16 pb-20">

      {/* Başlık + Arama */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-7">
        <div>
          <h2 className="text-3xl font-extrabold text-white font-display tracking-tight">Kayıtlar</h2>
          <p className="text-purple-300/50 text-sm mt-1">{kayitlar.length} seyahat kaydedildi</p>
        </div>
        <input
          className="w-64 px-4 py-2.5 rounded-xl border border-violet-500/30 bg-white/5 text-purple-100 placeholder-purple-400/40 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition-all backdrop-blur-sm"
          placeholder="🔍 Kayıtlarda ara..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* İstatistik kartları */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Toplam Kayıt", value: kayitlar.length, icon: "📋" },
          { label: "Ülke Sayısı", value: new Set(kayitlar.map(k => k.ulke)).size, icon: "🌍" },
          { label: "Şehir Sayısı", value: new Set(kayitlar.map(k => k.sehir)).size, icon: "🏙️" },
        ].map(({ label, value, icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.07] backdrop-blur-sm px-6 py-5 hover:border-violet-400/40 transition-all duration-200"
          >
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-3xl font-extrabold text-violet-400 font-display">{value}</div>
            <div className="text-xs text-purple-300/50 mt-1 font-medium">{label}</div>
          </div>
        ))}
      </div>

      {/* Tablo */}
      <div className="rounded-2xl border border-violet-500/20 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/30">

        {/* Tablo başlığı */}
        <div className="grid gap-2 px-6 py-3.5 bg-violet-500/10 border-b border-violet-500/15 text-[11px] font-bold uppercase tracking-widest text-purple-300/60"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1.6fr 1fr 90px" }}>
          <div>Ad</div>
          <div>Soyad</div>
          <div>Ülke</div>
          <div>Şehir</div>
          <div>E-posta</div>
          <div>Tarih</div>
          <div className="text-center">İşlem</div>
        </div>

        {/* Boş sonuç */}
        {filtered.length === 0 && (
          <div className="py-12 text-center text-purple-300/30 text-sm">
            Arama sonucu bulunamadı
          </div>
        )}

        {/* Satırlar */}
        {filtered.map((k, i) => (
          <div
            key={k.id}
            className={`grid gap-2 px-6 py-4 items-center hover:bg-violet-500/[0.04] transition-all duration-150 ${
              i < filtered.length - 1 ? "border-b border-violet-500/10" : ""
            }`}
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1.6fr 1fr 90px" }}
          >
            <div className="text-sm font-semibold text-purple-100">{k.ad}</div>
            <div className="text-sm text-purple-200/80">{k.soyad}</div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium bg-violet-500/15 border border-violet-500/25 text-violet-300">
                {k.ulke}
              </span>
            </div>
            <div className="text-sm text-purple-200/70">{k.sehir}</div>
            <div className="text-xs text-purple-300/50 truncate">{k.eposta}</div>
            <div className="text-xs text-purple-300/50">{k.tarih}</div>

            {/* İşlem butonları */}
            <div className="flex gap-1.5 justify-center">
              {deleteConfirm === k.id ? (
                <div className="flex gap-1">
                  <button
                    onClick={() => { onDelete(k.id); setDeleteConfirm(null); }}
                    className="px-2.5 py-1 rounded-lg bg-red-500 hover:bg-red-400 text-white text-xs font-bold transition-colors"
                  >Sil</button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="px-2.5 py-1 rounded-lg border border-violet-500/30 text-violet-300 text-xs font-semibold hover:bg-violet-500/10 transition-colors"
                  >İptal</button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => onEdit(k)}
                    title="Düzenle"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-violet-500/15 border border-violet-500/25 hover:bg-violet-500/25 hover:border-violet-400/50 transition-all duration-150"
                  >✏️</button>
                  <button
                    onClick={() => setDeleteConfirm(k.id)}
                    title="Sil"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-400/40 transition-all duration-150"
                  >🗑️</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
