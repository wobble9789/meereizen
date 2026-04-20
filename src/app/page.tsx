import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const services = [
    {
      title: 'Complete Reizen',
      description: 'Volledig verzorgde reizen naar de mooiste bestemmingen. Wij regelen alles voor u.',
      icon: '✈️',
      link: '/diensten/complete-reizen'
    },
    {
      title: 'Vervoer & Begeleiding',
      description: 'Wij halen u op en brengen u veilig naar de luchthaven. Ook begeleiding ter plaatse.',
      icon: '🚗',
      link: '/diensten/vervoer'
    },
    {
      title: 'Tickets & Arrangementen',
      description: 'Vliegtickets, hotels, excursies - wij boeken het allemaal voor u.',
      icon: '🎫',
      link: '/diensten/tickets'
    },
    {
      title: 'Persoonlijk Contact',
      description: 'Altijd bereikbaar voor al uw vragen. Geen gedoe, gewoon goed geregeld.',
      icon: '📞',
      link: '/contact'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reizen zonder gedoe
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Droomt u van een mooie reis, maar vindt u alle regelingen te ingewikkeld? 
              Wij nemen het werk uit handen. Van A tot Z geregeld.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diensten">
                <Button size="lg" className="w-full sm:w-auto">
                  Bekijk onze diensten
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Neem contact op
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Wat wij voor u doen
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Alles wat u nodig heeft voor een zorgeloze reis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Zo werkt het
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              In drie simpele stappen op reis
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    Vertel ons uw wensen
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Bel of mail ons en vertel waar u naartoe wilt. Wij luisteren naar al uw wensen 
                    en behoeften voor de perfecte reis.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    Wij regelen alles
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Van vliegtickets tot hotels, van vervoer tot begeleiding. Wij zorgen dat 
                    alles tot in de puntjes geregeld is.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    Geniet van uw reis
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    U hoeft nergens meer aan te denken. Wij begeleiden u en zorgen dat u 
                    zorgeloos kunt genieten van uw vakantie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Klaar voor een zorgeloze reis?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op en vertel ons over uw droomreis
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Gratis gesprek plannen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
