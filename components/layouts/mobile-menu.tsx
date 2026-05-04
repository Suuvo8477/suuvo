'use client'

import React from 'react'
import Link from 'next/link'
import Typography from '@/components/typography'
import { menuItems } from './header'
import WishListButton from '@/views/shared/WishListButton'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute top-full inset-x-4 z-50 bg-white rounded-[20px] py-8 px-4 shadow-[0_7px_15px_rgba(0,0,0,0.04)] flex flex-col items-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className='flex flex-col items-center gap-7 w-full'>
        {menuItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className='text-primary hover:underline font-medium transition-colors duration-300'
          >
            <Typography variant='p1' className='text-[18px] font-medium tracking-tight'>
              {item.label}
            </Typography>
          </Link>
        ))}
      </div>

      <WishListButton onClick={onClose} className='w-full h-14!' />
    </div>
  )
}

export default MobileMenu
