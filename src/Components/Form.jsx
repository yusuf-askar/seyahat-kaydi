import { initialForm } from "../Interfaces/TravelModel";

export default function Form({ form, setForm, errors, setErrors, editId, setEditId, onSubmit, submitted }) {

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
    <div className="max-w-5xl mx-auto px-6 mt-8">
      <h2 className="text-white text-2xl font-bold mb-6">✈️ Seyahatini Kaydet</h2>

      <div className="bg-purple-900 border border-purple-700 rounded-xl p-6">

        {editId !== null && (
          <div className="bg-purple-800 border border-purple-600 rounded-lg px-4 py-2 mb-4 flex justify-between items-center">
            <span className="text-purple-300 text-sm">✏️ Düzenleme modu</span>
            <button onClick={handleIptal} className="text-purple-400 text-sm hover:text-white">İptal</button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-purple-300 text-sm block mb-1">Ad</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400"
              placeholder="Adınız"
              value={form.ad}
              onChange={e => handleChange("ad", e.target.value)}
            />
            {errors.ad && <p className="text-red-400 text-xs mt-1">{errors.ad}</p>}
          </div>

          <div>
            <label className="text-purple-300 text-sm block mb-1">Soyad</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400"
              placeholder="Soyadınız"
              value={form.soyad}
              onChange={e => handleChange("soyad", e.target.value)}
            />
            {errors.soyad && <p className="text-red-400 text-xs mt-1">{errors.soyad}</p>}
          </div>

          <div>
            <label className="text-purple-300 text-sm block mb-1">Ülke</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400"
              placeholder="Ülke adı"
              value={form.ulke}
              onChange={e => handleChange("ulke", e.target.value)}
            />
            {errors.ulke && <p className="text-red-400 text-xs mt-1">{errors.ulke}</p>}
          </div>

          <div>
            <label className="text-purple-300 text-sm block mb-1">Şehir</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400"
              placeholder="Şehir adı"
              value={form.sehir}
              onChange={e => handleChange("sehir", e.target.value)}
            />
            {errors.sehir && <p className="text-red-400 text-xs mt-1">{errors.sehir}</p>}
          </div>

          <div>
            <label className="text-purple-300 text-sm block mb-1">E-posta</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400"
              placeholder="ornek@email.com"
              type="email"
              value={form.eposta}
              onChange={e => handleChange("eposta", e.target.value)}
            />
            {errors.eposta && <p className="text-red-400 text-xs mt-1">{errors.eposta}</p>}
          </div>

          <div>
            <label className="text-purple-300 text-sm block mb-1">Seyahat Tarihi</label>
            <input
              className="w-full bg-purple-950 border border-purple-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-400 [color-scheme:dark]"
              type="date"
              value={form.tarih}
              onChange={e => handleChange("tarih", e.target.value)}
            />
            {errors.tarih && <p className="text-red-400 text-xs mt-1">{errors.tarih}</p>}
          </div>
        </div>

        <div className="mt-5 flex justify-end items-center gap-3">
          {submitted && <span className="text-green-400 text-sm">✅ Kayıt eklendi!</span>}
          <button
            onClick={onSubmit}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            {editId !== null ? "Güncelle" : "Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
}
