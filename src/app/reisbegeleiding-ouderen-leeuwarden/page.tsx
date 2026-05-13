import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Leeuwarden | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Leeuwarden en Friesland. Wij helpen u veilig en comfortabel op reis, van uw voordeur tot uw bestemming.',
};

export default function LeeuwardenSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie senioren vanaf Leeuwarden naar Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden volledige begeleiding van deur tot deur. We halen u thuis op in Leeuwarden of elders in Friesland, helpen met de bagage en begeleiden u tijdens de trein- of autoreis naar Schiphol, inclusief alle assistentie op de luchthaven zelf."
        }
      },
      {
        "@type": "Question",
        "name": "Is er hulp bij vliegen met een rollator vanuit Leeuwarden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij hebben veel ervaring met het ondersteunen van reizigers die een rollator gebruiken. We zorgen dat uw hulpmiddel correct wordt ingecheckt en regelen luchthavenassistentie voor het comfortabele vervoer naar de gate."
        }
      },
      {
        "@type": "Question",
        "name": "Komen jullie voor kennismaking ook langs in Friesland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor elke reis plannen we een vrijblijvend kennismakingsgesprek bij u thuis in Leeuwarden of omgeving. Zo kunnen we persoonlijk kennismaken en uw specifieke reiswensen en eventuele zorgbehoeften rustig doornemen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met COPD of astma vanaf een Nederlandse luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met COPD of astma is vaak mogelijk met de juiste voorbereiding, zoals het meenemen van inhalatoren in de handbagage en het eventueel aanvragen van extra zuurstof. Onze begeleiders ondersteunen u bij de nodige administratie en zorgen voor een rustig tempo op het vliegveld."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding vanuit Leeuwarden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van de duur van de reis en het gewenste niveau van ondersteuning. We bieden transparante tarieven en maken na het kennismakingsgesprek in Friesland een offerte op maat voor uw specifieke situatie."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Leeuwarden
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Leeuwarden of elders in Friesland en wilt u graag op reis, maar ziet u op tegen de logistiek naar de luchthaven? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in het noorden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Leeuwarden: 06-18769492
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
                src="https://images.unsplash.com/photo-1596434407421-987be7ce5577?w=800&q=80"
                alt="Leeuwarden Oldehove"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Leeuwarden?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Leeuwarden of omgeving (zoals Sneek, Heerenveen, Drachten) 
                en begeleiden u gedurende de hele reis naar Schiphol of een andere luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Friese nuchterheid</h3>
              <p className="text-gray-600">
                Onze begeleiding is persoonlijk, vertrouwd en kalm. We nemen alle stress rondom inchecken en bagage uit handen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een zonvakantie, familiebezoek of een medische reis, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                Geen zorgen meer over overstappen op het station of drukte op de luchthaven; wij wijken geen moment van uw zijde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Leeuwarden</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("COPD") && (
                    <> <Link href="/blog/vliegen-met-copd-of-astma" className="text-primary-600 hover:underline">Lees meer over vliegen met COPD of astma.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Leeuwarden</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Friesland.
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
