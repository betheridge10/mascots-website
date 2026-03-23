import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Circle,
  Layers,
  Star,
  Diamond,
  Trophy,
  Gamepad2,
  Package,
  ShoppingBag,
  ArrowUpRight,
  Calendar,
  Clock,
  ChevronRight,
  MapPin,
  Users,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import Navigation from './_components/Navigation'
import ScrollReveal from './_components/ScrollReveal'
import { TestimonialsColumn } from './_components/TestimonialsColumn'
import { Marquee } from './_components/Marquee'
import { HeroParallax } from './_components/HeroParallax'
import NewsletterSignup from './_components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Mascots Sports Cards & Collectibles | Tell City, Indiana',
  description:
    "Southern Indiana's premier hobby shop. Sports cards, Pokémon TCG, Magic: The Gathering, memorabilia, video games, and more in Tell City, IN.",
}

const categories = [
  {
    icon: Circle,
    title: 'Sports Cards',
    desc: 'NFL, NBA, MLB, NHL — singles, hobby boxes, rookies, autographs, graded slabs, and vintage.',
    href: '/shop?cat=sports-cards',
    image: '/images/sportscard2.jpg',
    imageAlt: 'Glass display case with premium baseball cards, autographs, and rip cards',
  },
  {
    icon: Layers,
    title: 'Pokémon TCG',
    desc: 'Booster packs, Elite Trainer Boxes, singles, and hard-to-find sealed product including vintage sets.',
    href: '/shop?cat=pokemon',
    image: '/images/pokemonboxes.jpg',
    imageAlt: 'Pokémon Mega Evolution Ascended Heroes ETBs and tins on the counter',
  },
  {
    icon: Star,
    title: 'Magic: The Gathering',
    desc: 'New set releases, Commander staples, and singles. Weekly FNM events in The Back Room.',
    href: '/shop?cat=mtg',
    image: '/images/magicboxes.jpg',
    imageAlt: 'MTG Return to Thandor boxes and Secret Lair x God of War products on display',
  },
  {
    icon: Diamond,
    title: 'Yu-Gi-Oh!',
    desc: 'Latest structure decks, booster sets, classic vintage cards, and singles for every format.',
    href: '/shop?cat=yugioh',
    image: '/images/yugioh.jpg',
    imageAlt: 'Yu-Gi-Oh trading cards held in hands',
  },
  {
    icon: Sparkles,
    title: 'Lorcana',
    desc: "Disney Lorcana booster boxes, singles, and sealed product. New sets stocked on release day.",
    href: '/shop?cat=lorcana',
    image: '/images/lorcanaboxes2.jpg',
    imageAlt: 'Disney Lorcana Winterspell booster boxes stacked on the counter',
  },
  {
    icon: Trophy,
    title: 'Memorabilia',
    desc: 'Autographed jerseys, signed photos, helmets, and authenticated collectibles from your favorite athletes.',
    href: '/shop?cat=memorabilia',
    image: '/images/signed.jpg',
    imageAlt: 'Signed photos wall with autographed basketballs, framed jerseys, and memorabilia display',
  },
  {
    icon: Gamepad2,
    title: 'Video Games & Consoles',
    desc: 'Buy, sell, and trade. NES to PS5 — retro classics, modern releases, and vintage consoles.',
    href: '/shop?cat=video-games',
    image: '/images/videogames.jpg',
    imageAlt: 'Nintendo Switch games on the shelf including GTA Trilogy and Luigi\'s Mansion 3',
  },
  {
    icon: Package,
    title: 'Toys & Figures',
    desc: 'Action figures, Power Rangers, Star Wars, WWE, and vintage collectibles for every fan.',
    href: '/shop?cat=toys',
    image: '/images/toys3.jpg',
    imageAlt: 'Power Rangers Lightning Collection, Star Wars, and TMNT Last Ronin figures on display',
  },
  {
    icon: ShoppingBag,
    title: 'Supplies & Accessories',
    desc: 'Ultra Pro, Dragon Shield, KMC sleeves. Top loaders, binders, deck boxes, and display cases.',
    href: '/shop?cat=supplies',
    image: '/images/cardprotection.jpg',
    imageAlt: 'BCW Topload Card Holders — card protection supplies',
  },
]

