import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Parkinson: Tips voor een Comfortabele Vlucht | Vliegklaar',
  description: 'Wilt u vliegen met de ziekte van Parkinson? Ontdek praktische tips over medicatie, vliegveld assistentie en hoe reisbegeleiding kan helpen.',
};

export default function VliegenParkinsonPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met Parkinson: Tips voor een Zorgeloze Reis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Reizen met de ziekte van Parkinson vraagt om extra voorbereiding, maar het hoeft een mooie vakantie of familiebezoek niet in de weg te staan. 
            Met de juiste planning en ondersteuning kunt u nog steeds genieten van de vrijheid van vliegen.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Goede voorbereiding is het halve werk</h2>
          <p>
            Wanneer u gaat vliegen met Parkinson, is timing essentieel. De symptomen kunnen variëren gedurende de dag, vaak afhankelijk van uw medicatieschema. 
            Houd hier rekening mee bij het boeken van uw vlucht. Kies bij voorkeur voor een tijdstip waarop u zich meestal op uw best voelt.
          </p>

          <h3 className="text-2xl font-semibold text-primary-700 mt-10 mb-4">1. Medicatie en het vliegveld</h3>
          <p>
            Het is cruciaal om uw medicijnen altijd in uw handbagage te bewaren. Neem extra voorraad mee voor het geval de vlucht vertraagd is. 
            Een medisch paspoort of een verklaring van uw neuroloog is onmisbaar bij de security-check, vooral als u vloeibare medicijnen of injecties gebruikt.
          </p>

          <h3 className="text-2xl font-semibold text-primary-700 mt-10 mb-4">2. Vliegveld assistentie aanvragen</h3>
          <p>
            Lange afstanden lopen op luchthavens zoals Schiphol kan vermoeiend zijn. Maak gebruik van de gratis vliegveld assistentie. 
            U kunt een rolstoel aanvragen die u van de check-in naar de gate brengt. Dit bespaart energie voor de reis zelf.
            Lees meer over <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">hoe u assistentie aanvraagt</Link>.
          </p>

          <h3 className="text-2xl font-semibold text-primary-700 mt-10 mb-4">3. Comfort aan boord</h3>
          <p>
            Vraag bij het inchecken om een stoel aan het gangpad. Dit maakt het makkelijker om op te staan en even te bewegen, wat helpt tegen stijfheid. 
            Blijf tijdens de vlucht voldoende water drinken en probeer lichte strekoefeningen te doen terwijl u zit.
          </p>

          <h3 className="text-2xl font-semibold text-primary-700 mt-10 mb-4">4. Reisbegeleiding op maat</h3>
          <p>
            Ziet u op tegen de drukte op de luchthaven of het regelen van alle logistiek? Een persoonlijke reisbegeleider van Vliegklaar kan de 
            volledige zorg uit handen nemen. Van het begeleiden door de douane tot ondersteuning bij uw medicatieschema tijdens de vlucht.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Mag ik mijn medicijnen meenemen in de cabine?</h3>
              <p className="text-gray-600">Ja, medicijnen moeten zelfs in uw handbagage. Zorg voor een Europees Medisch Paspoort om problemen bij de security te voorkomen.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Kan ik met een hersenstimulator (DBS) door de beveiliging?</h3>
              <p className="text-gray-600">Ja, maar meld dit altijd bij de beveiligingsmedewerkers. De metaaldetector kan de instellingen van uw DBS beïnvloeden; een handmatige controle is vaak veiliger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen met ondersteuning?</h2>
          <p className="text-xl mb-10">
            Wilt u weten hoe wij u kunnen begeleiden tijdens uw reis? Neem vrijblijvend contact op.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen met Parkinson: Tips voor een Comfortabele Vlucht",
            "description": "Praktische gids voor senioren die willen vliegen met de ziekte van Parkinson. Tips over medicatie, vliegveld assistentie en meer.",
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
              "@id": "https://vliegklaar.nl/blog/vliegen-met-parkinson"
            }
          })
        }}
      />
    </main>
  );
}
