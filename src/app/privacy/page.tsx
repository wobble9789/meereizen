import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Privacyverklaring
        </h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vliegklaar respecteert de privacy van alle gebruikers van de website en 
              draagt er zorg voor dat persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Welke Gegevens Verzamelen Wij?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij verzamelen alleen de gegevens die u zelf aan ons verstrekt, bijvoorbeeld bij:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Het maken van een boeking</li>
              <li>Het invullen van een contactformulier</li>
              <li>Het aanmelden voor onze nieuwsbrief</li>
              <li>Telefonisch of via e-mail contact</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Dit kunnen zijn: naam, adres, telefoonnummer, e-mailadres, geboortedatum en 
              eventuele medische informatie die relevant is voor uw reis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Waarvoor Gebruiken Wij Uw Gegevens?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij gebruiken uw persoonsgegevens uitsluitend voor:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Het verwerken en uitvoeren van uw boeking</li>
              <li>Communicatie over uw reis</li>
              <li>Het beantwoorden van vragen</li>
              <li>Het versturen van nieuwsbriefs (alleen met toestemming)</li>
              <li>Het verbeteren van onze dienstverlening</li>
              <li>Wettelijke verplichtingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Delen met Derden</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is voor de uitvoering 
              van uw reis, zoals:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Luchtvaartmaatschappijen voor vliegtickets</li>
              <li>Hotels voor accommodatie</li>
              <li>Vervoersbedrijven voor transfers</li>
              <li>Reisgidsen voor begeleiding</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Deze partijen krijgen alleen de informatie die strikt noodzakelijk is. 
              Wij verkopen uw gegevens nooit aan derden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bewaartermijn</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden 
              waarvoor zij worden verwerkt:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Boekingsgegevens: 7 jaar (wettelijke verplichting)</li>
              <li>Nieuwsbriefabonnement: tot u zich uitschrijft</li>
              <li>Contactformulieren: 2 jaar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Beveiliging</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
              te beschermen tegen verlies of onrechtmatige verwerking. Bijvoorbeeld:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>SSL-encryptie voor onze website</li>
              <li>Beveiligde servers</li>
              <li>Beperkte toegang tot gegevens</li>
              <li>Regelmatige beveiligingsupdates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uw Rechten</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              U heeft te allen tijde recht op:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li><strong>Inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
              <li><strong>Correctie:</strong> U kunt vragen om onjuiste gegevens te corrigeren</li>
              <li><strong>Verwijdering:</strong> U kunt vragen uw gegevens te verwijderen</li>
              <li><strong>Beperking:</strong> U kunt vragen de verwerking te beperken</li>
              <li><strong>Overdracht:</strong> U kunt uw gegevens in gestructureerd formaat opvragen</li>
              <li><strong>Bezwaar:</strong> U kunt bezwaar maken tegen verwerking</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              U kunt deze rechten uitoefenen door contact met ons op te nemen via{' '}
              <a href="mailto:privacy@vliegklaar.nl" className="text-primary-600 hover:text-primary-700 underline">
                privacy@vliegklaar.nl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Onze website gebruikt functionele cookies die noodzakelijk zijn voor de werking van de site. 
              Wij gebruiken geen tracking cookies of cookies van derden zonder uw toestemming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Wijzigingen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wij behouden ons het recht voor deze privacyverklaring te wijzigen. 
              De meest recente versie vindt u altijd op deze pagina.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Laatste wijziging:</strong> 25 januari 2026
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Klachten</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Als u een klacht heeft over de verwerking van uw persoonsgegevens, dan horen wij dat graag. 
              U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mt-8">
            <p className="text-lg text-gray-700">
              <strong className="text-blue-900">Contact voor privacyvragen</strong><br />
              E-mail: <a href="mailto:privacy@vliegklaar.nl" className="text-primary-600 hover:text-primary-700 underline">
                privacy@vliegklaar.nl
              </a><br />
              Telefoon: <a href="tel:0881234567" className="text-primary-600 hover:text-primary-700 underline">
                06-18769492
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
