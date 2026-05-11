import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een galblaasoperatie: Advies en hersteltijden | Vliegklaar',
  description: 'Wilt u vliegen na een galblaasoperatie? Lees alles over de hersteltijd voor laparoscopie en open chirurgie, vliegadvies en tips voor een veilige reis.',
};

export default function VliegenNaGalblaasOperatiePage() {
  const faqs = [
    {
      question: "Hoe lang moet ik wachten met vliegen na een galblaasoperatie?",
      answer: "Bij een kijkoperatie (laparoscopie) wordt meestal geadviseerd om minimaal 4 tot 7 dagen te wachten. Bij een open galblaasoperatie is de hersteltijd langer en moet u vaak 10 tot 14 dagen wachten voordat u veilig kunt vliegen."
    },
    {
      question: "Mag ik vliegen met gas in mijn buik na een kijkoperatie?",
      answer: "Tijdens een kijkoperatie wordt CO2-gas gebruikt. Dit kan na de operatie zorgen voor een opgeblazen gevoel of schouderpijn. Omdat gas uitzet bij lagere luchtdruk in de vliegtuigcabine, is het essentieel dat het gas grotendeels door uw lichaam is opgenomen voordat u gaat vliegen."
    },
    {
      question: "Heb ik een Fit to Fly verklaring nodig?",
      answer: "Veel luchtvaartmaatschappijen vragen om een medische verklaring als u binnen twee weken na een chirurgische ingreep reist. Overleg dit altijd vooraf met uw chirurg en de luchtvaartmaatschappij."
    },
    {
      question: "Wat zijn de risico&apos;s van vliegen na galblaasverwijdering?",
      answer: "De belangrijkste risico&apos;s zijn wondpijn door drukverschillen, een verhoogde kans op trombose door stilzitten en mogelijke complicaties zoals nabloedingen of infecties die in de lucht lastig te behandelen zijn."
    }
  ];

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een galblaasoperatie: Wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Een galblaasverwijdering (cholecystectomie) is een veelvoorkomende ingreep. Hoewel het herstel vaak vlot verloopt, 
            brengt vliegen kort na de operatie specifieke uitdagingen met zich mee. Of u nu via een kijkoperatie of open chirurgie 
            bent geholpen, een goede voorbereiding is cruciaal voor uw veiligheid en comfort.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Hersteltijd en vliegadvies</h2>
            <p>
              De methode van opereren bepaalt grotendeels wanneer u weer de lucht in mag. Bij een <strong>laparoscopische cholecystectomie</strong> (kijkoperatie) 
              zijn de wondjes klein en is het interne trauma beperkter. Artsen adviseren hierbij vaak een rustperiode van 4 tot 7 dagen. 
              Bij een <strong>open galblaasoperatie</strong> is de incisie groter en heeft het lichaam meer tijd nodig om de drukverschillen 
              in de cabine aan te kunnen. Houd in dat geval rekening met minimaal 2 weken rust.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Waarom wachten?</h3>
            <p className="mb-0">
              In het vliegtuig is de luchtdruk lager dan op de grond. Hierdoor zetten gassen in uw lichaam uit. 
              Na een buikoperatie kan dit zorgen voor spanning op de interne hechtingen and aanzienlijke pijn veroorzaken. 
              Bovendien is de kans op trombose kort na een operatie verhoogd.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Tips voor een comfortabele vlucht</h2>
            <p>
              Heeft u toestemming van uw arts? Gebruik dan deze tips om de reis zo soepel mogelijk te laten verlopen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Draag losse kleding:</strong> Voorkom druk op de buikwondjes door een strakke broekriem of tailleband.</li>
              <li><strong>Blijf in beweging:</strong> Loop elk uur even door het gangpad om de doorbloeding te stimuleren en trombose te voorkomen.</li>
              <li><strong>Let op uw voeding:</strong> Vermijd gasvormende voeding en koolzuurhoudende dranken voor en tijdens de vlucht.</li>
              <li><strong>Assistentie op de luchthaven:</strong> Laat het zware tilwerk over aan anderen. Vraag luchthavenbegeleiding aan voor het vervoer van uw koffers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Medische documentatie</h2>
            <p>
              Zorg dat u altijd een actueel medicatieoverzicht en een verklaring van uw arts bij u heeft. 
              Mocht u onverhoopt zorg nodig hebben op uw bestemming of tijdens de vlucht, dan kunnen zorgverleners 
              direct zien welke ingreep u heeft ondergaan en welke medicatie u gebruikt.
            </p>
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
          <h2 className="text-3xl font-bold mb-4">Zorgeloos vliegen na uw operatie?</h2>
          <p className="text-xl mb-8 opacity-90">
            Wilt u de zekerheid van een medisch onderlegde reisbegeleider die u ondersteunt van deur tot deur? 
            Onze <Link href="/reisbegeleiding-ouderen" className="text-white underline font-semibold">begeleiders</Link> helpen u met de logistiek, de koffers en zorgen voor een ontspannen reis.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-transform hover:scale-105"
          >
            Bel voor informatie: 06-18769492
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