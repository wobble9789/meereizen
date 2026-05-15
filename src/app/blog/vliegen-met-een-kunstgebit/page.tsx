import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Kunstgebit: 5 Tips voor een Zorgeloze Reis | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit? Ontdek handige tips voor de security check, droge lucht in de cabine en preventie van ongemak tijdens uw vliegreis.',
};

export default function VliegenMetKunstgebitPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Kunstgebit: 5 Onmisbare Tips
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is een kunstgebit of gebitsprothese een onderdeel van het dagelijks leven. Maar hoe zit dat eigenlijk als u gaat vliegen? Van de beveiligingscontrole tot de droge lucht in de cabine: met deze 5 tips gaat u met een glimlach op reis.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Een stralende glimlach van een senior op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. De Security Check: Moet het gebit uit?</h2>
            <p>
              Een van de meest gestelde vragen is of een kunstgebit afgaat bij de metaaldetector. Het korte antwoord is: nee. Moderne protheses bevatten meestal geen metaal dat gevoelig genoeg is om het alarm te activeren. Mocht er toch een piepje klinken, dan is een eenvoudige uitleg aan de beveiligingsbeambte voldoende. U hoeft uw gebit nooit uit te doen in het openbaar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Hydratatie en luchtdruk</h2>
            <p>
              De lucht in een vliegtuigcabine is erg droog. Dit kan leiden tot een droge mond, waardoor uw kunstgebit minder goed kan blijven zitten of irritatie kan veroorzaken. Drink voldoende water tijdens de vlucht en overweeg om een kleine tube kleefpasta in uw handbagage mee te nemen (let op de 100ml regel voor vloeistoffen).
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Ontspannen op reis met begeleiding</h2>
            <p>
              Ziet u op tegen de logistiek op de luchthaven? Onze reisbegeleiders helpen u bij elke stap, van bagage tot de gate, zodat u zich kunt focussen op de vakantie.&nbsp;
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze persoonlijke ondersteuning.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Handbagage checklist</h2>
            <p>
              Zorg dat u altijd een basisset voor uw gebitsverzorging in uw handbagage heeft. Denk aan een tandenborstel, een kleine verpakking reinigingstabletten en een stevig gebitsbakje. Mocht uw ruimbagage onverhoopt vertraagd zijn, dan kunt u uw prothese in ieder geval goed blijven verzorgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Eten aan boord</h2>
            <p>
              Vliegtuigmaaltijden kunnen soms taai zijn of onverwachte harde stukjes bevatten. Als u twijfelt over de maaltijd, kunt u vooraf vaak een zachtere maaltijdoptie aanvragen bij de luchtvaartmaatschappij. Neem voor de zekerheid zelf wat zachte snacks mee, zoals een banaan of yoghurt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Drukverschillen bij stijgen en landen</h2>
            <p>
              Hoewel zeldzaam, kunnen kleine luchtbelletjes onder een slecht zittend gebit soms voor een drukkend gevoel zorgen tijdens snelle hoogteverschillen. Zorg dat uw gebit voor vertrek goed passend is. Indien u recent een nieuwe prothese heeft gekregen, overleg dan even met uw tandarts voor u een lange vlucht boekt.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Met een goede voorbereiding is vliegen met een kunstgebit totaal geen probleem. Blijf gehydrateerd en houd uw verzorgingsspullen bij de hand voor een zorgeloze reis.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Heeft u vragen over vliegen als senior? Neem contact op.
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
              "headline": "Vliegen met een Kunstgebit: 5 Tips voor een Zorgeloze Reis",
              "description": "Handige tips voor senioren die vliegen met een kunstgebit. Over security, cabinedruk en handbagage.",
              "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
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
              "datePublished": "2026-05-15"
            })
          }}
        />
      </article>
    </main>
  );
}
