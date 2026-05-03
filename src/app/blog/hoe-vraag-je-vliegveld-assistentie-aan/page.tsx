import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe vraag je vliegveld assistentie aan? | Stap-voor-stap Gids | Vliegklaar',
  description: 'Heeft u hulp nodig op de luchthaven? Leer hoe u gratis assistentie aanvraagt voor senioren en mensen met een beperking. Van rolstoelhulp tot begeleiding.',
};

export default function VliegveldAssistentieGidsPage() {
  const publishDate = "2026-05-03";
  const pageTitle = "Hoe vraag je vliegveld assistentie aan? Een complete gids voor senioren";

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
            Reizen met een beperking of als senior kan spannend zijn, zeker op grote vliegvelden zoals Schiphol. Gelukkig is er gratis assistentie beschikbaar. In dit artikel leggen we precies uit hoe u dit regelt en waar u recht op heeft.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542144611-13e9259a287c?w=1200&q=80"
            alt="Begeleiding op het vliegveld met een rolstoel"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wat is vliegveld assistentie precies?</h2>
            <p>
              Vliegveld assistentie (ook wel PRM-assistentie genoemd: Persons with Reduced Mobility) is een gratis service voor reizigers die moeite hebben met bewegen, een zintuiglijke beperking hebben of op een andere manier hulp nodig hebben tijdens hun reis op de luchthaven.
            </p>
            <p>De assistentie omvat onder andere:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hulp bij het inchecken en het afgeven van bagage.</li>
              <li>Begeleiding door de douane en de security check.</li>
              <li>Vervoer naar de gate (te voet, per rolstoel of elektrisch karretje).</li>
              <li>Hulp bij het aan boord gaan van het vliegtuig.</li>
              <li>Begeleiding bij aankomst naar de bagagehal en de uitgang.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              U hoeft geen medische verklaring te laten zien om assistentie aan te vragen. Als u aangeeft dat u de afstand naar de gate niet zelfstandig kunt overbruggen, heeft u recht op deze hulp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Stap-voor-stap assistentie aanvragen</h2>
            <p>Het aanvragen van hulp is eenvoudig, mits u het op tijd doet.</p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Vraag het aan tijdens het boeken:</strong> De makkelijkste manier is om tijdens uw online boeking de optie &quot;assistentie nodig&quot; aan te vinken.
              </li>
              <li>
                <strong>Minimaal 48 uur van tevoren:</strong> Heeft u al geboekt? Neem dan uiterlijk 48 uur voor vertrek contact op met uw luchtvaartmaatschappij of reisbureau om de hulp vast te leggen.
              </li>
              <li>
                <strong>Geef het type hulp door:</strong> Geef specifiek aan of u een eigen rolstoel meeneemt (en of deze inklapbaar of elektrisch is) of dat u een rolstoel van het vliegveld wilt gebruiken.
              </li>
              <li>
                <strong>Meld u op tijd op het vliegveld:</strong> Zorg dat u minimaal 2 tot 3 uur voor vertrek aanwezig bent en meld u bij de incheckbalie of een speciaal assistentie-meldpunt.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Onze tip voor een zorgeloze reis</h2>
            <p>
              Hoewel vliegveld assistentie fantastisch is, kan het soms even duren voordat een begeleider beschikbaar is, zeker op drukke dagen. Bovendien helpt de vliegveld assistentie u alleen op de luchthaven zelf.
            </p>
            <p>
              Wilt u liever iemand die de hele reis bij u blijft? Van het moment dat u thuis in de taxi stapt tot u veilig in uw hotel bent aangekomen? Dan is de <Link href="/" className="text-primary-600 font-bold hover:underline">reisbegeleiding van Vliegklaar</Link> de ideale oplossing.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Vliegveld assistentie neemt een grote zorg weg. Het zorgt ervoor dat u uw energie kunt besparen voor de rest van uw reis. Combineer dit met een goede voorbereiding en u bent klaar voor vertrek!
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Heeft u vragen over hulp bij reizen? Neem contact op.
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
              "headline": pageTitle,
              "description": "Stap-voor-stap gids voor het aanvragen van gratis vliegveld assistentie op luchthavens zoals Schiphol voor senioren en minder mobiele reizigers.",
              "image": "https://images.unsplash.com/photo-1542144611-13e9259a287c?w=1200&q=80",
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
                "@id": "https://vliegklaar.nl/blog/hoe-vraag-je-vliegveld-assistentie-aan"
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
                  "name": "Is vliegveld assistentie gratis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, vliegveld assistentie voor personen met beperkte mobiliteit (PRM) is een gratis wettelijke verplichting op alle Europese luchthavens."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hoe lang van tevoren moet ik assistentie aanvragen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "U moet de assistentie minimaal 48 uur voor vertrek aanvragen via uw luchtvaartmaatschappij of reisbureau."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Heb ik een doktersverklaring nodig voor een rolstoel op het vliegveld?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nee, een medische verklaring is niet nodig. U kunt assistentie aanvragen op basis van uw eigen inschatting van uw mobiliteit."
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
