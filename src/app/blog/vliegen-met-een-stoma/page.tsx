import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een stoma: Praktische tips voor senioren | Vliegklaar',
  description: 'Ziet u op tegen vliegen met een stoma? Lees onze praktische tips over voorbereiding, de security controle en comfort aan boord voor een zorgeloze vliegreis.',
};

export default function VliegenMetStomaPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik de security medewerker vertellen dat ik een stoma heb?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is niet verplicht, maar het kan helpen om ongemak bij de bodyscan te voorkomen. U kunt een 'travel card' of stoma-pasje laten zien aan de beveiliger om discreet aan te geven dat u een stoma draagt."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik stoma-materiaal en schaartjes meenemen in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stoma-materiaal mag onbeperkt mee in de handbagage. Voor stomaschaartjes geldt dat deze vaak een afgeronde punt moeten hebben en het blad korter dan 6 cm moet zijn. Knip voor de zekerheid uw reserveplakken alvast thuis op maat."
        }
      },
      {
        "@type": "Question",
        "name": "Kan een stomazakje knappen door de luchtdruk in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, stomazakjes zijn ontworpen om de drukverschillen in de cabine te weerstaan. Wel kan er door de druk iets meer gasvorming optreden. Gebruik een zakje met een goed filter om lucht te laten ontsnappen."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een stoma: Zo gaat u met vertrouwen op reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een stoma roept bij veel senioren vragen op. Kan het zakje gaan lekken door de luchtdruk? Hoe reageert de beveiliging? Met de juiste voorbereiding is vliegen met een stoma echter uitstekend mogelijk en veilig.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1200&q=80"
            alt="Ontspannen reiziger in een vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Voorbereiding: De handbagage-check</h2>
            <p>
              De belangrijkste regel bij vliegen met een stoma: verdeel uw materiaal. Zorg dat u voldoende reservemateriaal in uw handbagage heeft voor het geval uw ruimbagage vertraagd is.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dubbele hoeveelheid:</strong> Neem twee keer zoveel materiaal mee als u normaal gesproken nodig heeft.</li>
              <li><strong>Pre-cut:</strong> Knip de huidplakken thuis alvast op maat. Zo hoeft u geen schaartje door de security te loodsen.</li>
              <li><strong>Discreet setje:</strong> Maak een klein tasje met een nieuwe plak, zakje en reinigingsdoekjes dat u makkelijk meeneemt naar het vliegtuigtoilet.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Het Stomapaspoort</h2>
            <p>
              Vraag bij uw stomaverpleegkundige of leverancier om een internationaal reisbewijs of stomapaspoort. Hierin staat in meerdere talen uitgelegd dat u medische hulpmiddelen bij u draagt. Dit is zeer handig bij de douane en security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. De Security Controle</h2>
            <p>
              Moderne bodyscan-apparatuur op vliegvelden zoals Schiphol kan een stomazakje signaleren als een onbekend object. Dit is geen reden tot paniek. De beveiliging is hieraan gewend.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Discretie:</strong> U kunt de beveiliger vooraf discreet inlichten of uw stomapasje tonen.</li>
              <li><strong>Handmatige controle:</strong> Als u gefouilleerd wordt, gebeurt dit over de kleding heen. U kunt vragen om een privécabine als u zich daar prettiger bij voelt.</li>
              <li><strong>Vloeistoffen:</strong> Reinigingslotions vallen onder de 100ml regel, tenzij u een medische verklaring heeft voor grotere verpakkingen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
            <p>
              De luchtdruk in de cabine heeft geen invloed op de hechting van uw stoma, maar kan wel voor extra gasvorming zorgen. Let daarom op uw dieet vlak voor en tijdens de vlucht. Vermijd koolzuurhoudende dranken en gasvormende voeding zoals bonen of kool.
            </p>
            <p>
              Kies bij het inchecken bij voorkeur een stoel aan het gangpad en dicht bij een toilet. Dit geeft rust, wetende dat u er snel en makkelijk bij kunt.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos reizen met begeleiding</h2>
            <p className="text-center italic">
              Vindt u het toch spannend om alleen te vliegen met een stoma? Onze reisbegeleiders bieden medische ondersteuning en emotionele rust, zodat u zich volledig kunt concentreren op het plezier van de reis.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Bekijk hoe wij u kunnen helpen
              </Link>
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Vliegen met een stoma: Praktische tips voor senioren",
              "description": "Een complete gids voor senioren over vliegen met een stoma, inclusief tips voor handbagage, security en comfort tijdens de vlucht.",
              "image": "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1200&q=80",
              "author": {
                "@type": "Organization",
                "name": "Vliegklaar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vliegklaar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vliegklaar.nl/logo.png"
                }
              },
              "datePublished": "2026-05-17"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </article>
    </main>
  );
}
