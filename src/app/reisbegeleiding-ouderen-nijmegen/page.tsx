import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Nijmegen | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Nijmegen. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function NijmegenSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bieden jullie reisbegeleiding in heel Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Vliegklaar biedt persoonlijke begeleiding voor senioren in alle wijken van Nijmegen, van Nijmegen-Centrum en Dukenburg tot aan Nijmegen-Noord (Lent) en omliggende plaatsen zoals Wijchen en Beuningen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik vliegveld assistentie aan voor een reis vanuit Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wanneer u vanaf Schiphol of Weeze vliegt, dient u assistentie minimaal 48 uur van tevoren aan te vragen via uw luchtvaartmaatschappij. Vliegklaar kan dit volledige proces voor u uit handen nemen. Lees onze gids over vliegveld assistentie aanvragen voor meer informatie."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren met dementie in Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen. Onze begeleiders bieden de nodige structuur en rust tijdens de hele reis vanaf uw voordeur in Nijmegen."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een rollator mogelijk vanuit Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zorgen dat uw rollator veilig wordt aangemeld en begeleiden u op de luchthaven zodat u comfortabel naar de gate wordt gebracht."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegen met diabetes vanuit Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reizen met diabetes vraagt om goede planning rondom insuline en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles op de luchthaven komt."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met artrose vanuit Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben vaak baat bij extra assistentie om lange afstanden op vliegvelden te vermijden. Wij coördineren de hulp op de luchthaven zodat u comfortabel bij de gate aankomt."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik regelen voor medicijnen op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht en eventueel een medische verklaring bij u te hebben. Wij ondersteunen u bij de voorbereiding hiervan zodat u zorgeloos door de security komt."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Nijmegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van de bestemming en de gewenste zorg. Na een vrijblijvende kennismaking bij u thuis in Nijmegen maken we een transparante offerte op maat."
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
                Reisbegeleiding voor ouderen in Nijmegen
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in de oudste stad van Nederland en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in Nijmegen en omgeving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Nijmegen: 06-18769492
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
                src="https://images.unsplash.com/photo-1628186255146-5b487c9f8029?w=800&q=80"
                alt="Nijmegen Waalbrug"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Nijmegen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Nijmegen (of omgeving zoals Wijchen, Beuningen, Elst) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Gelderland goed, wat zorgt voor een vertrouwde start van uw reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een familiebezoek over de grens of een zonvakantie, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage, overstappen op treinstations of vliegvelden; wij zijn er voor u.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Nijmegen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees meer over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees meer over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk tips voor medicijnen op reis.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Nijmegen</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Nijmegen.
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
