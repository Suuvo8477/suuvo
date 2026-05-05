'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { AuthenticIcon, CommunityIcon, GlobalIcon, PersonalizedIcon } from './BenefitsIcons'
import Typography from '@/components/typography'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  delay?: string
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div className='bg-white rounded-3xl p-6.25 lg:p-7.5 shadow-[1px_6px_13px_0px_#0000000A,4px_23px_23px_0px_#00000008,9px_52px_32px_0px_#00000005,17px_92px_38px_0px_#00000003,26px_144px_41px_0px_#00000000]'>
    <span className='animate-perfect-bounce inline-block' style={{ animationDelay: delay }}>
      {icon}
    </span>
    <h3 className='text-[20px] lg:text-[24px] leading-7 tracking-[-0.03em] font-semibold text-[#1E1E1E] mb-2'>
      {title}
    </h3>
    <p className='text-[14px] lg:text-[18px] text-[#1E1E1E] font-medium leading-6 tracking-[-0.02em]'>{description}</p>
  </div>
)

export default function BenefitsSection(): React.ReactElement {
  return (
    <section className='s-container relative w-full bg-white py-12.5'>
      <div className='text-center mb-8 lg:mb-15'>
        <Typography variant='h2' className='mb-4 lg:mb-5.5'>{`Discover Suuvo's Benefits`}</Typography>
        <p className='text-[14px] lg:text-[16px] font-medium leading-6 tracking-[-0.02em] text-[#1E1E1E] max-w-lg mx-auto '>
          Unlock a world of meaningful connections, tailored experiences, and seamless social interaction.
        </p>
      </div>
      <div className=' mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center'>
        {/* first section — order-2 on mobile, order-1 on md+ */}
        <div className='flex flex-col gap-5 order-2 md:order-1'>
          <FeatureCard
            icon={<AuthenticIcon />}
            title='Authentic Connections'
            description='Build genuine relationships with like minded individuals.'
            delay='0ms'
          />
          <FeatureCard
            icon={<GlobalIcon />}
            title='Global Reach'
            description='Connect with people across 50+ countries effortlessly.'
            delay='300ms'
          />
        </div>

        {/* middle section — order-1 on mobile, order-2 on md+ */}
        <div className='flex justify-center items-end order-1 md:order-2'>
          {/* Phone mockup — top portion visible, bottom fades out */}
          {/* <div className='relative overflow-hidden w-75 h-105'>
            <div className='relative w-75 h-140'>
              <div className='absolute z-0 overflow-hidden rounded-[35px] top-3 inset-x-5 bottom-3'>
                <Image src='/images/demo-screenshot.png' alt='App screen' fill className='object-cover' />
              </div>

              <Image src='/images/mobile-frame.png' alt='Phone frame' fill className='object-contain z-10' priority />
            </div>
            <div className='absolute bottom-0 left-0 right-0 z-20 pointer-events-none h-10 bg-linear-to-b from-transparent to-white' />
          </div> */}
          <Image
            src='/images/mockup.png'
            alt='Phone mockup'
            width={300}
            height={600}
            className='w-auto h-auto'
            priority
          />
        </div>

        {/* third section — order-3 on both mobile and md+ */}
        <div className='flex flex-col gap-5 order-3'>
          <FeatureCard
            icon={<PersonalizedIcon />}
            title='Personalized Experience'
            description='Tailored content and recommendations just for you.'
            delay='600ms'
          />
          <FeatureCard
            icon={<CommunityIcon />}
            title='Community Support'
            description='Join thriving communities around your interests.'
            delay='900ms'
          />
        </div>
      </div>
    </section>
  )
}
