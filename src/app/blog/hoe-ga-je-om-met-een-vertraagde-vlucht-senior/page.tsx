import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een vertraagde vlucht als senior? | Vliegklaar',
  description: 'Tips voor senioren bij vluchtvertraging: van comfort op de luchthaven tot het regelen van assistentie en vergoedingen.',
};

export default function BlogVertraagdeVlucht() {
  return (
    <article className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
          Hoe ga je om met een vertraagde vlucht als senior?
        </h1>
        
        <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
            alt="Wachten op de luchthaven"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Vluchtvertragingen zijn een van de meest vervelende aspecten van reizen. Voor senioren kan een onverwachte wachttijd extra uitdagend zijn door vermoeidheid, fysiek ongemak of zorgen over aansluitende reizen. In dit artikel delen we praktische tips om een vertraging comfortabel en zorgeloos door te komen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Rust en Comfort op de Luchthaven</h2>
          <p>
            Zodra u hoort dat uw vlucht vertraagd is, is het belangrijk om direct een comfortabele plek te zoeken. Lange tijd staan bij een gate is vermoeiend. Zoek een zitplaats met armleuningen (makkelijker bij het opstaan) of overweeg toegang tot een luchthavenlounge. Lounges bieden vaak comfortabelere stoelen, rust en gratis versnaperingen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Schakel Luchthavenassistentie in</h2>
          <p>
            Heeft u al <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> aangevraagd? Bij een vertraging van meerdere uren of een wijziging van gate kan het personeel u helpen. Als u minder mobiel bent, kunnen zij u met een karretje of rolstoel naar een rustigere plek brengen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Medicatie en Voeding</h2>
          <p>
            Houd uw <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijnen altijd in uw handbagage</Link>. Bij een vertraging kan het zijn dat u een dosis moet innemen terwijl u nog op de grond bent. Zorg ook dat u gehydrateerd blijft; vliegvelden zijn droog en stress kan uitdroging verergeren.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Communicatie met het Thuisfront</h2>
          <p>
            Laat de mensen die u ophalen of uw volgende verblijfplaats weten dat u later aankomt. Veel senioren vinden dit stressvol, maar onthoud dat vertragingen buiten uw macht liggen. Moderne luchthavens hebben bijna overal gratis Wi-Fi om even te bellen of te appen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Uw Rechten en Vergoedingen</h2>
          <p>
            Bij een vertraging van meer dan 2 of 3 uur (afhankelijk van de afstand) heeft u vaak recht op verzorging, zoals vouchers voor eten en drinken. Bij meer dan 3 uur vertraging op de eindbestemming heeft u in veel gevallen recht op een financiële compensatie volgens de EU-verordening 261/2004.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hoe Vliegklaar helpt bij vertraging</h3>
            <p className="mb-0">
              Met een <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleider</Link> hoeft u zich geen zorgen te maken over de logistiek bij vertraging. Wij regelen de vouchers, communiceren met de luchtvaartmaatschappij en zorgen dat u comfortabel kunt wachten. Wij blijven bij u, wat er ook gebeurt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Conclusie</h2>
          <p>
            Een vertraagde vlucht is nooit leuk, maar met de juiste voorbereiding en instelling hoeft het uw reisplezier niet te bederven. Pak uw rust, vraag om hulp wanneer nodig en vergeet niet uw rechten te checken.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-primary-600 font-semibold hover:underline">
            ← Terug naar alle blogs
          </Link>
        </div>
      </div>
    </article>
  );
}