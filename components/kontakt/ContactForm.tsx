"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!name?.trim()) errs.name = "Unesite ime i prezime";
    if (!email?.trim()) errs.email = "Unesite email adresu";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Neispravna email adresa";
    if (!phone?.trim()) errs.phone = "Unesite broj telefona";
    if (!message?.trim()) errs.message = "Unesite poruku";
    else if (message.trim().length < 10) errs.message = "Poruka mora imati najmanje 10 karaktera";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-navy text-2xl mb-2">
          Poruka je poslata!
        </h3>
        <p className="text-text-gray font-body text-base mb-6">
          Hvala Vam! Javićemo se u najkraćem mogućem roku, obično u roku od nekoliko sati.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-navy font-heading font-semibold text-sm mb-1.5">
            Ime i prezime <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Marko Marković"
            className={`form-input ${errors.name ? "border-red-400" : ""}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-navy font-heading font-semibold text-sm mb-1.5">
            Telefon <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="06x / xxx-xxx"
            className={`form-input ${errors.phone ? "border-red-400" : ""}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-navy font-heading font-semibold text-sm mb-1.5">
          Email adresa <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="ime@email.com"
          className={`form-input ${errors.email ? "border-red-400" : ""}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label className="block text-navy font-heading font-semibold text-sm mb-1.5">
          Vrsta radova
        </label>
        <select name="service" className="form-input bg-white">
          <option value="">— Odaberite uslugu —</option>
          <option value="adaptacija">Kompletna adaptacija stana</option>
          <option value="kupatilo">Renoviranje kupatila</option>
          <option value="keramika">Keramičarski radovi</option>
          <option value="voda">Voda i kanalizacija</option>
          <option value="struja">Elektroinstalacije</option>
          <option value="moler">Molerski i gipsarski radovi</option>
          <option value="kljuc">Sistem ključ u ruke</option>
          <option value="ostalo">Ostalo</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-navy font-heading font-semibold text-sm mb-1.5">
          Poruka <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Opišite radove koje planirate, površinu prostora, željeni rok... Što više detalja, brže možemo da vam damo procenu."
          className={`form-input resize-none ${errors.message ? "border-red-400" : ""}`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm font-body">
          Greška pri slanju poruke. Molimo vas da nas kontaktirate telefonom ili pokušajte ponovo.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Šalje se...
          </>
        ) : (
          <>
            Pošalji upit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
