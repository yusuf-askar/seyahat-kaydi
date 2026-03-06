export default function Header() {
  return (
    <header className="bg-purple-950 border-b border-purple-800 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <div>
          <h1 className="text-white font-bold text-xl">Seyahat Kayıt</h1>
          <p className="text-purple-400 text-xs">Seyahat Kayıt Sistemi</p>
        </div>
      </div>
    </header>
  );
}
