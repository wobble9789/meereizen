import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe gaat een senior veilig door de security op Schiphol? | Vliegklaar',
  description: 'Tips voor senioren om vlot en stressvrij door de security op Schiphol te gaan. Over vloeistoffen, elektronica en assistentie.',
};

export default function SecuritySchipholSeniorPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Hoe gaat een senior veilig door de security op Schiphol?
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          De security-controle op Schiphol kan voor veel senioren een bron van stress zijn. Lange wachtrijen, bakken die snel gevuld moeten worden en strenge regels kunnen overweldigend aanvoelen. Met de juiste voorbereiding gaat u echter vlot en veilig door de controle.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">De moderne CT-scanners op Schiphol</h2>
          <p className="text-gray-600 mb-4">
            Goed nieuws: Schiphol maakt gebruik van moderne CT-scanners. Dit betekent dat u in de meeste gevallen vloeistoffen en elektronica (zoals laptops of tablets) in uw tas kunt laten zitten. Dit scheelt een hoop gedoe met het in- en uitruimen van uw handbagage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Tips voor een vlotte controle</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600">
            <li>
              <strong>Draag gemakkelijke kleding:</strong> Vermijd riemen met grote metalen gespen en draag schoenen die u makkelijk aan en uit kunt trekken, mocht dat gevraagd worden.
            </li>
            <li>
              <strong>Houd uw documenten bij de hand:</strong> Zorg dat uw instapkaart en paspoort makkelijk bereikbaar zijn, maar berg ze direct na de controle weer veilig op.
            </li>
            <li>
              <strong>Medicijnen en verklaringen:</strong> Heeft u vloeibare medicijnen van meer dan 100ml nodig? Neem dan een medisch paspoort of doktersverklaring mee. Geef dit vooraf aan bij de medewerker.
            </li>
            <li>
              <strong>Pacemakers en protheses:</strong> Heeft u een pacemaker, ICD of metalen gewrichtsprothese? Geef dit aan voordat u door de scanpoort loopt. De medewerkers weten precies hoe ze u handmatig kunnen controleren.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-primary-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Vliegveld assistentie</h2>
          <p className="text-gray-600 mb-4">
            Wist u dat u als senior recht heeft op assistentie? Als u slecht ter been bent of de drukte niet prettig vindt, kunt u assistentie aanvragen. U wordt dan vaak via een kortere route of met extra begeleiding door de security geholpen.
          </p>
          <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 font-bold hover:underline">
            Lees hier hoe u vliegveld assistentie aanvraagt &rarr;
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp van Vliegklaar</h2>
          <p className="text-gray-600 mb-6">
            Ziet u ondanks deze tips nog steeds op tegen de reis? Onze reisbegeleiders gaan met u mee van deur tot deur. Wij dragen de tassen, regelen de bakken bij de security en zorgen dat u ontspannen bij de gate aankomt.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
              Neem contact op
            </Link>
            <Link href="/reisbegeleiding-ouderen-amsterdam" className="bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors">
              Begeleiding in Amsterdam
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
