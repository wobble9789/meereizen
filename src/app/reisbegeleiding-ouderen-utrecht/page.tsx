import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Utrecht | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Utrecht. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function UtrechtSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Word ik thuis in Utrecht opgehaald?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze begeleider komt op de afgesproken tijd naar uw woning in Utrecht, of dit nu in het centrum, Leidsche Rijn of Overvecht is. We helpen met de bagage en reizen samen naar de luchthaven of het treinstation."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij reizen vanaf Utrecht Centraal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Naast vliegreizen begeleiden wij senioren ook bij internationale treinreizen (zoals de ICE of Eurostar) die vertrekken vanaf Utrecht Centraal. We helpen bij het instappen en blijven bij u tot de bestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er vooraf een kennismaking in Utrecht mogelijk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vertrouwen is essentieel. Daarom plannen we voor vertrek altijd een persoonlijke kennismaking bij u thuis in Utrecht. Zo kunt u uw wensen bespreken en de begeleider alvast ontmoeten."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten hangen af van de duur en intensiteit van de begeleiding. We werken met een transparant uurtarief of een vaste pakketprijs voor meerdaagse reizen. Tijdens een kennismaking in Utrecht maken we een offerte op maat."
        }
      },
      {
        "@type": "Question",
        "name": "Can ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren die kort geleden een ingreep hebben ondergaan. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik assistentie aan op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie op de luchthaven vraagt u minimaal 48 uur voor vertrek aan bij uw luchtvaartmaatschappij. Wij kunnen dit volledige proces voor u uit handen nemen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen in de regio Utrecht. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis voor zowel de senior als de familie zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een rollator mogelijk vanaf Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Of u nu vanaf Utrecht Centraal reist of we u naar Schiphol brengen, wij zorgen dat uw rollator mee kan en dat u overal de nodige assistentie krijgt."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen met diabetes vanuit Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik hulp krijgen bij vliegangst in Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze begeleiders zijn getraind om reizigers met vliegangst gerust te stellen en te ondersteunen tijdens de gehele reis. We nemen de tijd om u op uw gemak te stellen."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er speciale voorzieningen voor senioren met gehoorproblemen op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, de meeste luchthavens bieden faciliteiten voor slechthorenden, zoals ringleidingen bij informatiebalies en gates. Wij ondersteunen u ter plaatse om te zorgen dat u geen enkele omroep of belangrijke informatie mist."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik een hulphond meenemen op reis vanuit Utrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, erkende hulphonden mogen vrijwel altijd gratis mee in de cabine. Wij helpen u bij de aanmelding hiervan bij de luchtvaartmaatschappij en zorgen dat de nodige documentatie in orde is voor uw vertrek uit de regio Utrecht."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een tussenstop als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een tussenstop kan vermoeiend zijn. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates, voldoende overstaptijd te plannen en gebruik te maken van lounges voor rust. Onze begeleiders ondersteunen u hierbij volledig."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een vertraagde vlucht als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een vluchtvertraging kan voor stress zorgen. Wij raden aan om contact te houden met de luchtvaartmaatschappij, in een comfortabele lounge te wachten en voldoende rust te nemen. Onze begeleiders regelen bij vertraging alles rondom communicatie en extra zorg."
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
                Reisbegeleiding voor ouderen in Utrecht
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Utrecht of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de Domstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Utrecht: 06-18769492
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
                src="https://images.unsplash.com/photo-1541441589139-446a80491005?w=800&q=80"
                alt="Utrecht Oudegracht"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Utrecht?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Utrecht (of omgeving zoals Zeist, Nieuwegein, Houten) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Utrecht goed en zorgen voor een ontspannen start van uw vakantie.
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
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Utrecht</h2>
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
                  {faq.name.toLowerCase().includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze tips over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("gehoor") && (
                    <> <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met gehoorproblemen.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("hulphond") && (
                    <> <Link href="/blog/vliegen-met-een-hulphond-of-huisdier" className="text-primary-600 hover:underline">Lees meer over vliegen met een hulphond.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("tussenstop") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-tussenstop-als-senior" className="text-primary-600 hover:underline">Lees onze tips over tussenstops.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("vertraagde vlucht") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-vertraagde-vlucht-senior" className="text-primary-600 hover:underline">Lees wat te doen bij een vertraagde vlucht.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Utrecht</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Utrecht.
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
