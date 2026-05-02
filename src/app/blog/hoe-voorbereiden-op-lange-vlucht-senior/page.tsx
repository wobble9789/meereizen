import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lange vlucht als senior? 7 tips voor optimaal comfort | Vliegklaar',
  description: 'Ziet u op tegen een lange vlucht? Ontdek hoe u als senior fit en ontspannen aankomt op uw bestemming met onze praktische tips voor langeafstandsvluchten.',
};

export default function LangeVluchtSeniorPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe overleeft u een lange vlucht als senior? 7 tips voor comfort
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Een vlucht naar een verre bestemming kan vermoeiend zijn, zeker op latere leeftijd. Met de juiste aanpak hoeft een lange reis echter geen obstakel te zijn voor uw droomvakantie.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80"
            alt="Vliegtuigraam met uitzicht op wolken"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Kies de juiste stoel</h2>
            <p>
              Voor senioren is een stoel aan het gangpad vaak de beste keuze. Het geeft u de vrijheid om op te staan en te bewegen zonder uw medepassagiers te storen. Overweeg ook &apos;Premium Economy&apos; voor net dat beetje extra beenruimte zonder de hoofdprijs van Business Class te betalen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Blijf in beweging</h2>
            <p>
              Lange tijd stilzitten verhoogt het risico op trombose. Probeer elk uur even op te staan en een klein stukje door het gangpad te lopen. Ook zittend kunt u oefeningen doen: draai rondjes met uw voeten en trek uw knieën om beurten op.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij de reis?</h2>
            <p>
              Ziet u op tegen de logistiek van een verre reis? Onze reisbegeleiders helpen u niet alleen op het vliegveld, maar kunnen ook tijdens de vlucht ondersteuning bieden. 
              <Link href="/diensten" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk onze begeleidingsmogelijkheden.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Drink voldoende water</h2>
            <p>
              De lucht in een vliegtuig is erg droog. Drink elk uur een glas water, ook als u geen dorst heeft. Vermijd overmatig koffie- of alcoholgebruik, omdat deze dranken u juist uitdrogen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Kleed u in laagjes</h2>
            <p>
              De temperatuur in een vliegtuigcabine kan sterk schommelen. Door kleding in laagjes te dragen, kunt u zich makkelijk aanpassen aan de koude airco of een warmere cabine tijdens het boarden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Neem eigen snacks mee</h2>
            <p>
              Vliegtuigmaaltijden zijn vaak zout en worden op onregelmatige tijden geserveerd. Neem wat gezonde snacks mee, zoals ongezouten noten of fruit, om uw energieniveau op peil te houden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">6. Bestrijd de jetlag direct</h2>
            <p>
              Zodra u aan boord stapt, zet u uw horloge op de tijd van uw bestemming. Probeer te slapen wanneer het daar nacht is. Een oogmasker en oordopjes zijn hierbij onmisbaar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">7. Maak gebruik van assistentie</h2>
            <p>
              Schroom niet om assistentie aan te vragen voor het overstappen op grote luchthavens zoals Dubai of Singapore. Lange afstanden tussen gates kunnen uitputtend zijn. Een golfkarretje kan u veel energie besparen voor uw uiteindelijke bestemming.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Met een beetje planning en de juiste hulpmiddelen is de wereld nog steeds binnen uw handbereik. Laat een lange vlucht u niet tegenhouden om herinneringen te maken.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Plan uw volgende verre reis met ons
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
              "headline": "Lange vlucht als senior? 7 tips voor optimaal comfort",
              "description": "Tips voor senioren om een lange vlucht comfortabel en fit door te komen. Van stoelkeuze tot hydratatie.",
              "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
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