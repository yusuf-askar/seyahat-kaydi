export default function Baslik({ dark, setDark }) {
  return (
    <header className="relative z-10">
      {/* Navbar */}
      <div className="max-w-6xl mx-auto px-6 pt-7 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-xl shadow-lg shadow-violet-500/40">
            ✈️
          </div>
          <div>
            <p className="font-extrabold text-xl tracking-tight leading-none text-white font-display">
              Seyahat Kayıt
            </p>
            <p className="text-xs text-purple-300/60 mt-0.5">Seyahat Kayıt Sistemi</p>
          </div>
        </div>

        {/* Tema butonu */}
        <button
          onClick={() => setDark(!dark)}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20 text-purple-300 text-sm font-semibold transition-all duration-200"
        >
          {dark ? "☀️" : "🌙"} {dark ? "Açık Tema" : "Koyu Tema"}
        </button>
      </div>

      {/* Hero başlık */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-2 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none font-display bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Seyahatini Kaydet
        </h1>
        <p className="text-purple-300/50 mt-4 text-base">
          Gittiğin yerleri kayıt altına al, geçmişine bak
        </p>
      </div>
    </header>
  );
}
