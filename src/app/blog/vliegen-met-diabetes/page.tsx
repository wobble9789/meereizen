import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Diabetes: Praktische Tips voor een Zorgeloze Reis | Vliegklaar',
  description: 'Gaat u vliegen met diabetes? Lees alles over insuline in het vliegtuig, medische verklaringen en hoe u uw bloedsuiker stabiel houdt tijdens de vlucht.',
};

export default function VliegenMetDiabetesPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met Diabetes: 6 Tips voor een Zorgeloze Vliegreis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met diabetes vereist wat extra planning, zeker wanneer u gaat vliegen. Wisselende tijden, ander eten en tijdsverschillen kunnen uw bloedsuikerspiegel beïnvloeden. Met deze tips stapt u goed voorbereid het vliegtuig in.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"
            alt="Medische benodigdheden voor diabetes"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Medische verklaring en paspoort</h2>
            <p>
              Vraag bij uw huisarts of specialist om een Engelstalige medische verklaring. Hierin staat dat u diabetes heeft en welke medicijnen en hulpmiddelen (zoals naalden, insulinepennen of een pomp) u mee moet nemen in uw handbagage. Een internationaal medicatiepaspoort van de apotheek is ook onmisbaar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Insuline in de handbagage</h2>
            <p>
              Houd al uw diabetesbenodigdheden altijd in uw handbagage. In het bagageruim van het vliegtuig kan het vriezen, waardoor insuline onbruikbaar wordt. Neem bovendien twee keer zoveel voorraad mee als u denkt nodig te hebben, voor het geval van vertragingen.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Begeleiding nodig tijdens uw reis?</h2>
            <p>
              Vindt u het spannend om alleen te vliegen met uw medische conditie? Onze reisbegeleiders bieden ondersteuning bij het inchecken, de beveiliging en tijdens de vlucht, zodat u zich nooit zorgen hoeft te maken.&nbsp;
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk onze diensten.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. De beveiligingscontrole</h2>
            <p>
              Meld bij de security dat u diabetesmateriaal bij u heeft. Een insulinepomp of CGM (continu bloedsuikermeter) mag vaak niet door de volledige bodyscan of de röntgenmachine voor bagage. Overleg met de beveiligingsbeambte en toon uw medische verklaring; een handmatige controle is meestal mogelijk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Omgaan met tijdsverschillen</h2>
            <p>
              Reist u door verschillende tijdzones? Overleg voor vertrek met uw diabetesverpleegkundige over een schema voor uw insuline of medicatie. Bij reizen naar het westen duurt de dag langer en heeft u vaak extra insuline nodig, terwijl de dag bij reizen naar het oosten korter is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Eten en drinken aan boord</h2>
            <p>
              Hoewel u speciale &apos;diabetische maaltijden&apos; kunt bestellen bij de meeste luchtvaartmaatschappijen, zijn deze niet altijd nodig. Zorg er vooral voor dat u zelf altijd snelle suikers (zoals druivensuiker) en langzame koolhydraten (zoals een volkoren reep) bij de hand heeft in geval van een hypo of vertraagde maaltijdservice.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Diabetes hoeft u niet tegen te houden om de wereld te ontdekken. Goede communicatie met uw arts en het vliegtuigpersoneel is de sleutel tot een veilige vlucht.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag om hulp bij uw volgende reis
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
              "headline": "Vliegen met Diabetes: Praktische Tips voor een Zorgeloze Reis",
              "description": "Handleiding voor senioren die gaan vliegen met diabetes. Tips over insuline, medische verklaringen en beveiliging.",
              "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80",
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
              "datePublished": "2026-05-03"
            })
          }}
        />
      </article>
    </main>
  );
}
