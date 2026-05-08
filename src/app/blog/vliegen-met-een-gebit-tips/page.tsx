import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een Gebitsprothese: Tips voor Senioren | Vliegklaar',
  description: 'Reizen met een kunstgebit of gebitsprothese? Lees onze praktische tips over drukverschillen, reiniging en douane-controle voor een zorgeloze vlucht.',
};

export default function VliegenMetGebitTipsPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Gebitsprothese: Praktische Tips voor een Zorgeloze Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is een kunstgebit of gebitsprothese een onderdeel van het dagelijks leven. 
            Wanneer u gaat vliegen, roept dit soms vragen op: Heeft de luchtdruk invloed? Wat mag er mee in de handbagage? 
            In dit artikel geven we praktische tips voor reizigers met een gebitsprothese.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. De Invloed van Luchtdruk op uw Gebit</h2>
            <p>
              Tijdens het stijgen en dalen van het vliegtuig verandert de luchtdruk in de cabine. Hoewel een goed passend 
              gebit hier meestal geen last van heeft, kan lucht die vastzit onder de prothese soms voor een licht drukkend 
              gevoel zorgen.
            </p>
            <p>
              <strong>Tip:</strong> Zorg ervoor dat uw gebit voor vertrek goed is aangemeten door uw tandarts of protheticus. 
              Een loszittend gebit kan door drukverschillen sneller irritatie veroorzaken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Handbagage en Reinigingsmiddelen</h2>
            <p>
              Vloeistofregels op vliegvelden zijn streng. Als u gebitscleaner (vloeibaar) of kleefpasta meeneemt, moet dit 
              voldoen aan de 100ml regel.
            </p>
            <ul>
              <li><strong>Kleefpasta:</strong> Neem een kleine tube mee in uw doorzichtige vloeistofzakje.</li>
              <li><strong>Bruistabletten:</strong> Deze vallen onder vaste stoffen en mogen onbeperkt mee in de handbagage.</li>
              <li><strong>Bakje:</strong> Neem een stevig afsluitbaar bakje mee als u uw gebit tijdens een lange nachtvlucht wilt uitdoen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Eten en Drinken aan Boord</h2>
            <p>
              Vliegtuigmaaltijden kunnen soms taai of juist erg plakkerig zijn. Met een gebitsprothese is het verstandig 
              om voorzichtig te zijn met harde broodjes of plakkerige snacks die tijdens de vlucht worden geserveerd.
            </p>
            <p>
              Vraag indien nodig om een zachtere maaltijdoptie bij de stewardess, of neem zelf een zachte snack mee voor de zekerheid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Hygiëne op de Luchthaven</h2>
            <p>
              Het reinigen van uw gebit in een klein vliegtuigtoilet is niet ideaal. Probeer uw gebit grondig te reinigen 
              vlak voor het boarden op de luchthaven. Op veel grote vliegvelden zoals Schiphol zijn de toiletten ruim en 
              schoon genoeg om dit comfortabel te doen.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij uw reis?</h2>
            <p className="mb-6">
              Ziet u op tegen de logistiek van het vliegen, met of zonder medische hulpmiddelen? 
              De begeleiders van Vliegklaar ondersteunen u van deur tot deur.
            </p>
            <Link 
              href="/reisbegeleiding-ouderen" 
              className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Ontdek onze reisbegeleiding
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Gerelateerde artikelen</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/blog/checklist-senioren-vliegen" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-primary-700">Checklist Senioren Vliegen</span>
                <p className="text-sm text-gray-500">Alles wat u moet weten voor vertrek.</p>
              </Link>
              <Link href="/blog/vliegen-met-een-kunstgebit" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-primary-700">Vliegen met een kunstgebit</span>
                <p className="text-sm text-gray-500">Aanvullende informatie over protheses.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
