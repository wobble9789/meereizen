import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medicijnen mee op reis: Alles wat u moet weten | Vliegklaar',
  description: 'Wilt u medicijnen meenemen naar het buitenland? Lees alles over de Schengenverklaring, medische verklaringen en tips voor reizen met medicatie.',
};

const MedicijnenReisPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Medicijnen mee op reis: Zo gaat u goed voorbereid op pad</h1>
      
      <p className="text-lg mb-8">
        Wanneer u op reis gaat en afhankelijk bent van medicijnen, komt er net wat meer kijken bij de voorbereiding. Mag u zomaar elke pil meenemen over de grens? Welke documenten heeft u nodig? In dit artikel zetten we de belangrijkste zaken op een rij, zodat u met een gerust hart op vakantie kunt.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. De Schengenverklaring: Wanneer is deze nodig?</h2>
        <p className="mb-4">
          Reist u binnen het Schengengebied en gebruikt u medicijnen die onder de Opiumwet vallen (zoals sterke pijnstillers, bepaalde slaapmiddelen of ADHD-medicatie)? Dan heeft u een officiële Schengenverklaring nodig. Deze moet worden ondertekend door uw arts en gewaarmerkt door het CAK.
        </p>
        <p className="bg-blue-50 p-4 border-l-4 border-blue-500 italic">
          Tip: Vraag de verklaring minimaal 4 weken voor vertrek aan. De verwerkingstijd kan variëren.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Medische verklaring buiten Schengen</h2>
        <p className="mb-4">
          Gaat u naar een land buiten het Schengengebied? Dan heeft u vaak een Engelstalige medische verklaring van uw arts nodig. Soms moet deze verklaring ook nog gelegaliseerd worden door het Ministerie van Buitenlandse Zaken en de ambassade van het betreffende land.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Bewaar medicijnen in de originele verpakking</h2>
        <p className="mb-4">
          Het is essentieel om medicijnen in hun originele verpakking mee te nemen. Hierop staat uw naam en de dosering, wat bij de douane direct duidelijkheid schept. Ook is het verstandig om een Europees Medisch Paspoort (verkrijgbaar bij uw apotheek) mee te nemen. Hierin staan al uw medicijnen en eventuele allergieën overzichtelijk vermeld.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Tips voor in het vliegtuig</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Handbagage:</strong> Vervoer uw belangrijkste medicijnen altijd in uw handbagage. Mocht uw koffer vertraagd zijn, dan heeft u uw medicatie in ieder geval bij de hand.</li>
          <li><strong>Koeling:</strong> Moeten uw medicijnen gekoeld blijven? Gebruik een koeltasje. Geef dit ook aan bij de security check.</li>
          <li><strong>Vloeistoffen:</strong> Voor vloeibare medicijnen boven de 100ml geldt een uitzondering op de standaardregels, mits u een doktersvoorschrift kunt tonen.</li>
        </ul>
      </section>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold mb-2">Hulp nodig bij uw reis?</h3>
        <p>
          Ziet u op tegen de logistiek op het vliegveld of de voorbereiding? Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Onze begeleiders helpen u graag met de bagage, documenten en zorgen voor een ontspannen reiservaring. 
          <a href="/contact" className="text-green-700 font-semibold underline ml-1">Neem contact op voor de mogelijkheden</a>.
        </p>
      </div>
    </div>
  );
};

export default MedicijnenReisPage;
