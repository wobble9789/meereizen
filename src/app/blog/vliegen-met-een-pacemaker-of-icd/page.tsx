import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Pacemaker of ICD: Veilig door de Security | Vliegklaar',
  description: 'Mag je vliegen met een pacemaker of ICD? Lees onze tips over security checks, medische verklaringen en veilig reizen als senior met hartklachten.',
};

export default function VliegenPacemakerPage() {
  const publishDate = "2026-05-16";
  const pageTitle = "Vliegen met een pacemaker of ICD: Wat u moet weten";

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
            Reizen met een pacemaker of ICD roept vaak vragen op. Mag u wel door de security scan? Wat als de apparatuur invloed heeft op uw hart? In dit artikel leggen we uit hoe u veilig en zorgeloos kunt vliegen met uw hartimplantaat.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Medische zorg en reizen voor senioren"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Is vliegen veilig met een pacemaker of ICD?</h2>
            <p>
              In de meeste gevallen is vliegen met een pacemaker of ICD (Implanteerbare Cardioverter Defibrillator) volkomen veilig. De luchtdruk in de cabine heeft geen invloed op de werking van het apparaat. Het is echter wel belangrijk dat uw hartconditie stabiel genoeg is om te reizen. Overleg daarom altijd eerst met uw cardioloog voor u een ticket boekt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Security checks op de luchthaven</h2>
            <p>
              Dit is het punt waar de meeste senioren tegenop zien: de metaaldetector. Moderne pacemakers en ICD&apos;s zijn goed beschermd tegen interferentie, maar de metalen behuizing kan het alarm van de detectiepoortjes activeren.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Meld het direct:</strong> Geef bij de security-medewerker aan dat u een pacemaker of ICD draagt <em>voordat</em> u door het poortje loopt.</li>
              <li><strong>Pacemakerpasje:</strong> Toon altijd uw originele identificatiepasje van de fabrikant. Dit is uw officiële bewijs.</li>
              <li><strong>Handmatige controle:</strong> U mag vragen om een handmatige controle (fouilleren) in plaats van door de metaaldetector te lopen.</li>
              <li><strong>Handscanners:</strong> Als er een handscanner wordt gebruikt, vraag de medewerker dan om deze niet te lang direct boven het implantaat te houden.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Belangrijke voorbereiding</h2>
            <p>
              Zorg dat u uw pacemakerpasje altijd in uw handbagage heeft, en niet in de koffer die het ruim in gaat. Het is ook verstandig om een kopie van uw meest recente ECG of een korte medische verklaring van uw arts mee te nemen, zeker bij internationale reizen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tijdens de vlucht</h2>
            <p>
              Eenmaal aan boord hoeft u zich geen zorgen te maken over de elektronica van het vliegtuig. Wel is het voor hartpatiënten extra belangrijk om tijdens lange vluchten te blijven bewegen om trombose te voorkomen. Drink voldoende water en loop regelmatig even door het gangpad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Persoonlijke begeleiding nodig?</h2>
            <p>
              Vindt u de drukte en de procedures op de luchthaven stressvol met uw medische achtergrond? De <Link href="/" className="text-primary-600 font-bold hover:underline">reisbegeleiders van Vliegklaar</Link> zijn getraind om senioren met medische behoeften te ondersteunen. Wij nemen de logistieke zorgen uit handen, zodat u zich volledig kunt focussen op uw gezondheid en de reis.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Met een goede voorbereiding en het juiste pasje op zak is een pacemaker geen belemmering om de wereld te ontdekken. Informeer de security, blijf rustig en geniet van uw vlucht!
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Heeft u vragen over reizen met medische behoeften? Wij helpen u graag.
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
              "description": "Veilig vliegen met een pacemaker of ICD. Lees alles over security procedures, het pacemakerpasje en tips voor senioren tijdens de vlucht.",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
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
                "@id": "https://vliegklaar.nl/blog/vliegen-met-een-pacemaker-of-icd"
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
                  "name": "Mag ik door de metaaldetector met een pacemaker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Het wordt aangeraden om niet door de metaaldetector te lopen. Meld uw pacemaker bij de beveiliging en vraag om een handmatige controle (fouilleren)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat moet ik meenemen als ik vlieg met een ICD?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neem altijd uw originele identificatiepasje van de ICD-fabrikant mee en bewaar dit in uw handbagage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Heeft de luchtdruk in het vliegtuig invloed op mijn pacemaker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nee, moderne pacemakers en ICD's zijn ontworpen om normaal te functioneren bij de luchtdrukvariaties in een vliegtuigcabine."
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
