import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe vraag je begeleiding aan bij de luchtvaartmaatschappij? | Vliegklaar',
  description: 'Stap-voor-stap uitleg over het aanvragen van luchthavenassistentie en begeleiding bij luchtvaartmaatschappijen voor senioren en reizigers met een beperking.',
};

export default function BegeleidingAanvragenPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wanneer moet ik assistentie aanvragen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U moet assistentie minimaal 48 uur voor het geplande vertrek van uw vlucht aanvragen. Dit geeft de luchtvaartmaatschappij en de luchthaven voldoende tijd om de juiste hulpmiddelen en personeel in te plannen."
        }
      },
      {
        "@type": "Question",
        "name": "Is luchthavenassistentie gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, binnen de Europese Unie is het recht op gratis assistentie wettelijk vastgelegd voor mensen met een beperking of beperkte mobiliteit (inclusief ouderdom)."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is het verschil tussen vliegveldassistentie en een reisbegeleider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegveldassistentie wordt geboden door de luchthaven (zoals hulp bij de gate of een rolstoel). Een reisbegeleider van Vliegklaar reist de hele weg met u mee, van uw voordeur tot uw eindbestemming, en biedt ook persoonlijke zorg en gezelschap."
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
            Begeleiding aanvragen bij de luchtvaartmaatschappij: Een Stap-voor-Stap Gids
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Heeft u hulp nodig op het vliegveld? Of het nu gaat om een rolstoel, hulp bij het instappen of begeleiding naar de gate: luchtvaartmaatschappijen zijn verplicht u te ondersteunen. In dit artikel leggen we precies uit hoe u dit regelt.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
            alt="Assistentie op het vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Stap 1: Geef uw behoeften tijdig aan</h2>
            <p>
              De belangrijkste regel is: <strong>48 uur van tevoren</strong>. Hoewel u ook op de dag zelf nog om hulp kunt vragen, heeft u dan geen garantie dat er direct iemand beschikbaar is. U kunt assistentie aanvragen tijdens het boeken van uw ticket of achteraf via de website van de luchtvaartmaatschappij (vaak onder &apos;Mijn Boeking&apos; of &apos;Speciale Verzoeken&apos;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Stap 2: Begrijp de verschillende codes</h2>
            <p>Luchtvaartmaatschappijen gebruiken vaak internationale codes om het type hulp aan te duiden:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WCHR (Wheelchair Ramp):</strong> U kunt korte afstanden lopen, maar heeft hulp nodig voor lange afstanden naar de gate.</li>
              <li><strong>WCHS (Wheelchair Steps):</strong> U kunt niet trap lopen, maar wel korte afstanden naar uw stoel in het vliegtuig.</li>
              <li><strong>WCHC (Wheelchair Cabin):</strong> U bent volledig afhankelijk van een rolstoel en heeft hulp nodig tot in de vliegtuigstoel.</li>
              <li><strong>DPNA:</strong> Voor reizigers met een intellectuele of cognitieve beperking die extra begeleiding nodig hebben.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wilt u meer dan alleen basis-assistentie?</h2>
            <p>
              Luchthavenpersoneel brengt u van punt A naar punt B, maar zij blijven niet bij u tijdens het wachten of tijdens de vlucht zelf. Voor senioren die persoonlijke aandacht, medische controle of gezelschap wensen gedurende de héle reis, biedt Vliegklaar uitkomst. 
              <Link href="/reisbegeleiding-ouderen" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk onze diensten voor reisbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Stap 3: Op de luchthaven zelf</h2>
            <p>
              Meld u bij aankomst op de luchthaven bij de incheckbalie of bij een speciaal assistentie-meldpunt. Het is aan te raden om iets eerder aanwezig te zijn dan de reguliere inchecktijd (meestal 2,5 tot 3 uur voor vertrek).
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
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op reis</h2>
            <p className="text-center italic">
              &quot;Wij geloven dat iedereen moet kunnen blijven reizen, ongeacht leeftijd of fysieke uitdagingen.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag een vrijblijvend adviesgesprek aan
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
              "headline": "Begeleiding aanvragen bij de luchtvaartmaatschappij: Een Stap-voor-Stap Gids",
              "description": "Leer hoe u assistentie en begeleiding aanvraagt bij luchtvaartmaatschappijen voor een zorgeloze vliegreis.",
              "image": "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80",
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
              "datePublished": "2026-05-06"
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
