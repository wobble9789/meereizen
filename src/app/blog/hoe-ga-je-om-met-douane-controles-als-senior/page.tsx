import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met douane-controles als senior? | Vliegklaar',
  description: 'Tips voor senioren om vlot en ontspannen door de douane en security te gaan op de luchthaven. Ontdek hoe u zich optimaal voorbereidt.',
};

export default function DouaneControlesSeniorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn medicijnen aangeven bij de douane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In principe hoeft u normale hoeveelheden medicijnen voor eigen gebruik niet aan te geven bij de douane binnen de EU. Het is echter essentieel om een Europees Medisch Paspoort of een medicatieoverzicht (AMO) bij u te hebben voor de security check en eventuele vragen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vloeibare medicijnen meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeibare medicijnen die u tijdens de reis nodig heeft, mogen mee in de handbagage, ook als de verpakking groter is dan 100 ml. U moet deze wel apart aanbieden bij de security check, bij voorkeur met een doktersverklaring."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik door de security scan met een pacemaker of prothese?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meld een pacemaker, ICD of metaalhoudende prothese (zoals een heup- of knieprothese) altijd vooraf aan de beveiligingsbeambte. U hoeft dan vaak niet door de metaaldetectorpoort, maar wordt handmatig gecontroleerd. Neem altijd uw prothese-pasje of medische verklaring mee."
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
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met douane-controles als senior?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            De beveiligings- en douanecontroles op luchthavens kunnen voor veel senioren een bron van spanning zijn. 
            Lange rijen, strenge regels en de snelheid waarmee alles moet gebeuren zorgen soms voor onrust. 
            Met de juiste voorbereiding gaat u echter met een gerust hart door elke controle.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1541280892019-914041067201?w=1200&q=80"
            alt="Luchthaven security controle"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">Het verschil tussen Security en Douane</h2>
          <p>
            Veel mensen halen deze twee controles door elkaar. De <strong>security check</strong> (beveiliging) 
            controleert u en uw handbagage op gevaarlijke voorwerpen voordat u het vliegtuig instapt. 
            De <strong>douane</strong> controleert bij aankomst (of soms vertrek) of u goederen bij u heeft 
            waarover belasting betaald moet worden of die verboden zijn.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Tips voor een vlotte Security Check</h2>
          <ul>
            <li>
              <strong>Kledingkeuze:</strong> Draag gemakkelijke schoenen die u snel uit en aan kunt trekken. 
              Vermijd grote metalen riemen of veel sieraden, dit voorkomt dat de metaaldetector afgaat.
            </li>
            <li>
              <strong>Handbagage indelen:</strong> Leg uw vloeistoffen (in een doorzichtig zakje) en elektronica 
              bovenop in uw tas, zodat u ze direct in de bakken kunt leggen.
            </li>
            <li>
              <strong>Assistentie:</strong> Heeft u moeite met lang staan? Vraag via Vliegklaar of direct bij de 
              luchtvaartmaatschappij <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> aan. 
              U mag dan vaak gebruikmaken van een kortere rij.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800">Reizen met medische hulpmiddelen</h2>
          <p>
            Heeft u een pacemaker, ICD of een kunstgewricht? Geef dit direct aan bij de beveiligingsbeambte 
            voordat u door de detectiepoort loopt. Een medisch paspoort of een verklaring van uw arts is 
            hierbij erg handig. Dit voorkomt misverstanden en zorgt ervoor dat u op een passende wijze 
            gecontroleerd wordt (vaak handmatig).
          </p>
          <p>
            Lees ook onze specifieke tips voor <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">vliegen met een pacemaker</Link> of 
            <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 hover:underline">reizen met een prothese</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Medicijnen bij de Douane</h2>
          <p>
            Voor de meeste medicijnen is een Europees Medisch Paspoort voldoende. Reist u echter met medicijnen 
            die onder de Opiumwet vallen (zoals sterke pijnstillers of bepaalde slaapmiddelen)? Dan heeft u 
            een officiële Schengenverklaring of Engelstalige doktersverklaring nodig. 
            Check dit ruim van tevoren via het CAK.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 my-12">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Hulp nodig bij uw volgende reis?</h3>
            <p className="mb-6">
              Ziet u op tegen de drukte op Schiphol of een andere luchthaven? De begeleiders van Vliegklaar 
              wijken niet van uw zijde. Wij helpen u bij elke controle en zorgen dat u ontspannen aan uw 
              reis begint.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Vraag naar de mogelijkheden
            </Link>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/medicijnen-mee-op-reis" className="block p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors border border-gray-200">
              <span className="font-semibold text-primary-700">Medicijnen mee op reis: waar moet u op letten?</span>
            </Link>
            <Link href="/blog/hoe-ga-je-veilig-door-de-security-als-senior" className="block p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors border border-gray-200">
              <span className="font-semibold text-primary-700">Veilig door de security op Schiphol</span>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
