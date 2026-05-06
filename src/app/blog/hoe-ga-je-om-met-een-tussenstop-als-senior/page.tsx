import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een tussenstop als senior? | Vliegklaar',
  description: 'Tips voor senioren bij een tussenstop. Van vliegveld assistentie tot rustmomenten: zo overleeft u een lange reis met overstap.',
};

export default function BlogTussenstopSenior() {
  return (
    <article className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="text-primary-600 hover:underline mb-8 inline-block">
          &larr; Terug naar alle artikelen
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Hoe ga je om met een tussenstop als senior?
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Een lange vliegreis is vaak onvermijdelijk als u naar verre bestemmingen zoals Azië, Amerika of Australië wilt. 
          Vaak hoort daar een tussenstop bij. Voor senioren kan een overstap op een onbekende luchthaven stressvol zijn. 
          In dit artikel delen we praktische tips om uw tussenstop zo comfortabel mogelijk te maken.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">1. Vraag vliegveld assistentie aan</h2>
        <p className="text-gray-700 mb-4">
          Zelfs als u normaal goed ter been bent, kunnen de afstanden op grote overstapluchthavens zoals Dubai, 
          Singapore of Frankfurt enorm zijn. Het is verstandig om vooraf vliegveld assistentie aan te vragen. 
          U wordt dan met een elektrisch wagentje of rolstoel van de ene gate naar de andere gebracht.
        </p>
        <p className="text-gray-700 mb-6">
          Dit bespaart u niet alleen energie, maar zorgt er ook voor dat u de juiste gate niet mist. 
          Assistentie moet minimaal 48 uur van tevoren worden aangevraagd via uw luchtvaartmaatschappij of reisbureau. 
          Lees meer over hoe u <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvraagt</Link>.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">2. Plan voldoende overstaptijd</h2>
        <p className="text-gray-700 mb-6">
          Boek geen reizen met een te krappe overstaptijd. Voor een internationale overstap is 2 tot 3 uur vaak het minimum. 
          Dit geeft u rustig de tijd om door de security te gaan (indien nodig) en even op adem te komen zonder te hoeven haasten.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">3. Gebruik de vliegveld lounges</h2>
        <p className="text-gray-700 mb-4">
          Wanneer u een langere tussenstop heeft, kan de drukte van de vertrekhal vermoeiend zijn. 
          Veel luchthavens bieden de mogelijkheid om tegen betaling toegang te krijgen tot een lounge. 
          Hier kunt u in alle rust zitten, wat eten en drinken, en soms zelfs even douchen.
        </p>
        <p className="text-gray-700 mb-6">
          Dit is een uitstekende manier om de batterij weer op te laden voor het tweede deel van de vlucht. 
          Sommige creditcards of frequent flyer programma&apos;s geven gratis toegang, maar u kunt vaak ook ter plekke een dagpas kopen.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">4. Blijf in beweging en drink water</h2>
        <p className="text-gray-700 mb-4">
          Tijdens een tussenstop is het belangrijk om de bloedsomloop te stimuleren. Maak een korte wandeling door de terminal. 
          Dit helpt tegen stijve spieren en vermindert het risico op trombose.
        </p>
        <p className="text-gray-700 mb-6">
          Zorg er ook voor dat u voldoende water drinkt. De lucht in een vliegtuig is erg droog, en hydratatie helpt bij 
          het voorkomen van een zware jetlag. Vermijd te veel cafeïne of alcohol tijdens de tussenstop. 
          Zie ook onze <Link href="/blog/hoe-ga-je-om-met-een-jetlag-als-senior" className="text-primary-600 hover:underline">tips tegen jetlag</Link>.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">5. Overweeg een reisbegeleider</h2>
        <p className="text-gray-700 mb-6">
          Vindt u het idee van een overstap op een vreemde luchthaven toch te spannend? Vliegklaar biedt persoonlijke 
          <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline"> reisbegeleiding voor ouderen</Link>. 
          Onze begeleiders reizen met u mee van deur tot deur, regelen de overstap en zorgen dat u zorgeloos op uw bestemming aankomt.
        </p>

        <div className="bg-primary-50 p-8 rounded-2xl mt-12">
          <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw volgende vliegreis?</h3>
          <p className="text-gray-700 mb-6">
            Ziet u op tegen een lange reis met tussenstop? Neem contact met ons op voor de mogelijkheden van 
            persoonlijke begeleiding.
          </p>
          <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors inline-block">
            Vrijblijvend advies aanvragen
          </Link>
        </div>
      </div>
    </article>
  );
}