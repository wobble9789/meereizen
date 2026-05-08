import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Kunstgebit: 7 Praktische Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees onze praktische tips over luchtdruk, reiniging en comfort tijdens uw vliegreis.',
};

export default function VliegenMetKunstgebitPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kan luchtdruk in het vliegtuig invloed hebben op mijn kunstgebit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, door drukverschillen in de cabine kan er lucht onder de prothese komen, waardoor deze losser kan gaan zitten. Het gebruik van een goede kleefpasta voor vertrek wordt daarom aangeraden."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik gebitsprothese-reinigingstabletten meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reinigingstabletten (zoals Steradent) vallen niet onder de vloeistofregels en mogen gewoon in de handbagage mee. Bewaar ze bij voorkeur in de originele verpakking."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen tijdens een nachtvlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dit hangt af van uw persoonlijke gewoonte. Als u besluit het uit te doen, zorg dan voor een afsluitbaar bakje met water in uw handbagage en doe dit discreet in het toilet."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Kunstgebit: 7 Tips voor een Zorgeloze Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren vragen zich af of vliegen met een kunstgebit of gebitsprothese voor problemen zorgt. Hoewel het meestal vlekkeloos verloopt, zijn er een paar zaken waar u op kunt letten voor maximaal comfort.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Oudere man lacht zelfverzekerd op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. De invloed van luchtdruk</h2>
            <p>
              Tijdens het stijgen en dalen verandert de luchtdruk in de cabine. Bij sommige reizigers zorgt dit ervoor dat de prothese iets losser gaat zitten doordat er minuscule luchtbelletjes onder de rand kunnen komen. Een extra laagje kleefpasta voor vertrek kan dit eenvoudig voorkomen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Handbagage essentials</h2>
            <p>Zorg dat u de volgende zaken altijd in uw handbagage heeft, voor het geval uw koffer vertraagd is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Een kleine tube kleefpasta (maximaal 100ml voor de beveiliging).</li>
              <li>Uw prothesebakje (afsluitbaar).</li>
              <li>Reinigingstabletten of een zachte tandenborstel.</li>
              <li>Een kleine spiegel om discreet te kunnen controleren of alles goed zit.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Reist u liever met extra ondersteuning?</h2>
            <p>
              Vindt u het spannend om alleen te reizen met medische hulpmiddelen of protheses? Onze meereizende begeleiders zorgen ervoor dat u zich nergens zorgen over hoeft te maken. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze persoonlijke reisbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Hydratatie en droge mond</h2>
            <p>
              De lucht in een vliegtuig is erg droog. Dit kan leiden tot een drogere mond, wat bij een kunstgebit irritatie aan het tandvlees kan veroorzaken. Drink voldoende water (geen alcohol of cafeïne) om de slijmvliezen vochtig te houden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Maaltijden aan boord</h2>
            <p>
              Vliegtuigmaaltijden kunnen soms taai zijn of onverwachte harde stukjes bevatten. Als u een speciale maaltijd kunt kiezen bij het boeken (zoals &apos;zacht dieet&apos;), overweeg dit dan als u moeite heeft met hard voedsel tijdens het vliegen.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              &quot;Uw glimlach hoeft niet thuis te blijven als u de wereld ontdekt.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag advies voor uw volgende reis
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
              "headline": "Vliegen met een Kunstgebit: 7 Praktische Tips voor Senioren",
              "description": "Alles wat u moet weten over vliegen met een gebitsprothese. Tips voor luchtdruk, comfort en verzorging aan boord.",
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
              "datePublished": "2026-05-08"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </article>
    </main>
  );
}
