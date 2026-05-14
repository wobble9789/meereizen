import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig Vliegen na een Knie- of Heupprothese | Vliegklaar',
  description: 'Gaat u vliegen met een knie- of heupprothese? Lees alles over de beveiliging op het vliegveld, tips voor tijdens de vlucht en wanneer het weer veilig is om te reizen.',
};

export default function VliegenMetProthesePage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Knie- of Heupprothese: Tips voor Senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Een nieuwe knie of heup hoeft uw reisplannen niet in de weg te staan. Wel zijn er een paar zaken om rekening mee te houden, van de metaaldetector bij de security tot het risico op trombose tijdens een lange vlucht.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=80"
            alt="Senior die wandelt na een operatie"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Wanneer mag u weer vliegen?</h2>
            <p>
              Over het algemeen wordt geadviseerd om tot 6 weken na de operatie te wachten met vliegen, zeker bij lange vluchten. Het risico op diepveneuze trombose (DVT) is in de eerste periode na een operatie namelijk verhoogd. Overleg altijd eerst met uw behandelend orthopeed voordat u een reis boekt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. De beveiligingscontrole en de metaaldetector</h2>
            <p>
              Moderne gewrichtsprotheses bevatten vaak metaal dat het alarm van de detectiepoortjes kan activeren. Geen zorgen: dit gebeurt dagelijks. Meld voor het passeren van de controle aan de beveiligingsbeambte dat u een prothese heeft. Hoewel een medische verklaring of &apos;prothesepast&apos; officieel niet verplicht is, kan het de communicatie versnellen. U wordt mogelijk handmatig gecontroleerd of door een bodyscan geleid.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Extra hulp nodig op de luchthaven?</h2>
            <p>
              Lange afstanden lopen op Schiphol of een andere luchthaven kan zwaar zijn met een nieuwe prothese. Onze reisbegeleiders kunnen assistentie voor u regelen (zoals een rolstoel of elektrisch wagentje) en u begeleiden tot aan uw vliegtuigstoel.&nbsp;
              <Link href="/luchthaven-begeleiding" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze luchthavenbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tips voor tijdens de vlucht</h2>
            <p>
              Stilzitten is de grootste vijand na een prothese-operatie. Probeer elke 30 tot 60 minuten even door het gangpad te lopen. Indien dit niet kan, doe dan zittende oefeningen: draai rondjes met uw enkels en span uw kuitspieren aan. Dit bevordert de doorbloeding en verkleint de kans op zwellingen en trombose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Comfortabele stoelkeuze</h2>
            <p>
              Kies bij voorkeur een stoel aan het gangpad. Dit geeft u niet alleen meer ruimte om uw been af en toe te strekken, maar maakt het ook makkelijker om op te staan zonder uw medereizigers te storen. Een stoel bij de nooduitgang biedt extra beenruimte, maar let op: u moet fysiek in staat zijn om te helpen bij een evacuatie, wat direct na een operatie vaak niet mag van de luchtvaartmaatschappij.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Hydratatie en kleding</h2>
            <p>
              Drink voldoende water tijdens de vlucht en vermijd alcohol, omdat dit uitdroging en bloed indikken bevordert. Draag comfortabele, loszittende kleding en overweeg in overleg met uw arts het dragen van compressiekousen om zwelling in de benen tegen te gaan.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op reis</h2>
            <p className="text-center italic">
              Met de juiste voorbereiding en een beetje extra geduld is reizen met een prothese uitstekend te doen. Luister naar uw lichaam en neem de tijd.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag vrijblijvend advies voor uw reis
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
              "headline": "Vliegen met een Knie- of Heupprothese: Tips voor Senioren",
              "description": "Handleiding voor vliegen na een knie- of heupprothese-operatie. Informatie over beveiliging, tromboserisico en comfortabel reizen.",
              "image": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=80",
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
              "datePublished": "2026-05-14"
            })
          }}
        />
      </article>
    </main>
  );
}
