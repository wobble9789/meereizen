import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Arnhem | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Arnhem. Wij helpen u veilig en comfortabel op reis vanaf Arnhem en omgeving naar elke bestemming.',
};

export default function ArnhemSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Arnhem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Arnhem en omliggende gemeenten zoals Velp, Oosterbeek, Elst en Huissen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe regelt Vliegklaar vervoer vanaf Arnhem naar de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij kunnen u thuis in Arnhem ophalen en begeleiden u per trein of privéchauffeur naar Schiphol, Düsseldorf Airport of Eindhoven Airport, inclusief volledige ondersteuning bij de incheck- en beveiligingsprocedures."
        }
      },
      {
        "@type": "Question",
        "name": "Kan Vliegklaar ook helpen bij medische behoeften tijdens de reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze begeleiders in Arnhem zijn getraind om te ondersteunen bij niet-medische zorg, zoals het herinneren aan medicatie, assistentie bij mobiliteit en het bieden van emotionele rust tijdens spannende reismomenten."
        }
      },
      {
        "@type": "Question",
        "name": "Worden koffers ook gedragen door de begeleider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Een van de kerntaken van onze reisbegeleiders in Arnhem is het volledig ontzorgen van de bagage, zodat u zonder fysieke belasting door de luchthaven of het station kunt bewegen."
        }
      },
      {
        "@type": "Question",
        "name": "Is er ook begeleiding beschikbaar voor reizen met de trein vanuit Arnhem Centraal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, Arnhem Centraal is een belangrijk knooppunt voor zowel nationale als internationale treinen (zoals de ICE). Wij begeleiden u graag vanaf het perron tot aan uw zitplaats en eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een rollator of rolstoel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zijn gespecialiseerd in het begeleiden van reizigers die gebruikmaken van mobiliteitshulpmiddelen. Wij regelen de noodzakelijke assistentie op de luchthaven en zorgen voor een vlekkeloze logistiek."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in de regio Arnhem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, we hebben ruime ervaring met het begeleiden van ouderen met beginnende dementie. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis veilig en comfortabel te laten verlopen."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Arnhem
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in de regio Arnhem en wilt u graag op reis, maar ziet u op tegen de drukte op vliegvelden of de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de Gelderse hoofdstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Arnhem: 06-18769492
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
                src="https://images.unsplash.com/photo-1619853381611-39c280540455?w=800&q=80"
                alt="Arnhem Skyline Eusebiuskerk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Arnhem?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Arnhem (of regio zoals Velp, Oosterbeek, Zevenaar) 
                en begeleiden u gedurende de hele reis tot aan uw eindbestemming.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders hebben ervaring met reizen vanaf Arnhem naar zowel Nederlandse als Duitse vliegvelden (zoals Düsseldorf).
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of u nu een bezoek brengt aan familie in het buitenland of geniet van een welverdiende vakantie, wij regelen de details.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Geen stress</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over koffers, instapkaarten of lange rijen; wij zijn uw vaste steunpilaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Arnhem</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Biedt Vliegklaar reisbegeleiding in heel Arnhem?</h3>
              <p className="text-gray-600">Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Arnhem en omliggende gemeenten zoals Velp, Oosterbeek, Elst en Huissen.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Hoe regelt Vliegklaar vervoer vanaf Arnhem naar de luchthaven?</h3>
              <p className="text-gray-600">Wij kunnen u thuis in Arnhem ophalen en begeleiden u per trein of privéchauffeur naar Schiphol, Düsseldorf Airport of Eindhoven Airport, inclusief volledige ondersteuning bij de incheck- en beveiligingsprocedures. Lees ook onze <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">uitleg over vliegveld assistentie</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Kan Vliegklaar ook helpen bij medische behoeften tijdens de reis?</h3>
              <p className="text-gray-600">Onze begeleiders in Arnhem zijn getraind om te ondersteunen bij niet-medische zorg, zoals het herinneren aan medicatie, assistentie bij mobiliteit en het bieden van emotionele rust. Bekijk ook onze tips voor <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijnen mee op reis</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Kunnen jullie ook helpen bij vliegen met een rollator of rolstoel?</h3>
              <p className="text-gray-600">Zeker. Wij zijn gespecialiseerd in het begeleiden van reizigers die gebruikmaken van mobiliteitshulpmiddelen. Wij regelen de noodzakelijke assistentie op de luchthaven en zorgen voor een vlekkeloze logistiek. Lees meer over <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">vliegen met een rollator</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Bieden jullie ook begeleiding voor senioren met dementie in de regio Arnhem?</h3>
              <p className="text-gray-600">Ja, we hebben ruime ervaring met het begeleiden van ouderen met beginnende dementie. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis veilig en comfortabel te laten verlopen. Zie ook ons artikel over <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">reizen met dementie</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start uw zorgeloze reis vanuit Arnhem</h2>
          <p className="text-xl mb-10 text-primary-100">
            Benieuwd wat wij voor u kunnen betekenen? Bel ons voor een kennismaking bij u in Arnhem of omgeving.
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
