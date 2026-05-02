import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pacemaker en vliegen: Alles wat u moet weten | Vliegklaar',
  description: 'Kunt u veilig vliegen met een pacemaker? Lees onze tips over vliegveldbeveiliging, medische verklaringen en comfortabel reizen voor senioren.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">
          Pacemaker en vliegen: Zorgeloos op reis
        </h1>
        <p className="text-xl text-slate-600 italic">
          Alles wat u moet weten over veiligheid, beveiliging en comfort.
        </p>
      </header>

      <div className="prose prose-slate lg:prose-lg max-w-none">
        <p>
          Veel senioren vragen zich af of een pacemaker een belemmering vormt voor vliegreizen. Het korte antwoord is: <strong>nee</strong>, met de juiste voorbereiding kunt u prima en veilig vliegen. In dit artikel leggen we uit waar u op moet letten bij de beveiligingscontrole en hoe u uw reis zo comfortabel mogelijk maakt.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">De beveiligingscontrole op de luchthaven</h2>
        <p>
          De belangrijkste zorg bij vliegen met een pacemaker is vaak de metaaldetector of de bodyscanner. Moderne pacemakers zijn goed beschermd tegen interferentie, maar het is belangrijk om de beveiligingsbeambten vooraf in te lichten.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Meld het direct:</strong> Geef bij de controle aan dat u een geimplanteerd medisch apparaat heeft.</li>
          <li><strong>Pacemakerpasje:</strong> Houd uw Europese of internationale pacemaker-identificatiekaart bij de hand. Dit is uw belangrijkste document.</li>
          <li><strong>Handmatige controle:</strong> U kunt vragen om een handmatige controle (fouilleren) in plaats van door de metaaldetector te lopen.</li>
          <li><strong>De detectiepoort:</strong> Als u toch door een poortje loopt, doe dit dan in een normaal tempo en blijf niet in de poort staan.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Medische verklaring en voorbereiding</h2>
        <p>
          Naast uw pacemakerpasje is het verstandig om een actuele medicatielijst bij u te hebben. Mocht er onverhoopt iets gebeuren, dan kunnen artsen ter plaatse direct zien welke zorg u nodig heeft.
        </p>
        <p>
          Overleg ook altijd even met uw cardioloog voor vertrek, zeker als het uw eerste vlucht is sinds de implantatie of als u recent een ingreep heeft gehad.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips voor een comfortabele vlucht</h2>
        <p>
          Reizen met een medische achtergrond vraagt om wat extra aandacht voor comfort:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Kleding:</strong> Draag loszittende kleding zodat er geen druk op de wond of het apparaat komt te staan.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water tijdens de vlucht.</li>
          <li><strong>Beweging:</strong> Blijf in beweging om de bloedsomloop te stimuleren, zeker bij langere vluchten.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-2 text-blue-800">Hulp nodig bij uw reis?</h3>
          <p className="mb-4 text-blue-900">
            Ziet u op tegen de logistiek of de drukte op het vliegveld? Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u bij de bagage, de security-check en zorgen dat u ontspannen op uw bestemming aankomt.
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Bekijk hoe wij helpen
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Veelgestelde vragen</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Mag ik mijn pacemakerpasje digitaal laten zien?</h4>
            <p>Het is sterk aanbevolen om de fysieke kaart bij u te dragen, omdat beveiligingssystemen soms de voorkeur geven aan het originele document.</p>
          </div>
          <div>
            <h4 className="font-bold">Kan de luchthavenscanner mijn instellingen veranderen?</h4>
            <p>De kans hierop is extreem klein bij moderne apparatuur, maar door de instructies van het personeel te volgen en niet stil te staan in de poort, minimaliseert u elk risico.</p>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-slate-500 text-sm italic">
          Disclaimer: Dit artikel is bedoeld voor informatieve doeleinden. Raadpleeg bij medische vragen altijd uw behandelend arts.
        </p>
      </footer>

      {/* JSON-LD voor SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Pacemaker en vliegen: Alles wat u moet weten',
            description: 'Kunt u veilig vliegen met een pacemaker? Lees onze tips over vliegveldbeveiliging en medische verklaringen.',
            author: {
              '@type': 'Organization',
              name: 'Vliegklaar',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Vliegklaar',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vliegklaar.nl/logo.png',
              },
            },
            datePublished: '2026-05-02',
          }),
        }}
      />
    </article>
  );
}
