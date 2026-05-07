import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vliegen na een Hartoperatie of Infarct: Veilige Tips | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een hartoperatie, stent of hartinfarct? Lees de belangrijkste regels, tips voor aan boord en medische voorbereiding.',
};

export default function Page() {
  const publishDate = '2026-05-07';
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Vliegen na hartoperatie', href: '/blog/vliegen-na-hartoperatie' }
      ]} />
      
      <h1 className="text-4xl font-bold mb-6">Vliegen na een hartoperatie of infarct: 6 belangrijke tips</h1>
      
      <p className="text-lg mb-6">
        Een hartoperatie of een hartinfarct is een ingrijpende gebeurtenis. Zodra u zich weer wat sterker voelt, komt vaak de vraag: &quot;Wanneer mag ik weer vliegen?&quot;. Hoewel reizen vaak weer mogelijk is, vraagt het hart om een zorgvuldige opbouw en specifieke voorzorgsmaatregelen in de lucht.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Overleg altijd met uw cardioloog</h2>
      <p className="mb-4">
        De belangrijkste stap is groen licht krijgen van uw behandelend arts. De termijn waarop u weer mag vliegen varieert enorm: van enkele dagen na een eenvoudige stentplaatsing tot 4-6 weken na een zware openhartoperatie. Uw arts bepaalt of uw hart stabiel genoeg is voor de lagere zuurstofspanning in de cabine.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Vraag een Fit-to-Fly verklaring aan</h2>
      <p className="mb-4">
        Luchtvaartmaatschappijen kunnen om een medische verklaring vragen als u recent bent geopereateerd. Zorg dat u een Engelstalige &quot;Fit to Fly&quot; verklaring bij u heeft. Dit voorkomt problemen bij het inchecken en is essentieel voor uw reisverzekering.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Vliegveldassistentie: spaar uw energie</h2>
      <p className="mb-4">
        Lange afstanden lopen op een vliegveld kan zwaar zijn voor een herstellend hart. Maak gebruik van de gratis vliegveldassistentie. U wordt dan met een rolstoel of elektrisch karretje naar de gate gebracht, waardoor u uw energie bewaart voor de reis zelf.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Let op trombosegevaar</h2>
      <p className="mb-4">
        Na een hartoperatie is het risico op bloedstolsels (trombose) soms tijdelijk verhoogd. Draag tijdens de vlucht compressiekousen als uw arts dit adviseert en probeer elk uur even de benen te strekken of voetenoefeningen te doen op uw stoel.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Medicatie in de handbagage</h2>
      <p className="mb-4">
        Houd al uw hartmedicatie in uw handbagage, inclusief een actueel medicatiepaspoort (verkrijgbaar bij uw apotheek). Neem ook extra voorraad mee voor het geval uw vlucht vertraagd is of uw verblijf onverhoopt langer duurt.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Vermijd stress en zware koffers</h2>
      <p className="mb-4">
        Stress verhoogt de hartslag en bloeddruk. Plan uw reis ruim in en laat het tillen van zware koffers over aan anderen. Als u alleen reist, kan een reisbegeleider van Vliegklaar deze fysieke en mentale last volledig van u overnemen.
      </p>

      <div className="bg-red-50 p-6 rounded-lg mt-12 border border-red-100">
        <h3 className="text-xl font-bold mb-2 text-red-900">Begeleid vliegen na een ingreep?</h3>
        <p className="text-red-800">
          Wilt u de zekerheid van een medisch geschoolde begeleider tijdens uw eerste vlucht na een operatie? De begeleiders van Vliegklaar bieden de medische en praktische ondersteuning die u nodig heeft om weer veilig de wereld te ontdekken.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen na een hartoperatie of infarct: 6 belangrijke tips",
            "description": "Gids over veilig vliegen na hartproblemen of operaties, inclusief medische verklaringen en praktische tips voor aan boord.",
            "author": {
              "@type": "Organization",
              "name": "Vliegklaar"
            },
            "datePublished": publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vliegklaar.nl/blog/vliegen-na-hartoperatie"
            }
          })
        }}
      />
    </article>
  );
}
