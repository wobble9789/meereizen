'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setForm({ naam: '', email: '', telefoon: '', bericht: '' });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-primary-100">We staan voor u klaar. Bel ons of stuur een bericht.</p>
        </div>
      </section>

      {/* Telefoonnummer prominent */}
      <section className="bg-primary-50 py-12 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg mb-3">Liever direct iemand spreken? Bel ons gerust:</p>
          <a
            href="tel:0618769492"
            className="text-4xl md:text-5xl font-bold text-primary-600 hover:text-primary-800 transition-colors"
          >
            06-18769492
          </a>
          <div className="mt-4 text-gray-600 text-lg">
            <p>Ma-vr: 9:00 - 18:00 | Za: 10:00 - 14:00</p>
          </div>
          <p className="mt-4 text-primary-700 font-semibold text-lg">
            We reageren altijd binnen 1 werkdag
          </p>
        </div>
      </section>

      {/* Contact kaarten */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '📞',
                titel: 'Telefoon',
                tekst: '06-18769492',
                sub: 'Ma-vr: 9:00 - 18:00',
                href: 'tel:0618769492',
              },
              {
                icon: '✉️',
                titel: 'E-mail',
                tekst: 'info@vliegklaar.nl',
                sub: 'Reactie binnen 1 werkdag',
                href: 'mailto:info@vliegklaar.nl',
              },
              {
                icon: '💬',
                titel: 'WhatsApp',
                tekst: 'Stuur een appje',
                sub: 'Snel en makkelijk',
                href: 'https://wa.me/310618769492',
              },
            ].map((c) => (
              <a
                key={c.titel}
                href={c.href}
                className="bg-primary-50 rounded-2xl p-8 text-center hover:bg-primary-100 transition-colors shadow-sm block"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-primary-800 text-xl mb-1">{c.titel}</h3>
                <p className="text-primary-600 font-semibold">{c.tekst}</p>
                <p className="text-gray-500 text-sm mt-1">{c.sub}</p>
              </a>
            ))}
          </div>

          {/* Openingstijden */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-12 max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Openingstijden</h3>
            <ul className="text-gray-700 space-y-2 text-lg">
              <li>Ma-vr: 9:00 - 18:00</li>
              <li>Za: 10:00 - 14:00</li>
              <li>Zo: Gesloten</li>
            </ul>
            <div className="mt-4 text-primary-600 font-semibold">
              <p>✓ Persoonlijk advies op maat</p>
              <p>✓ Vrijblijvend gesprek</p>
            </div>
          </div>

          {/* Contactformulier */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-700 mb-6 text-center">Stuur ons een bericht</h2>
            <p className="text-center text-gray-600 mb-8">
              <span>* Verplichte velden</span>
            </p>

            {submitted ? (
              <div
                data-testid="success-message"
                className="bg-primary-50 border border-primary-300 rounded-2xl p-10 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-primary-700 mb-3">Bericht ontvangen!</h3>
                <p className="text-gray-600 text-lg">
                  Bedankt voor uw bericht. We nemen binnen 1 werkdag contact met u op.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xpwzgkqd"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="naam" className="block text-lg font-semibold text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    required
                    value={form.naam}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="Uw volledige naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="uw@email.nl"
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-lg font-semibold text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    name="telefoon"
                    type="tel"
                    value={form.telefoon}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="Uw telefoonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-lg font-semibold text-gray-700 mb-2">
                    Uw bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={6}
                    required
                    value={form.bericht}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                    placeholder="Waar kunnen wij u mee helpen?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white text-xl font-bold py-5 rounded-xl transition-colors shadow-md"
                >
                  {loading ? 'Versturen...' : 'Verstuur bericht'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
