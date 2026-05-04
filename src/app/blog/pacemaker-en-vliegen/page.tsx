import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Pacemaker: Veilig en Zorgeloos op Reis | Vliegklaar',
  description: 'Kan ik veilig vliegen met een pacemaker? Lees onze praktische tips over security-checks, medische documentatie en vliegveldcontroles voor senioren.',
};

export default function VliegenMetPacemakerPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Pacemaker: Waar moet u op letten?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een pacemaker of ICD roept vaak vragen op. Mag u wel door de beveiligingspoortjes? Beïnvloedt de apparatuur in het vliegtuig uw pacemaker? Het korte antwoord is: ja, u kunt veilig vliegen. Met een paar eenvoudige voorzorgsmaatregelen gaat u met een gerust hart op pad.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Medische zorg en technologie concept"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Het Pacemaker-paspoort: Uw belangrijkste reisdocument</h2>
            <p>
              Uw pacemaker- of ICD-identificatiekaart is essentieel. Draag dit paspoort altijd bij u in uw handbagage of portemonnee. Hierop staan de technische details van uw apparaat en de contactgegevens van uw cardioloog.
            </p>
            <p>
              Toon dit pasje direct bij de veiligheidscontrole op het vliegveld. Het personeel weet dan precies welke procedures zij moeten volgen.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Reisbegeleiding voor Extra Zekerheid</h2>
            <p>
              Vindt u de drukte op het vliegveld of de procedures bij de beveiliging spannend? Onze reisbegeleiders zijn bekend met medische protocollen en zorgen voor een vlotte afhandeling bij de douane, zodat u zich nergens zorgen over hoeft te maken.
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk hoe wij u helpen.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. De Security Check en Detectiepoortjes</h2>
            <p>
              Hoewel moderne pacemakers goed beschermd zijn tegen externe signalen, kunnen de magnetische velden van metaaldetectiepoortjes de instellingen tijdelijk beïnvloeden.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Niet stilstaan:</strong> Loop in een normaal tempo door het poortje. Blijf er nooit in stilstaan.</li>
              <li><strong>Handmatige controle:</strong> U kunt altijd vragen om een handmatige controle (fouilleren). Geef aan dat u een pacemaker heeft en het personeel zal een alternatieve methode gebruiken.</li>
              <li><strong>De handscanner:</strong> Als er een handscanner wordt gebruikt, mag deze niet te lang direct boven de pacemaker worden gehouden. Informeer de beveiliger hierover.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
            <p>
              Aan boord hoeft u zich geen zorgen te maken. De elektronica in het vliegtuig heeft geen invloed op de werking van uw pacemaker. U kunt veilig gebruikmaken van alle faciliteiten aan boord.
            </p>
            <p>
              <strong>Tip voor comfort:</strong> Draag de veiligheidsgordel op een manier die niet direct op de plaats van de pacemaker drukt. U kunt eventueel een klein kussentje of een opgevouwen sjaal tussen de gordel en uw huid leggen voor extra comfort.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Geniet van uw reis</h2>
            <p className="text-center">
              Een pacemaker is bedoeld om u uw vrijheid terug te geven, niet om deze te beperken. Met de juiste informatie en een goede voorbereiding kunt u elke bestemming bereiken.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vragen over uw specifieke situatie?
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
              "headline": "Vliegen met een Pacemaker: Veilig en Zorgeloos op Reis",
              "description": "Alles wat u moet weten over vliegen met een pacemaker: van security-checks tot praktische tips voor onderweg.",
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
              "datePublished": "2026-05-04"
            })
          }}
        />
      </article>
    </main>
  );
}
