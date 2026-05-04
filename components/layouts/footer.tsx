import React from 'react'
import Link from 'next/link'

import { InstagramIcon, LocationIcon, MailIcon, XIcon, YoutubeIcon } from '@/components/icons'
import Logo from '@/components/shared/logo'
import Button from '@/components/button'
import CTASection from '@/views/home/CTASection'
import WishListButton from '@/views/shared/WishListButton'

const navigationLinks: string[] = ['Home', 'Momentz', 'Live', 'PK Battles', 'Shop', 'Love Notes', 'AI Features']

const legalLinks: string[] = ['Privacy Policy', 'Terms & condition', 'Community Guidelines', 'Creator Policies']

const supportLinks: string[] = ['Help Center', 'Contact Support', 'Report a Problem']

const Footer: React.FC = () => {
  return (
    <footer className='bg-[url(/images/footer-bg.png)] bg-cover bg-bottom bg-no-repeat'>
      <CTASection />
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
                  {supportLinks.map(item => (
                    <li key={item}>
                      <Link href='/' className='font-medium tracking-[-0.02em]'>
                        {item}
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
                  {legalLinks.map(item => (
                    <li key={item}>
                      <Link href='/' className='font-medium tracking-[-0.02em]'>
                        {item}
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
                {legalLinks.map(item => (
                  <li key={item}>
                    <Link href='/' className='font-medium leading-6 tracking-[-0.02em]'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-base leading-5'>
              <h3 className='font-semibold tracking-[-0.03em]'>Support</h3>
              <ul className='mt-4 space-y-4 '>
                {supportLinks.map(item => (
                  <li key={item}>
                    <Link href='/' className='font-medium leading-6 tracking-[-0.02em]'>
                      {item}
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
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition-transform hover:-translate-y-0.5'
                >
                  <XIcon />
                </a>

                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit our Instagram profile'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition-transform hover:-translate-y-0.5'
                >
                  <InstagramIcon />
                </a>

                <a
                  href='https://youtube.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit our YouTube channel'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition-transform hover:-translate-y-0.5'
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
