import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met COPD of Astma: Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met COPD of astma? Lees alles over vliegen met zuurstof, medicatie in de handbagage en assistentie op de luchthaven voor een veilige reis.',
};

export default function VliegenMetLuchtwegklachtenPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met COPD of Astma: 5 Tips voor een Comfortabele Vlucht
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor reizigers met COPD of astma kan de ijle lucht in de vliegtuigcabine een uitdaging zijn. De lagere luchtdruk en droge lucht kunnen leiden tot kortademigheid. Met de juiste voorbereiding kunt u echter veilig en comfortabel naar uw bestemming vliegen.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80"
            alt="Frisse lucht en gezondheid"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Overleg met uw longarts (Fit to Fly)</h2>
            <p>
              Voordat u een ticket boekt, is het essentieel om met uw behandelend arts te overleggen. Een longfunctietest kan uitwijzen of u extra zuurstof nodig heeft tijdens de vlucht. Vraag ook om een &apos;Fit to Fly&apos;-verklaring; veel luchtvaartmaatschappijen vragen hierom als u met een longaandoening reist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Medicatie en de inhalator</h2>
            <p>
              Houd uw inhalatoren (pufjes) en andere medicatie altijd in uw handbagage, nooit in de ruimbagage. De lucht in de cabine is erg droog, wat een aanval kan uitlokken. Zorg dat u een Europees Medisch Paspoort bij u heeft waarin al uw medicijnen duidelijk vermeld staan.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig op de luchthaven?</h2>
            <p>
              Lange afstanden lopen naar de gate kan erg vermoeiend zijn als u longklachten heeft. Onze reisbegeleiders regelen assistentie en vervoer op de luchthaven, zodat u uw energie bewaart voor de reis zelf.&nbsp;
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze reisbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Vliegen met eigen zuurstof</h2>
            <p>
              Als u een draagbare zuurstofconcentrator (POC) gebruikt, moet deze goedgekeurd zijn voor gebruik in het vliegtuig (meestal door de FAA). Meld dit minimaal 48 uur voor vertrek bij de luchtvaartmaatschappij. Zorg dat u voldoende batterijcapaciteit heeft voor 150% van de vluchttijd, inclusief mogelijke vertragingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Hydratatie en rust</h2>
            <p>
              Drink voldoende water tijdens de vlucht om uw slijmvliezen vochtig te houden. Vermijd alcohol en cafeïne, omdat deze uitdrogend werken. Probeer ontspanningsoefeningen te doen als u merkt dat u sneller gaat ademen door de spanning van de reis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Vraag assistentie aan</h2>
            <p>
              Maak gebruik van de luchthavenassistentie. Door een rolstoel of elektrisch wagentje te gebruiken voor de afstanden op Schiphol of andere luchthavens, voorkomt u dat u buiten adem raakt voordat u überhaupt aan boord bent.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op reis met Vliegklaar</h2>
            <p className="text-center italic">
              Met COPD of astma is een goede planning het halve werk. Onze begeleiders hebben ervaring met reizigers met luchtwegklachten en nemen de logistieke stress volledig uit handen.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vrijblijvend advies aanvragen
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
              "headline": "Vliegen met COPD of Astma: Tips voor Senioren",
              "description": "Handleiding voor senioren die gaan vliegen met COPD of astma. Tips over zuurstof, medicatie en assistentie op de luchthaven.",
              "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
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
              "datePublished": "2026-05-10"
            })
          }}
        />
      </article>
    </main>
  );
}
