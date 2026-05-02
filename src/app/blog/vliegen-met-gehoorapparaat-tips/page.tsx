import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor senioren | Vliegklaar',
  description: 'Handige tips voor vliegen met een gehoorapparaat. Alles over security, luchtdruk en communicatie op de luchthaven voor slechthorende senioren.',
};

export default function GehoorapparaatBlogPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline">← Terug naar blogoverzicht</Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Vliegen met een gehoorapparaat: Zorgeloos op reis als senior
          </h1>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&q=80"
              alt="Senior met gehoorapparaat op de luchthaven"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Ziet u op tegen het vliegen vanwege uw gehoorapparaat? Geen zorgen. Met de juiste voorbereiding is reizen met een auditieve beperking prima te doen. In dit artikel delen we essentiële tips voor een ontspannen vlucht.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">1. Mag een gehoorapparaat door de security?</h2>
          <p>
            Een van de meest gestelde vragen is of het gehoorapparaat uit moet bij de beveiligingscontrole. Het antwoord is: <strong>Nee</strong>. U kunt uw gehoorapparaten gewoon inhouden terwijl u door de metaaldetector of bodyscan gaat. Ze zijn te klein om het alarm te laten afgaan. 
          </p>
          <p>
            Mocht u zich er toch onprettig bij voelen, meld dan even bij de securitybeambte dat u gehoorapparatuur draagt. Dit voorkomt misverstanden als u extra gefouilleerd moet worden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">2. Gehoorapparaten en de vliegmodus</h2>
          <p>
            Moderne gehoorapparaten werken vaak met Bluetooth. Tijdens de vlucht wordt gevraagd om elektronische apparaten op 'vliegtuigstand' te zetten. Voor gehoorapparaten geldt dit meestal niet, tenzij ze direct verbonden zijn met een smartphone die u gebruikt voor streaming. Raadpleeg bij twijfel de handleiding van uw merk of vraag het uw audicien.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">3. Omgaan met luchtdrukverschillen</h2>
          <p>
            Tijdens het stijgen en landen verandert de luchtdruk in de cabine. Dit kan een 'ploppend' gevoel geven. Mensen met een gehoorapparaat ervaren dit soms als intenser. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Slik regelmatig of kauw op een kauwgompje.</li>
            <li>Gebruik de 'Valsalva-manoeuvre' (voorzichtig snuiten met de mond dicht en neus dichtgeknepen).</li>
            <li>Houd uw apparaten in; ze helpen u om aanwijzingen van het cabinepersoneel te blijven horen.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">4. Reserve-batterijen en opladers</h2>
          <p>
            Niets is vervelender dan een leeg gehoorapparaat halverwege de vlucht. Neem altijd extra batterijen mee in uw <strong>handbagage</strong>. Als u oplaadbare apparaten heeft, zorg dan dat de lader ook binnen handbereik is. In het vliegtuig kunnen batterijen door de kou (bijvoorbeeld in het bagageruim) sneller leeglopen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">5. Communicatie op de luchthaven</h2>
          <p>
            Luchthavens zijn lawaaierige plekken met veel echo. Dit maakt het verstaan van omroepen lastig.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maak gebruik van de apps van de luchtvaartmaatschappij voor actuele gate-informatie.</li>
            <li>Geef bij de gate aan dat u slechthorend bent; vaak mag u dan met 'pre-boarding' mee.</li>
            <li>Vraag om schriftelijke bevestiging bij wijzigingen als u de omroep niet goed kon verstaan.</li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500 my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw vliegreis?</h3>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in de begeleiding van senioren. Onze begeleiders zorgen ervoor dat u geen enkele aankondiging mist en helpen u rustig door alle controles heen.
            </p>
            <Link href="/luchthaven-begeleiding" className="text-primary-700 font-bold hover:underline">
              Ontdek onze luchthavenbegeleiding →
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Wilt u meer weten over onze diensten? Bekijk onze <Link href="/diensten" className="text-primary-600 hover:underline">dienstenpagina</Link> of neem direct <Link href="/contact" className="text-primary-600 hover:underline">contact</Link> met ons op.
          </p>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen met een gehoorapparaat: Tips voor senioren",
            "image": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&q=80",
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
            "datePublished": "2026-05-02",
            "description": "Handige tips voor vliegen met een gehoorapparaat. Alles over security, luchtdruk en communicatie op de luchthaven voor slechthorende senioren."
          })
        }}
      />
    </main>
  );
}
