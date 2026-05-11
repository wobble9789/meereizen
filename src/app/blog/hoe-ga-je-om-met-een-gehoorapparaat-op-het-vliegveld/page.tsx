import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog: Hoe ga je om met een gehoorapparaat op het vliegveld? | Vliegklaar',
  description: 'Tips voor senioren met een gehoorapparaat op het vliegveld. Van security checks tot ringleidingen en communicatie bij de gate.',
};

export default function GehoorapparaatVliegveldBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn gehoorapparaat uitdoen bij de security scan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in de meeste gevallen kunt u uw gehoorapparaat gewoon inhouden tijdens de security scan op het vliegveld. De apparatuur is veilig voor uw gehoortoestel."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is een ringleiding op een vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een ringleiding helpt mensen met een gehoorapparaat om omroepberichten direct in hun toestel te horen, zonder storend achtergrondgeluid. Zoek naar het blauwe 'T-stand' symbool bij de gate of informatiebalie."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de scanner op het vliegveld mijn gehoorapparaat beschadigen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, de metaaldetectoren en geavanceerde scanners (zoals de security scan op Schiphol) beschadigen moderne gehoorapparaten niet."
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
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar alle blogs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een gehoorapparaat op het vliegveld?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een gehoorapparaat kan spannend zijn. Hoort u de omroepberichten wel? Wat gebeurt er bij de security check? 
            In deze blog geven we praktische tips voor senioren met een gehoorapparaat op de luchthaven.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd6a5?w=1200&q=80"
            alt="Oudere man met gehoorapparaat op vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">1. Gehoorapparaat en de Security Check</h2>
          <p>
            Een van de meest gestelde vragen is of het gehoorapparaat uit moet bij de beveiliging. Het antwoord is simpel: 
            <strong> nee, dat hoeft niet.</strong> Metaaldetectoren en security scanners beschadigen uw toestel niet. 
            Meld het wel even vooraf bij de beveiliger: &quot;Ik draag een gehoorapparaat.&quot; Mocht het alarm afgaan, 
            dan weten zij direct waar het vandaan kan komen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">2. Gebruik de Ringleiding (T-stand)</h2>
          <p>
            Grote luchthavens zoals Schiphol zijn uitgerust met ringleidingen. Bij informatiebalies en veel gates ziet u een 
            blauw bordje met een oor en de letter &apos;T&apos;. Als u uw gehoorapparaat op de T-stand zet, wordt het geluid van de 
            medewerker of de omroep direct naar uw toestel gestuurd. Dit filtert al het storende omgevingslawaai weg.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">3. Communiceer bij de Gate</h2>
          <p>
            Het is verstandig om bij aankomst bij de gate even te melden dat u slechthorend bent. Soms veranderen gates 
            op het laatste moment of zijn er belangrijke mededelingen die alleen worden omgeroepen. Als het personeel 
            op de hoogte is, komen ze u vaak persoonlijk informeren.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl my-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4 italic">Tip van Packlight:</h3>
            <p className="mb-0">
              Neem altijd <strong>reservebatterijen</strong> of uw oplader mee in uw handbagage. Door de veranderende luchtdruk 
              en het intensieve gebruik op een vliegveld kunnen batterijen soms sneller leeg gaan dan u gewend bent.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">4. Vliegveld assistentie aanvragen</h2>
          <p>
            Wist u dat u ook assistentie kunt aanvragen vanwege gehoorproblemen? U krijgt dan begeleiding die u helpt om op tijd 
            bij de juiste gate te zijn en zorgt dat u geen informatie mist. Dit geeft veel rust tijdens de reis. 
            Lees hier meer over in onze gids over <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvragen</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">Conclusie</h2>
          <p>
            Met een goede voorbereiding is reizen met een gehoorapparaat geen enkel probleem. Maak gebruik van de beschikbare 
            technieken zoals de ringleiding en wees niet bang om hulp te vragen. Zo kunt u vol vertrouwen en ontspannen op reis.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ziet u op tegen de drukte op het vliegveld of bent u bang belangrijke informatie te missen? 
              De begeleiders van Vliegklaar reizen met u mee en zorgen dat u alles verstaat en begrijpt.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Vrijblijvend advies aanvragen
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
