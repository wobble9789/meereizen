import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Over MeeReizen
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Wij maken reizen weer leuk en ontspannen
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Onze missie
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Reizen zou plezier moeten zijn, geen stress. Maar voor veel mensen wordt een 
              reis al snel ingewikkeld: tickets boeken, hotels zoeken, vervoer regelen, 
              door de luchthaven navigeren... Het stapelt zich op.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Wij geloven dat iedereen moet kunnen genieten van een mooie reis, zonder 
              alle zorgen en gedoe. Daarom hebben wij MeeReizen opgericht: om het 
              reizen weer simpel en plezierig te maken.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              U vertelt ons waar u naartoe wilt, en wij regelen de rest. Van A tot Z. 
              Zo simpel is het.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Waarom voor ons kiezen?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  👥
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Persoonlijke service
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Geen automatische systemen of wachtrijen. U krijgt een vast contactpersoon 
                    die u van begin tot eind helpt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Op maat gemaakt
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Elke reis is anders. We luisteren naar uw wensen en maken een reis die 
                    perfect bij u past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  🤝
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Begeleiding van A tot Z
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Van het ophalen bij u thuis tot het begeleiden op de luchthaven - wij zijn 
                    er voor u.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Alles uit handen
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    U hoeft nergens meer aan te denken. Wij zorgen dat elk detail geregeld is, 
                    zodat u kunt genieten.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  💬
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Altijd bereikbaar
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Heeft u een vraag tijdens uw reis? Wij zijn altijd bereikbaar om u te helpen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om kennis te maken?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Neem contact met ons op voor een vrijblijvend gesprek over uw droomreis
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact opnemen
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
