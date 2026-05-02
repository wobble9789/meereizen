import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe boek je een begeleide reis voor senioren? | Vliegklaar',
  description: 'Een stap-voor-stap gids voor het boeken van een begeleide reis voor senioren. Van kennismaking tot veilige terugkomst. Lees hoe het werkt bij Vliegklaar.',
};

export default function BoekenGidsPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe boek je een begeleide reis voor senioren? Een praktische gids
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Het plannen van een vakantie op latere leeftijd kan vragen oproepen. Hoe regel je de logistiek? Wie helpt er bij het inchecken? In deze gids leggen we stap-voor-stap uit hoe het proces van een begeleide reis bij Vliegklaar verloopt.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1512331283953-199ed3000676?w=1200&q=80"
            alt="Senioren op reis met begeleiding"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Vrijheid en onafhankelijkheid zijn belangrijk, ook als de jaren gaan tellen. Veel ouderen willen nog graag de wereld ontdekken of familie in het buitenland bezoeken, maar zien op tegen de drukte op luchthavens of de complexe logistiek van een moderne reis. <strong>Reisbegeleiding voor senioren</strong> is de oplossing die rust en zekerheid biedt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Stap 1: Het eerste contact</h2>
          <p>
            Alles begint bij een simpel telefoontje of een bericht via onze website. Tijdens dit eerste contact bespreken we globaal uw wensen. Waar wilt u naartoe? Wat is de reden van de reis? En welke ondersteuning denkt u nodig te hebben? Dit gesprek is geheel vrijblijvend en bedoeld om te kijken of onze diensten aansluiten bij uw behoeften.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 2: Persoonlijke kennismaking bij u thuis</h2>
          <p>
            Vertrouwen is de basis van een geslaagde reis. Daarom komen we graag bij u langs voor een persoonlijk gesprek in uw eigen vertrouwde omgeving. Of u nu in <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link>, <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 hover:underline">Utrecht</Link> of <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 hover:underline">Eindhoven</Link> woont, wij maken tijd voor u. Tijdens dit gesprek leren we elkaar kennen en bespreken we alle details van de reis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 3: Een reisplan op maat</h2>
          <p>
            Op basis van het gesprek maken wij een voorstel. Dit omvat niet alleen de begeleiding, maar desgewenst ook advies over de meest geschikte vluchten, tijden en accommodaties. We houden rekening met loopafstanden, toegankelijkheid en uw persoonlijke tempo. U ontvangt een duidelijke offerte zodat u precies weet waar u aan toe bent.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 4: Voorbereiding en boeking</h2>
          <p>
            Zodra u akkoord bent, gaan we aan de slag. We regelen indien nodig extra assistentie op de luchthaven (zoals een rolstoel of elektrische buggy) en zorgen dat alle documenten in orde zijn. U hoeft zich geen zorgen te maken over tickets of medische verklaringen; wij ondersteunen u bij elke stap.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 5: De reisdag</h2>
          <p>
            Op de dag van vertrek halen we u thuis op. We helpen met de bagage en zorgen dat we ruim op tijd op de luchthaven zijn. Geen stress bij het inchecken of de security; uw begeleider wijst de weg en regelt de formaliteiten. Tijdens de vlucht en bij aankomst op de bestemming blijven we aan uw zijde tot u veilig bent ingecheckt in uw hotel of bent overgedragen aan uw familie.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Conclusie</h2>
          <p>
            Een begeleide reis boeken bij Vliegklaar betekent dat u de regie behoudt, maar de zorgen deelt. Wij geloven dat reizen voor iedereen toegankelijk moet blijven, ongeacht de leeftijd.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Klaar om uw plannen te bespreken?</h3>
          <p className="text-gray-700 mb-8">
            Neem vandaag nog contact met ons op voor een vrijblijvend kennismakingsgesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              Contact opnemen
            </Link>
            <a
              href="tel:0618769492"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Bel: 06-18769492
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
