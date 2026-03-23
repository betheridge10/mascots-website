import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Star,
  Layers,
  Diamond,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Users,
  ChevronRight,
  Zap,
  Package,
  Trophy,
} from 'lucide-react'
import Navigation from '../_components/Navigation'
import Breadcrumbs from '../_components/Breadcrumbs'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Events at Mascots Sports Cards & Collectibles — Friday Night Magic, Pokémon League Challenges, Yu-Gi-Oh! tournaments, and open play nights in Tell City, Indiana.',
}

const weeklySchedule = [
  {
    day: 'Monday',
    event: 'Open Play Night',
    time: '5:00 PM – Close',
    gameType: 'All Games',
    free: true,
  },
  {
    day: 'Wednesday',
    event: 'Yu-Gi-Oh! Play Night',
    time: '5:00 PM – Close',
    gameType: 'Yu-Gi-Oh!',
    free: true,
  },
  {
    day: 'Friday',
    event: 'Friday Night Magic',
    time: '6:00 PM – Close',
    gameType: 'Magic: The Gathering',
    free: false,
    entryFee: 'Entry varies',
  },
  {
    day: 'Saturday',
    event: 'Pokémon League Challenge',
    time: '1:00 PM – 5:00 PM',
    gameType: 'Pokémon TCG',
    free: false,
    entryFee: '$5 entry',
  },
]


const gameTypeIcon: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: boolean | 'true' | 'false'; style?: React.CSSProperties }>> = {
  'Magic: The Gathering': Star,
  'Pokémon TCG': Layers,
  'Yu-Gi-Oh!': Diamond,
  'All Games': Sparkles,
  'All Collections': Users,
}

