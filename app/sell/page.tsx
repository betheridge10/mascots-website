import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Circle,
  Layers,
  Star,
  Diamond,
  Trophy,
  Gamepad2,
  Package,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Search,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react'
import Navigation from '../_components/Navigation'
import Breadcrumbs from '../_components/Breadcrumbs'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'We Buy Cards & Collectibles',
  description:
    'Sell your sports cards, Pokémon, MTG, Yu-Gi-Oh!, memorabilia, video games, and collectibles to Mascots in Tell City, Indiana. Fair prices, paid on the spot.',
}

const whatWeBuy = [
  {
    icon: Circle,
    title: 'Sports Cards',
    desc: 'Singles, graded slabs, complete sets, rookie cards, autographs, vintage wax, and full collections. All brands — Topps, Panini, Bowman, Upper Deck.',
    image: '/images/sportscard2.jpg',
    imageAlt: 'Glass case with premium baseball cards and autographs',
  },
  {
    icon: Circle,
    title: 'Graded Cards',
    desc: 'PSA, BGS, SGC, and CGC slabs across all sports and TCGs. We pay strong prices for high-grade investment cards.',
    image: '/images/sportscard3.jpg',
    imageAlt: 'Graded cards and high-end singles in display case',
  },
  {
    icon: Layers,
    title: 'Pokémon TCG',
    desc: 'Booster boxes, Elite Trainer Boxes, binders of singles, vintage Base Set, and modern competitive cards. We love Pokémon collections.',
    image: '/images/pokemoncards.jpg',
    imageAlt: 'Pokémon singles and PSA graded cards in a glass case',
  },
  {
    icon: Star,
    title: 'Magic: The Gathering',
    desc: 'Commander staples, Legacy and Vintage cards, sealed boxes, Secret Lairs, and full collection buyouts. All sets considered.',
    image: '/images/magicboxes.jpg',
    imageAlt: 'MTG booster boxes on display',
  },
  {
    icon: Diamond,
    title: 'Yu-Gi-Oh!',
    desc: 'Singles, structure decks, booster boxes, first editions, and vintage collections. All formats and eras.',
    image: '/images/yugioh.jpg',
    imageAlt: 'Yu-Gi-Oh cards held at a game table',
  },
  {
    icon: Sparkles,
    title: 'Lorcana & Other TCGs',
    desc: "Disney Lorcana, One Piece, Flesh & Blood, Digimon, and other trading card games. Sealed product and singles.",
    image: '/images/lorcanaboxes2.jpg',
    imageAlt: 'Disney Lorcana booster boxes stacked on the counter',
  },
  {
    icon: Trophy,
    title: 'Memorabilia',
    desc: 'Authenticated signed jerseys, framed photos, autographed balls and helmets. COA required for high-value pieces.',
    image: '/images/signed.jpg',
    imageAlt: 'Signed photos and memorabilia display wall',
  },
  {
    icon: Gamepad2,
    title: 'Video Games & Consoles',
    desc: 'Retro and modern games, consoles, and accessories. NES to PS5, Game Boy to Switch. Loose, CIB, and sealed.',
    image: '/images/videogames.jpg',
    imageAlt: 'Nintendo Switch game shelf',
  },
  {
    icon: Package,
    title: 'Toys & Action Figures',
    desc: 'Vintage and modern action figures, Star Wars, WWE, Power Rangers, MOTU, Marvel, and other collectibles. Boxed or loose.',
    image: '/images/toys3.jpg',
    imageAlt: 'Power Rangers and Star Wars action figures on display',
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Bring It In',
    desc: 'Stop by the store during business hours with your cards, collection, or items. For large collections, feel free to call ahead so we can give you our full attention.',
  },
  {
    number: '02',
    icon: DollarSign,
    title: 'We Make an Offer',
    desc: "Our team evaluates your items honestly, based on current market value and condition. We'll give you a straightforward offer — no pressure, no games.",
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Get Paid on the Spot',
    desc: 'Accept the offer and walk out with cash. That simple. No waiting, no consignment delays, no shipping hassle.',
  },
]

