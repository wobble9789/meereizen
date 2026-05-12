import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een kunstgebit: Tips voor op het vliegveld | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Ontdek handige tips voor de security check, eten aan boord en comfortabel reizen voor senioren.',
};

export default function KunstgebitVliegveldTipsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u hoeft uw kunstgebit niet uit te doen bij de beveiligingscontrole of de bodyscanner op het vliegveld. Het materiaal van een prothese veroorzaakt doorgaans geen alarm."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik kleefpasta meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, kleefpasta mag mee in de handbagage, maar het valt onder de vloeistoffenregels. Zorg dat de tube niet groter is dan 100ml en in een doorzichtig hersluitbaar zakje zit."
        }
      },
      {
        "@type": "Question",
        "name": "Kan luchtdrukverschil invloed hebben op de pasvorm van mijn gebit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sommige reizigers ervaren dat door de droge lucht en lichte drukverschillen in de cabine het tandvlees iets kan krimpen of opzetten, waardoor de prothese minder vast zit. Goede kleefpasta is dan essentieel."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een kunstgebit: Zo reist u zorgeloos
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren vragen zich af of een kunstgebit voor problemen zorgt bij de security scan of tijdens een lange vlucht. 
            Bij Vliegklaar helpen we senioren dagelijks bij hun reis en delen we graag onze praktische tips.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-800">De Security Check op het Vliegveld</h2>
            <p>
              Een van de grootste zorgen is of het metaal in een gedeeltelijke prothese of de bodyscanner problemen geeft. 
              U kunt gerust zijn: u hoeft uw gebit <strong>nooit</strong> uit te doen. De moderne apparatuur op luchthavens zoals Schiphol 
              herkent medische hulpmiddelen en protheses zonder dat dit tot ongemakkelijke situaties hoeft te leiden.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Handbagage Checklist</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kleefpasta:</strong> Neem een kleine tube (max 100ml) mee in uw vloeistoffenzakje.</li>
              <li><strong>Reis-etui:</strong> Mocht u tijdens een nachtvlucht uw gebit toch uit willen doen, bewaar het dan veilig.</li>
              <li><strong>Reinigingstabletten:</strong> Handig voor langere reizen met een tussenstop.</li>
              <li><strong>Pijnstilling:</strong> De droge cabinelucht kan soms zorgen voor irritatie aan het tandvlees.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-800">Eten en Drinken aan boord</h2>
            <p>
              Vliegtuigmaaltijden kunnen soms lastig zijn met een kunstgebit (denk aan taai vlees of kleverige snacks). 
              Tip: geef bij uw boeking aan dat u een &apos;zachte maaltijd&apos; of medisch dieet wenst als u bang bent voor harde ingrediënten. 
              Drink daarnaast voldoende water om een droge mond te voorkomen, wat essentieel is voor een goede hechting van uw prothese.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-800 mb-3">Hulp nodig bij uw reis?</h3>
            <p className="mb-4">
              Vindt u de logistiek op het vliegveld spannend? Onze reisbegeleiders ondersteunen u van deur tot deur, 
              zodat u zich alleen maar hoeft te concentreren op het genieten van uw reis.
            </p>
            <Link href="/contact" className="text-primary-600 font-bold hover:underline">
              Bekijk hoe onze reisbegeleiding werkt →
            </Link>
          </div>
        </section>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
