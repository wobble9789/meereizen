import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: Tips voor een zorgeloze reis | Vliegklaar',
  description: 'Gaat u vliegen met een rollator? Lees hier alles over de regels op het vliegveld, assistentie en hoe u uw rollator veilig meeneemt in het vliegtuig.',
};

const VliegenRollatorPage = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Vliegen met een rollator: Zo reist u comfortabel en veilig</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Een rollator biedt vrijheid en stabiliteit, ook op reis. Maar hoe werkt dat eigenlijk op een drukke luchthaven? Mag de rollator mee tot aan de gate, of moet hij in het ruim? In dit artikel leggen we stap voor stap uit waar u op moet letten als u gaat vliegen met een rollator.
        </p>
      </header>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Mag de rollator gratis mee?</h2>
        <p className="mb-4">
          Bij vrijwel alle luchtvaartmaatschappijen mag u medische hulpmiddelen, zoals een rollator of krukken, <strong>gratis</strong> meenemen naast uw standaard bagagevrijdom. Dit geldt meestal voor maximaal twee hulpmiddelen per persoon. Het is wel belangrijk om dit tijdens het boeken of uiterlijk 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Gebruik op de luchthaven</h2>
        <p className="mb-4 text-gray-700">
          U heeft twee opties wanneer u op de luchthaven aankomt:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-4 text-gray-700">
          <li><strong>Inchecken als ruimbagage:</strong> U kunt uw rollator direct bij de incheckbalie afgeven. U maakt dan vanaf dat moment gebruik van de assistentie van de luchthaven (bijvoorbeeld een rolstoel of elektrisch karretje) om bij de gate te komen.</li>
          <li><strong>Meenemen naar de gate:</strong> Dit is de meest gekozen optie. U gebruikt uw eigen rollator tot aan de deur van het vliegtuig. Vlak voor het instappen neemt het personeel de rollator van u over en plaatst deze in het bagageruim. Bij aankomst staat de rollator meestal weer klaar bij de vliegtuigdeur.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. De security check met een rollator</h2>
        <p className="mb-4">
          Tijdens de veiligheidscontrole moet uw rollator door de scan. Als u niet zonder uw rollator kunt staan of lopen, kunt u dit aangeven bij de beveiligingsbeambte. Zij zullen u dan handmatig controleren of een alternatieve methode gebruiken terwijl u op een stoel zit.
        </p>
        <p className="bg-yellow-50 p-4 border-l-4 border-yellow-500 italic text-gray-800">
          Tip: Zorg dat er geen losse tassen of mandjes aan de rollator hangen die eraf kunnen vallen tijdens het transport in het ruim. Haal deze er vooraf af.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Handige tips voor vertrek</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Label uw rollator:</strong> Bevestig een stevig label met uw naam en contactgegevens.</li>
          <li><strong>Maak hem compact:</strong> Oefen thuis alvast met het inklappen van uw rollator, zodat dit op het vliegveld snel en soepel verloopt.</li>
          <li><strong>Bescherming:</strong> Gebruik eventueel een beschermhoes om beschadigingen in het bagageruim te voorkomen.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Assistentie op de luchthaven</h2>
        <p className="mb-4">
          Zelfs als u een rollator heeft, kunnen de afstanden op grote vliegvelden zoals Schiphol behoorlijk tegenvallen. Maak daarom altijd gebruik van de gratis luchthavenassistentie. Begeleiders kunnen u helpen bij het overbruggen van lange gangen en zorgen dat u als een van de eersten aan boord mag (pre-boarding).
        </p>
      </section>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-12">
        <h3 className="text-xl font-bold mb-3 text-blue-900">Zorgeloos op reis met Vliegklaar</h3>
        <p className="text-gray-800 mb-4">
          Ziet u op tegen het geregel met uw rollator of de drukte op het vliegveld? Onze persoonlijke reisbegeleiders zijn gespecialiseerd in het ondersteunen van senioren. Wij regelen de assistentie, helpen bij de security en wijken niet van uw zijde tot u veilig op uw bestemming bent.
        </p>
        <p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Bekijk onze begeleidingsopties
          </a>
        </p>
      </div>

      {/* JSON-LD voor SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vliegen met een rollator: Tips voor een zorgeloze reis",
            "description": "Alles wat u moet weten over vliegen met een rollator, van gratis meenemen tot assistentie bij de gate.",
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vliegklaar.nl/blog/vliegen-met-een-rollator"
            }
          })
        }}
      />
    </article>
  );
};

export default VliegenRollatorPage;
