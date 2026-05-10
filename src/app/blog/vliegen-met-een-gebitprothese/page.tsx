import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Gebitsprothese: Tips & Advies | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees onze praktische tips over luchthavenbeveiliging, comfort tijdens de vlucht en noodzakelijke benodigdheden.',
};

export default function VliegenMetGebitsprothesePage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de beveiliging op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u hoeft uw gebitsprothese niet uit te doen bij de security scan. De moderne scanners zijn ingesteld op medische hulpmiddelen en protheses. Mocht er toch een melding zijn, dan kunt u dit discreet aangeven bij de beveiliger."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de luchtdruk in het vliegtuig invloed hebben op mijn gebit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De veranderende luchtdruk kan er soms voor zorgen dat een prothese iets minder vast zit door uitdroging van de mond. Het is belangrijk om goed gehydrateerd te blijven en eventueel een extra sterke kleefpasta te gebruiken."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik meenemen voor mijn gebitsprothese in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neem altijd een reisverpakking kleefpasta, reinigingstabletten en een stevig gebitsbakje mee in uw handbagage. Zo kunt u ook bij vertraging of verlies van ruimbagage uw gebit verzorgen."
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
            Vliegen met een Gebitsprothese: Zorgeloos op Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren vragen zich af of een kunstgebit voor problemen zorgt bij de douane of tijdens een lange vlucht. In dit artikel delen we praktische tips voor reizigers met een gebitsprothese.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Zorgeloos lachen op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Security op het vliegveld</h2>
            <p>
              Een van de meest gestelde vragen is of het kunstgebit uit moet bij de metaaldetector. Het korte antwoord is: <strong>nee</strong>. Gebitsprotheses bevatten meestal geen metalen die het alarm doen afgaan. Mocht u een frameprothese met metaal hebben, dan herkennen de moderne scanners dit als een medisch hulpmiddel. U hoeft zich hier geen zorgen over te maken.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Comfort tijdens de vlucht</h2>
            <p>
              De lucht in een vliegtuig is erg droog. Dit kan leiden tot een droge mond, waardoor uw prothese minder goed kan gaan zitten.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Drink voldoende water:</strong> Dit houdt het tandvlees gehydrateerd.</li>
              <li><strong>Goede kleefpasta:</strong> Gebruik voor de zekerheid een kwalitatieve kleefpasta voor extra houvast tijdens de maaltijden aan boord.</li>
              <li><strong>Mijd extreem plakkerig voedsel:</strong> Vliegtuigmaaltijden kunnen soms taai zijn; wees voorzichtig met harde broodjes of plakkerige snacks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wat moet er in de handbagage?</h2>
            <p>Het is essentieel om uw verzorgingsproducten voor uw gebit in uw handbagage te houden. Mocht uw koffer onverhoopt later aankomen, dan kunt u toch uw gebit reinigen.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Een stevig bewaardoosje (gebitsbakje).</li>
              <li>Reisverpakking reinigingstabletten.</li>
              <li>Een tandenborstel specifiek voor protheses.</li>
              <li>Kleine tube kleefpasta (maximaal 100ml voor de security).</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Extra zekerheid nodig?</h2>
            <p>
              Ziet u op tegen de reis en wilt u dat iemand u ondersteunt bij de praktische zaken op het vliegveld? Onze reisbegeleiders helpen u graag bij elke stap van uw reis.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="text-primary-600 font-bold hover:underline">
                Neem contact op voor de mogelijkheden &rarr;
              </Link>
            </div>
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
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Vliegen met een Gebitsprothese: Tips & Advies",
              "description": "Tips voor senioren die vliegen met een kunstgebit. Over security, handbagage en comfort aan boord.",
              "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
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
              "datePublished": "2026-05-10"
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
