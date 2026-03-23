'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import {
  Circle,
  Layers,
  Star,
  Diamond,
  Trophy,
  Gamepad2,
  Package,
  ExternalLink,
  MessageCircle,
  ShoppingBag,
  Play,
  Store,
  Globe,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

type Availability = 'in-store' | 'in-store-online'

interface OnlineLink {
  label: string
  href: string
  Icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>
}

interface Product {
  category: string
  categoryLabel: string
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>
  image?: string
  imageAlt?: string
  title: string
  desc: string
  price: string
  availability: Availability
  onlineLinks?: OnlineLink[]
  cta?: string
  href?: string
}

const products: Product[] = [
  // ── Sports Cards ────────────────────────────────────────────────────────────
  {
    category: 'sports-cards',
    categoryLabel: 'Sports Cards',
    Icon: Circle,
    image: '/images/sportscard2.jpg',
    imageAlt: 'Glass display case with premium baseball cards, autographs, and rip cards',
    title: 'Sports Cards Singles',
    desc: 'NFL, NBA, MLB, NHL singles — rookies, autographs, short prints, and vintage classics. Panini, Topps, Bowman, Upper Deck — all sports covered.',
    price: '$1–$500+',
    availability: 'in-store-online',
    onlineLinks: [
      { label: 'eBay Store', href: 'https://www.ebay.com/str/mascotcollectibles', Icon: ShoppingBag },
      { label: 'Whatnot Live', href: 'https://www.whatnot.com/s/bTqfi67P', Icon: Play },
    ],
  },
  {
    category: 'sports-cards',
    categoryLabel: 'Sports Cards',
    Icon: Circle,
    image: '/images/sportscard3.jpg',
    imageAlt: 'Glass case with graded cards and high-end sports card singles',
    title: 'Graded Cards & High-End Singles',
    desc: 'PSA, BGS, and SGC slabs across all sports. Premium rookies, vintage stars, and investment-grade cards ready to display or send to auction.',
    price: '$25–$1,000+',
    availability: 'in-store-online',
    onlineLinks: [
      { label: 'eBay Store', href: 'https://www.ebay.com/str/mascotcollectibles', Icon: ShoppingBag },
    ],
  },
  {
    category: 'sports-cards',
    categoryLabel: 'Sports Cards',
    Icon: Circle,
    image: '/images/sportsboxes.jpg',
    imageAlt: 'Shelves with Donruss, Phoenix Mega, and autographed jersey box products with price tags',
    title: 'Sports Boxes & Sealed Product',
    desc: 'Hobby boxes, mega boxes, blaster boxes, and jumbo packs. Donruss, Phoenix, Hidden Treasures, and more. New inventory every week.',
    price: '$20–$300+',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Pokémon TCG ──────────────────────────────────────────────────────────────
  {
    category: 'pokemon',
    categoryLabel: 'Pokémon TCG',
    Icon: Layers,
    image: '/images/pokemonboxes.jpg',
    imageAlt: 'Pokémon Mega Evolution Ascended Heroes ETBs and tins on the counter',
    title: 'Pokémon Booster Boxes & ETBs',
    desc: 'Latest set booster boxes, Elite Trainer Boxes, special collections, and tins. New releases arrive regularly — in stock on release day.',
    price: '$45–$180',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'pokemon',
    categoryLabel: 'Pokémon TCG',
    Icon: Layers,
    image: '/images/pokemoncards.jpg',
    imageAlt: 'Glass case full of Pokémon singles, PSA graded cards, and holographic cards',
    title: 'Pokémon Singles',
    desc: 'Individual cards from standard, expanded, and vintage sets. Charizards, ex cards, full arts, PSA graded slabs, and competitive staples.',
    price: '$0.50–$200+',
    availability: 'in-store-online',
    onlineLinks: [
      { label: 'TCGplayer Pro', href: 'https://mascotsportscards.tcgplayerpro.com/', Icon: Layers },
    ],
  },
  // ── Magic: The Gathering ─────────────────────────────────────────────────────
  {
    category: 'mtg',
    categoryLabel: 'Magic: The Gathering',
    Icon: Star,
    image: '/images/magicboxes.jpg',
    imageAlt: 'MTG Return to Thandor boxes and Secret Lair x God of War and Last of Us products',
    title: 'MTG Draft & Set Boosters',
    desc: "New set releases, Commander precons, Draft Boosters, and Secret Lair drops. We stock on release day.",
    price: '$5–$160',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'mtg',
    categoryLabel: 'Magic: The Gathering',
    Icon: Star,
    image: '/images/magic-singles.jpg',
    imageAlt: 'Magic: The Gathering singles and rare cards on display',
    title: 'MTG Singles',
    desc: 'Commander staples, Legacy and Vintage pieces, and competitive Standard singles. Updated regularly.',
    price: '$0.25–$500+',
    availability: 'in-store-online',
    onlineLinks: [
      { label: 'TCGplayer Pro', href: 'https://mascotsportscards.tcgplayerpro.com/', Icon: Layers },
    ],
  },
  // ── Yu-Gi-Oh! ────────────────────────────────────────────────────────────────
  {
    category: 'yugioh',
    categoryLabel: 'Yu-Gi-Oh!',
    Icon: Diamond,
    image: '/images/yugioh.jpg',
    imageAlt: 'Yu-Gi-Oh trading cards held in hands at a game table',
    title: 'Yu-Gi-Oh! Booster Sets',
    desc: 'Latest booster sets, structure decks, and collector packs. Classic Blue-Eyes to modern meta cards.',
    price: '$4–$80',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Lorcana ──────────────────────────────────────────────────────────────────
  {
    category: 'lorcana',
    categoryLabel: 'Disney Lorcana',
    Icon: Sparkles,
    image: '/images/lorcanaboxes2.jpg',
    imageAlt: 'Disney Lorcana Winterspell booster boxes stacked in a pyramid on the counter',
    title: 'Disney Lorcana',
    desc: 'Booster boxes, singles, starter decks, and sealed product from all Lorcana sets including Winterspell. New releases in stock on launch day.',
    price: '$4–$150',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Memorabilia ──────────────────────────────────────────────────────────────
  {
    category: 'memorabilia',
    categoryLabel: 'Memorabilia',
    Icon: Trophy,
    image: '/images/signed.jpg',
    imageAlt: 'Signed athlete photos, framed memorabilia, and collectible figures on display',
    title: 'Autographed Jerseys & Photos',
    desc: 'Authenticated signed jerseys, framed photos, mini and full-size helmets from NFL, NBA, MLB, and NHL athletes. COA included with every piece.',
    price: '$50–$1,200+',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'memorabilia',
    categoryLabel: 'Memorabilia',
    Icon: Trophy,
    image: '/images/signed-balls.jpg',
    imageAlt: 'Autographed basketballs, boxing glove, and football in display cases',
    title: 'Signed Balls & Collectibles',
    desc: 'Autographed basketballs, baseballs, and specialty collectibles. Funko Pops, display cases, and authenticated one-of-a-kind pieces.',
    price: '$30–$600+',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Video Games ──────────────────────────────────────────────────────────────
  {
    category: 'video-games',
    categoryLabel: 'Video Games & Consoles',
    Icon: Gamepad2,
    image: '/images/videogames.jpg',
    imageAlt: 'Nintendo Switch games on display including GTA Trilogy and Luigi\'s Mansion 3',
    title: 'Video Games',
    desc: 'Buy, sell, and trade. NES to PlayStation 5 — retro classics, modern releases, and current-gen titles. Switch, PS5, Xbox, and more.',
    price: 'Varies',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'video-games',
    categoryLabel: 'Video Games & Consoles',
    Icon: Gamepad2,
    image: '/images/consoles.jpg',
    imageAlt: 'Retro and modern gaming consoles available for purchase',
    title: 'Gaming Consoles',
    desc: 'Retro and modern consoles — NES, SNES, N64, Game Boy, PS1–PS5, Xbox, and more. All tested. Buy, sell, or trade.',
    price: 'Varies',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Toys & Figures ────────────────────────────────────────────────────────────
  {
    category: 'toys',
    categoryLabel: 'Toys & Figures',
    Icon: Package,
    image: '/images/toys3.jpg',
    imageAlt: 'Power Rangers Lightning Collection, Star Wars, TMNT Last Ronin, and X-Men figures on the wall',
    title: 'Action Figures',
    desc: 'Power Rangers Lightning Collection, Star Wars Black Series, TMNT Last Ronin, X-Men, Marvel Legends, and more. Loose and boxed.',
    price: '$10–$80',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'toys',
    categoryLabel: 'Toys & Figures',
    Icon: Package,
    image: '/images/toys.jpg',
    imageAlt: 'Shelves with vintage loose figures, Batman boxes, Mascots sign, and board games',
    title: 'Vintage & Loose Figures',
    desc: 'Vintage loose figures, classic toy lines, Batman, board games, and retro collectibles. Something for every era of collector.',
    price: '$5–$200+',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    category: 'toys',
    categoryLabel: 'Toys & Figures',
    Icon: Package,
    image: '/images/toys2.jpg',
    imageAlt: 'WWE wrestling figures wall with championship belts on display',
    title: 'WWE Wrestling Figures',
    desc: 'WWE Mattel Elite, Basic, and Retro figures. Championship belts, ring sets, and wrestling collectibles for every fan.',
    price: '$10–$60',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Supplies ─────────────────────────────────────────────────────────────────
  {
    category: 'supplies',
    categoryLabel: 'Supplies & Accessories',
    Icon: ShoppingBag,
    image: '/images/cardprotection.jpg',
    imageAlt: 'BCW Topload Card Holders — card protection supplies',
    title: 'Card Protection Supplies',
    desc: 'Ultra Pro, Dragon Shield, KMC sleeves. Top loaders, one-touches, binders, deck boxes, and display cases.',
    price: '$2–$80',
    availability: 'in-store',
    cta: 'Contact Us',
    href: '/contact',
  },
  // ── Bulk / Dollar Bins ───────────────────────────────────────────────────────
  {
    category: 'bulk',
    categoryLabel: 'Bulk & Dollar Bins',
    Icon: Circle,
    image: '/images/bulk2.jpg',
    imageAlt: 'Bulk card boxes and dollar bins filled with sports cards and trading cards',
    title: 'Dollar Bins & Bulk Singles',
    desc: 'Rows of budget singles across all sports and TCGs — perfect for set builders, kids, and bulk buyers. Cards sorted by sport and game. Come dig.',
    price: '$0.25–$2',
    availability: 'in-store',
    cta: 'Come Visit',
    href: '/find-us',
  },
]

const filterTabs = [
  { id: 'all', label: 'All Items' },
  { id: 'sports-cards', label: 'Sports Cards' },
  { id: 'pokemon', label: 'Pokémon TCG' },
  { id: 'mtg', label: 'Magic: The Gathering' },
  { id: 'yugioh', label: 'Yu-Gi-Oh!' },
  { id: 'lorcana', label: 'Lorcana' },
  { id: 'memorabilia', label: 'Memorabilia' },
  { id: 'video-games', label: 'Video Games' },
  { id: 'toys', label: 'Toys & Figures' },
  { id: 'supplies', label: 'Supplies' },
  { id: 'bulk', label: 'Dollar Bins' },
]

function AvailabilityBadge({ availability }: { availability: Availability }) {
  if (availability === 'in-store-online') {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3em',
        background: 'rgba(0,51,160,0.12)',
        border: '1px solid rgba(0,51,160,0.25)',
        borderRadius: 'var(--radius-full)',
        padding: '0.25em 0.65em',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        color: 'var(--color-accent)',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}>
        <Globe size={10} aria-hidden="true" />
        In-Store &amp; Online
      </span>
    )
  }
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3em',
      background: 'rgba(5,14,30,0.05)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-full)',
      padding: '0.25em 0.65em',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--color-text-muted)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
    }}>
      <Store size={10} aria-hidden="true" />
      In-Store Only
    </span>
  )
}

