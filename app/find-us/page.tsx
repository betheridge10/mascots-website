import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ExternalLink, ChevronRight } from 'lucide-react'
import Navigation from '../_components/Navigation'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Find Us',
  description:
    'Find Mascots Sports Cards & Collectibles at 705 Main Street, Tell City, IN 47586. Store hours, directions, phone, and Google Maps embed.',
}

const hours = [
  { day: 'Monday',    time: 'Closed',           closed: true },
  { day: 'Tuesday',   time: '11:00 AM – 9:00 PM' },
  { day: 'Wednesday', time: '11:00 AM – 9:00 PM' },
  { day: 'Thursday',  time: '11:00 AM – 9:00 PM' },
  { day: 'Friday',    time: '11:00 AM – 9:00 PM' },
  { day: 'Saturday',  time: '11:00 AM – 9:00 PM' },
  { day: 'Sunday',    time: '11:00 AM – 3:00 PM' },
]

export default function FindUsPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

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
            <span aria-current="page">Find Us</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>705 Main Street · Tell City, IN</span>
          <h1 className="page-hero-headline">Come Find Us in<br /><em>Tell City</em></h1>
          <p className="page-hero-sub">
            Located on Main Street in Tell City, Indiana — open Tuesday through Sunday.
            Stop in, browse, and stay a while.
          </p>
        </div>
      </header>

      <main id="main-content">

        {/* ================================================================
            MAP + INFO GRID
            ================================================================ */}
        <section className="section" aria-label="Map and store information">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-12)', alignItems: 'start' }}>

              {/* Left: Info panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }} className="reveal">

                {/* Address & contact */}
                <div className="info-card">
                  <h2 className="info-card-title">Store Info</h2>

                  {/* Address */}
                  <div className="info-row">
                    <div className="info-row-icon" aria-hidden="true"><MapPin size={16} /></div>
                    <div>
                      <div className="info-row-label">Address</div>
                      <address className="info-row-value" style={{ fontStyle: 'normal' }}>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=705+Main+Street+Tell+City+IN+47586"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          705 Main Street<br />
                          Tell City, IN 47586<br />
                          Perry County
                        </a>
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="info-row">
                    <div className="info-row-icon" aria-hidden="true"><Phone size={16} /></div>
                    <div>
                      <div className="info-row-label">Phone</div>
                      <div className="info-row-value">
                        <a href="tel:+18127722873" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                          (812) 772-2873
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-row">
                    <div className="info-row-icon" aria-hidden="true"><Mail size={16} /></div>
                    <div>
                      <div className="info-row-label">Email</div>
                      <div className="info-row-value">
                        <a href="mailto:mascotsportscards@gmail.com" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                          mascotsportscards@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="info-card" id="hours">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                    <Clock size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Store Hours
                    </h2>
                  </div>
                  <div className="hours-table">
                    {hours.map(({ day, time, closed }) => (
                      <div key={day} className="hours-row">
                        <span
                          className="hours-day"
                          style={day === today ? { color: 'var(--color-accent)', fontWeight: 700 } : undefined}
                        >
                          {day}
                          {day === today && (
                            <span style={{ marginLeft: 'var(--space-2)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>
                              · Today
                            </span>
                          )}
                        </span>
                        <span className={`hours-time${closed ? ' closed' : ''}`}>{time}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-4)', lineHeight: 1.6 }}>
                    Hours may vary on holidays. Check our Facebook page for updates.
                  </p>
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=705+Main+Street+Tell+City+IN+47586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <MapPin size={15} aria-hidden="true" />
                    Get Directions
                  </a>
                  <a href="tel:+18127722873" className="btn btn-ghost">
                    <Phone size={15} aria-hidden="true" />
                    (812) 772-2873
                  </a>
                  <Link href="/contact" className="btn btn-ghost">
                    Send Us a Message
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Right: Map embed */}
              <div className="map-embed reveal reveal-delay-2">
                <iframe
                  title="Mascots Sports Cards — 705 Main Street, Tell City, Indiana"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1!2d-86.7701!3d37.9510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c1ab5f6a5b455%3A0x5fd13d78e18c31b3!2s705%20Main%20St%2C%20Tell%20City%2C%20IN%2047586!5e0!3m2!1sen!2sus!4v1700000000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing 705 Main Street, Tell City, Indiana"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            STOREFRONT PHOTO
            ================================================================ */}
        <section className="section section--alt" aria-label="Store exterior">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'center' }}>
              <div className="reveal">
                <span className="eyebrow">You&apos;ll Recognize Us</span>
                <h2 className="section-headline" style={{ marginTop: 'var(--space-3)' }}>
                  Right on<br /><em>Main Street</em>
                </h2>
                <span className="decorative-rule" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
                <p className="section-body" style={{ marginTop: '1.5rem' }}>
                  We&apos;re easy to find — located at 705 Main Street in downtown Tell City.
                  Plenty of street parking out front. Look for the Mascots sign.
                </p>
                <div style={{ marginTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=705+Main+Street+Tell+City+IN+47586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <MapPin size={15} aria-hidden="true" />
                    Open in Google Maps
                  </a>
                  <a href="tel:+18127722873" className="btn btn-ghost">
                    <Phone size={15} aria-hidden="true" />
                    Call Ahead — (812) 772-2873
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
                    alt="Mascots Sports Cards & Collectibles storefront on Main Street, Tell City, Indiana"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FIND US CTA
            ================================================================ */}
        <section className="section" aria-label="More ways to connect">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow reveal">While You&apos;re Here</span>
            <h2 className="section-headline reveal reveal-delay-1" style={{ marginInline: 'auto', maxWidth: 560 }}>
              More than a store —<br /><em>a community</em>
            </h2>
            <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
              The Back Room hosts weekly FNM, Pokémon League Challenges, Yu-Gi-Oh! nights, and
              open play. Collectors of all levels are welcome.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }} className="reveal reveal-delay-3">
              <Link href="/events" className="btn btn-primary btn-lg">
                View Events Schedule
              </Link>
              <Link href="/shop" className="btn btn-outline btn-lg">
                Browse the Shop
                <ExternalLink size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
