import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gehoorbescherming en Vliegen voor Senioren: Tips & Advies | Vliegklaar',
  description: 'Hoe beschermt u uw gehoor tijdens het vliegen? Alles over oordoppen, drukregulatie en vliegen met een gehoorapparaat voor senioren.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-gray-900">Gehoorbescherming en vliegen</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">Gehoorbescherming en Vliegen voor Senioren: Bescherm Uw Oren</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="lead text-xl text-gray-700 mb-8 font-light italic">
          Vliegen brengt aanzienlijke drukverschillen en omgevingsgeluid met zich mee. Voor senioren is goede gehoorbescherming essentieel voor een comfortabele reis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Waarom gehoorbescherming belangrijk is tijdens het vliegen</h2>
        <p className="mb-4">
          Het cabinegeluid in een vliegtuig kan oplopen tot wel 85 decibel. Hoewel dit onder de grens van directe schade ligt, kan langdurige blootstelling leiden tot vermoeidheid en tijdelijke gehoorvermindering. Daarnaast zorgen drukverschillen bij het stijgen en landen vaak voor de bekende &apos;dichte oren&apos;.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Filteroordoppen voor vliegreizen</h3>
        <p className="mb-4">
          Speciale vliegoordoppen bevatten een filter dat de luchtdruk in het oor geleidelijker laat aanpassen. Dit voorkomt pijn tijdens de daling. Tegelijkertijd dempen ze het monotone lawaai van de motoren, terwijl spraak (zoals mededelingen van de bemanning) verstaanbaar blijft.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Vliegen met een gehoorapparaat</h3>
        <p className="mb-4">
          Draagt u een gehoorapparaat? U hoeft deze bij de securitycontrole meestal niet uit te doen. Tijdens de vlucht kan het echter prettig zijn om de versterking iets lager te zetten om het omgevingsgeluid te minimaliseren. In sommige gevallen zijn noise-cancelling koptelefoons over het apparaat heen ook een goede optie.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Tips voor een comfortabele drukverdeling</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Blijf slikken of kauwen:</strong> Gebruik suikervrije snoepjes of kauwgom tijdens het stijgen en landen.</li>
          <li><strong>De Valsalva-manoeuvre:</strong> Houd uw neus dicht, sluit uw mond en probeer voorzichtig lucht door uw neus te persen om de oren te &apos;klaren&apos;.</li>
          <li><strong>Niet slapen tijdens de daling:</strong> Zorg dat u wakker bent wanneer het vliegtuig begint te dalen, zodat u actief kunt slikken om de druk te reguleren.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-xl my-10 border-l-4 border-blue-500 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Hulp nodig op de luchthaven?</h3>
          <p className="text-blue-800">
            Vindt u de drukte en de communicatie op de luchthaven lastig vanwege uw gehoor? Onze <Link href="/reisbegeleiding-ouderen" className="underline font-semibold text-blue-900 hover:text-blue-700">reisbegeleiders voor senioren</Link> ondersteunen u graag bij elke stap van uw reis.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gerelateerde artikelen</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><Link href="/blog/vliegen-met-gehoorapparaat-tips" className="text-blue-600 hover:underline font-medium">Uitgebreide tips voor vliegen met een gehoorapparaat</Link></li>
          <li><Link href="/blog/hoe-ga-je-om-met-een-gehoorapparaat-op-het-vliegveld" className="text-blue-600 hover:underline font-medium">Het gehoorapparaat bij de security en douane</Link></li>
        </ul>
      </div>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Veelgestelde vragen</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-900">Zijn noise-cancelling koptelefoons veilig voor senioren?</h4>
            <p className="text-gray-700">Ja, ze zijn zelfs zeer aanbevolen omdat ze de vermoeidheid door lawaai aanzienlijk verminderen.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-900">Moet ik oordoppen in tijdens de hele vlucht?</h4>
            <p className="text-gray-700">Dat is niet nodig, maar ze zijn het meest effectief vanaf het moment dat de daling wordt ingezet (meestal 30 minuten voor landing).</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Zijn noise-cancelling koptelefoons veilig voor senioren?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Ja, ze zijn zelfs zeer aanbevolen omdat ze de vermoeidheid door lawaai aanzienlijk verminderen.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Moet ik oordoppen in tijdens de hele vlucht?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Dat is niet nodig, maar ze zijn het meest effectief vanaf het moment dat de daling wordt ingezet (meestal 30 minuten voor landing).'
                }
              }
            ]
          }),
        }}
      />
    </article>
  );
}
