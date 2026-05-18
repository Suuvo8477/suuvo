'use client'

import React from 'react'
import Link from 'next/link'

import { InstagramIcon, LocationIcon, MailIcon, XIcon, YoutubeIcon } from '@/components/icons'
import Logo from '@/components/shared/logo'
import Button from '@/components/button'
import CTASection from '@/views/home/CTASection'
import WishListButton from '@/views/shared/WishListButton'
import { usePathname } from 'next/navigation'
import TimingSection from '@/views/waitlist/TimingSection'
import FeaturesSection from '@/views/home/FeaturesSection'

const navigationLinks: string[] = ['Home', 'Momentz', 'Live', 'PK Battles', 'Shop', 'Love Notes', 'AI Features']

const legalLinks: {url: string, label: string}[] = [
  {
    url: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    url: '/terms-and-conditions',
    label: 'Terms & Condition',
  },
  {
    url: '/community-guidelines',
    label: 'Community Guidelines',
  },
  {
    url: '/#',
    label: 'Creator Policies',
  }
]

const supportLinks: {url: string, label: string}[] = [
  {
    url: '/help-center',
    label: 'Help Center',
  },
  {
    url: '/#',
    label: 'Contact Support',
  },
  {
    url: '#',
    label: 'Report a Problem',
  },
]

