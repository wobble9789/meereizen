import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checklist voor Senioren: Zorgeloos Vliegen in 2026 | Vliegklaar',
  description: 'Gaat u binnenkort vliegen als senior? Gebruik onze uitgebreide checklist voor een veilige en comfortabele reis. Van medicijnen tot luchthavenassistentie.',
};

export default function ChecklistSeniorenVliegenPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Checklist voor Senioren: Zorgeloos Vliegen in 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vliegen op latere leeftijd vraagt om een goede voorbereiding. Of u nu voor het eerst in jaren weer gaat vliegen of een ervaren reiziger bent: met deze checklist gaat u met een gerust hart op pad.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1200&q=80"
            alt="Senior reiziger op het vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Voorbereiding: De Basis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Paspoort/ID-kaart:</strong> Controleer de vervaldatum. Veel landen buiten de EU eisen dat uw paspoort nog minimaal 6 maanden geldig is bij aankomst.</li>
              <li><strong>Reisverzekering:</strong> Heeft u een medische dekking? Dit is essentieel voor senioren.</li>
              <li><strong>Vliegveld assistentie:</strong> Wist u dat u gratis assistentie (zoals een rolstoel of begeleiding naar de gate) kunt aanvragen bij de luchtvaartmaatschappij? Doe dit minimaal 48 uur van tevoren.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Tip van de expert: Persoonlijke Reisbegeleiding</h2>
            <p>
              Ziet u op tegen de drukte op Schiphol of het overstappen op een vreemd vliegveld? Onze begeleiders reizen met u mee van deur tot deur. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Lees hier hoe we u kunnen helpen.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Gezondheid & Medicatie</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medicatiepaspoort:</strong> Haal een gratis Europees Medisch Paspoort bij uw apotheek.</li>
              <li><strong>Voldoende voorraad:</strong> Neem medicijnen mee voor de hele reis, plus een reserve voor een paar extra dagen in uw handbagage.</li>
              <li><strong>Compressiekousen:</strong> Voor langere vluchten helpen deze tegen dikke enkels en trombose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. In de Handbagage</h2>
            <p>Zorg dat u de belangrijkste zaken altijd bij de hand heeft:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alle reisdocumenten en tickets.</li>
              <li>Bril (en reservebril) of lenzenvloeistof.</li>
              <li>Gehoorapparaat met extra batterijen.</li>
              <li>Een lichte sjaal of vest tegen de airco in het vliegtuig.</li>
              <li>Belangrijke telefoonnummers op papier (voor als uw telefoon leeg is).</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              &quot;Een goede voorbereiding is het halve werk, maar een fijne reisgenoot is het hele plezier.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag advies over uw volgende reis
              </Link>
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Checklist voor Senioren: Zorgeloos Vliegen in 2026",
              "description": "De ultieme checklist voor senioren die gaan vliegen. Van voorbereiding tot gezondheidstips en handbagage.",
              "image": "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1200&q=80",
              "author": {
                "@type": "Organization",
                "name": "Vliegklaar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vliegklaar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vliegklaar.nl/logo.png"
                }
              },
              "datePublished": "2026-05-02"
            })
          }}
        />
      </article>
    </main>
  );
}
