import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een pacemaker of ICD | Vliegklaar Tips',
  description: 'Kunt u veilig vliegen met een pacemaker of ICD? Lees onze praktische tips over security, assistentie en medische verklaringen voor senioren.',
};

export default function PacemakerVliegenBlog() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met een pacemaker of ICD: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Voor veel senioren met een pacemaker of ICD (Implanteerbare Cardioverter Defibrillator) roept vliegen vragen op. 
            Mag u door de beveiligingspoortjes? Beïnvloedt de luchtdruk het apparaat? In dit artikel geven we praktische tips 
            voor een zorgeloze vliegreis.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dad99901?w=800&q=80"
              alt="Medisch advies en vliegen"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary-800">1. De Security op de Luchthaven</h2>
          <p>
            Dit is vaak de grootste zorg: de metaaldetector. Hoewel moderne pacemakers en ICD&apos;s goed beschermd zijn tegen 
            elektromagnetische interferentie, wordt aangeraden om <strong>niet</strong> door de standaard metaaldetectie-poortjes te lopen. 
            De metalen behuizing van uw apparaat kan het alarm activeren, en het krachtige magnetische veld kan theoretisch 
            de instellingen beïnvloeden.
          </p>
          <p>
            <strong>Tip:</strong> Meld bij de security medewerker dat u een pacemaker of ICD heeft. Toon uw identificatiekaart 
            (het &apos;pasje&apos; van uw apparaat). De medewerker zal u dan via een alternatieve route (vaak een handmatige controle 
            of een bodyscanner die geen magnetisch veld gebruikt) langs de controle leiden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. De Pacemaker Identificatiekaart</h2>
          <p>
            Draag uw identificatiekaart altijd bij u in uw handbagage, of nog beter: in uw portemonnee. Hierop staan de gegevens 
            van uw apparaat, de fabrikant en de instellingen. Dit is cruciaal voor security-medewerkers én voor artsen 
            op uw bestemming, mocht u daar onverhoopt zorg nodig hebben.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de Vlucht</h2>
          <p>
            De luchtdruk in de cabine en de elektronische systemen van het vliegtuig hebben geen invloed op de werking 
            van uw pacemaker of ICD. U kunt dus met een gerust hart aan boord stappen. Wel is het belangrijk om tijdens 
            lange vluchten in beweging te blijven om de bloedsomloop te stimuleren, wat voor elke senior met hartklachten 
            raadzaam is. Lees meer over <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 hover:underline">vliegen met hartklachten</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Vraag Vliegveld Assistentie aan</h2>
          <p>
            Een vliegreis kan fysiek zwaar zijn door het vele lopen en wachten. Als u merkt dat uw conditie door uw 
            hartconditie beperkt is, aarzel dan niet om assistentie aan te vragen. Dit kan veel stress en vermoeidheid voorkomen.
            Vliegklaar kan u helpen bij het aanvragen van deze ondersteuning. Bekijk hoe u <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvraagt</Link>.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500 my-12">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Reisbegeleiding op maat</h3>
            <p className="text-gray-700 mb-4">
              Vindt u het spannend om alleen te reizen met uw medische conditie? Vliegklaar biedt persoonlijke reisbegeleiding 
              voor senioren. Onze begeleiders weten precies hoe ze moeten handelen bij security en zorgen voor een rustige, 
              veilige reiservaring.
            </p>
            <Link href="/contact" className="font-bold text-primary-600 hover:text-primary-700 underline">
              Neem contact op voor de mogelijkheden →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800">Conclusie</h2>
          <p>
            Met een goede voorbereiding en het juiste pasje op zak is vliegen met een pacemaker of ICD volkomen veilig. 
            Meld het altijd bij de beveiliging en geniet van uw reis! Wilt u extra zekerheid? Kijk dan ook eens naar onze 
            <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 hover:underline"> checklist voor senioren die gaan vliegen</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer">
              <summary className="font-bold text-primary-700">Mag ik door de bodyscanner?</summary>
              <p className="mt-4 text-gray-600">De meeste moderne bodyscanners (AIT) gebruiken millimetergolven die geen invloed hebben op pacemakers of ICD&apos;s. Toch is het verstandig om altijd uw pasje te tonen; de beveiliging beslist dan welke methode het veiligst is.</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer">
              <summary className="font-bold text-primary-700">Heb ik een medische verklaring nodig?</summary>
              <p className="mt-4 text-gray-600">Hoewel uw identificatiekaart meestal volstaat voor de security, kan een medische verklaring van uw cardioloog nuttig zijn, zeker bij internationale reizen. Lees hier meer over het <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">aanvragen van een medische verklaring</Link>.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
