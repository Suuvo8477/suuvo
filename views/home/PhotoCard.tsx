import React from 'react'
import Image from 'next/image'
import { PlayIcon } from '@/components/icons'

type PhotoCardProps = {
  src: string
  showPlay?: boolean
  className?: string
  rotate?: string
  size?: string
}

export default function PhotoCard({
  src,
  showPlay = false,
  className = '',
  rotate = 'rotate-0',
  size = 'sm'
}: PhotoCardProps): React.ReactElement {
  return (
    <div
      className={`relative rounded-lg lg:rounded-[18px] overflow-hidden cursor-pointer shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-12 hover:rotate-0 hover:z-10 ${
        size === 'lg' ? 'w-28 h-36 sm:w-36 sm:h-48 lg:w-62.5 lg:h-67.5' : 'w-24 h-32 sm:w-32 sm:h-44 lg:w-62.5 lg:h-60'
      } ${rotate} ${className}`}
    >
      <Image src={src} alt='photo' fill sizes='600px' className='object-cover object-top' />

      <div className='absolute inset-0 bg-linear-to-b from-black/10 to-black/45' />

      {showPlay && (
        <div className='absolute top-3 left-3'>
          <PlayIcon className='w-2 h-1.75 lg:w-6 lg:h-5 text-white' />
        </div>
      )}
    </div>
  )
}
