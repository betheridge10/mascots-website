import { Button } from './Button'
import { Facebook, Layers, ShoppingBag, Play } from 'lucide-react'

interface SocialLink {
  label: string
  href: string
  Icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' }>
}

const links: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Mascotsportscards/',
    Icon: Facebook,
  },
  {
    label: 'TCGplayer',
    href: 'https://mascotsportscards.tcgplayerpro.com/',
    Icon: Layers,
  },
  {
    label: 'eBay Store',
    href: 'https://www.ebay.com/str/mascotcollectibles',
    Icon: ShoppingBag,
  },
  {
    label: 'Whatnot Live',
    href: 'https://www.whatnot.com/s/bTqfi67P',
    Icon: Play,
  },
]

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}
    >
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{ display: 'contents' }}
        >
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="rounded-lg transition-all duration-300 cursor-pointer hover:scale-110"
            aria-label={label}
            title={label}
            asChild={false}
          >
            <Icon size={16} aria-hidden />
          </Button>
        </a>
      ))}
    </div>
  )
}
