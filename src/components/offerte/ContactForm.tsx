"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Naam is verplicht.";
    if (!email.trim() || !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) e.email = "Geldig e-mailadres is verplicht.";
    if (!message.trim() || message.trim().length < 10) e.message = "Bericht is te kort.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (honeypot) return;
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = {
        type: "contact",
        name,
        email,
        phone,
        message,
        createdAt: new Date().toISOString(),
      };
      await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);
      await new Promise((r) => setTimeout(r, 500));
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="border border-warm-gray p-6 md:p-8 text-center">
        <p className="text-charcoal font-medium mb-2">Bericht geregistreerd (demo)</p>
        <p className="text-sm text-mid-gray">
          Dit is een preview: er is nog geen live mailbox gekoppeld. Bij go-live worden berichten
          doorgestuurd naar Huistechnieken.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-warm-gray p-6 md:p-8 space-y-4">
      <p className="text-sm font-medium text-charcoal mb-2">Stuur een bericht</p>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} />
        </label>
      </div>
      <div>
        <label className="block text-sm text-mid-gray mb-1.5">Naam *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
        />
        {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm text-mid-gray mb-1.5">E-mail *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm text-mid-gray mb-1.5">Telefoon</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-mid-gray mb-1.5">Bericht *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none resize-y"
          placeholder="Uw vraag of project…"
        />
        {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors disabled:opacity-60"
      >
        {loading ? "Verzenden…" : "Bericht versturen"}
      </button>
    </form>
  );
}
