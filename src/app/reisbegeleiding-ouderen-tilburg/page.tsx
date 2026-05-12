import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Tilburg | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Tilburg. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function TilburgSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf vliegveld Eindhoven voor reizigers uit Tilburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Eindhoven Airport is voor Tilburgers een ideaal vertrekpunt. Wij kunnen u vanaf uw voordeur in Tilburg naar de vertrekhal brengen, helpen bij het inchecken en de security, en desgewenst meereizen tot aan uw eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Tilburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Wij zijn gespecialiseerd in het ondersteunen van ouderen die minder mobiel zijn. We regelen assistentie op de luchthaven (zoals een rolstoel) en zorgen dat het vervoer in Tilburg en op de bestemming naadloos aansluit op uw behoeften."
        }
      },
      {
        "@type": "Question",
        "name": "Komen jullie voor een kennismaking ook langs in Tilburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Voor we een reis plannen, komen we graag bij u thuis in Tilburg langs voor een vrijblijvend kennismakingsgesprek. Zo kunnen we uw wensen rustig bespreken in uw eigen vertrouwde omgeving in Noord-Brabant."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen op Eindhoven of Schiphol en comfortabel naar de gate wordt gebracht."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in Tilburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis voor zowel de senior als de familie in Tilburg zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik regelen voor medicijnen op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht (AMO) en eventueel een medische verklaring bij u te hebben. Wij kunnen u helpen bij de voorbereiding hiervan zodat u zorgeloos door de security komt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik assistentie aan voor mijn vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie op de luchthaven vraagt u minimaal 48 uur voor vertrek aan bij uw luchtvaartmaatschappij. Wij kunnen dit volledige proces voor u uit handen nemen zodat alles klaarstaat wanneer wij u ophalen in Tilburg."
        }
      },
      {
        "@type": "Question",
        "name": "Kunt u ook helpen bij vliegen met een pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegangst voor senioren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid, uitleg over de geluiden van het vliegtuig en afleiding tijdens de vlucht om uw reis vanuit Tilburg zo comfortabel mogelijk te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren die kort geleden een ingreep hebben ondergaan, zoals een knie- of heupoperatie. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen."
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
                Reisbegeleiding voor ouderen in Tilburg
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Tilburg of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio Hart van Brabant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel: 06-18769492
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
                src="https://images.unsplash.com/photo-1596431940574-8d940f81be1d?w=800&q=80"
                alt="Tilburg Centrum"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Tilburg?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van Tilburg naar de gate</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Tilburg, Berkel-Enschot of Udenhout en begeleiden u gedurende de hele reis via Eindhoven, Schiphol of Brussel.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijke kennismaking</h3>
              <p className="text-gray-600">
                Onze begeleiders komen graag bij u langs in Tilburg om alles rustig voor te bereiden, zodat u met een gerust hart vertrekt.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Specialistische zorg</h3>
              <p className="text-gray-600">
                Of het nu gaat om reizen met dementie, artrose of na een operatie; wij hebben de ervaring om u veilig te begeleiden.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ontzorging</h3>
              <p className="text-gray-600">
                Van bagage tot inchecken en assistentie aanvragen; wij regelen alles zodat u alleen maar hoeft te genieten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Tilburg</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <div className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  <div className="mt-2 text-sm">
                    {faq.name.includes("rolstoel") && (
                      <Link href="/blog/rolstoel-op-het-vliegveld" className="text-primary-600 hover:underline">→ Bekijk tips voor rolstoel op het vliegveld.</Link>
                    )}
                    {faq.name.includes("artrose") && (
                      <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">→ Bekijk tips voor vliegen met artrose.</Link>
                    )}
                    {faq.name.includes("medicijnen") && (
                      <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">→ Bekijk tips voor medicijnen op reis.</Link>
                    )}
                    {faq.name.includes("vliegen na een operatie") && (
                      <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">→ Lees meer over veilig vliegen na een operatie.</Link>
                    )}
                    {faq.name.includes("dementie") && (
                      <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">→ Lees over reizen met dementie.</Link>
                    )}
                    {faq.name.includes("assistentie") && (
                      <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">→ Lees onze gids voor assistentie aanvragen.</Link>
                    )}
                    {faq.name.includes("pacemaker") && (
                      <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">→ Lees meer over vliegen met een pacemaker.</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Tilburg</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Tilburg of de omliggende dorpen.
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
