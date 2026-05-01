import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Reizen met Parkinson: Tips voor een Zorgeloze Vakantie | Vliegklaar',
  description: 'Wilt u op vakantie met Parkinson? Ontdek praktische tips over medicatie, mobiliteit en hoe persoonlijke reisbegeleiding uw reis makkelijker maakt.',
};

export default function ReizenMetParkinson() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar alle artikelen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Reizen met Parkinson: Hoe u ontspannen en veilig op uw bestemming komt
          </h1>
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>30 april 2026</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>7 min leestijd</span>
          </div>
          <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80"
              alt="Ouder echtpaar genietend van een uitzicht tijdens een reis"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p>
            De diagnose Parkinson hoeft niet te betekenen dat u stopt met reizen. Hoewel het extra planning en voorbereiding vraagt, 
            is het met de juiste aanpak en ondersteuning heel goed mogelijk om te blijven genieten van nieuwe plekken en dierbare familiebezoeken. 
            In dit artikel delen we essentiële tips voor reizen met Parkinson.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">1. Timing van medicatie is essentieel</h2>
          <p>
            Bij Parkinson is een strikt medicatieschema vaak cruciaal om symptomen onder controle te houden. Reizen over tijdzones 
            kan dit schema in de war schoppen.
          </p>
          <ul>
            <li><strong>Overleg met uw arts:</strong> Bespreek hoe u uw medicatie moet aanpassen bij tijdsverschil.</li>
            <li><strong>Alarmen instellen:</strong> Gebruik uw telefoon of een horloge met meerdere alarmen om uw innamemomenten niet te missen.</li>
            <li><strong>Extra voorraad:</strong> Neem altijd minstens voor een week extra medicijnen mee in uw handbagage, voor het geval van vertragingen.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">2. Mobiliteit op het vliegveld</h2>
          <p>
            Vliegvelden zijn vaak groot en kunnen vermoeiend zijn. Stress en vermoeidheid kunnen Parkinson-symptomen, zoals &apos;freezing&apos; of trillingen, verergeren.
          </p>
          <p>
            Maak gebruik van de gratis luchthavenassistentie. Zelfs als u normaal gesproken goed kunt lopen, kan een rolstoel of elektrisch wagentje op het vliegveld 
            kostbare energie besparen voor wanneer u op uw bestemming bent.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">3. Stress verminderen</h2>
          <p>
            Niets is zo vervelend als haasten bij de gate of onduidelijkheid over de route. Stress is een bekende &apos;trigger&apos; voor Parkinson-klachten. 
            Plan daarom ruim de tijd in tussen vluchten en vervoer. 
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">4. Persoonlijke reisbegeleiding</h2>
          <p>
            Soms is de stap om alleen of met een partner (die ook mantelzorger is) te reizen te groot. In dat geval biedt persoonlijke reisbegeleiding 
            van <strong>Vliegklaar</strong> uitkomst.
          </p>
          <p>
            Een professionele begeleider neemt de logistieke zorgen uit handen, helpt bij het bewaken van het medicatieschema en zorgt voor een rustig 
            tempo tijdens de reis. Dit geeft niet alleen u rust, maar ontlast ook uw reisgenoten.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Wilt u de mogelijkheden bespreken?</h3>
            <p className="text-primary-800 mb-6">
              Vliegklaar is gespecialiseerd in het begeleiden van senioren met aandoeningen zoals Parkinson. 
              Wij zorgen dat u weer met een veilig gevoel de wereld kunt ontdekken.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Vrijblijvend adviesgesprek aanvragen
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Conclusie</h2>
          <p>
            Met Parkinson op reis gaan vergt moed en organisatie, maar de beloning — het creëren van nieuwe herinneringen — is het meer dan waard. 
            Laat u niet tegenhouden door de logistiek, maar zoek naar de oplossingen die bij u passen.
          </p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Reizen met Parkinson: Hoe u ontspannen en veilig op uw bestemming komt",
            "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80",
            "datePublished": "2026-04-30",
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
            "description": "Praktische tips en advies voor reizen met de ziekte van Parkinson. Over medicatie, mobiliteit en ondersteuning."
          })
        }}
      />
    </main>
  );
}
