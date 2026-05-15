import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit: Tips voor senioren | Vliegklaar',
  description: 'Gaat u vliegen met een gebit of kunstgebit? Ontdek praktische tips voor de security check, verzorging aan boord en comfortabel reizen.',
};

export default function VliegenMetGebitBlog() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gebit: Praktische tips voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Voor veel senioren is een kunstgebit of gebitsprothese een vast onderdeel van het dagelijks leven. Maar hoe zit dat eigenlijk als u gaat vliegen? Moet het gebit uit bij de security? En hoe verzorgt u uw gebit tijdens een lange vlucht? Vliegklaar zet de belangrijkste tips voor u op een rij.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
            alt="Senioren glimlach op vakantie"
            width={800}
            height={450}
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>Mag een kunstgebit in blijven bij de security?</h2>
          <p>
            Dit is een van de meest gestelde vragen door reizigers met een gebitsprothese. Het korte antwoord is: <strong>Ja, u kunt uw kunstgebit gewoon inhouden</strong> tijdens de veiligheidscontrole op het vliegveld. 
          </p>
          <p>
            Moderne bodyscanners en metaaldetectoren zijn niet ingesteld op de kleine hoeveelheden metaal die soms in een gebit verwerkt zitten. Mocht er toch een melding afgaan, dan weten de beveiligingsmedewerkers precies hoe ze hiermee om moeten gaan. U hoeft zich dus geen zorgen te maken over ongemakkelijke situaties.
          </p>

          <h2>Verzorging van uw gebit tijdens de vlucht</h2>
          <p>
            De lucht in een vliegtuig is vaak erg droog. Dit kan leiden tot een droge mond, wat weer invloed heeft op hoe prettig uw gebit zit. 
          </p>
          <ul>
            <li><strong>Drink voldoende water:</strong> Houd uw mond gehydrateerd. Dit voorkomt irritatie van het tandvlees onder de prothese.</li>
            <li><strong>Gebruik een kleefpasta (indien nodig):</strong> Door drukverschillen in de cabine kan uw gebit soms anders aanvoelen. Een goede kleefpasta kan extra zekerheid bieden. Let op: de tube mag niet groter zijn dan 100ml voor de handbagage.</li>
            <li><strong>Mondverzorging:</strong> Poets uw gebit ook tijdens een lange vlucht. Gebruik hiervoor bij voorkeur water uit een flesje in plaats van het kraanwater in het vliegtuigtoilet.</li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border-l-4 border-primary-600">
            <h3 className="mt-0">Heeft u hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vindt u de voorbereiding op een vliegreis spannend? De begeleiders van Vliegklaar helpen u graag. Van het inpakken van de juiste verzorgingsmiddelen tot persoonlijke begeleiding op de luchthaven.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block">
              Vraag naar de mogelijkheden
            </Link>
          </div>

          <h2>Wat mee te nemen in uw handbagage?</h2>
          <p>
            Het is verstandig om altijd een kleine &apos;gebit-kit&apos; in uw handbagage te hebben voor het geval uw koffer vertraagd is:
          </p>
          <ol>
            <li>Een tandenborstel en speciale gebitborstel.</li>
            <li>Een reisformaat gebit-reinigingstabletten.</li>
            <li>Een afsluitbaar bakje (voor als u het gebit &apos;s nachts uit wilt doen).</li>
            <li>Eventueel een reservegebit als u die heeft.</li>
          </ol>

          <h2>Conclusie</h2>
          <p>
            Vliegen met een gebit is in de praktijk heel eenvoudig. Met een beetje voorbereiding en de juiste spullen in uw handbagage kunt u zorgeloos genieten van uw reis. Vergeet vooral niet te lachen op uw vakantiefoto&apos;s!
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              Wilt u meer weten over comfortabel reizen als senior? Lees ook onze artikelen over <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600">medicijnen mee op reis</Link> en <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600">vliegen met een rollator</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
