import Link from 'next/image';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met hoge bloeddruk: Tips voor een veilige vlucht | Vliegklaar',
  description: 'Wilt u vliegen met een hoge bloeddruk? Lees onze praktische tips over medicatie, voorbereiding en comfort tijdens de vlucht voor senioren.',
};

export default function VliegenMetBloeddrukPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met hoge bloeddruk: Praktische tips voor senioren
          </h1>
          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
              alt="Medische controle bloeddruk"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Veel senioren vragen zich af of vliegen veilig is met een hoge bloeddruk (hypertensie). In de meeste gevallen is dit geen probleem, mits u goed voorbereid bent.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-800">Is vliegen veilig met hypertensie?</h2>
            <p>
              Over het algemeen is vliegen veilig als uw bloeddruk goed onder controle is met medicatie. De luchtdruk in de cabine is lager dan op de grond, wat een licht effect kan hebben op de bloeddruk, maar voor de meeste mensen is dit verwaarloosbaar. Het is echter essentieel om voor vertrek uw arts te raadplegen, vooral als u recentelijk veranderingen in uw gezondheid of medicatie heeft gehad.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-700">1. De voorbereiding: Raadpleeg uw arts</h3>
            <p>
              Maak een afspraak bij uw huisarts of cardioloog voordat u uw reis boekt. Bespreek uw reisplannen en vraag om een medische verklaring of een overzicht van uw medicijnen. Dit is niet alleen handig voor de security, maar ook cruciaal in geval van nood in het buitenland.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vraag om een actueel medicatieoverzicht (AMO).</li>
              <li>Controleer of u voldoende medicatie heeft voor de gehele reis plus een reservevoorraad.</li>
              <li>Vraag of u extra maatregelen moet nemen voor lange vluchten.</li>
            </ul>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Onze tip voor stressvrij reizen</h3>
            <p className="mb-4">
              Stress is een bekende factor die de bloeddruk kan verhogen. De drukte op Schiphol of een andere luchthaven kan overweldigend zijn. 
            </p>
            <p>
              <strong>Wist u dat</strong> Vliegklaar persoonlijke begeleiding biedt vanaf uw voordeur tot in het vliegtuig? Onze begeleiders nemen de logistieke stress uit handen, zodat uw bloeddruk stabiel blijft.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-700">2. Tijdens de vlucht: Blijf in beweging</h3>
            <p>
              Bij een hoge bloeddruk is er een licht verhoogd risico op trombose (DVT) tijdens lange vluchten. Het is daarom belangrijk om:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Elk uur even op te staan en door de cabine te lopen.</li>
              <li>Zitoefeningen te doen met uw voeten en enkels.</li>
              <li>Voldoende water te drinken en alcohol te vermijden.</li>
              <li>Eventueel steunkousen te dragen na overleg met uw arts.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-700">3. Medicatie en tijdzones</h3>
            <p>
              Reist u naar een andere tijdzone? Bespreek met uw apotheker hoe u het schema van uw bloeddrukmedicatie het beste kunt aanpassen. Probeer uw medicijnen altijd in uw handbagage te bewaren, zodat u er direct bij kunt, ook bij vertragingen.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Wanneer mag u niet vliegen?</h3>
            <p>
              U mag meestal niet vliegen als u lijdt aan een zeer instabiele of ernstig verhoogde bloeddruk die niet reageert op medicatie. Ook na een recente hartaanval of beroerte gelden er specifieke wachttermijnen.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/medicijnen-mee-op-reis" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary-700 mb-2">Medicijnen mee op reis: De complete gids</h4>
              <p className="text-sm text-gray-600">Lees alles over verklaringen en het veilig vervoeren van uw medicatie.</p>
            </a>
            <a href="/blog/vliegen-met-hartklachten" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary-700 mb-2">Vliegen met hartklachten</h4>
              <p className="text-sm text-gray-600">Specifieke adviezen voor senioren met een hartverleden.</p>
            </a>
          </div>
        </section>

        <section className="mt-16 bg-primary-900 text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen met Vliegklaar</h2>
          <p className="text-xl mb-8 opacity-90">
            Heeft u extra ondersteuning nodig vanwege uw gezondheid? Onze reisbegeleiders staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-900 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
              Vraag informatie aan
            </a>
            <a href="tel:0618769492" className="bg-primary-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-600 transition-colors">
              Bel direct: 06-18769492
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
