import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met COPD of Astma: Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met COPD of astma? Ontdek essentiële tips over medicatie, zuurstof aan boord en hoe u zich optimaal voorbereidt op uw vlucht.',
};

export default function VliegenMetCopdAstmaPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Vliegen met COPD of Astma
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Reizen met een longvloeistof-aandoening zoals COPD of astma vraagt om een goede voorbereiding. 
                Met de juiste voorzorgsmaatregelen kunt u echter veilig en comfortabel naar uw bestemming vliegen.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&q=80"
                alt="Vliegen met COPD"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <h2>Voorbereiding op de vlucht</h2>
          <p>
            De lagere luchtdruk en lagere zuurstofconcentratie in de vliegtuigcabine kunnen invloed hebben op uw ademhaling. 
            Overleg daarom altijd eerst met uw longarts of huisarts of u fit genoeg bent om te vliegen (Fit to Fly).
          </p>

          <h3>Medicatie in de handbagage</h3>
          <p>
            Houd uw inhalatoren (puffers) en andere medicijnen altijd in uw handbagage, zodat u er direct bij kunt. 
            Neem voldoende voorraad mee voor de gehele reis, plus een extra reserve voor eventuele vertragingen.
          </p>

          <h3>Zuurstof aan boord</h3>
          <p>
            Heeft u extra zuurstof nodig tijdens de vlucht? Geef dit dan minimaal 48 tot 72 uur van tevoren aan bij de luchtvaartmaatschappij. 
            De meeste maatschappijen hanteren strikte regels voor het meenemen van eigen concentratoren of leveren zelf zuurstof tegen een vergoeding.
          </p>

          <h2>Tips op de luchthaven</h2>
          <ul>
            <li><strong>Vraag assistentie aan:</strong> Vermijd lange wandelingen en stress op de luchthaven door vliegveld assistentie te boeken.</li>
            <li><strong>Blijf gehydrateerd:</strong> De lucht in het vliegtuig is erg droog. Drink voldoende water (geen alcohol) om uitdroging van de slijmvliezen te voorkomen.</li>
            <li><strong>Medische verklaring:</strong> Zorg voor een Engelstalige medische verklaring en een actueel medicatiepaspoort.</li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl my-12">
            <h2 className="text-primary-900 mt-0">Hulp nodig bij uw reis?</h2>
            <p className="text-gray-700">
              Vindt u het spannend om alleen te vliegen met COPD of astma? De begeleiders van Vliegklaar ondersteunen u graag. 
              Wij helpen bij de logistiek op de luchthaven, dragen uw bagage en zorgen voor een rustig reistempo.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors no-underline"
            >
              Vraag naar de mogelijkheden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
