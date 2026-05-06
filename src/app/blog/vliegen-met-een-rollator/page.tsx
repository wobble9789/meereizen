import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: Tips voor een zorgeloze vliegreis | Vliegklaar',
  description: 'Wilt u vliegen met een rollator? Lees onze praktische tips over regels, assistentie op het vliegveld en hoe u uw rollator veilig meeneemt in het vliegtuig.',
};

export default function VliegenMetRollatorPage() {
  const faqs = [
    {
      question: "Mag een rollator gratis mee in het vliegtuig?",
      answer: "Bij de meeste luchtvaartmaatschappijen mag u een rollator gratis meenemen als medische bagage, bovenop uw standaard bagagevrijdom. Dit geldt vaak voor maximaal twee mobiliteitshulpmiddelen per persoon."
    },
    {
      question: "Kan ik mijn rollator gebruiken tot aan de gate?",
      answer: "Ja, in de meeste gevallen kunt u uw rollator gebruiken tot aan de vliegtuigdeur. Daar wordt de rollator door het grondpersoneel ingenomen en in het vrachtruim geplaatst. Bij aankomst staat de rollator meestal weer klaar bij de vliegtuigdeur."
    },
    {
      question: "Moet ik vliegen met een rollator vooraf aanmelden?",
      answer: "Het is sterk aanbevolen om uw rollator minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij. Zo kunnen zij rekening houden met de ruimte in het vrachtruim en eventuele assistentie regelen."
    },
    {
      question: "Wat zijn de afmetingen voor een rollator in het vliegtuig?",
      answer: "Er zijn meestal geen strikte afmetingen, maar de rollator moet wel inklapbaar zijn. Als u een elektrische rollator heeft, gelden er specifieke regels voor de accu&apos;s (meestal droge accu&apos;s of lithium-ion onder de 300Wh)."
    }
  ];

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een rollator: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Voor veel senioren is de rollator een onmisbaar hulpmiddel om mobiel en zelfstandig te blijven. 
            Maar hoe werkt dat eigenlijk op het vliegveld? Mag de rollator mee in de cabine, of moet deze in het vrachtruim? 
            In dit artikel leggen we stap voor stap uit hoe vliegen met een rollator soepel verloopt.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">1. De voorbereiding: Aanmelden is essentieel</h2>
            <p>
              Hoewel een rollator bijna altijd gratis mee mag, is het cruciaal om dit vooraf te melden bij uw luchtvaartmaatschappij. 
              Doe dit bij voorkeur direct tijdens het boeken of uiterlijk 48 uur voor vertrek. Geef hierbij aan of u de rollator 
              wilt gebruiken tot aan de gate of dat u deze al bij de check-in balie wilt afgeven.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Tip van Vliegklaar:</h3>
            <p className="mb-0">
              Label uw rollator duidelijk met uw naam, adres en telefoonnummer. Gebruik ook een opvallend lintje of sticker 
              zodat u uw rollator na de landing direct herkent tussen andere hulpmiddelen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">2. Op de luchthaven: Assistentie en gate-check</h2>
            <p>
              Op luchthavens zoals <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Schiphol</Link> zijn 
              de afstanden naar de gate vaak erg groot. U heeft twee opties:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eigen rollator gebruiken:</strong> U loopt met uw eigen rollator tot aan het vliegtuig. Bij de gate wordt deze ingenomen.</li>
              <li><strong>Luchthavenassistentie:</strong> U geeft uw rollator af bij de check-in en wordt met een rolstoel of elektrisch karretje van de luchthaven naar de gate gebracht.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">3. In het vliegtuig</h2>
            <p>
              In de meeste gevallen mag een rollator niet mee de cabine in (tenzij het een zeer specifiek, ultralicht model is dat in de bagagebakken past). 
              De stewardessen zorgen ervoor dat uw rollator veilig in het vrachtruim wordt geplaatst. Heeft u tijdens de vlucht hulp nodig om naar het toilet te gaan? 
              Vliegtuigen op lange afstanden hebben vaak een smalle boordrolstoel aan boord.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">4. Aankomst op uw bestemming</h2>
            <p>
              Bij het verlaten van het vliegtuig staat uw rollator meestal weer klaar bij de vliegtuigsluis. Soms komt het voor 
              dat de rollator via de &apos;afwijkende bagage&apos; band in de aankomsthal wordt afgeleverd. Vraag dit bij het instappen 
              altijd even na aan het grondpersoneel, zodat u weet waar u aan toe bent.
            </p>
          </div>
        </section>

        <section className="mt-16 bg-gray-50 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600 mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center bg-primary-900 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Hulp nodig bij uw reis?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ziet u op tegen het vliegen met uw rollator? Onze <Link href="/reisbegeleiding-ouderen" className="text-white underline font-semibold">reisbegeleiders</Link> helpen 
            u graag. Wij regelen de assistentie, dragen uw koffers en zorgen dat u zorgeloos op uw bestemming aankomt.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-transform hover:scale-105"
          >
            Bel voor advies: 06-18769492
          </a>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </main>
  );
}