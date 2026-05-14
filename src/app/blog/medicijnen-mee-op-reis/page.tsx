import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met medicijnen: Tips voor Senioren | Vliegklaar',
  description: 'Hoe neem je medicijnen veilig mee in het vliegtuig? Lees onze praktische tips voor senioren over medicatiepaspoorten, handbagage en vliegveldcontroles.',
};

export default function MedicijnenBlogPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met medicijnen: De ultieme gids voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met medicatie vraagt om een goede voorbereiding. Of het nu gaat om dagelijkse pillen, insuline of vloeibare medicijnen, 
            wij leggen uit waar u op moet letten bij de security en tijdens de vlucht.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <Image 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80" 
            alt="Medicijnen en paspoort" 
            width={800} 
            height={400} 
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>1. Alles in de handbagage</h2>
          <p>
            De belangrijkste regel: neem uw medicijnen <strong>altijd</strong> mee in uw handbagage. Koffers in het ruim kunnen kwijtraken of 
            blootgesteld worden aan extreme temperaturen die de werking van medicijnen kunnen beïnvloeden. 
            Houd ook een extra voorraad voor een paar dagen apart in een andere tas, voor het geval dat.
          </p>

          <h2>2. Het Europees Medisch Paspoort</h2>
          <p>
            Vraag bij uw apotheek om een Europees Medisch Paspoort (EMP). Hierin staan al uw medicijnen, de werkzame stoffen en 
            eventuele allergieën vermeld in meerdere talen. Dit is niet alleen handig bij de douane, maar ook essentieel mocht u 
            in het buitenland een arts nodig hebben.
          </p>

          <h2>3. Vloeibare medicijnen en de 100ml regel</h2>
          <p>
            Voor vloeibare medicijnen geldt een uitzondering op de standaard 100ml regel. U mag meer meenemen als u kunt aantonen 
            dat u ze tijdens de reis nodig heeft. Bewaar ze bij voorkeur in de originele verpakking met de apothekerssticker erop. 
            Meld dit altijd even bij de security-medewerker.
          </p>

          <h2>4. Koeling tijdens de vlucht</h2>
          <p>
            Moeten uw medicijnen (zoals insuline) gekoeld blijven? Gebruik een kleine koeltas met koelelementen. 
            Vliegt u met <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Vliegklaar vanaf Schiphol</Link>? 
            Onze begeleiders helpen u graag met het bewaken van de temperatuur en het tijdig innemen van uw medicatie.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-10">
            <h3 className="mt-0">Persoonlijke hulp nodig?</h3>
            <p>
              Vindt u het spannend om alleen te vliegen met complexe medicatie? Onze reisbegeleiders zijn ervaren in het 
              ondersteunen van senioren met diverse medische achtergronden.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors no-underline">
              Vraag naar de mogelijkheden
            </Link>
          </div>

          <h2>5. Tijdsverschil en schema</h2>
          <p>
            Bij verre reizen krijgt u te maken met tijdsverschil. Dit kan uw medicatieschema in de war schoppen. 
            Overleg vooraf met uw huisarts of apotheker hoe u het beste kunt schuiven met de tijden, vooral bij 
            medicijnen die op een exact tijdstip ingenomen moeten worden.
          </p>

          <p>
            Wilt u meer weten over specifieke situaties? Lees ook ons artikel over 
            <Link href="/blog/vliegen-met-diabetes" className="ml-1 text-primary-600 underline">vliegen met diabetes</Link> of 
            <Link href="/blog/vliegen-met-bloedverdunners" className="ml-1 text-primary-600 underline">vliegen met bloedverdunners</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
