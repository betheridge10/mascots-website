import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Star,
  Trophy,
  ShoppingBag,
  MapPin,
  Calendar,
  ChevronRight,
  Sparkles,
  Heart,
  Layers,
} from 'lucide-react'
import Navigation from '../_components/Navigation'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "The story behind Mascots Sports Cards & Collectibles — Tell City, Indiana's premier hobby shop since 2018. Learn about The Back Room, our community, and our mission.",
}

const milestones = [
  {
    year: '2018',
    title: 'Mascots Opens in Tell City',
    body: 'Started with a passion for sports cards and a vision to bring a proper hobby shop to Tell City, Indiana. What began small quickly became the go-to destination for collectors in Perry County and the surrounding Tri-State area.',
  },
  {
    year: '2019',
    title: 'Expanding into TCG',
    body: 'Added a full Pokémon TCG and Magic: The Gathering inventory. The demand for weekly play events was immediately clear — the community wanted a place to gather.',
  },
  {
    year: '2020',
    title: 'The Back Room Opens',
    body: 'Dedicated The Back Room as a full community space. Card tables, play areas, and a weekly schedule of FNM, Pokémon League, and casual nights. The hobby found its home.',
  },
  {
    year: '2021',
    title: 'eBay Top-Rated Seller',
    body: 'Expanded online operations and earned Top-Rated Seller status on eBay. Memorabilia, graded cards, and hard-to-find items now reaching collectors across the country.',
  },
  {
    year: '2022–Now',
    title: 'Growing Strong',
    body: "Launched on TCGplayer Pro and Whatnot live breaks. 64+ five-star Google reviews, 100% recommend rate, and a community that keeps coming back. Southern Indiana's hobby home.",
  },
]

const backRoomFeatures = [
  { icon: Star, title: 'Friday Night Magic', desc: 'Weekly FNM every Friday starting at 6:00 PM. All formats welcome — Standard, Pioneer, Commander, and Draft.' },
  { icon: Layers, title: 'Pokémon League', desc: 'Regular Pokémon League Challenge events. Compete, trade, and connect with the Pokémon TCG community.' },
  { icon: Sparkles, title: 'Yu-Gi-Oh! Nights', desc: 'Regular Yu-Gi-Oh! play nights for all skill levels. Casual and competitive formats supported.' },
  { icon: Users, title: 'Open Play', desc: 'The Back Room is open for casual play during store hours. Bring your deck, bring a friend.' },
  { icon: Heart, title: 'Community First', desc: "A welcoming atmosphere for collectors of all ages. Whether you're a veteran or just starting out, you belong here." },
  { icon: Calendar, title: 'Special Events', desc: 'Pre-release events, buy/sell/trade days, box breaks, and more. Follow us to stay up to date.' },
]

