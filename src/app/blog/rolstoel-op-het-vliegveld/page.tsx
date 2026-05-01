import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Article, WebPage, Organization } from 'schema-dts';

export const metadata: Metadata = {
  title: 'Reizen met een rolstoel op het vliegveld: Tips & Begeleiding',
  description: 'Alles wat u moet weten over vliegen met een rolstoel. Van assistentie op de luchthaven tot het meenemen van uw eigen rolstoel. Lees onze praktische tips.',
};

export default function RolstoelVliegveldPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reizen met een rolstoel op het vliegveld: Praktische tips voor senioren",
    "description": "Een complete gids voor reizen met een rolstoel op de luchthaven, inclusief het aanvragen van assistentie en tips voor eigen materiaal.",
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
    "datePublished": "2026-04-28"
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Reizen met een rolstoel op het vliegveld: Praktische tips
          </h1>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=1200&q=80"
              alt="Rolstoel assistentie op luchthaven"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Reizen met een rolstoel kan op het eerste gezicht een uitdaging lijken, maar met de juiste voorbereiding is het vliegveld juist een van de meest toegankelijke plekken. Of u nu uw eigen rolstoel meeneemt of gebruik wilt maken van de assistentie op de luchthaven, Vliegklaar helpt u graag op weg met deze essentiële tips.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Vraag tijdig assistentie aan</h2>
          <p>
            De belangrijkste regel voor vliegen met een rolstoel: meld dit minimaal 48 uur van tevoren bij uw luchtvaartmaatschappij. Dit wordt vaak aangeduid als &apos;Special Assistance&apos;. Geef hierbij duidelijk aan of u:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Kleine afstanden kunt lopen maar geen trappen kunt stijgen.</li>
            <li>Helemaal niet kunt lopen en in de vliegtuigstoel getild moet worden.</li>
            <li>Uw eigen (elektrische) rolstoel meeneemt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Uw eigen rolstoel meenemen</h2>
          <p>
            In de meeste gevallen mag u uw eigen rolstoel gratis meenemen als extra bagage. Bij de incheckbalie wordt uw rolstoel gelabeld. Vaak mag u met uw eigen rolstoel tot aan de gate rijden. Daar wordt de rolstoel ingenomen en in het ruim geplaatst. 
          </p>
          <p className="bg-primary-50 p-4 border-l-4 border-primary-500 rounded">
            <strong>Let op bij elektrische rolstoelen:</strong> Geef het type accu (droog, nat of lithium) en de afmetingen door. Voor sommige accu&apos;s gelden strikte veiligheidsvoorschriften.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. De &apos;Airside&apos; ervaring</h2>
          <p>
            Zodra u door de security bent, zijn de meeste moderne luchthavens uitstekend ingericht voor rolstoelgebruikers. Er zijn ruime liften, aangepaste toiletten en vaak krijgt u voorrang bij het aan boord gaan (pre-boarding). Dit geeft u de rust om rustig te gaan zitten voordat de rest van de passagiers komt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Hoe Vliegklaar ondersteunt</h2>
          <p>
            Vindt u het spannend om dit allemaal zelf te regelen? De reisbegeleiders van Vliegklaar zijn ervaren in het begeleiden van reizigers met mobiliteitsbeperkingen. Wij regelen de communicatie met de luchthaven, zorgen dat de assistentie klaarstaat en blijven bij u tot u veilig op uw bestemming bent.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw vliegreis?</h3>
          <p className="mb-6 text-gray-600">Wij zorgen voor een zorgeloze reiservaring, met of zonder rolstoel. Neem contact op voor persoonlijk advies.</p>
          <Link
            href="/contact"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors"
          >
            Vrijblijvend kennismaken
          </Link>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
