import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tips voor vliegen met een gebit | Comfortabel Reizen | Vliegklaar',
  description: 'Reist u met een kunstgebit of prothese? Lees onze praktische tips voor vliegen met een gebit. Van security checks tot mondverzorging onderweg.',
};

export default function VliegenMetGebitTipsPage() {
  const publishDate = "2026-05-13";
  const pageTitle = "Tips voor vliegen met een gebit: Zorgeloos op reis";

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren maken zich zorgen over vliegen met een kunstgebit. Gaat het alarm af bij de security? Wat als mijn gebit los gaat zitten door de luchtdruk? In dit artikel geven we praktische tips zodat u met een glimlach het vliegtuig in stapt.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren die lachen op vakantie"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. De Security Check en uw gebit</h2>
            <p>
              Een van de meest gestelde vragen is of een kunstgebit het alarm van de metaaldetector activeert. Het antwoord is bijna altijd: nee. De meeste moderne gebitsprotheses bevatten geen metaal dat gevoelig genoeg is om de poortjes te laten afgaan. Mocht u een frameprothese hebben met metaal, dan is dit ook zelden een probleem. U hoeft uw gebit nooit uit te doen bij de controle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Luchtdruk en pasvorm</h2>
            <p>
              Tijdens het vliegen verandert de luchtdruk in de cabine. Hoewel dit geen direct effect heeft op het materiaal van uw gebit, kunnen uw tandvlees en kaken soms licht opzetten door uitdroging of de druk. Hierdoor kan uw gebit minder comfortabel zitten.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gebruik kleefpasta:</strong> Neem een kleine tube kleefpasta mee in uw handbagage (maximaal 100ml) voor extra zekerheid tijdens de vlucht.</li>
              <li><strong>Blijf drinken:</strong> Een droge mond zorgt voor minder natuurlijke zuigkracht. Drink voldoende water om uw mond vochtig te houden.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Hygiëne in de lucht</h2>
            <p>
              Op lange vluchten is het prettig om uw gebit even te kunnen reinigen. Doe dit bij voorkeur in het toilet met drinkwater uit een flesje in plaats van kraanwater uit het vliegtuig, voor optimale hygiëne.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Belangrijke checklist voor uw handbagage:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Een stevig gebitbakje (voor als u het gebit tijdens een nachtvlucht uit wilt doen).</li>
              <li>Reisformaat tandenborstel en prothesepasta.</li>
              <li>Kleefpasta (let op de 100ml regel).</li>
              <li>Een kopie van uw prothesepaspoort of gegevens van uw tandarts/tandtechnicus.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hulp nodig bij uw reis?</h2>
            <p>
              Ziet u op tegen de logistiek van het reizen of de drukte op het vliegveld? Vliegklaar biedt persoonlijke <Link href="/reisbegeleiding-ouderen" className="text-primary-600 font-bold hover:underline">reisbegeleiding voor senioren</Link>. Onze begeleiders helpen u met de bagage, de security en zorgen dat u zorgeloos op uw bestemming aankomt.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Vliegen met een gebit vraagt slechts een kleine voorbereiding. Met de juiste spullen in uw handbagage en onze tips kunt u met een gerust hart genieten van uw vliegreis.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vragen over begeleid reizen? Klik hier.
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
              "headline": pageTitle,
              "description": "Praktische tips voor senioren die vliegen met een kunstgebit of prothese. Informatie over security, luchtdruk en handbagage.",
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
              "datePublished": publishDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://vliegklaar.nl/blog/tips-voor-vliegen-met-een-gebit"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Gaat het alarm af bij de security door mijn kunstgebit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nee, de metaaldetectoren op vliegvelden gaan doorgaans niet af voor een kunstgebit of frameprothese."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moet ik mijn gebit uitdoen bij de douane?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nee, u hoeft uw gebit nooit uit te doen voor de beveiligingscontrole of paspoortcontrole."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mag kleefpasta mee in de handbagage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, mits de tube niet groter is dan 100ml. Het valt onder de vloeistoffenregels."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </main>
  );
}
