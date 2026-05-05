import React, { useRef, useEffect, useState } from 'react'
import { ToggleButton } from './ToggleButton'

export type FAQ = {
  id: string
  question: string
  answer: string
}

type FAQItemProps = {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

export function FAQItem({ faq, isOpen, onToggle }: FAQItemProps): React.ReactElement {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className='bg-white rounded-2xl border border-gray-100 shadow-[0_8px_17px_0px_rgba(0,0,0,0.04),0_32px_32px_0px_rgba(0,0,0,0.03)] px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5'>
      <button onClick={onToggle} className='w-full flex items-center justify-between gap-3 text-left cursor-pointer'>
        <div className='flex items-center gap-2 min-w-0'>
          <span className='text-base sm:text-lg md:text-[20px] font-medium text-[#1E1E1E] leading-snug'>
            {faq.question}
          </span>
        </div>
        <ToggleButton isOpen={isOpen} />
      </button>

      <div
        style={{
          height: height + 'px',
          overflow: 'hidden',
          transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div ref={contentRef} className='mt-2 pr-2 sm:pr-6 md:pr-10 pb-1'>
          <p className='text-sm sm:text-[15px] md:text-base text-[#787878] leading-6'>{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}
