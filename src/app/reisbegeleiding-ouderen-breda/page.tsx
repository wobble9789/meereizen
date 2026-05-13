import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Breda | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Breda. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function BredaSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Breda naar Schiphol of Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij begeleiden senioren vanaf hun voordeur in Breda naar elke gewenste luchthaven, zoals Schiphol of Eindhoven. We helpen bij het inchecken, de security en reizen indien gewenst mee tot aan de eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Breda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zijn gespecialiseerd in ondersteuning voor minder mobiele ouderen. We regelen vliegveld assistentie en zorgen voor naadloos vervoer vanaf uw woning in Breda."
        }
      },
      {
        "@type": "Question",
        "name": "Komen jullie voor een kennismaking ook langs in Breda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Voor we een reis plannen, komen we graag bij u thuis in Breda langs voor een vrijblijvend kennismakingsgesprek om uw wensen en eventuele zorgen te bespreken."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit volledig voor u coördineren, zodat u comfortabel en zonder onnodige inspanning bij de gate aankomt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in de regio Breda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, we hebben veel ervaring met het begeleiden van reizigers met beginnende dementie. Onze begeleiders bieden de nodige structuur en rust om de reis zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben voor vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor sommige aandoeningen is een medische verklaring (Fit to Fly) verplicht. We adviseren u hierover en helpen u bij de aanvraag bij uw arts in Breda."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Breda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van de duur van de begeleiding. We werken met transparante tarieven en maken tijdens de kennismaking in Breda een offerte op maat."
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
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Breda
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Breda of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in West-Brabant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Breda: 06-18769492
                </a>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
                >
                  Stuur een bericht
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1634503704152-4740702d75ee?w=800&q=80"
                alt="Breda Grote Kerk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Breda?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Breda (of omgeving zoals Etten-Leur, Roosendaal, Oosterhout) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio West-Brabant goed, wat zorgt voor een zorgeloze start van uw reis via Schiphol of Eindhoven Airport.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cultuurreis, familiebezoek of een zonvakantie, wij passen de begeleiding aan op uw persoonlijke wensen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                Geen zorgen over bagage, treinen of inchecken; uw persoonlijke begeleider zorgt ervoor dat alles soepel verloopt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Breda</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("medische verklaring") && (
                    <> <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">Lees meer over de medische verklaring.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Breda</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Breda.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
