'use client'
import Typography from '@/components/typography'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-06-30T00:00:00')

const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0')

const TimingSection = () => {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' })

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000))
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.d, label: 'Days' },
    { value: time.h, label: 'Hours' },
    { value: time.m, label: 'Minutes' },
    { value: time.s, label: 'Seconds' }
  ]

  return (
    <section className='pt-18 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-27'>
      <div className='s-container'>
        <div className='bg-[linear-gradient(90deg,#FFBA4E_0%,#FF45A5_100%)] py-8 md:p-8 xl:p-16 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-2.5'>
          <div className='flex flex-col md:flex-row items-center gap-4 xl:gap-8 '>
            <div className='relative w-28 xl:w-33 h-28 xl:h-33 '>
              <Image src='/images/timing.png' alt='Timing Section Image' fill className=' object-contain' />
            </div>
            <div className='text-center md:text-left'>
              <Typography variant='h4' className='text-xl md:text-2xl mb-2'>
                Launch is coming soon!
              </Typography>
              <Typography variant='p3' className='max-w-68.25 lg:text-left'>
                Reserve now and be among the first to experience Suuvo.
              </Typography>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center gap-1.5 lg:gap-3 rounded-2xl p-4'>
              {units.map((unit, i) => (
                <div key={unit.label} className='flex items-center gap-1.5 lg:gap-3'>
                  <div className='flex flex-col items-center justify-center gap-0.5 w-14 sm:w-16 lg:w-22 h-14 sm:h-17 lg:h-22.5 bg-white rounded-xl'>
                    <Typography variant='h4' className='leading-[1.1]!'>
                      {unit.value}
                    </Typography>
                    <Typography variant='p4'>{unit.label}</Typography>
                  </div>
                  {i < units.length - 1 && (
                    <div className='flex flex-col items-center gap-2'>
                      <div className='w-1 h-1 rounded-full bg-white opacity-70' />
                      <div className='w-1 h-1 rounded-full bg-white opacity-70' />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimingSection
