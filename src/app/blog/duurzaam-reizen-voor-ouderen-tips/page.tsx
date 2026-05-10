import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duurzaam reizen voor ouderen: 7 praktische tips | Vliegklaar',
  description: 'Wilt u bewuster reizen zonder in te leveren op comfort? Ontdek 7 praktische tips voor duurzaam reizen voor senioren. Van milieuvriendelijke bestemmingen tot CO2-compensatie.',
};

export default function DuurzaamReizenSeniorenPage() {
  const publishDate = "2026-05-10";
  const pageTitle = "Duurzaam reizen voor ouderen: Zo reist u groener en comfortabel";

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Duurzaamheid is een thema dat ons allemaal aangaat, ook als we op vakantie gaan. Voor senioren kan de balans tussen duurzaamheid en comfort soms een uitdaging lijken. In dit artikel laten we zien hoe u met een paar kleine aanpassingen een grote positieve impact kunt maken, zonder dat dit ten koste gaat van uw reisplezier.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80"
            alt="Prachtige natuurlijke bestemming voor een duurzame reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Kies voor de trein voor kortere afstanden</h2>
            <p>
              Binnen Europa is de trein vaak een uitstekend alternatief voor het vliegtuig. Moderne hogesnelheidstreinen brengen u comfortabel van stad naar stad. Het grote voordeel voor senioren? U heeft meer beenruimte, u kunt gemakkelijk opstaan voor een wandelingetje en u arriveert direct in het hart van de stad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Reis buiten het hoogseizoen</h2>
            <p>
              Als senior heeft u vaak de vrijheid om te reizen wanneer u wilt. Maak daar gebruik van! Door buiten het hoogseizoen te reizen, vermijdt u de drukte en spreidt u de toeristische druk op bestemmingen. Dit is niet alleen duurzamer, maar zorgt ook voor een veel meer ontspannen ervaring.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Directe vluchten vaak minder belastend zijn voor het milieu dan vluchten met een overstap? Dit komt doordat de meeste brandstof wordt verbruikt tijdens het opstijgen en landen. Bovendien is een directe vlucht voor u als reiziger ook veel minder vermoeiend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Ondersteun de lokale economie</h2>
            <p>
              Duurzaamheid gaat ook over sociale impact. Kies voor lokaal gerunde hotels of B&B&apos;s in plaats van grote internationale ketens. Eet in lokale restaurants en koop souvenirs bij lokale ambachtslieden. Zo weet u zeker dat uw vakantie-euro&apos;s op de juiste plek terechtkomen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Compenseer uw CO2-uitstoot</h2>
            <p>
              Soms is vliegen de enige optie. In dat geval kunt u de CO2-uitstoot van uw vlucht compenseren via programma&apos;s zoals die van de luchtvaartmaatschappij zelf of onafhankelijke organisaties. Een kleine bijdrage kan al helpen bij projecten voor herbebossing of duurzame energie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Pak licht in</h2>
            <p>
              Zoals we bij Vliegklaar altijd zeggen: &quot;Packlight!&quot;. Hoe lichter uw bagage, hoe minder brandstof het transportmiddel verbruikt. Bovendien maakt minder bagage de reis voor u fysiek ook een stuk lichter en eenvoudiger.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hoe Vliegklaar helpt bij duurzaam reizen</h2>
            <p>
              Onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 font-bold hover:underline">reisbegeleiders</Link> kunnen u helpen bij het plannen van een route die zowel comfortabel als verantwoord is. Of het nu gaat om het regelen van treinreizen of het vinden van duurzame accommodaties, wij staan voor u klaar.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Klaar voor een bewuste reis?</h2>
            <p className="mb-8">
              Wilt u meer weten over hoe u uw volgende reis duurzamer kunt maken met de juiste begeleiding?
            </p>
            <Link
              href="/contact"
              className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors inline-block"
            >
              Neem vrijblijvend contact op
            </Link>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": pageTitle,
              "description": "7 praktische en comfortabele tips voor senioren om duurzamer te reizen. Van treinvakanties tot lokale economische ondersteuning.",
              "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
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
              "datePublished": publishDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://vliegklaar.nl/blog/duurzaam-reizen-voor-ouderen-tips"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is de trein een goed alternatief voor vliegen voor senioren?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, zeker voor afstanden binnen Europa. De trein biedt vaak meer bewegingsruimte en comfort dan het vliegtuig en u arriveert direct in het stadscentrum."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat is de voordeligste manier om CO2 te compenseren?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "De meeste luchtvaartmaatschappijen bieden direct bij de boeking een optie voor CO2-compensatie aan. U kunt ook kiezen voor gecertificeerde externe partijen zoals Trees for All."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Waarom is buiten het hoogseizoen reizen duurzamer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Het spreidt de belasting op de lokale infrastructuur en natuurgebieden over het jaar, wat beter is voor het behoud van de bestemming."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </main>
  );
}
