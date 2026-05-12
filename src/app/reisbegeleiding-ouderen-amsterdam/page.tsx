import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Amsterdam | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Amsterdam. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function AmsterdamSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Amsterdam Schiphol Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Amsterdam Schiphol is ons meest gebruikte startpunt. Wij kunnen u vanaf uw voordeur in Amsterdam naar de vertrekhal brengen, helpen bij het inchecken en de security, en desgewenst meereizen tot aan uw eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Wij zijn gespecialiseerd in het ondersteunen van ouderen die minder mobiel zijn. We regelen assistentie op de luchthaven en zorgen dat het vervoer in Amsterdam en op de bestemming naadloos aansluit op uw behoeften."
        }
      },
      {
        "@type": "Question",
        "name": "Komen jullie voor een kennismaking ook langs in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Voor we een reis plannen, komen we graag bij u thuis in Amsterdam langs voor een vrijblijvend kennismakingsgesprek. Zo kunnen we uw wensen rustig bespreken in uw eigen vertrouwde omgeving."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten hangen af van de duur en intensiteit van de begeleiding. We werken met een transparant uurtarief of een vaste pakketprijs voor meerdaagse reizen. Tijdens een kennismaking in Amsterdam maken we een offerte op maat."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
        }
      },
      {
        "@type": "Question",
        "name": "Kan een begeleider ook helpen bij medische zorg tijdens de reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze begeleiders zijn getraind om te ondersteunen bij dagelijkse taken en medicatieherinneringen. Voor specifieke medische handelingen kijken we samen of we een begeleider met een zorgachtergrond kunnen inzetten."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook ondersteuning bij het boeken van de reis zelf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Naast de fysieke begeleiding kunnen we u ook adviseren bij het uitzoeken van een geschikte accommodatie en vlucht die past bij uw wensen en eventuele beperkingen."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben voor vliegen vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor sommige aandoeningen of apparatuur is een medische verklaring (Fit to Fly) verplicht. We kunnen u helpen te bepalen of dit nodig is en hoe u deze eenvoudig aanvraagt bij uw arts."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe lang van tevoren moet ik een reisbegeleider boeken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We raden aan om minimaal 4 tot 6 weken van tevoren contact met ons op te nemen. Zo hebben we voldoende tijd voor een kennismaking en om alle logistiek rondom de reis zorgvuldig voor te bereiden."
        }
      },
      {
        "@type": "Question",
        "name": "Worden de kosten voor reisbegeleiding vergoed door de verzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In sommige gevallen kan reisbegeleiding (deels) worden vergoed vanuit een PGB (Persoonsgebonden Budget) of een aanvullende zorgverzekering, afhankelijk van uw situatie. We adviseren u hier graag over."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er als ik tijdens de reis ziek word?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uw begeleider is er om u te ondersteunen. Bij ziekte schakelen we direct met lokale artsen en uw verzekering. We blijven bij u tot de situatie stabiel is of tot er een passende oplossing is voor de terugreis."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis voor zowel de senior als de familie zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik een begeleide reis cadeau doen aan mijn ouders in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dat kan zeker. Veel van onze aanvragen komen van kinderen die hun ouders een veilige reis gunnen. We kunnen alles in overleg met u regelen, inclusief de verrassing en de logistiek vanaf hun huis in Amsterdam naar Schiphol."
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
        "name": "Wat moet ik regelen voor medicijnen op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht (AMO) en eventueel een medische verklaring bij u te hebben. Wij kunnen u helpen bij de voorbereiding hiervan zodat u zorgeloos door de security in Amsterdam komt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik assistentie aan op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie op de luchthaven Schiphol vraagt u minimaal 48 uur voor vertrek aan bij uw luchtvaartmaatschappij. Wij kunnen dit volledige proces voor u uit handen nemen."
        }
      },
      {
        "@type": "Question",
        "name": "Kunt u ook helpen bij vliegen met een pacemaker vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans op Schiphol. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook begeleiden bij vliegen met diabetes vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles in Amsterdam komt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met Parkinson vanuit de regio Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben ruime ervaring met het begeleiden van senioren met de ziekte van Parkinson. Wij zorgen voor een rustig tempo, helpen bij de logistiek op Schiphol en ondersteunen bij medicatie-inname op de juiste tijden, zodat u ondanks de beperkingen toch kunt genieten van uw reis."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegangst voor senioren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid, uitleg over de geluiden van het vliegtuig en afleiding tijdens de vlucht om uw reis zo comfortabel mogelijk te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een tussenstop als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een tussenstop kan vermoeiend zijn. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates, voldoende overstaptijd (2-3 uur) te plannen en gebruik te maken van lounges voor rust. Onze begeleiders kunnen u hierbij volledig ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een vertraagde vlucht als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een vluchtvertraging kan voor stress zorgen. Wij raden aan om contact te houden met de luchtvaartmaatschappij, in een comfortabele lounge te wachten en voldoende rust te nemen. Onze begeleiders regelen bij vertraging alles rondom communicatie en extra zorg ter plaatse."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er speciale voorzieningen voor senioren met gehoorproblemen op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Schiphol biedt diverse faciliteiten voor slechthorenden, zoals ringleidingen bij informatiebalies en gates. Wij ondersteunen u ter plaatse om te zorgen dat u geen enkele omroep of belangrijke informatie mist."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik een hulphond meenemen op reis vanuit Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, erkende hulphonden mogen vrijwel altijd gratis mee in de cabine. Wij helpen u bij de aanmelding hiervan bij de luchtvaartmaatschappij en zorgen dat de nodige documentatie voor Schiphol en uw bestemming in orde is."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik een stoma meenemen op reis vanuit Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een stoma is heel goed mogelijk. Wij adviseren u om voldoende reservemateriaal in uw handbagage mee te nemen en een stoma-paspoort bij u te hebben. Onze begeleiders kunnen u helpen bij de voorbereiding en zorgen voor een ontspannen reis vanaf Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een gebit of prothese vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vliegen met een (kunst)gebit of prothese is geen enkel probleem, maar het kan bij de security soms vragen oproepen. Onze begeleiders weten precies hoe u hier discreet mee omgaat en geven u praktische tips voor comfort tijdens een lange vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegen met bloedverdunners vanaf Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Als u bloedverdunners gebruikt, is het belangrijk om extra aandacht te besteden aan hydratatie en beweging tijdens de vlucht om trombose te voorkomen. Wij ondersteunen u bij het op tijd innemen van uw medicatie en helpen u met eenvoudige oefeningen in het vliegtuig."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik doen met vliegangst als senior in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegangst is heel begrijpelijk en komt op alle leeftijden voor. Onze begeleiders bieden een rustige, professionele aanwezigheid en kunnen u helpen met ademhalingsoefeningen en afleiding. Samen zorgen we ervoor dat u toch comfortabel naar uw bestemming reist."
        }
      },
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
                Reisbegeleiding voor ouderen in Amsterdam
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Amsterdam of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in onze hoofdstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Amsterdam: 06-18769492
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
                src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80"
                alt="Amsterdam Grachten"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Amsterdam?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Amsterdam (of omgeving zoals Amstelveen, Zaandam, Hoofddorp) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Amsterdam en Schiphol als hun broekzak, wat zorgt voor een zorgeloze reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cultuurreis, familiebezoek of een zonvakantie, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage, overstappen of navigatie; wij zijn er voor uw rust en veiligheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Amsterdam</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("rolstoel") && (
                    <> <Link href="/blog/rolstoel-op-het-vliegveld" className="text-primary-600 hover:underline">Bekijk tips voor rolstoel op het vliegveld.</Link></>
                  )}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk tips voor medicijnen op reis.</Link></>
                  )}
                  {faq.name.includes("vliegen na een operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("verzekering") && (
                    <> <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">Lees over reisverzekeringen voor senioren.</Link></>
                  )}
                  {faq.name.includes("boeken") && (
                    <> <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 hover:underline">Bekijk de checklist voor senioren.</Link></>
                  )}
                  {faq.name.includes("medische verklaring") && (
                    <> <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">Lees meer over de medische verklaring.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.includes("tussenstop") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-tussenstop-als-senior" className="text-primary-600 hover:underline">Lees onze tips over tussenstops.</Link></>
                  )}
                  {faq.name.includes("vertraagde vlucht") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-vertraagde-vlucht-senior" className="text-primary-600 hover:underline">Lees wat te doen bij een vertraagde vlucht.</Link></>
                  )}
                  {faq.name.includes("gehoor") && (
                    <> <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met gehoorproblemen.</Link></>
                  )}
                  {faq.name.includes("hulphond") && (
                    <> <Link href="/blog/vliegen-met-een-hulphond-of-huisdier" className="text-primary-600 hover:underline">Lees meer over vliegen met een hulphond.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees meer over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("Parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.includes("stoma") && (
                    <> <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 hover:underline">Lees meer over vliegen met een stoma.</Link></>
                  )}
                  {faq.name.includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.includes("gebit") && (
                    <> <Link href="/blog/vliegen-met-een-gebit-vliegveld-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een gebit of prothese.</Link></>
                  )}
                  {faq.name.includes("bloedverdunners") && (
                    <> <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met bloedverdunners.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Amsterdam</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Amsterdam.
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
