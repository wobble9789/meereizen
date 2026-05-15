import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Groningen | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Groningen. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function GroningenSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Word ik thuis in Groningen opgehaald voor mijn reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze begeleider komt op de afgesproken tijd naar uw woning in Groningen, Haren of elders in de regio. We helpen met de bagage en reizen samen naar Groningen Airport Eelde, Schiphol of een andere bestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Groningen Airport Eelde?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij begeleiden senioren vanaf hun huis naar Groningen Airport Eelde (GRQ), helpen bij het inchecken en de security, en reizen desgewenst mee naar uw vakantiebestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook ondersteuning voor senioren met dementie in Groningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen in de regio Groningen. Onze begeleiders bieden rust, structuur en constante nabijheid."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik vliegveld assistentie aan voor een vlucht vanaf Eelde of Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie dient minimaal 48 uur voor vertrek aangevraagd te worden bij de luchtvaartmaatschappij. Wij kunnen dit volledige proces voor u uit handen nemen zodat u zorgeloos op reis gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Is er vooraf een kennismaking in Groningen mogelijk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Voor we een reis plannen, komen we graag bij u thuis in Groningen langs voor een vrijblijvend kennismakingsgesprek om uw wensen en eventuele beperkingen te bespreken."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met een rollator vanaf Groningen Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizen met een rollator is geen probleem. Wij regelen de logistiek op de luchthaven zodat u uw rollator kunt gebruiken tot aan de gate of het vliegtuig."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Groningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten hangen af van de duur en intensiteit van de begeleiding. We werken met transparante tarieven en maken na de kennismaking in Groningen een offerte op maat voor u."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met parkinson vanuit Groningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Wij ondersteunen senioren met Parkinson door rust te bewaren, te helpen bij de logistiek en te zorgen voor tijdige medicatie-inname tijdens de reis vanaf Groningen of Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen na een operatie veilig voor senioren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen wel, mits uw arts akkoord is. Wij bieden extra fysieke ondersteuning en zorgen voor een ontspannen reistempo om uw herstel niet in de weg te zitten."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik regelen voor medicijnen op reis vanuit Groningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht en eventueel een medische verklaring bij u te hebben. Wij helpen u graag bij de voorbereiding hiervan."
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
                Reisbegeleiding voor ouderen in Groningen
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Groningen of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de stad en omliggende regio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Groningen: 06-18769492
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
                src="https://images.unsplash.com/photo-1594911776100-8430f8976662?w=800&q=80"
                alt="Groningen Martinitoren"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Groningen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Groningen (of omgeving zoals Haren, Bedum, Hoogezand) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Groningen goed en zorgen voor een ontspannen start van uw vakantie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een weekendje weg in Nederland of een verre vliegreis, wij passen ons tempo aan op dat van u.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ontlasting voor mantelzorgers</h3>
              <p className="text-gray-600">
                Geef uw kinderen of naasten rust; wij nemen de zorg en organisatie volledig uit handen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Groningen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.toLowerCase().includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("medicijnen") && (
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
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Groningen</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Groningen.
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
