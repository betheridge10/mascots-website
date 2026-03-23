import { Phone, MapPin } from 'lucide-react'

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Quick contact">
      <a
        href="tel:+18127722873"
        className="mobile-cta-btn mobile-cta-btn--primary"
        aria-label="Call Mascots Sports Cards at (812) 772-2873"
      >
        <Phone size={17} aria-hidden="true" />
        <span>Call Us</span>
      </a>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=705+Main+Street+Tell+City+IN+47586"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-btn mobile-cta-btn--secondary"
        aria-label="Get directions to Mascots Sports Cards"
      >
        <MapPin size={17} aria-hidden="true" />
        <span>Directions</span>
      </a>
    </div>
  )
}
