import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Eindhoven | MeeReizen',
  description: 'Persoonlijke reisbegeleiding voor senioren in Eindhoven. Wij helpen u veilig en comfortabel op reis vanaf Eindhoven Airport of elders.',
};

export default function EindhovenSEOPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Eindhoven
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Eindhoven of omgeving en wilt u graag zorgeloos op reis? 
                MeeReizen biedt persoonlijke begeleiding op maat voor senioren in de lichtstad, 
                zowel voor reizen vanaf Eindhoven Airport als Schiphol.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0850608333"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Eindhoven: 085-0608333
                </a>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
                >
                  Stuur een bericht
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1582234346914-f5842f1f0088?w=800&q=80"
                alt="Eindhoven City"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor MeeReizen in Eindhoven?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Eindhoven (of omgeving zoals Veldhoven, Best, Helmond) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Eindhoven Airport Specialist</h3>
              <p className="text-gray-600">
                Wij zijn bekend met de logistiek van Eindhoven Airport en zorgen voor een vlotte afhandeling bij de check-in en security.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Rust & Aandacht</h3>
              <p className="text-gray-600">
                Geen gehaast of stress. Onze begeleiders hebben alle tijd voor u en passen het tempo volledig aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veilig & Vertrouwd</h3>
              <p className="text-gray-600">
                Met MeeReizen gaat u met een gerust hart op pad. Wij regelen de koffers, de tickets en de ondersteuning onderweg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Eindhoven</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in de regio Eindhoven.
          </p>
          <a
            href="tel:0850608333"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            085-0608333
          </a>
        </div>
      </section>
    </main>
  );
}