const faqs = [
  {
    q: 'How do you determine pricing?',
    a: "We base our offers on recent sold data from eBay, TCGplayer, and PSA Population reports. We factor in condition, demand, and market trends. Our goal is a fair deal that works for both sides.",
  },
  {
    q: 'Do you buy complete collections?',
    a: "Absolutely — we love buying full collections. Whether it's a single binder or a storage unit full of cards, bring everything in and we'll evaluate it together. Larger collections often get stronger overall offers.",
  },
  {
    q: 'Do cards need to be in perfect condition?',
    a: "We buy all conditions, though NM/Mint cards and graded slabs command the best prices. Heavily played or damaged cards are still worth bringing in — we'll let you know what works.",
  },
  {
    q: 'Can I send photos before coming in?',
    a: "Yes. For large collections or high-value items, message us on Facebook or email us photos first. We can give you a rough estimate and schedule a time to go through everything.",
  },
  {
    q: 'Do you buy bulk commons and dollar bin cards?',
    a: "We do buy bulk, though our offer will reflect volume pricing. Bring it in and we'll take a look — we're interested in quantity as well as quality.",
  },
  {
    q: 'What should I bring for graded cards?',
    a: "Just bring the slabs — the label tells us everything we need. For authenticated memorabilia, bring the COA if you have it.",
  },
]

