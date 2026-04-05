import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Mono, Instrument_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dr. David Walters — Hormone Optimization Physician',
    template: '%s | Dr. David Walters',
  },
  description: 'Dr. David Walters, DO, PhD, MBA — one of the only physicians in the country with a PhD in reproductive endocrinology and 25 years of clinical experience in hormonal optimization for men and women of all ages.',
  keywords: ['hormone optimization', 'testosterone', 'low testosterone young men', 'clomiphene', 'EDC', 'endocrine disruptors', 'telemedicine', 'South Dakota', 'Colorado'],
  openGraph: {
    siteName: 'Dr. David Walters',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmMono.variable} ${instrumentSans.variable}`}>
      <body className="bg-bg text-off-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
