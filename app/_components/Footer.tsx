import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name"><span>Mascots</span> Collectibles</div>
            <p className="footer-tagline">
              Southern Indiana&apos;s Premier Hobby Shop —<br />Tell City, Indiana.
            </p>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <SocialLinks />
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="footer-col-title">Explore</div>
            <ul className="footer-links" role="list">
              <li><Link href="/shop" className="footer-link">Browse the Shop</Link></li>
              <li><Link href="/shop?cat=sports-cards" className="footer-link">Sports Cards</Link></li>
              <li><Link href="/shop?cat=pokemon" className="footer-link">Pokémon TCG</Link></li>
              <li><Link href="/shop?cat=mtg" className="footer-link">Magic: The Gathering</Link></li>
              <li><Link href="/shop?cat=lorcana" className="footer-link">Lorcana</Link></li>
              <li><Link href="/shop?cat=memorabilia" className="footer-link">Memorabilia</Link></li>
              <li><Link href="/shop?cat=video-games" className="footer-link">Video Games</Link></li>
              <li><Link href="/shop?cat=toys" className="footer-link">Toys &amp; Figures</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links" role="list">
              <li><Link href="/sell" className="footer-link">We Buy Cards</Link></li>
              <li><Link href="/events" className="footer-link">Events &amp; FNM</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/find-us" className="footer-link">Store Hours &amp; Map</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <div className="footer-col-title">Find Us</div>
            <address className="footer-address" style={{ fontStyle: 'normal' }}>
              <strong>Mascots Sports Cards &amp; Collectibles</strong><br />
              Tell City, Indiana<br />
              Perry County
            </address>
            <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a
                href="https://www.google.com/maps/search/Mascots+Sports+Cards+Tell+City+Indiana"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                Get Directions →
              </a>
              <Link
                href="/find-us"
                className="footer-link"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                Store Hours &amp; Directions →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Mascots Sports Cards &amp; Collectibles. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="https://www.facebook.com/Mascotsportscards/" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://mascotsportscards.tcgplayerpro.com/" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">TCGplayer</a>
            <a href="https://www.ebay.com/str/mascotcollectibles" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">eBay</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
