import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rolstoel: Complete gids voor senioren | Vliegklaar',
  description: 'Wilt u vliegen met een rolstoel? Ontdek alles over het aanmelden, assistentie op de luchthaven, batterijregels voor elektrische rolstoelen en praktische tips.',
};

export default function VliegenMetRolstoelPage() {
  const faqs = [
    {
      question: "Mag een rolstoel gratis mee in het vliegtuig?",
      answer: "Ja, bij bijna alle luchtvaartmaatschappijen mag u maximaal twee mobiliteitshulpmiddelen (zoals een rolstoel of rollator) gratis meenemen als medische bagage. Dit staat los van uw reguliere bagagevrijdom."
    },
    {
      question: "Hoe meld ik mijn rolstoel aan voor de vlucht?",
      answer: "Het is verplicht om uw rolstoel minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij. Geef hierbij de afmetingen, het gewicht en (indien van toepassing) het type accu door."
    },
    {
      question: "Mag een elektrische rolstoel mee in het vliegtuig?",
      answer: "Ja, maar er gelden strenge veiligheidsregels voor de accu&apos;s. Droge accu&apos;s (gel/AGM) en lithium-ion accu&apos;s tot een bepaalde capaciteit (vaak 300Wh) zijn toegestaan. Natte accu&apos;s worden vaak geweigerd of vereisen speciale verpakking."
    },
    {
      question: "Kan ik in mijn eigen rolstoel tot aan de vliegtuigdeur blijven?",
      answer: "Vaak wel. U kunt uw eigen handbewogen rolstoel gebruiken tot aan de gate of de vliegtuigsluis. Daar wordt deze ingenomen voor het vrachtruim. Voor elektrische rolstoelen gelden soms andere regels; deze moeten soms al bij de check-in balie worden afgegeven."
    },
    {
      question: "Wat gebeurt er als mijn rolstoel beschadigd raakt?",
      answer: "Luchtvaartmaatschappijen zijn aansprakelijk voor schade aan mobiliteitshulpmiddelen. Meld schade direct bij de bagage-afhandelingsbalie (Property Irregularity Report) voordat u de luchthaven verlaat. Een reisbegeleider van Vliegklaar kan u helpen bij deze afwikkeling."
    },
    {
      question: "Is er een rolstoel aan boord van het vliegtuig?",
      answer: "Op langeafstandsvluchten is er vrijwel altijd een speciale 'boordrolstoel' aanwezig die door het gangpad past. Hiermee kan het cabinepersoneel u helpen om naar het toilet te gaan tijdens de vlucht."
    }
  ];

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een rolstoel: Zorgeloos op reis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Vliegen met een rolstoel vraagt om een goede voorbereiding, maar hoeft zeker geen belemmering te zijn voor een mooie reis. Of u nu een handbewogen rolstoel heeft of een elektrische, de juiste informatie en assistentie maken het verschil tussen stress en ontspanning.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">1. Voor vertrek: Meten en melden</h2>
            <p>
              De belangrijkste stap is het tijdig aanmelden van uw rolstoel bij de luchtvaartmaatschappij. Doe dit direct bij de boeking. De maatschappij heeft specifieke gegevens nodig om een plekje in het vrachtruim te reserveren:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Afmetingen:</strong> Hoogte, breedte en lengte (ingeklapt).</li>
              <li><strong>Gewicht:</strong> Het totaalgewicht van de rolstoel.</li>
              <li><strong>Type accu:</strong> Bij een elektrische rolstoel is dit cruciaal voor de brandveiligheid.</li>
            </ul>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Tip voor elektrische rolstoelen:</h3>
            <p className="mb-0">
              Zorg dat u weet hoe u de accu kunt ontkoppelen en de aandrijving in de &apos;vrijloopstand&apos; kunt zetten. Neem de handleiding of een foto van de instructies mee voor het grondpersoneel.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">2. Op de luchthaven: Gebruik maken van assistentie</h2>
            <p>
              Op grote luchthavens zoals <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam The Hague Airport</Link> of <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 hover:underline">Eindhoven Airport</Link> kunt u gratis assistentie aanvragen. Er zijn drie niveaus van hulp:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WCHR (Ramp):</strong> U kunt zelf afstanden lopen en trappen op, maar heeft hulp nodig voor de lange afstanden op de terminal.</li>
              <li><strong>WCHS (Steps):</strong> U kunt geen trappen lopen, maar wel korte stukjes naar uw stoel in het vliegtuig wandelen.</li>
              <li><strong>WCHC (Cabin):</strong> U bent volledig afhankelijk van de rolstoel en heeft hulp nodig bij het in- en uitstappen en het bereiken van uw stoel.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">3. Tijdens de vlucht</h2>
            <p>
              Uw eigen rolstoel gaat altijd in het vrachtruim. In de cabine wordt u (indien nodig) verplaatst naar uw stoel met een speciale smalle cabinestoel. Aan boord van grotere vliegtuigen is vaak een boordrolstoel aanwezig om u naar het toilet te begeleiden. Geef bij het inchecken ook aan of u uw rolstoel direct bij het verlaten van het vliegtuig weer nodig heeft (de zogenaamde &apos;delivery at aircraft&apos;).
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">4. Bescherming van uw materiaal</h2>
            <p>
              Helaas raken rolstoelen soms beschadigd tijdens het transport. Verwijder losse onderdelen zoals kussens, voetsteunen en joysticks en neem deze mee als handbagage. Bevestig een label met instructies in het Engels op de rolstoel om schade door verkeerd gebruik te voorkomen.
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
          <h2 className="text-3xl font-bold mb-4">Hulp nodig bij uw vliegreis?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ziet u op tegen de logistiek van vliegen met een rolstoel? Onze <Link href="/reisbegeleiding-ouderen" className="text-white underline font-semibold">reisbegeleiders</Link> nemen alle zorg uit handen. Wij regelen de aanmeldingen, de assistentie en begeleiden u van deur tot deur.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-transform hover:scale-105"
          >
            Bel voor vrijblijvend advies: 06-18769492
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