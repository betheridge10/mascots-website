import Link from 'next/link'
import Navigation from './_components/Navigation'
import { ShoppingBag, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-16) var(--space-6)',
          textAlign: 'center',
          background: 'var(--color-bg-primary)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-5)',
          }}
        >
          404 — Page Not Found
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--color-text-primary)',
            maxWidth: 600,
            marginBottom: 'var(--space-6)',
          }}
        >
          This card&apos;s not<br /><em>in our binder</em>
        </h1>

        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-lg)',
            maxWidth: 420,
            lineHeight: 1.6,
            marginBottom: 'var(--space-10)',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Head back and keep digging.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/shop" className="btn btn-primary btn-lg">
            <ShoppingBag size={16} aria-hidden="true" />
            Browse the Shop
          </Link>
          <Link href="/" className="btn btn-outline btn-lg">
            Back to Home
          </Link>
          <Link href="/find-us" className="btn btn-ghost btn-lg">
            <MapPin size={16} aria-hidden="true" />
            Find the Store
          </Link>
        </div>
      </main>
    </>
  )
}
