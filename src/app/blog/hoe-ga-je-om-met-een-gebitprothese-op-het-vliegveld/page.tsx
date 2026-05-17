import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gebitprothese op het vliegveld? | Vliegklaar',
  description: 'Tips voor senioren met een gebitprothese op de luchthaven. Alles over security, onderhoud onderweg en comfort tijdens de vlucht.',
};

export default function GebitprothekeVliegveldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole. De scanners op het vliegveld reageren niet op de kleine hoeveelheid metaal die in sommige protheses verwerkt zit."
        }
      },
      {
        "@type": "Question",
        "name": "Wat als de metaaldetector toch afgaat door mijn prothese?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In het zeer zeldzame geval dat een metaaldetector afgaat, kunt u discreet aangeven dat u een prothese draagt. De beveiligingsmedewerkers zijn getraind om hier professioneel en met respect voor uw privacy mee om te gaan."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik gebitstabletten meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, gebitstabletten zijn vaste stoffen en vallen niet onder de vloeistoffenregels. U kunt deze dus zonder problemen meenemen in uw handbagage voor gebruik tijdens een lange reis."
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een gebitprothese op het vliegveld?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met een gebitprothese of kunstgebit roept bij veel senioren vragen op. Moet het uit bij de security? 
            Hoe verzorg je het tijdens een lange vlucht? Wij geven u de praktische tips voor een zorgeloze reis.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">1. De Security Check</h2>
          <p>
            Een van de grootste zorgen is de veiligheidscontrole. Wees gerust: <strong>uw kunstgebit mag gewoon blijven zitten</strong>. 
            Zelfs als uw prothese metalen klemmetjes heeft, is de hoeveelheid metaal meestal te gering om de poortjes te laten afgaan. 
            Mocht er toch een extra controle nodig zijn, dan gebeurt dit altijd discreet.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Handbagage Checklist</h2>
          <p>
            Voor een comfortabele reis is het slim om een klein &apos;gebitspakketje&apos; in uw handbagage te hebben:
          </p>
          <ul>
            <li><strong>Reis-tandenborstel:</strong> Voor een snelle opfrisbeurt na de maaltijd.</li>
            <li><strong>Kleine tube kleefpasta:</strong> Let op: deze moet in het doorzichtige vloeistoffenzakje (max 100ml).</li>
            <li><strong>Gebitstabletten:</strong> Handig voor een grondige reiniging tijdens een tussenstop.</li>
            <li><strong>Een stevig bakje:</strong> Mocht u uw gebit tijdens de vlucht toch even uit willen doen (bijv. tijdens het slapen).</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de Vlucht</h2>
          <p>
            De droge lucht in de cabine kan invloed hebben op het draagcomfort van uw prothese. Drink voldoende water om een droge mond te voorkomen. 
            Dit zorgt ervoor dat uw gebit beter op zijn plek blijft zitten. Als u een lange vlucht heeft en gaat slapen, 
            beslis dan vooraf of u uw gebit inhoudt of in een bakje bewaart.
          </p>

          <blockquote className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 italic">
            &quot;Een goede voorbereiding neemt de onzekerheid weg. Bij Vliegklaar helpen we senioren om met zelfvertrouwen op reis te gaan, ook met een prothese.&quot;
          </blockquote>

          <h2 className="text-2xl font-bold text-primary-800">4. Hygiëne onderweg</h2>
          <p>
            Op luchthavens en in vliegtuigen zijn de toiletten vaak krap. Maak gebruik van de ruimere mindervalidentoiletten op de luchthaven 
            als u uw gebit rustig wilt reinigen. Gebruik altijd drinkwater (flesje) om uw gebit en mond te spoelen, 
            zeker in landen waar het kraanwater niet betrouwbaar is.
          </p>
        </div>

        <section className="mt-16 bg-gray-50 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/blog" className="text-primary-600 font-bold hover:underline">
            &larr; Terug naar het blogoverzicht
          </Link>
        </div>
      </article>

      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos reizen met begeleiding?</h2>
          <p className="text-xl mb-8">
            Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u bij de security, 
            met uw bagage en zorgen dat u ontspannen geniet van uw reis.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 py-4 rounded-xl transition-colors"
          >
            Vraag informatie aan
          </Link>
        </div>
      </section>
    </main>
  );
}
