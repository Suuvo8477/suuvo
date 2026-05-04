'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typography from '@/components/typography'

const cards = [
  {
    title: 'Creator Subscriptions',
    description: 'Tiered recurring monetization',
    color: 'bg-[linear-gradient(180deg,rgb(255,153,203)_0%,rgb(255,61,156)_100%)]',
    icon: '/images/card-icon-01.png',
    image: null,
    vector: '/images/Vector-1.png',
    initialRotate: -6,
    initialY: 16,
    className: ''
  },
  {
    title: 'VIP Rooms',
    description: 'Premium gated experiences',
    color: 'bg-[linear-gradient(180deg,rgb(255,214,143)_0%,rgb(255,183,61)_100%)]',
    icon: '/images/card-icon-02.png',
    image: '/images/vip-rooms.png',
    vector: null,
    initialRotate: 5,
    initialY: 0,
    className: 'z-10'
  },
  {
    title: 'Wallet & Rewards System',
    description: 'Transparent earnings & rewards',
    color: 'bg-[linear-gradient(180deg,rgb(166,163,255)_0%,rgb(100,95,254)_100%)]',
    icon: '/images/card-icon-03.png',
    image: null,
    vector: '/images/Vector-2.png',
    initialRotate: 3.5,
    initialY: 24,
    className: '-mt-10 md:mt-0 z-2'
  },
  {
    title: 'Business Tools',
    description: 'Creator business tool, analytics',
    color: 'bg-[linear-gradient(0deg,rgb(31,136,255)_0%,rgb(112,180,255)_100%)]',
    icon: '/images/card-icon-04.png',
    image: '/images/buseness-tools.png',
    vector: null,
    initialRotate: -6,
    initialY: 8,
    className: '-mt-10 md:mt-0'
  }
]

