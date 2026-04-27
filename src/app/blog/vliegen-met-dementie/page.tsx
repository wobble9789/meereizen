import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vliegen met Dementie: Tips voor een Rustige Reis | Vliegklaar',
  description: 'Hoe bereidt u een vliegreis voor met iemand met dementie? Van vliegveldassistentie tot tips voor in het vliegtuig. Lees onze gids.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Vliegen met dementie', href: '/blog/vliegen-met-dementie' }
      ]} />
      
      <h1 className="text-4xl font-bold mb-6">Vliegen met dementie: 7 tips voor een zorgeloze reis</h1>
      
      <p className="text-lg mb-6">
        Reizen met een naaste die aan dementie lijdt, vraagt om een extra goede voorbereiding. De drukte op een vliegveld en de verandering van routine kunnen stressvol zijn. Met de juiste aanpak en ondersteuning is een vliegreis echter vaak nog heel goed mogelijk.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Vraag tijdig assistentie aan</h2>
      <p className="mb-4">
        Alle grote luchthavens bieden gratis assistentie aan voor reizigers met een (onzichtbare) beperking. Geef dit minimaal 48 uur voor vertrek door aan de luchtvaartmaatschappij. Dit helpt bij het sneller passeren van de douane en security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Gebruik de Hidden Disabilities Sunflower</h2>
      <p className="mb-4">
        Het dragen van een keycord met zonnebloem-print (de Sunflower Lanyard) is een internationaal erkend symbool dat iemand een onzichtbare beperking heeft. Personeel op vliegvelden herkent dit en kan extra geduld of hulp bieden zonder dat u alles hoeft uit te leggen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kies voor een directe vlucht</h2>
      <p className="mb-4">
        Overstappen zorgt for extra prikkels en vermoeidheid. Probeer, indien mogelijk, altijd voor een rechtstreekse vlucht te kiezen om de reisduur en de complexiteit te beperken.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Behoud vertrouwde routines</h2>
      <p className="mb-4">
        Probeer tijdens de reis vast te houden aan bekende patronen. Neem vertrouwde snacks mee en zorg voor afleiding zoals muziek of foto&apos;s die de persoon met dementie een veilig gevoel geven.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Medische verklaring en medicatie</h2>
      <p className="mb-4">
        Zorg voor een actueel medicatieoverzicht en een doktersverklaring in het Engels. Houd belangrijke medicatie altijd in de handbagage voor het geval de ruimbagage vertraging oploopt.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Bereid de bestemming voor</h2>
      <p className="mb-4">
        Kies op de bestemming voor een rustige omgeving. Een hotel of appartement waar de indeling overzichtelijk is, helpt om desoriëntatie te voorkomen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Overweeg een reisbegeleider</h2>
      <p className="mb-4">
        Vindt u het spannend om alleen te vliegen met uw partner of ouder? Vliegklaar biedt professionele reisbegeleiding waarbij een ervaren zorgverlener meereist van deur tot deur. Dit ontlast u volledig en zorgt voor een veilige ervaring.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mt-12">
        <h3 className="text-xl font-bold mb-2">Hulp nodig bij het reizen?</h3>
        <p>
          Onze begeleiders zijn gespecialiseerd in het ondersteunen van senioren met dementie tijdens vliegreizen. Neem contact op voor de mogelijkheden.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen met dementie: 7 tips voor een zorgeloze reis",
            "description": "Praktische gids voor het vliegen met mensen met dementie, inclusief tips over assistentie en voorbereiding.",
            "author": {
              "@type": "Organization",
              "name": "Vliegklaar"
            },
            "datePublished": "2026-04-26"
          })
        }}
      />
    </article>
  );
}
