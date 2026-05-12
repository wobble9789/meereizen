import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Glaucoom: Tips voor Senioren | Vliegklaar',
  description: 'Kan ik vliegen met glaucoom? Lees alles over luchtdruk, medicatiegebruik en tips voor senioren die veilig willen vliegen met een oogziekte.',
};

export default function BlogVliegenGlaucoom() {
  return (
    <article className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="text-primary-600 hover:underline mb-8 inline-block">
          &larr; Terug naar alle artikelen
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen met glaucoom: waar moet u op letten?
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Veel senioren hebben te maken met glaucoom, een aandoening waarbij de oogdruk verhoogd kan zijn. 
          Een veelgestelde vraag is of het veilig is om met deze aandoening in een vliegtuig te stappen. 
          In de meeste gevallen is vliegen geen probleem, maar een goede voorbereiding is essentieel.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Is vliegen veilig met glaucoom?</h2>
        <p className="text-gray-700 mb-4">
          Over het algemeen heeft de verandering in luchtdruk in de cabine geen directe invloed op de interne oogdruk. 
          Mensen met stabiel glaucoom kunnen dan ook veilig vliegen. Er is echter één belangrijke uitzondering: 
          als u onlangs een oogoperatie heeft ondergaan waarbij gas of lucht in het oog is ingebracht.
        </p>
        <p className="text-gray-700 mb-6">
          In dat geval kan de drukverandering ervoor zorgen dat de gasbel uitzet, wat de oogdruk gevaarlijk kan verhogen. 
          Overleg daarom altijd met uw oogarts als u recent bent geopereerd of als u twijfelt over uw specifieke situatie.
          Lees ook onze algemene tips over <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">vliegen na een operatie</Link>.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Tips voor medicatiegebruik onderweg</h2>
        <p className="text-gray-700 mb-4">
          Voor mensen met glaucoom is het strikt opvolgen van het druppelschema cruciaal. 
          Tijdens een lange reis, zeker bij het passeren van tijdzones, kan dit schema in de war raken.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Houd uw druppels bij de hand:</strong> Stop oogdruppels altijd in uw handbagage, nooit in de koffer die in het ruim gaat. In het ruim kan het vriezen, wat de werking van de medicatie kan beïnvloeden.</li>
          <li><strong>Houd vast aan uw eigen ritme:</strong> Gebruik bij voorkeur uw eigen tijdzone voor het druppelen tijdens de vlucht, of overleg met uw arts hoe u het schema kunt aanpassen aan de bestemming.</li>
          <li><strong>Vliegveld assistentie:</strong> Als u door glaucoom minder goed ziet, schroom dan niet om <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">assistentie op de luchthaven</Link> aan te vragen.</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Droge ogen in het vliegtuig</h2>
        <p className="text-gray-700 mb-6">
          De luchtvochtigheid in een vliegtuigcabine is zeer laag (vaak minder dan 20%). Dit kan leiden tot droge ogen, 
          wat extra ongemakkelijk is als u al oogdruppels voor glaucoom gebruikt. Het kan helpen om extra kunsttranen 
          (zonder conserveermiddelen) mee te nemen om uw ogen vochtig te houden tijdens de vlucht.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Zorgeloos op reis met begeleiding</h2>
        <p className="text-gray-700 mb-6">
          Vindt u het lastig om uw medicatieschema bij te houden tijdens een hectische reis, of maakt u zich zorgen 
          over uw zicht op een druk vliegveld? Vliegklaar biedt <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleiding</Link>. 
          Onze begeleiders ondersteunen u bij elke stap, zodat u zich volledig kunt focussen op uw gezondheid en plezier.
        </p>

        <div className="bg-primary-50 p-8 rounded-2xl mt-12">
          <h3 className="text-xl font-bold text-primary-900 mb-4">Wilt u veilig en begeleid vliegen?</h3>
          <p className="text-gray-700 mb-6">
            Of het nu gaat om glaucoom of een andere uitdaging; wij zorgen dat u vliegklaar bent. 
            Onze professionele begeleiders staan voor u klaar.
          </p>
          <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors inline-block">
            Bekijk onze werkwijze
          </Link>
        </div>
      </div>
    </article>
  );
}
