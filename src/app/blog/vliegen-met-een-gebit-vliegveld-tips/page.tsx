import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit: 7 Onmisbare Tips voor op het Vliegveld | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of prothese? Lees onze 7 praktische tips over security, schoonmaak en comfort op het vliegveld voor senioren.',
};

export default function GebitBlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet mijn kunstgebit uit bij de security scan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in de meeste gevallen hoeft uw kunstgebit niet uit tijdens de security scan op het vliegveld. De moderne scanners herkennen protheses en dit levert zelden problemen op."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik gebitsreiniger (tabletten) meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reinigingstabletten voor uw gebit vallen onder droge stoffen en mogen onbeperkt mee in uw handbagage. Vloeibare reinigers moeten voldoen aan de 100ml regel."
        }
      },
      {
        "@type": "Question",
        "name": "Wat als mijn gebit los gaat zitten tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door luchtdrukverschillen en droge lucht in de cabine kan uw tandvlees iets krimpen. Neem altijd een kleine tube kleefpasta (max 100ml) mee in uw handbagage voor extra zekerheid."
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
          Vliegen met een gebit: 7 Onmisbare Tips voor op het Vliegveld
        </h1>
        
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-10 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?w=1200&q=80"
            alt="Senioren glimlachen op vakantie"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor veel senioren is reizen een fantastisch avontuur, maar het brengt soms ook specifieke zorgen met zich mee. 
            Een vraag die we bij Vliegklaar regelmatig krijgen is: <strong>&quot;Hoe gaat dat eigenlijk, vliegen met een kunstgebit?&quot;</strong> 
            Moet het uit bij de security? Wat als het los gaat zitten door de luchtdruk?
          </p>

          <p>
            Geen zorgen. Vliegen met een gebitsprothese is heel gewoon en met een goede voorbereiding merkt u er nauwelijks iets van. 
            Hier zijn onze 7 beste tips voor een zorgeloze reis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. De Security Check: Houd uw lach vast</h2>
          <p>
            Veel mensen zijn bang dat hun gebit het alarm bij de metaaldetector laat afgaan. Hoewel sommige protheses metalen onderdelen hebben, 
            is dit bijna nooit een probleem. Mocht er toch een signaal zijn, dan weten de beveiligers precies wat ze moeten doen. 
            U hoeft uw gebit <strong>nooit</strong> ter plekke uit te doen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Kleefpasta in de handbagage</h2>
          <p>
            De lucht in een vliegtuig is erg droog. Dit kan leiden tot een droge mond, waardoor uw gebit minder goed kan blijven zitten. 
            Zorg dat u een kleine tube kleefpasta in uw handbagage heeft (let op de 100ml regel voor vloeistoffen). 
            Zo kunt u indien nodig snel en discreet uw gebit weer vastzetten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Drink voldoende water</h2>
          <p>
            Zoals gezegd zorgt droge lucht voor een droge mond. Drink tijdens de vlucht regelmatig water. 
            Dit is niet alleen goed voor uw algehele gezondheid, maar helpt ook om de natuurlijke zuigkracht van uw gebitsprothese te behouden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Neem een reservegebit mee (indien mogelijk)</h2>
          <p>
            Het is de nachtmerrie van iedere reiziger: uw gebit laten vallen in een hotelbadkamer aan de andere kant van de wereld. 
            Heeft u nog een oud (reserve)gebit? Neem dit dan mee in uw koffer. Het zit misschien minder lekker, 
            maar in geval van nood bent u gered.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Hygiëne op het vliegveld</h2>
          <p>
            Op lange vluchten of bij lange overstappen is het prettig om uw gebit even op te frissen. 
            Gebruik hiervoor de invalidentoiletten op het vliegveld; deze zijn vaak ruimer en bieden meer privacy 
            om uw gebit rustig te spoelen bij de wasbak.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">6. Let op met harde snacks</h2>
          <p>
            Vliegtuigmaaltijden zijn meestal zacht, maar de gratis pinda&apos;s of pretzels kunnen verraderlijk zijn. 
            Wees voorzichtig met harde of plakkerige snacks tijdens de vlucht om te voorkomen dat er etensresten onder uw gebit komen 
            of dat er een breuk ontstaat.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">7. Gebruik vliegveld assistentie</h2>
          <p>
            Vindt u de drukte op het vliegveld spannend of bent u bang dat u in de haast uw spullen (of gebitsetje) vergeet? 
            Vraag dan assistentie aan. Een begeleider helpt u rustig door alle processen, zodat u geen stress ervaart.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl mt-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in het begeleiden van senioren op reis. Of u nu hulp nodig heeft bij de 
              voorbereiding of een begeleider wenst die de hele reis met u meegaat: wij staan voor u klaar.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Neem contact op voor de mogelijkheden
            </Link>
          </div>
        </div>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="grid gap-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
