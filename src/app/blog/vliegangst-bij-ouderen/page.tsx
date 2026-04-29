import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veilig vliegen met vliegangst bij ouderen | Vliegklaar',
  description: 'Tips en persoonlijke begeleiding voor senioren met vliegangst. Ontdek hoe u weer zorgeloos en comfortabel kunt vliegen met professionele hulp.',
};

export default function VliegangstOuderenPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1506012733851-bb07551842e6?w=1600&q=80"
          alt="Senioren op het vliegveld"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Vliegangst bij Ouderen: Weer Zorgeloos op Reis</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Hoe persoonlijke begeleiding en de juiste voorbereiding het verschil maken.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-primary mx-auto">
            <p className="lead text-xl text-gray-600 mb-8">
              Vliegangst is een veelvoorkomend verschijnsel, ook bij senioren die vroeger misschien zonder problemen de wereld over vlogen. Naarmate we ouder worden, kunnen fysieke ongemakken, een verminderd evenwichtsgevoel of een grotere behoefte aan controle ervoor zorgen dat een vliegreis plotseling een bron van spanning wordt.
            </p>

            <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">Waarom ontstaat vliegangst op latere leeftijd?</h2>
            <p className="text-gray-700 mb-6">
              Het is een misverstand dat vliegangst altijd een irrationele angst is voor neerstorten. Bij ouderen heeft het vaak te maken met andere factoren:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li><strong>Controleverlies:</strong> De drukte op vliegvelden zoals Schiphol kan overweldigend zijn.</li>
              <li><strong>Fysieke kwetsbaarheid:</strong> De angst om te vallen of onwel te worden in een kleine ruimte zonder directe hulp.</li>
              <li><strong>Medische zorgen:</strong> Hoe reageert mijn lichaam op de luchtdruk? Wat als ik mijn medicijnen vergeet?</li>
              <li><strong>Eenzaamheid:</strong> Alleen reizen vergroot de onzekerheid.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">Tips om vliegangst te beheersen</h2>
            <p className="text-gray-700 mb-6">
              Er zijn verschillende manieren om de spanning voor en tijdens de vlucht te verminderen. Een goede voorbereiding is hierbij het halve werk.
            </p>
            <div className="bg-primary-50 p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Onze top 3 adviezen:</h3>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                <li><strong>Kennis is macht:</strong> Verdiep u kort in hoe een vliegtuig werkt. De geluiden die u hoort (zoals het inklappen van het landingsgestel) zijn volkomen normaal.</li>
                <li><strong>Communiceer:</strong> Geef bij het cabinepersoneel aan dat u gespannen bent. Zij zijn getraind om u op uw gemak te stellen.</li>
                <li><strong>Afleiding:</strong> Neem een luisterboek, kruiswoordpuzzel of rustige muziek mee.</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">De kracht van persoonlijke reisbegeleiding</h2>
            <p className="text-gray-700 mb-6">
              De meest effectieve manier om vliegangst bij ouderen weg te nemen, is door niet alleen te reizen. Bij <strong>Vliegklaar</strong> merken we dat de aanwezigheid van een rustige, professionele begeleider wonderen doet.
            </p>
            <p className="text-gray-700 mb-6">
              Een reisbegeleider neemt alle logistieke zorgen uit handen: van het inchecken van de bagage tot het navigeren door de security. Mocht er paniek ontstaan, dan is er direct iemand die weet hoe te handelen, u geruststelt en de situatie beheersbaar houdt.
            </p>

            <div className="my-12 border-l-4 border-primary-500 pl-6 py-2 italic text-gray-600">
              "Sinds mijn man is overleden durfde ik niet meer te vliegen. Met de begeleiding van Vliegklaar ben ik afgelopen maand toch naar mijn kleinkinderen in Spanje gevlogen. Het was een bevrijding." - Mevrouw de Vries (78)
            </div>

            <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">Conclusie</h2>
            <p className="text-gray-700 mb-8">
              Vliegangst hoeft uw wereld niet kleiner te maken. Met de juiste ondersteuning en begrip kunt u nog steeds genieten van verre reizen, familiebezoeken en vakanties.
            </p>

            <div className="bg-primary-900 text-white p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold mb-4">Wilt u weer zorgeloos vliegen?</h3>
              <p className="mb-8">Wij bespreken graag hoe onze begeleiders u kunnen helpen bij uw volgende reis.</p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Vrijblijvend advies aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
