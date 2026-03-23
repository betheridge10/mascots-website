import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'RESEND_API_KEY not set' })
  }

  const resend = new Resend(apiKey)

  const { data, error } = await resend.emails.send({
    from: 'Mascots Website <onboarding@resend.dev>',
    to: 'blakeetheridge10@gmail.com',
    subject: 'Test email from Mascots website',
    html: '<p>This is a test. If you see this, the contact form is working.</p>',
  })

  return NextResponse.json({ data, error })
}
