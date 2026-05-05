'use client'

import React from 'react'

import Logo from '@/components/shared/logo'
import Button from '@/components/button'
import Link from 'next/link'
import Typography from '@/components/typography'
import { MenuBarsIcon, CloseIcon } from '@/components/icons'
import MobileMenu from './mobile-menu'
import WishListButton from '@/views/shared/WishListButton'

type MenuItem = {
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Overview', href: '/#overview' },
  { label: 'Feature', href: '/#features' },
  { label: 'FAQs', href: '/#faqs' }
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll() // Check scroll position on mount

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='w-full h-0 sticky inset-x-0 top-0 z-102'>
      <div className='relative'>
        <header
          className={`h-20 md:h-24 flex items-center absolute inset-x-0 top-0 z-101 transition-colors duration-300 ${isScrolled ? 'bg-gradient-yellow-start/10 backdrop-blur-md shadow-md shadow-black/10' : 'bg-transparent'}'}`}
        >
          <div className='s-container'>
            <div className='flex w-full justify-between items-center gap-5'>
              <Logo className='w-29 h-7.5 md:w-39 md:h-10 lg:w-46 lg:h-12' />

              <div className='hidden md:flex gap-6 py-3 px-7 rounded-full relative shadow-[inset_1px_1px_0_0_#ffffff,inset_-9px_-9px_15px_0_#ffd7d74f,1px_1px_0_0_#ffffff] bg-white/20'>
                {menuItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='bg-[linear-gradient(#000,#000)] text-transparent font-medium bg-clip-text! hover:bg-linear-to-r hover:from-[#EF9F22] hover:to-[#DE127B] hover:bg-clip-text! transition-all! duration-300!'
                  >
                    {item.label}
                    {/* <Typography></Typography> */}
                  </Link>
                ))}
              </div>

              <WishListButton variant='secondary' className='min-w-46 hidden! md:inline-flex!' />
              <Button
                variant='secondary'
                className='md:hidden! size-8! p-0!'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
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
      </div>
    </div>
  )
}

export default Header
