import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Steunpanty of Compressiekousen | Vliegklaar',
  description: 'Waarom zijn compressiekousen belangrijk voor senioren tijdens het vliegen? Lees alles over preventie van trombose en comfortabel reizen.',
};

export default function CompressiekousenVliegenPage() {
  const articleTitle = "Vliegen met Compressiekousen: Comfort en Veiligheid voor Senioren";
  const publishDate = "2026-05-13";

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {articleTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Lange vluchten betekenen vaak urenlang stilzitten in een beperkte ruimte. Voor senioren verhoogt dit het risico op opgezette enkels en, in ernstigere gevallen, reizigerstrombose. Compressiekousen (vaak steunpanty&apos;s genoemd) zijn een eenvoudige maar effectieve oplossing.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
            alt="Senior die zich voorbereidt op een reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wat doen compressiekousen precies?</h2>
            <p>
              Compressiekousen oefenen een lichte, gecontroleerde druk uit op de onderbenen. Deze druk is het hoogst bij de enkel en neemt naar boven toe af. Dit helpt de bloedvaten om het bloed efficiënter terug naar het hart te pompen, wat voorkomt dat vocht zich ophoopt in de onderbenen en voeten.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij uw voorbereiding?</h2>
            <p>
              Vindt u het lastig om compressiekousen zelf aan te trekken of maakt u zich zorgen over de gezondheidsrisico&apos;s tijdens het vliegen? Onze reisbegeleiders bieden ondersteuning van deur tot deur. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek hoe wij u helpen.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">De voordelen tijdens het vliegen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Voorkomen van oedeem:</strong> Geen knellende schoenen meer bij aankomst door opgezwollen voeten.</li>
              <li><strong>Verlagen risico op trombose:</strong> Door de verbeterde doorbloeding is de kans op bloedstolsels aanzienlijk kleiner.</li>
              <li><strong>Minder vermoeide benen:</strong> U stapt fitter uit het vliegtuig omdat uw benen minder zwaar aanvoelen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tips voor het gebruik</h2>
            <p>
              Om het maximale effect uit uw compressiekousen te halen, zijn er een paar zaken waar u op kunt letten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Juiste maat:</strong> Laat uw benen opmeten door een specialist. Een te strakke kous kan de bloedsomloop juist afknellen, terwijl een te losse kous niet werkt.</li>
              <li><strong>Trek ze vroeg aan:</strong> Doe de kousen &apos;s ochtends direct aan, voordat uw benen de kans krijgen om op te zetten.</li>
              <li><strong>Blijf bewegen:</strong> Ook met kousen is het belangrijk om regelmatig even te lopen of uw voeten te draaien terwijl u zit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wanneer moet u overleggen met een arts?</h2>
            <p>
              Hoewel preventieve compressiekousen voor de meeste mensen veilig zijn, is het raadzaam om bij hartklachten, ernstige circulatiestoornissen of diabetes eerst te overleggen met uw huisarts. Soms is een specifieke drukklasse vereist.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op reis met Vliegklaar</h2>
            <p className="text-center">
              Uw gezondheid en comfort staan bij ons voorop. Of het nu gaat om advies over hulpmiddelen of fysieke begeleiding tijdens de reis, wij staan voor u klaar.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag een vrijblijvend gesprek aan
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
              "headline": articleTitle,
              "description": "Informatie over het gebruik van compressiekousen voor senioren tijdens vliegreizen om trombose te voorkomen en comfort te verhogen.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
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
              "datePublished": publishDate
            })
          }}
        />
      </article>
    </main>
  );
}
