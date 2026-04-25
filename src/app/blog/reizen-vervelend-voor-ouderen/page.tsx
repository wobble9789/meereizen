import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waarom reizen op leeftijd zo vermoeiend kan zijn — en wat je eraan kunt doen | Vliegklaar',
  description: 'Lange wachtrijen, zware bagage, drukke vliegvelden. Voor veel ouderen is reizen niet meer het feestje van vroeger. Lees waarom — en hoe Vliegklaar de stress wegneemt.',
  keywords: 'reizen ouderen vermoeiend, vliegen op leeftijd, reisbegeleiding senioren, vliegveld stress ouderen, hulp bij reizen senior',
};

export default function BlogReizenVervelendPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Waarom reizen op leeftijd zo vermoeiend kan zijn — en wat je eraan kunt doen',
    description:
      'De échte redenen waarom reizen voor veel ouderen geen plezier meer is, en praktische oplossingen om er weer van te genieten.',
    author: {
      '@type': 'Organization',
      name: 'Vliegklaar',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vliegklaar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vliegklaar.nl/logo.png',
      },
    },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-primary-600 mb-3 font-semibold">Vliegklaar Blog · 25 april 2026</p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Waarom reizen op leeftijd zo vermoeiend kan zijn — en wat je eraan kunt doen
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            "Vroeger ging ik elk jaar naar Spanje. Nu zie ik er gewoon tegenop." Een zin die we
            wekelijks horen. Reizen — ooit een hoogtepunt — is voor veel ouderen veranderd in een
            obstakel. In dit artikel: waarom dat zo is, en wat je eraan kunt doen.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 mb-12 relative">
        <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
            alt="Drukke vertrekhal met reizigers"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 pb-20 prose prose-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          1. Vliegvelden zijn niet meer wat ze waren
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Schiphol heeft tegenwoordig <strong>72 miljoen passagiers per jaar</strong>. Vroeger was
          inchecken een rustige aangelegenheid, nu sta je 45 minuten in de rij voor de
          security-check. Dan een eindeloze wandeling naar gate F8 — soms wel 1,2 kilometer. Voor
          iemand van 75 met een knie die niet meer wil, is dat geen begin van een vakantie. Dat is
          een marathon.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          2. De koffer is zwaarder dan vroeger
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Niet de koffer zelf — maar uw kracht. Kracht in armen en rug neemt na ons 60e met
          ongeveer <strong>1,5% per jaar af</strong>. Een koffer van 20 kilo voelt op uw 75e als 30.
          En dan die hoge bagagebanden, het tillen op de transportband, het inhalen van de juiste
          band tussen 200 anderen… Begrijpelijk dat veel mensen "het volgende jaar misschien wel"
          gaan zeggen.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          3. Alles is digitaal — en niet altijd intuïtief
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Online inchecken. App downloaden voor de boardingpass. QR-code scannen op je telefoon
          terwijl iemand achter je in de rij zucht. Voor mensen die met een papieren ticket zijn
          opgegroeid, is het nieuwe vliegveld vaak verwarrend en stressvol. Eén foutje en je staat
          aan de verkeerde gate.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          4. Het sociale aspect is veranderd
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Vroeger reisde u met uw partner. Of met de buren. Nu zijn de buren overleden, zit uw
          partner thuis, of woont uw zoon in Australië en kan hij niet meekomen. Alleen reizen op
          uw 78e is een heel ander verhaal dan met z'n tweeën in 1985.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          5. De angst voor "wat als"
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wat als ik val? Wat als ik mijn pillen vergeet? Wat als de aansluiting niet lukt en ik
          niet weet wat ik moet doen? Deze gedachten houden veel ouderen tegen — terwijl ze
          stiekem dolgraag nog één keer hun nichtje in Lissabon willen bezoeken.
        </p>

        <hr className="my-12 border-primary-200" />

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          De oplossing: laat het regelen
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hier komt Vliegklaar in beeld. Wij doen precies wat een goede zoon of dochter zou doen
          — alleen dan professioneel:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>We halen u thuis op</li>
          <li>We dragen uw bagage</li>
          <li>We doen het inchecken, security en de boarding voor u</li>
          <li>We blijven bij u tot u in het vliegtuig zit</li>
          <li>Op de aankomst doet onze partner hetzelfde — we koppelen het aan een vertrouwd persoon op de bestemming</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          U merkt alleen dat het reizen weer leuk is. Geen rijen, geen tillen, geen stress.
          Alleen het uitzicht uit het raampje en de voorpret van wat komen gaat.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8 rounded-r-lg">
          <p className="text-lg text-primary-900 font-semibold mb-2">
            "Mijn moeder durfde niet meer alleen te vliegen. Met Vliegklaar gaat ze nu twee keer
            per jaar naar mijn zus in Portugal. Dat is goud waard."
          </p>
          <p className="text-sm text-gray-600">— Karin, dochter (Utrecht)</p>
        </div>

        {/* CTA */}
        <div className="bg-white border-2 border-primary-600 rounded-2xl p-8 md:p-10 my-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Klaar om weer met plezier te reizen?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Bel ons voor een vrijblijvend gesprek. Wij denken graag met u (of uw ouders) mee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0618769492"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              Bel 06-18769492
            </a>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mt-12 mb-4">
          Lees ook
        </h2>
        <ul className="list-disc pl-6 text-primary-700 space-y-2">
          <li>
            <Link href="/reisbegeleiding-ouderen" className="hover:underline">
              Reisbegeleiding voor ouderen — alle informatie
            </Link>
          </li>
          <li>
            <Link href="/luchthaven-begeleiding" className="hover:underline">
              Luchthaven begeleiding op Schiphol
            </Link>
          </li>
          <li>
            <Link href="/diensten" className="hover:underline">
              Onze diensten in detail
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
