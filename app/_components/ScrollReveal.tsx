'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    // Strip any stale `.visible` state left over from a previous visit to
    // this page so the observer starts from a clean slate every navigation.
    els.forEach((el) => el.classList.remove('visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))

    // Browser scroll restoration runs asynchronously after React commits,
    // so the initial IntersectionObserver pass fires while the page is still
    // at scroll-position 0.  Run a second pass one frame later to catch
    // everything that lands in the viewport once scroll is restored.
    const rafId = requestAnimationFrame(() => {
      els.forEach((el) => {
        if (!el.classList.contains('visible')) {
          const { top } = el.getBoundingClientRect()
          if (top < window.innerHeight) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        }
      })
    })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [pathname]) // re-run on every client-side route change

  return null
}
