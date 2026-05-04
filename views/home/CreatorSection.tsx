'use client'

import React, { useEffect, useRef } from 'react'
import Button from '@/components/button'
import Image from 'next/image'

type Creator = {
  id: number
  src: string
  alt: string
  border: string
  rotate: string
  zIndex: string
  desktopPos: string
}

const creators: Creator[] = [
  {
    id: 1,
    src: '/assets/images/image-4.png',
    alt: 'Creator 1',
    border: '#FFDDA3',
    rotate: '-rotate-14',
    zIndex: 'z-10',
    desktopPos: 'self-start mt-14  max-md:w-[33%] -ml-[10%] mr-[10%] sm:m-0'
  },
  {
    id: 2,
    src: '/assets/images/img-5.png',
    alt: 'Creator 2',
    border: '#A8D1FF',
    rotate: 'rotate-8',
    zIndex: 'z-20',
    desktopPos: 'self-start mt-24 -ml-10  max-md:w-[33%]  mr-[3%] sm:mr-0'
  },
  {
    id: 3,
    src: '/assets/images/img-6.png',
    alt: 'Creator 3',
    border: '#A6A3FF',
    rotate: '-rotate-12',
    zIndex: 'z-30',
    desktopPos: 'self-start mt-0 -ml-10  max-md:w-[33%]'
  },
  {
    id: 4,
    src: '/assets/images/img-7.png',
    alt: 'Creator 4',
    border: '#FF99CB',
    rotate: 'rotate-7',
    zIndex: 'z-50',
    desktopPos: 'self-start -mt-12 md:mt-20 -ml-5 sm:-ml-10  max-md:w-[33%]'
  },
  {
    id: 5,
    src: '/assets/images/img-8.png',
    alt: 'Creator 5',
    border: '#FFDDA3',
    rotate: 'rotate-0',
    zIndex: 'z-60',
    desktopPos: 'self-start -mt-15 sm:-mt-24 md:mt-10 ml-10 md:-ml-10 max-md:w-[33%] '
  }
]

export default function CreatorSection(): React.ReactElement {
  const desktopPathRef = useRef<SVGPathElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const path = desktopPathRef.current
    const section = sectionRef.current

    if (!path || !section) return

    const totalLength = path.getTotalLength()

    path.style.strokeDasharray = `${totalLength}`
    path.style.strokeDashoffset = `${totalLength}`
    path.style.transition = 'none'

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const start = windowHeight * 0.4
      const end = -sectionHeight * 0.1
      const progress = Math.min(Math.max((start - sectionTop) / (start - end), 0), 1)

      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section ref={sectionRef} className='w-full py-12 md:py-23 relative'>
      {/* Heading */}
      <div className='text-center mb-15 px-4  relative w-max mx-auto max-w-full'>
        <h2 className='font-semibold text-[30px] leading-10.5 md:text-[64px] md:leading-17 tracking-[-0.034em] text-black'>
          The Future Belongs
          <br className='hidden min-[390px]:block' />
          to Creators
        </h2>
        <div className='absolute bottom-0 right-0 translate-1/4 md:translate-x-full'>
          <Image src='/assets/icons/emoji.svg' alt='' width={60} height={60} />
        </div>
      </div>

      {/* ===== DESKTOP CARDS ===== */}
      <div className='relative flex items-center justify-center py-10  px-4 overflow-hidden'>
        <svg
          className='absolute inset-0 max-md:translate-y-1/2 w-[900px] md:w-full h-40 sm:h-50 md:h-full pointer-events-none'
          viewBox='0 0 1440 236'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            ref={desktopPathRef}
            opacity='0.7'
            d='M-13 212.055C-13 212.055 87.0382 252.654 146.385 206.263C205.731 159.87 212.847 36.2451 323.615 9.25511C434.383 -17.7349 782.323 206.455 903.923 206.455C1008.82 206.455 1168.92 36.9793 1316.85 36.9793C1415.78 36.9793 1447.92 57.1695 1447.92 57.1695'
            stroke='url(#waveD)'
            strokeWidth='10'
            strokeLinecap='square'
            fill='none'
          />
          <defs>
            <linearGradient id='waveD' x1='717.462' y1='7' x2='717.462' y2='228.498' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#FF99CB' />
              <stop offset='1' stopColor='#FF3D9C' />
            </linearGradient>
          </defs>
        </svg>

        <div className='relative flex items-end justify-center w-full max-w-full flex-wrap md:flex-nowrap md:max-w-5xl mx-auto pb-10 '>
          {creators.map((creator, index) => {
            const isHovered = hoveredIndex === index
            const isAnyHovered = hoveredIndex !== null

            let translateX = 0
            let scale = 1
            let zIndex = parseInt(creator.zIndex.replace('z-', ''))
            let rotate = '' // Default to class

            if (isHovered && !isMobile) {
              rotate = 'rotate(0deg)'
              scale = 1.05
              zIndex = 100
            } else if (isAnyHovered && !isMobile) {
              const direction = index < (hoveredIndex ?? 0) ? -1 : 1

              translateX = direction * 40
              scale = 0.95
            }

            return (
              <div
                key={creator.id}
                className={`relative ${creator.desktopPos} ${!isHovered ? creator.rotate : ''} transition-all duration-500 ease-in-out shrink-0`}
                style={{
                  zIndex,
                  transform: `translateX(${translateX}px) scale(${scale}) ${rotate}`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className='rounded-3xl overflow-hidden transition-all duration-500 sm:w-[240px] sm:h-[270px] w-[175px] h-[197px]'
                  style={{
                    padding: '12px',
                    background: creator.border,
                    boxShadow:
                      isHovered && !isMobile ? `0 20px 48px ${creator.border}88` : `0 8px 32px ${creator.border}55`
                  }}
                >
                  <Image
                    src={creator.src}
                    alt={creator.alt}
                    width={240}
                    height={270}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                </div>
              </div>
            )
          })}
          <Image
            className='absolute -bottom-10 left-0 pointer-events-none'
            src='/assets/icons/signeture.svg'
            alt=''
            width={150}
            height={73}
          />
        </div>
      </div>

      <div className='max-w-135 mx-auto text-center  px-4'>
        <p className='text-black font-medium text-[16px] leading-6 mb-6'>
          Built to empower creators with tools, freedom, and opportunities to grow, monetize content, and build
          meaningful, lasting digital presence.
        </p>
        <Button variant='primary' className='min-w-56.25'>
          Join Waitlist
        </Button>
      </div>
    </section>
  )
}
