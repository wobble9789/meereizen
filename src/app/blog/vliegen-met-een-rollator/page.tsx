import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig reizen met een rollator | Tips & Regels | Vliegklaar',
  description: 'Gaat u op reis met een rollator? Lees hier alles over de regels op het vliegveld, tips voor in het vliegtuig en hoe u zorgeloos op pad gaat.',
};

export default function ReizenMetRollatorPage() {
  const publishDate = "2026-05-04";
  const pageTitle = "Veilig reizen met een rollator: Alles wat u moet weten";

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
            Een rollator biedt vrijheid en stabiliteit, ook op vakantie. Maar hoe werkt dat precies op een druk vliegveld? Mag de rollator mee in de cabine, of moet hij in het ruim? In dit artikel geven we praktische tips voor een ontspannen reis met uw rollator.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=1200&q=80"
            alt="Senior die wandelt met een rollator in een zonnige omgeving"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Mag de rollator gratis mee?</h2>
            <p>
              Bij vrijwel alle luchtvaartmaatschappijen mag u medische hulpmiddelen, waaronder een rollator, <strong>gratis</strong> meenemen naast uw reguliere bagage. Dit geldt zowel voor binnenlandse als internationale vluchten.
            </p>
            <p>
              Het is wel belangrijk om dit vooraf aan te geven bij uw boeking of uiterlijk 48 uur voor vertrek bij de luchtvaartmaatschappij. Zo weten zij dat er een extra item mee aan boord gaat.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Belangrijke Tip: Markeer uw rollator</h2>
            <p>
              Zorg dat uw naam en contactgegevens duidelijk op de rollator staan, bijvoorbeeld met een stevig kofferlabel. Gebruik ook een opvallend lintje om uw rollator snel te herkennen tussen andere hulpmiddelen bij de gate of op de bagageband.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Op het vliegveld: Tot aan de gate</h2>
            <p>
              In de meeste gevallen mag u uw rollator gebruiken tot aan de deur van het vliegtuig (de gate). Hier wordt de rollator door het personeel ingenomen en in het bagageruim geplaatst. 
            </p>
            <p>
              Bij aankomst staat de rollator meestal weer klaar bij de vliegtuigdeur, maar op sommige vliegvelden moet u deze ophalen bij de bagageband voor &apos;afwijkende bagage&apos;. Vraag dit altijd even na bij het instappen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Waar moet u op letten bij de security check?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uw rollator moet door de scan. Het personeel kan u helpen als u even zonder steun moet staan.</li>
              <li>Heeft u moeite met staan? Vraag dan om een stoel tijdens de controle van uw rollator.</li>
              <li>Soms wordt de rollator handmatig gecontroleerd met een detector.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Extra hulp nodig?</h2>
            <p>
              Ziet u op tegen de afstanden op het vliegveld, zelfs met uw rollator? U kunt altijd gratis <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvragen</Link>. Zij begeleiden u dan in een rolstoel of elektrisch karretje naar de gate, terwijl uw rollator veilig wordt vervoerd.
            </p>
            <p>
              Voor wie echt onbezorgd wil reizen, biedt Vliegklaar persoonlijke <Link href="/" className="text-primary-600 font-bold hover:underline">reisbegeleiding van deur tot deur</Link>. Onze begeleiders helpen u met de rollator, de bagage en alle formaliteiten.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Samenvatting</h2>
            <p className="text-center italic">
              Met een goede voorbereiding is reizen met een rollator heel goed te doen. Geef het op tijd door aan de maatschappij, label uw eigendom goed en schroom niet om hulp te vragen op de luchthaven.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vragen over reizen met hulpmiddelen? Wij helpen u graag.
              </Link>
            </div>
          </section>
        </div>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": pageTitle,
              "description": "Alles wat u moet weten over vliegen en reizen met een rollator. Regels, tips voor op het vliegveld en gratis vervoer van hulpmiddelen.",
              "image": "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=1200&q=80",
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
                "@id": "https://vliegklaar.nl/blog/vliegen-met-een-rollator"
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
                  "name": "Mag een rollator gratis mee in het vliegtuig?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, bij vrijwel alle luchtvaartmaatschappijen mag u medische hulpmiddelen zoals een rollator gratis meenemen als extra bagage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moet ik mijn rollator vooraf aanmelden?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, het is verplicht om dit minimaal 48 uur voor vertrek te melden bij de luchtvaartmaatschappij zodat zij ruimte kunnen reserveren in het ruim."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kan ik mijn rollator gebruiken tot aan de gate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Meestal wel. U kunt met uw eigen rollator tot aan de vliegtuigdeur lopen, waarna het personeel deze in het bagageruim plaatst."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat gebeurt er met mijn rollator tijdens de security check?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "De rollator moet door de röntgenscan. Als u niet zonder hulp kunt staan, kan het personeel u ondersteunen of een tijdelijke stoel aanbieden."
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
