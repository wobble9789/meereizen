import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function DienstenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Onze diensten
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Wij zorgen ervoor dat uw reis van begin tot eind perfect verloopt
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Complete Reizen */}
          <section className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">✈️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Complete Reizen
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Droomt u van een reis naar Spanje, Italië, of een andere bestemming? 
              Wij stellen complete reizen samen die perfect bij u passen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wat is inbegrepen:</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>Vliegtickets naar uw bestemming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>Comfortabel hotel met ontbijt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>Vervoer van en naar de luchthaven</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>Reisbegeleiding indien gewenst</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Populaire bestemmingen:</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>🌴 Spaanse Costa&apos;s (Costa Brava, Costa del Sol)</li>
                  <li>🏖️ Griekse eilanden (Kreta, Rhodos)</li>
                  <li>🍕 Italiaanse steden (Rome, Florence, Venetië)</li>
                  <li>🌺 Canarische Eilanden (Tenerife, Gran Canaria)</li>
                </ul>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg">Vraag een offerte aan</Button>
            </Link>
          </section>

          {/* Vervoer & Begeleiding */}
          <section className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🚗</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Vervoer & Begeleiding
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Geen gedoe met parkeren of openbaar vervoer. Wij halen u thuis op en brengen 
              u veilig naar Schiphol of een andere luchthaven.
            </p>
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ophalen bij u thuis</h3>
                <p className="text-lg text-gray-600">
                  Op de afgesproken tijd staan wij bij u voor de deur. Uw bagage wordt 
                  veilig in de auto geladen.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Begeleiding op de luchthaven</h3>
                <p className="text-lg text-gray-600">
                  Wij helpen u met inchecken, brengen u naar de juiste gate en zorgen 
                  dat u op tijd aan boord bent.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ook voor de terugweg</h3>
                <p className="text-lg text-gray-600">
                  Bij terugkomst staan wij klaar om u op te halen en veilig thuis te brengen.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg">Meer informatie</Button>
            </Link>
          </section>

          {/* Persoonlijke Reisgids */}
          <section className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">👨‍✈️</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Persoonlijke Reisgids
                </h2>
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mt-2">
                  Premium Service
                </span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Geniet van ultiem reisgemak met uw eigen persoonlijke gids die de hele vakantie 
              met u meereist en in de buurt verblijft. Uw persoonlijke butler die alles voor u regelt.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Wat doet uw persoonlijke gids?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Alles regelen</h4>
                      <p className="text-gray-600">Wilt u rotsklimmen? Schilderen? Een museum bezoeken? Uw gids regelt het direct.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🍽️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Restaurantreserveringen</h4>
                      <p className="text-gray-600">De beste tafels in de beste restaurants, altijd geregeld.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🗺️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Lokale expertise</h4>
                      <p className="text-gray-600">Uw gids kent de beste plekken en geheime tips van locals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🚗</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Vervoer & planning</h4>
                      <p className="text-gray-600">Alle vervoer en dagplanning perfect georganiseerd.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">24/7 bereikbaar</h4>
                      <p className="text-gray-600">Dag en nacht beschikbaar voor al uw vragen en wensen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🎨</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Activiteiten op maat</h4>
                      <p className="text-gray-600">Van yoga tot wijnproeven - alles wat u maar wilt.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">🏥</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Medische ondersteuning</h4>
                      <p className="text-gray-600">Hulp bij apotheek, dokter of ziekenhuis indien nodig.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-2xl">📸</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Herinneringen vastleggen</h4>
                      <p className="text-gray-600">Mooie foto&apos;s maken op de beste locaties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-900">💎 Premium reiscomfort:</strong> Uw gids verblijft 
                in een nabijgelegen hotel, reist met u mee tijdens excursies en is op elk gewenst moment 
                beschikbaar. U geniet van uw vakantie, wij zorgen voor de rest.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Informeer naar beschikbaarheid</Button>
            </Link>
          </section>

          {/* Tickets & Arrangementen */}
          <section className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🎫</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tickets & Arrangementen
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Heeft u al een idee waar u naartoe wilt? Wij boeken alle tickets en 
              arrangementen voor u.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vliegtickets</h3>
                <p className="text-gray-600">
                  Wij zoeken de beste vluchten voor de beste prijs
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotels</h3>
                <p className="text-gray-600">
                  Fijne accommodaties op goede locaties
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excursies</h3>
                <p className="text-gray-600">
                  Leuke uitstapjes en activiteiten ter plaatse
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg">Laat ons boeken</Button>
            </Link>
          </section>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Heeft u vragen over onze diensten?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Neem gerust contact met ons op. We helpen u graag verder.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact opnemen
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
