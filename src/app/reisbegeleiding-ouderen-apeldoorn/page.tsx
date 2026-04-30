import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Apeldoorn | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Apeldoorn. Wij helpen u veilig en comfortabel op reis vanaf de Veluwe, van deur tot deur.',
};

export default function ApeldoornSEOPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Apeldoorn
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Apeldoorn of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren op de Veluwe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Apeldoorn: 06-18769492
                </a>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
                >
                  Stuur een bericht
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1594910243293-27351659a721?w=800&q=80"
                alt="Apeldoorn Veluwe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Apeldoorn?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Apeldoorn (of omgeving zoals Beekbergen, Ugchelen, Deventer) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Apeldoorn en de routes naar de grote luchthavens goed, wat zorgt voor een zorgeloze start van uw reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk op de Veluwe</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cultuurreis, familiebezoek of een zonvakantie, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage, overstappen of navigatie; wij zijn er voor uw rust en veiligheid vanaf Apeldoorn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen over reisbegeleiding in Apeldoorn</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Word ik echt vanaf mijn voordeur in Apeldoorn opgehaald?</h3>
              <p className="text-gray-600">Ja, onze begeleiding begint bij u thuis in Apeldoorn. We helpen met de bagage en zorgen voor een comfortabele transfer naar de luchthaven of het treinstation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Is begeleiding ook mogelijk voor korte reizen vanaf Apeldoorn?</h3>
              <p className="text-gray-600">Zeker. Of u nu een weekendje weg gaat of een lange vakantie plant, wij bieden ondersteuning op maat voor elke reisduur.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Begeleiden jullie ook bij medische behoeften tijdens de reis?</h3>
              <p className="text-gray-600">Onze reisbegeleiders zijn ervaren in het ondersteunen van senioren met diverse behoeften, inclusief hulp bij mobiliteit en het herinneren aan medicatiegebruik.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Word ik echt vanaf mijn voordeur in Apeldoorn opgehaald?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, onze begeleiding begint bij u thuis in Apeldoorn. We helpen met de bagage en zorgen voor een comfortabele transfer naar de luchthaven of het treinstation."
                }
              },
              {
                "@type": "Question",
                "name": "Is begeleiding ook mogelijk voor korte reizen vanaf Apeldoorn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zeker. Of u nu een weekendje weg gaat of een lange vakantie plant, wij bieden ondersteuning op maat voor elke reisduur."
                }
              },
              {
                "@type": "Question",
                "name": "Begeleiden jullie ook bij medische behoeften tijdens de reis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Onze reisbegeleiders zijn ervaren in het ondersteunen van senioren met diverse behoeften, inclusief hulp bij mobiliteit en het herinneren aan medicatiegebruik."
                }
              }
            ]
          })
        }}
      />

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Apeldoorn</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Apeldoorn.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
