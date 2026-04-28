import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Alkmaar | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Alkmaar. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Word ik echt bij mijn voordeur in Alkmaar opgehaald?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, onze begeleiding begint direct bij u thuis in Alkmaar of omliggende plaatsen zoals Bergen en Heiloo. We helpen met de koffers en zorgen voor vervoer naar de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook helpen bij medische behoeften tijdens de reis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoewel wij geen medische handelingen verrichten, ondersteunen we wel bij het tijdig innemen van medicatie en zorgen we voor rust en assistentie bij mobiliteitsproblemen."
      }
    },
    {
      "@type": "Question",
      "name": "Begeleiden jullie ook op de terugreis naar Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. We kunnen u ophalen bij de gate van de luchthaven van aankomst en brengen u veilig terug tot in uw woonkamer in Alkmaar."
      }
    }
    {
      "@type": "Question",
      "name": "Moet ik zelf de taxi regelen vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee, dat hoeft niet. Wij kunnen het vervoer van Alkmaar naar de luchthaven (en weer terug) volledig voor u organiseren als onderdeel van onze begeleiding."
      }
    },
    {
      "@type": "Question",
      "name": "Blijven jullie de hele vakantie bij mij?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dat is optioneel. We bieden zowel begeleiding tijdens de heen- en terugreis als volledige begeleiding gedurende uw hele verblijf op locatie."
      }
    },
    {
      "@type": "Question",
      "name": "Wat als mijn vlucht vertraagd is?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geen zorgen. Onze begeleiders houden de vluchttijden nauwgezet in de gaten en blijven bij u tot u veilig op uw bestemming bent, ongeacht de vertraging."
      }
    }
  ]
};

export default function AlkmaarSEOPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Alkmaar
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Alkmaar of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de kaasstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Alkmaar: 06-18769492
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
                src="https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?w=800&q=80"
                alt="Alkmaar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Alkmaar?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Alkmaar (of omgeving zoals Heerhugowaard, Heiloo, Bergen) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Alkmaar en de route naar Schiphol als hun broekzak, wat zorgt voor een zorgeloze reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cultuurreis, familiebezoek of een zonvakantie, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage, overstappen of navigatie; wij zijn er voor uw rust en veiligheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Veelgestelde vragen over reisbegeleiding in Alkmaar</h2>
          <div className="space-y-8">
            {faqData.mainEntity.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Alkmaar</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Alkmaar.
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
