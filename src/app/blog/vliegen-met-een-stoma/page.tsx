import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Stoma: Tips & Begeleiding | Vliegklaar',
  description: 'Zorgeloos vliegen met een stoma. Lees alles over de voorbereiding, security-checks, handbagage en hoe reisbegeleiding u kan ondersteunen.',
};

export default function VliegenMetStomaPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Vliegen met een stoma: Zo reist u zorgeloos
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Veel senioren met een stoma zien op tegen een vliegreis. Dat is nergens voor nodig. Met de juiste voorbereiding en handige tips kunt u comfortabel en vol vertrouwen het vliegtuig in.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&q=80"
                alt="Ontspannen reiziger in vliegtuig"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-primary">
            <h2>Goede voorbereiding is het halve werk</h2>
            <p>
              Reizen met een stoma vraagt om een iets strakkere planning, maar laat u dit zeker niet tegenhouden. Of u nu op familiebezoek gaat of een verre zonvakantie boekt, met deze adviezen stapt u ontspannen aan boord.
            </p>

            <h3>1. De reis-certificaat of stoma-pas</h3>
            <p>
              Vraag bij uw stomavereniging of leverancier om een internationaal reis-certificaat (ook wel stoma-pas genoemd). Hierin staat in meerdere talen uitgelegd dat u stomamateriaal draagt. Dit is erg handig bij de security-controle en de douane, zodat u niet alles ter plekke hoeft uit te leggen.
            </p>

            <h3>2. Handbagage: Dubbele voorraad</h3>
            <p>
              Neem altijd minimaal de dubbele hoeveelheid stomamateriaal mee die u normaal gesproken nodig zou hebben voor de duur van de vlucht. Verdeel uw materiaal over uw handbagage en uw ruimbagage. Mocht er een koffer vertraagd zijn, dan heeft u altijd voldoende voorraad bij de hand.
            </p>

            <h3>3. Luchtdruk en gassen</h3>
            <p>
              Een veelgehoorde zorg is dat het zakje opzwelt door de luchtdruk in de cabine. Moderne stomazakjes hebben echter filters die gassen laten ontsnappen. Let wel op uw voeding vlak voor en tijdens de vlucht; vermijd koolzuurhoudende dranken en gasvormende voeding zoals bonen of kool om extra gasvorming te beperken.
            </p>

            <h3>4. Security en privacy</h3>
            <p>
              Bij de security-scan op het vliegveld kan het stomazakje zichtbaar zijn op de monitor. U kunt de beveiliger vooraf discreet uw stoma-pas tonen. U heeft altijd het recht om een eventuele fysieke controle in een aparte ruimte te laten plaatsvinden voor uw privacy.
            </p>

            <h2>Hoe een reisbegeleider kan helpen</h2>
            <p>
              Vindt u het toch spannend om alleen te vliegen? Een reisbegeleider van Vliegklaar kan veel stress wegnemen:
            </p>
            <ul>
              <li><strong>Hulp bij de security:</strong> Wij ondersteunen u bij de communicatie met het beveiligingspersoneel.</li>
              <li><strong>Bagagebeheer:</strong> Wij dragen de zware tassen, zodat u zich kunt concentreren op uw eigen comfort.</li>
              <li><strong>Rust en overzicht:</strong> Wij weten waar de toiletten zijn en zorgen voor voldoende tijd tussen de handelingen door.</li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-2xl my-12">
              <h3 className="text-primary-900 mt-0">Vrijblijvend advies?</h3>
              <p className="text-primary-800">
                Wilt u meer weten over onze persoonlijke reisbegeleiding voor senioren? Wij komen graag bij u langs voor een kop koffie om de mogelijkheden te bespreken.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Neem contact op
              </Link>
            </div>

            <h2>Praktische inpaktips</h2>
            <ul>
              <li>Snij de plakken vooraf op maat, zodat u in het vliegtuig geen schaartje nodig heeft (scharen zijn vaak niet toegestaan in de handbagage).</li>
              <li>Neem kleine afvalzakjes en vochtige doekjes (zonder parfum/olie) mee in uw handbagage.</li>
              <li>Draag comfortabele, loszittende kleding die niet knelt op de plek van uw stoma.</li>
            </ul>

            <p>
              Met deze tips bent u er helemaal klaar voor. Geniet van uw reis!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
