import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Met een rolstoel op het vliegveld: Tips & Regels | Vliegklaar',
  description: 'Hoe werkt assistentie op het vliegveld? Lees alles over vliegen met een rolstoel, van aanmelden tot instappen en handige tips.',
};

export default function BlogPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8 text-sm text-blue-600">
        <Link href="/blog" className="hover:underline">← Terug naar blog</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-6 text-slate-900">Met een rolstoel op het vliegveld: Alles wat je moet weten</h1>
      
      <p className="text-xl text-slate-700 mb-8 leading-relaxed">
        Reizen met een beperking vraagt om een goede voorbereiding, maar hoeft zeker geen belemmering te zijn. 
        Vliegvelden zijn tegenwoordig uitstekend ingericht op passagiers met een rolstoel. 
        In dit artikel leggen we uit hoe je zorgeloos op reis gaat.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">1. Meld assistentie tijdig aan</h2>
        <p className="mb-4">
          Het belangrijkste is om je behoefte aan assistentie minimaal 48 uur voor vertrek aan te geven bij je luchtvaartmaatschappij. 
          Geef hierbij ook aan of je een eigen rolstoel meeneemt, wat de afmetingen zijn en of deze elektrisch is (inclusief type accu).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">2. Soorten assistentie</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>WCHR (Ramp):</strong> Je kunt zelf trappen lopen en afstanden overbruggen, maar hebt hulp nodig voor lange afstanden.</li>
          <li><strong>WCHS (Steps):</strong> Je kunt niet zelf de vliegtuigtrap op, maar wel korte stukjes lopen naar je stoel.</li>
          <li><strong>WCHC (Cabin Seat):</strong> Je bent volledig afhankelijk van een rolstoel en moet tot in je vliegtuigstoel geholpen worden.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">3. De security check</h2>
        <p className="mb-4">
          Passagiers in een rolstoel worden meestal handmatig gefouilleerd. Je eigen rolstoel wordt ook gecontroleerd op sporen van explosieven. 
          Dit is een standaardprocedure en verloopt vaak sneller via een speciale rij voor assistentie.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">4. Tot aan de gate of het vliegtuig</h2>
        <p className="mb-4">
          In de meeste gevallen mag je in je eigen handbewogen rolstoel blijven zitten tot aan de deur van het vliegtuig (gate-check). 
          Daar stap je over in een smalle &apos;aisle chair&apos; die wel door het gangpad van het vliegtuig past.
        </p>
      </section>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-12">
        <h3 className="text-xl font-bold mb-2">Hulp nodig bij het reizen?</h3>
        <p className="mb-4">
          Ziet u op tegen de logistiek op de luchthaven? De reisbegeleiders van Vliegklaar helpen u graag vanaf uw voordeur tot aan de gate.
        </p>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Neem contact op
        </Link>
      </div>
    </article>
  );
}
