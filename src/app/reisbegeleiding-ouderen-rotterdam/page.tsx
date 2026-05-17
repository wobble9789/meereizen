import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Rotterdam | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Rotterdam. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function RotterdamSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Rotterdam en omliggende gemeenten zoals Schiedam, Vlaardingen en Capelle aan den IJssel."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met parkinson vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met parkinson vraagt om een zorgvuldige planning rondom medicatie-inname en mobiliteit. Onze begeleiders bieden de nodige ondersteuning en zorgen voor een rustig tempo op de luchthaven van Rotterdam of Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is een medisch begeleider voor senioren tijdens het vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een medisch begeleider of reisverpleegkundige biedt medische ondersteuning tijdens de vlucht, zoals het toedienen van medicatie, wondverzorging of monitoring van vitale functies. Vliegklaar werkt samen met zorgprofessionals om deze gespecialiseerde hulp te coördineren voor reizigers uit Rotterdam."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen senioren veilig alleen reizen vanuit Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veilig alleen reizen is mogelijk met de juiste voorbereiding. Vliegklaar biedt de nodige back-up en begeleiding tot aan de gate of zelfs tot aan de eindbestemming, zodat u nooit echt alleen bent. Lees onze tips voor veilig alleen reizen als senior."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding voor senioren met hartklachten in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Voor senioren met hartklachten bieden wij een rustig reistempo en ondersteuning bij alle fysiek inspannende onderdelen op de luchthaven. Wij zorgen dat u veilig en ontspannen op uw bestemming aankomt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik vliegveld assistentie aan voor een reis vanuit Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie op Rotterdam The Hague Airport dient minimaal 48 uur van tevoren aangevraagd te worden via uw luchtvaartmaatschappij. Wilt u precies weten hoe dit werkt? Lees onze gids over vliegveld assistentie aanvragen."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook vanaf Rotterdam The Hague Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, wij begeleiden senioren vanaf huis naar Rotterdam The Hague Airport (RTM), Schiphol of andere luchthavens, inclusief hulp bij het inchecken en de security."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van uw specifieke wensen en de duur van de reis. We bieden altijd een vrijblijvende offerte op maat na een kennismakingsgesprek in Rotterdam."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de begeleider ook helpen bij medische behoeften tijdens de vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze begeleiders bieden praktische en emotionele ondersteuning. Voor specifieke medische handelingen werken we samen met gespecialiseerde zorgpartners of stemmen we af op uw behoeften."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe wordt de veiligheid van de senior gewaarborgd tijdens de reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door constante persoonlijke aanwezigheid, hulp bij navigatie op drukke vliegvelden en het overnemen van alle logistieke zorgen, zodat de reiziger zich volledig veilig en ontspannen voelt."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren met dementie in de regio Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben specifieke ervaring met het begeleiden van senioren met beginnende dementie of geheugenproblemen. Onze begeleiders bieden structuur en rust vanaf het vertrek in Rotterdam tot de aankomst op de bestemming. Lees meer in ons artikel over reizen met dementie."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk bij vliegen met artrose in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizigers met artrose hebben vaak baat bij extra ondersteuning en het beperken van loopafstanden. Wij regelen de juiste assistentie op de luchthaven en zorgen voor een comfortabel verloop van uw reis vanaf uw voordeur in Rotterdam."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met medicijnen mee op reis nemen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is essentieel om uw medicatie goed voor te bereiden, inclusief een actueel medicatieoverzicht en eventuele verklaringen. Onze begeleiders kunnen u helpen herinneren aan uw innameschema tijdens de reis."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook bij vliegen met een rollator in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij begeleiden regelmatig senioren die een rollator gebruiken. We regelen de logistiek op Rotterdam The Hague Airport en Schiphol, zodat uw rollator veilig mee gaat tot aan de gate of in het ruim."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben voor een vlucht vanuit Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor bepaalde medische condities of zuurstofgebruik is een 'Fit to Fly' verklaring nodig. Wij adviseren u graag over de specifieke eisen van uw luchtvaartmaatschappij."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren die vliegen met zuurstof in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben ervaring met het begeleiden van reizigers die afhankelijk zijn van extra zuurstof. Wij helpen bij het aanvragen van de nodige medische toestemming bij de luchtvaartmaatschappij en zorgen dat de apparatuur correct wordt afgehandeld op Rotterdam The Hague Airport of Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een pacemaker vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans op de luchthaven. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ondersteuning bij een tussenstop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een tussenstop kan vermoeiend zijn voor senioren. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates en voldoende overstaptijd te plannen. Onze begeleiders kunnen u hierbij volledig ondersteunen, zodat u rustig kunt overstappen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe gaan jullie om met een vertraagde vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een vluchtvertraging kan voor stress zorgen. Wij blijven bij u, regelen de communicatie met de luchtvaartmaatschappij en zorgen dat u comfortabel kunt wachten. Bij lange vertragingen coördineren wij eventuele extra zorg of overnachtingen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de regels voor reizen binnen het Schengengebied in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026 zijn er enkele wijzigingen in de grenscontroles en identificatie binnen Europa. Hoewel u vrij kunt reizen tussen Schengenlanden, is een geldig paspoort of ID-kaart altijd verplicht. Wij houden de actuele regels voor u in de gaten."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook begeleiden bij vliegen met diabetes vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles op de luchthaven van Rotterdam of Schiphol komt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegangst voor senioren in Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid, uitleg over de geluiden van het vliegtuig en afleiding tijdens de vlucht om uw reis vanaf Rotterdam The Hague Airport zo comfortabel mogelijk te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook begeleiden bij vliegen met een kunstgebit vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vliegen met een kunstgebit of prothese is geen enkel probleem, maar het kan bij de security soms vragen oproepen. Onze begeleiders weten precies hoe u hier discreet mee omgaat en geven u praktische tips voor comfort tijdens een lange vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegen met bloedverdunners vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Als u bloedverdunners gebruikt, is het belangrijk om extra aandacht te besteden aan hydratatie en beweging tijdens de vlucht om trombose te voorkomen. Wij ondersteunen u bij het op tijd innemen van uw medicatie en helpen u met eenvoudige oefeningen in het vliegtuig."
        }
      },
      {
        "@type": "Question",
        "name": "Can I fly with rheumatism or other joint complaints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met reuma is heel goed mogelijk. Wij adviseren u om tijdens de vlucht regelmatig te bewegen om stijfheid te voorkomen en eventueel vliegveld assistentie aan te vragen voor de afstanden op de luchthaven. Onze begeleiders kunnen u hierbij volledig ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Is het veilig om te vliegen met compressiekousen vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor veel senioren is het dragen van compressiekousen juist aan te raden tijdens een vlucht om de bloedsomloop te stimuleren en de kans op trombose te verkleinen. Onze begeleiders kunnen u helpen bij het herinneren van eenvoudige oefeningen tijdens de vlucht om uw benen soepel te houden."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen na een knie- of heupoperatie vanuit de regio Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen na een knie- of heupoperatie is vaak weer mogelijk na 4 tot 6 weken, mits uw chirurg akkoord is. In de regio Rotterdam kunnen wij u begeleiden vanaf uw voordeur tot in het vliegtuig, waarbij we vliegveld assistentie coördineren om fysieke belasting te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie hulp bij valpreventie tijdens een vliegreis vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Veiligheid is onze hoogste prioriteit. Onze begeleiders ondersteunen u fysiek tijdens het lopen op Rotterdam The Hague Airport of Schiphol, adviseren over veilig schoeisel en zorgen dat u stabiel en zonder risico op vallen bij uw gate en bestemming aankomt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met een stoma vanuit de regio Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een stoma is heel goed mogelijk. Wij adviseren u om voldoende reservemateriaal in uw handbagage mee te nemen en een stoma-paspoort bij u te hebben. Onze begeleiders in Rotterdam kunnen u helpen bij de voorbereiding en zorgen voor een ontspannen reis vanaf Rotterdam The Hague Airport of Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een hoge bloeddruk veilig vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over het algemeen is vliegen met een goed ingestelde bloeddruk veilig. We raden aan om voor vertrek uw arts te raadplegen, uw medicatie in uw handbagage te bewaren en tijdens de vlucht voldoende water te drinken. Onze begeleiders ondersteunen u graag bij een ontspannen reiservaring."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen na een galblaasoperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meestal is vliegen na een galblaasoperatie na 1 tot 2 weken weer veilig, afhankelijk van het type ingreep. Onze begeleiders kunnen u ondersteunen tijdens de reis vanaf Rotterdam om fysieke inspanning te minimaliseren en uw comfort te waarborgen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe regel ik het vervoer van een rolstoel in het vliegtuig vanaf Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een rolstoel moet minimaal 48 uur voor vertrek worden aangemeld bij de luchtvaartmaatschappij met de afmetingen en het gewicht. Vanaf Rotterdam The Hague Airport kunt u vaak tot aan de gate in uw eigen rolstoel blijven. Onze begeleiders regelen alle details voor u."
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
                Reisbegeleiding voor ouderen in Rotterdam
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Rotterdam of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de Maasstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Rotterdam: 06-18769492
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
                src="https://images.unsplash.com/photo-1570138936647-798836480e66?w=800&q=80"
                alt="Rotterdam Skyline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Rotterdam?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Rotterdam (of omgeving zoals Schiedam, Vlaardingen, Capelle aan den IJssel) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Rotterdam en Rotterdam The Hague Airport door en door.
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen over reisbegeleiding in Rotterdam</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees hier de volledige gids.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("hartklachten") && (
                    <> <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 hover:underline">Lees meer over veilig vliegen met hartklachten.</Link></>
                  )}
                  {faq.name.includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met parkinson.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk de checklist voor medicijnen.</Link></>
                  )}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees onze gids over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("medische verklaring") && (
                    <> <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">Lees meer over de medische verklaring.</Link></>
                  )}
                  {faq.name.includes("zuurstof") && (
                    <> <Link href="/blog/vliegen-met-zuurstof" className="text-primary-600 hover:underline">Lees onze gids over vliegen met zuurstof.</Link></>
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
                  {faq.name.includes("alleen reizen") && (
                    <> <Link href="/blog/veilig-alleen-reizen-senior" className="text-primary-600 hover:underline">Lees onze tips voor veilig alleen reizen.</Link></>
                  )}
                  {faq.name.includes("Schengen") && (
                    <> <Link href="/blog/schengen-regels-2026" className="text-primary-600 hover:underline">Lees meer over de Schengen-regels in 2026.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees meer over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.includes("jetlag") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-jetlag-als-senior" className="text-primary-600 hover:underline">Lees onze tips tegen een jetlag.</Link></>
                  )}
                  {faq.name.includes("gebit") && (
                    <> <Link href="/blog/vliegen-met-een-gebit-vliegveld-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een gebit of prothese.</Link></>
                  )}
                  {faq.name.includes("bloedverdunners") && (
                    <> <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met bloedverdunners.</Link></>
                  )}
                  {faq.name.includes("reuma") && (
                    <> <Link href="/blog/vliegen-met-reuma" className="text-primary-600 hover:underline">Lees onze gids over vliegen met reuma.</Link></>
                  )}
                  {faq.name.includes("compressiekousen") && (
                    <> <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 hover:underline">Lees meer over vliegen met compressiekousen.</Link></>
                  )}
                  {faq.name.includes("knie- of heupoperatie") && (
                    <> <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 hover:underline">Lees meer over vliegen na een knie- of heupoperatie.</Link></>
                  )}
                  {faq.name.includes("valpreventie") && (
                    <> <Link href="/blog/valpreventie-op-vakantie" className="text-primary-600 hover:underline">Bekijk onze tips voor valpreventie op reis.</Link></>
                  )}
                  {faq.name.includes("stoma") && (
                    <> <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 hover:underline">Lees meer over vliegen met een stoma.</Link></>
                  )}
                  {faq.name.includes("bloeddruk") && (
                    <> <Link href="/blog/vliegen-met-bloeddruk-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een hoge bloeddruk.</Link></>
                  )}
                  {faq.name.includes("galblaasoperatie") && (
                    <> <Link href="/blog/vliegen-na-galblaasoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een galblaasoperatie.</Link></>
                  )}
                  {faq.name.includes("rolstoel") && (
                    <> <Link href="/blog/vliegen-met-een-rolstoel" className="text-primary-600 hover:underline">Lees onze gids over vliegen met een rolstoel.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Rotterdam</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Rotterdam.
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
