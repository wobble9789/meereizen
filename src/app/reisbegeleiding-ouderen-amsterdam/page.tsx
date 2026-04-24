import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Amsterdam | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Amsterdam. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function AmsterdamSEOPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Amsterdam
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Amsterdam of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in onze hoofdstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Amsterdam: 06-18769492
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
                src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80"
                alt="Amsterdam Grachten"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Amsterdam?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Amsterdam (of omgeving zoals Amstelveen, Zaandam, Hoofddorp) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Amsterdam en Schiphol als hun broekzak, wat zorgt voor een zorgeloze reis.
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
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Amsterdam</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Begeleiden jullie ook vanaf Amsterdam Schiphol Airport?</h3>
              <p className="text-gray-600">Ja, Amsterdam Schiphol is ons meest gebruikte startpunt. Wij kunnen u vanaf uw voordeur in Amsterdam naar de vertrekhal brengen, helpen bij het inchecken en de security, en desgewenst meereizen tot aan uw eindbestemming.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Amsterdam?</h3>
              <p className="text-gray-600">Absoluut. Wij zijn gespecialiseerd in het ondersteunen van ouderen die minder mobiel zijn. We regelen assistentie op de luchthaven en zorgen dat het vervoer in Amsterdam en op de bestemming naadloos aansluit op uw behoeften.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Komen jullie voor een kennismaking ook langs in Amsterdam?</h3>
              <p className="text-gray-600">Zeker. Voor we een reis plannen, komen we graag bij u thuis in Amsterdam langs voor een vrijblijvend kennismakingsgesprek. Zo kunnen we uw wensen rustig bespreken in uw eigen vertrouwde omgeving.</p>
            </div>
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
                  "name": "Begeleiden jullie ook vanaf Amsterdam Schiphol Airport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, Amsterdam Schiphol is ons meest gebruikte startpunt. Wij kunnen u vanaf uw voordeur in Amsterdam naar de vertrekhal brengen, helpen bij het inchecken en de security, en desgewenst meereizen tot aan uw eindbestemming."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Amsterdam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absoluut. Wij zijn gespecialiseerd in het ondersteunen van ouderen die minder mobiel zijn. We regelen assistentie op de luchthaven en zorgen dat het vervoer in Amsterdam en op de bestemming naadloos aansluit op uw behoeften."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Komen jullie voor een kennismaking ook langs in Amsterdam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zeker. Voor we een reis plannen, komen we graag bij u thuis in Amsterdam langs voor een vrijblijvend kennismakingsgesprek. Zo kunnen we uw wensen rustig bespreken in uw eigen vertrouwde omgeving."
                  }
                }
              ]
            })
          }}
        />
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Amsterdam</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Amsterdam.
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
