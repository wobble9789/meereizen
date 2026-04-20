import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Bedrijfsinfo */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              MeeReizen
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Zorgeloos reizen voor ouderen. Wij regelen alles van A tot Z.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-lg text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-lg text-gray-300 hover:text-primary-400 transition-colors">
                  Onze Diensten
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-lg text-gray-300 hover:text-primary-400 transition-colors">
                  Over Ons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <a href="tel:0881234567" className="hover:text-primary-400 transition-colors">
                  📞 085-0608333
                </a>
              </li>
              <li>
                <a href="mailto:info@meereizen.nl" className="hover:text-primary-400 transition-colors">
                  ✉️ info@meereizen.nl
                </a>
              </li>
              <li>Maandag - Vrijdag: 9:00 - 17:00</li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Informatie</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-lg text-gray-300 hover:text-primary-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="text-lg text-gray-300 hover:text-primary-400 transition-colors">
                  Voorwaarden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-lg text-gray-400">
            © {currentYear} MeeReizen. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
