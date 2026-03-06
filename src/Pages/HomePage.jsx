import { useState } from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import List from "../Components/List";
import { initialForm } from "../Interfaces/TravelModel";

export default function HomePage() {
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
    if (Object.keys(e).length > 0) { setErrors(e); return; }

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
    setForm({ ad: kayit.ad, soyad: kayit.soyad, ulke: kayit.ulke, sehir: kayit.sehir, eposta: kayit.eposta, tarih: kayit.tarih });
    setEditId(kayit.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => setKayitlar(kayitlar.filter(k => k.id !== id));

  return (
    <div className="min-h-screen bg-purple-950">
      <Header />
      <Form
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        editId={editId}
        setEditId={setEditId}
        onSubmit={handleSubmit}
        submitted={submitted}
      />
      <List
        kayitlar={kayitlar}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
