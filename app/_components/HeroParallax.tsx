'use client'

import { motion, useScroll, useTransform } from 'motion/react'

/**
 * Wraps child content in a subtle parallax container.
 * The inner div moves upward as the user scrolls down the hero.
 * Parent must be position:relative overflow:hidden.
 */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  // Translate from 0% (top of page) to 12% (after scrolling ~700px)
  const y = useTransform(scrollY, [0, 700], ['0%', '12%'])

  return (
    <motion.div
      style={{ y, position: 'absolute', inset: '-14% 0 -14% 0', zIndex: 0 }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}
