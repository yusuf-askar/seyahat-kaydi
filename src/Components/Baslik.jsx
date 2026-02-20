export default function Baslik({ dark, setDark }) {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "28px 24px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44,
            borderRadius: 14,
            background: "linear-gradient(135deg, #7c3aed, #c084fc)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            boxShadow: "0 4px 16px rgba(139,92,246,0.4)",
          }}>✈️</div>
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: -0.5,
              lineHeight: 1,
            }}>
              Seyahat Kayıt
            </div>
            <div style={{ fontSize: 12, opacity: 0.5, marginTop: 2 }}>
              Seyahat Kayıt Sistemi
            </div>
          </div>
        </div>

        {/* Dark/Light Toggle */}
        <button className="toggle-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"} {dark ? "Açık Tema" : "Koyu Tema"}
        </button>
      </div>

      {/* Hero başlık */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 24px 0",
        textAlign: "center",
      }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(32px, 6vw, 60px)",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: 0,
          background: "linear-gradient(135deg, #c084fc, #a855f7, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Seyahatini Kaydet
        </h1>
        <p style={{ fontSize: 16, opacity: 0.55, marginTop: 12, marginBottom: 0 }}>
          
        </p>
      </div>
    </div>
  );
}