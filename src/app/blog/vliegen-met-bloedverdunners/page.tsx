import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met bloedverdunners: Tips voor een veilige reis | Vliegklaar',
  description: 'Gaat u vliegen met bloedverdunners? Lees hier belangrijke tips over medicatie, trombosepreventie en de voordelen van reisbegeleiding voor senioren.',
};

export default function BlogVliegenBloedverdunners() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met bloedverdunners: Waar moet u op letten?",
    "description": "Een complete gids voor senioren die vliegen met bloedverdunnende medicatie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met bloedverdunners: Tips voor een veilige vliegreis
          </h1>
          <p className="text-xl text-gray-600 italic">
            Veilig en comfortabel naar uw bestemming met de juiste voorbereiding.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80"
            alt="Medicijnen en vliegen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Veel senioren gebruiken bloedverdunners (zoals acenocoumarol, fenprocoumon of DOAC&apos;s zoals apixaban) om het risico op trombose of een beroerte te verkleinen. Hoewel vliegen met deze medicatie prima mogelijk is, vraagt het wel om extra aandacht tijdens de voorbereiding en de vlucht zelf.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Neem voldoende medicatie mee in uw handbagage</h2>
          <p>
            Het is de belangrijkste regel voor elke reiziger: houd uw medicijnen altijd bij u. Mocht uw ruimbagage vertraging oplopen, dan heeft u uw bloedverdunners direct bij de hand. Neem voor de zekerheid extra voorraad mee voor een paar dagen.
          </p>
          <p>
            <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">
              Lees hier meer algemene tips over medicijnen mee op reis.
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. De medische verklaring en het AMO</h2>
          <p>
            Vliegt u met bloedverdunners, zorg dan voor een actueel medicatieoverzicht (AMO) van uw apotheek. In sommige gevallen is een medische verklaring van uw arts verstandig, zeker als u ook injecties (zoals heparine) moet gebruiken tijdens de reis.
          </p>
          <p>
            <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">
              Zo vraagt u een medische verklaring aan.
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Voorkom &quot;vliegtuigtrombose&quot;</h2>
          <p>
            Lange tijd stilzitten in een vliegtuig verhoogt het risico op trombose. Voor mensen die al bloedverdunners gebruiken is dit extra relevant. Enkele tips:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Blijf voldoende water drinken (vermijd te veel koffie of alcohol).</li>
            <li>Draag eventueel elastische kousen (steunkousen) in overleg met uw arts.</li>
            <li>Loop regelmatig een klein stukje door het gangpad.</li>
            <li>Doe eenvoudige voetoefeningen terwijl u zit.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Let op tijdsverschillen</h2>
          <p>
            Vliegt u naar een andere tijdzone? Overleg dan met uw arts of de trombosedienst hoe u het schema van uw bloedverdunners moet aanpassen. Consistentie is erg belangrijk voor de werking van deze medicatie.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Gebruik van compressiekousen</h2>
          <p>
            Naast uw medicatie kunnen compressiekousen een belangrijke rol spelen bij het voorkomen van gezwollen benen en trombose tijdens een lange vlucht.
          </p>
          <p>
            <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 hover:underline">
              Ontdek hier waarom compressiekousen nuttig zijn voor senioren.
            </Link>
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500 my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vindt u het spannend om alleen te vliegen met uw medische achtergrond? De begeleiders van Vliegklaar ondersteunen senioren van deur tot deur. Wij helpen bij de security, letten op uw welzijn tijdens de vlucht en zorgen dat u ontspannen aankomt.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Vraag naar de mogelijkheden
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Conclusie</h2>
          <p>
            Vliegen met bloedverdunners is veilig, mits u de juiste voorzorgsmaatregelen neemt. Door uw medicatie goed te beheren en mobiel te blijven tijdens de vlucht, kunt u met een gerust hart genieten van uw vakantie of familiebezoek.
          </p>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-primary-600 font-bold hover:underline">
            ← Terug naar alle blogartikelen
          </Link>
        </footer>
      </article>
    </main>
  );
}
