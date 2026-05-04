import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vliegen met een Knie- of Heupprothese: Tips & Regels (2026)',
  description: 'Gaat u vliegen met een knie- of heupprothese? Lees alles over de beveiligingscontrole, medische verklaringen en tips voor een comfortabele vlucht.',
};

export default function Pagina() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Vliegen met een Knie- of Heupprothese: Zo reist u zorgeloos</h1>
        <p className="text-gray-600 text-lg">
          Voor veel senioren met een gewrichtsprothese roept vliegen vragen op. Piept het poortje bij de douane? 
          Heb ik een medisch paspoort nodig? En hoe houd ik mijn gewrichten soepel tijdens een lange zit? 
          In dit artikel leggen we precies uit waar u op moet letten in 2026.
        </p>
      </header>

      <section className="prose lg:prose-xl mb-12">
        <h2>1. De beveiligingscontrole op de luchthaven</h2>
        <p>
          Het is een veelvoorkomende zorg: gaat het alarm af door mijn metalen prothese? Het antwoord is vaak: ja. 
          Moderne scanners herkennen echter steeds vaker het verschil tussen een verborgen voorwerp en een medisch implantaat.
        </p>
        <ul>
          <li><strong>Meld het vooraf:</strong> Geef bij de securitymedewerker aan dat u een prothese heeft voordat u door de scan gaat.</li>
          <li><strong>Body Scanners:</strong> Op veel luchthavens (zoals Schiphol) wordt gewerkt met body scanners die de exacte locatie van het metaal tonen, waardoor een uitgebreid handmatig onderzoek vaak niet meer nodig is.</li>
        </ul>

        <h2>2. De medische verklaring (Prothesepastpoort)</h2>
        <p>
          Hoewel een medische verklaring niet wettelijk verplicht is om te mogen vliegen, raden wij het sterk aan. 
          U kunt bij uw behandelend arts of het ziekenhuis om een 'prothesepastpoort' of een Engelstalige verklaring vragen.
        </p>
        <p>
          Dit document helpt misverstanden bij de douane te voorkomen, vooral op kleinere buitenlandse luchthavens waar de apparatuur minder geavanceerd kan zijn.
        </p>

        <h2>3. Comfort tijdens de vlucht</h2>
        <p>
          Stilzitten is voor niemand goed, maar met een nieuwe knie of heup extra uitdagend. Het gewricht kan stijf worden of opzetten door de cabinedruk.
        </p>
        <ul>
          <li><strong>Kies de juiste stoel:</strong> Boek een stoel met extra beenruimte of een stoel aan het gangpad, zodat u gemakkelijker uw been kunt strekken of even kunt opstaan.</li>
          <li><strong>Blijf in beweging:</strong> Doe elk uur eenvoudige enkel- en knie-oefeningen terwijl u zit. Loop regelmatig een klein stukje door het gangpad.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water om de doorbloeding te stimuleren en zwelling tegen te gaan.</li>
        </ul>

        <h2>4. Hulp op de luchthaven</h2>
        <p>
          Vindt u de afstanden op de luchthaven te groot? Maak dan gebruik van de gratis assistentie. 
          U wordt dan met een rolstoel of elektrisch karretje naar de gate gebracht. 
          Vergeet niet dit minimaal 48 uur voor vertrek aan te vragen bij uw luchtvaartmaatschappij.
        </p>
      </section>

      <footer className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Hulp nodig bij uw reis?</h3>
        <p className="mb-4">
          Ziet u op tegen de logistiek van het vliegen met een prothese? Onze reisbegeleiders helpen u graag 
          van deur tot deur. Wij regelen de assistentie op de luchthaven en zorgen dat u comfortabel op uw bestemming aankomt.
        </p>
        <div className="flex gap-4">
          <Link href="/luchthaven-begeleiding" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Luchthavenbegeleiding
          </Link>
          <Link href="/contact" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
            Contact opnemen
          </Link>
        </div>
      </footer>
    </article>
  );
}
