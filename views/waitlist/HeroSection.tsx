'use client'

import { useState } from 'react'
import Typography from '@/components/typography'
import Image from 'next/image'
import EarlyAccessIcon from '@/components/icons/EarlyAccess'
import ExclusiveIcon from '@/components/icons/Exclusive'
import VipIcon from '@/components/icons/VipIcon'
import UserIcon from '@/components/icons/UserIcon'
import Button from '@/components/button'
import WishListJoinStatusModal from './WishListJoinStatusModal'
import { toast } from 'sonner'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [status, setStatus] = useState<'success' | 'failed' | undefined>(undefined)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://api-test.suuvo.net/api/user/reserve-username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: '',
          phoneNumber: formData.phone,
          source: 'sample',
          userName: formData.username
        })
      })

      const data = await res.json()

      if (data.status === 201) {
        setFormData({ username: '', email: '', phone: '' })
        setStatus('success')
        setOpen(true)
        setError('')

        return
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
        setStatus(undefined)
        setOpen(false)
        toast.error(data.message || 'Something went wrong. Please try again.')

        return
      }
    } catch (err: any) {
      setError('Network error. Please try again.')
      setStatus('failed')
      setOpen(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id='home' className='pt-24 sm:pt-30 md:pt-38 relative z-10 overflow-hidden bg-[#FEF9F7] h-auto'>
        <div className='-z-10 absolute bottom-0 right-0 w-1/2 h-full'>
          <Image src='/images/right_grediant.png' fill alt='hero-image' className='w-full h-full' />
        </div>
        <div className='absolute w-full h-full top-0 left-0 -z-10'>
          <Image
            src='/images/hero-bg.webp'
            alt='hero-bg'
            priority
            fill
            sizes='100vw'
            className='w-full h-auto object-cover object-center'
          />
        </div>

        <div className='s-container h-full'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-stretch gap-8 md:gap-12 h-full'>
            {/* Left - Heading */}
            <div className='w-full xl:max-w-1/2 md:flex-1 pb-12 sm:pb-20 xl:pb-31.5'>
              <Typography variant='h2' className='max-w-130.5 text-text-primary'>
                Reserve Your Suuvo Username
              </Typography>
              <Typography variant='p3' className='mt-4 md:mt-5 lg:mt-6 mb-6 text-text-primary max-w-xl'>
                Join the future of social interaction, live streaming, and creativity. Reserve your unique username now
                and be part of the Suuvo community.
              </Typography>
              <ul className='flex sm:flex-row flex-col sm:items-center gap-4 mb-6 sm:mb-10 xl:mb-18 flex-wrap text-text-primary'>
                <li className='flex items-center gap-2 font-medium'>
                  <EarlyAccessIcon />
                  <span>Early Access</span>
                </li>
                <li className='flex items-center gap-2 font-medium'>
                  <ExclusiveIcon />
                  <span>Exclusive Rewards</span>
                </li>
                <li className='flex items-center gap-2 font-medium'>
                  <VipIcon />
                  <span>VIP Perks</span>
                </li>
              </ul>
              <div className='p-8 bg-white xl:max-w-127 shadow-[0px_7px_15px_0px_#0000000A,7px_0px_15px_0px_#0000000A,0px_27px_27px_0px_#00000008,0px_60px_36px_0px_#00000005,0px_106px_42px_0px_#00000003,0px_166px_46px_0px_#00000000] rounded-[20px]'>
                <div className='flex items-center gap-4 mb-6'>
                  <UserIcon />
                  <div>
                    <Typography variant='h5' className='mb-0.5 text-text-primary'>
                      Join the Waitlist
                    </Typography>
                    <Typography variant='p3' className='text-text-primary'>
                      Reserve your username early.
                    </Typography>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='flex flex-col gap-3'>
                    {/* Username */}
                    <div className='flex items-center gap-2.5 bg-white border border-[#1E1E1E0D] rounded-full px-5 py-3.5 focus-within:border-gray-400 transition-colors'>
                      <input
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        placeholder='@username'
                        required
                        className='flex-1 border-none outline-none bg-transparent text-base text-black placeholder:text-[background: #1E1E1E] font-primary font-semibold leading-6'
                      />
                    </div>

                    {/* Email */}
                    <div className='flex items-center gap-2.5 bg-white border border-[#1E1E1E0D] rounded-full px-5 py-3.5 focus-within:border-gray-400 transition-colors'>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.6'>
                          <path
                            d='M7 8.25L9.94202 9.9894C11.6572 11.0035 12.3428 11.0035 14.058 9.9894L17 8.25'
                            stroke='#1E1E1E'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z'
                            stroke='#1E1E1E'
                            strokeWidth='2'
                            strokeLinejoin='round'
                          />
                        </g>
                      </svg>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email address'
                        required
                        className='flex-1 border-none outline-none bg-transparent text-base text-black placeholder:text-[background: #1E1E1E] font-primary font-semibold leading-6'
                      />
                    </div>

                    {/* Phone */}
                    <div className='flex items-center gap-2.5 bg-white border border-[#1E1E1E0D] rounded-full px-5 py-3.5 focus-within:border-gray-400 transition-colors'>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.6'>
                          <path
                            d='M9.15826 5.71217L8.7556 4.80619C8.49232 4.21382 8.36068 3.91762 8.16381 3.69095C7.91708 3.40688 7.59547 3.19788 7.23568 3.08779C6.94859 2.99994 6.62446 2.99994 5.97621 2.99994C5.02791 2.99994 4.55376 2.99994 4.15573 3.18223C3.68687 3.39696 3.26344 3.86322 3.09473 4.35054C2.95151 4.76423 2.99254 5.18937 3.07458 6.03964C3.94791 15.0901 8.90982 20.052 17.9603 20.9254C18.8106 21.0074 19.2358 21.0484 19.6494 20.9052C20.1368 20.7365 20.603 20.3131 20.8178 19.8442C21 19.4462 21 18.972 21 18.0237C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8361C20.0824 15.6393 19.7862 15.5076 19.1938 15.2443L18.2878 14.8417C17.6463 14.5566 17.3255 14.414 16.9996 14.383C16.6876 14.3533 16.3731 14.3971 16.0811 14.5108C15.776 14.6296 15.5064 14.8543 14.967 15.3038C14.4302 15.7511 14.1618 15.9748 13.8338 16.0946C13.543 16.2009 13.1586 16.2402 12.8524 16.1951C12.5069 16.1442 12.2424 16.0028 11.7133 15.7201C10.0673 14.8404 9.15953 13.9327 8.27987 12.2867C7.99714 11.7576 7.85578 11.4931 7.80487 11.1476C7.75974 10.8414 7.79908 10.457 7.9053 10.1662C8.02512 9.83822 8.24881 9.5698 8.69619 9.03294C9.14562 8.49362 9.37034 8.22396 9.48915 7.91885C9.60285 7.62688 9.64662 7.31234 9.61695 7.00042C9.58594 6.67446 9.44338 6.3537 9.15826 5.71217Z'
                            stroke='#1E1E1E'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                        </g>
                      </svg>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Phone number (Optional)'
                        className='flex-1 border-none outline-none bg-transparent text-base text-black placeholder:text-[background: #1E1E1E] font-primary font-semibold leading-6'
                      />
                    </div>
                  </div>
                  {/* {error && (
                    <Typography variant='p3' className='text-red-500'>
                      {error}
                    </Typography>
                  )} */}
                  <Button type='submit' variant='primary' disabled={loading} className='w-full'>
                    {loading ? 'Submitting...' : 'Join Waitlist'}
                  </Button>
                </form>
              </div>
            </div>

            <div className='relative hidden min-[992px]:block md:h-auto md:flex-1 md:max-w-1/2 md:self-stretch'>
              <Image
                src='/images/hero_right_frame.png'
                fill
                alt='hero-image'
                className='object-contain object-bottom md:object-bottom scale-110'
              />
            </div>
          </div>
        </div>
      </section>

      <WishListJoinStatusModal
        open={isOpen}
        onOpenChange={isOpen => {
          if (!isOpen) setStatus(undefined)
          setOpen(isOpen)
        }}
        status={status}
      />
    </>
  )
}

export default HeroSection
