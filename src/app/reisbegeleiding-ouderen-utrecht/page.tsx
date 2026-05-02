import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Utrecht | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Utrecht. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function UtrechtSEOPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Utrecht
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Utrecht of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de Domstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Utrecht: 06-18769492
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
                src="https://images.unsplash.com/photo-1541441589139-446a80491005?w=800&q=80"
                alt="Utrecht Oudegracht"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Utrecht?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Utrecht (of omgeving zoals Zeist, Nieuwegein, Houten) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Utrecht goed en zorgen voor een ontspannen start van uw vakantie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een weekendje weg in Nederland of een verre vliegreis, wij passen ons tempo aan op dat van u.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ontlasting voor mantelzorgers</h3>
              <p className="text-gray-600">
                Geef uw kinderen of naasten rust; wij nemen de zorg en organisatie volledig uit handen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen over reisbegeleiding in Utrecht</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Word ik thuis in Utrecht opgehaald?</h3>
              <p className="text-gray-600">Ja, onze begeleider komt op de afgesproken tijd naar uw woning in Utrecht, of dit nu in het centrum, Leidsche Rijn of Overvecht is. We helpen met de bagage en reizen samen naar de luchthaven of het treinstation.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Begeleiden jullie ook bij reizen vanaf Utrecht Centraal?</h3>
              <p className="text-gray-600">Zeker. Naast vliegreizen begeleiden wij senioren ook bij internationale treinreizen (zoals de ICE of Eurostar) die vertrekken vanaf Utrecht Centraal. We helpen bij het instappen en blijven bij u tot de bestemming.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Is er vooraf een kennismaking in Utrecht mogelijk?</h3>
              <p className="text-gray-600">Vertrouwen is essentieel. Daarom plannen we voor vertrek altijd een persoonlijke kennismaking bij u thuis in Utrecht. Zo kunt u uw wensen bespreken en de begeleider alvast ontmoeten.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Wat zijn de kosten voor reisbegeleiding in Utrecht?</h3>
              <p className="text-gray-600">De kosten hangen af van de duur en intensiteit van de begeleiding. We werken met een transparant uurtarief of een vaste pakketprijs voor meerdaagse reizen. Tijdens een kennismaking in Utrecht maken we een offerte op maat.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Kan een begeleider ook helpen bij medische zorg tijdens de reis?</h3>
              <p className="text-gray-600">Onze begeleiders zijn getraind om te ondersteunen bij dagelijkse taken en medicatieherinneringen. Voor specifieke medische handelingen kijken we samen of we een begeleider met een zorgachtergrond kunnen inzetten.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Bieden jullie ook ondersteuning bij het boeken van de reis zelf?</h3>
              <p className="text-gray-600">Zeker. Naast de fysieke begeleiding kunnen we u ook adviseren bij het uitzoeken van een geschikte accommodatie en vlucht die past bij uw wensen en eventuele beperkingen.</p>
            </div>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Word ik thuis in Utrecht opgehaald?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ja, onze begeleider komt op de afgesproken tijd naar uw woning in Utrecht, of dit nu in het centrum, Leidsche Rijn of Overvecht is. We helpen met de bagage en reizen samen naar de luchthaven of het treinstation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Begeleiden jullie ook bij reizen vanaf Utrecht Centraal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zeker. Naast vliegreizen begeleiden wij senioren ook bij internationale treinreizen (zoals de ICE of Eurostar) die vertrekken vanaf Utrecht Centraal. We helpen bij het instappen en blijven bij u tot de bestemming."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is er vooraf een kennismaking in Utrecht mogelijk?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vertrouwen is essentieel. Daarom plannen we voor vertrek altijd een persoonlijke kennismaking bij u thuis in Utrecht. Zo kunt u uw wensen bespreken en de begeleider alvast ontmoeten."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wat zijn de kosten voor reisbegeleiding in Utrecht?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "De kosten hangen af van de duur en intensiteit van de begeleiding. We werken met een transparant uurtarief of een vaste pakketprijs voor meerdaagse reizen. Tijdens een kennismaking in Utrecht maken we een offerte op maat."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Kan een begeleider ook helpen bij medische zorg tijdens de reis?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Onze begeleiders zijn getraind om te ondersteunen bij dagelijkse taken en medicatieherinneringen. Voor specifieke medische handelingen kijken we samen of we een begeleider met een zorgachtergrond kunnen inzetten."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Bieden jullie ook ondersteuning bij het boeken van de reis zelf?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zeker. Naast de fysieke begeleiding kunnen we u ook adviseren bij het uitzoeken van een geschikte accommodatie en vlucht die past bij uw wensen en eventuele beperkingen."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Utrecht</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Utrecht.
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
