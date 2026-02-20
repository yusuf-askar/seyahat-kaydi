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
      <div style={{ textAlign: "center", padding: "60px 24px", opacity: 0.4 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🗺️</div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>Henüz kayıt yok</div>
        <div style={{ fontSize: 14, marginTop: 6 }}>İlk seyahatini yukarıdan ekle</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "60px auto 0", padding: "0 24px 60px" }}>

      {/* Başlık + Arama */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 28,
            fontWeight: 800,
            margin: 0,
          }}>
            Kayıtlar
          </h2>
          <p style={{ margin: "4px 0 0", opacity: 0.5, fontSize: 14 }}>
            {kayitlar.length} seyahat kaydedildi
          </p>
        </div>
        <input
          className="field-input"
          placeholder="🔍  Kayıtlarda ara..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 260 }}
        />
      </div>

      {/* İstatistik Kartları */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
        {[
          { label: "Toplam Kayıt", value: kayitlar.length, icon: "📋" },
          { label: "Ülke Sayısı", value: new Set(kayitlar.map(k => k.ulke)).size, icon: "🌍" },
          { label: "Şehir Sayısı", value: new Set(kayitlar.map(k => k.sehir)).size, icon: "🏙️" },
        ].map(({ label, value, icon }) => (
          <div key={label} style={{
            background: dark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.06)",
            border: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.12)"}`,
            borderRadius: 16,
            padding: "20px 24px",
            backdropFilter: "blur(10px)",
          }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#a855f7" }}>{value}</div>
            <div style={{ fontSize: 13, opacity: 0.6, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Tablo */}
      <div style={{
        background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(20px)",
        borderRadius: 20,
        border: `1.5px solid ${dark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.12)"}`,
        overflow: "hidden",
        boxShadow: dark ? "0 10px 40px rgba(0,0,0,0.3)" : "0 10px 40px rgba(139,92,246,0.08)",
      }}>

        {/* Tablo Başlığı */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr 1fr 100px",
          padding: "14px 24px",
          background: dark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.08)",
          borderBottom: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.12)"}`,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.8,
          textTransform: "uppercase",
          opacity: 0.7,
          gap: 8,
        }}>
          <div>Ad</div>
          <div>Soyad</div>
          <div>Ülke</div>
          <div>Şehir</div>
          <div>E-posta</div>
          <div>Tarih</div>
          <div style={{ textAlign: "center" }}>İşlem</div>
        </div>

        {/* Boş arama sonucu */}
        {filtered.length === 0 && (
          <div style={{ padding: "40px", textAlign: "center", opacity: 0.4 }}>
            Arama sonucu bulunamadı
          </div>
        )}

        {/* Satırlar */}
        {filtered.map((k, i) => (
          <div
            key={k.id}
            className="card-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr 1fr 100px",
              padding: "16px 24px",
              borderBottom: i < filtered.length - 1
                ? `1px solid ${dark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.06)"}`
                : "none",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 500 }}>{k.ad}</div>
            <div style={{ fontSize: 15 }}>{k.soyad}</div>
            <div>
              <span style={{
                background: dark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.1)",
                border: `1px solid ${dark ? "rgba(139,92,246,0.25)" : "rgba(139,92,246,0.2)"}`,
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: 13,
                color: dark ? "#c4b5fd" : "#7c3aed",
              }}>{k.ulke}</span>
            </div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>{k.sehir}</div>
            <div style={{ fontSize: 13, opacity: 0.65, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {k.eposta}
            </div>
            <div style={{ fontSize: 13, opacity: 0.6 }}>{k.tarih}</div>

            {/* Düzenle / Sil */}
            <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
              {deleteConfirm === k.id ? (
                <div style={{ display: "flex", gap: 4 }}>
                  <button
                    onClick={() => { onDelete(k.id); setDeleteConfirm(null); }}
                    style={{ background: "#dc2626", border: "none", borderRadius: 6, padding: "4px 8px", color: "white", cursor: "pointer", fontSize: 12 }}
                  >Sil</button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    style={{ background: "transparent", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 6, padding: "4px 8px", color: dark ? "#a78bfa" : "#7c3aed", cursor: "pointer", fontSize: 12 }}
                  >İptal</button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => onEdit(k)}
                    title="Düzenle"
                    style={{
                      background: dark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.1)",
                      border: `1px solid ${dark ? "rgba(139,92,246,0.25)" : "rgba(139,92,246,0.2)"}`,
                      borderRadius: 8,
                      width: 32, height: 32,
                      cursor: "pointer",
                      fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >✏️</button>
                  <button
                    onClick={() => setDeleteConfirm(k.id)}
                    title="Sil"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      borderRadius: 8,
                      width: 32, height: 32,
                      cursor: "pointer",
                      fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}
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