export default function ShopClient() {
  const searchParams = useSearchParams()
  const initialCat = searchParams.get('cat') ?? 'all'
  const validCats = filterTabs.map((t) => t.id)
  const [activeFilter, setActiveFilter] = useState(
    validCats.includes(initialCat) ? initialCat : 'all'
  )

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Filter Tabs */}
      <div className="filter-tabs" role="tablist" aria-label="Filter products by category">
        {filterTabs.map(({ id, label }) => (
          <button
            key={id}
            className={`filter-tab${activeFilter === id ? ' active' : ''}`}
            role="tab"
            aria-selected={activeFilter === id}
            onClick={() => setActiveFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div key={activeFilter} className="product-grid" role="list" aria-label="Products">
        {filtered.map(({ Icon, categoryLabel, title, desc, price, availability, onlineLinks, cta, href, image, imageAlt }) => (
          <article key={title} className="product-card" role="listitem">
            <div className="product-card-image" style={{ position: 'relative' }}>
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt ?? title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              ) : (
                <div className="product-card-image-placeholder" aria-hidden="true">
                  <Icon size={48} strokeWidth={1.25} />
                </div>
              )}
            </div>

            <div className="product-card-body">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}>
                <div className="product-card-category">{categoryLabel}</div>
                <AvailabilityBadge availability={availability} />
              </div>
              <h2 className="product-card-title">{title}</h2>
              <p className="product-card-desc">{desc}</p>
              <div className="product-card-footer">
                <span className="product-card-price">{price}</span>

                {availability === 'in-store-online' && onlineLinks ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-end' }}>
                    {onlineLinks.map(({ label, href: linkHref, Icon: LinkIcon }) => (
                      <a
                        key={label}
                        href={linkHref}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Shop ${title} on ${label}`}
                        style={{ fontSize: 'var(--text-xs)', padding: '0.4em 0.8em' }}
                      >
                        <LinkIcon size={12} aria-hidden="true" />
                        {label}
                      </a>
                    ))}
                  </div>
                ) : href ? (
                  href.startsWith('http') ? (
                    <a
                      href={href}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={13} aria-hidden="true" />
                      {cta}
                    </a>
                  ) : (
                    <Link href={href} className="btn btn-outline">
                      <MessageCircle size={13} aria-hidden="true" />
                      {cta}
                    </Link>
                  )
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
