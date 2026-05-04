import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'icon' | 'icon-outline'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const BASE_CLASSES =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none relative'

  const BASE_ICONS_CLASSES =
    'size-6 md:size-10 [&>svg]:size-3.5 [&>svg]:md:size-6 bg-linear-to-r from-[#EF9F22] to-[#DE127B] rounded-md md:rounded-lg'

  // secondary: `${BASE_CLASSES} h-[50px] px-4 py-3 rounded-full shadow-[9.25px_13.75px_2px_0_#FFDFDC21,0.75px_3px_7.7px_0_#FFD5D16E_inset,-1px_-3.25px_9.07px_0_#FFFFFF_inset]`,
  const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: `${BASE_CLASSES} h-[56px] p-4 rounded-full bg-[linear-gradient(90.38deg,_#EF9F22_0%,_#DE127B_50%,_#EF9F22_100%)] bg-[length:200%_100%] bg-[0%_50%] animate-gradient-move shadow-[0_3.71px_4.85px_0_#FF580027,0_10.27px_13.4px_0_#FF580038,0_24.72px_32.26px_0_#FF58002F,0_42px_107px_0_#FF580057,0_1px_3px_2px_#FFEDDB99_inset,0_1px_14px_2px_#FFEDDB99_inset] before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(90.38deg,_#EF9F22_0%,_#DE127B_50%,_#EF9F22_100%)] before:bg-[length:200%_100%] before:animate-gradient-move before:blur-2xl before:opacity-0 hover:before:opacity-80 before:transition-opacity before:duration-700 before:-z-10`,
    secondary: `${BASE_CLASSES} h-[50px] px-4 py-3 rounded-full border border-white/25 bg-[linear-gradient(165.47deg,_rgba(255,255,255,0.3)_31.19%,_rgba(254,254,255,0.4)_33.75%,_rgba(252,253,255,0.5)_36.32%,_rgba(251,252,255,0.6)_38.88%,_rgba(249,251,255,0.7)_41.44%,_rgba(248,250,255,0.8)_44%,_rgba(247,250,255,0.82)_47.61%,_rgba(247,249,255,0.84)_51.22%,_rgba(246,249,255,0.86)_54.83%,_rgba(245,249,255,0.88)_58.44%,_rgba(245,248,255,0.9)_62.05%,_rgba(247,250,255,0.76)_65.68%,_rgba(249,251,255,0.62)_69.31%,_rgba(251,252,255,0.48)_72.94%,_rgba(253,254,255,0.34)_76.56%,_rgba(255,255,255,0.2)_80.19%)] shadow-[9.25px_13.75px_2px_0_#FFDFDC21,0.75px_3px_7.7px_0_#FFD5D16E_inset,-1px_-3.25px_9.07px_0_#FFFFFF_inset]`,
    icon: `${BASE_CLASSES} ${BASE_ICONS_CLASSES} text-white`,
    'icon-outline': `${BASE_CLASSES} ${BASE_ICONS_CLASSES} after:content-[''] after:absolute after:inset-px after:z-1 after:bg-white after:rounded-[5px] after:md:rounded-[7px] [&>svg]:absolute [&>svg]:inset-1/2 [&>svg]:z-2 [&>svg]:-translate-x-1/2 [&>svg]:-translate-y-1/2`
  }

  const variantClasses = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary
  const combinedClasses = cn(variantClasses, className)

  return (
    <button {...props} className={combinedClasses}>
      {variant === 'primary' || variant === 'secondary' ? (
        <>
          <span
            className={`relative z-2 ${variant === 'primary' ? 'text-white' : ' bg-linear-to-r from-[#EF9F22] to-[#DE127B] bg-clip-text text-transparent'}`}
          >
            {children}
          </span>
          {variant === 'primary' && (
            <Image
              src='/images/dots.webp'
              alt='.'
              sizes='900px'
              fill
              className='top-1/2! left-1/2! -translate-x-1/2! -translate-y-1/2! h-[calc(100%-5px)]! w-[calc(100%-5px)]! z-10 rounded-full object-cover pointer-events-none opacity-60'
            />
          )}
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
