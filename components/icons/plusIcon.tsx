import { cn } from '@/lib/utils'

type PlusIconProps = React.SVGProps<SVGSVGElement> & {
  customColor?: boolean
}

const PlusIcon = ({ className, customColor = false, ...props }: PlusIconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        d='M12 4V20M20 12H4'
        stroke={customColor ? 'currentColor' : 'url(#paint0_linear_2158_17753)'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient id='paint0_linear_2158_17753' x1='4' y1='12' x2='20' y2='12' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EF9F22' />
          <stop offset='1' stopColor='#DE127B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PlusIcon
