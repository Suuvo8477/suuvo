'use client'

import React, { useEffect, useRef } from 'react'
import Typography from '@/components/typography'
import ScrollStackCard from './ScrollStackCard'
import { FeatureCard } from '@/types'
import WishListButton from '../shared/WishListButton'

const CARDS: FeatureCard[] = [
  {
    title: 'Momentz',
    description:
      'Short-form videos with paid access, exclusive content experiences, and built-in monetization tools that help creators earn, grow, and engage audiences effectively.',
    featureTitle: 'Premium Video Monetization',
    features: [
      'Upload and monetize short videos with gated premium access',
      'Build exclusive audiences through paid content experiences',
      'Enable creators to earn directly from their videos'
    ],
    decorEmoji1: '/assets/emojis/upside-down-face.png',
    decorEmoji2: '/assets/emojis/star-eyes.png',
    decorText: 'Short-form content',
    mockupSrc: '/assets/images/feature-1.png',
    className: 'bg-linear-to-b from-gradient-blue-start to-gradient-blue-end',
    labelBgClass: 'bg-gradient-blue-start'
  },
  {
    title: 'LIVE & PK Battles',
    description:
      'Real-time creator battles where audiences engage, send gifts, and interact dynamically, creating high-energy entertainment experiences that boost visibility, competition, and engagement.',
    featureTitle: 'Live Competitive Engagement',
    features: [
      'Watch creators compete in real-time live battles',
      'Support through gifting and live audience reactions',
      'Interactive entertainment between creators and fans'
    ],
    decorEmoji1: '/assets/emojis/gift-box.png',
    decorEmoji2: '/assets/emojis/boom.png',
    decorText: 'Creator Battles',
    mockupSrc: '/assets/images/feature-2.png',
    className: 'bg-linear-to-b from-gradient-purple-start to-gradient-purple-end',
    labelBgClass: 'bg-gradient-purple-start'
  },
  {
    title: 'Suuvo Shops',
    description:
      'Multi-screen live selling platform for interactive shopping, real-time engagement, and seamless storefront experiences for creators and brands.',
    featureTitle: 'Real-Time Shopping Experience',
    features: [
      'Host live product showcases with real-time engagement',
      'Sell products directly during live streaming sessions',
      'Integrated checkout for seamless purchase experience'
    ],
    decorEmoji1: '/assets/emojis/cart-trolly.png',
    decorEmoji2: '/assets/emojis/finger-hand.png',
    decorText: 'Live Commerce',
    mockupSrc: '/assets/images/feature-3.png',
    className: 'bg-linear-to-b from-gradient-yellow-start to-gradient-yellow-end',
    labelBgClass: 'bg-gradient-yellow-start'
  },
  {
    title: 'Competitions & Games',
    description:
      'Global skill-based competitions where users compete, play, and earn rewards through engaging challenges, rankings, and real-time interactive gameplay experiences.',
    featureTitle: 'Competitive Experience',
    features: [
      'Join global tournaments and competitive skill-based challenges',
      'Compete in real-time interactive gaming experiences',
      'Earn rewards based on performance and rankings'
    ],
    decorEmoji1: '/assets/emojis/brain.png',
    decorEmoji2: '/assets/emojis/spinner.png',
    decorText: 'Skill Contests',
    mockupSrc: '/assets/images/feature-4.png',
    className: 'bg-linear-to-b from-gradient-pink-start to-gradient-pink-end',
    labelBgClass: 'bg-gradient-pink-start'
  },
  {
    title: 'Love Notes, True Bonds',
    description:
      'Express, connect, and build meaningful relationships through private messages, notes, and heartfelt gifts. Because every connection starts with a message.',
    featureTitle: 'Express Every Emotion',
    features: [
      'End-to-end encrypted chats with full control over conversations.',
      'Send love notes, messages, and emojis that speak from heart.',
      'Share virtual gifts in a respectful, and spam-free space.'
    ],
    decorEmoji1: '/assets/emojis/heart.png',
    decorEmoji2: '/assets/emojis/gift-box.png',
    decorText: 'Sweet Messages',
    mockupSrc: '/assets/images/feature-5.png',
    className: 'bg-linear-to-b from-gradient-teal-start to-gradient-teal-end',
    labelBgClass: 'bg-gradient-teal-start'
  },
  {
    title: 'Brand & Advertising',
    description:
      'Reach millions through immersive, creator-driven advertising designed for engagement, not interruption. Suuvo connects brands with real audiences through Momentz, LIVE, Shops, and AI-powered targeting.',
    featureTitle: 'Smart Brand Promotion',
    features: [
      'AI-powered targeting based on real user behavior and interests.',
      'Collaborate with creators and influencers that drive real impact.',
      'Ads that feel like content across Momentz, LIVE, Shops and Arena.'
    ],
    decorEmoji1: '/assets/emojis/speaker.png',
    decorEmoji2: '/assets/emojis/archary.png',
    decorText: 'Smart Reach',
    mockupSrc: '/assets/images/feature-6.png',
    className: 'bg-linear-to-b from-gradient-orange-start to-gradient-orange-end',
    labelBgClass: 'bg-gradient-orange-start'
  }
]

const ScrollStackSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const orangePathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = orangePathRef.current

    if (!path) return

    const totalLength = path.getTotalLength()

    path.style.strokeDasharray = `${totalLength}`
    path.style.strokeDashoffset = `-${totalLength}`
    path.style.transition = 'none'

    const handleScroll = () => {
      const rect = path.closest('svg')!.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const svgHeight = rect.height

      const start = windowHeight * 0.9
      const end = -svgHeight * 0.5

      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1)

      path.style.strokeDashoffset = `-${totalLength * (1 - progress)}`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id='features' className='w-full pb-2.5 sm:pb-10 lg:pb-20 relative'>
      {/* Section Header */}
      <div className='s-container mb-15'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <Typography variant='h2' className='text-[--color-text-primary] max-w-4xl'>
            Core Features for
            <br />
            Modern Social
          </Typography>
          <Typography variant='p3' className='text-[--color-text-primary] opacity-60 max-w-128.75'>
            A modern platform to share, explore, and interact freely with a simple, fast, and enjoyable experience
            without overwhelming users.
          </Typography>

          {/* Premium CTA Button */}
          <WishListButton className='w-full md:w-auto md:min-w-50' />
        </div>
      </div>

      {/* Stack of Cards */}
      <div ref={sectionRef} className='w-full max-w-283.5 mx-auto px-5 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col gap-0 lg:gap-10 relative'>
          {CARDS.map((card, i) => (
            <ScrollStackCard key={`${card.title}-${i}`} card={card} cardIndex={i} totalCards={CARDS.length} />
          ))}
        </div>
      </div>

      <div className='absolute left-0 bottom-140 max-w-full z-1 overflow-hidden'>
        <svg width='695' height='733' viewBox='0 0 695 733' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            ref={orangePathRef}
            opacity='0.4'
            d='M689.254 731.158C577.641 377.092 270.081 181.448 91.7905 174.512C-59.8345 168.612 3.92214 401.289 98.3254 334.344C161.44 289.587 227.882 94.7698 -20.8228 19.9785C-167.918 -24.263 -342.524 50.651 -342.524 50.651'
            stroke='url(#paint0_linear_2158_10187)'
            strokeWidth='12'
            strokeLinejoin='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_2158_10187'
              x1='158.572'
              y1='29.0817'
              x2='183.023'
              y2='634.081'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#1F88FF' />
              <stop offset='1' stopColor='#70B4FF' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default ScrollStackSection
