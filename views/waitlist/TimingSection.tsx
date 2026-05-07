"use client"
import Typography from "@/components/typography"
import Image from "next/image"
import { useEffect, useState } from "react"

const TARGET_DATE = new Date(Date.now() + (15 * 86400 + 8 * 3600 + 42 * 60 + 36) * 1000)

const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0')

const TimingSection = () => {

  const [time, setTime] = useState({ d: '15', h: '08', m: '42', s: '36' })

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
        <div className='bg-[linear-gradient(90deg,#FFBA4E_0%,#FF45A5_100%)] p-16 rounded-[20px] flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <Image
              src='/images/timing.png'
              alt='Timing Section Image'
              width={132}
              height={132}
              className='object-contain'
            />
            <div>
              <Typography variant='h4' className='text-center mb-2'>
                Launch is coming soon!
              </Typography>
              <Typography variant='p3' className='max-w-68.25 text-center lg:text-left'>
                Reserve now and be among the first to experience Suuvo.
              </Typography>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center gap-1.5 lg:gap-3 rounded-2xl p-4'>
              {units.map((unit, i) => (
                <div key={unit.label} className='flex items-center gap-1.5 lg:gap-3'>
                  <div className='flex flex-col items-center justify-center gap-0.5 w-16 lg:w-22 h-17 lg:h-22.5 bg-white rounded-xl'>
                    <Typography variant='h4'>{unit.value}</Typography>
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
