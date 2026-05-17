import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen na een knieoperatie: Tips en termijn | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een knieoperatie? Lees alles over de hersteltermijn, risico op trombose en tips voor een comfortabele vlucht.',
};

export default function VliegenNaKnieOperatie() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe lang moet ik wachten met vliegen na een knieoperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor korte vluchten (binnen Europa) wordt meestal geadviseerd om minimaal 6 weken te wachten. Voor intercontinentale vluchten raden chirurgen vaak een termijn van 3 maanden aan vanwege het verhoogde risico op trombose."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen met krukken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, krukken mogen mee in het vliegtuig. Ze worden door de bemanning meestal in een aparte kast of in de bagagebakken opgeborgen tijdens de vlucht. Het is verstandig om bij het boeken aan te geven dat u met krukken reist."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben om te vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soms vraagt een luchtvaartmaatschappij om een 'Fit to Fly' verklaring van uw arts. Zeker als u kort na de operatie reist, is het verstandig om dit vooraf te checken en een verklaring mee te nemen."
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een knieoperatie: Waar moet u op letten?
          </h1>
          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dad99901?w=1200&q=80"
              alt="Herstel na knieoperatie"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Een knieoperatie is een ingrijpende gebeurtenis. Of het nu gaat om een kijkoperatie of een nieuwe knieprothese, 
            uw lichaam heeft tijd nodig om te herstellen voordat u weer veilig het vliegtuig in kunt stapen.
          </p>
        </header>

        <div className="prose prose-lg prose-primary max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800">De hersteltermijn: Wanneer mag u weer vliegen?</h2>
          <p>
            De belangrijkste vraag is natuurlijk wanneer u weer mag vliegen. Hoewel elke patiënt en elke operatie anders is, 
            hanteren de meeste ziekenhuizen de volgende richtlijnen:
          </p>
          <ul>
            <li><strong>Korte vluchten (tot 4 uur):</strong> Minimaal 6 weken na de operatie.</li>
            <li><strong>Lange vluchten (meer dan 4 uur):</strong> Minimaal 3 maanden na de operatie.</li>
          </ul>
          <p>
            Het grootste risico bij vliegen na een knieoperatie is de vorming van bloedstolsels (trombose). Door de operatie 
            is de bloedstolling verstoord en langdurig stilzitten in een vliegtuigcabine vergroot dit risico aanzienlijk.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12">Tips voor een veilige vlucht</h2>
          <p>
            Als u groen licht heeft gekregen van uw chirurg, kunt u met de volgende tips het comfort en de veiligheid verhogen:
          </p>
          <div className="bg-primary-50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
            <ul className="space-y-4 m-0 list-none p-0">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2">1.</span>
                <span><strong>Boek een stoel met extra beenruimte:</strong> Het is essentieel dat u uw knie kunt strekken en bewegen. Een stoel bij de nooduitgang of een upgrade naar Premium Comfort is vaak de investering waard.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2">2.</span>
                <span><strong>Draag compressiekousen:</strong> Deze helpen de bloedsomloop te stimuleren. Lees meer over <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 underline">vliegen met compressiekousen</Link>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2">3.</span>
                <span><strong>Blijf in beweging:</strong> Loop elk uur een klein stukje door het gangpad en doe zittende enkeloefeningen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2">4.</span>
                <span><strong>Vraag vliegveld assistentie aan:</strong> Voorkom lange afstanden lopen op de luchthaven. Wij kunnen u helpen bij het <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 underline">aanvragen van assistentie</Link>.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12">Vliegen met een knieprothese</h2>
          <p>
            Heeft u een nieuwe knie gekregen? Houd er dan rekening mee dat de metalen onderdelen van de prothese 
            het alarm bij de security op de luchthaven kunnen activeren. Geef dit vooraf aan bij de beveiligingsbeambte. 
            Een officieel prothesepaspaspoort kan helpen, maar is niet altijd verplicht.
          </p>
          <p>
            Voor meer details hierover kunt u ook ons artikel lezen over <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 underline">vliegen met een knie- of heupprothese</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12">Hoe Vliegklaar u kan ondersteunen</h2>
          <p>
            Ziet u op tegen de eerste vlucht na uw operatie? Onze reisbegeleiders zijn gespecialiseerd in het ondersteunen van senioren 
            die extra zorg of aandacht nodig hebben. Wij kunnen u begeleiden vanaf uw voordeur tot aan uw stoel in het vliegtuig, 
            zodat u zich volledig kunt focussen op uw herstel en de reis.
          </p>
          <p>
            Lees meer over onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 underline">diensten voor reisbegeleiding</Link>.
          </p>
        </div>

        <section className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hulp nodig bij uw reis na een operatie?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Onze experts adviseren u graag over de mogelijkheden en kunnen de volledige begeleiding voor u regelen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0618769492"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all"
            >
              Bel direct: 06-18769492
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-primary-900 transition-all"
            >
              Vraag advies aan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
