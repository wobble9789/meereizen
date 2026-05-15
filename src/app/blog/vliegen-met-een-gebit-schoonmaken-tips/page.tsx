import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gebit schoonmaken op het vliegveld of in het vliegtuig | Vliegklaar',
  description: 'Tips voor senioren over het schoonmaken en verzorgen van een kunstgebit of prothese tijdens een lange vliegreis en op de luchthaven.',
};

export default function GebitSchoonmakenBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag gebitsreiniger mee in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, gebitsreinigingstabletten mogen zonder problemen in de handbagage. Vloeibare gebitsreiniger moet voldoen aan de 100ml regels voor vloeistoffen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe maak ik mijn kunstgebit schoon tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gebruik de wastafel in het vliegtuigtoilet met een kleine tandenborstel en een beetje water. Gebruik liever flessenwater als u het gebit wilt afspoelen."
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
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Gebit schoonmaken op het vliegveld of in het vliegtuig: Tips voor senioren
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor veel senioren is een goede mondhygiëne essentieel voor het comfort tijdens het reizen. 
            Wanneer u een lange vlucht voor de boeg heeft, kan het verzorgen van uw kunstgebit of prothese 
            een uitdaging lijken. In dit artikel geven we praktische tips om uw gebit fris en schoon te houden, 
            zowel op de luchthaven als in de lucht.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Voorbereiding in uw handbagage</h2>
          <p>
            Zorg dat u een kleine &apos;gebit-set&apos; in uw handbagage heeft. Denk hierbij aan:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Een compacte tandenborstel of speciale protheseborstel.</li>
            <li>Gebitsreinigingstabletten (deze mogen gewoon door de security).</li>
            <li>Een klein bakje met deksel om het gebit veilig in op te bergen indien nodig.</li>
            <li>Kleine tube kleefpasta (maximaal 100ml).</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Op de luchthaven</h2>
          <p>
            De meeste grote luchthavens, zoals Schiphol, hebben ruime en schone toiletruimtes. 
            Maak gebruik van de mindervalidentoiletten als u meer privacy en ruimte nodig heeft om uw gebit 
            rustig te verzorgen voor het boarden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">In het vliegtuig</h2>
          <p>
            Tijdens een lange vlucht kan de lucht in de cabine erg droog zijn, wat kan leiden tot een droge mond 
            en irritatie onder uw prothese. Drink voldoende water. Wilt u uw gebit reinigen in het vliegtuig? 
            Gebruik dan de wasbak in het toilet, maar spoel uw mond en gebit bij voorkeur af met drinkwater 
            uit een flesje in plaats van kraanwater uit de vliegtuigtank.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Hulp nodig bij uw reis?</h3>
            <p className="mb-4">
              Vliegklaar helpt senioren om zorgeloos te reizen. Onze begeleiders ondersteunen u bij alle 
              aspecten van de reis, zodat u zich nergens druk om hoeft te maken.
            </p>
            <Link href="/contact" className="text-primary-700 font-bold underline">
              Neem contact op voor de mogelijkheden
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link href="/blog" className="text-primary-600 font-bold hover:underline">
            &larr; Terug naar alle blogberichten
          </Link>
        </div>
      </article>
    </main>
  );
}
