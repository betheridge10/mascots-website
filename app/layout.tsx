import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from './_components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mascotsportscards.com'),
  title: {
    default: 'Mascots Sports Cards & Collectibles | Tell City, Indiana',
    template: '%s | Mascots Sports Cards & Collectibles',
  },
  description:
    "Southern Indiana's premier hobby shop in Tell City, IN. Sports cards, Pokémon TCG, Magic: The Gathering, memorabilia, video games, and more. Est. 2018.",
  keywords: [
    'sports cards Tell City Indiana',
    'hobby shop Tell City',
    'Pokemon cards Indiana',
    'Magic the Gathering Tell City',
    'sell sports cards Indiana',
    'graded cards Tell City',
    'TCG store Southern Indiana',
    'memorabilia Tell City',
    'Mascots Sports Cards',
  ],
  openGraph: {
    title: 'Mascots Sports Cards & Collectibles',
    description:
      "Southern Indiana's premier hobby shop — Sports Cards, TCG, Memorabilia & More in Tell City, IN.",
    type: 'website',
    url: 'https://mascotsportscards.com',
    siteName: 'Mascots Sports Cards & Collectibles',
    images: [
      {
        url: '/images/exterior-shop-shot.jpg',
        width: 1200,
        height: 800,
        alt: 'Mascots Sports Cards & Collectibles storefront in Tell City, Indiana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mascots Sports Cards & Collectibles',
    description: "Southern Indiana's premier hobby shop — Tell City, IN.",
    images: ['/images/exterior-shop-shot.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
