import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Mail, ExternalLink, Facebook } from 'lucide-react'
import Navigation from '../_components/Navigation'
import Breadcrumbs from '../_components/Breadcrumbs'
import ContactForm from './_ContactForm'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Mascots Sports Cards & Collectibles in Tell City, Indiana. Get directions, store hours, and reach out with questions.',
}

const hours = [
  { day: 'Monday',    time: 'Closed',            closed: true },
  { day: 'Tuesday',   time: '11:00 AM – 9:00 PM' },
  { day: 'Wednesday', time: '11:00 AM – 9:00 PM' },
  { day: 'Thursday',  time: '11:00 AM – 9:00 PM' },
  { day: 'Friday',    time: '11:00 AM – 9:00 PM' },
  { day: 'Saturday',  time: '11:00 AM – 9:00 PM' },
  { day: 'Sunday',    time: '11:00 AM – 3:00 PM' },
]

export default function ContactPage() {
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
            <span aria-current="page">Contact</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>Get In Touch</span>
          <h1 className="page-hero-headline">Visit Us or <em>Say Hello</em></h1>
          <p className="page-hero-sub">
            We&apos;re in Tell City, Indiana. Stop in during store hours,
            give us a call, or send a message below.
          </p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <main id="main-content">

        <section className="section" id="contact-form">
          <div className="container">
            <div className="contact-grid">

              {/* Contact Form */}
              <div className="reveal">
                <span className="eyebrow" style={{ marginBottom: 'var(--space-4)', display: 'block' }}>Send a Message</span>
                <h2 className="section-headline" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
                  How can we <em>help?</em>
                </h2>
                <ContactForm />
              </div>

              {/* Store Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }} className="reveal reveal-delay-2">

                {/* Location + Contact */}
                <div className="info-card">
                  <h3 className="info-card-title">Store Info</h3>

                  {/* Address */}
                  <div className="info-row">
                    <div className="info-row-icon" aria-hidden="true"><MapPin size={16} /></div>
                    <div>
                      <div className="info-row-label">Address</div>
                      <address className="info-row-value" style={{ fontStyle: 'normal' }}>
                        <a
                          href="https://www.google.com/maps/search/Mascots+Sports+Cards+Tell+City+Indiana"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          Mascots Sports Cards &amp; Collectibles<br />
                          Tell City, Indiana<br />
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

                  {/* Social + Online */}
                  <div className="info-row">
                    <div className="info-row-icon" aria-hidden="true"><ExternalLink size={16} /></div>
                    <div>
                      <div className="info-row-label">Online &amp; Social</div>
                      <div className="info-row-value">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
                          <a href="https://www.facebook.com/Mascotsportscards/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                            <Facebook size={12} aria-hidden="true" /> Facebook
                          </a>
                          <a href="https://mascotsportscards.tcgplayerpro.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                            <ExternalLink size={12} aria-hidden="true" /> TCGplayer Pro
                          </a>
                          <a href="https://www.ebay.com/str/mascotcollectibles" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                            <ExternalLink size={12} aria-hidden="true" /> eBay Store
                          </a>
                          <a href="https://www.whatnot.com/s/bTqfi67P" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                            <ExternalLink size={12} aria-hidden="true" /> Whatnot Live
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="info-card" id="hours">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                    <Clock size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Store Hours
                    </h3>
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
                    Hours may vary on holidays. Friday hours extend for FNM events.
                    Check our social media for updates.
                  </p>
                </div>

                {/* Trust block */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-bg-elevated), rgba(0,51,160,0.03))',
                  border: '1px solid var(--color-border-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
                    Why Shop With Us
                  </div>
                  {[
                    '64+ five-star Google reviews',
                    '100% recommend rate',
                    'Top-rated eBay seller',
                    'Est. 2018 — Tell City, Indiana',
                    'Knowledgeable, collector-owned staff',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) 0', borderBottom: '1px solid rgba(5,14,30,0.07)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, display: 'inline-block' }} aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Find Us link strip */}
        <section className="section section--alt" aria-label="Find the store">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="section-body" style={{ marginInline: 'auto' }}>
              Looking for directions or store hours?
            </p>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Link href="/find-us" className="btn btn-primary btn-lg">
                <MapPin size={15} aria-hidden="true" />
                Find Us — 705 Main St, Tell City
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
