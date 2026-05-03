import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit: Tips voor een zorgeloze vlucht | Vliegklaar',
  description: 'Zorgen over vliegen met een kunstgebit of prothese? Lees onze praktische tips over luchtdruk, reiniging en comfort tijdens het vliegen voor senioren.',
};

export default function VliegenMetGebitPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gebit: Tips voor een zorgeloze vlucht
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is een kunstgebit of een gedeeltelijke prothese onderdeel van het dagelijks leven. Maar hoe zit dat eigenlijk als u gaat vliegen? Kan de luchtdruk invloed hebben? En waar moet u op letten bij de security? In dit artikel geven we praktische tips voor een comfortabele reis.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[450px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren genieten van hun reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg prose-primary max-w-none">
          <h2 className="text-2xl font-bold text-primary-800">Luchtdruk en uw gebit</h2>
          <p>
            Een veelgestelde vraag is of de veranderende luchtdruk in de cabine invloed heeft op de pasvorm van een kunstgebit. In principe is een goed passend gebit bestand tegen drukverschillen. Echter, als er lucht onder de prothese zit, kan dit door het uitzetten van de lucht (bij het stijgen) voor een drukkend gevoel zorgen.
          </p>
          <p>
            <strong>Tip:</strong> Zorg dat uw gebit goed aansluit voor vertrek. Gebruikt u normaal gesproken kleefpasta? Neem dan een kleine tube (reispakking) mee in uw handbagage voor het geval dat.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Security check op de luchthaven</h2>
          <p>
            U hoeft zich geen zorgen te maken over de metaaldetector of de bodyscanner. De materialen die in moderne gebitsprotheses worden gebruikt, veroorzaken meestal geen alarm. Mocht dit wel gebeuren, dan kunt u discreet aan de beveiligingsbeambte melden dat u een prothese draagt. U hoeft uw gebit nooit uit te nemen bij de security.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Eten en drinken aan boord</h2>
          <p>
            Vliegtuigvoedsel kan soms onverwacht hard of taai zijn. Bovendien zorgt de droge lucht in de cabine vaak voor een droge mond, wat de retentie van uw gebit kan verminderen.
          </p>
          <ul>
            <li><strong>Drink voldoende water:</strong> Dit helpt tegen een droge mond.</li>
            <li><strong>Kies voor zachte opties:</strong> Als u de keuze heeft, kies dan voor pasta of vis in plaats van taai vlees.</li>
            <li><strong>Vermijd koolzuur:</strong> Koolzuurhoudende dranken kunnen zorgen voor gasvorming onder de prothese.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800">Hygiëne tijdens een lange vlucht</h2>
          <p>
            Op lange vluchten is het prettig om uw gebit tussendoor te kunnen reinigen, zeker na een maaltijd of een dutje. 
          </p>
          <p>
            Neem een kleine tandenborstel en een prothesebakje mee in uw handbagage. Let op: vloeibare gebitsreiniger valt onder de 100ml regel voor vloeistoffen. Bruistabletten zijn een handig en droog alternatief voor onderweg.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl my-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="text-primary-800 mb-6">
              Ziet u op tegen de logistiek of de kleine ongemakken van het vliegen als senior? Onze reisbegeleiders helpen u met alles: van bagage tot maaltijden aan boord.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors inline-block">
              Ontdek onze reisbegeleiding
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800">Wat als er iets misgaat?</h2>
          <p>
            Het is de nachtmerrie van iedere reiziger: een gebroken gebit in het buitenland. Neem voor de zekerheid een reparatiesetje mee voor noodsituaties, maar ga bij echte schade altijd naar een lokale tandarts of tandtechnieker. Uw reisbegeleider van Vliegklaar kan u in dergelijke situaties ondersteunen bij het vinden van de juiste zorg.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Conclusie</h2>
          <p>
            Vliegen met een gebit is met een klein beetje voorbereiding totaal geen probleem. Met voldoende water, de juiste spullen in uw handbagage en eventueel wat kleefpasta kunt u met een gerust hart het vliegtuig in stappen.
          </p>
          <p>
            Wilt u meer weten over comfortabel reizen voor senioren? Bekijk ook onze <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 hover:underline">checklist voor senioren die gaan vliegen</Link>.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Zorgeloos op reis met persoonlijke begeleiding</h2>
          <p className="text-xl text-gray-600 mb-8">
            Vliegklaar biedt begeleiding op maat voor senioren. Wij regelen de details, u geniet van de reis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diensten" className="bg-primary-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-700 shadow-lg transition-all">
              Bekijk onze diensten
            </Link>
            <Link href="/contact" className="bg-white border-2 border-primary-600 text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-primary-50 transition-all">
              Vrijblijvend kennismaken
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
