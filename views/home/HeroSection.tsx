'use client'

import Button from '@/components/button'
import Typography from '@/components/typography'
import Image from 'next/image'
import React from 'react'

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
            <Button variant='primary' className='min-w-56.25 w-full lg:w-auto'>
              Join Waitlist
            </Button>
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
              <Typography variant='p2' className='lg:max-w-19.75'>
                2k+ Early Signups
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className=' grid justify-center'>
        <div className='mt-10 md:mt-14 lg:mt-18 min-w-max flex items-center justify-center gap-3 md:gap-6.5'>
          {/* Column 1 */}
          <div
            className='rounded-[10px] sm:rounded-[20px] md:rounded-[30px] min-w-34.75 md:w-71.25 lg:w-[20%] max-w-35 sm:max-w-60 md:max-w-85 aspect-[0.61/1] will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0)'
            }}
          >
            <Image
              src='/images/hero-1.png'
              alt='hero-1'
              width={285}
              height={467}
              className='w-full h-full object-cover object-center rounded-[10px] sm:rounded-[20px] md:rounded-[30px] '
            />
          </div>

          {/* Column 2 */}
          <div className='flex flex-col gap-3 md:gap-5.5 lg:w-[20%] max-w-35 sm:max-w-60 md:max-w-85'>
            {/* Image 2 */}
            <div
              className='min-w-35.75 md:w-73.25 lg:w-full max-w-35 sm:max-w-60 md:max-w-85 aspect-[0.87/1] rounded-[10px] sm:rounded-[20px] md:rounded-[30px] will-change-transform'
              style={{
                transform: 'translate3d(calc(var(--mx) * 45px), calc(var(--my) * 45px), 0)'
              }}
            >
              <Image
                src='/images/hero-2.png'
                alt='hero-2'
                height={336}
                width={293}
                className='rounded-[10px] sm:rounded-[20px] md:rounded-[30px] w-full h-full object-cover object-center'
              />
            </div>
            {/* Stats Card 1 */}
            <div
              className='min-w-35.75 md:w-73.25 aspect-[0.99/1] lg:w-full max-w-35 sm:max-w-60 md:max-w-85 flex flex-col justify-between px-3 py-3.5 sm:px-6 sm:py-7 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] bg-linear-to-b from-gradient-pink-start to-gradient-pink-end text-white will-change-transform'
              style={{
                transform: 'translate3d(calc(var(--mx) * 65px), calc(var(--my) * 65px), 0)'
              }}
            >
              <Typography variant='h2'>2k+</Typography>
              <div className='pt-4 border-t border-t-white/24'>
                <Typography variant='p1' className='max-w-50'>
                  Early signups on the waitlist
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div
            className='rounded-[10px] sm:rounded-[20px] md:rounded-[30px] min-w-34.75 md:w-71.25 lg:w-[20%] max-w-35 sm:max-w-60 md:max-w-85 aspect-[0.61/1] will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 25px), calc(var(--my) * 25px), 0)'
            }}
          >
            <Image
              src='/images/hero-3.png'
              alt='hero-3'
              width={285}
              height={467}
              className='w-full h-full object-cover object-center rounded-[10px] sm:rounded-[20px] md:rounded-[30px]'
            />
          </div>

          {/* Column 4 */}
          <div className='flex flex-col gap-3 md:gap-5.5 lg:w-[20%] max-w-35 sm:max-w-60 md:max-w-85'>
            {/* Stats Card 2 */}
            <div
              className='min-w-35.75 md:w-73.25 aspect-[.99/1] lg:w-full max-w-35 sm:max-w-60 md:max-w-85 flex flex-col justify-between px-3 py-3.5 sm:px-6 sm:py-7 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] bg-linear-to-b from-gradient-purple-start to-gradient-purple-end text-white will-change-transform'
              style={{
                transform: 'translate3d(calc(var(--mx) * 55px), calc(var(--my) * 55px), 0)'
              }}
            >
              <Typography variant='h2'>30+</Typography>
              <div className='pt-1 sm:pt-4 border-t border-t-white/24'>
                <Typography variant='p1' className='text-[10px]/[1.2]! sm:text-xl max-w-50'>
                  Private communities getting ready
                </Typography>
              </div>
            </div>

            {/* Image 4 */}
            <div
              className='min-w-35.75 md:w-73.25 aspect-[0.87/1] lg:w-full max-w-35 sm:max-w-60 md:max-w-85 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] will-change-transform'
              style={{
                transform: 'translate3d(calc(var(--mx) * 35px), calc(var(--my) * 35px), 0)'
              }}
            >
              <Image
                src='/images/hero-4.png'
                alt='hero-4'
                height={336}
                width={293}
                className='rounded-[10px] sm:rounded-[20px] md:rounded-[30px] w-full h-full object-cover object-center'
              />
            </div>
          </div>

          {/* Column 5 */}
          <div
            className='rounded-[10px] sm:rounded-[20px] md:rounded-[30px] min-w-34.75 md:w-71.25 lg:w-[20%] max-w-35 sm:max-w-60 md:max-w-85 aspect-[0.61/1] will-change-transform'
            style={{
              transform: 'translate3d(calc(var(--mx) * 40px), calc(var(--my) * 40px), 0)'
            }}
          >
            <Image
              src='/images/hero-5.png'
              alt='hero-5'
              width={285}
              height={467}
              className='w-full h-full object-cover object-center rounded-[10px] sm:rounded-[20px] md:rounded-[30px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
