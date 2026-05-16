import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog: Reizen met een CPAP-apparaat als senior | Vliegklaar',
  description: 'Handige tips voor senioren die reizen met een CPAP-apparaat tegen slaapapneu. Alles over handbagage, douane en gebruik in het vliegtuig.',
};

export default function BlogCPAPPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag mijn CPAP-apparaat mee als handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een CPAP-apparaat is een medisch hulpmiddel en mag bijna altijd gratis mee als extra handbagage bovenop uw standaard limiet. Meld dit wel vooraf aan bij de luchtvaartmaatschappij."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een medische verklaring nodig voor mijn CPAP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is sterk aanbevolen om een medische verklaring (vaak een CPAP-paspoort) bij u te hebben. Dit voorkomt problemen bij de security en douane, vooral in het buitenland."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik mijn CPAP gebruiken tijdens een nachtvlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veel moderne vliegtuigen hebben stopcontacten bij de stoel, maar de spanning kan variëren. Vraag vooraf bij de luchtvaartmaatschappij of gebruik aan boord is toegestaan en of u een specifieke adapter of batterij nodig heeft."
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
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Reizen met een CPAP-apparaat: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Voor senioren met slaapapneu is de CPAP (Continuous Positive Airway Pressure) onmisbaar voor een goede nachtrust. 
            Maar hoe neemt u dit apparaat veilig en gemakkelijk mee op reis? In dit artikel leggen we alles uit over vliegen met een CPAP.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <h2 className="text-2xl font-bold text-primary-800">1. Het CPAP-apparaat als medische handbagage</h2>
          <p>
            Het belangrijkste om te weten is dat een CPAP-apparaat wordt beschouwd als een <strong>medisch noodzakelijk hulpmiddel</strong>. 
            Bij de meeste luchtvaartmaatschappijen mag u dit apparaat gratis meenemen als extra tas, naast uw normale handbagage. 
            Het is echter cruciaal om dit minimaal 48 uur voor vertrek aan te melden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Voorbereiding: Het CPAP-paspoort</h2>
          <p>
            Vraag bij uw leverancier of arts om een medische verklaring of een CPAP-paspoort. 
            Hierin staat in meerdere talen uitgelegd dat het om een medisch apparaat gaat. 
            Dit versnelt het proces bij de security-controle aanzienlijk.
          </p>
          <p>
            <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 underline">
              Lees hier meer over het aanvragen van een medische verklaring.
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Door de security op het vliegveld</h2>
          <p>
            Bij de security-check moet u het CPAP-apparaat vaak uit de tas halen, net als een laptop. 
            Gebruik een doorzichtige plastic zak om de machine hygiënisch te houden wanneer deze in de bak gaat. 
            De slangen en het masker mogen meestal in de tas blijven zitten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Gebruik tijdens de vlucht</h2>
          <p>
            Wilt u het apparaat tijdens een lange vlucht gebruiken? Controleer dan of uw stoel beschikt over een stopcontact. 
            Let op: veel luchtvaartmaatschappijen verbieden het gebruik van de bevochtiger aan boord vanwege het risico op lekken en morsen door turbulentie. 
            Gebruik de CPAP aan boord dus alleen &apos;droog&apos;.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">5. Tips voor op de bestemming</h2>
          <ul>
            <li>Neem een verlengsnoer mee; stopcontacten in hotels zitten niet altijd naast het bed.</li>
            <li>Gebruik gedestilleerd water als dat mogelijk is, of kook kraanwater vooraf af (indien veilig op de bestemming).</li>
            <li>Neem een universele wereldstekker mee.</li>
          </ul>

          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-8">
            <h3 className="text-xl font-bold text-primary-800 mb-2">Hulp nodig bij uw reis?</h3>
            <p className="text-gray-700">
              Ziet u op tegen de rompslomp met uw medische apparatuur op het vliegveld? 
              De begeleiders van Vliegklaar helpen u graag bij de voorbereiding en tijdens de reis zelf.
            </p>
            <Link href="/contact" className="text-primary-600 font-bold hover:underline">
              Neem contact op voor de mogelijkheden →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
