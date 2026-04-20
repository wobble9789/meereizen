'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuleer het versturen (later vervangen door echte API call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ naam: '', email: '', telefoon: '', bericht: '' });
    
    // Reset success message na 5 seconden
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Bereikbaarheid
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Telefoon</h3>
                      <a href="tel:+31612345678" className="text-xl text-blue-600 hover:text-blue-700">
                        06 - 12 34 56 78
                      </a>
                      <p className="text-lg text-gray-600 mt-2">
                        Ma-vr: 9:00 - 18:00 uur<br />
                        Za: 10:00 - 16:00 uur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">E-mail</h3>
                      <a href="mailto:info@meereizen.nl" className="text-xl text-blue-600 hover:text-blue-700">
                        info@meereizen.nl
                      </a>
                      <p className="text-lg text-gray-600 mt-2">
                        We reageren binnen 24 uur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <a href="https://wa.me/31612345678" className="text-xl text-blue-600 hover:text-blue-700">
                        Stuur ons een bericht
                      </a>
                      <p className="text-lg text-gray-600 mt-2">
                        Snel en makkelijk contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Waarom ons bellen?</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Persoonlijk advies op maat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Vrijblijvend gesprek</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Direct antwoord op uw vragen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Geen automatische systemen</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Stuur ons een bericht
                </h2>
                
                {submitStatus === 'success' && (
                  <div data-testid="success-message" className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                    <p className="text-lg text-green-800 font-semibold">
                      ✓ Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="naam" className="block text-xl font-semibold text-gray-900 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xl font-semibold text-gray-900 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-xl font-semibold text-gray-900 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="06 - 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-xl font-semibold text-gray-900 mb-2">
                      Uw bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      value={formData.bericht}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                      placeholder="Vertel ons over uw reisplannen of stel uw vraag..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Bezig met versturen...' : 'Verstuur bericht'}
                  </Button>

                  <p className="text-gray-600 text-base">
                    * Verplichte velden
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
