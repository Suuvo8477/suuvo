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
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M12.5628 22.095C11.014 22.095 9.62482 21.8555 8.39533 21.3765C7.16583 20.8975 6.11997 20.2188 5.25773 19.3406C4.39548 18.4624 3.73283 17.4166 3.26978 16.203C2.80672 14.9735 2.5752 13.6083 2.5752 12.1074C2.5752 10.6064 2.81471 9.24123 3.29373 8.01174C3.77275 6.76628 4.45935 5.69646 5.35353 4.80228C6.24771 3.90811 7.30156 3.22151 8.51508 2.74249C9.72861 2.2475 11.0779 2 12.5628 2C13.936 2 15.1975 2.21556 16.3471 2.64668C17.4968 3.06183 18.4947 3.6686 19.341 4.46697C20.1873 5.24937 20.8419 6.18347 21.305 7.26926C21.7681 8.35504 21.9996 9.56857 21.9996 10.9098C21.9996 12.1713 21.8 13.273 21.4008 14.2151C21.0176 15.1572 20.4827 15.8917 19.7961 16.4186C19.1254 16.9455 18.359 17.209 17.4968 17.209C17.0018 17.209 16.5627 17.1212 16.1795 16.9455C15.7962 16.7699 15.4849 16.5224 15.2454 16.203C15.0058 15.8837 14.8382 15.5085 14.7424 15.0773H14.5747C14.3512 15.716 13.9839 16.211 13.473 16.5623C12.962 16.9136 12.3712 17.0892 11.7006 17.0892C10.998 17.0892 10.3673 16.9136 9.80844 16.5623C9.26555 16.211 8.84242 15.7001 8.53903 15.0294C8.23565 14.3588 8.08396 13.5445 8.08396 12.5864C8.08396 11.7561 8.17977 11.0216 8.37138 10.3829C8.56298 9.74421 8.83443 9.20131 9.18571 8.75423C9.55297 8.29117 9.98409 7.94787 10.4791 7.72433C10.9741 7.48482 11.517 7.36506 12.1078 7.36506C12.6986 7.36506 13.2255 7.52473 13.6885 7.84408C14.1516 8.14746 14.4789 8.5706 14.6705 9.11349H14.7903L15.0777 7.60457H16.4669L16.0836 12.778C16.0517 13.3848 16.0836 13.8798 16.1795 14.263C16.2753 14.6302 16.4349 14.9017 16.6585 15.0773C16.882 15.237 17.1535 15.3168 17.4728 15.3168C17.856 15.3168 18.1993 15.221 18.5027 15.0294C18.8061 14.8219 19.0616 14.5344 19.2692 14.1672C19.4927 13.784 19.6604 13.3289 19.7721 12.802C19.8839 12.275 19.9398 11.6922 19.9398 11.0535C19.9398 9.52066 19.6204 8.2273 18.9817 7.17345C18.343 6.10363 17.4728 5.28929 16.3711 4.73043C15.2693 4.17157 14.0079 3.89214 12.5868 3.89214C11.3413 3.89214 10.2316 4.09972 9.25757 4.51487C8.28355 4.91406 7.46123 5.4809 6.7906 6.2154C6.11997 6.94991 5.60901 7.81215 5.25773 8.80213C4.92241 9.77614 4.75475 10.846 4.75475 12.0116C4.75475 13.289 4.93838 14.4307 5.30563 15.4366C5.67288 16.4425 6.1998 17.3048 6.8864 18.0233C7.573 18.7259 8.40331 19.2688 9.37732 19.652C10.3673 20.0193 11.4691 20.2029 12.6826 20.2029C13.7524 20.2029 14.7104 20.0592 15.5567 19.7718C16.419 19.5003 17.1455 19.1331 17.7363 18.67L18.5267 20.2508C18.1115 20.6021 17.5766 20.9134 16.9219 21.1849C16.2832 21.4723 15.5887 21.6958 14.8382 21.8555C14.0877 22.0152 13.3293 22.095 12.5628 22.095ZM12.0359 15.2929C12.5149 15.2929 12.9141 15.1572 13.2335 14.8857C13.5688 14.6143 13.8322 14.239 14.0238 13.76C14.2155 13.281 14.3272 12.7221 14.3592 12.0834C14.3272 11.4128 14.2234 10.8619 14.0478 10.4308C13.8881 9.99969 13.6566 9.68034 13.3532 9.47276C13.0658 9.24922 12.7225 9.13744 12.3233 9.13744C11.8283 9.13744 11.4132 9.28115 11.0779 9.56857C10.7585 9.85598 10.511 10.2472 10.3354 10.7422C10.1757 11.2372 10.0959 11.812 10.0959 12.4667C10.0959 13.0894 10.1757 13.6083 10.3354 14.0235C10.495 14.4386 10.7186 14.758 11.006 14.9815C11.3094 15.1891 11.6527 15.2929 12.0359 15.2929Z" fill="#1E1E1E"/>
</g>
</svg>

                      <input
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        placeholder='username'
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
                className='object-contain object-bottom md:object-bottom scale-140 origin-left'
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
