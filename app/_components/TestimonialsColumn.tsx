'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

export interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className} style={{ overflow: 'hidden', flex: '0 0 auto' }}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
      >
        {[...new Array(2)].map((_, dupIndex) => (
          <React.Fragment key={dupIndex}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${dupIndex}-${i}`}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border-card)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-7)',
                  width: 300,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 'var(--space-4)' }} aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} fill="var(--color-star)" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>

                {/* Review text */}
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {text}
                </p>

                {/* Reviewer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
                  <img
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                      {name}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.3, marginTop: 2 }}>
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
