import Link from 'next/link';

export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Algemene Voorwaarden
        </h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Algemeen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, 
              overeenkomsten en leveringen van diensten door Vliegklaar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Aanbiedingen en Prijzen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Alle aanbiedingen zijn vrijblijvend. Prijzen zijn inclusief BTW, 
              tenzij anders vermeld. Wij behouden ons het recht voor prijzen aan te passen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Boekingen en Betalingen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Een boeking is definitief na bevestiging en ontvangst van de aanbetaling. 
              De volledige betaling dient uiterlijk 6 weken voor vertrek te zijn voldaan.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Aanbetaling: 30% van het totaalbedrag</li>
              <li>Restbetaling: 6 weken voor vertrek</li>
              <li>Last-minute boekingen: direct volledig betalen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Annulering</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Annuleren kan kosteloos tot 8 weken voor vertrek. Daarna gelden de volgende annuleringskosten:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>8-6 weken voor vertrek: 30% van de reissom</li>
              <li>6-4 weken voor vertrek: 50% van de reissom</li>
              <li>4-2 weken voor vertrek: 75% van de reissom</li>
              <li>Minder dan 2 weken: 100% van de reissom</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Wij adviseren een annuleringsverzekering af te sluiten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Wijzigingen door Vliegklaar</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij behouden ons het recht voor om in geval van overmacht de reis aan te passen of 
              te annuleren. In dat geval krijgt u het volledige bedrag terug of een alternatieve reis aangeboden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Verantwoordelijkheid Reiziger</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              De reiziger is verantwoordelijk voor:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Geldige reis- en identiteitsdocumenten</li>
              <li>Eventuele visa en vaccinaties</li>
              <li>Aansprakelijkheidsverzekering</li>
              <li>Juiste en volledige informatie bij boeking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Klachten</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Klachten dienen zo spoedig mogelijk, maar uiterlijk binnen 2 maanden na afloop 
              van de reis schriftelijk te worden gemeld. Wij streven ernaar binnen 14 dagen te reageren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Aansprakelijkheid</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vliegklaar is aangesloten bij het Garantiefonds Reisgelden (SGR) en verzekerd 
              voor wettelijke aansprakelijkheid. Onze aansprakelijkheid is beperkt tot het factuurbedrag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Uw persoonsgegevens worden verwerkt volgens onze{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                privacyverklaring
              </Link>
              . Wij gaan zorgvuldig om met uw gegevens en delen deze nooit met derden zonder toestemming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Toepasselijk Recht</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden 
              voorgelegd aan de bevoegde rechter in Nederland.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mt-8">
            <p className="text-lg text-gray-700">
              <strong className="text-blue-900">Vragen over deze voorwaarden?</strong><br />
              Neem gerust contact met ons op via{' '}
              <a href="tel:0618769492" className="text-primary-600 hover:text-primary-700 underline">
                06-18769492
              </a>
              {' '}of{' '}
              <a href="mailto:info@vliegklaar.nl" className="text-primary-600 hover:text-primary-700 underline">
                info@vliegklaar.nl
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="text-primary-600 hover:text-primary-700 text-lg font-medium"
          >
            ← Terug naar home
          </Link>
        </div>
      </div>
    </main>
  );
}
