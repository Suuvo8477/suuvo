'use client'

import Image from 'next/image'
import Typography from '@/components/typography'
import { FeatureCard } from '@/types'
import { CheckBadgeIcon, CircularArrow } from '@/components/icons'

type ScrollStackCardProps = {
  card: FeatureCard
  cardIndex: number
  totalCards: number
}

export default function ScrollStackCard({ card, cardIndex, totalCards }: ScrollStackCardProps) {
  return (
    <div className='md:sticky md:top-30 w-full'>
      {/* Tab Label Container - Using Grid for perfect gaps */}
      <div className='grid grid-cols-4 gap-0.5 w-full h-9 translate-y-px relative pointer-events-none'>
        <div
          className={`w-full h-full px-6 flex items-center justify-center lg:justify-start text-center lg:text-left whitespace-nowrap pointer-events-auto rounded-tl-[9px] rounded-tr-[20px] ${card.labelBgClass}`}
          style={{ gridColumnStart: cardIndex + 1 }}
        >
          <Typography variant='p4'>
            <span className='hidden lg:inline'>Feature / </span>0{cardIndex + 1}
          </Typography>
        </div>
      </div>

      {/* Main Card Body h-214.5 lg:h-151.5  */}
      <div
        className={`relative w-full overflow-hidden p-5 lg:p-10 ${card?.className ?? ''}
          ${
            cardIndex === 0
              ? 'rounded-tr-4xl rounded-bl-4xl rounded-br-4xl rounded-tl-none'
              : cardIndex === totalCards - 1
                ? 'rounded-tl-4xl rounded-bl-4xl rounded-br-4xl rounded-tr-none'
                : 'rounded-4xl'
          }`}
      >
        <div
          className={`grid grid-cols-1 gap-9 lg:gap-5 ${cardIndex === 3 ? 'lg:grid-cols-[515px_auto]' : 'lg:grid-cols-[10fr_9fr]'}`}
        >
          {/* Left Content */}
          <div
            className={`flex flex-col justify-center gap-6 lg:gap-8 relative z-10 pb-20 lg:py-15.5 ${cardIndex % 2 === 0 ? 'pt-9.5' : 'pt-5'}`}
          >
            <div className={cardIndex === totalCards - 1 ? 'max-w-130' : 'max-w-125'}>
              <Typography variant='h3'>{card.title}</Typography>

              <Typography variant='p3' className='mt-3 lg:mt-5'>
                {card.description}
              </Typography>
            </div>

            <div className='flex flex-col gap-3 lg:gap-4'>
              <Typography variant='h5'>{card.featureTitle}</Typography>

              <div className='flex flex-col gap-2 lg:gap-3'>
                {card.features.map((feature, i) => (
                  <div key={i} className='flex items-start gap-2 lg:gap-2.5'>
                    <CheckBadgeIcon className='size-5' />
                    <Typography variant='p3'>{feature}</Typography>
                  </div>
                ))}
              </div>
            </div>

            <Image
              src={card.decorEmoji1}
              alt='emoji'
              width={48}
              height={48}
              className={`absolute size-8 lg:size-12 ${cardIndex === 0 ? 'bottom-6 left-4 rotate-36' : cardIndex === 1 ? 'top-8 lg:top-22 right-0 lg:right-14 -rotate-32' : cardIndex === 2 ? 'bottom-6 lg:bottom-52 left-4 lg:left-auto lg:right-8 -rotate-4' : 'bottom-6 left-4 -rotate-19'}`}
            />
            <Image
              src={card.decorEmoji2}
              alt='emoji'
              width={48}
              height={48}
              className={`absolute size-8 lg:size-12 ${cardIndex === 0 ? 'bottom-12 right-4 -rotate-30' : cardIndex === 1 ? 'right-9 lg:right-46 bottom-12 lg:bottom-4' : cardIndex === 2 ? 'bottom-12 lg:bottom-2 right-4 lg:right-auto lg:left-8 -rotate-22' : 'bottom-1/2 lg:bottom-50 right-8 lg:right-16 -rotate-25'}`}
            />

            <CircularArrow
              className={`absolute ${cardIndex === 0 ? 'top-3 lg:top-24 left-28 lg:left-56 rotate-0 lg:rotate-21 text-[#020070]' : cardIndex === 1 ? 'left-4 lg:left-14 bottom-8 lg:bottom-12 -rotate-160 lg:-rotate-90 scale-x-[-1] text-white' : cardIndex === 2 ? 'top-0 left-30 lg:top-26 lg:left-76 lg:rotate-21' : 'left-37 lg:left-90 bottom-8 lg:bottom-13 -rotate-160 lg:rotate-90 scale-x-[-1] lg:scale-x-100 text-white'}`}
            />
            <p
              className={`absolute font-shadow-light ${cardIndex === 0 ? 'top-4 lg:top-30 left-40 lg:left-66 text-[#020070]' : cardIndex === 1 ? 'left-15 lg:left-10 bottom-7 lg:bottom-5 text-white' : cardIndex === 2 ? 'top-0 lg:top-32 left-43 lg:left-84' : 'left-48 lg:left-96 bottom-7 text-white'}`}
            >
              {card.decorText}
            </p>
          </div>

          {/* Right Content: Mockups */}
          <div className='w-full max-w-113 mx-auto lg:ms-auto lg:mr-auto transition-transform duration-700 md:hover:scale-105'>
            <Image
              src={card.mockupSrc || '/images/thumb.png'}
              alt={card.title}
              width={452}
              height={522}
              className='object-contain object-center w-full h-auto'
              priority={cardIndex === 0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
