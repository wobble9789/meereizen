import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen — persoonlijk en betrouwbaar | Vliegklaar',
  description:
    'Reisbegeleiding voor ouderen van deur tot hotel. Ophalen thuis, hulp op de luchthaven, inchecken, overstappen en bagage — wij regelen alles. Bel 06-18769492.',
  keywords: [
    'reisbegeleiding ouderen',
    'hulp bij reizen ouderen',
    'reisassistentie senioren',
    'begeleiding op reis ouderen',
    'reishulp senioren',
    'begeleide reizen ouderen',
  ],
  openGraph: {
    title: 'Reisbegeleiding voor ouderen — persoonlijk en betrouwbaar | Vliegklaar',
    description:
      'Reisbegeleiding voor ouderen van deur tot hotel. Ophalen thuis, hulp op de luchthaven, inchecken, overstappen en bagage — wij regelen alles.',
    url: 'https://vliegklaar.nl/reisbegeleiding-ouderen',
    siteName: 'Vliegklaar',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqs = [
  {
    vraag: 'Wat als mijn vader of moeder moe wordt tijdens de reis?',
    antwoord:
      'Onze begeleiders houden het tempo altijd aan bij uw familielid. We plannen rustmomenten in, zorgen voor een rolstoel op de luchthaven indien nodig, en passen de dag aan wanneer iemand behoefte heeft aan rust. Uw naaste staat centraal — niet het schema.',
  },
  {
    vraag: 'Kan mijn moeder ook vliegklaar als ze slecht ter been is?',
    antwoord:
      'Absoluut. Wij werken samen met luchthavens om rolstoelassistentie of een buggy aan te vragen. Op de bestemming zorgen we voor passend vervoer en een hotel dat goed toegankelijk is. Slecht ter been zijn is geen belemmering om te genieten van een mooie reis.',
  },
  {
    vraag: 'Wat kost reisbegeleiding?',
    antwoord:
      'De kosten voor reisbegeleiding zijn afhankelijk van de duur van de reis, het aantal reizigers en de gewenste intensiteit van begeleiding. Bel ons op 06-18769492 voor een vrijblijvende offerte op maat. We denken graag met u mee over een oplossing die bij uw budget past.',
  },
  {
    vraag: 'Regelen jullie ook het vliegticket en hotel?',
    antwoord:
      'Ja. Wij kunnen de complete reis voor u samenstellen: vliegtickets, hotel, vervoer én begeleiding. U hoeft zich nergens druk over te maken — wij regelen alles van A tot Z. Heeft u al tickets? Dan nemen we alleen de begeleiding voor onze rekening.',
  },
  {
    vraag: 'Hoe ver van tevoren moet ik boeken?',
    antwoord:
      'Wij adviseren minimaal 4 tot 6 weken van tevoren te boeken, zodat we alles goed kunnen voorbereiden. In drukke periodes (zomer, schoolvakanties) is eerder boeken verstandig. Heeft u snel iemand nodig? Neem contact op — we bekijken altijd wat mogelijk is.',
  },
];

export default function ReisbegeleidingOuderenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reisbegeleiding voor ouderen — persoonlijk en betrouwbaar
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Wij halen u thuis op, begeleiden u de hele reis lang en brengen u veilig tot aan uw hotel.
              Geen stress over inchecken, overstappen, bagage of taal.
            </p>
            <a
              href="tel:0618769492"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-2xl shadow-lg transition-colors"
            >
              📞 Bel 06-18769492
            </a>
          </div>
        </div>
      </section>

      {/* Wat houdt de service in */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Wat doet onze reisbegeleider?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed text-center">
            Onze begeleiders zijn er voor ouderen die graag op reis willen, maar tegen wie iemand naast
            zich hebben fijn of noodzakelijk is. Van de voordeur tot het hotel — en alles daartussen.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: '🏠',
                title: 'Ophalen aan huis',
                text: 'Uw begeleider staat op de afgesproken tijd bij u voor de deur. Samen reizen we naar de luchthaven — comfortabel en zonder haast.',
              },
              {
                emoji: '🎫',
                title: 'Inchecken en bagage',
                text: 'Wij regelen het inchecken, de bagagelabels en de boarding passes. U hoeft nergens zelf achteraan te lopen.',
              },
              {
                emoji: '🛂',
                title: 'Door de luchthaven',
                text: 'Van de incheckbalie via de beveiliging naar de gate — we lopen alles stap voor stap samen door. U hoeft nooit te zoeken.',
              },
              {
                emoji: '✈️',
                title: 'Overstappen zonder stress',
                text: 'Bij een overstap kennen wij de luchthavens. Wij weten welke gate, hoe laat en welke weg. U volgt, wij leiden.',
              },
              {
                emoji: '🗣️',
                title: 'Taal en communicatie',
                text: 'Onze begeleiders communiceren met luchtvaartpersoneel, hotelmedewerkers en taxichauffeurs. Geen taalproblemen, geen misverstanden.',
              },
              {
                emoji: '🏨',
                title: 'Aankomst in het hotel',
                text: 'We checken samen in, zorgen dat de kamer in orde is en geven u een vertrouwd gevoel op de bestemming voordat we afscheid nemen.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 flex gap-4">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Vliegklaar */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Waarom families kiezen voor Vliegklaar
            </h2>
            <ul className="space-y-4 text-xl text-left inline-block">
              {[
                'Persoonlijke begeleider — geen wisselende gezichten',
                'Ervaring met ouderen en mensen met beperkte mobiliteit',
                'Altijd bereikbaar voor familieleden thuis',
                'Volledige ontzorging: vlieg­tickets, hotel én begeleiding',
                'Geen grote groepen — uw naaste staat centraal',
              ].map((punt) => (
                <li key={punt} className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-2xl">✓</span>
                  <span>{punt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Veelgestelde vragen over reisbegeleiding
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
            Klaar om zorgeloos op reis te gaan?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Bel ons voor een vrijblijvend gesprek. We denken graag met u mee over de beste oplossing
            voor uw situatie.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-10 py-5 rounded-2xl shadow-lg transition-colors"
          >
            📞 Bel 06-18769492
          </a>
          <p className="text-gray-500 mt-4 text-lg">Maandag t/m vrijdag, 9:00 – 17:00</p>
        </div>
      </section>
    </main>
  );
}
