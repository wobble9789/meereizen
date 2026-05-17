import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checklist: Vliegen na een operatie (Heup, Knie, Oog) | Vliegklaar',
  description: 'Wanneer mag je weer vliegen na een operatie? Bekijk onze checklist voor vliegen na een heupoperatie, knieoperatie of oogoperatie. Veilig reizen voor senioren.',
};

export default function VliegenNaOperatieBlogPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een operatie: Wanneer is het veilig?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Heeft u onlangs een operatie ondergaan en staat er een vliegreis gepland? Of het nu gaat om een nieuwe heup, een staaroperatie of een kleine ingreep: vliegen stelt uw lichaam op de proef. In dit artikel leest u de belangrijkste richtlijnen voor een veilige vlucht.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <Image 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" 
            alt="Arts in gesprek met patiënt over reizen" 
            width={800} 
            height={400} 
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>Waarom is vliegen anders na een operatie?</h2>
          <p>
            Tijdens een vlucht is de luchtdruk lager en de lucht droger dan op de grond. Daarnaast zit u vaak lange tijd stil in een krappe ruimte. Dit verhoogt het risico op complicaties zoals trombose (bloedpropjes) of zwellingen rondom het litteken.
          </p>

          <h2>1. Vliegen na een heup- of knieoperatie</h2>
          <p>
            Na een orthopedische ingreep zoals een <strong>nieuwe heup of knie</strong> wordt meestal geadviseerd om minimaal 6 tot 8 weken te wachten met vliegen. Het grootste risico hierbij is diep-veneuze trombose (DVT). 
          </p>
          <ul>
            <li><strong>Tip:</strong> Vraag uw arts of u bloedverdunners moet gebruiken tijdens de reis.</li>
            <li><strong>Beweging:</strong> Loop elk uur een stukje door het gangpad en doe enkeloefeningen in uw stoel.</li>
            <li><strong>Assistentie:</strong> Boek <Link href="/luchthaven-begeleiding" className="text-primary-600 underline">luchthavenbegeleiding</Link> om lange loopafstanden te vermijden.</li>
          </ul>

          <h2>2. Vliegen na een oogoperatie (zoals staar)</h2>
          <p>
            Voor een staaroperatie mag u vaak al na 24 uur vliegen, mits er geen complicaties zijn. Echter, bij operaties waarbij <strong>gas of lucht in het oog</strong> is ingebracht (zoals bij een netvliesoperatie), is vliegen levensgevaarlijk voor uw gezichtsvermogen. De gasbel zet uit door de lagere luchtdruk.
          </p>
          <p>
            Wilt u meer weten over vliegen met oogproblemen? Lees ook ons artikel over 
            <Link href="/blog/vliegen-met-staar" className="ml-1 text-primary-600 underline">vliegen met staar</Link> of 
            <Link href="/blog/vliegen-met-glaucoom" className="ml-1 text-primary-600 underline">vliegen met glaucoom</Link>.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-10">
            <h3 className="mt-0">Hulp nodig bij uw eerste vlucht na een ingreep?</h3>
            <p>
              Vindt u het spannend om alleen te reizen na een operatie? Onze reisbegeleiders in <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Amsterdam</Link>, <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 underline">Rotterdam</Link> en andere steden ondersteunen u bij elke stap.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors no-underline">
              Bekijk hoe wij helpen
            </Link>
          </div>

          <h2>3. Algemene richtlijnen per type ingreep</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Type Operatie</th>
                <th className="border p-2 text-left">Advies termijn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Kleine ingreep (hechtingen)</td>
                <td className="border p-2">1 - 2 dagen</td>
              </tr>
              <tr>
                <td className="border p-2">Buikoperatie (open)</td>
                <td className="border p-2">10 - 14 dagen</td>
              </tr>
              <tr>
                <td className="border p-2">Borstkas operatie</td>
                <td className="border p-2">3 - 4 weken</td>
              </tr>
              <tr>
                <td className="border p-2">Hartoperatie</td>
                <td className="border p-2">Altijd in overleg met cardioloog</td>
              </tr>
            </tbody>
          </table>

          <h2>De Fit-to-Fly verklaring</h2>
          <p>
            Sommige luchtvaartmaatschappijen vragen om een medische verklaring (Fit-to-Fly) als u recent bent geopereerd. Zorg dat u deze bij u heeft in uw handbagage, bij voorkeur in het Engels. Lees hier meer over het <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 underline">aanvragen van een medische verklaring</Link>.
          </p>

          <h2>Conclusie</h2>
          <p>
            Vliegen na een operatie is vaak mogelijk, maar <strong>overleg altijd eerst met uw behandelend arts</strong>. Luister naar uw lichaam en neem geen onnodige risico&apos;s. Met de juiste voorbereiding en eventueel persoonlijke begeleiding kunt u met een gerust hart op reis.
          </p>
        </div>
      </section>
    </main>
  );
}
