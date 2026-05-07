import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een operatie: Wanneer mag u weer het vliegtuig in? | Vliegklaar',
  description: 'Wilt u vliegen na een operatie? Lees ons advies over hersteltijden, medische verklaringen en tips voor een veilige vliegreis na een ingreep.',
};

export default function VliegenNaOperatiePage() {
  const faqs = [
    {
      question: "Hoe lang moet ik wachten met vliegen na een operatie?",
      answer: "De wachttijd varieert per ingreep. Voor lichte ingrepen volstaat vaak 48 uur, maar na een grote buik- of borstoperatie wordt meestal 10 tot 14 dagen geadviseerd. Overleg altijd met uw behandelend arts."
    },
    {
      question: "Heb ik een medische verklaring nodig om te vliegen?",
      answer: "Ja, na een recente operatie vragen luchtvaartmaatschappijen vaak om een 'Fit to Fly' verklaring van uw arts. Dit is om te garanderen dat de luchtdrukverschillen geen risico vormen voor uw herstel."
    },
    {
      question: "Wat zijn de risico&apos;s van vliegen kort na een ingreep?",
      answer: "De belangrijkste risico&apos;s zijn infecties, het openspringen van hechtingen door luchtdrukverschillen en een verhoogde kans op trombose door langdurig stilzitten."
    },
    {
      question: "Mag ik vliegen met gips of hechtingen?",
      answer: "Met gips mag u vaak alleen vliegen als het gips is doorgezaagd (om knelling bij zwelling te voorkomen). Hechtingen zijn meestal geen probleem, mits de wond rustig is en de arts toestemming geeft."
    }
  ];

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een operatie: Veilig en verantwoord op reis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Heeft u onlangs een operatie ondergaan en staat er een vliegreis gepland? Of overweegt u een ingreep in het buitenland? 
            Vliegen na een operatie vraagt om extra voorzorgsmaatregelen. De veranderende luchtdruk en het lange stilzitten 
            kunnen invloed hebben op uw herstel. In dit artikel leest u waar u op moet letten.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Wanneer bent u &apos;Fit to Fly&apos;?</h2>
            <p>
              De term &apos;Fit to Fly&apos; wordt door artsen en luchtvaartmaatschappijen gebruikt om aan te geven dat een passagier 
              medisch gezien veilig kan vliegen. Na een operatie is uw lichaam kwetsbaarder. De lagere zuurstofspanning en 
              luchtdruk in de cabine kunnen ervoor zorgen dat gassen in het lichaam uitzetten, wat pijnlijk kan zijn bij recente wonden.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Algemene richtlijnen per type operatie:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kleine ingrepen (bijv. staar):</strong> Meestal na 24 tot 48 uur.</li>
              <li><strong>Kijkoperatie (laparoscopie):</strong> Gemiddeld na 2 tot 4 dagen.</li>
              <li><strong>Grote buik- of borstoperaties:</strong> Vaak pas na 10 tot 14 dagen.</li>
              <li><strong>Orthopedische operaties (knie/heup):</strong> Meestal na 7 tot 14 dagen, let op tromboserisico.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Risico op trombose</h2>
            <p>
              Na een operatie is het risico op diepveneuze trombose (DVT) verhoogd. Tijdens een vlucht zit u langdurig stil, 
              wat de bloedcirculatie vertraagt. Bespreek met uw arts of u bloedverdunners of steunkousen moet gebruiken tijdens de vlucht. 
              Het is ook essentieel om tijdens de vlucht regelmatig uw voeten te bewegen of even door de gangpaden te lopen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Praktische tips voor uw vliegreis</h2>
            <p>
              Als u groen licht heeft gekregen van uw arts, zijn er een aantal zaken die de reis comfortabeler en veiliger maken:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vraag assistentie aan:</strong> Maak gebruik van luchthavenbegeleiding om lange afstanden te vermijden.</li>
              <li><strong>Kies een stoel met extra beenruimte:</strong> Bijvoorbeeld bij het gangpad, zodat u makkelijk kunt opstaan.</li>
              <li><strong>Draag loszittende kleding:</strong> Voorkom knelling rondom de wond of in de benen.</li>
              <li><strong>Houd uw medicijnen bij de hand:</strong> Zorg dat u uw pijnstillers en medisch paspoort in uw handbagage heeft.</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 bg-gray-50 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600 mb-0" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center bg-primary-900 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Hulp nodig bij uw eerste reis na een operatie?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ziet u op tegen de logistiek op het vliegveld na uw ingreep? Onze <Link href="/reisbegeleiding-ouderen" className="text-white underline font-semibold">reisbegeleiders</Link> nemen 
            alle zorgen uit handen. Wij tillen uw koffers, regelen de rolstoel en blijven bij u tot u veilig op uw plek zit.
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