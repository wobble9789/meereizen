import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor op het vliegveld | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een gehoorapparaat. Hoe werkt het bij de security en in het vliegtuig? Lees onze praktische gids.',
};

export default function VliegenMetGehoorapparaatBlog() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen met een gehoorapparaat: Tips voor op het vliegveld
        </h1>
        
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1590053132142-6320a1c1d882?w=1200&q=80"
            alt="Senior met gehoorapparaat geniet van reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Voor senioren die gebruikmaken van een gehoorapparaat kan vliegen soms voor extra spanning zorgen. Werkt de security-scanner op mijn apparaat? Versta ik de omroepen op de luchthaven wel? In dit artikel delen we praktische tips om uw vliegreis met een gehoorapparaat zorgeloos te laten verlopen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Gehoorapparaat en de security check</h2>
          <p>
            Een van de meest gestelde vragen is of het gehoorapparaat uit moet bij de metaaldetector of de bodyscan. Het antwoord is simpel: <strong>nee, u kunt uw gehoorapparaat gewoon inhouden</strong>. Moderne gehoorapparaten worden niet beschadigd door de scanners op het vliegveld.
          </p>
          <p>
            Het is wel verstandig om de beveiligingsbeambte even te laten weten dat u een gehoorapparaat draagt. Mocht de detector afgaan, dan weten zij direct wat de oorzaak is. U kunt eventueel een medische verklaring of uw apparaat-pasje bij de hand houden, al is dit zelden nodig.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Hulpmiddelen op de luchthaven</h2>
          <p>
            Luchthavens zijn vaak lawaaierige omgevingen met veel achtergrondgeluid. Dit kan het lastig maken om belangrijke aankondigingen te horen. Gelukkig zijn de meeste grote vliegvelden uitgerust met een <strong>ringleiding</strong> (Induction Loop).
          </p>
          <p>
            Zet uw gehoorapparaat op de &apos;T-stand&apos; (telecoil) bij de informatiebalies of bij de gates waar het ringleidingsymbool (een oor met een &apos;T&apos;) staat aangegeven. Hierdoor hoort u de informatie direct in uw gehoorapparaat, zonder storend omgevingsgeluid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Tijdens de vlucht</h2>
          <p>
            Tijdens het vliegen verandert de luchtdruk. Dit kan invloed hebben op hoe uw gehoorapparaat aanvoelt. Sommige mensen vinden het prettig om de apparaten tijdens het stijgen en landen even uit te doen om de druk in de oren makkelijker te kunnen egaliseren door te slikken of te kauwen.
          </p>
          <p>
            Wanneer u op kruishoogte bent, kunt u ze weer gewoon dragen. Het is vaak zelfs prettiger om ze in te houden, zodat u instructies van het cabinepersoneel goed kunt opvolgen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Reservebatterijen en onderhoud</h2>
          <p>
            Niets is vervelender dan een lege batterij midden in uw reis. Neem altijd extra batterijen mee in uw handbagage. Door de droge lucht in de cabine kunnen batterijen soms sneller leeglopen dan u gewend bent. Heeft u een oplaadbaar apparaat? Zorg dan dat de oplader ook in uw handbagage zit, voor het geval uw koffer vertraagd is.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Persoonlijke begeleiding van Vliegklaar</h2>
          <p>
            Vindt u het prettig als er iemand met u meereist die de omgeving in de gaten houdt en zorgt dat u geen informatie mist? De reisbegeleiders van Vliegklaar zijn gewend om senioren met gehoorproblemen te ondersteunen. Wij herhalen belangrijke informatie, helpen bij het communiceren met vliegveldpersoneel en zorgen dat u ontspannen op uw bestemming aankomt.
          </p>
          <p>
            Of u nu vertrekt vanuit <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link>, <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link> of een andere regio, wij staan voor u klaar.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl mt-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Bekijk ook onze andere tips:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Medicijnen mee op reis: waar moet u op letten?</Link></li>
              <li><Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Tips voor het meenemen van een rollator</Link></li>
              <li><Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 hover:underline">De complete checklist voor senioren die gaan vliegen</Link></li>
            </ul>
          </div>
        </div>
      </article>

      <section className="bg-primary-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos reizen met begeleiding?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Ontdek hoe onze persoonlijke reisbegeleiders uw volgende vliegreis comfortabeler maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Vrijblijvende informatie
            </Link>
            <a
              href="tel:0618769492"
              className="bg-transparent border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Bel: 06-18769492
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
