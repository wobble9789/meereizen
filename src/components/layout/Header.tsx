'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Onze Diensten', href: '/diensten' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Vliegklaar
          </Link>

          {/* Desktop navigatie */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-lg font-medium text-gray-700 hover:text-primary-600 
                         hover:bg-primary-50 rounded-lg transition-all focus:outline-none 
                         focus:ring-2 focus:ring-primary-500"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary ml-4"
            >
              Bel ons: 06-18769492
            </Link>
          </div>

          {/* Mobile menu knop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden mt-4 space-y-2 transition-all duration-300 overflow-hidden',
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-6 py-4 text-lg font-medium text-gray-700 hover:text-primary-600 
                       hover:bg-primary-50 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block btn-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Bel ons: 06-18769492
          </Link>
        </div>
      </nav>
    </header>
  )
}
