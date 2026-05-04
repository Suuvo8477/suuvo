'use client'

import React, { useState } from 'react'
import { FAQItem, type FAQ } from './FAQItem'
import Typography from '@/components/typography'

const faqs: FAQ[] = [
  {
    id: '01',
    question: 'What is this platform about?',
    answer:
      'This platform is designed to connect creators and users in a seamless experience. Discover features built for the modern digital landscape.'
  },
  {
    id: '02',
    question: 'How does it work?',
    answer:
      "We're currently in pre-launch phase. Join the waitlist to get early access, exclusive updates, and be among the first to experience the platform."
  },
  {
    id: '03',
    question: 'How can I join early?',
    answer: "Simply sign up with your email address on our waitlist page and you'll be notified as soon as we launch."
  },
  {
    id: '04',
    question: 'Can creators earn on the platform?',
    answer:
      'Yes! We offer multiple monetization options for creators including subscriptions, tips, and exclusive content gating.'
  },
  {
    id: '05',
    question: 'Is the platform free to use?',
    answer:
      'The platform offers a free tier with core features. Premium plans will be available for power users and creators.'
  },
  {
    id: '06',
    question: 'Which devices will be supported?',
    answer: 'The platform will be available on web, iOS, and Android devices from day one.'
  }
]

export default function FAQSection(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faqs' className='w-full bg-white s-container pb-15 lg:pt-12.5 lg:pb-35'>
      <div className='max-w-205 mx-auto'>
        <Typography variant='h2' className='text-center mb-8 sm:mb-10 md:mb-12'>
          Everything you might <br className='hidden sm:block' />
          be wondering about
        </Typography>

        <div className='flex flex-col gap-4 lg:gap-6'>
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} isOpen={openIndex === index} onToggle={() => toggle(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}
