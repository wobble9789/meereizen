import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medische Verklaring Vliegen Aanvragen: Uitleg & Tips | Vliegklaar',
  description: 'Hoe vraagt u een medische verklaring aan voor vliegen? Lees alles over de doktersverklaring, vliegen met aandoeningen en de regels in 2026.',
};

export default function MedischeVerklaringVliegenPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe vraagt u een medische verklaring aan voor vliegen?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reist u met een specifieke medische aandoening, gebruikt u zuurstof of heeft u zware medicijnen nodig? Dan vraagt de luchtvaartmaatschappij vaak om een medische verklaring. In dit artikel leggen we uit hoe u dit proces soepel doorloopt.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dad9948f?w=1200&q=80"
            alt="Arts die een formulier invult voor een patiënt"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wanneer is een medische verklaring nodig?</h2>
            <p>
              Niet elke reiziger met een gezondheidsuitdaging heeft direct een officiële verklaring nodig. Toch is het in de volgende situaties vaak verplicht:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zuurstofgebruik:</strong> Als u uw eigen concentrator meeneemt of zuurstof van de maatschappij nodig heeft.</li>
              <li><strong>Medicatie onder de Opiumwet:</strong> Zoals sterke pijnstillers of bepaalde slaapmiddelen (hier is een officiële Schengenverklaring voor nodig).</li>
              <li><strong>Recente operatie:</strong> Als u korter dan een paar weken geleden bent geopereerd.</li>
              <li><strong>Besmettelijke ziekten:</strong> Om aan te tonen dat u geen risico vormt voor andere passagiers.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Een vliegreisbegeleider van Vliegklaar kan u helpen bij het verzamelen van de juiste documenten. Wij weten precies welke formulieren per luchtvaartmaatschappij (zoals KLM of TUI) nodig zijn. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk onze diensten.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Het stappenplan</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Check de website van de luchtvaartmaatschappij:</strong> Elke maatschappij heeft vaak eigen &apos;Fit to Fly&apos; formulieren (MEDIF).
              </li>
              <li>
                <strong>Maak een afspraak met uw (behandelend) arts:</strong> Uw huisarts mag soms geen verklaring afgeven voor eigen patiënten vanwege de onafhankelijkheid; in dat geval is een specialist nodig.
              </li>
              <li>
                <strong>Vraag om een Engelstalige verklaring:</strong> Zeker bij internationale reizen is Nederlands vaak niet voldoende voor het grondpersoneel in het buitenland.
              </li>
              <li>
                <strong>Timing is cruciaal:</strong> De meeste verklaringen mogen niet ouder zijn dan 7 tot 14 dagen voor vertrek. Wacht dus niet te lang, maar begin ook niet maanden van tevoren.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Schengenverklaring vs. Medische verklaring</h2>
            <p>
              Er is een belangrijk verschil. Een medische verklaring vertelt de vliegmaatschappij dat u veilig kunt vliegen. Een <strong>Schengenverklaring</strong> is nodig voor de douane als u medicijnen meeneemt die onder de Opiumwet vallen. Deze moet worden gelegaliseerd door het CAK.
            </p>
            <p>
              Lees ook ons artikel over <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijnen mee op reis</Link> voor meer details.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Hulp nodig bij de aanvraag?</h2>
            <p className="text-center">
              Ziet u door de bomen het bos niet meer met alle medische regels en formulieren? Vliegklaar ondersteunt senioren bij het regelen van alle randzaken rondom hun vliegreis.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Neem vrijblijvend contact op
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
              "headline": "Hoe vraagt u een medische verklaring aan voor vliegen?",
              "description": "Stappenplan voor het aanvragen van een medische verklaring voor vliegreizen. Belangrijk voor senioren en reizigers met een medische achtergrond.",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dad9948f?w=1200&q=80",
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