const upcomingEvents = [
  {
    dateNum: 'WK',
    dayName: 'Every Friday',
    month: 'Weekly',
    title: 'Friday Night Magic',
    gameType: 'Magic: The Gathering',
    time: '6:00 PM',
    href: '/events',
  },
  {
    dateNum: 'WK',
    dayName: 'Every Saturday',
    month: 'Weekly',
    title: 'Pokémon League Challenge',
    gameType: 'Pokémon TCG',
    time: '1:00 PM',
    href: '/events',
  },
  {
    dateNum: 'WK',
    dayName: 'Every Wednesday',
    month: 'Weekly',
    title: 'Yu-Gi-Oh! Play Night',
    gameType: 'Yu-Gi-Oh!',
    time: '5:00 PM',
    href: '/events',
  },
]

const testimonials = [
  {
    text: "Best hobby shop in the area by far. The selection is incredible and the staff actually knows their stuff. The Back Room is a great touch for the gaming community.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James M.",
    role: "Google Review",
  },
  {
    text: "I drive 45 minutes just to shop here. The prices are fair, the inventory is fresh, and they always have what I'm looking for. Highly recommend to any collector.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Tyler R.",
    role: "Google Review",
  },
  {
    text: "FNM here every week. Great atmosphere, fair play, and a store that actually supports its local TCG community. 5 stars every time.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sarah K.",
    role: "Google Review",
  },
  {
    text: "Found a Charizard I've been hunting for years at a fair price. Staff is knowledgeable and passionate — you can tell they're collectors too.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Mike D.",
    role: "Google Review",
  },
  {
    text: "Picked up some autographed memorabilia here and it was all properly authenticated. Great variety and the staff helped me find exactly what I wanted.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Amanda L.",
    role: "Google Review",
  },
  {
    text: "Amazing retro video game selection. Found games here I've been looking for for years. The trade-in prices are the best around too.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Chris P.",
    role: "Google Review",
  },
  {
    text: "Took my son to his first Pokemon League Challenge here. The staff was welcoming, patient with beginners, and the Back Room is perfect for events.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Rachel W.",
    role: "Google Review",
  },
  {
    text: "Bought several hobby boxes and the value is consistently great. They get new product fast and always have the latest sets on release day.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Josh T.",
    role: "Google Review",
  },
  {
    text: "The MTG singles selection is legit. Commander staples, vintage pieces, competitive cards — all in one place. This is my go-to shop.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Derek H.",
    role: "Google Review",
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

const marqueeItems = [
  { text: 'Est. 2018' },
  { text: '100% Recommend Rate' },
  { text: 'Top Rated eBay Seller' },
  { text: "Southern Indiana's Premier Hobby Shop" },
  { text: 'Sports Cards · TCG · Memorabilia · Video Games' },
  { text: 'New Sealed Product Every Week' },
  { text: '64+ Five-Star Google Reviews' },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ScrollReveal />

      {/* ================================================================
          HERO — EDITORIAL
          ================================================================ */}
      <section className="hero-editorial" aria-label="Welcome to Mascots Collectibles">

        {/* Two-column layout: text left, photo right */}
        <div className="hero-editorial-inner">

          {/* ── Left: Text ── */}
          <div className="hero-editorial-text">
            <span className="eyebrow hero-editorial-eyebrow reveal">
              Tell City, Indiana · Est. 2018
            </span>

            <h1 className="hero-editorial-headline reveal reveal-delay-1">
              Mascots Sports<br />
              Cards &amp; <em>Collectibles</em>
            </h1>

            <p className="hero-editorial-sub reveal reveal-delay-2">
              Southern Indiana&apos;s Premier Hobby Shop — your destination
              for sports cards, TCG, memorabilia, and video games.
            </p>

            <div className="hero-editorial-actions reveal reveal-delay-3">
              <Link href="/shop" className="btn btn-primary btn-lg">
                <ShoppingBag size={16} aria-hidden="true" />
                Browse the Shop
              </Link>
              <Link href="/events" className="btn btn-ghost btn-lg">
                <Calendar size={16} aria-hidden="true" />
                View Events
              </Link>
            </div>

            <div className="hero-editorial-cats reveal reveal-delay-4">
              {['Sports Cards', 'Pokémon TCG', 'Magic: The Gathering', 'Memorabilia', 'Video Games'].map((cat) => (
                <span key={cat} className="hero-cat-pill">{cat}</span>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="hero-editorial-scroll-cue reveal reveal-delay-4" aria-hidden="true">
              <div className="hero-scroll-line" />
              <span className="hero-scroll-text">Scroll</span>
            </div>
          </div>

          {/* ── Right: Storefront photo ── */}
          <div className="hero-editorial-media reveal reveal-delay-2">
            <HeroParallax>
              <Image
                src="/images/exterior-shop-shot.jpg"
                alt="Mascots Sports Cards & Collectibles storefront in Tell City, Indiana"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </HeroParallax>

            {/* Floating review badge */}
            <div className="hero-editorial-badge" aria-label="64 plus five-star reviews">
              <Star size={13} aria-hidden="true" />
              <span>64+ Five-Star Reviews</span>
            </div>

            {/* Location badge */}
            <div className="hero-editorial-badge hero-editorial-badge--top" aria-label="Located in Tell City, Indiana">
              <MapPin size={13} aria-hidden="true" />
              <span>705 Main St, Tell City, IN</span>
            </div>
          </div>

        </div>

        {/* ── Stats marquee strip ── */}
        <div className="hero-marquee-strip hero-marquee-strip--light" aria-hidden="true">
          <Marquee pauseOnHover repeat={4}>
            {marqueeItems.map(({ text }) => (
              <span key={text} className="hero-marquee-item">
                {text}
                <span className="hero-marquee-dot" />
              </span>
            ))}
          </Marquee>
        </div>

      </section>

      {/* ================================================================
          FEATURED CARDS — Apple Games style editorial showcase
          ================================================================ */}
      <section className="featured-section" aria-label="Featured highlights">
        <div className="container">
          <div className="featured-header">
            <span className="eyebrow reveal">Explore</span>
            <Link href="/shop" className="btn btn-ghost reveal" style={{ flexShrink: 0 }}>
              View All
              <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-grid reveal reveal-delay-1">

            {/* Large card: sealed product / new arrivals */}
            <Link href="/shop" className="featured-card featured-card--large" aria-label="Browse the shop — fresh product every week">
              <HeroParallax>
                <Image
                  src="/images/sportsboxes.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </HeroParallax>
              <div className="featured-card-overlay" />
              <div className="featured-card-content">
                <span className="featured-card-category">In Store</span>
                <h2 className="featured-card-title">Fresh Product,<br />Every Week</h2>
                <p className="featured-card-desc">
                  New sealed boxes, singles, and collectibles arriving weekly.
                  Sports cards, Pokémon, MTG, and more.
                </p>
                <span className="featured-card-cta">
                  Browse the Shop <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Right column: two stacked cards */}
            <div className="featured-card-stack">

              {/* Events card */}
              <Link href="/events" className="featured-card featured-card--medium" aria-label="Events — Friday Night Magic and more">
                <div className="featured-card--mural-bg" aria-hidden="true">
                  <Image
                    src="/mural.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="featured-card-overlay" />
                <div className="featured-card-content">
                  <span className="featured-card-category">Events</span>
                  <h3 className="featured-card-title">FNM &amp; Weekly<br />Tournaments</h3>
                  <p className="featured-card-desc">
                    Friday Night Magic, Pokémon League, Yu-Gi-Oh! play nights — every week in The Back Room.
                  </p>
                  <span className="featured-card-cta">
                    Full Schedule <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>

              {/* Shop online card */}
              <div className="featured-card featured-card--medium featured-card--accent">
                <div className="featured-card-content featured-card-content--full">
                  <span className="featured-card-category">Online</span>
                  <h3 className="featured-card-title">Shop From<br />Anywhere</h3>
                  <p className="featured-card-desc" style={{ marginBottom: 'var(--space-2)' }}>
                    Browse and buy from our online storefronts.
                  </p>
                  <div className="featured-card-online-links">
                    <a href="https://www.ebay.com/str/mascotcollectibles" target="_blank" rel="noopener noreferrer" className="featured-card-online-link">
                      <ShoppingBag size={12} aria-hidden="true" /> eBay Store <ExternalLink size={11} aria-hidden="true" />
                    </a>
                    <a href="https://mascotsportscards.tcgplayerpro.com/" target="_blank" rel="noopener noreferrer" className="featured-card-online-link">
                      <Layers size={12} aria-hidden="true" /> TCGplayer Pro <ExternalLink size={11} aria-hidden="true" />
                    </a>
                    <a href="https://www.whatnot.com/s/bTqfi67P" target="_blank" rel="noopener noreferrer" className="featured-card-online-link">
                      <Circle size={12} aria-hidden="true" /> Whatnot Live <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <main id="main-content">

        {/* ================================================================
            WHAT WE CARRY — Category Grid
            ================================================================ */}
        <section className="section" id="categories" aria-labelledby="categories-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">What We Carry</span>
              <h2 className="section-headline reveal reveal-delay-1" id="categories-heading">
                Every corner of the hobby,<br /><em>all in one place</em>
              </h2>
              <span className="decorative-rule reveal reveal-delay-2" aria-hidden="true" style={{ margin: '1rem auto 0' }} />
              <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
                From fresh-pulled rookies to sealed vintage boxes, authenticated game-worn gear to
                hard-to-find Pokémon singles — if it&apos;s collectible, we carry it.
              </p>
            </div>

            <div className="categories-grid" role="list">
              {categories.map(({ icon: Icon, title, desc, href, image, imageAlt }, i) => (
                <Link
                  key={title}
                  href={href}
                  className={`category-card${image ? ' category-card--photo' : ''} reveal reveal-delay-${(i % 4) + 1}`}
                  role="listitem"
                  aria-label={title}
                >
                  {image && (
                    <div className="category-card-photo" aria-hidden="true">
                      <Image
                        src={image}
                        alt={imageAlt ?? ''}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="category-card-photo-overlay" />
                    </div>
                  )}
                  <div className="category-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className="category-card-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </div>
                  <h3 className="category-card-title">{title}</h3>
                  <p className="category-card-desc">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            ABOUT PREVIEW
            ================================================================ */}
        <section className="section section--alt" id="about-preview" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-preview">
              {/* Left: Text */}
              <div>
                <span className="eyebrow reveal">Our Story</span>
                <h2 className="section-headline reveal reveal-delay-1" id="about-heading">
                  Southern Indiana&apos;s hobby home<br /><em>since 2018</em>
                </h2>
                <span className="decorative-rule reveal reveal-delay-2" style={{ marginTop: '1rem', display: 'block' }} aria-hidden="true" />
                <p className="section-body reveal reveal-delay-3" style={{ marginTop: '1.5rem' }}>
                  What started as a passion for the hobby became Tell City&apos;s go-to destination
                  for sports cards, TCG, and collectibles. We&apos;ve built something more than a store —
                  a community where collectors come to find rare cards, play games, and connect with others
                  who share the same obsession.
                </p>

                <div className="stat-grid reveal reveal-delay-4">
                  {[
                    { value: '2018', label: 'Established' },
                    { value: '64+', label: '5-Star Reviews' },
                    { value: '100%', label: 'Recommend Rate' },
                    { value: 'Top', label: 'Rated eBay Seller' },
                  ].map(({ value, label }) => (
                    <div key={label} className="stat-block">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{label}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'var(--space-8)' }} className="reveal reveal-delay-4">
                  <Link href="/about" className="btn btn-outline">
                    Our Full Story
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Right: Community photo + Back Room card */}
              <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div className="about-community-photo">
                  <Image
                    src="/images/exterior-shop-shot.jpg"
                    alt="Mascots Sports Cards & Collectibles storefront in Tell City, Indiana"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="about-community-photo-label">
                    <span>705 Main St — Tell City, Indiana</span>
                  </div>
                </div>
                <div className="back-room-card">
                  <div className="back-room-icon" aria-hidden="true">
                    <Users size={24} />
                  </div>
                  <h3 className="back-room-title">The Back Room</h3>
                  <p className="back-room-desc">
                    More than a store — The Back Room is a dedicated community space where card players
                    gather, tournaments happen, and friendships are made. With a play area, card tables,
                    and a welcoming atmosphere, it&apos;s the hobby hub of Tell City.
                  </p>
                  <div className="back-room-features" aria-label="Back Room features">
                    {[
                      'Weekly Friday Night Magic (FNM)',
                      'Pokémon League & Tournaments',
                      'Yu-Gi-Oh! Play Nights',
                      'Open Casual Play Area',
                      'Regular Special Events',
                    ].map((feature) => (
                      <div key={feature} className="back-room-feature">
                        <span className="back-room-feature-dot" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <Link href="/events" className="btn btn-primary">
                      <Calendar size={15} aria-hidden="true" />
                      View Events
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ================================================================
            EVENTS PREVIEW
            ================================================================ */}
        <section className="section" id="events-preview" aria-labelledby="events-heading">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
              <div>
                <span className="eyebrow reveal">The Back Room</span>
                <h2 className="section-headline reveal reveal-delay-1" id="events-heading">
                  Upcoming <em>Events</em>
                </h2>
              </div>
              <Link href="/events" className="btn btn-ghost reveal" style={{ flexShrink: 0 }}>
                Full Schedule
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="events-preview-grid">
              {upcomingEvents.map(({ dateNum, dayName, month, title, gameType, time, href }, i) => (
                <Link key={title + dateNum} href={href} className={`event-card reveal reveal-delay-${i + 1}`} style={{ textDecoration: 'none' }}>
                  <div className="event-card-date">
                    <span className="event-date-num">{dateNum}</span>
                    <div className="event-date-meta">
                      <span className="event-date-day">{dayName}</span>
                      <span className="event-date-month">{month}</span>
                    </div>
                  </div>
                  <h3 className="event-card-title">{title}</h3>
                  <div className="event-card-game-type">
                    <Sparkles size={11} aria-hidden="true" />
                    {gameType}
                  </div>
                  <div className="event-card-time">
                    <Clock size={12} aria-hidden="true" />
                    {time} · The Back Room
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            TRUST / REVIEWS STRIP
            ================================================================ */}
        <section className="section section--alt" aria-label="Customer reviews">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="eyebrow reveal">What People Say</span>
              <h2 className="section-headline reveal reveal-delay-1">
                Real collectors,<br /><em>real reviews</em>
              </h2>
              <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1rem', marginInline: 'auto', textAlign: 'center' }}>
                64+ five-star Google reviews and a 100% recommend rate from the hobby community.
              </p>
            </div>

            {/* Google aggregate rating badge */}
            <div className="google-rating-badge reveal reveal-delay-2">
              <div className="google-rating-stars" aria-label="4.9 out of 5 stars">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <div className="google-rating-text">
                <span className="google-rating-score">4.9</span>
                <span className="google-rating-count">64 Google Reviews</span>
              </div>
              <a
                href="https://www.google.com/maps/search/Mascots+Sports+Cards+Tell+City+Indiana"
                target="_blank"
                rel="noopener noreferrer"
                className="google-rating-cta"
                aria-label="Read all 64 Google reviews"
              >
                See all reviews ↗
              </a>
            </div>

            <div className="testimonials-wrapper" style={{ marginTop: 'var(--space-8)' }}>
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="testimonials-col-2" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="testimonials-col-3" duration={17} />
            </div>

            <div className="trust-strip" style={{ marginTop: 'var(--space-12)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-10)' }}>
              {[
                { icon: Star, text: '64+ Five-Star Reviews' },
                { icon: Trophy, text: '100% Recommend Rate' },
                { icon: ShoppingBag, text: 'Top-Rated eBay Seller' },
                { icon: MapPin, text: 'Tell City, Indiana' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="trust-item reveal">
                  <Icon size={18} aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />

        {/* ================================================================
            LOCATION CTA
            ================================================================ */}
        <section className="section" id="contact" aria-label="Visit the store">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow reveal">Come See Us</span>
            <h2 className="section-headline reveal reveal-delay-1" style={{ marginInline: 'auto', maxWidth: 600 }}>
              Come find us in<br /><em>Tell City, Indiana</em>
            </h2>
            <p className="section-body reveal reveal-delay-2" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
              Located in Perry County — serving the Tri-State area since 2018.
              Stop in to browse, play, or just talk shop with people who love the hobby as much as you do.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }} className="reveal reveal-delay-3">
              <Link href="/find-us" className="btn btn-primary btn-lg">
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </Link>
              <Link href="/find-us#hours" className="btn btn-outline btn-lg">
                <Clock size={16} aria-hidden="true" />
                Store Hours
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
