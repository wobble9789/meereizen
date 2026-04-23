'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt="Gelukkig stel op reis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Uw droomreis. Wij regelen alles.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            Van uw voordeur tot uw hotelkamer — wij zijn er bij.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0618769492"
              className="bg-primary-500 hover:bg-primary-600 text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg transition-colors"
            >
              Bel ons: 06-18769492
            </a>
            <a
              href="#hoe-werkt-het"
              className="bg-white/20 hover:bg-white/30 border-2 border-white text-white text-xl font-semibold px-10 py-5 rounded-xl transition-colors"
            >
              Bekijk hoe het werkt
            </a>
          </div>
        </div>
      </section>

      {/* Vertrouwensbar */}
      <section className="bg-primary-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <li>✓ Persoonlijke begeleiding</li>
            <li>✓ Al 5 jaar ervaring</li>
            <li>✓ 100% tevredenheidsgarantie</li>
            <li>✓ Altijd bereikbaar</li>
          </ul>
        </div>
      </section>

      {/* Voor wie is Vliegklaar? */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-4">
            Voor wie is Vliegklaar?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Vliegklaar is er voor iedereen die reizen weer leuk wil maken — zonder gedoe.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✈️',
                title: 'U reist graag maar vindt het ingewikkeld geworden',
                text: 'Inchecken, bagage, overstappen — wij nemen al het gedoe van u over zodat u kunt genieten.',
              },
              {
                icon: '🤝',
                title: 'U wil niet afhankelijk zijn van familie voor elke reis',
                text: 'Met Vliegklaar reist u zelfstandig, op uw eigen tempo, zonder uw kinderen te belasten.',
              },
              {
                icon: '❤️',
                title: 'U zoekt iemand die echt voor u zorgt',
                text: 'Onze begeleiders zijn geduldig, betrokken en zorg voor u als een vertrouwde vriend.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-primary-50 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section id="hoe-werkt-het" className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">Hoe werkt het?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                stap: '1',
                titel: 'U belt of mailt ons',
                tekst: 'We luisteren naar uw wensen, uw tempo en uw behoeften. Geen formulieren, gewoon een gesprek. Niets wordt geregeld zonder uw goedkeuring.',
              },
              {
                stap: '2',
                titel: 'Wij regelen alles',
                tekst: 'Wij doen een vrijblijvend voorstel: tickets, hotel, vervoer en begeleiding. U beslist wat u wilt en wat niet — we passen alles aan totdat het precies goed voelt.',
              },
              {
                stap: '3',
                titel: 'U geniet',
                tekst: 'Van uw voordeur tot uw bestemming en weer terug. En twijfelt u onderweg? U kunt ons altijd bellen.',
              },
            ].map((step) => (
              <div key={step.stap} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                  {step.stap}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{step.titel}</h3>
                <p className="text-gray-600">{step.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">Wat onze reizigers zeggen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initialen: 'CV',
                naam: 'Corrie',
                details: '72 jaar, Utrecht',
                kleur: 'bg-primary-400',
                tekst:
                  'Mijn dochter maakte zich altijd zorgen als ik alleen op reis ging. Met Vliegklaar durven we het gewoon aan. Ze haalden me op, hielpen me inchecken en waren er ook weer bij de terugkeer.',
              },
              {
                initialen: 'JR',
                naam: 'Jan & Riet',
                details: '68 & 71 jaar, Haarlem',
                kleur: 'bg-accent-400',
                tekst:
                  'We hadden al jaren geen vakantie meer durven plannen. Te veel gedoe met onze beperkingen. Vliegklaar heeft dat compleet opgelost.',
              },
              {
                initialen: 'DV',
                naam: 'Mevrouw De Vries',
                details: '79 jaar, Rotterdam',
                kleur: 'bg-primary-600',
                tekst:
                  'De begeleider was zo aardig en geduldig. Ik voelde me geen last, maar een gewaardeerde klant.',
              },
            ].map((r) => (
              <div key={r.naam} className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${r.kleur} text-white text-xl font-bold flex items-center justify-center flex-shrink-0`}
                  >
                    {r.initialen}
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">{r.naam}</div>
                    <div className="text-sm text-gray-500">{r.details}</div>
                    <div className="text-accent-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{r.tekst}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten overzicht */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">Wat wij voor u doen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌍', titel: 'Complete Reizen', tekst: 'Van A tot Z georganiseerd, inclusief begeleiding op maat.' },
              { icon: '🚗', titel: 'Vervoer & Begeleiding', tekst: 'Wij halen u op aan de voordeur en brengen u veilig terug.' },
              { icon: '🧭', titel: 'Persoonlijke Gids', tekst: 'Een vertrouwd gezicht dat u overal bij begeleidt.' },
              { icon: '🎫', titel: 'Tickets & Arrangementen', tekst: 'Vluchten, hotels en uitstapjes — alles geregeld.' },
            ].map((d) => (
              <div key={d.titel} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-primary-800 text-lg mb-2">{d.titel}</h3>
                <p className="text-gray-600 text-sm">{d.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sectie */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor uw volgende avontuur?</h2>
          <p className="text-xl text-primary-100 mb-10">
            Bel ons vrijblijvend. We denken graag met u mee over uw droomreis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0618769492"
              className="bg-white text-primary-700 font-bold text-2xl px-10 py-5 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              085-0608333
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 border-2 border-white text-white font-semibold text-xl px-10 py-5 rounded-xl hover:bg-primary-400 transition-colors"
            >
              Of stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
