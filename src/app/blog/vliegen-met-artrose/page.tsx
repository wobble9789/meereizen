import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met artrose: Tips voor een comfortabele vlucht | Vliegklaar',
  description: 'Heeft u artrose en ziet u op tegen vliegen? Ontdek praktische tips voor beweging, medicatie en ondersteuning tijdens uw vliegreis.',
};

export default function VliegenMetArtrose() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag ik koelpacks mee aan boord nemen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gel-gebaseerde koelpacks vallen onder de vloeistoffenregels. Als ze medisch noodzakelijk zijn, heeft u vaak een doktersverklaring nodig. Alternatief kunt u de stewardess vragen om wat ijsblokjes in een zakje."
        }
      },
      {
        "@type": "Question",
        "name": "Zorgt vliegen voor een verergering van artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegen zelf verergert de artrose niet, maar de beperkte bewegingsvrijheid kan wel tijdelijk voor meer pijn en stijfheid zorgen. Met de juiste voorbereiding en regelmatig bewegen is dit tot een minimum te beperken."
        }
      },
      {
        "@type": "Question",
        "name": "Welke zitplaats is het beste bij artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een stoel aan het gangpad is vaak het prettigst, omdat u dan makkelijker even kunt opstaan en uw benen kunt strekken zonder anderen te storen. Stoelen met extra beenruimte zijn ook aan te raden."
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
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Vliegen met artrose: 8 tips voor een zorgeloze vlucht
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stijve gewrichten en pijn kunnen een vliegreis uitdagend maken voor mensen met artrose. Met de juiste voorbereiding hoeft artrose u echter niet tegen te houden om de wereld te ontdekken.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581067723502-4662d0889215?w=800&q=80"
                alt="Senior reiziger geniet van uitzicht"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <p>
            Artrose is een reumatische aandoening waarbij het kraakbeen in de gewrichten in kwaliteit achteruitgaat. Tijdens een vlucht zorgt het lange stilzitten in een krappe ruimte vaak voor extra stijfheid en ongemak. Toch is vliegen met artrose heel goed mogelijk.
          </p>

          <h2>1. Kies de juiste zitplaats</h2>
          <p>
            Ruimte is uw beste vriend. Overweeg een stoel met extra beenruimte of een stoel aan het gangpad. Dit stelt u in staat om uw benen makkelijker te strekken en vaker op te staan zonder medereizigers te storen.
          </p>

          <h2>2. Blijf in beweging</h2>
          <p>
            Stijfheid is de grootste vijand van artrose. Probeer elk uur even kort door het gangpad te lopen. Ook zittende oefeningen, zoals het draaien van de enkels en het buigen en strekken van de knieën, stimuleren de doorbloeding en houden de gewrichten soepel.
          </p>

          <h2>3. Warmte helpt tegen pijn</h2>
          <p>
            Veel mensen met artrose ervaren verlichting door warmte. Neem een sjaal of een klein dekentje mee om uw gewrichten warm te houden, aangezien de airconditioning in het vliegtuig vaak fris kan zijn.
          </p>

          <h2>4. Medicatie en supplementen</h2>
          <p>
            Zorg dat u uw pijnstillers bij de hand heeft in uw handbagage. Als u gewend bent om supplementen zoals glucosamine te slikken, blijf dit dan ook tijdens de reis doen. Raadpleeg bij twijfel altijd uw arts voor de vlucht.
          </p>

          <h2>5. Gebruik hulpmiddelen</h2>
          <p>
            Een opblaasbaar kussentje voor in de onderrug kan de druk op uw gewrichten verminderen. Ook goede wandelschoenen die makkelijk aan en uit gaan zijn essentieel voor het comfort op de luchthaven.
          </p>

          <h2>6. Vraag assistentie aan op de luchthaven</h2>
          <p>
            Lange afstanden lopen op een vliegveld kan belastend zijn voor de heupen en knieën. Schroom niet om luchthavenassistentie aan te vragen. Dit kan veel energie besparen die u liever op uw bestemming gebruikt. Lees meer over <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan">vliegveld assistentie aanvragen</Link>.
          </p>

          <h2>7. Drink voldoende water</h2>
          <p>
            Hydratatie is belangrijk voor de algehele gezondheid, maar helpt ook om de gewrichten &apos;gesmeerd&apos; te houden. Vermijd overmatig alcohol- en cafeïnegebruik tijdens de vlucht, omdat dit uitdrogend werkt.
          </p>

          <h2>8. Reisbegeleiding van Vliegklaar</h2>
          <p>
            Ziet u op tegen het dragen van koffers of de logistieke rompslomp? De begeleiders van Vliegklaar kunnen u fysiek en praktisch ondersteunen. Wij nemen de bagage uit handen en zorgen dat u zonder stress van deur tot deur reist.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over vliegen met artrose</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen ondanks artrose?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Ontdek hoe onze reisbegeleiders u kunnen helpen bij een comfortabele reis. Neem contact op voor de mogelijkheden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-4 rounded-xl shadow-xl transition-all"
            >
              Vrijblijvend advies
            </Link>
            <Link
              href="/reisbegeleiding-ouderen"
              className="inline-block bg-transparent border-2 border-white text-white font-bold text-xl px-10 py-4 rounded-xl hover:bg-white hover:text-primary-900 transition-all"
            >
              Onze diensten
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}