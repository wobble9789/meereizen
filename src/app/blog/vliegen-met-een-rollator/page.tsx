import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog: Reizen met een Rollator - Tips voor Senioren | Vliegklaar',
  description: 'Wilt u vliegen met een rollator? Lees onze praktische tips over vliegveld assistentie, het inklappen van uw rollator en veilig reizen als senior.',
};

export default function ReizenMetRollatorBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een rollator gratis mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, bij vrijwel alle luchtvaartmaatschappijen mag een rollator als medisch hulpmiddel gratis mee aan boord. Het telt niet mee als reguliere bagage."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn rollator vooraf aanmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is sterk aan te raden om uw rollator minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij. Zo kunnen zij rekening houden met de ruimte en eventuele assistentie regelen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik mijn rollator gebruiken tot aan de gate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen kunt u uw rollator gebruiken tot aan de deur van het vliegtuig (gate check-in). Daar wordt hij door het grondpersoneel in het ruim geplaatst."
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
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een rollator: Zo reist u zorgeloos
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Voor veel senioren is een rollator een onmisbaar hulpmiddel om mobiel en onafhankelijk te blijven. 
            Maar hoe gaat dat eigenlijk op een vliegveld? Mag de rollator mee in de cabine? 
            In dit artikel leggen we precies uit waar u op moet letten.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Aanmelden bij de luchtvaartmaatschappij</h2>
          <p className="mb-6">
            Hoewel een rollator bijna altijd gratis mee mag, is het cruciaal om dit vooraf aan te geven. 
            Geef bij het boeken of uiterlijk 48 uur voor vertrek door dat u een rollator meeneemt. 
            Vermeld hierbij ook de afmetingen (ingeklapt) en of de rollator een accu heeft (bij elektrische modellen).
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">Op de luchthaven</h2>
          <p className="mb-6">
            U heeft de keuze: u kunt uw rollator direct inchecken als ruimbagage, of u gebruikt hem tot aan de gate. 
            Wij adviseren vaak het laatste. Zo hoeft u op het vliegveld minder ver te lopen zonder steun. 
            Bij de gate wordt er een label aan uw rollator bevestigd en wordt deze vlak voor het instappen ingenomen.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold text-primary-700 mb-2">Tip: Vliegveld assistentie</h3>
            <p className="text-gray-700">
              Zelfs met een rollator kunnen de afstanden op grote luchthavens zoals Schiphol behoorlijk groot zijn. 
              Vraag daarom altijd <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> aan. 
              U wordt dan met een elektrisch wagentje of rolstoel naar de gate gebracht.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">In het vliegtuig</h2>
          <p className="mb-6">
            In de meeste gevallen gaat de rollator in het bagageruim. Er is in de cabine simpelweg te weinig ruimte 
            om een rollator veilig op te bergen tijdens de vlucht. Zorg er daarom voor dat er geen losse onderdelen 
            (zoals een mandje of een bel) aan zitten die tijdens het transport beschadigd kunnen raken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">Bij aankomst</h2>
          <p className="mb-6">
            Afhankelijk van de luchthaven staat uw rollator bij het verlaten van het vliegtuig direct weer klaar bij de gate, 
            of moet u deze ophalen bij de bagageband voor &apos;afwijkende bagage&apos;. 
            Vraag dit voor de zekerheid na bij de stewardess voor u landt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig?</h2>
          <p className="mb-6">
            Vindt u het spannend om alleen met een rollator te reizen? Vliegklaar biedt persoonlijke 
            <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline"> reisbegeleiding voor ouderen</Link>. 
            Onze begeleiders helpen u met de bagage, navigeren over het vliegveld en zorgen dat u veilig op uw bestemming aankomt.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos op reis met uw rollator?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ontdek hoe onze reisbegeleiders u kunnen ondersteunen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Vraag informatie aan
          </Link>
        </div>
      </section>
    </main>
  );
}
