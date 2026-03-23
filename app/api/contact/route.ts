import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const endpoint = process.env.FORMSPREE_CONTACT_URL
    if (!endpoint) {
      return NextResponse.json({ error: 'Form endpoint not configured' }, { status: 500 })
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to send message' }, { status: res.status })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
