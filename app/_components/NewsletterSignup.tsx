'use client'

import { useState, type FormEvent } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } else {
      // Fallback: notify owner by email
      window.location.href = `mailto:mascotsportscards@gmail.com?subject=Newsletter%20Signup&body=New%20signup%3A%20${encodeURIComponent(email)}`
      setStatus('done')
    }
  }

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="newsletter-inner">

          <div className="newsletter-text">
            <div className="newsletter-icon" aria-hidden="true">
              <Mail size={22} />
            </div>
            <div>
              <h2 className="newsletter-heading" id="newsletter-heading">Stay in the Loop</h2>
              <p className="newsletter-sub">New arrivals, events, and deals — straight to your inbox.</p>
            </div>
          </div>

          {status === 'done' ? (
            <div className="newsletter-success">
              <CheckCircle size={20} aria-hidden="true" />
              <span>You&apos;re in! We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
                disabled={status === 'sending'}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="newsletter-error" role="alert">
              Something went wrong — try again or email us at mascotsportscards@gmail.com
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
