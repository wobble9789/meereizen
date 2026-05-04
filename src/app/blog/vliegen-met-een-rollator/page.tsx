import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: Tips voor senioren | Vliegklaar',
  description: 'Wilt u vliegen met een rollator? Lees alles over de regels op de luchthaven, hoe u uw rollator meeneemt in het vliegtuig en handige tips voor een zorgeloze reis.',
};

const RollatorVliegenPage = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een rollator mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een rollator mag vrijwel altijd gratis mee als medische bagage. U kunt deze meestal gebruiken tot aan de gate, waarna het cabinepersoneel de rollator in het ruim plaatst."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn rollator van tevoren aanmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is sterk aanbevolen om uw rollator minimaal 48 uur voor vertrek aan te melden bij uw luchtvaartmaatschappij om verrassingen bij het inchecken te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er met mijn rollator tijdens de vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste rollators worden bij de gate ingenomen en in het bagageruim geplaatst. Bij aankomst staat de rollator vaak weer klaar bij de vliegtuigtrap of de gate."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Vliegen met een rollator: Zo gaat u zorgeloos op reis</h1>
      
      <p className="text-lg mb-8 leading-relaxed">
        Voor veel senioren is een rollator een onmisbaar hulpmiddel om mobiel en onafhankelijk te blijven. Gelukkig is vliegen met een rollator tegenwoordig heel goed geregeld. Luchtvaartmaatschappijen en luchthavens zijn goed ingesteld op reizigers met een beperkte mobiliteit. In dit artikel leggen we precies uit hoe het werkt, van boeking tot landing.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Aanmelden bij de luchtvaartmaatschappij</h2>
        <p className="mb-4">
          Hoewel een rollator een medisch hulpmiddel is en bijna altijd gratis mee mag, is het cruciaal om dit vooraf aan te melden. Doe dit bij voorkeur direct tijdens het boeken, of uiterlijk 48 uur voor vertrek via de klantenservice van uw luchtvaartmaatschappij. Zo weten zij dat ze extra ruimte in het ruim moeten reserveren en kan het personeel op de luchthaven u eventueel assisteren.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Op de luchthaven: Gebruik tot aan de gate</h2>
        <p className="mb-4">
          In de meeste gevallen mag u uw eigen rollator blijven gebruiken tot aan de deur van het vliegtuig of de gate. Bij de check-in balie krijgt uw rollator een speciaal label (een &apos;gate-check&apos; label). Zodra u aan boord gaat, neemt het personeel de rollator over en wordt deze veilig in het ruim geplaatst.
        </p>
        <div className="bg-blue-50 p-4 border-l-4 border-blue-500 italic mb-4">
          <strong>Tip:</strong> Zorg dat er een label met uw contactgegevens aan de rollator hangt, voor het geval deze onverhoopt op een andere band terechtkomt.
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Begeleiding op Schiphol of andere luchthavens</h2>
        <p className="mb-4">
          Vindt u de afstanden op het vliegveld te groot, zelfs met uw rollator? Dan kunt u gratis luchthavenbegeleiding aanvragen. U wordt dan met een rolstoel of elektrisch karretje naar de gate gebracht. Uw rollator wordt dan meestal al bij de check-in ingenomen als ruimbagage. Lees meer over <a href="/luchthaven-begeleiding" className="text-blue-600 underline font-medium">luchthavenbegeleiding aanvragen</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Aankomst op uw bestemming</h2>
        <p className="mb-4">
          Bij aankomst wordt uw rollator meestal weer klaargezet bij de vliegtuigtrap of direct bij de gate zodra u het toestel verlaat. Soms komt het echter voor dat de rollator via de reguliere bagageband voor &apos;afwijkende bagage&apos; (Odd-size baggage) wordt afgeleverd. Vraag dit bij het verlaten van het vliegtuig even na bij het personeel.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Veelgestelde vragen (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-1">Mag mijn rollator gratis mee?</h3>
            <p>Ja, bij vrijwel alle maatschappijen (zoals KLM, Transavia en TUI) mag een rollator als medisch hulpmiddel gratis mee bovenop uw reguliere bagagevrijstelling.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Moet ik een inklapbare rollator hebben?</h3>
            <p>Het is niet verplicht, maar een inklapbare rollator is wel veel praktischer. Het risico op schade is kleiner en het personeel kan deze makkelijker opbergen in het ruim.</p>
          </div>
        </div>
      </section>

      <div className="bg-green-50 p-8 rounded-xl border border-green-200 shadow-sm">
        <h3 className="text-2xl font-bold mb-3 text-green-900">Ziet u op tegen de reis?</h3>
        <p className="text-lg mb-4 text-green-800">
          Vliegen met een beperking of hulpmiddel kan spannend zijn. Vliegklaar biedt persoonlijke <a href="/reisbegeleiding-ouderen" className="underline font-semibold">reisbegeleiding voor senioren</a>. Onze ervaren begeleiders helpen u met uw rollator, de bagage en alle procedures op de luchthaven. Zo reist u altijd met een veilig gevoel.
        </p>
        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
          Vraag vrijblijvend advies aan
        </a>
      </div>
    </div>
  );
};

export default RollatorVliegenPage;
