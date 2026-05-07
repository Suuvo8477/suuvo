'use client'

import Button from '@/components/button'
import SuccessIcon from '@/components/icons/SuccessIcon'
import Typography from '@/components/typography'
import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  status?: 'success' | 'failed'
}

const WishListJoinStatusModal = ({ open, onOpenChange, status }: Props) => {
  const router = useRouter()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className='bg-black/3 backdrop-blur-sm z-110' />

      <DialogContent
        showCloseButton={false}
        className='w-[calc(100%-16px)] max-w-127 sm:max-w-127 px-8 pt-10 pb-8 rounded-[20px] z-111'
      >
        {/* Sr - Only */}
        <DialogTitle className='sr-only'>_</DialogTitle>
        <DialogDescription className='sr-only'>_</DialogDescription>

        <div>
          {status === 'success' ? (
            <div>
              <div className='flex items-center justify-center mb-4'>
                <SuccessIcon />
              </div>
              <Typography variant='h5' className='text-center mx-auto max-w-72.25 mb-2'>
                You have been added to our{' '}
                <span className='bg-[linear-gradient(90deg,#EF9F22_0%,#DE127B_100%)] bg-clip-text text-transparent'>
                  waitlist!
                </span>
              </Typography>
              <Typography variant='p3' className='mx-auto text-center max-w-72.25 mb-6'>
                Your username has been reserved successfully for early Suuvo access.
              </Typography>
              <Image src='/images/group_people.png' alt='perple' width={184} height={48} className='mx-auto mb-2' />
              <Typography variant='p4' className='text-center mx-auto mb-8.5'>
                You’re among <span className='text-red-400'>9,000+</span> early members!
              </Typography>
              <Button
                variant='primary'
                className='w-full'
                onClick={() => {
                  router.push('/')
                  onOpenChange(false)
                }}
              >
                Back to Home
              </Button>
            </div>
          ) : status === 'failed' ? (
            <div>Failed</div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WishListJoinStatusModal
