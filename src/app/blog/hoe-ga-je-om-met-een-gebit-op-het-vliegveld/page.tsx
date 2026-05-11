import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gebit op het vliegveld? | Vliegklaar',
  description: 'Tips en advies voor reizen met een gebitsprothese. Van security checks tot comfort tijdens de vlucht voor senioren.',
};

const GebitOpVliegveldPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hoe ga je om met een gebit op het vliegveld?',
    description: 'Praktische tips voor senioren die reizen met een gebitsprothese of kunstgebit.',
    author: {
      '@type': 'Organization',
      name: 'Vliegklaar',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vliegklaar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vliegklaar.nl/logo.png',
      },
    },
    datePublished: '2026-05-11',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Gebit op het vliegveld</span>
      </nav>

      <article className="prose prose-blue max-w-none">
        <h1 className="text-3xl font-bold mb-6">Hoe ga je om met een gebit op het vliegveld?</h1>
        
        <p className="lead text-xl text-gray-700 mb-8">
          Reizen met een gebitsprothese of kunstgebit kan voor sommige senioren voor wat onzekerheid zorgen, vooral bij de veiligheidscontrole op het vliegveld. Geen zorgen: een gebit is volkomen normaal en levert zelden problemen op. In dit artikel leggen we uit waar u op moet letten.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gaat het alarm af bij de security check?</h2>
        <p>
          Dit is de meest gestelde vraag. Het antwoord is bijna altijd: nee. Moderne gebitsprotheses bevatten meestal geen metalen die gevoelig genoeg zijn om de metaaldetectoren af te laten gaan. Mocht er toch een piepje klinken door een metalen frame in uw prothese, dan is een korte uitleg aan de beveiligingsbeambte voldoende. U hoeft uw gebit nooit uit te doen voor de controle.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Comfort tijdens de vlucht</h2>
        <p>
          Door de luchtdrukverschillen in de cabine kunnen uw tandvlees en kaken soms iets opzetten. Dit kan ervoor zorgen dat uw gebit minder comfortabel zit dan op de grond.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Kleefpasta:</strong> Neem een kleine tube kleefpasta mee in uw handbagage (houd rekening met de 100ml regel voor vloeistoffen).</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water. Een droge mond kan irritatie onder de prothese veroorzaken.</li>
          <li><strong>Schoonmaakset:</strong> Voor lange vluchten is het prettig om een kleine tandenborstel en bakje mee te nemen om uw gebit op te frissen in het toilet van het vliegtuig.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Wat als er iets kapot gaat?</h2>
        <p>
          Het is raadzaam om voor vertrek uw tandarts of tandtechnieker te bezoeken voor een snelle controle. Zit alles nog goed vast? Zijn er geen haarscheurtjes? Een reparatiesetje voor noodgevallen kan handig zijn voor verre reizen, maar meestal kunt u ter plaatse ook een tandtechnieker vinden.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-3 text-blue-800">Hulp nodig bij uw reis?</h3>
          <p className="text-blue-900">
            Ziet u op tegen de logistiek op het vliegveld of wilt u graag dat er iemand met u meereist die u ondersteunt? Vliegklaar biedt professionele reisbegeleiding voor senioren.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Neem contact op
            </Link>
          </div>
        </div>
      </article>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Gerelateerde artikelen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/hoe-ga-je-veilig-door-de-security-als-senior" className="p-4 border rounded hover:bg-gray-50 transition-colors">
            Veilig door de security als senior
          </Link>
          <Link href="/blog/vliegen-met-een-kunstgebit" className="p-4 border rounded hover:bg-gray-50 transition-colors">
            Vliegen met een kunstgebit: uitgebreide gids
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GebitOpVliegveldPage;