export default function AboutPage() {
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
            <span aria-current="page">About</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>Our Story</span>
          <h1 className="page-hero-headline">Built for <em>the Hobby</em></h1>
          <p className="page-hero-sub">
            From a local passion project to Southern Indiana&apos;s premier collectibles destination.
            Serving Tell City and the Tri-State area since 2018.
          </p>
        </div>
      </header>

      <main id="main-content">

        {/* ================================================================
            STORY + STOREFRONT IMAGE
            ================================================================ */}
        <section className="section" aria-labelledby="story-heading">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
              <div>
                <span className="eyebrow reveal">Who We Are</span>
                <h2 className="section-headline reveal reveal-delay-1" id="story-heading">
                  More than a store —<br /><em>a community</em>
                </h2>
                <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
                  <p className="section-body reveal reveal-delay-3">
                    Mascots Sports Cards &amp; Collectibles opened in 2018 in Tell City, Indiana with a simple goal:
                    bring a real hobby shop to Southern Indiana. Not a big-box sideline — a dedicated space
                    for collectors, players, and enthusiasts who take their hobby seriously.
                  </p>
                  <p className="section-body reveal reveal-delay-3" style={{ marginTop: 0 }}>
                    We carry sports cards across all major leagues and brands, a full Pokémon TCG and MTG
                    inventory, authenticated memorabilia, video games, and every supply you need to protect
                    your collection. If it&apos;s collectible, we carry it.
                  </p>
                  <p className="section-body reveal reveal-delay-3" style={{ marginTop: 0 }}>
                    What sets us apart isn&apos;t just the inventory — it&apos;s The Back Room. A dedicated community
                    space where players gather every week for FNM, Pokémon League, casual play nights, and
                    tournaments. The hobby is more fun together.
                  </p>
                </div>
              </div>

              {/* Storefront image */}
              <div className="reveal reveal-delay-2">
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-card)',
                  aspectRatio: '4/3',
                  position: 'relative',
                  background: 'var(--color-bg-elevated)',
                }}>
                  <Image
                    src="/images/exterior-shop-shot.jpg"
                    alt="Mascots Sports Cards & Collectibles storefront in Tell City, Indiana"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            STATS STRIP
            ================================================================ */}
        <div style={{
          background: 'var(--color-bg-elevated)',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: 'var(--space-10) 0',
        }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', textAlign: 'center' }}>
              {[
                { value: '2018', label: 'Year Founded' },
                { value: '64+', label: '5-Star Reviews' },
                { value: '100%', label: 'Recommend Rate' },
                { value: 'Top', label: 'Rated eBay Seller' },
              ].map(({ value, label }) => (
                <div key={label} className="reveal">
                  <span className="stat-value" style={{ display: 'block', fontSize: 'var(--text-4xl)', textAlign: 'center' }}>{value}</span>
                  <span className="stat-label" style={{ display: 'block', textAlign: 'center', marginTop: 'var(--space-2)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================
            TIMELINE
            ================================================================ */}
        <section className="section section--alt" aria-labelledby="timeline-heading">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--space-16)', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 2rem)' }}>
                <span className="eyebrow reveal">Our Journey</span>
                <h2 className="section-headline reveal reveal-delay-1" id="timeline-heading">
                  Five years,<br /><em>one mission</em>
                </h2>
                <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
                <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.5rem' }}>
                  From day one to today — the milestones that made Mascots
                  what it is: Southern Indiana&apos;s premier hobby shop.
                </p>
              </div>

              <div className="timeline reveal reveal-delay-2">
                {milestones.map(({ year, title, body }) => (
                  <div key={year} className="timeline-item">
                    <div className="timeline-year">{year}</div>
                    <h3 className="timeline-title">{title}</h3>
                    <p className="timeline-body">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            MEET THE OWNERS
            ================================================================ */}
        <section className="section" aria-labelledby="owners-heading">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'var(--space-16)', alignItems: 'center' }}>

              {/* Photo */}
              <div className="reveal">
                <div style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '2px solid var(--color-star)',
                  boxShadow: '0 24px 64px rgba(5,14,30,0.15), 0 4px 16px rgba(5,14,30,0.08)',
                }}>
                  <Image
                    src="/images/owner.jpg"
                    alt="Owners of Mascots Sports Cards & Collectibles"
                    fill
                    sizes="(max-width: 767px) 100vw, 40vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="reveal reveal-delay-2">
                <span className="eyebrow" style={{ color: 'var(--color-star)' }}>The People Behind the Counter</span>
                <h2 className="section-headline reveal reveal-delay-1" id="owners-heading" style={{ marginTop: 'var(--space-3)' }}>
                  Meet the <em>Owners</em>
                </h2>
                <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />

                {/* Owner entry — add a second block here for a second owner if needed */}
                <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-1)',
                    }}>
                      [OWNER NAME]
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      marginBottom: 'var(--space-4)',
                    }}>
                      Owner &amp; Founder
                    </div>
                    <p className="section-body" style={{ marginTop: 0 }}>
                      [Personalized bio coming soon]
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">
                    <MapPin size={15} aria-hidden="true" />
                    Come Visit
                  </Link>
                  <a
                    href="https://www.facebook.com/Mascotsportscards/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Follow on Facebook
                    <ChevronRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================
            THE BACK ROOM
            ================================================================ */}
        <section className="section" aria-labelledby="back-room-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">The Heart of the Store</span>
              <h2 className="section-headline reveal reveal-delay-1" id="back-room-heading">
                Welcome to <em>The Back Room</em>
              </h2>
              <span className="decorative-rule reveal reveal-delay-2" style={{ margin: '1rem auto 0' }} aria-hidden="true" />
              <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
                The Back Room is Mascots&apos; dedicated community space — card tables, play areas,
                and a weekly schedule of events that keeps the hobby alive in Tell City.
              </p>
            </div>

            {/* Mural image full-width */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--color-border-card)',
              aspectRatio: '21/9',
              position: 'relative',
              marginBottom: 'var(--space-12)',
              background: 'var(--color-bg-elevated)',
            }} className="reveal">
              <Image
                src="/images/events-gameplay.jpg"
                alt="The Back Room — community play area for card gaming events"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                sizes="100vw"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)',
              }} aria-hidden="true" />
              <div style={{
                position: 'absolute', bottom: 'var(--space-6)', left: 'var(--space-8)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: '#f2f0eb',
                }}>The Back Room</span>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '0.25rem',
                }}>Tell City, Indiana</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
              {backRoomFeatures.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`category-card reveal reveal-delay-${(i % 3) + 1}`}
                  style={{ cursor: 'default' }}
                >
                  <div className="category-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="category-card-title">{title}</h3>
                  <p className="category-card-desc">{desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }} className="reveal">
              <Link href="/events" className="btn btn-primary btn-lg">
                <Calendar size={16} aria-hidden="true" />
                View Full Event Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================
            REVIEWS
            ================================================================ */}
        <section className="section section--alt" aria-label="Customer reviews">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">Community Love</span>
              <h2 className="section-headline reveal reveal-delay-1">
                What our customers say
              </h2>
            </div>

            <div className="reviews-grid">
              {[
                { text: "Best hobby shop in the area. The selection is incredible and the staff actually know their stuff. The Back Room is a great touch for the gaming community.", author: 'James M.' },
                { text: "I drive 45 minutes just to shop here. Prices are fair, inventory is fresh, and they always have what I'm looking for. Highly recommend.", author: 'Tyler R.' },
                { text: "FNM here every week. Great atmosphere, fair play, and a store that actually supports its local TCG community. 5 stars every time.", author: 'Sarah K.' },
                { text: "Found a graded card I'd been hunting for years. Great shop, great service, and a genuine passion for the hobby. Won't shop anywhere else.", author: 'Mike D.' },
                { text: "The Back Room is what makes this place special. It's not just a store — it's a community. My kids and I come every Friday for FNM.", author: 'Chris B.' },
                { text: "Super knowledgeable staff. Got a great deal on some vintage cards and they packed everything perfectly. Fast shipping too.", author: 'Amanda L.' },
              ].map(({ text, author }, i) => (
                <div key={author} className={`review-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="review-stars" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="var(--color-star)" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="review-text">{text}</p>
                  <div>
                    <div className="review-author">{author}</div>
                    <div className="review-source">Google Review</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" aria-label="Visit us">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow reveal">Come Say Hi</span>
            <h2 className="section-headline reveal reveal-delay-1" style={{ marginInline: 'auto', maxWidth: 560 }}>
              Come visit us in<br /><em>Tell City, Indiana</em>
            </h2>
            <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
              Whether you&apos;re a longtime collector or just getting into the hobby, you&apos;re welcome at Mascots.
              Stop in, browse the inventory, or join us for a game night.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }} className="reveal reveal-delay-3">
              <Link href="/find-us" className="btn btn-primary btn-lg">
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </Link>
              <Link href="/shop" className="btn btn-outline btn-lg">
                <ShoppingBag size={16} aria-hidden="true" />
                Browse the Shop
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
