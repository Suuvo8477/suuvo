'use client'

import React, { useState } from 'react'
import Typography from '@/components/typography'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function DeleteAccountView() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [reason, setReason] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, reason })
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setFormState('error')
        return
      }

      setFormState('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center px-4'>
        <div className='max-w-lg w-full text-center'>
          <div className='w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6'>
            <svg className='w-8 h-8 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <Typography variant='h5' className='text-gray-900 mb-3'>
            Request Submitted
          </Typography>
          <Typography variant='p2' className='text-gray-500 mb-2'>
            We&apos;ve received your account deletion request for <span className='text-gray-900 font-semibold'>{email}</span>.
          </Typography>
          <Typography variant='p3' className='text-gray-400'>
            You&apos;ll receive a confirmation email shortly. Your account and all associated data will be permanently deleted within <strong>30 days</strong>.
          </Typography>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-2xl mx-auto px-4 py-16 md:py-24'>

        {/* Header */}
        <div className='mb-10'>
          <Typography variant='h4' className='text-gray-900 mb-3'>
            Delete Your Account
          </Typography>
          <Typography variant='p2' className='text-gray-500'>
            Submit this form to request permanent deletion of your Suuvo account and all associated data.
            We will process your request within <strong>30 days</strong>.
          </Typography>
        </div>

        {/* What gets deleted */}
        <div className='bg-gray-50 rounded-2xl p-6 mb-10'>
          <Typography variant='p2' className='text-gray-900 mb-4 font-semibold'>
            What will be deleted
          </Typography>
          <ul className='space-y-2'>
            {[
              'Your profile, username, and account information',
              'All posts, videos, and content you have uploaded',
              'Your messages, followers, and following relationships',
              'Coins, wallet balance, and transaction history',
              'Business profiles and memberships associated with your account',
              'Push notifications and activity history',
            ].map((item) => (
              <li key={item} className='flex items-start gap-3'>
                <span className='mt-1 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0'>
                  <svg className='w-2.5 h-2.5 text-red-500' fill='currentColor' viewBox='0 0 8 8'>
                    <circle cx='4' cy='4' r='4' />
                  </svg>
                </span>
                <Typography variant='p3' className='text-gray-600'>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
          <div className='mt-4 pt-4 border-t border-gray-200'>
            <Typography variant='p4' className='text-gray-400'>
              This action is permanent and cannot be undone. If you only want to take a break, you can deactivate your account from within the app instead.
            </Typography>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Email address <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter the email linked to your account'
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-sm'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Username <span className='text-gray-400 font-normal'>(optional)</span>
            </label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='@yourusername'
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-sm'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Reason for leaving <span className='text-gray-400 font-normal'>(optional)</span>
            </label>
            <textarea
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder='Help us improve by sharing why you are leaving...'
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-sm resize-none'
            />
          </div>

          {formState === 'error' && (
            <div className='bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl'>
              {errorMsg}
            </div>
          )}

          <button
            type='submit'
            disabled={formState === 'loading'}
            className='w-full py-3.5 px-6 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 active:bg-gray-950 transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {formState === 'loading' ? 'Submitting...' : 'Submit Deletion Request'}
          </button>

          <Typography variant='p4' className='text-gray-400 text-center'>
            Need help? Contact us at{' '}
            <a href='mailto:support@suuvo.com' className='text-gray-600 underline underline-offset-2'>
              support@suuvo.com
            </a>
          </Typography>
        </form>
      </div>
    </div>
  )
}