export default function SellPage() {
  return (
    <>
      <Navigation />
      <ScrollReveal />

      {/* Page Hero */}
      <header className="page-hero" role="banner">
        <div className="page-hero-content">
          <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">We Buy</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>Sell to Mascots</span>
          <h1 className="page-hero-headline">We Buy Cards &amp;<br /><em>Collectibles</em></h1>
          <p className="page-hero-sub">
            Fair prices, paid on the spot. Bring in your sports cards, TCG, memorabilia,
            video games, or full collections — we want to buy them.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            <a href="tel:+18127722873" className="btn btn-primary btn-lg">
              <Phone size={16} aria-hidden="true" />
              Call (812) 772-2873
            </a>
            <Link href="/find-us" className="btn btn-ghost btn-lg">
              <MapPin size={16} aria-hidden="true" />
              Get Directions
            </Link>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Sell Your Cards' }]} />
      <main id="main-content">

        {/* ================================================================
            HOW IT WORKS
            ================================================================ */}
        <section className="section" aria-labelledby="how-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">Simple &amp; Straightforward</span>
              <h2 className="section-headline reveal reveal-delay-1" id="how-heading">
                How it <em>works</em>
              </h2>
              <span className="decorative-rule reveal reveal-delay-2" style={{ margin: '1rem auto 0' }} aria-hidden="true" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-6)',
              marginTop: 'var(--space-12)',
            }}>
              {steps.map(({ number, icon: Icon, title, desc }, i) => (
                <div
                  key={number}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border-card)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-5)',
                    right: 'var(--space-6)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: 'rgba(0,51,160,0.06)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }} aria-hidden="true">{number}</div>

                  <div style={{
                    width: 48, height: 48,
                    background: 'rgba(0,51,160,0.08)',
                    border: '1px solid rgba(0,51,160,0.15)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--space-5)',
                  }} aria-hidden="true">
                    <Icon size={22} />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-3)',
                  }}>{title}</h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            WHAT WE BUY — Photo Grid
            ================================================================ */}
        <section className="section section--alt" aria-labelledby="what-we-buy-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">We&apos;re Interested In</span>
              <h2 className="section-headline reveal reveal-delay-1" id="what-we-buy-heading">
                What we <em>buy</em>
              </h2>
              <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1rem', marginInline: 'auto', textAlign: 'center' }}>
                If it&apos;s collectible, there&apos;s a good chance we want it. Here&apos;s what we actively purchase:
              </p>
            </div>

            <div className="categories-grid" role="list" style={{ marginTop: 'var(--space-12)' }}>
              {whatWeBuy.map(({ icon: Icon, title, desc, image, imageAlt }, i) => (
                <div
                  key={title}
                  className={`category-card category-card--photo reveal reveal-delay-${(i % 4) + 1}`}
                  style={{ cursor: 'default' }}
                  role="listitem"
                >
                  <div className="category-card-photo" aria-hidden="true">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="category-card-photo-overlay" />
                  </div>
                  <div className="category-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="category-card-title">{title}</h3>
                  <p className="category-card-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            BULK / INVENTORY PHOTO + CTA
            ================================================================ */}
        <section className="section" aria-label="Sell your collection">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-12)',
              alignItems: 'center',
            }}>
              <div className="reveal">
                <span className="eyebrow">Full Collection Buyouts</span>
                <h2 className="section-headline" style={{ marginTop: 'var(--space-3)' }}>
                  Selling a whole<br /><em>collection?</em>
                </h2>
                <span className="decorative-rule" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
                <p className="section-body" style={{ marginTop: '1.5rem' }}>
                  We regularly buy full collections — storage units full of vintage wax, binders of
                  graded slabs, estate finds, and everything in between. Larger collections get our
                  full attention and often our best offers.
                </p>
                <p className="section-body" style={{ marginTop: '1rem' }}>
                  Not sure where to start? Call or message us with photos. We can give you a rough
                  estimate before you make the trip.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
                  <a href="tel:+18127722873" className="btn btn-primary btn-lg">
                    <Phone size={16} aria-hidden="true" />
                    Call (812) 772-2873
                  </a>
                  <a href="mailto:mascotsportscards@gmail.com" className="btn btn-ghost btn-lg">
                    <Mail size={16} aria-hidden="true" />
                    Email Us Photos
                  </a>
                  <a
                    href="https://www.facebook.com/Mascotsportscards/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-lg"
                  >
                    <ArrowUpRight size={16} aria-hidden="true" />
                    Message on Facebook
                  </a>
                </div>
              </div>

              <div className="reveal reveal-delay-2">
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  position: 'relative',
                  border: '1px solid var(--color-border-card)',
                  background: 'var(--color-bg-elevated)',
                }}>
                  <Image
                    src="/images/exterior-shop-shot.jpg"
                    alt="Mascots Sports Cards & Collectibles storefront in Tell City, Indiana"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(5,14,30,0.55) 0%, transparent 55%)',
                  }} aria-hidden="true" />
                  <div style={{
                    position: 'absolute',
                    bottom: 'var(--space-5)',
                    left: 'var(--space-6)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.7)',
                    }}>Thousands of singles in stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FAQ
            ================================================================ */}
        <section className="section section--alt" aria-labelledby="faq-heading">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-16)', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 2rem)' }}>
                <span className="eyebrow reveal">Got Questions?</span>
                <h2 className="section-headline reveal reveal-delay-1" id="faq-heading">
                  Common<br /><em>questions</em>
                </h2>
                <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
                <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.5rem' }}>
                  Still have questions? Call us at{' '}
                  <a href="tel:+18127722873" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                    (812) 772-2873
                  </a>{' '}
                  or stop in during store hours.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }} className="reveal reveal-delay-2">
                {faqs.map(({ q, a }) => (
                  <div
                    key={q}
                    style={{
                      background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border-card)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-6)',
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-3)',
                    }}>{q}</h3>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FINAL CTA
            ================================================================ */}
        <section className="section" aria-label="Get in touch to sell">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow reveal">Ready to Sell?</span>
            <h2 className="section-headline reveal reveal-delay-1" style={{ marginInline: 'auto', maxWidth: 560 }}>
              Come see us in<br /><em>Tell City, Indiana</em>
            </h2>
            <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
              Open Tuesday through Saturday 11 AM – 9 PM, Sunday 11 AM – 3 PM.
              Bring your cards and collections — we&apos;re ready to buy.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }} className="reveal reveal-delay-3">
              <Link href="/find-us" className="btn btn-primary btn-lg">
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                <Mail size={16} aria-hidden="true" />
                Contact Us
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
