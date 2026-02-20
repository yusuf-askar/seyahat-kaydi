import { initialForm, ulkeler } from "../Interfaces/SeyahatModel";

export default function Form({ dark, form, setForm, errors, setErrors, editId, setEditId, onSubmit, submitted }) {
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: "" });
  };

  const handleIptal = () => {
    setForm(initialForm);
    setEditId(null);
    setErrors({});
  };

  return (
    <div style={{ maxWidth: 860, margin: "36px auto 0", padding: "0 24px" }}>
      <div style={{
        background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
        backdropFilter: "blur(20px)",
        borderRadius: 24,
        border: `1.5px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.15)"}`,
        padding: "36px 40px",
        boxShadow: dark
          ? "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 20px 60px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}>

        {/* Düzenleme modu banner */}
        {editId !== null && (
          <div style={{
            background: "rgba(168,85,247,0.15)",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: 10,
            padding: "10px 16px",
            marginBottom: 24,
            fontSize: 14,
            color: "#c084fc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span>✏️ Düzenleme modu aktif</span>
            <button
              onClick={handleIptal}
              style={{ background: "none", border: "none", color: "#a855f7", cursor: "pointer", fontSize: 13 }}
            >
              İptal
            </button>
          </div>
        )}

        {/* Form alanları */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Ad */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              👤 Ad
            </label>
            <input
              className="field-input"
              placeholder="Adınız"
              value={form.ad}
              onChange={e => handleChange("ad", e.target.value)}
            />
            {errors.ad && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.ad}</div>}
          </div>

          {/* Soyad */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              👤 Soyad
            </label>
            <input
              className="field-input"
              placeholder="Soyadınız"
              value={form.soyad}
              onChange={e => handleChange("soyad", e.target.value)}
            />
            {errors.soyad && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.soyad}</div>}
          </div>

          {/* Ülke */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              🌍 Ülke
            </label>
            <select
              className="field-input"
              value={form.ulke}
              onChange={e => handleChange("ulke", e.target.value)}
            >
              <option value="">Ülke seçin...</option>
              {ulkeler.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            {errors.ulke && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.ulke}</div>}
          </div>

          {/* Şehir */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              🏙️ Şehir
            </label>
            <input
              className="field-input"
              placeholder="Şehir adı"
              value={form.sehir}
              onChange={e => handleChange("sehir", e.target.value)}
            />
            {errors.sehir && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.sehir}</div>}
          </div>

          {/* E-posta */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              📧 E-posta
            </label>
            <input
              className="field-input"
              placeholder="ornek@email.com"
              type="email"
              value={form.eposta}
              onChange={e => handleChange("eposta", e.target.value)}
            />
            {errors.eposta && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.eposta}</div>}
          </div>

          {/* Tarih */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.7, letterSpacing: 0.3 }}>
              📅 Seyahat Tarihi
            </label>
            <input
              className="field-input"
              type="date"
              value={form.tarih}
              onChange={e => handleChange("tarih", e.target.value)}
              style={{ colorScheme: dark ? "dark" : "light" }}
            />
            {errors.tarih && <div style={{ color: "#f472b6", fontSize: 12, marginTop: 4 }}>{errors.tarih}</div>}
          </div>
        </div>

        {/* Alt butonlar */}
        <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
          {submitted && (
            <div style={{ color: "#a78bfa", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              ✅ Kayıt başarıyla {editId !== null ? "güncellendi" : "eklendi"}!
            </div>
          )}
          {Object.keys(form).some(k => form[k]) && !editId && (
            <button
              onClick={handleIptal}
              style={{
                background: "none",
                border: `1.5px solid ${dark ? "rgba(139,92,246,0.3)" : "rgba(139,92,246,0.2)"}`,
                borderRadius: 12,
                padding: "12px 24px",
                color: dark ? "#a78bfa" : "#7c3aed",
                cursor: "pointer",
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              Temizle
            </button>
          )}
          <button className="btn-primary" onClick={onSubmit}>
            {editId !== null ? "💾 Güncelle" : "✈️ Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
}