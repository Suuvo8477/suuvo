import { NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/google-sheet'
import { transporter } from '@/lib/mailer'

export async function POST(req: Request) {
  const { email, timezone } = await req.json()

  try {
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: 'waitlist@suuvo.com',
      subject: 'New Waitlist Signup',
      html: `
        <h2>New user joined waitlist</h2>
        <p>Email: ${email}</p>
      `
    })

    // Save to Google Sheet
    await appendToSheet(email, timezone, 'Success')

    return NextResponse.json({ success: true })
  } catch (error) {
    await appendToSheet(email, timezone, 'Failed')

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
