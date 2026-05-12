import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Parkinson: Tips voor een Zorgeloze Reis | Vliegklaar',
  description: 'Hoe bereidt u zich voor op een vliegreis met de ziekte van Parkinson? Lees onze praktische tips over medicatie, assistentie en begeleiding voor senioren.',
};

export default function VliegenMetParkinsonPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag je vliegen met de ziekte van Parkinson?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, in de meeste gevallen is vliegen met Parkinson prima mogelijk. Het is wel essentieel om de reis goed voor te bereiden, vooral wat betreft het medicatieschema en de logistiek op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga je om met medicatie tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Houd rekening met tijdsverschillen. Overleg met uw neuroloog hoe u het schema moet aanpassen. Neem altijd extra medicatie mee in uw handbagage voor het geval van vertraging."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegveld assistentie nuttig bij Parkinson?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Stress en vermoeidheid kunnen symptomen verergeren. Assistentie op de luchthaven (zoals een rolstoel of hulp bij de security) bespaart veel energie."
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
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Vliegen met Parkinson: Zo bereidt u zich optimaal voor
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Reizen met de ziekte van Parkinson vraagt om een extra goede planning. Van het juiste medicatieschema tot het aanvragen van de juiste ondersteuning op de luchthaven.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Medicatie en het tijdsverschil</h2>
            <p>
              Voor mensen met Parkinson is een strak medicatieschema cruciaal. Bij het oversteken van tijdzones kan dit lastig worden. 
              Het is raadzaam om voor vertrek met uw behandelend arts een &apos;reisschema&apos; op te stellen. 
              Zorg dat u uw medicijnen altijd in uw <strong>handbagage</strong> bewaart en neem een actueel medicatieoverzicht (AMO) mee.
            </p>
            <p>
              <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">
                Lees hier meer algemene tips over medicijnen mee op reis nemen.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Beperk stress op de luchthaven</h2>
            <p>
              Stress kan de symptomen van Parkinson, zoals trillen of stijfheid, tijdelijk verergeren. 
              Luchthavens zijn vaak druk en hectisch. Maak daarom gebruik van de gratis vliegveld assistentie die luchtvaartmaatschappijen aanbieden. 
              Zelfs als u nog goed kunt lopen, kan een rolstoel bij de hand rust geven in lange wachtrijen bij de douane.
            </p>
            <p>
              Wilt u weten hoe u dit regelt? Bekijk ons artikel over <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvragen</Link>.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h2>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in het begeleiden van senioren met Parkinson tijdens hun vliegreis. 
              Onze begeleiders zorgen voor rust, bewaken het medicatieschema en nemen alle logistieke zorgen uit handen.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Vraag naar de mogelijkheden
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
            <p>
              Probeer tijdens de vlucht regelmatig te bewegen om stijfheid te voorkomen. 
              Vraag bij het boeken om een stoel aan het gangpad, zodat u makkelijk op kunt staan zonder anderen te storen. 
              Drink voldoende water en vermijd overmatig cafeïne- of alcoholgebruik, omdat dit van invloed kan zijn op uw medicatie en rust.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Veelgestelde vragen</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-600">
            Wilt u meer weten over onze diensten? Bekijk onze <Link href="/diensten" className="text-primary-600 hover:underline">begeleidingspakketten</Link> of lees meer over <Link href="/blog/reizen-met-beperking" className="text-primary-600 hover:underline">reizen met een fysieke beperking</Link>.
          </p>
        </footer>
      </article>
    </main>
  );
}
