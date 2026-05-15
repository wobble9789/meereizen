import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Glaucoom: Tips voor een Veilige Vliegreis | Vliegklaar',
  description: 'Wilt u vliegen met glaucoom? Lees onze praktische tips over oogdruk, medicatiegebruik aan boord en hoe vliegveld assistentie u kan helpen.',
};

export default function GlaucoomBlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is vliegen gevaarlijk voor de oogdruk bij glaucoom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over het algemeen is vliegen veilig bij stabiel glaucoom. De druk in de vliegtuigcabine is lager, maar dit heeft meestal geen direct schadelijk effect op de interne oogdruk. Overleg echter altijd met uw oogarts voor vertrek."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn oogdruppels meenemen in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, medische vloeistoffen zoals oogdruppels mogen mee in de handbagage, ook als de verpakking groter is dan 100ml (hoewel de meeste flesjes kleiner zijn). Neem voor de zekerheid een medisch paspoort mee."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe druppel ik mijn ogen tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Probeer uw normale schema aan te houden. Was uw handen goed voor het druppelen. Onze reisbegeleiders kunnen u helpen herinneren aan uw schema of ondersteunen bij het druppelen als dat lastig is door turbulentie of vermoeidheid."
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
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar alle blogs</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met glaucoom: waar moet u op letten?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Veel senioren met glaucoom vragen zich af of vliegen invloed heeft op hun oogdruk of gezichtsvermogen. 
            In dit artikel leggen we uit hoe u zich optimaal voorbereidt op een vliegreis.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <h2>Glaucoom en luchtdruk</h2>
          <p>
            Tijdens een vlucht wordt de cabinedruk verlaagd tot een niveau dat vergelijkbaar is met een hoogte van ongeveer 2000 meter. 
            Voor de meeste reizigers met stabiel glaucoom vormt dit geen risico. De interne oogdruk wordt namelijk niet direct beïnvloed 
            door de externe luchtdrukveranderingen. 
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 italic">
            <strong>Belangrijk:</strong> Heeft u onlangs een oogoperatie ondergaan? Vlieg dan nooit zonder expliciete toestemming 
            van uw oogarts, omdat luchtbellen in het oog na een operatie kunnen uitzetten door de lagere cabinedruk.
          </div>

          <h2>Praktische tips voor onderweg</h2>
          <ul>
            <li><strong>Houd oogdruppels bij de hand:</strong> Stop uw medicatie in uw handbagage, nooit in de ruimbagage (vanwege kans op bevriezing of verlies).</li>
            <li><strong>Hydratatie:</strong> De lucht in een vliegtuig is erg droog. Gebruik eventueel extra bevochtigende druppels (kunsttranen) in overleg met uw arts.</li>
            <li><strong>Tijdzones:</strong> Bij lange reizen kan uw druppelschema in de war raken. Houd zoveel mogelijk uw normale interval aan.</li>
            <li><strong>Verlichting:</strong> Sommige glaucoom-patiënten zijn gevoelig voor fel licht. Een goede zonnebril is essentieel op vliegvelden met grote glaspartijen.</li>
          </ul>

          <h2>Hoe vliegveld assistentie helpt</h2>
          <p>
            Als uw gezichtsveld beperkt is door glaucoom, kan navigeren op een grote luchthaven als Schiphol stressvol zijn. 
            Het aanvragen van <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan">vliegveld assistentie</Link> zorgt ervoor dat 
            u veilig naar de gate wordt begeleid.
          </p>
          <p>
            Bij Vliegklaar gaan we een stap verder. Onze <Link href="/reisbegeleiding-ouderen">reisbegeleiders</Link> zijn er niet 
            alleen voor de weg naar de gate, maar ondersteunen u de gehele reis. Van hulp bij het druppelen tot het voorlezen van 
            menu-kaarten of borden aan boord.
          </p>

          <div className="mt-12 p-6 bg-primary-900 text-white rounded-2xl">
            <h3 className="text-white mt-0">Zorgeloos vliegen met glaucoom?</h3>
            <p className="text-primary-100">
              Onze begeleiders zorgen dat u zich geen zorgen hoeft te maken over uw medicatie of de weg op de luchthaven.
            </p>
            <Link href="/contact" className="inline-block bg-primary-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors">
              Vraag naar de mogelijkheden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
