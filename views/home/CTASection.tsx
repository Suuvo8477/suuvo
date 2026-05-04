import React from 'react'
import PhotoCard from './PhotoCard'
import Button from '@/components/button'
import { ListIcon } from '@/components/icons'

type Card = {
  id: number
  src: string
  showPlay: boolean
  rotate: string
  className: string
  size?: string
}

const cards: Card[] = [
  {
    id: 1,
    src: '/assets/images/image-1.png',
    showPlay: true,
    rotate: '-rotate-[12deg]',
    className: 'translate-x-8 z-[4] translate-y-8'
  },
  {
    id: 2,
    src: '/assets/images/image-2.png',
    showPlay: true,
    rotate: '-rotate-[0deg]',
    className: 'z-[3]',
    size: 'lg'
  },
  {
    id: 3,
    src: '/assets/images/image-3.png',
    showPlay: true,
    rotate: 'rotate-[-8deg]',
    className: '-translate-x-4 z-[2] translate-y-4'
  },
  {
    id: 4,
    src: '/assets/images/image-4-2.png',
    showPlay: true,
    rotate: 'rotate-[23deg]',
    className: '-translate-x-8 z-[1] translate-y-10'
  }
]

export default function CTASection(): React.ReactElement {
  return (
    <section className='pb-15 md:pb-20 lg:pb-30 s-container'>
      <div className='rounded-[20px] lg:rounded-4xl  bg-[linear-gradient(90deg,#EF9F22_0%,#DE127B_100%)] pt-8 lg:pt-16 overflow-hidden px-5'>
        <div className=''>
          <h2 className='font-semibold text-[30px] md:text-[45px] lg:text-[64px] leading-9 md:leading-14 lg:leading-17 tracking-[-0.034em] text-(--text-secondary) text-center mb-4 lg:mb-6'>
            Pre-Register & <br className='hidden md:block lg:block' /> Get Exclusive Rewards!
          </h2>
          <ul className='flex flex-col md:flex-row lg:flex-row gap-3 lg:gap-5 justify-center mb-6 lg:mb-8 px-3'>
            {['Free Coins to kickstart your journey', 'Exclusive Welcome Gifts', 'Priority Access to new feature'].map(
              item => (
                <li key={item} className='flex items-center gap-2.5'>
                  <ListIcon className='text-(--text-secondary)' />
                  <span className='font-medium text-[14px] lg:text-[16px] leading-5.5 lg:leading-6 tracking-[-0.02em] text-(--text-secondary)'>
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className='flex items-center bg-white rounded-full pl-6 pr-2 lg:pr-1.5 py-2 w-full max-w-121 mx-auto mb-8 lg:mb-15'>
          <input
            type='email'
            placeholder='Email Address'
            className='bg-transparent outline-none text-text-primary placeholder:text-text-primary font-medium text-[16px] w-full leading-6 tracking-[-0.02em]'
          />
          <Button className='min-w-30 h-11! text-sm!'>Submit</Button>
        </div>
        <div className='relative mt-8 flex items-end justify-center'>
          <div className='flex items-end justify-center -mb-16 sm:-mb-20 lg:-mb-25'>
            {cards.map(card => (
              <PhotoCard key={card.id} {...card} />
            ))}
          </div>
          <div className='pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-transparent' />
        </div>
      </div>
    </section>
  )
}
