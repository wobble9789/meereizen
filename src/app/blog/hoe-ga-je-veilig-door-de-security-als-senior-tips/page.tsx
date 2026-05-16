import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig door de security op Schiphol als senior: 10 Praktische Tips',
  description: 'Hoe ga je als senior vlot en veilig door de security op Schiphol? Lees onze 10 praktische tips voor een zorgeloze start van uw vliegreis.',
};

export default function SecurityTipsSeniorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn schoenen uitdoen bij de security op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Op Schiphol maken ze gebruik van moderne CT-scanners. In de meeste gevallen kunt u uw schoenen aanhouden, tenzij ze veel metaal bevatten of een dikke zool hebben. De beveiligingsmedewerker geeft dit ter plaatse aan."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn medicijnen meenemen door de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeibare medicijnen en medische hulpmiddelen mogen altijd mee, ook als ze groter zijn dan 100ml. Het is wel raadzaam om een medisch paspoort of doktersverklaring bij u te hebben voor een vlotte controle."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe gaat de security om met een pacemaker of ICD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geef dit voor de controle aan bij de medewerker. U hoeft dan niet door de metaaldetector of security scan. In plaats daarvan wordt u handmatig gecontroleerd (gevisiteerd). Neem altijd uw pacemaker-identificatiekaart mee."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig door de security op Schiphol als senior: 10 Praktische Tips
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De veiligheidscontrole op de luchthaven kan voor senioren soms stressvol zijn. 
            Lange rijen, bakken vullen en het idee dat u de boel ophoudt. Dat is nergens voor nodig! 
            Met deze 10 tips gaat u ontspannen en vlot door de security.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
            alt="Security controle vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">1. Draag comfortabele, &apos;security-proof&apos; kleding</h2>
          <p>
            Vermijd kleding met veel metalen knopen, ritsen of studs. Een riem met een grote gesp moet vaak af, 
            dus overweeg een broek die ook zonder riem goed blijft zitten. Draag laagjes zodat u zich makkelijk 
            kunt aanpassen aan de temperatuur.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Kies voor makkelijke instapschoenen</h2>
          <p>
            Hoewel schoenen op Schiphol vaak aan mogen blijven, kan er bij de metaaldetector toch een melding komen. 
            Schoenen zonder veters (zoals loafers of instappers) zijn dan ideaal omdat u ze snel aan en uit kunt trekken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Houd uw reisdocumenten bij de hand</h2>
          <p>
            Zorg dat uw paspoort en instapkaart in een makkelijk bereikbaar vakje zitten, maar berg ze direct 
            weer veilig op nadat ze gecontroleerd zijn. Zo voorkomt u paniek bij de bakken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Weet wat er in de bak moet</h2>
          <p>
            Tegenwoordig mogen op Schiphol elektronica (zoals laptops en tablets) en vloeistoffen vaak in de tas blijven 
            dankzij de CT-scanners. Let op de aanwijzingen: als u toch iets uit de tas moet halen, doe dit dan 
            rustig en georganiseerd.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">5. Meld medische bijzonderheden direct</h2>
          <p>
            Heeft u een <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 underline">pacemaker</Link>, 
            een <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 underline">heupprothese</Link> of 
            gebruikt u een <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 underline">stoma</Link>? 
            Meld dit direct bij de eerste medewerker die u tegenkomt. Zij kunnen u via een alternatieve route 
            of handmatige controle helpen.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Wist u dat?</h3>
            <p className="mb-0">
              U bij de security op Schiphol altijd om een stoel kunt vragen als het wachten in de rij te zwaar wordt. 
              De medewerkers zijn getraind om senioren hierbij te ondersteunen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800">6. Verdeel uw handbagage slim</h2>
          <p>
            Zorg dat zware items onderin zitten en spullen die u nodig heeft (zoals medicijnen) bovenop. 
            Dit voorkomt dat u bij de security de hele tas moet omkeren.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">7. Maak gebruik van de Small Bag Lane</h2>
          <p>
            Als u alleen een kleine tas heeft, kunt u soms gebruik maken van een snellere rij. 
            Vraag aan de floormanager bij de security welke rij voor u het meest geschikt is.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">8. Neem de tijd</h2>
          <p>
            Haast is de grootste vijand van een soepele controle. Zorg dat u ruim op tijd op de luchthaven bent. 
            Voor senioren raden wij aan om minimaal 3 uur voor een Europese vlucht aanwezig te zijn.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">9. Vraag om assistentie</h2>
          <p>
            Ziet u op tegen het staan of de afstanden? Vraag minimaal 48 uur van tevoren 
            <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 underline"> luchthavenassistentie</Link> aan. 
            U wordt dan in een rolstoel of met een karretje door de security begeleid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">10. Blijf rustig bij een extra controle</h2>
          <p>
            Wordt uw tas eruit gepikt voor een extra check? Geen paniek, dit gebeurt steekproefsgewijs. 
            De medewerkers doen gewoon hun werk. Blijf vriendelijk en volg de instructies op.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Hulp nodig bij uw volgende reis?</h3>
          <p className="text-center text-lg text-gray-600 mb-10">
            Vliegklaar biedt persoonlijke reisbegeleiding van deur tot deur. 
            Wij zorgen dat u zorgeloos door de security komt en ontspannen op uw bestemming aankomt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all text-center"
            >
              Neem contact op
            </Link>
            <Link
              href="/diensten"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-10 py-4 rounded-xl hover:bg-primary-50 transition-all text-center"
            >
              Onze diensten
            </Link>
          </div>
        </footer>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary-800 mb-2">{faq.name}</h4>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
