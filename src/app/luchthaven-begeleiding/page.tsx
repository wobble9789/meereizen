import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luchthaven begeleiding voor ouderen — geen stress op Schiphol | Vliegklaar',
  description:
    'Luchthaven begeleiding voor ouderen op Schiphol, Rotterdam en Eindhoven. Ophalen thuis, inchecken, gate, boarden — wij kennen de luchthaven, u hoeft nergens naar te zoeken. Bel 085-0608333.',
  keywords: [
    'luchthaven begeleiding ouderen',
    'hulp op schiphol ouderen',
    'begeleiding schiphol senioren',
    'schiphol begeleiding ouderen',
    'hulp luchthaven senioren',
    'begeleiding rotterdam airport ouderen',
    'eindhoven airport begeleiding',
  ],
  openGraph: {
    title: 'Luchthaven begeleiding voor ouderen — geen stress op Schiphol | Vliegklaar',
    description:
      'Luchthaven begeleiding voor ouderen op Schiphol, Rotterdam en Eindhoven. Ophalen thuis, inchecken, gate, boarden — wij kennen de luchthaven.',
    url: 'https://vliegklaar.nl/luchthaven-begeleiding',
    siteName: 'Vliegklaar',
    locale: 'nl_NL',
    type: 'website',
  },
};

const stappen = [
  {
    stap: '1',
    emoji: '🏠',
    title: 'Ophalen aan huis',
    text: 'Uw begeleider staat op de afgesproken tijd bij u voor de deur. We vertrekken rustig op tijd zodat er geen haast is. Comfortabel vervoer naar de luchthaven is inbegrepen.',
  },
  {
    stap: '2',
    emoji: '🎫',
    title: 'Inchecken en bagage opgeven',
    text: 'Bij de incheckbalie regelt uw begeleider alles: boarding passes, bagagelabels en eventuele speciale assistentie. U hoeft alleen uw paspoort bij te houden.',
  },
  {
    stap: '3',
    emoji: '🛂',
    title: 'Beveiliging en paspoortcontrole',
    text: 'We lopen samen door de beveiligingscheck. Uw begeleider weet precies wat u uit uw tas moet halen en hoe u de rij het snelst doorkomt. Geen gedoe.',
  },
  {
    stap: '4',
    emoji: '🚶',
    title: 'Naar de gate',
    text: 'Op een luchthaven als Schiphol kunt u soms een flinke afstand lopen. Indien nodig regelen wij een buggy of rolstoel. Wij kennen de kortste routes en zijn op tijd bij de gate.',
  },
  {
    stap: '5',
    emoji: '✈️',
    title: 'Boarden en instappen',
    text: 'We helpen bij het boarden en zorgen dat u goed zit voordat we afscheid nemen — of meevliegen als dat is afgesproken. Uw handbagage staat veilig opgeborgen.',
  },
  {
    stap: '6',
    emoji: '🏨',
    title: 'Aankomst en overdracht',
    text: 'Op de bestemming halen wij u op of zorgen we voor begeleiding naar het hotel. U komt aan in een vertrouwde omgeving, niet verloren in een vreemde aankomsthal.',
  },
];

const luchthavens = [
  {
    naam: 'Schiphol Amsterdam',
    emoji: '🛫',
    text: 'De grootste luchthaven van Nederland kan overweldigend zijn. Lange gangen, drukke hallen en veel borden. Onze begeleiders kennen Schiphol als hun broekzak en brengen u stap voor stap naar de gate.',
  },
  {
    naam: 'Rotterdam The Hague Airport',
    emoji: '🛬',
    text: 'Kleiner en overzichtelijker dan Schiphol, maar ook hier is begeleiding prettig. Wij regelen het ophalen, inchecken en zorgen dat u comfortabel boardt.',
  },
  {
    naam: 'Eindhoven Airport',
    emoji: '✈️',
    text: 'Populair voor vluchten naar zuidelijke bestemmingen. Wij zijn ook hier bekend en begeleiden u van parkeerplaats tot vliegtuigdeur.',
  },
];

const faqs = [
  {
    vraag: 'Begeleiden jullie ook bij een overstap op een buitenlandse luchthaven?',
    antwoord:
      'Ja. Als de reis een overstap bevat — bijvoorbeeld in Frankfurt, Brussel of Barcelona — zorgen wij dat u weet waar u heen moet en dat u op tijd bij de aansluitende gate bent. Bij kortere overstaptijden regelen we zo nodig extra assistentie van de luchthaven zelf.',
  },
  {
    vraag: 'Mijn moeder heeft een rolstoel nodig. Kan dat geregeld worden?',
    antwoord:
      'Absoluut. We melden rolstoelaanvragen vooraf aan bij de luchtvaartmaatschappij en de luchthaven. Op Schiphol, Rotterdam en Eindhoven is rolstoel­assistentie standaard beschikbaar — wij zorgen dat alles klaarstaat wanneer u aankomt.',
  },
  {
    vraag: 'Hoe vroeg moet mijn vader/moeder op de luchthaven zijn?',
    antwoord:
      'Voor ouderen adviseren wij ruim op tijd aanwezig te zijn — minimaal 2,5 uur voor een Europese vlucht. Wij plannen het vertrek thuis zo dat er geen haast is en er tijd is voor rust, een kopje koffie of een toiletbezoek voor het boarden.',
  },
  {
    vraag: 'Kan ik als familielid meekomen tot de gate?',
    antwoord:
      'Op de meeste Nederlandse luchthavens mogen alleen reizigers met een boarding pass door de beveiliging. Onze begeleider neemt het op dat punt over. U kunt uw naaste afzetten en bent gerust: wij zijn er de hele weg naast.',
  },
];

export default function LuchthavensBegeleidingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Luchthaven begeleiding — geen stress op Schiphol
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Wij kennen elke gang, balie en gate. U hoeft nergens naar te zoeken —
              wij lopen de hele weg met u mee.
            </p>
            <a
              href="tel:0850608333"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-2xl shadow-lg transition-colors"
            >
              📞 Bel 085-0608333
            </a>
          </div>
        </div>
      </section>

      {/* Stap voor stap */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Zo verloopt uw reis — stap voor stap
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 text-center leading-relaxed">
            Van uw voordeur tot aan het vliegtuig (en terug) — we laten niets aan het toeval over.
          </p>
          <div className="space-y-6">
            {stappen.map((s) => (
              <div key={s.stap} className="bg-white rounded-2xl shadow-sm p-6 flex gap-5 items-start">
                <div className="bg-primary-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {s.stap}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{s.emoji}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luchthavens */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Wij begeleiden op alle grote Nederlandse luchthavens
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {luchthavens.map((l) => (
                <div key={l.naam} className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">{l.emoji}</div>
                  <h3 className="text-xl font-semibold mb-3">{l.naam}</h3>
                  <p className="text-lg leading-relaxed text-white/90">{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Veelgestelde vragen over luchthaven­begeleiding
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.vraag} className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {faq.vraag}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-50 border-t border-accent-200 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gerust op reis — wij regelen de luchthaven
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Neem contact op voor een vrijblijvend gesprek. We bespreken uw reis en vertellen u precies
            wat wij voor u kunnen betekenen.
          </p>
          <a
            href="tel:0850608333"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-10 py-5 rounded-2xl shadow-lg transition-colors"
          >
            📞 Bel 085-0608333
          </a>
          <p className="text-gray-500 mt-4 text-lg">Maandag t/m vrijdag, 9:00 – 17:00</p>
        </div>
      </section>
    </main>
  );
}
