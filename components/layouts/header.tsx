'use client'

import React from 'react'

import Logo from '@/components/shared/logo'
import Button from '@/components/button'
import Link from 'next/link'
import Typography from '@/components/typography'
import { MenuBarsIcon, CloseIcon } from '@/components/icons'
import MobileMenu from './mobile-menu'

type MenuItem = {
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Overview', href: '/#overview' },
  { label: 'Feature', href: '/#features' },
  { label: 'FAQ', href: '/#faqs' }
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`h-20 md:h-24 flex items-center fixed inset-x-0 top-0 z-100 ${isScrolled ? 'bg-gradient-yellow-start/10 backdrop-blur-md shadow-md' : 'bg-transparent'} transition-colors duration-300`}
    >
      <div className='s-container'>
        <div className='flex w-full justify-between items-center gap-5'>
          <Logo className='w-29 h-7.5 md:w-39 md:h-10 lg:w-46 lg:h-12' />

          <div className='hidden md:flex gap-6 py-3 px-7 rounded-full relative shadow-[inset_1px_1px_0_0_rgb(255_255_255_/_1),inset_-9px_-9px_15px_0_rgb(255_215_215_/_31%),1px_1px_0_0_rgb(255_255_255_/_1)] bg-white/20'>
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='font-medium hover:[&>p]:text-primary! [&>p]:transition-all! [&>p]:duration-300!'
              >
                <Typography>{item.label}</Typography>
              </Link>
            ))}
          </div>

          <Button variant='secondary' className='min-w-46 hidden! md:inline-flex!'>
            Join Waitlist
          </Button>
          <Button variant='secondary' className='md:hidden! size-8! p-0!' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon className='size-5 text-foreground' />
            ) : (
              <MenuBarsIcon className='size-5 text-foreground' />
            )}
          </Button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header
