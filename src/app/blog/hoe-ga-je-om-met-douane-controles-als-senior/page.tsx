import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met douane-controles als senior? | Vliegklaar',
  description: 'Tips voor senioren om ontspannen door de douane en security te gaan. Lees over medicijnen, protheses en vliegveld assistentie.',
};

export default function DouaneControlesSeniorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de douane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u hoeft uw kunstgebit niet uit te doen bij de security of douane. De scans zijn veilig voor gebitsprotheses."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe geef ik een pacemaker aan bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Toon uw pacemaker-identificatiekaart aan de medewerker vóórdat u door de metaaldetectie gaat. U wordt dan handmatig gecontroleerd."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vloeibare medicijnen meenemen door de douane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, noodzakelijke medicijnen (ook vloeibaar boven 100ml) mogen mee, mits u een medisch paspoort of doktersverklaring kunt tonen."
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
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Hoe ga je om met douane-controles als senior?
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            Voor veel senioren is de passage door de security en douane op het vliegveld het meest stressvolle onderdeel van de reis. De drukte, de strenge regels en de onduidelijkheid over wat wel en niet mag, kunnen voor onzekerheid zorgen. In dit artikel leggen we uit hoe u soepel en ontspannen door deze controles komt.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1540339832862-4745299807c3?w=800&q=80"
            alt="Security controle op luchthaven"
            width={800}
            height={450}
            className="rounded-2xl mb-10 shadow-lg"
          />

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Voorbereiding is het halve werk</h2>
          <p className="mb-6">
            Zorg dat u uw reisdocumenten, zoals paspoort en instapkaart, binnen handbereik heeft. Gebruik een tasje dat u makkelijk kunt openen. Als u assistentie heeft aangevraagd, zal de begeleider u vaak door een snellere rij leiden, wat veel tijd en energie bespaart.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Omgaan met protheses en hulpmiddelen</h2>
          <p className="mb-6">
            Heeft u een heupprothese, een knieprothese of een pacemaker? Dit zijn zaken die het alarm van de metaaldetectie kunnen activeren. Geen zorgen, dit gebeurt dagelijks. 
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Protheses:</strong> Meld het vooraf bij de medewerker. U zult waarschijnlijk handmatig gefouilleerd worden.</li>
            <li><strong>Pacemaker/ICD:</strong> Toon uw pasje. Loop nooit door de detectiepoortjes, maar vraag om een handmatige controle.</li>
            <li><strong>Hulpmiddelen:</strong> Een rollator of rolstoel wordt apart gescand.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Medicijnen en de douane</h2>
          <p className="mb-6">
            Medicijnen mogen altijd mee in de handbagage. Voor vloeibare medicijnen of injectienaalden (bijvoorbeeld voor diabetes) heeft u een officieel medicijnpaspoort of een doktersverklaring nodig. Bewaar deze bij uw medicijnen in een doorzichtig zakje, zodat u ze direct kunt laten zien bij de controle.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Vliegveld assistentie aanvragen</h2>
          <p className="mb-6">
            Ziet u op tegen de lange rijen of de afstanden op Schiphol of een andere luchthaven? Vraag dan minimaal 48 uur van tevoren vliegveld assistentie aan. Een medewerker helpt u dan door de security en brengt u naar de juiste gate.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 my-10">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u niet alleen bij de voorbereiding, maar kunnen ook met u meereizen om alle zorgen bij de douane en security uit handen te nemen.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Neem contact op voor meer informatie
            </Link>
          </div>
        </div>

        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen over douane-controles</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
