import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MeeReizen - Wij gaan gewoon mee.',
  description: 'Zorgeloos reizen met persoonlijke begeleiding. MeeReizen regelt alles voor uw reis — van begin tot eind.',
  keywords: 'MeeReizen, reizen ouderen, zorgeloos reizen, reisbegeleiding, persoonlijke begeleiding, vliegveld service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
