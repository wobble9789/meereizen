import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Stoma: Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met een stoma? Lees onze praktische tips voor senioren over voorbereiding, security en comfort tijdens de vlucht voor een zorgeloze reis.',
};

export default function VliegenMetStomaPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag stoma-materiaal mee in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, het is zelfs essentieel om uw stoma-opvangmateriaal in uw handbagage mee te nemen. Zo heeft u het altijd bij de hand, ook als uw ruimbagage vertraagd is. Neem voldoende voorraad mee voor de hele reis plus extra."
        }
      },
      {
        "@type": "Question",
        "name": "Zet de stomazak uit door de luchtdruk in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De luchtdruk in de cabine kan ervoor zorgen dat er iets meer lucht in de zak komt. Moderne stomazakjes hebben echter filters die gas laten ontsnappen. Het is raadzaam om de zak vlak voor het boarden te legen."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn stoma melden bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U bent niet verplicht dit te melden, maar het kan ongemak voorkomen bij een bodyscan of fouillering. Met een internationaal reis-certificaat (stoma-paspoort) kunt u discreet aan het personeel uitleggen wat de stoma is."
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
            Vliegen met een Stoma: Praktische Gids voor Senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een stoma kan in het begin spannend zijn, maar het hoeft uw vakantieplezier absoluut niet in de weg te staan. Met de juiste voorbereiding vliegt u met een gerust en zeker gevoel naar elke bestemming.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1506784911040-578256437d09?w=1200&q=80"
            alt="Ontspannen reiziger in het vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Goede Voorbereiding is het Halve Werk</h2>
            <p>
              Wanneer u als senior gaat vliegen met een stoma, begint de rust bij een goede kofferinhoud. Verdeel uw materialen over uw handbagage en ruimbagage. Mocht er onverhoopt een koffer kwijtraken, dan heeft u in ieder geval uw noodzakelijke spullen bij de hand.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stoma-certificaat:</strong> Vraag bij uw stomavereniging of leverancier om een internationaal reis-certificaat. Dit document legt in meerdere talen uit waarom u medische materialen en een zakje op uw buik draagt.</li>
              <li><strong>Knipwerk vooraf:</strong> Snijd uw huidplakken alvast thuis op maat. Scharen mogen vaak niet mee in de handbagage, en het bespaart u gedoe in een krappe vliegtuig-wc.</li>
              <li><strong>Extra voorraad:</strong> Neem altijd twee keer zoveel materiaal mee als u normaal gesproken in die periode zou gebruiken.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig op de luchthaven?</h2>
            <p>
              Ziet u op tegen de lange rijen of de wandeling naar de gate? Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u discreet bij de security en zorgen dat u ontspannen aan boord gaat. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze diensten.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Passeren van de Security</h2>
            <p>
              De beveiligingscontrole is voor veel stomadragers het meest stressvolle moment. Tegenwoordig zijn luchthavenmedewerkers echter goed getraind. 
            </p>
            <p>
              Als u door een bodyscan gaat, kan de stoma zichtbaar zijn als een &apos;onregelmatigheid&apos;. Toon op dat moment discreet uw stoma-paspoort. U heeft altijd het recht om in een aparte ruimte gecontroleerd te worden als dat nodig is. Wees gerust: de vloeistoffenregel geldt meestal niet voor medische benodigdheden, mits u dit kunt aantonen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tijdens de Vlucht</h2>
            <p>
              Door de verandering in luchtdruk kan er wat meer gasvorming optreden. Dit is volkomen normaal.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eten en drinken:</strong> Vermijd vlak voor en tijdens de vlucht koolzuurhoudende dranken en gasvormende voeding (zoals uien of bonen).</li>
              <li><strong>Kleding:</strong> Draag comfortabele, loszittende kleding. Een strakke riem kan de afvoer naar het zakje belemmeren.</li>
              <li><strong>Hydratatie:</strong> Drink voldoende water, zeker bij een ileostoma, om uitdroging door de droge cabinelucht te voorkomen.</li>
            </ul>
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
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              &quot;Een stoma is geen grens, maar een hulpmiddel om juist weer van het leven en reizen te genieten.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag een vrijblijvend adviesgesprek aan
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
              "headline": "Vliegen met een Stoma: Tips voor Senioren",
              "description": "De ultieme gids voor senioren met een stoma die gaan vliegen. Tips voor security, handbagage en comfort.",
              "image": "https://images.unsplash.com/photo-1506784911040-578256437d09?w=1200&q=80",
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
              "datePublished": "2026-05-08"
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
