import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Almere | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Almere. Wij helpen u veilig en comfortabel op reis vanaf Lelystad of Schiphol.',
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Word ik in Almere thuis opgehaald?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker, onze begeleiding begint bij u aan de voordeur in Almere Stad, Buiten of Haven. We helpen met de bagage en zorgen voor een comfortabele transfer naar de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook vanaf vliegveld Lelystad begeleiden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, gezien onze centrale ligging in Flevoland begeleiden wij senioren zowel vanaf Schiphol als vanaf Lelystad Airport naar hun bestemming."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe zit het met vliegen met een rollator vanaf Almere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij begeleiden veel senioren die een rollator gebruiken. We zorgen voor de juiste aanmelding bij de luchtvaartmaatschappij en begeleiden u op Schiphol of Lelystad Airport tot aan de gate. Lees meer in ons artikel over vliegen met een rollator."
      }
    },
    {
      "@type": "Question",
      "name": "Is er begeleiding voor slechthorenden in Almere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, onze begeleiders zijn getraind in het ondersteunen van senioren met een gehoorapparaat. We helpen bij de communicatie op de luchthaven en zorgen dat u geen enkele omroep mist. Bekijk onze tips voor vliegen met een gehoorapparaat."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost reisbegeleiding in Almere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kosten zijn afhankelijk van uw specifieke wensen en de duur van de reis. Neem contact met ons op voor een vrijblijvende offerte op maat voor uw situatie in Almere."
      }
    }
  ]
};

export default function AlmereSEOPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Almere
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bent u woonachtig in Almere en droomt u van een reis, maar ziet u op tegen het alleen reizen? 
                Vliegklaar biedt deskundige en persoonlijke reisbegeleiding voor senioren in Almere en omgeving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Almere: 06-18769492
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
                src="https://images.unsplash.com/photo-1594914040989-138be5587786?w=800&q=80"
                alt="Almere Skyline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Almere?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Comfortabel vanaf huis</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Almere (Stad, Buiten, Haven) en zorgen voor een ontspannen begin van uw reis naar de luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Lokale Expertise</h3>
              <p className="text-gray-600">
                Onze begeleiders in Flevoland kennen de route naar zowel Schiphol als Lelystad Airport uitstekend.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijke Aandacht</h3>
              <p className="text-gray-600">
                Bij Vliegklaar bent u geen nummer. Wij bieden zorg en aandacht die past bij uw persoonlijke situatie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Zorgeloos op pad</h3>
              <p className="text-gray-600">
                Van inchecken tot het vinden van de juiste gate; wij regelen alles zodat u alleen maar hoeft te genieten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Veelgestelde vragen over reisbegeleiding in Almere</h2>
          <div className="space-y-8">
            {faqData.mainEntity.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                  {item.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {item.name.includes("slechthorenden") && (
                    <> <Link href="/blog/vliegen-met-een-gehoorapparaat-luchthaven-tips" className="text-primary-600 hover:underline">Bekijk hier onze tips voor op de luchthaven.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Almere</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer onbezorgd de wereld ontdekken? Bel ons voor een vrijblijvend kennismakingsgesprek in Almere.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