const LetterReveal = ({ text, progress, range }: { text: string; progress: number; range: [number, number] }) => {
  const [start, end] = range
  const words = text.split(' ')
  const totalChars = text.length
  let charCount = 0

  return (
    <>
      {words.map((word, wordIdx) => {
        const isLastWord = wordIdx === words.length - 1

        return (
          <React.Fragment key={wordIdx}>
            <span className='inline-block whitespace-nowrap'>
              {word.split('').map((char, charIdx) => {
                const threshold = start + (charCount / totalChars) * (end - start)
                const opacity = progress >= threshold ? 1 : 0.1

                charCount++

                return (
                  <span key={charIdx} className='inline transition-opacity duration-150' style={{ opacity }}>
                    {char}
                  </span>
                )
              })}
            </span>
            {!isLastWord && (
              <span
                className='inline transition-opacity duration-150'
                style={{
                  opacity: progress >= start + (charCount / totalChars) * (end - start) ? 1 : 0.1,
                  whiteSpace: 'pre'
                }}
              >
                {' '}
                {(() => {
                  charCount++

                  return null
                })()}
              </span>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default function SocialSection() {
  const [progress, setProgress] = React.useState(0)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [isMobile, setIsMobile] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const orangePathRef = useRef<SVGPathElement>(null)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const start = windowHeight * 0.9
      const end = windowHeight * 0.2
      const currentProgress = (start - rect.top) / (start - end)

      setProgress(Math.max(0, Math.min(1, currentProgress)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const path = orangePathRef.current

    if (!path) return

    const totalLength = path.getTotalLength()

    path.style.strokeDasharray = `${totalLength}`
    path.style.strokeDashoffset = `${totalLength}`
    path.style.transition = 'none'

    const handleScroll = () => {
      const rect = path.closest('svg')!.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const svgHeight = rect.height

      const start = windowHeight * 0.9
      const end = -svgHeight * 0.5

      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1)

      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const part1 = 'A social platform '
  const part2 = ' for real connections, meaningful conversations, '
  const part3 = ' and privacy-first experiences without noise or distractions.'

  const p1Range: [number, number] = [0, 0.25]
  const img1Point = 0.3
  const p2Range: [number, number] = [0.35, 0.65]
  const emojiPoint = 0.7
  const p3Range: [number, number] = [0.75, 1.0]

  return (
    <section id='overview' ref={sectionRef} className='pt-10 md:pt-15 relative'>
      <div className='absolute right-0 top-[20%] max-w-[50%]'>
        <svg
          width='358'
          height='1202'
          className='max-w-full'
          viewBox='0 0 358 1202'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            ref={orangePathRef}
            opacity='0.4'
            d='M478.089 5.495C342.7 64.8604 59.8831 258.931 11.7262 560.287C-32.898 839.538 195.289 753.749 280.594 662.716C310.362 630.949 336.322 582.819 313.627 565.062C295.028 550.51 255.795 592.443 243.906 648.338C221.773 752.392 247.3 959.329 454.644 1197.72'
            stroke='#EF9D13'
            strokeWidth='12'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <div className='absolute right-0 top-1/2 divanslate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-50'>
        <Image
          src='/images/dots.webp'
          alt='dots'
          width={1000}
          height={1000}
          className='object-contain object-right h-full w-auto grayscale opacity-20'
        />
      </div>
      <div className='md:overflow-hidden pb-20 sm:pb-35'>
        <div className='s-container pb-20 -mb-20'>
          <div className='max-w-[833px] relative '>
            <Typography
              variant='h2'
              className='text-4xl/[1.2]! md:text-[56px]! lg:text-[64px]! font-semibold text-text-primary flex flex-wrap items-center'
            >
              <LetterReveal text={part1} progress={progress} range={p1Range} />

              <span
                className={`relative inline align-middle transition-all duration-300 leading-9 lg:leading-17 ${progress >= img1Point ? 'opacity-100 scale-100' : 'opacity-[0.1] scale-90'}`}
              >
                <Image
                  src='/images/text-reveal-image.png'
                  alt='social'
                  width={120}
                  height={60}
                  className='rounded-full w-16 h-8 md:w-30 md:h-15 object-cover lg:w-30 lg:h-15 inline-block'
                />
              </span>

              <LetterReveal text={part2} progress={progress} range={p2Range} />

              <span
                className={`inline align-middle transition-all duration-300 ${progress >= emojiPoint ? 'opacity-100 scale-100' : 'opacity-[0.1] scale-90'}`}
              >
                <Image
                  src='/assets/icons/smileEmoji.svg'
                  alt='smile'
                  height={50}
                  width={50}
                  className='w-7.5 h-7.5 md:w-10 md:h-10 lg:w-14 lg:h-14 inline-block'
                />
              </span>

              <LetterReveal text={part3} progress={progress} range={p3Range} />
            </Typography>

            <span
              className={`absolute xl:top-1/4 left-auto right-0 xl:left-full xl:right-auto inline-block transition-all duration-300 w-[230px] sm:w-[280px] aspect-[4.67/1]`}
            >
              <Image
                src='/images/text-reveal-image-02.png'
                alt='social'
                fill
                className='rounded-full h-full w-full object-contain'
              />
            </span>
          </div>

          <div className='mt-24 md:mt-15 grid grid-cols-2 md:flex justify-cent  relative sm:gap-6 md:gap-0 px-4'>
            {cards.map((card, index) => {
              const isHovered = hoveredIndex === index
              const isAnyHovered = hoveredIndex !== null

              let rotate = card.initialRotate
              let translateX = 0
              let translateY = card.initialY
              let zIndex = 10 + index

              if (isHovered && !isMobile) {
                rotate = 0
                zIndex = 100
              } else if (isAnyHovered && !isMobile) {
                const direction = index < (hoveredIndex ?? 0) ? -1 : 1

                translateX = direction * 80
                translateY = card.initialY + 20
                zIndex = 10 + index
              }

              return (
                <div
                  key={index}
                  className={`relative w-full md:w-84 md:aspect-[0.77/1] md:-ml-12 first:ml-0 group transition-all duration-500 ${card.className}`}
                  style={{ zIndex }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className='absolute inset-0 z-10' />

                  <div
                    className={`w-full h-full  rounded-2xl sm:rounded-2xl md:rounded-[30px] p-3 md:p-5 flex flex-col justify-end transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) relative overflow-hidden ${card.color} ${
                      progress > 0.8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
                      boxShadow: isHovered && !isMobile ? '0 20px 40px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    {/* Background Vector Image */}
                    {card.vector && (
                      <div className='absolute inset-0 pointer-events-none opacity-40'>
                        <Image src={card.vector} alt='bg-vector' fill className='object-contain scale-110' />
                      </div>
                    )}

                    {/* Card Icon */}
                    <div className='w-12 h-12 mb-1.5 md:mb-6 relative z-10'>
                      <Image src={card.icon} alt='icon' fill className='object-contain' />
                    </div>

                    {/* Card Content */}
                    <Typography
                      variant='h4'
                      className='text-text-primary mb-2 text-base/[1.2]! lg:text-[32px]!  relative z-10 font-semibold'
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant='p2'
                      className='text-text-primary/70 mb-2.5 md:mb-6 relative z-10 text-[9px]/[1.2]! lg:text-[18px]! lg:leading-5'
                    >
                      {card.description}
                    </Typography>

                    {/* Card Image if exists */}
                    {card.image && (
                      <div className='relative rounded-b-[20px] overflow-hidden w-full aspect-[1.53/1] z-10 min-h-20'>
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={336}
                          height={190}
                          className='w-full h-full rounded-[20px] object-cover'
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