export default function EventsPage() {
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
            <span aria-current="page">Events</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>The Back Room</span>
          <h1 className="page-hero-headline">Events &amp; <em>Game Nights</em></h1>
          <p className="page-hero-sub">
            FNM, Pokémon Leagues, Yu-Gi-Oh! tournaments, and open play —
            all happening right here in The Back Room in Tell City.
          </p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Events' }]} />
      <main id="main-content">

        {/* ================================================================
            WEEKLY SCHEDULE
            ================================================================ */}
        <section className="section" aria-labelledby="schedule-heading">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow reveal">Every Week</span>
              <h2 className="section-headline reveal reveal-delay-1" id="schedule-heading">
                Weekly <em>Schedule</em>
              </h2>
              <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
              <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.25rem' }}>
                These events run every week. No sign-up needed for open play — just show up.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}
              className="reveal reveal-delay-2"
            >
              {weeklySchedule.map(({ day, event, time, gameType, free, entryFee }, i) => {
                const Icon = gameTypeIcon[gameType] ?? Sparkles
                return (
                  <div
                    key={day}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '130px 1fr 1fr auto',
                      alignItems: 'center',
                      gap: 'var(--space-6)',
                      padding: 'var(--space-5) var(--space-8)',
                      borderBottom: i < weeklySchedule.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      {day}
                    </span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)' }}>
                        {event}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
                        <Icon size={12} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: '0.04em' }}>
                          {gameType}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                      <Clock size={14} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />
                      {time}
                    </div>
                    {free ? (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                        background: 'rgba(76,175,125,0.1)',
                        border: '1px solid rgba(76,175,125,0.2)',
                        borderRadius: 'var(--radius-full)',
                        padding: '0.3em 0.8em',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        color: 'var(--color-success)',
                      }}>
                        Free
                      </span>
                    ) : (
                      <span style={{
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-text-muted)',
                      }}>
                        {entryFee}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================================================================
            SPECIAL EVENTS
            ================================================================ */}
        <section className="section section--alt" aria-labelledby="upcoming-heading">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow reveal">Beyond the Weekly Schedule</span>
              <h2 className="section-headline reveal reveal-delay-1" id="upcoming-heading">
                Special <em>Events</em>
              </h2>
              <span className="decorative-rule reveal reveal-delay-2" style={{ display: 'block', marginTop: '1rem' }} aria-hidden="true" />
              <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.25rem' }}>
                We regularly run special events throughout the year. Follow us on Facebook to get
                notified when new events are posted.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', marginTop: 'var(--space-8)' }}>
              {[
                {
                  icon: Zap,
                  title: 'Pre-Release Tournaments',
                  desc: "Play new MTG and Pokémon sets before they officially release. We run pre-release events for every major set drop. Entry includes product — details posted on Facebook.",
                  color: 'rgba(0,51,160,0.08)',
                  borderColor: 'rgba(0,51,160,0.15)',
                },
                {
                  icon: Package,
                  title: 'Box Break Saturdays',
                  desc: "Watch sealed product get ripped live in the store. Hobby boxes, mega boxes, and special collections broken down and sorted right in front of you. No purchase required to watch.",
                  color: 'rgba(91,155,240,0.08)',
                  borderColor: 'rgba(91,155,240,0.2)',
                },
                {
                  icon: Trophy,
                  title: 'Store Championships',
                  desc: "Bigger prize pools, competitive formats, and regional qualifiers for MTG, Pokémon, and Yu-Gi-Oh!. Trophies, store credit, and promo cards for top finishers.",
                  color: 'rgba(255,184,28,0.08)',
                  borderColor: 'rgba(255,184,28,0.2)',
                },
                {
                  icon: Users,
                  title: 'Buy / Sell / Trade Days',
                  desc: "Community trade meetups where collectors bring their extras and make deals. Great for moving duplicate cards and finding the pieces you've been hunting.",
                  color: 'rgba(45,122,79,0.08)',
                  borderColor: 'rgba(45,122,79,0.2)',
                },
                {
                  icon: Star,
                  title: 'Set Release Events',
                  desc: "We stock new MTG, Pokémon, and Lorcana sets on release day and celebrate with in-store events. Come crack packs, compare pulls, and be the first to play the new cards.",
                  color: 'rgba(0,51,160,0.08)',
                  borderColor: 'rgba(0,51,160,0.15)',
                },
                {
                  icon: Sparkles,
                  title: 'Special Guests & More',
                  desc: "Autograph signings, guest appearances, and one-off collector events. These get announced on Facebook first — follow us so you don't miss out.",
                  color: 'rgba(91,155,240,0.08)',
                  borderColor: 'rgba(91,155,240,0.2)',
                },
              ].map(({ icon: Icon, title, desc, color, borderColor }, i) => (
                <div
                  key={title}
                  className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border-card)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-7)',
                  }}
                >
                  <div style={{
                    width: 44, height: 44,
                    background: color,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                  }} aria-hidden="true">
                    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
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

            <div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }} className="reveal">
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
                Event dates and details are announced on our Facebook page.
              </p>
              <a
                href="https://www.facebook.com/Mascotsportscards/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Calendar size={16} aria-hidden="true" />
                Follow Us on Facebook
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================
            BACK ROOM CTA
            ================================================================ */}
        <section className="section" aria-label="About The Back Room">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-12)',
              alignItems: 'center',
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border-card)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-12)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 240, height: 240,
                background: 'radial-gradient(circle, rgba(0,51,160,0.06), transparent 70%)',
                pointerEvents: 'none',
              }} aria-hidden="true" />
              <div className="reveal">
                <span className="eyebrow">Community Space</span>
                <h2 className="section-headline" style={{ marginTop: 'var(--space-3)' }}>
                  The Back Room<br />is <em>your room</em>
                </h2>
                <p className="section-body" style={{ marginTop: '1.25rem' }}>
                  A dedicated space where collectors and players come together. Card tables,
                  play areas, a welcoming vibe, and a community that shows up every week.
                  The Back Room is free to use during store hours for casual play.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    <MapPin size={16} aria-hidden="true" />
                    Get Directions
                  </Link>
                  <Link href="/about" className="btn btn-ghost btn-lg">
                    Learn More
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {[
                    { icon: Calendar, label: 'Weekly Events', value: 'Every Monday, Wednesday, Friday & Saturday' },
                    { icon: Users, label: 'All Skill Levels', value: 'Beginner-friendly. Competitive players welcome.' },
                    { icon: MapPin, label: 'Location', value: 'Tell City, Indiana — The Back Room' },
                    { icon: Sparkles, label: 'Games Supported', value: 'MTG · Pokémon · Yu-Gi-Oh! · Open Play' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
                      padding: 'var(--space-4)',
                      background: 'rgba(5,14,30,0.03)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}>
                      <div style={{
                        width: 36, height: 36,
                        background: 'rgba(0,51,160,0.08)',
                        border: '1px solid rgba(0,51,160,0.12)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                      }} aria-hidden="true">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>
                          {label}
                        </div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
