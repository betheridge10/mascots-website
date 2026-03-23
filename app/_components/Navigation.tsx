'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { X, Menu } from 'lucide-react'

const links = [
  { href: '/',         anchor: null,               label: 'Home' },
  { href: '/shop',     anchor: '#categories',      label: 'Shop' },
  { href: '/sell',     anchor: null,               label: 'We Buy' },
  { href: '/events',   anchor: '#events-preview',  label: 'Events' },
  { href: '/find-us',  anchor: null,               label: 'Find Us' },
  { href: '/contact',  anchor: null,               label: 'Contact' },
]

export default function Navigation({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isSolid = !transparent || scrolled
  const isHome = pathname === '/'

  // On the home page use anchor links for in-page smooth scrolling.
  // On other pages, navigate to the home page with the anchor so the
  // user lands at the right section instead of a separate sub-page.
  const resolveHref = (link: typeof links[0]) => {
    if (link.anchor) return isHome ? link.anchor : `/${link.anchor}`
    return link.href
  }

  const isActive = (link: typeof links[0]) => {
    if (link.href === '/') return isHome
    return pathname.startsWith(link.href)
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav
        className={`site-nav ${isSolid ? 'site-nav--solid' : 'site-nav--transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Mascots Sports Cards & Collectibles — Home">
            <span className="nav-logo-name"><span>Mascots</span> Collectibles</span>
          </Link>

          <ul className="nav-links" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={resolveHref(link)}
                  className={`nav-link${isActive(link) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link href="/shop" className="btn btn-primary">Browse the Shop</Link>
          </div>

          <button
            className="nav-hamburger"
            aria-label="Open mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} color="var(--color-text-primary)" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        id="mobileMenu"
        className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <button
          className="nav-mobile-close"
          aria-label="Close mobile menu"
          onClick={() => setMenuOpen(false)}
        >
          <X size={20} />
        </button>

        <nav>
          <ul className="nav-mobile-links" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={resolveHref(link)}
                  className={`nav-mobile-link${isActive(link) ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <Link href="/shop" className="btn btn-primary btn-lg" onClick={() => setMenuOpen(false)}>
              Browse the Shop
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
