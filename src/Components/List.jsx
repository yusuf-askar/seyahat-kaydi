export default function List({ kayitlar, onEdit, onDelete }) {
  const filtered = kayitlar;

  return (
    <div className="max-w-5xl mx-auto px-6 mt-10 pb-16">

      <div className="mb-4">
        <h2 className="text-white text-2xl font-bold">Kayıtlar ({kayitlar.length})</h2>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-purple-900 border border-purple-700 rounded-xl p-4 text-center">
          <p className="text-purple-400 text-xs mb-1">Toplam Kayıt</p>
          <p className="text-white text-2xl font-bold">{kayitlar.length}</p>
        </div>
        <div className="bg-purple-900 border border-purple-700 rounded-xl p-4 text-center">
          <p className="text-purple-400 text-xs mb-1">Ülke Sayısı</p>
          <p className="text-white text-2xl font-bold">{new Set(kayitlar.map(k => k.ulke)).size}</p>
        </div>
        <div className="bg-purple-900 border border-purple-700 rounded-xl p-4 text-center">
          <p className="text-purple-400 text-xs mb-1">Şehir Sayısı</p>
          <p className="text-white text-2xl font-bold">{new Set(kayitlar.map(k => k.sehir)).size}</p>
        </div>
      </div>

      {/* Tablo */}
      {kayitlar.length === 0 ? (
        <div className="bg-purple-900 border border-purple-700 rounded-xl p-10 text-center">
          <p className="text-purple-400">Henüz kayıt yok. İlk seyahatini ekle!</p>
        </div>
      ) : (
        <div className="bg-purple-900 border border-purple-700 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-800 text-purple-300 text-left">
                <th className="px-4 py-3">Ad</th>
                <th className="px-4 py-3">Soyad</th>
                <th className="px-4 py-3">Ülke</th>
                <th className="px-4 py-3">Şehir</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((k, i) => (
                <tr
                  key={k.id}
                  className={`text-white border-t border-purple-800 hover:bg-purple-800 transition-colors ${i % 2 === 0 ? "" : "bg-purple-950/50"}`}
                >
                  <td className="px-4 py-3">{k.ad}</td>
                  <td className="px-4 py-3">{k.soyad}</td>
                  <td className="px-4 py-3">{k.ulke}</td>
                  <td className="px-4 py-3">{k.sehir}</td>
                  <td className="px-4 py-3 text-purple-300 text-xs">{k.eposta}</td>
                  <td className="px-4 py-3 text-purple-300">{k.tarih}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(k)}
                        className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded text-xs transition-colors"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => onDelete(k.id)}
                        className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-xs transition-colors"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
