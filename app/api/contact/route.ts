import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY not set')
      return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: 'Mascots Website <onboarding@resend.dev>',
      to: 'blakeetheridg10@gmail.com',
      replyTo: email,
      subject: `Website Contact: ${subject || 'General Inquiry'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#0033A0">New message from mascotsportscards.com</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold;width:100px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Subject</td><td style="padding:8px">${subject || '—'}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9f9f9;border-left:4px solid #0033A0;white-space:pre-wrap">${message}</div>
          <p style="color:#999;font-size:12px;margin-top:24px">Sent via mascotsportscards.com contact form</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
