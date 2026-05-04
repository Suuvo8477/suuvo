import React from 'react'
import { PlusIcon, MinusIcon } from '@/components/icons'

type ToggleButtonProps = {
  isOpen: boolean
}

export function ToggleButton({ isOpen }: ToggleButtonProps): React.ReactElement {
  return (
    <div
      className='shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-[10px] transition-all duration-300'
      style={{
        padding: isOpen ? '0' : '1px',
        background: 'linear-gradient(135deg, #EF9F22, #DE127B)'
      }}
    >
      <div
        className='w-full h-full flex items-center justify-center transition-all duration-300'
        style={{
          borderRadius: isOpen ? '10px' : '8.5px',
          background: isOpen ? 'transparent' : 'white'
        }}
      >
        {isOpen ? (
          <MinusIcon className='w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white' />
        ) : (
          <PlusIcon className='w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-4.5 md:h-4.5' />
        )}
      </div>
    </div>
  )
}
