'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import { closeWaitList } from '@/lib/features/waitList/waitListSlice'
import Image from 'next/image'
import Typography from '../typography'
import Button from '../button'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { SuccessBadgeIcon } from '../icons'
import { X } from 'lucide-react'

const WaitListModal = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector(state => state.waitList)

  const [isLoading, setIsLoading] = useState(false)
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      setActiveStep(1)
      setIsLoading(false)
    }
  }, [isOpen])

  // Close modal handler
  const handleClose = () => {
    dispatch(closeWaitList())
  }

  // Handle email submission to join wait-list
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const email = e.target?.email?.value

    if (!email || typeof email !== 'string') {
      toast.warning('Please enter an email address.')

      return
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    setIsLoading(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, timezone })
      })

      const data = await res.json()

      setIsLoading(false)

      if (data.success) {
        e.target?.reset()
        setActiveStep(2)
        toast.success('Added to waitlist!')
      } else {
        throw new Error(data.error || 'Failed to join waitlist. Please try again.')
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred. Please try again later.')
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogOverlay className='bg-black/3 backdrop-blur-sm z-110' />

      <DialogContent
        showCloseButton={false}
        className='w-[calc(100%-16px)] md:w-[90%] max-w-full sm:max-w-267.5 p-0 rounded-[20px] z-111 bg-linear-to-r from-[#EF9F22] to-[#DE127B]'
      >
        {/* Sr - Only */}
        <DialogDescription className='sr-only'>_</DialogDescription>
        <DialogTitle className='sr-only'>_</DialogTitle>

        <button
          type='button'
          onClick={handleClose}
          className='absolute hover:scale-110 transition-transform duration-300 ease-in-out right-4 top-4 size-6 md:size-8 flex justify-center items-center bg-[#E54791] rounded-full z-10'
        >
          <X className='size-3.5 md:size-5 text-white' />
        </button>

        <div className='grid grid-cols-1 lg:grid-cols-2 max-h-123'>
          <div className='hidden lg:block lg:pt-10.5 lg:pl-13.75 overflow-hidden'>
            <Image
              src='/assets/images/feature-2.png'
              alt='img'
              width={452}
              height={522}
              className='w-full h-auto aspect-auto object-top object-cover'
            />
          </div>

          {activeStep === 2 ? (
            <div className='flex flex-col justify-center items-center text-center p-6 sm:p-10 pr-6 sm:pr-20'>
              <SuccessBadgeIcon />
              <Typography variant='h2' className='text-white mt-2'>
                You’re In!
              </Typography>
              <Typography variant='p3' className='text-white max-w-83.5 mx-auto mt-2'>
                You’ve successfully joined the waitlist. Get ready for something real.
              </Typography>
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 py-8 sm:p-8 md:p-10 lg:p-13.5'>
              <Typography variant='h2' className='text-white'>
                Join Waitlist
              </Typography>
              <Typography variant='p3' className='text-white mt-2 max-w-112.5'>
                Join the waitlist to experience a new kind of social—real connections, no noise, and creator-first
                features.
              </Typography>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-5 bg-white rounded-2xl sm:rounded-full pl-2 sm:pl-6 pr-2 lg:pr-1.5 pt-4 sm:pt-2 pb-2 w-full max-w-121 mt-6'
              >
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  className='bg-transparent outline-none text-text-primary placeholder:text-text-primary font-medium text-[16px] w-full leading-6 tracking-[-0.02em] text-center sm:text-left'
                />
                <Button type='submit' className='min-w-34 h-11 text-base' disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WaitListModal
