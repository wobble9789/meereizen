import Link from 'next/link';

export default function OverOnsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Over Vliegklaar</h1>
          <p className="text-xl text-primary-100">
            Een persoonlijk verhaal over waarom elke oudere een mooie vakantie verdient.
          </p>
        </div>
      </section>

      {/* Persoonlijk verhaal */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary-700 mb-6">Hoe Vliegklaar ontstond</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Vliegklaar is opgericht door Ivo, die zag hoe zijn eigen oma stopte met reizen omdat het te ingewikkeld werd.
              Ze vond vliegtuigtickets verwarrend, bagageregels onduidelijk en inchecken stressvol. Terwijl ze altijd zo
              graag had gereisd.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Ivo besloot dat dit anders moest. Niet alleen voor zijn oma, maar voor iedereen die in dezelfde situatie zit.
              Reizen zou plezier moeten zijn — geen bron van stress of afhankelijkheid.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vandaag helpt Vliegklaar ouderen door heel Nederland om weer volop te genieten van reizen. Met een vertrouwde
              begeleider aan hun zijde, van deur tot deur.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-primary-500 h-80 flex items-center justify-center text-white text-2xl font-bold">
              Ivo — oprichter
            </div>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">Onze missie</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Reizen zou plezier moeten zijn — voor iedereen, ongeacht leeftijd of beperking.
            Elke oudere verdient een mooie vakantie, met iemand die echt voor hen zorgt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-primary-600">
            <Link href="/reisbegeleiding-ouderen-amsterdam" className="hover:underline">Reisbegeleiding Amsterdam</Link>
            <span className="text-primary-200">|</span>
            <Link href="/reisbegeleiding-ouderen-rotterdam" className="hover:underline">Reisbegeleiding Rotterdam</Link>
            <span className="text-primary-200">|</span>
            <Link href="/reisbegeleiding-ouderen-utrecht" className="hover:underline">Reisbegeleiding Utrecht</Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">Waarom voor ons kiezen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '👥',
                titel: 'Persoonlijke service',
                tekst: 'Geen automatische systemen, geen callcenters. Altijd een echt mens die naar u luistert.',
              },
              {
                icon: '🎯',
                titel: 'Op maat gemaakt',
                tekst: 'Iedere reis is anders, net als iedere reiziger. Wij maken uw reis precies zoals u het wilt.',
              },
              {
                icon: '🤝',
                titel: 'Begeleiding van A tot Z',
                tekst: 'U heeft altijd dezelfde begeleider — iemand die u kent en begrijpt, van begin tot eind.',
              },
              {
                icon: '✓',
                titel: 'Alles uit handen',
                tekst: 'Tickets, hotel, vervoer, inchecken — wij regelen het allemaal. U hoeft nergens aan te denken.',
              },
              {
                icon: '💬',
                titel: 'Altijd bereikbaar',
                tekst: 'Heeft u een vraag of gaat er iets niet goed? Wij zijn er altijd voor u.',
              },
            ].map((item) => (
              <div key={item.titel} className="flex gap-5 p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-primary-800 text-xl mb-2">{item.titel}</h3>
                  <p className="text-gray-600">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 italic">
            Geen automatische systemen, geen callcenters. U heeft altijd een vast contactpersoon die uw situatie kent.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Klaar om kennis te maken?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Bel ons of stuur een berichtje. We drinken graag een kopje koffie met u — telefonisch of in het echt.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 font-bold text-xl px-10 py-5 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            Contact opnemen
          </Link>
        </div>
      </section>
    </main>
  );
}
