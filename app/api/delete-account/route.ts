import { NextResponse } from 'next/server'
import { transporter } from '@/lib/mailer'

export async function POST(req: Request) {
  const { email, username, reason } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  try {
    // Notify support team
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: 'support@suuvo.com',
      subject: 'Account Deletion Request',
      html: `
        <h2>Account Deletion Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${username ? `<p><strong>Username:</strong> ${username}</p>` : ''}
        ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
        <p><strong>Submitted at:</strong> ${new Date().toUTCString()}</p>
        <hr/>
        <p>Please process this deletion request within 30 days per our Privacy Policy.</p>
      `
    })

    // Confirm to the user
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: 'Your Suuvo Account Deletion Request Has Been Received',
      html: `
        <h2>We've received your request</h2>
        <p>Hi${username ? ` ${username}` : ''},</p>
        <p>We've received your request to delete your Suuvo account associated with <strong>${email}</strong>.</p>
        <p>Your account and all associated data will be permanently deleted within <strong>30 days</strong>.</p>
        <p>If you did not submit this request, please contact us immediately at <a href="mailto:support@suuvo.com">support@suuvo.com</a>.</p>
        <br/>
        <p>The Suuvo Team</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete account email error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
