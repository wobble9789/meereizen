import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duurzaam en Bewust Reizen voor Ouderen: Tips & Inspiratie | Vliegklaar',
  description: 'Ontdek hoe u als senior duurzaam en comfortabel kunt reizen. Van milieuvriendelijke bestemmingen tot tips voor minder CO2-uitstoot zonder in te leveren op gemak.',
};

export default function DuurzaamReizenBlog() {
  return (
    <article className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Duurzaam en Bewust Reizen voor Ouderen: Hoe pakt u dat aan?
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-8">
            <span>1 mei 2026</span>
            <span className="mx-2">•</span>
            <span>6 min leestijd</span>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
              alt="Duurzaam reizen en natuur"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Duurzaamheid is een thema dat ons allemaal aangaat, ongeacht de leeftijd. Voor veel ouderen is de wens om de wereld te blijven ontdekken groot, maar tegelijkertijd groeit het bewustzijn over de impact van reizen op het milieu. Gelukkig sluiten duurzaamheid en comfort elkaar niet uit. Integendeel: bewust reizen zorgt vaak voor een diepere, meer ontspannen ervaring.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Waarom duurzaam reizen juist nu loont</h2>
          <p>
            Bewust kiezen voor een bestemming of vervoersmiddel betekent vaak dat u de massa vermijdt. Voor senioren biedt dit grote voordelen: minder drukte op vliegvelden, kortere wachtrijen en een authentiekere ervaring op de plaats van bestemming. Bovendien draagt u direct bij aan het behoud van de plekken die u zo graag bezoekt voor toekomstige generaties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips voor een kleinere ecologische voetafdruk</h2>
          <ul>
            <li><strong>Kies voor &apos;Slow Travel&apos;:</strong> In plaats van drie korte stedentrips per jaar, kunt u kiezen voor één langere vakantie. Dit vermindert het aantal vluchten en geeft u de tijd om een regio echt te leren kennen.</li>
            <li><strong>Reis buiten het hoogseizoen:</strong> Dit ontlast de lokale infrastructuur en is vaak ook veel aangenamer qua temperatuur en drukte.</li>
            <li><strong>Directe vluchten:</strong> Hoewel overstappen soms goedkoper is, zorgen directe vluchten voor aanzienlijk minder CO2-uitstoot (omdat de meeste brandstof wordt verbruikt tijdens het opstijgen).</li>
            <li><strong>Lokaal verblijf:</strong> Kies voor kleinschalige hotels of B&B&apos;s die gerund worden door lokale families. Zo komt uw geld direct ten goede aan de lokale economie.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comfortabel én groen</h2>
          <p>
            Veel mensen denken dat duurzaam reizen afzien betekent. Niets is minder waar. Veel duurzame accommodaties focussen juist op rust, natuur en gezonde, lokale voeding. Dit zijn precies de elementen die een reis voor ouderen zo waardevol maken.
          </p>

          <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-xl text-gray-600">
            &quot;De mooiste manier om te reizen is met een open vizier voor de natuur en respect voor de lokale cultuur.&quot;
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hoe Vliegklaar u ondersteunt</h2>
          <p>
            Bij Vliegklaar geloven we in kwaliteit boven kwantiteit. Onze reisbegeleiders helpen u niet alleen bij de logistiek op het vliegveld, maar kunnen ook adviseren over de meest efficiënte en comfortabele reisroutes. Of u nu kiest voor een treinreis door Europa of een zorgvuldig geplande vlucht, wij zorgen dat de reis soepel verloopt.
          </p>

          <p className="mt-8">
            Wilt u meer weten over hoe wij u kunnen helpen bij een bewuste en zorgeloze vakantie? Neem dan contact met ons op voor een persoonlijk adviesgesprek.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos op reis?</h3>
            <p className="text-gray-700 mb-6">
              Vliegklaar biedt persoonlijke reisbegeleiding van deur tot deur. Of u nu duurzaam wilt reizen of simpelweg extra ondersteuning nodig heeft op de luchthaven, wij staan voor u klaar.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
