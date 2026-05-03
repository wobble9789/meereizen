import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe vraag je een rolstoel aan op het vliegveld? | Vliegklaar',
  description: 'Wilt u een rolstoel lenen op het vliegveld of uw eigen rolstoel meenemen in het vliegtuig? Lees hier precies hoe u dit regelt en waar u op moet letten.',
};

export default function RolstoelVliegveldPage() {
  const publishDate = "2026-05-03";
  const pageTitle = "Hoe vraag je een rolstoel aan op het vliegveld?";

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
            Lange afstanden lopen op een luchthaven kan een flinke uitdaging zijn, zeker als u slecht ter been bent. Gelukkig is het regelen van een rolstoel op het vliegveld goed geregeld, mits u weet wat de stappen zijn.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1200&q=80"
            alt="Rolstoelgebruiker op een moderne luchthaven"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Twee opties: Eigen rolstoel of leenrolstoel</h2>
            <p>
              Wanneer u met een rolstoel reist, zijn er twee scenario&apos;s mogelijk. Of u neemt uw eigen vertrouwde rolstoel mee, of u maakt gebruik van de rolstoelen die op het vliegveld beschikbaar zijn.
            </p>
            <h3 className="text-xl font-bold text-primary-700 mt-4">1. Gebruik maken van een leenrolstoel</h3>
            <p>
              Heeft u thuis geen rolstoel nodig, maar zijn de afstanden op Schiphol of een andere grote luchthaven simpelweg te groot? Dan kunt u gratis gebruik maken van de assistentieservice. Een medewerker brengt u in een rolstoel van het vliegveld naar de gate.
            </p>
            <h3 className="text-xl font-bold text-primary-700 mt-4">2. Uw eigen rolstoel meenemen</h3>
            <p>
              Uw eigen rolstoel mag bijna altijd gratis mee als ruimbagage. U kunt vaak tot aan de deur van het vliegtuig in uw eigen rolstoel blijven zitten. Daarna wordt deze in het vrachtruim geplaatst. Bij aankomst staat uw rolstoel meestal weer klaar bij de vliegtuigdeur.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Belangrijk: Meld het 48 uur van tevoren</h2>
            <p>
              Luchtvaartmaatschappijen hebben een melding nodig om de juiste assistentie te plannen en ruimte te reserveren in het vliegtuig. Doe dit minimaal 48 uur voor vertrek. Geeft u dit niet door, dan loopt u het risico dat er geen hulp beschikbaar is of dat uw rolstoel niet mee mag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Vliegen met een elektrische rolstoel</h2>
            <p>
              Reist u met een elektrische rolstoel? Dan gelden er strengere regels vanwege de accu&apos;s. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meld de afmetingen en het gewicht van de rolstoel aan de maatschappij.</li>
              <li>Geef door welk type accu erin zit (droge cel, gel-accu of lithium). Lithium-accu&apos;s hebben vaak extra beperkingen.</li>
              <li>Zorg dat u weet hoe u de motor kunt ontkoppelen, zodat medewerkers de rolstoel handmatig kunnen verplaatsen in het ruim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hoe ziet de dag van vertrek eruit?</h2>
            <p>
              Meld u bij aankomst op het vliegveld bij de incheckbalie of een gemarkeerd assistentie-meldpunt. Vanaf daar neemt de assistentiedienst het over. Zij helpen u door de beveiliging en zorgen dat u als een van de eersten aan boord gaat (pre-boarding).
            </p>
            <p>
              Lees ook onze uitgebreide gids over <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">het aanvragen van vliegveld assistentie</Link> voor meer details over het proces.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Nog meer zekerheid nodig?</h2>
            <p className="text-center">
              Vliegveld assistenten zijn vaak druk en brengen u van punt A naar B, maar blijven niet bij u wachten. Wilt u persoonlijke begeleiding die de hele reis aan uw zijde staat, helpt met uw jas, een kopje koffie haalt en alle communicatie overneemt?
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/luchthaven-begeleiding"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Bekijk onze persoonlijke luchthaven begeleiding
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
              "description": "Alles wat u moet weten over het regelen van een rolstoel op het vliegveld. Van leenrolstoelen tot het meenemen van uw eigen elektrische rolstoel.",
              "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1200&q=80",
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
                "@id": "https://vliegklaar.nl/blog/rolstoel-op-het-vliegveld"
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
                  "name": "Mag ik mijn eigen rolstoel meenemen in het vliegtuig?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, uw eigen rolstoel mag bijna altijd gratis mee als ruimbagage. Meld dit wel minimaal 48 uur van tevoren aan de luchtvaartmaatschappij."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moet ik betalen voor een rolstoel op het vliegveld?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nee, het gebruik van een rolstoel en de bijbehorende assistentie op de luchthaven is een gratis service voor reizigers met beperkte mobiliteit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kan ik mijn elektrische rolstoel meenemen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, maar er gelden speciale regels voor de accu's. U moet het type accu en de afmetingen van de rolstoel vooraf doorgeven aan de vliegmaatschappij."
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
