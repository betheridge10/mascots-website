import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY
  return NextResponse.json({
    resend_key_set: !!apiKey,
    resend_key_prefix: apiKey ? apiKey.slice(0, 6) + '...' : 'NOT SET',
  })
}
