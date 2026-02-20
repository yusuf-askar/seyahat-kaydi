import { useState } from "react";
import Baslik from "../Components/Baslik";
import Form from "../Components/Form";
import Liste from "../Components/Liste";
import { initialForm, globalStyles } from "../Interfaces/SeyahatModel";

export default function AnaSayfa() {
  const [dark, setDark] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [kayitlar, setKayitlar] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [editId, setEditId] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.ad.trim()) e.ad = "Ad gerekli";
    if (!form.soyad.trim()) e.soyad = "Soyad gerekli";
    if (!form.ulke) e.ulke = "Ülke seçin";
    if (!form.sehir.trim()) e.sehir = "Şehir gerekli";
    if (!form.eposta.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.eposta))
      e.eposta = "Geçerli e-posta girin";
    if (!form.tarih) e.tarih = "Tarih gerekli";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    if (editId !== null) {
      setKayitlar(kayitlar.map(k => k.id === editId ? { ...form, id: editId } : k));
      setEditId(null);
    } else {
      setKayitlar([...kayitlar, { ...form, id: Date.now() }]);
    }

    setForm(initialForm);
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleEdit = (kayit) => {
    setForm({
      ad: kayit.ad,
      soyad: kayit.soyad,
      ulke: kayit.ulke,
      sehir: kayit.sehir,
      eposta: kayit.eposta,
      tarih: kayit.tarih,
    });
    setEditId(kayit.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    setKayitlar(kayitlar.filter(k => k.id !== id));
  };

  return (
    <>
      {/* Global stiller */}
      <style>{globalStyles(dark)}</style>

      {/* Arka plan ambient ışıkları */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          top: -100, left: -100,
          animation: "float1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          top: 200, right: -50,
          animation: "float2 10s ease-in-out infinite",
        }} />
      </div>

      {/* İçerik */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Baslik dark={dark} setDark={setDark} />
        <Form
          dark={dark}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
          editId={editId}
          setEditId={setEditId}
          onSubmit={handleSubmit}
          submitted={submitted}
        />
        <Liste
          dark={dark}
          kayitlar={kayitlar}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}