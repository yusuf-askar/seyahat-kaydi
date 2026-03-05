import { initialForm, ulkeler } from "../Interfaces/SeyahatModel";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-violet-500/30 bg-white/5 text-purple-100 placeholder-purple-400/40 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 backdrop-blur-sm";

const labelClass =
  "block text-xs font-bold uppercase tracking-widest text-purple-300/70 mb-2";

export default function Form({
  dark, form, setForm, errors, setErrors,
  editId, setEditId, onSubmit, submitted,
}) {
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
    <div className="max-w-3xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-violet-500/20 bg-white/[0.03] backdrop-blur-xl p-8 shadow-2xl shadow-black/40">

        {/* Düzenleme modu */}
        {editId !== null && (
          <div className="flex justify-between items-center mb-6 px-4 py-3 rounded-xl border border-violet-400/30 bg-violet-500/10 text-purple-300 text-sm">
            <span>✏️ Düzenleme modu aktif</span>
            <button
              onClick={handleIptal}
              className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
            >
              İptal
            </button>
          </div>
        )}

        {/* Form grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Ad */}
          <div>
            <label className={labelClass}>👤 Ad</label>
            <input
              className={inputClass}
              placeholder="Adınız"
              value={form.ad}
              onChange={e => handleChange("ad", e.target.value)}
            />
            {errors.ad && <p className="text-pink-400 text-xs mt-1">{errors.ad}</p>}
          </div>

          {/* Soyad */}
          <div>
            <label className={labelClass}>👤 Soyad</label>
            <input
              className={inputClass}
              placeholder="Soyadınız"
              value={form.soyad}
              onChange={e => handleChange("soyad", e.target.value)}
            />
            {errors.soyad && <p className="text-pink-400 text-xs mt-1">{errors.soyad}</p>}
          </div>

          {/* Ülke */}
          <div>
            <label className={labelClass}>🌍 Ülke</label>
            <select
              className={inputClass + " cursor-pointer"}
              value={form.ulke}
              onChange={e => handleChange("ulke", e.target.value)}
            >
              <option value="" className="bg-[#1a0035]">Ülke seçin...</option>
              {ulkeler.map(u => (
                <option key={u} value={u} className="bg-[#1a0035]">{u}</option>
              ))}
            </select>
            {errors.ulke && <p className="text-pink-400 text-xs mt-1">{errors.ulke}</p>}
          </div>

          {/* Şehir */}
          <div>
            <label className={labelClass}>🏙️ Şehir</label>
            <input
              className={inputClass}
              placeholder="Şehir adı"
              value={form.sehir}
              onChange={e => handleChange("sehir", e.target.value)}
            />
            {errors.sehir && <p className="text-pink-400 text-xs mt-1">{errors.sehir}</p>}
          </div>

          {/* E-posta */}
          <div>
            <label className={labelClass}>📧 E-posta</label>
            <input
              className={inputClass}
              placeholder="ornek@email.com"
              type="email"
              value={form.eposta}
              onChange={e => handleChange("eposta", e.target.value)}
            />
            {errors.eposta && <p className="text-pink-400 text-xs mt-1">{errors.eposta}</p>}
          </div>

          {/* Tarih */}
          <div>
            <label className={labelClass}>📅 Seyahat Tarihi</label>
            <input
              className={inputClass + " [color-scheme:dark]"}
              type="date"
              value={form.tarih}
              onChange={e => handleChange("tarih", e.target.value)}
            />
            {errors.tarih && <p className="text-pink-400 text-xs mt-1">{errors.tarih}</p>}
          </div>
        </div>

        {/* Alt alan */}
        <div className="mt-7 flex items-center justify-end gap-3">
          {submitted && (
            <span className="text-violet-300 text-sm flex items-center gap-2">
              ✅ Kayıt {editId !== null ? "güncellendi" : "eklendi"}!
            </span>
          )}

          {Object.values(form).some(v => v) && !editId && (
            <button
              onClick={handleIptal}
              className="px-6 py-3 rounded-xl border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 text-sm font-semibold transition-all duration-200"
            >
              Temizle
            </button>
          )}

          <button
            onClick={onSubmit}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 text-white font-bold text-sm shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {editId !== null ? "💾 Güncelle" : "✈️ Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
}
