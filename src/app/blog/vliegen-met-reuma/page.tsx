import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Reuma of Artrose: Tips voor een Comfortabele Vlucht | Vliegklaar',
  description: 'Tips voor vliegen met reuma of artrose. Zo voorkomt u stijfheid en pijn tijdens uw vliegreis. Lees over assistentie, medicatie en oefeningen.',
};

export default function VliegenMetReumaPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met Reuma of Artrose: 7 Tips voor een Comfortabele Vlucht
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor reizigers met reuma of artrose kan een vliegreis een fysieke uitdaging zijn. De beperkte bewegingsvrijheid en koude lucht in de cabine zorgen vaak voor extra stijfheid. Met deze tips reist u comfortabeler.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dad99978?w=1200&q=80"
            alt="Ontspannen reiziger in vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Kies de juiste zitplaats</h2>
            <p>
              Probeer een plek te reserveren met extra beenruimte, zoals bij de nooduitgang (let op: u moet hiervoor wel fysiek in staat zijn de bemanning te helpen) of kies voor een stoel aan het gangpad. Zo kunt u makkelijker opstaan om even te wandelen en uw gewrichten in beweging te houden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Blijf in beweging</h2>
            <p>
              Stijfheid is de grootste vijand tijdens een lange vlucht. Doe elk uur korte oefeningen: draai rondjes met uw enkels, strek uw benen en beweeg uw schouders. Een korte wandeling naar het toilet helpt ook om de doorbloeding te stimuleren.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij uw reis?</h2>
            <p>
              Ziet u op tegen het dragen van koffers of het lange wachten bij de gate? Onze reisbegeleiders nemen de fysieke last van u over, zodat u zich kunt focussen op uw bestemming.
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze persoonlijke begeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Warmte is essentieel</h2>
            <p>
              De airconditioning in een vliegtuig kan uw gewrichten koud en stijf maken. Draag laagjes kleding en neem een lichte sjaal of een klein dekentje mee om uw knieën of rug warm te houden tijdens de vlucht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Medicatie en Hulpmiddelen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Houd uw pijnstillers binnen handbereik in uw handbagage.</li>
              <li>Neem een officieel medicatiepaspoort mee van de apotheek.</li>
              <li>Gebruik hulpmiddelen zoals een opblaasbaar nekkussen of een lendensteun voor extra comfort.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Vraag om assistentie</h2>
            <p>
              Maak gebruik van de luchthavenassistentie. Dit is niet alleen voor rolstoelgebruikers; u kunt ook begeleiding vragen als u moeite heeft met lange afstanden lopen op de luchthaven. Meld dit uiterlijk 48 uur voor vertrek bij uw luchtvaartmaatschappij.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Met de juiste voorbereiding hoeven reuma of artrose uw reisplezier niet in de weg te staan. Luister naar uw lichaam en neem de tijd.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag vrijblijvend advies aan
              </Link>
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Vliegen met Reuma of Artrose: 7 Tips voor een Comfortabele Vlucht",
              "description": "Tips en advies voor senioren met reuma of artrose die gaan vliegen. Voorkom stijfheid en pijn tijdens uw reis.",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dad99978?w=1200&q=80",
              "author": {
                "@type": "Organization",
                "name": "Vliegklaar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vliegklaar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vliegklaar.nl/logo.png"
                }
              },
              "datePublished": "2026-05-02"
            })
          }}
        />
      </article>
    </main>
  );
}
