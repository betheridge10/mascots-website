'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (res.ok) {
      setStatus('sent')
    } else {
      const data = await res.json().catch(() => ({}))
      setErrorMsg(data.error || 'Unknown error')
      setStatus('idle')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{
        background: 'rgba(76,175,125,0.06)',
        border: '1px solid rgba(76,175,125,0.2)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-10)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}>
        <CheckCircle size={40} style={{ color: 'var(--color-success)' }} aria-hidden="true" />
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', maxWidth: 360 }}>
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
          You can also reach us through our online stores or stop in during store hours.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="John Smith"
            value={values.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <select
          id="subject"
          name="subject"
          className="form-input"
          value={values.subject}
          onChange={handleChange}
          required
          style={{ cursor: 'pointer' }}
        >
          <option value="" disabled>Select a topic…</option>
          <option value="buying">Buying / Inventory Question</option>
          <option value="selling">Selling My Collection</option>
          <option value="events">Events &amp; Back Room</option>
          <option value="online">Online Orders / Shipping</option>
          <option value="other">General Question</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell us what you're looking for, or what you'd like to know…"
          value={values.message}
          onChange={handleChange}
          required
          rows={6}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={status === 'sending'}
        style={{ alignSelf: 'flex-start' }}
      >
        {status === 'sending' ? (
          <>
            <span style={{
              width: 16, height: 16,
              border: '2px solid rgba(255,255,255,0.3)',
              borderTopColor: '#fff',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'spin 0.7s linear infinite',
            }} aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      {errorMsg && (
        <p role="alert" style={{ color: 'var(--color-error, #c0392b)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-3)' }}>
          Error: {errorMsg}
        </p>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  )
}