const Footer: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isWishlistPage = pathname === '/waitlist'

  return (
    <footer className='bg-[url(/images/footer-bg.png)] bg-cover bg-bottom bg-no-repeat'>
      {isHomePage && <CTASection />}
      {isHomePage && <FeaturesSection />}
      {isWishlistPage && <TimingSection />}

      <div className='s-container'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_3fr] md:gap-8'>
          <div className=''>
            <Logo className='w-27.5 lg:w-46 h-7.5 lg:h-12' />
            <p className='mt-5 text-base font-medium leading-6 tracking-[-0.02em]'>
              Create. Go live. Connect. Sell. Grow.
              <br />
              All in one place.
            </p>

            <WishListButton className='lg:w-63.5 w-full mt-5' />
          </div>

          <div className='grid grid-cols-2 gap-x-1 sm:gap-x-8 md:hidden'>
            <div className='space-y-8'>
              <div className='text-base leading-5'>
                <h3 className='font-semibold tracking-[-0.03em]'>Navigation</h3>
                <ul className='mt-4 space-y-4 '>
                  {navigationLinks.map(item => (
                    <li key={item}>
                      <Link href='/' className='font-medium tracking-[-0.02em]'>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='text-base leading-5'>
                <h3 className='font-semibold tracking-[-0.03em]'>Support</h3>
                <ul className='mt-4 space-y-4 '>
                  {supportLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className='font-medium tracking-[-0.02em]'>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='space-y-8'>
              <div className='text-base leading-5'>
                <h3 className='font-semibold tracking-[-0.03em]'>Legal</h3>
                <ul className='mt-4 space-y-4 '>
                  {legalLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className='font-medium tracking-[-0.02em]'>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='text-base leading-5'>
                <h3 className='font-semibold tracking-[-0.03em]'>Contact</h3>
                <ul className='mt-4 space-y-3 leading-tight'>
                  <li>
                    <a
                      href='mailto:info@suuvo.com'
                      className='inline-flex items-center gap-2 font-medium tracking-[-0.02em] '
                    >
                      <MailIcon />
                      <span className='break-all'>info@suuvo.com</span>
                    </a>
                  </li>
                  <li>
                    <span className='inline-flex items-center gap-2 font-medium tracking-[-0.02em]'>
                      <LocationIcon />
                      <span>Worldwide</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='hidden text-[22px] md:grid md:grid-cols-4 md:gap-x-8 lg::gap-x-10'>
            <div className='text-base leading-5'>
              <h3 className='font-semibold tracking-[-0.03em]'>Navigation</h3>
              <ul className='mt-4 space-y-4 '>
                {navigationLinks.map(item => (
                  <li key={item}>
                    <Link href='/' className='font-medium leading-6 tracking-[-0.02em]'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-base leading-5'>
              <h3 className='font-semibold tracking-[-0.03em]'>Legal</h3>
              <ul className='mt-4 space-y-4 '>
                {legalLinks.map((item,index) => (
                  <li key={index}>
                    <Link href={item.url} className='font-medium leading-6 tracking-[-0.02em]'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-base leading-5'>
              <h3 className='font-semibold tracking-[-0.03em]'>Support</h3>
              <ul className='mt-4 space-y-4 '>
                {supportLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className='font-medium leading-6 tracking-[-0.02em]'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-base leading-5'>
              <h3 className='font-semibold tracking-[-0.03em]'>Contact</h3>
              <ul className='mt-4 space-y-3 leading-tight'>
                <li>
                  <a
                    href='mailto:info@suuvo.com'
                    className='inline-flex items-start gap-2 font-medium tracking-[-0.02em]'
                  >
                    <MailIcon />
                    <span className='break-all'>info@suuvo.com</span>
                  </a>
                </li>
                <li>
                  <span className='inline-flex items-center gap-2 font-medium tracking-[-0.02em]'>
                    <LocationIcon />
                    <span>Worldwide</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-black/10 pt-6 md:mt-12 md:pt-7 pb-8'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-base leading-5 font-medium tracking-[-0.02em]'>
            <p className=''>
              &copy; {new Date().getFullYear()}
              <Link href='/'> Suuvo</Link>. All rights reserved.
            </p>

            <div className='flex items-center gap-5'>
              <span className=''>Follow Us</span>

              <div className='flex items-center gap-3'>
                <a
                  href='https://x.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit our X profile'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(137.47deg,_rgba(255,255,255,0.3)_31.19%,_rgba(254,254,255,0.4)_33.75%,_rgba(252,253,255,0.5)_36.32%,_rgba(251,252,255,0.6)_38.88%,_rgba(249,251,255,0.7)_41.44%,_rgba(248,250,255,0.8)_44%,_rgba(247,250,255,0.82)_47.61%,_rgba(247,249,255,0.84)_51.22%,_rgba(246,249,255,0.86)_54.83%,_rgba(245,249,255,0.88)_58.44%,_rgba(245,248,255,0.9)_62.05%,_rgba(247,250,255,0.76)_65.68%,_rgba(249,251,255,0.62)_69.31%,_rgba(251,252,255,0.48)_72.94%,_rgba(253,254,255,0.34)_76.56%,_rgba(255,255,255,0.2)_80.19%)] shadow-[9.25px_13.75px_2px_0px_rgba(255,223,220,0.13),inset_0.75px_3px_7.7px_0px_rgba(255,213,209,0.43),inset_-1px_-3.25px_9.07px_0px_rgba(255,255,255,1)] backdrop-blur-[1px] transition-transform hover:-translate-y-0.5'
                >
                  <XIcon />
                </a>

                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit our Instagram profile'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(137.47deg,rgba(255,255,255,0.3)_31.19%,rgba(254,254,255,0.4)_33.75%,rgba(252,253,255,0.5)_36.32%,rgba(251,252,255,0.6)_38.88%,rgba(249,251,255,0.7)_41.44%,rgba(248,250,255,0.8)_44%,rgba(247,250,255,0.82)_47.61%,rgba(247,249,255,0.84)_51.22%,rgba(246,249,255,0.86)_54.83%,rgba(245,249,255,0.88)_58.44%,rgba(245,248,255,0.9)_62.05%,rgba(247,250,255,0.76)_65.68%,rgba(249,251,255,0.62)_69.31%,rgba(251,252,255,0.48)_72.94%,rgba(253,254,255,0.34)_76.56%,rgba(255,255,255,0.2)_80.19%)] shadow-[9.25px_13.75px_2px_0px_rgba(255,223,220,0.13),inset_0.75px_3px_7.7px_0px_rgba(255,213,209,0.43),inset_-1px_-3.25px_9.07px_0px_rgba(255,255,255,1)] backdrop-blur-[1px] transition-transform hover:-translate-y-0.5'
                >
                  <InstagramIcon />
                </a>

                <a
                  href='https://youtube.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit our YouTube channel'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(137.47deg,_rgba(255,255,255,0.3)_31.19%,_rgba(254,254,255,0.4)_33.75%,_rgba(252,253,255,0.5)_36.32%,_rgba(251,252,255,0.6)_38.88%,_rgba(249,251,255,0.7)_41.44%,_rgba(248,250,255,0.8)_44%,_rgba(247,250,255,0.82)_47.61%,_rgba(247,249,255,0.84)_51.22%,_rgba(246,249,255,0.86)_54.83%,_rgba(245,249,255,0.88)_58.44%,_rgba(245,248,255,0.9)_62.05%,_rgba(247,250,255,0.76)_65.68%,_rgba(249,251,255,0.62)_69.31%,_rgba(251,252,255,0.48)_72.94%,_rgba(253,254,255,0.34)_76.56%,_rgba(255,255,255,0.2)_80.19%)] shadow-[9.25px_13.75px_2px_0px_rgba(255,223,220,0.13),inset_0.75px_3px_7.7px_0px_rgba(255,213,209,0.43),inset_-1px_-3.25px_9.07px_0px_rgba(255,255,255,1)] backdrop-blur-[1px] transition-transform hover:-translate-y-0.5'
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
