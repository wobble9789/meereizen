import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor op de luchthaven | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een gehoorapparaat. Van security checks op Schiphol tot communicatie bij de gate.',
};

export default function GehoorapparaatLuchthavenTips() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een gehoorapparaat: Tips voor op de luchthaven",
    "description": "Praktische gids voor senioren die met een gehoorapparaat reizen, inclusief informatie over security en assistentie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gehoorapparaat: Tips voor op de luchthaven
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Reizen met een gehoorapparaat kan voor extra spanning zorgen op een drukke luchthaven. Met deze tips gaat u goed voorbereid op pad.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Een luchthaven is vaak een plek met veel omgevingsgeluid, galmende hallen en belangrijke omroepen. Voor senioren die een gehoorapparaat dragen, kan dit een uitdaging zijn. Gelukkig zijn moderne luchthavens zoals Schiphol steeds beter ingesteld op reizigers met gehoorproblemen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. De Security Check</h2>
          <p>
            Een van de meest gestelde vragen is: &quot;Moet mijn gehoorapparaat uit tijdens de security scan?&quot; Het antwoord is simpel: nee. U kunt uw gehoorapparaten gewoon inhouden terwijl u door de bodyscanner of metaaldetector gaat. Ze raken niet beschadigd door de röntgenstraling of magnetische velden.
          </p>
          <p>
            <strong>Tip:</strong> Meld het wel even bij de medewerker voor u door de scan gaat. Soms kan het apparaat een signaal geven bij de metaaldetector, en dan weet de beveiliging direct waar het door komt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Maak gebruik van Ringleidingen</h2>
          <p>
            Veel balies en gates op grote luchthavens zijn uitgerust met een ringleiding (te herkennen aan het blauwe bordje met een oor en de letter T). Door uw gehoorapparaat op de T-stand te zetten, wordt het geluid van de medewerker of de omroep direct naar uw toestel gestuurd, zonder storend omgevingsgeluid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Reservebatterijen en Opladers</h2>
          <p>
            Lucht in een vliegtuig is erg droog, wat invloed kan hebben op de batterijduur van sommige toestellen. Zorg dat u altijd een extra set batterijen in uw handbagage heeft. Heeft u oplaadbare gehoorapparaten? Neem dan de oplader mee in uw tas, zodat u tijdens een tussenstop of bij vertraging kunt bijladen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Informeer het Personeel</h2>
          <p>
            Schroom niet om bij het inchecken of aan de gate te vertellen dat u slechthorend bent. Het personeel kan u dan persoonlijk komen waarschuwen als er een wijziging is in de gate of vertrektijd die u wellicht via de omroep mist.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig op de luchthaven?</h3>
            <p className="mb-6">
              Ziet u op tegen de drukte en de communicatie op de luchthaven? De begeleiders van Vliegklaar ondersteunen u van deur tot deur. Wij zorgen dat u geen omroep mist en rustig door alle controles gaat.
            </p>
            <Link 
              href="/luchthaven-begeleiding"
              className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Ontdek onze luchthavenbegeleiding
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Gebruik de App van de Luchthaven</h2>
          <p>
            Op Schiphol en veel andere luchthavens kunt u via een app live updates krijgen over uw vlucht. Dit is een ideale manier om visueel op de hoogte te blijven van gates, tijden en eventuele vertragingen, zonder afhankelijk te zijn van audio-berichten.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-primary-800 mb-4">Gerelateerde artikelen:</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li>
              <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline">
                Algemene tips voor vliegen met gehoorapparaten
              </Link>
            </li>
            <li>
              <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">
                Hoe vraag je vliegveld assistentie aan?
              </Link>
            </li>
          </ul>
        </footer>
      </article>
    </main>
  );
}
