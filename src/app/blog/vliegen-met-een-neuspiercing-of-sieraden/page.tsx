import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een neuspiercing of sieraden: Tips voor senioren | Vliegklaar',
  description: 'Mag een neuspiercing in blijven bij de security? Lees alles over vliegen met piercings, sieraden en metalen accessoires voor een zorgeloze reis.',
};

export default function PiercingSieradenBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn neuspiercing uitdoen bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen hoeft een kleine neuspiercing niet uit. Moderne scanners op luchthavens zoals Schiphol zijn ingesteld op grotere hoeveelheden metaal. Mocht het alarm toch afgaan, dan kan een handmatige controle volgen, maar de piercing zelf mag meestal gewoon blijven zitten."
        }
      },
      {
        "@type": "Question",
        "name": "Welke sieraden zorgen vaak voor problemen bij de beveiligingscontrole?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grote, massieve metalen sieraden zoals brede armbanden, zware kettingen of horloges veroorzaken vaak een melding. Het is verstandig om deze voor de controle alvast in uw handbagage of de bak te leggen om vertraging te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er materialen die niet afgaan bij de metaaldetector?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sieraden van goud, zilver en platina zijn minder magnetisch en geven minder snel een melding bij kleine hoeveelheden. Piercings van titanium of bioplast (kunststof) zijn ideaal voor reizigers, omdat deze vrijwel nooit het alarm activeren."
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
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een neuspiercing of sieraden: Waar moet u op letten?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Voor veel senioren is een sieraad meer dan een accessoire; het heeft vaak emotionele waarde. Maar hoe gaat dat bij de security op het vliegveld? Mag die neuspiercing blijven zitten, en hoe voorkomt u ongemakkelijke situaties bij de metaaldetector?
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">De security-scan en metalen objecten</h2>
          <p className="mb-6">
            De beveiligingsapparatuur op luchthavens is de afgelopen jaren sterk verbeterd. De nieuwste CT-scanners en bodyscan-systemen kunnen heel nauwkeurig zien wat u bij u draagt. Een kleine neuspiercing, een trouwring of dunne oorbellen vormen zelden een probleem. Deze objecten bevatten te weinig metaal om het alarm van een standaard metaaldetector te laten afgaan.
          </p>

          <h3 className="text-xl font-semibold text-primary-700 mb-3">Tips voor een vlotte controle:</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li><strong>Draag fijne sieraden:</strong> Dunne kettingen en ringen kunnen meestal gewoon gedragen worden.</li>
            <li><strong>Berg grote stukken op:</strong> Heeft u opvallende armbanden of een groot horloge? Doe deze voor de rij alvast in een vakje van uw handbagage.</li>
            <li><strong>Piercings:</strong> Als u een piercing heeft die lastig te verwijderen is, laat deze dan gewoon zitten. De beveiligingsbeambte kan u eventueel vragen om de plek aan te wijzen of een extra scan doen met een handdetector.</li>
          </ul>

          <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 mb-10">
            <h4 className="font-bold text-primary-800 mb-2">Wist u dat?</h4>
            <p className="text-gray-700">
              Piercings van titanium of medisch staal zijn niet alleen hypoallergeen, maar ook zeer veilig voor reizigers omdat ze zelden reageren op de scanners.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">Piercings en medische ingrepen</h2>
          <p className="mb-6">
            Net als bij een <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">pacemaker</Link> of een <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 hover:underline">knieprothese</Link>, hoeft u zich bij piercings geen zorgen te maken over de veiligheid van de scan zelf. De straling is minimaal en heeft geen invloed op het materiaal van uw sieraad.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">Conclusie</h2>
          <p className="mb-8">
            U hoeft uw favoriete sieraden of een neuspiercing niet thuis te laten uit angst voor de security. Met een beetje voorbereiding — zoals het opbergen van grotere metalen objecten — loopt u zorgeloos door de controle.
          </p>

          <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Hulp nodig bij uw reisvoorbereiding?</h3>
            <p className="mb-6 text-gray-300">Vliegklaar begeleidt senioren van deur tot deur, ook bij de security-controle.</p>
            <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
