import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  title: string;
  publishDate: string;
  description: string;
  children: ReactNode;
}

export function BlogLayout({ title, publishDate, description, children }: BlogLayoutProps) {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog oveszicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {title}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            Gepubliceerd op {publishDate}
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </header>

        <div className="prose prose-lg&ax-w-none text-gray-700 space-y-8">
          {children}
        </div>

        <section className="bg-gray-50 p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Interesse in reisbegeleiding?</h2>
          <p className="text-center mb-8">
            Vliegklaar biedt persoonlijke reisbegeleiding voor senioren die extra ondersteuning kunnen gebruiken tijdens hun vliegreis.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Neem contact op voor meer informatie
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
