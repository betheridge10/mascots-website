import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  Circle,
  Layers,
  ShoppingBag,
  Play,
  DollarSign,
  ChevronRight,
} from 'lucide-react'
import Navigation from '../_components/Navigation'
import ShopClient from './_ShopClient'
import ScrollReveal from '../_components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Browse Mascots Sports Cards & Collectibles — sports cards, Pokémon, MTG, Yu-Gi-Oh!, memorabilia, video games, and more in Tell City, Indiana.',
}

export default function ShopPage() {
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
            <span aria-current="page">Shop</span>
          </nav>
          <span className="eyebrow" style={{ marginTop: 'var(--space-3)', display: 'block' }}>The Collection</span>
          <h1 className="page-hero-headline">Browse <em>the Shop</em></h1>
          <p className="page-hero-sub">
            Find your next treasure — sports cards, Pokémon, Magic, memorabilia, video games, and more.
            Click through to shop on TCGplayer, eBay, or Whatnot.
          </p>
        </div>
      </header>

      {/* Marketplace strip */}
      <div className="marketplace-strip" role="complementary" aria-label="Online store links">
        <div className="container">
          <span className="marketplace-label">Shop Online</span>
          <div className="marketplace-divider" aria-hidden="true" />
          <div className="marketplace-links">
            <a href="https://mascotsportscards.tcgplayerpro.com/" className="marketplace-link" target="_blank" rel="noopener noreferrer">
              <Layers size={13} aria-hidden="true" /> TCGplayer Pro
            </a>
            <a href="https://www.ebay.com/str/mascotcollectibles" className="marketplace-link" target="_blank" rel="noopener noreferrer">
              <ShoppingBag size={13} aria-hidden="true" /> eBay Store
            </a>
            <a href="https://www.whatnot.com/s/bTqfi67P" className="marketplace-link" target="_blank" rel="noopener noreferrer">
              <Circle size={13} aria-hidden="true" /> Whatnot Live
            </a>
          </div>
        </div>
      </div>

      <main id="main-content">
        <section className="section">
          <div className="container">
            {/* We Buy Cards callout */}
            <div style={{
              marginBottom: 'var(--space-10)',
              background: 'linear-gradient(135deg, rgba(0,51,160,0.06), rgba(0,51,160,0.02))',
              border: '1px solid rgba(0,51,160,0.15)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-7) var(--space-8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: 'rgba(0,51,160,0.1)',
                  border: '1px solid rgba(0,51,160,0.2)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-accent)',
                }} aria-hidden="true">
                  <DollarSign size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)' }}>
                    We Buy Cards &amp; Collectibles
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
                    Fair prices, paid on the spot. Sports cards, TCG, memorabilia, video games, and full collections.
                  </div>
                </div>
              </div>
              <Link href="/sell" className="btn btn-outline" style={{ flexShrink: 0 }}>
                Learn More
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <Suspense fallback={<div style={{ padding: 'var(--space-12)', textAlign: 'center', color: 'var(--color-text-muted)' }}>Loading…</div>}>
              <ShopClient />
            </Suspense>

            {/* Whatnot CTA */}
            <div style={{
              marginTop: 'var(--space-16)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border-card)',
              padding: 'var(--space-12) var(--space-10)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, var(--color-bg-secondary), rgba(0,51,160,0.04))',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200,
                background: 'radial-gradient(circle, rgba(0,51,160,0.1), transparent 70%)',
                pointerEvents: 'none',
              }} aria-hidden="true" />
              <span className="eyebrow reveal">Live Shopping</span>
              <h2 className="section-headline reveal reveal-delay-1" style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-3)', marginInline: 'auto' }}>
                Watch Us Live on <em>Whatnot</em>
              </h2>
              <p className="section-body reveal reveal-delay-2" style={{ margin: '1rem auto 2rem', textAlign: 'center' }}>
                Join our live breaks on Whatnot — rip sealed product live, participate in group breaks,
                and snag deals in real time. Follow our channel to get notified when we go live.
              </p>
              <a
                href="https://www.whatnot.com/s/bTqfi67P"
                className="btn btn-primary btn-lg reveal reveal-delay-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={16} aria-hidden="true" />
                Follow on Whatnot
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
