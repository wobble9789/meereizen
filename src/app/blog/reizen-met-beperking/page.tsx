import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reizen met een beperking: Tips voor een zorgeloze vakantie | Vliegklaar',
  description: 'Wilt u op reis maar heeft u een fysieke of visuele beperking? Ontdek hoe u met de juiste voorbereiding en reisbegeleiding zorgeloos kunt vliegen.',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Reizen met een beperking: Zo bereidt u zich voor",
    "description": "Praktische tips en adviezen voor senioren en reizigers met een beperking die hulp nodig hebben bij hun vliegreis.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-05-01"
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold mb-6">Reizen met een beperking: Tips voor een zorgeloze vakantie</h1>
      
      <p className="mb-4">
        Een fysieke of visuele beperking hoeft een mooie vliegreis niet in de weg te staan. 
        Of u nu gebruikmaakt van een rolstoel, slechtziend bent of extra ondersteuning nodig heeft bij het instappen: 
        Schiphol en andere luchthavens bieden uitgebreide faciliteiten om uw reis zo comfortabel mogelijk te maken.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Meld uw assistentie op tijd aan</h2>
      <p className="mb-4">
        De belangrijkste regel bij reizen met een beperking is: communicatie. Geef minimaal 48 uur voor vertrek aan uw 
        luchtvaartmaatschappij door welke hulp u nodig heeft. Of het nu gaat om assistentie bij de gate of hulp bij het 
        gebruik van het toilet aan boord, de maatschappij kan dan de nodige voorbereidingen treffen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Reizen met een eigen rolstoel</h2>
      <p className="mb-4">
        Neemt u uw eigen rolstoel mee? Geef de afmetingen en het type batterij (bij elektrische rolstoelen) altijd door. 
        Vaak kunt u met uw eigen rolstoel tot aan de deur van het vliegtuig komen, waarna deze veilig in het ruim wordt geplaatst. 
        Kijk voor meer specifieke info ook op onze pagina over <Link href="/blog/rolstoel-op-het-vliegveld" className="text-blue-600 underline">rolstoelen op het vliegveld</Link>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. De voordelen van reisbegeleiding</h2>
      <p className="mb-4">
        Soms is de assistentie op de luchthaven alleen niet genoeg. Wilt u ook tijdens de vlucht en bij aankomst op uw 
        bestemming een vertrouwd gezicht aan uw zijde? Dan biedt persoonlijke reisbegeleiding uitkomst. 
        Dit is ideaal voor mensen die onzeker zijn over de logistiek of medische ondersteuning nodig hebben tijdens de reis.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusie</h2>
      <p className="mb-6">
        Met een goede voorbereiding is de wereld nog steeds bereikbaar. Heeft u vragen over assistentie of zoekt u iemand 
        om samen mee te reizen? Vliegklaar helpt u graag op weg.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Hulp nodig bij uw volgende reis?</h3>
        <p>Vliegklaar biedt professionele reisbegeleiding voor senioren en reizigers met een beperking.</p>
        <Link href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded">
          Bekijk onze diensten
        </Link>
      </div>
    </article>
  );
}
