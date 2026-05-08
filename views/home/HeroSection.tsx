'use client'

import Typography from '@/components/typography'
import Image from 'next/image'
import React from 'react'
import WishListButton from '../shared/WishListButton'
import Button from '@/components/button'
import Link from 'next/link'

const HeroSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const targetPos = React.useRef({ x: 0, y: 0 })
  const currentPos = React.useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      }
    }

    let rafId: number

    const animate = () => {
      // Smoothing (Lerp)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mx', `${currentPos.current.x}`)
        containerRef.current.style.setProperty('--my', `${currentPos.current.y}`)
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id='home' className='pt-24 sm:pt-30 md:pt-38 pb-15 sm:pb-19.25 relative z-10' ref={containerRef}>
      <div className='absolute w-full h-full top-0 left-0 -z-10'>
        <Image
          src='/images/hero-bg.webp'
          alt='hero-bg'
          fill
          sizes='100vw'
          className='w-full h-auto object-cover object-center'
        />
      </div>

      <div className='s-container'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12'>
          {/* Left - Heading */}
          <div className='max-w-164.5'>
            <Typography variant='h1'>A Better Way to Be Social, For Real</Typography>
            <Typography variant='p3' className='mt-4 md:mt-5 lg:mt-6'>
              A new way to connect, create, and engage. Experience a social media platform that goes beyond likes—built
              for real connections, privacy, and engagement.
            </Typography>
          </div>

          <div className='flex flex-col md:flex-col-reverse gap-5 lg:gap-4 sm:max-w-fit max-w-full'>
           <WishListButton className='min-w-56.25 w-full lg:w-auto' />

            <div className='w-full flex justify-center sm:justify-start items-center gap-2'>
              <div className='flex'>
                {[3, 2, 1].map(i => (
                  <div key={i} className='-ml-2 first:ml-0 border border-white rounded-full'>
                    <Image
                      src={`/images/avatar-${i}.png`}
                      alt={`Avatar ${i}`}
                      width={50}
                      height={50}
                      className='size-8 md:size-10 lg:size-12 rounded-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <Typography variant='p2' className='lg:max-w-25'>
                100k+ Early Signups
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 md:mt-14 lg:mt-18 flex items-center justify-center gap-3 md:gap-[1.5%]'>
        {/* Column 1 */}
        <div
          className='rounded-[10px] md:rounded-[20px] lg:rounded-[30px] min-w-34.75 md:min-w-auto md:w-[18.5%] aspect-[0.61/1] will-change-transform'
          style={{
            transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
          }}
        >
          <Image
            src='/images/hero-1.png'
            alt='hero-1'
            width={285}
            height={467}
            className='w-full h-full object-cover object-center rounded-[10px] md:rounded-[20px] lg:rounded-[30px] '
          />
        </div>

        {/* Column 2 */}
        <div className='flex flex-col gap-3 md:gap-5.5 min-w-34.75 md:min-w-auto md:w-[18.5%] '>
          {/* Image 2 */}
          <div
            className=' w-full aspect-[0.87/1] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
            }}
          >
            <Image
              src='/images/hero-2.png'
              alt='hero-2'
              height={336}
              width={293}
              className='rounded-[10px] md:rounded-[20px] lg:rounded-[30px] w-full h-full object-cover object-center'
            />
          </div>
          {/* Stats Card 1 */}
          <div
            className=' aspect-[0.99/1] w-full flex flex-col justify-between px-3 py-3.5 md:px-6 md:py-7 rounded-[10px] md:rounded-[20px] lg:rounded-[30px] bg-linear-to-b from-gradient-pink-start to-gradient-pink-end text-white will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
            }}
          >
            <Typography variant='h2' className='text-[30px]/[1.4]!  sm:text-[36px]! md:text-[40px]! lg:text-[48px]! xl:text-[64px]!'>100k+</Typography>
            <div className='pt-4 border-t border-t-white/24'>
              <Typography variant='p1' className='text-[10px]/[1.2]! sm:text-xl!  max-w-50'>
                Early signups on the waitlist
              </Typography>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div
          className='rounded-[10px] md:rounded-[20px] lg:rounded-[30px] min-w-34.75 md:min-w-auto md:w-[18.5%]  aspect-[0.61/1] will-change-transform'
          style={{
            transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
          }}
        >
          <Image
            src='/images/hero-3.png'
            alt='hero-3'
            width={285}
            height={467}
            className='w-full h-full object-cover object-center rounded-[10px] md:rounded-[20px] lg:rounded-[30px]'
          />
        </div>

        {/* Column 4 */}
        <div className='flex flex-col gap-3 md:gap-5.5 min-w-34.75 md:min-w-auto md:w-[18.5%] '>
          {/* Stats Card 2 */}
          <div
            className=' aspect-[.99/1] w-full flex flex-col justify-between px-3 py-3.5 md:px-6 md:py-7 rounded-[10px] md:rounded-[20px] lg:rounded-[30px] bg-linear-to-b from-gradient-purple-start to-gradient-purple-end text-white will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
            }}
          >
            <Typography variant='h2' className='text-[30px]/[1.4]!  sm:text-[36px]! md:text-[40px]! lg:text-[48px]! xl:text-[64px]!'>30+</Typography>
            <div className='pt-1 sm:pt-4 border-t border-t-white/24'>
              <Typography variant='p1' className='text-[10px]/[1.2]! sm:text-xl! max-w-50'>
                Private communities getting ready
              </Typography>
            </div>
          </div>

          {/* Image 4 */}
          <div
            className=' aspect-[0.87/1] w-full rounded-[10px] md:rounded-[20px] lg:rounded-[30px] will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
            }}
          >
            <Image
              src='/images/hero-4.png'
              alt='hero-4'
              height={336}
              width={293}
              className='rounded-[10px] md:rounded-[20px] lg:rounded-[30px] w-full h-full object-cover object-center'
            />
          </div>
        </div>

        {/* Column 5 */}
        <div
          className='rounded-[10px] md:rounded-[20px] lg:rounded-[30px] min-w-34.75 md:min-w-auto md:w-[18.5%] aspect-[0.61/1] will-change-transform'
          style={{
            transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
          }}
        >
          <Image
            src='/images/hero-5.png'
            alt='hero-5'
            width={285}
            height={467}
            className='w-full h-full object-cover object-center rounded-[10px] md:rounded-[20px] lg:rounded-[30px]'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
