import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Pacemaker of ICD: Veilig op Reis | Vliegklaar',
  description: 'Kunt u veilig vliegen met een pacemaker of ICD? Lees alles over de security check, vliegveld assistentie en praktische tips voor senioren.',
};

export default function PacemakerVliegenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag je door de security scan met een pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, het wordt afgeraden om door de traditionele metaaldetectiepoortjes te lopen. U moet uw pacemaker- of ICD-pas tonen aan het beveiligingspersoneel. Zij zullen u handmatig controleren (fouilleren) zonder de apparatuur te verstoren."
        }
      },
      {
        "@type": "Question",
        "name": "Beïnvloedt de apparatuur in het vliegtuig mijn pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, de elektronica in een modern passagiersvliegtuig heeft geen invloed op de werking van uw pacemaker of ICD. U kunt veilig en zonder zorgen vliegen."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben om te vliegen met een ICD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoewel het niet altijd strikt verplicht is voor de vlucht zelf, is het essentieel om uw implantatiekaart (pacemakerpas) bij u te hebben. Dit geldt als uw officiële bewijs bij de security en voor medische hulpverleners op uw bestemming."
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
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline flex items-center gap-2">
            ← Terug naar overzicht
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Pacemaker of ICD: Waar moet u op letten?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Veel senioren met een pacemaker of ICD vragen zich af of vliegen wel veilig is. 
            Het korte antwoord is: ja, mits u de juiste voorbereidingen treft bij de security en op de luchthaven.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Medische zorg en vliegen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800">De Security Check op het Vliegveld</h2>
          <p>
            Dit is het belangrijkste punt van aandacht. De sterke magnetische velden van metaaldetectiepoortjes kunnen de instellingen van uw pacemaker of ICD tijdelijk verstoren. 
          </p>
          <ul>
            <li><strong>Meld het direct:</strong> Geef voor u door de controle gaat aan dat u een geimplanteerd medisch apparaat heeft.</li>
            <li><strong>Toon uw pas:</strong> Houd uw pacemaker- of ICD-identificatiekaart bij de hand. Dit is internationaal erkend.</li>
            <li><strong>Handmatige controle:</strong> Het personeel zal u om de poortjes heen leiden en handmatig controleren.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">Tijdens de Vlucht</h2>
          <p>
            In de cabine hoeft u zich geen zorgen te maken. De apparatuur aan boord is goed afgeschermd. Het is wel belangrijk om tijdens een lange vlucht in beweging te blijven om de doorbloeding te stimuleren, wat extra belangrijk is voor hartpatiënten.
          </p>

          <blockquote className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
            <p className="italic mb-0">
              &quot;Wist u dat u op de luchthaven assistentie kunt aanvragen om de afstanden naar de gate te overbruggen? Dit voorkomt onnodige fysieke inspanning vlak voor uw vlucht.&quot;
            </p>
          </blockquote>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">Praktische Checklist</h2>
          <ul>
            <li>Draag uw pacemakerpas altijd in uw handbagage (nooit in de ruimbagage).</li>
            <li>Zorg voor een actueel overzicht van uw medicijnen.</li>
            <li>Vraag <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> aan als u moeite heeft met lange stukken lopen.</li>
            <li>Check bij uw cardioloog of uw apparaat recent is uitgelezen voor vertrek.</li>
          </ul>
        </div>

        <section className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Hulp nodig bij uw vliegreis?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ziet u op tegen de security check of de drukte op het vliegveld? Onze begeleiders reizen met u mee en zorgen dat alles soepel verloopt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reisbegeleiding-ouderen"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Ontdek onze reisbegeleiding
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all"
            >
              Vrijblijvend advies
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
