import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from './_components/Footer'
import MobileCTABar from './_components/MobileCTABar'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mascots Sports Cards & Collectibles',
  description: "Southern Indiana's premier hobby shop. Sports cards, Pokémon TCG, Magic: The Gathering, memorabilia, video games, toys, and more.",
  url: 'https://mascotsportscards.com',
  telephone: '+18127722873',
  email: 'mascotsportscards@gmail.com',
  image: 'https://mascotsportscards.com/images/exterior-shop-shot.jpg',
  priceRange: '$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '705 Main Street',
    addressLocality: 'Tell City',
    addressRegion: 'IN',
    postalCode: '47586',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9514,
    longitude: -86.7618,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '11:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/Mascotsportscards/',
    'https://www.ebay.com/str/mascotcollectibles',
    'https://mascotsportscards.tcgplayerpro.com/',
    'https://www.whatnot.com/s/bTqfi67P',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
  },
}

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}
