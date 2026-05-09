import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Eindhoven | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in de regio Eindhoven. Wij helpen u veilig en comfortabel op reis vanaf Eindhoven Airport of elders.',
};

export default function EindhovenSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Veel van onze klanten in de regio Eindhoven vliegen vanaf de lokale luchthaven. Wij helpen bij het inchecken, de security en begeleiden u tot aan de gate of zelfs in het vliegtuig indien gewenst."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik opgehaald worden in omliggende plaatsen zoals Veldhoven of Best?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze begeleiders halen u direct bij uw voordeur op in Eindhoven en alle omliggende gemeenten in Zuidoost-Brabant. U hoeft zelf dus geen taxi of vervoer te regelen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegveld assistentie op Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eindhoven Airport biedt gratis assistentie voor minder mobiele reizigers. Wij raden aan dit minimaal 48 uur van tevoren aan te vragen. Onze begeleiders kunnen u helpen bij de coördinatie hiervan."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er bij vertraging op Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij vertraging blijft uw persoonlijke begeleider gewoon bij u. We zoeken een rustige plek op de luchthaven voor een kopje koffie en houden de vluchtinformatie nauwlettend voor u in de gaten."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in de regio Eindhoven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het ondersteunen van reizigers met geheugenproblemen. Onze begeleiders bieden de nodige rust en structuur tijdens de gehele reis."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een rollator mogelijk vanaf Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zorgen dat uw rollator mee kan en dat u op de luchthaven de juiste ondersteuning krijgt bij het instappen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose in Eindhoven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op Eindhoven Airport. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met medicijnen mee op reis nemen vanuit Eindhoven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht (AMO) bij u te hebben. Onze begeleiders helpen u bij de voorbereiding zodat u zorgeloos door de security op de luchthaven komt."
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
                Reisbegeleiding voor ouderen in Eindhoven
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Eindhoven of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio Brainport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Eindhoven: 06-18769492
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
                src="https://images.unsplash.com/photo-1578301135243-7f7228a6f3ca?w=800&q=80"
                alt="Eindhoven Stadhuisplein"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Eindhoven?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Eindhoven (of Veldhoven, Best, Helmond) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Eindhoven Airport Expert</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen Eindhoven Airport en de regio door en door, wat zorgt for een vlotte start van uw vakantie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk Begeleiding</h3>
              <p className="text-gray-600">
                Of het nu gaat om een overwintering in Spanje of een stedentrip, wij passen de begeleiding aan op uw tempo.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                Met Vliegklaar reist u zonder zorgen over bagage of ingewikkelde procedures op de luchthaven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen over reisbegeleiding in Eindhoven</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">In ons blog leest u precies hoe u vliegveld assistentie aanvraagt.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees meer over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Lees meer over vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk onze tips for medicijnen op reis.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Eindhoven</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis vanaf of naar Eindhoven? Bel ons voor een vrijblijvend adviesgesprek.
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
