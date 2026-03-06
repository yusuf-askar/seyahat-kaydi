export const initialForm = {
  ad: "",
  soyad: "",
  ulke: "",
  sehir: "",
  eposta: "",
  tarih: "",
};

export const ulkeler = [
  "Türkiye", "Almanya", "Fransa", "İtalya", "İspanya", "ABD", "Japonya",
  "Birleşik Krallık", "Hollanda", "İsviçre", "Avustralya", "Kanada",
  "Brezilya", "Hindistan", "Çin", "Meksika", "Arjantin", "Güney Kore",
  "Portekiz", "Yunanistan", "Polonya", "İsveç", "Norveç", "Danimarka",
];

export const globalStyles = (dark) => `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

  @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(30px)} }
  @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
  @keyframes slideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    background: ${dark
      ? "linear-gradient(135deg, #0d0018 0%, #1a0035 40%, #0d001a 100%)"
      : "linear-gradient(135deg, #f3e8ff 0%, #ede9fe 50%, #faf5ff 100%)"};
    color: ${dark ? "#e9d5ff" : "#1e1b4b"};
    transition: all 0.4s ease;
    min-height: 100vh;
  }

  .field-input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1.5px solid ${dark ? "rgba(139,92,246,0.3)" : "rgba(139,92,246,0.25)"};
    background: ${dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)"};
    color: ${dark ? "#e9d5ff" : "#1e1b4b"};
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: all 0.2s;
    backdrop-filter: blur(8px);
  }
  .field-input:focus {
    border-color: #a855f7;
    background: ${dark ? "rgba(168,85,247,0.08)" : "rgba(255,255,255,0.9)"};
    box-shadow: 0 0 0 3px rgba(168,85,247,0.15);
  }
  .field-input::placeholder { color: ${dark ? "rgba(196,181,253,0.4)" : "rgba(107,70,193,0.4)"}; }
  .field-input option { background: ${dark ? "#1a0035" : "#fff"}; color: ${dark ? "#e9d5ff" : "#1e1b4b"}; }

  .btn-primary {
    background: linear-gradient(135deg, #7c3aed, #a855f7, #c084fc);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 20px rgba(139,92,246,0.4);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(139,92,246,0.5); }
  .btn-primary:active { transform: translateY(0); }

  .card-row { animation: slideIn 0.3s ease; transition: all 0.2s; }
  .card-row:hover { transform: translateY(-2px); }

  .toggle-btn {
    background: ${dark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.1)"};
    border: 1.5px solid rgba(139,92,246,0.4);
    border-radius: 50px;
    padding: 8px 18px;
    cursor: pointer;
    color: ${dark ? "#c4b5fd" : "#7c3aed"};
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .toggle-btn:hover { background: rgba(139,92,246,0.25); }
`;