import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/CookieBanner'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sentauri | AI Solutions Montreal - Professional AI Consulting',
  description: 'Montreal AI consulting firm. Cut operational costs with custom AI automation and bilingual voice assistants. Free consultation available. Qualify for Quebec grants like SR&ED.',
  keywords: 'AI consulting Montreal, AI automation Canada, voice assistant, business automation, artificial intelligence, SR&ED grants Quebec',
  openGraph: {
    title: 'Sentauri - AI Solutions Montreal | Professional AI Consulting',
    description: 'Transform your business with AI. Custom automation, bilingual voice assistants, expert consulting. Qualify for up to 65% funding via grants.',
    type: 'website',
    url: 'https://sentauri.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sentauri AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentauri - AI Solutions Montreal',
    description: 'Transform your business with AI. Custom automation, bilingual voice assistants.',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}