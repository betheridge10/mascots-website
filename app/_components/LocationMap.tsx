'use client'

import type React from 'react'
import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

export function LocationMap({
  location = 'Tell City, Indiana',
  coordinates = '37.9514° N, 86.7699° W',
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  // Project CSS variable shorthand helpers
  const textPrimary = 'var(--color-text-primary)'     // #060E1E
  const textMuted   = 'var(--color-text-muted)'       // #6B7FA8
  const bgCard      = 'var(--color-bg-card)'
  const bgElevated  = 'var(--color-bg-elevated)'
  const borderCard  = 'var(--color-border-card)'
  const fontMono    = 'var(--font-mono)'

  // Muted-foreground rgba values (text-muted #6B7FA8 at various opacities)
  const mf = (a: number) => `rgba(107,127,168,${a})`
  // Foreground rgba values (text-primary #060E1E at various opacities)
  const fg = (a: number) => `rgba(6,14,30,${a})`

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ perspective: 1000, cursor: 'pointer', userSelect: 'none', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
          background: bgCard,
          border: `1px solid ${borderCard}`,
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          overflow: 'hidden',
        }}
        animate={{
          width:  isExpanded ? 360 : 240,
          height: isExpanded ? 280 : 140,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      >
        {/* Subtle gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${mf(0.05)}, transparent, ${mf(0.12)})`,
        }} />

        {/* ── Expanded map view ── */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Map base */}
              <div style={{
                background: bgElevated,
                position: 'absolute', inset: 0,
                borderRadius: 'var(--radius-xl)',
              }} />

              {/* Street grid SVG */}
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                preserveAspectRatio="none"
              >
                {/* Main horizontal roads */}
                <motion.line x1="0%" y1="35%" x2="100%" y2="35%"
                  stroke={fg(0.25)} strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }} />
                <motion.line x1="0%" y1="65%" x2="100%" y2="65%"
                  stroke={fg(0.25)} strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }} />
                {/* Main vertical roads */}
                <motion.line x1="30%" y1="0%" x2="30%" y2="100%"
                  stroke={fg(0.20)} strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }} />
                <motion.line x1="70%" y1="0%" x2="70%" y2="100%"
                  stroke={fg(0.20)} strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }} />
                {/* Secondary horizontal streets */}
                {[20, 50, 80].map((y, i) => (
                  <motion.line key={`h-${i}`}
                    x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke={fg(0.10)} strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} />
                ))}
                {/* Secondary vertical streets */}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line key={`v-${i}`}
                    x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke={fg(0.10)} strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }} />
                ))}
              </svg>

              {/* Buildings */}
              {[
                { top: '40%', left: '10%', h: '20%', w: '15%', bg: mf(0.30), bd: mf(0.20), delay: 0.50 },
                { top: '15%', left: '35%', h: '15%', w: '12%', bg: mf(0.25), bd: mf(0.15), delay: 0.60 },
                { top: '70%', left: '75%', h: '18%', w: '18%', bg: mf(0.28), bd: mf(0.18), delay: 0.70 },
                { top: '20%', right: '10%', h: '25%', w: '10%', bg: mf(0.22), bd: mf(0.15), delay: 0.55 },
                { top: '55%', left: '5%',  h: '12%', w: '8%',  bg: mf(0.20), bd: mf(0.12), delay: 0.65 },
                { top: '8%',  left: '75%', h: '10%', w: '14%', bg: mf(0.22), bd: mf(0.15), delay: 0.75 },
              ].map((b, i) => (
                <motion.div key={i}
                  style={{
                    position: 'absolute',
                    top: b.top, left: (b as { left?: string }).left, right: (b as { right?: string }).right,
                    height: b.h, width: b.w,
                    background: b.bg,
                    border: `1px solid ${b.bd}`,
                    borderRadius: 2,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: b.delay }}
                />
              ))}

              {/* Map pin */}
              <motion.div
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(52,211,153,0.5))', display: 'block' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#34D399"/>
                  <circle cx="12" cy="9" r="2.5" fill={bgCard}/>
                </svg>
              </motion.div>

              {/* Bottom fade */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to top, ${bgCard}, transparent)`,
                opacity: 0.6,
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern (collapsed only) */}
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          animate={{ opacity: isExpanded ? 0 : 0.04 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <pattern id="lm-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={textPrimary} strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lm-grid)"/>
          </svg>
        </motion.div>

        {/* ── Card content ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          height: '100%', padding: 'var(--space-5)',
        }}>
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {/* Map icon */}
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} transition={{ duration: 0.3 }}>
              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{
                  filter: isHovered
                    ? 'drop-shadow(0 0 8px rgba(52,211,153,0.6))'
                    : 'drop-shadow(0 0 4px rgba(52,211,153,0.3))',
                }}
                transition={{ duration: 0.3 }}
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                <line x1="9" x2="9" y1="3" y2="18"/>
                <line x1="15" x2="15" y1="6" y2="21"/>
              </motion.svg>
            </motion.div>

            {/* "Live" badge */}
            <motion.div
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                borderRadius: 999, padding: '4px 8px',
                backdropFilter: 'blur(8px)',
                fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: textMuted,
              }}
              animate={{ backgroundColor: isHovered ? fg(0.08) : fg(0.05) }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', flexShrink: 0 }}/>
              Open
            </motion.div>
          </div>

          {/* Bottom text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <motion.h3
              style={{ color: textPrimary, fontSize: 'var(--text-sm)', fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  style={{ color: textMuted, fontFamily: fontMono, fontSize: '0.7rem', margin: 0 }}
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Animated underline */}
            <motion.div
              style={{
                height: 1,
                background: 'linear-gradient(to right, rgba(52,211,153,0.5), rgba(52,211,153,0.3), transparent)',
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        style={{
          position: 'absolute', bottom: -24, left: '50%',
          fontSize: '10px', color: textMuted, whiteSpace: 'nowrap',
          x: '-50%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  )
}
