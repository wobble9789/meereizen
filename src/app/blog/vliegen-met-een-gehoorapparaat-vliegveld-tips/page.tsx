import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor op het vliegveld | Vliegklaar',
  description: 'Hoe ga je om met de security en communicatie op de luchthaven als je een gehoorapparaat draagt? Lees onze praktische tips voor senioren.',
};

export default function VliegenGehoorapparaatVliegveld() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-900 mb-6">
            Vliegen met een gehoorapparaat: Tips voor op het vliegveld
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Een vliegreis begint vaak met de drukte van de luchthaven. Voor reizigers met een gehoorapparaat kan deze omgeving uitdagend zijn door het vele achtergrondgeluid en de belangrijke omroepen. In dit artikel leggen we uit hoe u soepel door de security komt en op de hoogte blijft van uw vluchtinformatie.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">1. De Security Controle</h2>
          <p className="text-gray-700 mb-6">
            Een veelgestelde vraag is of het gehoorapparaat uit moet bij de metaaldetector of de bodyscan. Het antwoord is simpel: **u kunt uw gehoorapparaat gewoon inhouden.** De meeste moderne apparaten geven geen probleem bij de apparatuur. Meld echter wel even bij de medewerker dat u een gehoorapparaat draagt, mocht het alarm toch afgaan door een ander metalen onderdeel.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Omroepen en Communicatie</h2>
          <p className="text-gray-700 mb-4">
            Luchthavens zijn lawaaierig. Om te voorkomen dat u belangrijke gate-wijzigingen mist:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Gebruik de app van de luchtvaartmaatschappij voor live updates op uw telefoon.</li>
            <li>Vraag bij de gate of de medewerker u persoonlijk wil waarschuwen als het boarden begint.</li>
            <li>Maak gebruik van de ringleiding (indien aanwezig) door uw toestel op de T-stand te zetten.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">3. Reservebatterijen en Accessoires</h2>
          <p className="text-gray-700 mb-6">
            Zorg dat u altijd reservebatterijen in uw handbagage heeft. Door de verandering in luchtdruk of simpelweg de langere reisdag kunnen batterijen sneller leeg gaan dan u gewend bent. Draagt u een oplaadbaar model? Zorg dan dat de oplader ook in de handbagage zit, voor het geval uw koffer vertraging oploopt.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 my-8">
            <h3 className="text-lg font-bold text-primary-800 mb-2">Hulp nodig bij uw reis?</h3>
            <p className="text-gray-700">
              Vindt u de drukte op het vliegveld spannend of bent u bang belangrijke informatie te missen? Onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">reisbegeleiders voor ouderen</Link> ondersteunen u graag van deur tot deur.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">4. In het vliegtuig</h2>
          <p className="text-gray-700 mb-6">
            Zodra u aan boord bent, mag u uw gehoorapparaat gewoon blijven gebruiken. Het valt niet onder de elektronische apparaten die uit moeten tijdens de vlucht. Wel is het raadzaam om de stewardess even te informeren, zodat zij weet dat ze mogelijk iets duidelijker moet spreken tijdens de instructies of het serveren van de maaltijd.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Meer tips voor senioren die vliegen?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <Link href="/blog/vliegen-met-een-gehoorapparaat-tips" className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow text-primary-600">
              &rarr; Algemene tips voor vliegen met gehoorapparaten
            </Link>
            <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow text-primary-600">
              &rarr; Hoe vraag je vliegveld assistentie aan?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
