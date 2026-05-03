import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Rollator: Tips en Regels (2026) | Vliegklaar',
  description: 'Mag uw rollator mee in het vliegtuig? Lees alles over de regels, kosten en handige tips voor reizen met een rollator bij verschillende luchtvaartmaatschappijen.',
};

export default function VliegenMetRollatorPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Rollator: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is de rollator een onmisbaar hulpmiddel voor mobiliteit en zelfstandigheid. Maar hoe werkt dat eigenlijk op het vliegveld en in het vliegtuig? In dit artikel leggen we uit hoe u zorgeloos op reis gaat met uw rollator.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581578731522-745a05ad9ad5?w=1200&q=80"
            alt="Senior met rollator op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Mag de rollator gratis mee?</h2>
            <p>
              Bij vrijwel alle luchtvaartmaatschappijen (zoals KLM, Transavia en TUI) mag u <strong>gratis</strong> twee mobiliteitshulpmiddelen meenemen. Een rollator valt hieronder. U hoeft hiervoor dus niet extra te betalen, zolang u dit vooraf aanmeldt bij de maatschappij.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Aanmelden is essentieel</h2>
            <p>
              Meld uw rollator minimaal 48 uur voor vertrek aan bij uw luchtvaartmaatschappij. Geef hierbij de afmetingen (ingeklapt) en het gewicht door. Dit voorkomt verrassingen bij de incheckbalie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tot aan de gate of inchecken?</h2>
            <p>
              U heeft meestal twee opties voor het vervoer van uw rollator:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inchecken als ruimbagage:</strong> U geeft de rollator af bij de incheckbalie en maakt op de luchthaven gebruik van een leenrolstoel van de luchthaven.</li>
              <li><strong>Meenemen tot aan de gate:</strong> U gebruikt uw eigen rollator tot aan de deur van het vliegtuig. Daar wordt de rollator door het grondpersoneel ingenomen en in het bagageruim geplaatst. Bij aankomst staat de rollator meestal weer klaar bij de vliegtuigdeur.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3 Handige tips voor uw rollator op reis</h2>
            <ul className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Maak hem herkenbaar:</strong> Bevestig een label met uw naam en telefoonnummer aan het frame. Een opvallend lintje helpt om uw rollator snel terug te vinden tussen andere hulpmiddelen.
              </li>
              <li>
                <strong>Verwijder losse onderdelen:</strong> Haal mandjes, dienbladen of stokkenhouders van de rollator af voordat u hem afgeeft. Deze kunnen tijdens het transport makkelijk losraken of beschadigen.
              </li>
              <li>
                <strong>Check de verzekering:</strong> Hoewel de luchtvaartmaatschappij verantwoordelijk is bij schade, is de vergoeding vaak beperkt. Controleer of uw reisverzekering medische hulpmiddelen volledig dekt.
              </li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Hulp nodig bij uw reis?</h2>
            <p className="text-center italic">
              Vindt u het spannend om alleen met een rollator te reizen? Vliegklaar biedt persoonlijke reisbegeleiding. Wij helpen u met de bagage, de rollator en begeleiden u door alle controles heen.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </section>
        </div>

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
                    "text": "Ja, bij de meeste luchtvaartmaatschappijen mag u gratis twee mobiliteitshulpmiddelen meenemen, waaronder een rollator."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moet ik mijn rollator vooraf aanmelden?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, het is verplicht om uw rollator minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij."
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
