import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een kunstgebit: Tips voor op het vliegveld | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees onze praktische tips voor de security check op het vliegveld en comfort tijdens de vlucht.',
};

export default function KunstgebitVliegveldTipsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een kunstgebit: Tips voor op het vliegveld en tijdens de vlucht",
    "description": "Praktische gids voor senioren die reizen met een gebitsprothese. Hoe gaat u om met de security scan en hoe blijft u comfortabel?",
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
    "datePublished": "2026-05-15"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
            &larr; Terug naar alle blogs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een kunstgebit: Tips voor op het vliegveld
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Veel senioren vragen zich af of een kunstgebit voor problemen zorgt bij de security scan op het vliegveld. 
            In dit artikel geven we u praktische tips voor een zorgeloze reis.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren op het vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg prose-primary max-w-none text-gray-700">
          <p>
            Reizen met een kunstgebit of gebitsprothese is voor veel mensen de dagelijkse realiteit. 
            Toch kan de gedachte aan de beveiligingscontroles op luchthavens zoals Schiphol of Rotterdam The Hague Airport 
            voor enige onzekerheid zorgen. Moet u het gebit uitdoen? Gaat het alarm af?
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Het kunstgebit en de security scan</h2>
          <p>
            Het korte antwoord is: <strong>nee, u hoeft uw kunstgebit niet uit te doen bij de security check</strong>. 
            De moderne bodyscan-apparatuur op vliegvelden is ingesteld om onderscheid te maken tussen gevaarlijke voorwerpen 
            en medische hulpmiddelen of protheses.
          </p>
          <p>
            Mocht er toch een melding ontstaan, dan zal de beveiligingsmedewerker een korte handmatige controle uitvoeren. 
            Dit gebeurt discreet. U hoeft zich hierover geen zorgen te maken; de medewerkers zien dagelijks honderden reizigers 
            met protheses, kunstgebitten en implantaten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Praktische tips voor onderweg</h2>
          <p>
            Naast de controle op het vliegveld zijn er een aantal zaken waar u tijdens de vlucht op kunt letten voor maximaal comfort:
          </p>
          <ul>
            <li>
              <strong>Luchtdrukverschillen:</strong> Door de veranderende luchtdruk in de cabine kunnen uw tandvlees en kaken 
              iets opzetten. Dit kan ervoor zorgen dat uw kunstgebit tijdelijk wat strakker aanvoelt.
            </li>
            <li>
              <strong>Vloeistoffen:</strong> Neemt u gebitsreiniger of kleefpasta mee in uw handbagage? Houd er rekening mee dat 
              vloeistoffen en gels in verpakkingen van maximaal 100ml moeten zitten en in een doorzichtig zakje horen.
            </li>
            <li>
              <strong>Hydratatie:</strong> De lucht in een vliegtuig is erg droog. Een droge mond kan irritatie veroorzaken onder 
              uw prothese. Drink voldoende water tijdens de vlucht.
            </li>
            <li>
              <strong>Reserve-set:</strong> Als u een reservegebit heeft, is het verstandig deze in uw handbagage te bewaren 
              voor het geval uw ruimbagage vertraagd is.
            </li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Wilt u zorgeloos op reis?</h3>
            <p className="mb-6">
              Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Onze begeleiders helpen u bij de security, 
              bij het dragen van uw bagage en zorgen dat u zich de hele reis comfortabel voelt.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Vrijblijvend advies aanvragen
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Eten en drinken aan boord</h2>
          <p>
            Vliegtuigmaaltijden kunnen soms taai zijn of onverwachte harde stukjes bevatten. Als u twijfelt over de maaltijd, 
            kunt u bij het boeken van uw vlucht vaak kiezen voor een &apos;soft meal&apos; of medisch dieet. Dit maakt het eten 
            met een kunstgebit een stuk aangenamer.
          </p>
          <p>
            Heeft u specifieke vragen over vliegen met andere medische hulpmiddelen? 
            Bekijk dan ook onze artikelen over <Link href="/blog/vliegen-met-een-pacemaker-of-icd">vliegen met een pacemaker</Link> of 
            <Link href="/blog/vliegen-met-knie-of-heupprothese">vliegen met een heupprothese</Link>.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-500 italic">Laatst bijgewerkt op: 15 mei 2026</p>
            </div>
            <div className="flex gap-4">
              <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">
                Assistentie aanvragen &rarr;
              </Link>
            </div>
          </div>
        </footer>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/vliegen-met-een-gebit" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-primary-600">Algemene tips voor vliegen met een gebit</h3>
              <p className="text-gray-600">Alles wat u moet weten over mondverzorging op grote hoogte.</p>
            </Link>
            <Link href="/blog/hoe-ga-je-veilig-door-de-security-als-senior" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-primary-600">Veilig door de security</h3>
              <p className="text-gray-600">Een stapsgewijze gids voor senioren bij de veiligheidscontrole.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
